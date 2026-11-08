import { airtableRejectedAttribution, attributionAirtableFields } from "@/lib/attribution";

export type LeadRecord = {
  name: string;
  email: string;
  phone: string;
  state: string;
  vaccineType: string;
  injuryType: string;
  injuryDate: string;
  description: string;
  consent: boolean;
  /** Raw first-touch values from the browser. Missing or invalid data is ignored. */
  attribution?: unknown;
};

class AirtableRequestError extends Error {
  readonly status: number;
  readonly body: string;

  constructor(status: number, body: string) {
    super(`Airtable API error ${status}: ${body}`);
    this.name = "AirtableRequestError";
    this.status = status;
    this.body = body;
  }
}

function coreFields(data: LeadRecord): Record<string, unknown> {
  return {
    Name: data.name,
    Email: data.email,
    Phone: data.phone,
    State: data.state,
    "Vaccine Type": data.vaccineType,
    "Injury Type": data.injuryType,
    "Injury Date": data.injuryDate || undefined,
    Description: data.description,
    Consent: data.consent,
    Status: "New",
  };
}

async function postLead(fields: Record<string, unknown>): Promise<void> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Leads";

  if (!apiKey || !baseId) {
    throw new Error("Missing Airtable configuration. Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID in .env.local");
  }

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new AirtableRequestError(response.status, errorBody);
  }
}

export async function createLead(data: LeadRecord): Promise<void> {
  let attributionFields: Record<string, string> = {};
  try {
    attributionFields = attributionAirtableFields(data.attribution);
  } catch {
    attributionFields = {};
  }

  try {
    await postLead({ ...coreFields(data), ...attributionFields });
  } catch (err) {
    const canRetry =
      Object.keys(attributionFields).length > 0 &&
      err instanceof AirtableRequestError &&
      airtableRejectedAttribution(err.status, err.body);
    if (!canRetry) throw err;
    console.warn("Saving lead without attribution fields after Airtable rejected them.");
    await postLead(coreFields(data));
  }
}

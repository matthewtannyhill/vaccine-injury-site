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
};

export async function createLead(data: LeadRecord): Promise<void> {
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
    body: JSON.stringify({
      fields: {
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
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Airtable API error ${response.status}: ${errorBody}`);
  }
}

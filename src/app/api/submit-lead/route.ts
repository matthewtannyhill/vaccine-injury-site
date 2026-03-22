import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/airtable";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, state, vaccineType, injuryType, injuryDate, description, consent } = body;

  // Basic validation
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
    return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
  }
  if (!state || typeof state !== "string") {
    return NextResponse.json({ error: "State is required" }, { status: 400 });
  }
  if (!vaccineType || typeof vaccineType !== "string") {
    return NextResponse.json({ error: "Vaccine type is required" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Consent is required" }, { status: 400 });
  }

  try {
    await createLead({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      state: String(state),
      vaccineType: String(vaccineType),
      injuryType: injuryType ? String(injuryType) : "",
      injuryDate: injuryDate ? String(injuryDate) : "",
      description: description ? String(description).trim() : "",
      consent: Boolean(consent),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}

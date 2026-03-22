import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.AIRTABLE_API_KEY ?? "";
  const baseId = process.env.AIRTABLE_BASE_ID ?? "";
  const table = process.env.AIRTABLE_TABLE_NAME ?? "";
  return NextResponse.json({
    key_prefix: key.slice(0, 10),
    key_suffix: key.slice(-4),
    key_length: key.length,
    baseId,
    table,
  });
}

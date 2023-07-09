import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      result: await sql`SELECT image_data FROM images WHERE id = 1;`,
    });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const image = await req.json();
    return NextResponse.json({
      result:
        await sql`INSERT INTO images (image_data) VALUES (${image.image_data}) RETURNING id;`,
    });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}

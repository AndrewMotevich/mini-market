import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

type Params = { params: { id: string } };

export async function GET(req: NextRequest, { params }: Params) {
  try {
    return NextResponse.json({
      result: await sql`SELECT image_data FROM images WHERE id = ${params.id}`,
    });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const image = await req.json();
    return NextResponse.json({
      result:
        await sql`UPDATE images SET image_data = ${image.image_data} WHERE id = ${params.id}`,
    });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    return NextResponse.json({
      result: await sql`DELETE FROM images WHERE id = ${params.id}`,
    });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}

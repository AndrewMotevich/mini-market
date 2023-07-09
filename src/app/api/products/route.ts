import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      result: await kv.json.get("products", "$"),
    });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const product = await req.json();
    return NextResponse.json({
      result: await kv.json.set("products", `$.${product.id}`, product as {}),
      product: product,
    });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}

// import { kv } from "@vercel/kv";
// import { NextRequest, NextResponse } from "next/server";
// type Params = { params: { id: string } };

// export async function GET(req: NextRequest, { params }: Params) {
//   try {
//     return NextResponse.json({
//       result: await kv.json.get("products", `$.${params.id}`),
//     });
//   } catch (error) {
//     return new Response((error as Error).message, { status: 500 });
//   }
// }

// export async function PUT(req: NextRequest, { params }: Params) {
//   try {
//     const product = await req.json();
//     return NextResponse.json({
//       result: await kv.json.set("products", `$.${params.id}`, {
//         id: params.id,
//         ...(product as {}),
//       }),
//       product: product,
//     });
//   } catch (error) {
//     return new Response((error as Error).message, { status: 500 });
//   }
// }

// export async function DELETE(req: NextRequest, { params }: Params) {
//   try {
//     return NextResponse.json({
//       result: await kv.json.del("products", `$.${params.id}`),
//     });
//   } catch (error) {
//     return new Response((error as Error).message, { status: 500 });
//   }
// }

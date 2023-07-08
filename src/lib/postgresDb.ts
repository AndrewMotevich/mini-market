import { PostgresResponse } from "@/models/postgresResponse";
import { sql } from "@vercel/postgres";

export async function getImageFromDbDirectly(id: string) {
  return await sql`SELECT image_data FROM images WHERE id = ${id}`;
}

export async function addImage(image: string): Promise<PostgresResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/images`, {
    method: "POST",
    body: JSON.stringify({ image_data: image }),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getImage(id: string): Promise<PostgresResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/images/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function updateImage(
  image: string,
  id: string
): Promise<PostgresResponse> {
  console.log(image.length);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/images/${id}`,
    { method: "PUT", body: JSON.stringify({ image_data: image }) }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function deleteImage(id: string): Promise<PostgresResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/images/${id}`,
    { method: "DELETE" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

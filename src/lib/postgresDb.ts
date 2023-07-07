import { sql } from "@vercel/postgres";

export async function createImageFromDb(image: string) {
  return await sql`INSERT INTO images (image_data) VALUES (${image})`;
}

export async function getImageFromDb(id: string) {
  return await sql`SELECT image_data FROM images WHERE id = ${id}`;
}

export async function updateImageFromDb(id: string, image: string) {
  return await sql`UPDATE images WHERE SET image_data = ${image} WHERE id = ${id}`;
}

export async function deleteImageFromDb(id: string) {
  return await sql`DELETE FROM images WHERE id = ${id}`;
}

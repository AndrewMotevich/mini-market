import { IProduct } from "@/models/product.model";

export async function addProductToDb(product: IProduct) {
  return await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`,
    {
      method: "POST",
      body: JSON.stringify(product),
    }
  );
}

export async function getProduct(id: string): Promise<{
  result: { [key: string]: IProduct };
}> {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getProductsFromDb(): Promise<Response> {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

export async function updateProductInDb(product: IProduct) {
  return await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${product.id}`,
    {
      method: "PUT",
      body: JSON.stringify(product),
    }
  );
}

export async function deleteProductInDb(id: string) {
  return await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${id}`,
    {
      method: "DELETE",
    }
  );
}

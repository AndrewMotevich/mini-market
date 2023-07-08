import { IProduct } from "@/models/product.model";

export async function addProductToDb(product: IProduct) {
  return await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`, {
    method: "POST",
    body: JSON.stringify(product),
  });
}

export async function updateProductInDb(product: IProduct) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${product.id}`,
    {
      method: "PUT",
      body: JSON.stringify(product),
    }
  );
}

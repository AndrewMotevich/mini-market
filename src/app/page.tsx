import ProductList from "@/components/productList/ProductList";

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <ProductList />
    </>
  );
}

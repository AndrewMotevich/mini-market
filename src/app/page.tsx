import ProductTable from "@/components/productTable/ProductTable";

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <ProductTable />
    </>
  );
}

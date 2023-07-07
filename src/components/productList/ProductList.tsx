import { IProduct } from "@/models/product.model";
import React from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = async () => {
  const data = await getProducts();
  return (
    <div className={styles.productListWrapper}>
      <h2>Mini Market products:</h2>
      <div className={styles.productListContainer}>
        {data.result.map((products) => {
          return Object.keys(products).map((key, index) => (
            <ProductCard key={index} product={products[key]} />
          ));
        })}
      </div>
    </div>
  );
};

async function getProducts(): Promise<{ result: { [key: string]: IProduct }[] }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default ProductList;

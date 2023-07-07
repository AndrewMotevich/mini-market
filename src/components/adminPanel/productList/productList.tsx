"use client";
import { IProduct } from "@/models/product.model";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./ProductList.module.scss";
import ProductListItem from "../productListItem/ProductListItem";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";

const ProductList = () => {
  const [products, setProducts] = useState<ReactNode[]>();
  const [response, isLoading] = useAsyncCallback(async () => {
    const data = await getProducts();
    const products = data.result.map((products) => {
      return Object.keys(products).map((key, index) => (
        <ProductListItem key={index} product={products[key]} />
      ));
    });
    setProducts(products);
  });

  useEffect(() => {
    response();
  }, []);

  return (
    <div className={styles.productListWrapper}>
      <h2>List of Mini Market products:</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.productListContainer}>{products}</div>
      )}
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

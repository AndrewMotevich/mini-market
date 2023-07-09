import { IProduct } from "@/models/product.model";
import React from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./ProductTable.module.scss";
import { kv } from "@vercel/kv";

const ProductTable = async () => {
  const data: { [key: string]: IProduct } = await kv.json.get("products", "$");
  return (
    <div className={styles.productTableWrapper}>
      <h2>Mini Market products:</h2>
      <div className={styles.productTableContainer}>
        {Object.keys(data).map((key, index) => (
          <ProductCard key={index} product={data[`${key}`]} />
        ))}
      </div>
    </div>
  );
};

export default ProductTable;

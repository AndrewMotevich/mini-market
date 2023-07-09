import { IProduct } from "@/models/product.model";
import React from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./ProductTable.module.scss";
import { getProductsFromDb } from "@/lib/kvDb";

const ProductTable = async () => {
  const data = await getProductsFromDb();
  return (
    <div className={styles.productTableWrapper}>
      <h2>Mini Market products:</h2>
      <div className={styles.productTableContainer}>
        {data.result.map((products) => {
          return Object.keys(products).map((key, index) => (
            <ProductCard key={index} product={products[`${key}`]} />
          ));
        })}
      </div>
    </div>
  );
};

export default ProductTable;

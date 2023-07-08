"use client";
import { IProduct } from "@/models/product.model";
import React, { useEffect, useState } from "react";
import styles from "./ProductList.module.scss";
import ProductListItem from "../productListItem/ProductListItem";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";
import ModalWindow from "@/components/modal-window/ModalWindow";
import ProductForm from "../productForm/ProductForm";
import { signOut } from "next-auth/react";

const ProductList = () => {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [response, isLoading] = useAsyncCallback(async () => {
    const data = await getProducts();
    data.result.map((response) => {
      const products = Object.keys(response).map((key) => response[key]);
      setProducts(products);
    });
  });

  useEffect(() => {
    response();
  }, []);

  function addProduct(product: IProduct) {
    setProducts([...products, product]);
  }

  function deleteProduct(id: string) {
    setProducts(products.filter((product) => product.id !== id));
  }

  function updateProduct(newProduct: IProduct) {
    setProducts(
      products.map((product) => {
        if (newProduct.id === product.id) return newProduct;
        return product;
      })
    );
  }

  return (
    <div className={styles.productListWrapper}>
      <div className={styles.buttonWrapper}>
        <button className="button-7" onClick={() => signOut()}>
          LogOut
        </button>
        <button className="button-7" onClick={() => setModal(true)}>
          Add new product
        </button>
      </div>
      <h2>List of Mini Market products:</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.productListContainer}>
          {products.map((product, index) => {
            return (
              <ProductListItem
                key={index}
                product={product}
                update={updateProduct}
                delete={deleteProduct}
              />
            );
          })}
        </div>
      )}
      <ModalWindow visible={modal} setVisible={setModal}>
        <div className={styles.formWrapper}>
          <h2>Add new product</h2>
          <ProductForm action={addProduct} modal={setModal} />
        </div>
      </ModalWindow>
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

"use client";
import React from "react";
import styles from "./Login.module.scss";
import { signIn, useSession } from "next-auth/react";
import ProductList from "../productList/productList";

const LoginComponent = () => {
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <div className={styles.adminPanelWrapper}>
          <ProductList />
        </div>
      ) : (
        <div className={styles.greetingsWrapper}>
          <h2>Greetings master!</h2>
          <p>Here you can manage you Mini Market data</p>
          <h3>This page include all CRUD functionality:</h3>
          <ul>
            <li>Create products</li>
            <li>Update products</li>
            <li>Get products</li>
            <li>Delete products</li>
          </ul>
          <h3>Please login!</h3>
          <button className="button-7" onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default LoginComponent;

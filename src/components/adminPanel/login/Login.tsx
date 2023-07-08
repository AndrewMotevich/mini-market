"use client";
import React, { useState } from "react";
import styles from "./Login.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import ProductList from "../productList/productList";
import ProductForm from "../productForm/ProductForm";
import ModalWindow from "@/components/modal-window/ModalWindow";

const LoginComponent = () => {
  const { data } = useSession();
  const [modal, setModal] = useState(false);

  return (
    <>
      {data?.user ? (
        <div className={styles.adminPanelWrapper}>
          <div className={styles.buttonWrapper}>
            <button className="button-7" onClick={() => signOut()}>
              LogOut
            </button>
            <button className="button-7" onClick={() => setModal(true)}>
              Add new product
            </button>
          </div>
          <ModalWindow visible={modal} setVisible={setModal}>
            <div className={styles.formWrapper}>
              <h2>Add new product</h2>
              <ProductForm />
            </div>
          </ModalWindow>
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

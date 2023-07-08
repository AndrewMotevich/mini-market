"use client";
import React, { useState } from "react";
import styles from "./ProductListItem.module.scss";
import { IProduct } from "@/models/product.model";
import ModalWindow from "@/components/modal-window/ModalWindow";
import ProductForm from "../productForm/ProductForm";
import { AiOutlineDelete } from "react-icons/ai";
type Props = {
  product: IProduct;
};

const ProductListItem = (props: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.listItemWrapper} onClick={() => setModal(true)}>
      <h2>{props.product.title}</h2>
      <AiOutlineDelete className={styles.deleteIcon} />
      <ModalWindow visible={modal} setVisible={setModal}>
        <ProductForm product={props.product} />
      </ModalWindow>
    </div>
  );
};

export default ProductListItem;

"use client";
import React, { useState } from "react";
import styles from "./ProductListItem.module.scss";
import { IProduct } from "@/models/product.model";
import ModalWindow from "@/components/modal-window/ModalWindow";
import ProductForm from "../productForm/ProductForm";
import { AiOutlineDelete } from "react-icons/ai";
type Props = {
  product: IProduct;
  update: (product: IProduct) => void;
  delete: (id: string) => void;
};

const ProductListItem = (props: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.listItemWrapper} onClick={() => setModal(true)}>
      <h2>{props.product.title}</h2>
      <AiOutlineDelete
        className={styles.deleteIcon}
        onClick={(event) => {
          event.stopPropagation();
          props.delete(props.product.id);
        }}
      />
      <ModalWindow visible={modal} setVisible={setModal}>
        <div className={styles.formWrapper}>
          <h2 className={styles.modalTitle}>Edit product</h2>
          <ProductForm product={props.product} action={props.update} modal={setModal} />
        </div>
      </ModalWindow>
    </div>
  );
};

export default ProductListItem;

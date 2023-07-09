"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import ModalWindow from "@/components/modal-window/ModalWindow";
import ProductForm from "../productForm/ProductForm";
import styles from "./ProductListItem.module.scss";
import { deleteImage } from "@/lib/postgresDb";
import { deleteProductInDb } from "@/lib/kvDb";
import { IProduct } from "@/models/product.model";

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
          deleteImage(props.product.imageId);
          deleteProductInDb(props.product.id);
        }}
      />
      <ModalWindow visible={modal} setVisible={setModal}>
        <div className={styles.formWrapper}>
          <h2 className={styles.modalTitle}>Edit product</h2>
          <ProductForm
            product={props.product}
            action={props.update}
            modal={setModal}
          />
        </div>
      </ModalWindow>
    </div>
  );
};

export default ProductListItem;

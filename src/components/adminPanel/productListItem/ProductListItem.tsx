import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProductListItem.module.scss";
import { IProduct } from "@/models/product.model";
import { getImageFromDb } from "@/lib/postgresDb";
import { NO_IMAGE_QUERY } from "@/constants/constants";
type Props = {
  product: IProduct;
};

const ProductListItem = async (props: Props) => {
  return (
    <div className={styles.listItemWrapper}>
      <h2>{props.product.title}</h2>
      <button>Delete</button>
    </div>
  );
};

export default ProductListItem;

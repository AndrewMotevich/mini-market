import React from "react";
import Image from "next/image";
import styles from "./ProductCard.module.scss";
import { NO_IMAGE_QUERY } from "../../constants/constants";
import { getImageFromDb } from "@/lib/postgresDb";
import { IProduct } from "@/models/product.model";
type Props = {
  product: IProduct;
};

const ProductCard = async (props: Props) => {
  const { rows } = await getImageFromDb(props.product.imageId);

  return (
    <div className={styles.cardWrapper}>
      <h3>{props.product.title}</h3>
      <div className={styles.imageWrapper}>
        <Image
          src={rows[0].image_data || NO_IMAGE_QUERY}
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        ></Image>
      </div>
      <p className={styles.description}>{props.product.description}</p>
    </div>
  );
};

export default ProductCard;

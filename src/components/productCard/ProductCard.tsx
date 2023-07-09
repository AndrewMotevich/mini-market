import React from "react";
import Image from "next/image";
import styles from "./ProductCard.module.scss";
import { NO_IMAGE_QUERY } from "../../constants/constants";
import { IProduct } from "@/models/product.model";
import Link from "next/link";
import { sql } from "@vercel/postgres";
type Props = {
  product: IProduct;
};

const ProductCard = async (props: Props) => {
  const { rows } =
    await await sql`SELECT image_data FROM images WHERE id = ${props.product.id}`;

  return (
    <Link href={"product/" + props.product.id} className={styles.cardWrapper}>
      <h3>{props.product.title}</h3>
      <div className={styles.imageWrapper}>
        <Image
          src={rows[0].image_data || NO_IMAGE_QUERY}
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        ></Image>
      </div>
      <p className={styles.price}>Price: {props.product.price} $</p>
    </Link>
  );
};

export default ProductCard;

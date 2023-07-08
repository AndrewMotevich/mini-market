import { getProduct } from "@/lib/kvDb";
import { getImageFromDbDirectly } from "@/lib/postgresDb";
import React from "react";
import Image from "next/image";
import { NO_IMAGE_QUERY } from "@/constants/constants";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params }: Props) => {
  const result = await getProduct(params.id);
  const product = result.result[0];
  const { rows } = await getImageFromDbDirectly(product.imageId);

  return (
    <div className="products-wrapper">
      <div className="image-wrapper">
        <Image
          src={rows[0].image_data || NO_IMAGE_QUERY}
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        ></Image>
      </div>
      <h3>Product name: {product.title}</h3>
      <h3>Description: </h3>
      <p>{product.description}</p>
      <h3>Price: {product.price} $</h3>
      <button className="button-7">
        <Link href="/contacts">By product</Link>
      </button>
    </div>
  );
};

export default ProductPage;

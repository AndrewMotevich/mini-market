"use client";
import React, { useEffect, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

import MyInputFile from "./input-file/MyInputFile";
import MyInput from "./input-text/MyInputText";

import styles from "./ProductForm.module.scss";
import { IProduct } from "@/models/product.model";
import { NO_IMAGE_QUERY } from "@/constants/constants";
type Props = {
  product?: IProduct;
  modal: React.Dispatch<React.SetStateAction<boolean>>;
  action: (product: IProduct) => void;
};

const ProductForm = ({ product, action, modal }: Props) => {
  const image = useRef() as React.RefObject<HTMLImageElement>;
  const { register, reset, handleSubmit } = useForm();

  const title = register<string>("title", { required: true });
  const description = register("description", { required: true });
  const price = register("price", { required: true });
  const img = register("img", { required: true });

  const onSubmit = (data: FieldValues) => {
    const getId = product ? product.id : Date.now().toString();
    const newProduct: IProduct = {
      id: getId,
      title: data.title,
      description: data.description,
      imageId: "1",
      price: Number(data.price),
    };
    console.log(newProduct);
    action(newProduct);

    const file = data.img.item(0);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // product.img = reader.result as string;
      if (!product) addProductToDb(newProduct);
      else updateProductInDb(newProduct);
      (image.current as HTMLImageElement).src = "";
      (image.current as HTMLImageElement).classList.add(styles.hide);
    };
    reset({ title: "", img: "", description: "", price: "" });
    modal(false);
  };

  useEffect(() => {
    if (!product) {
      return;
    }
    reset({
      title: product.title,
      description: product.description,
      price: product.price,
      img: "",
    });
  }, [product]);

  return (
    <div className={styles.formWrapper}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <MyInput
          label="Title"
          type="text"
          inputRef={title.ref}
          name={title.name}
          onChange={title.onChange}
        />
        <label>
          <strong>Description:</strong>
          <textarea
            rows={5}
            maxLength={255}
            ref={description.ref}
            name={description.name}
            onChange={description.onChange}
          />
        </label>
        <MyInput
          label="Price"
          type="number"
          inputRef={price.ref}
          name={price.name}
          onChange={price.onChange}
        />
        <MyInputFile
          inputRef={img.ref}
          name={img.name}
          onChange={img.onChange}
          reference={image}
          id={product ? product.id : "add-new-product"}
          product={product ? product : undefined}
        />
        <button type="submit" className={styles.submitButton + " button-7"}>
          Submit
        </button>
      </form>
    </div>
  );
};

async function addProductToDb(product: IProduct) {
  return await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`, {
    method: "POST",
    body: JSON.stringify(product),
  });
}

async function updateProductInDb(product: IProduct) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${product.id}`,
    {
      method: "PUT",
      body: JSON.stringify(product),
    }
  );
}

export default ProductForm;

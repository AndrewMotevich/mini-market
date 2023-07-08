"use client";
import React, { useRef } from "react";
import styles from "./ProductForm.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import MyInputFile from "./input-file/MyInputFile";
import MyInputText from "./input-text/MyInputText";
import { IProduct } from "@/models/product.model";

const ProductForm = () => {
  const image = useRef() as React.RefObject<HTMLImageElement>;
  const { register, reset, handleSubmit } = useForm();

  const title = register("title", { required: true });
  const description = register("description", { required: true });
  const img = register("img", { required: true });

  const onSubmit = (data: FieldValues) => {
    const product: IProduct = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      imageId: "1",
    };
    const file = data.img.item(0);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // product.img = reader.result as string;
      addProduct(product);
      console.log(product);
      (image.current as HTMLImageElement).src = "";
      (image.current as HTMLImageElement).classList.add(styles.hide);
      reset({ title: "", img: "", description: "" });
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyInputText
          inputRef={title.ref}
          name={title.name}
          onChange={title.onChange}
        />
        <MyInputText
          inputRef={description.ref}
          name={description.name}
          onChange={description.onChange}
        />
        <MyInputFile
          inputRef={img.ref}
          name={img.name}
          onChange={img.onChange}
          reference={image}
        />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

async function addProduct(product: IProduct) {
  return await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`, {
    method: "POST",
    body: JSON.stringify(product),
  });
}

export default ProductForm;

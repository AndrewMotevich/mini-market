"use client";
import React, { useEffect, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

import MyInputFile from "./input-file/MyInputFile";
import MyInput from "./input-text/MyInputText";

import styles from "./ProductForm.module.scss";
import { IProduct } from "@/models/product.model";
import { addProductToDb, updateProductInDb } from "@/lib/kvDb";
import { addImage, updateImage } from "@/lib/postgresDb";
type Props = {
  product?: IProduct;
  modal: React.Dispatch<React.SetStateAction<boolean>>;
  action: (product: IProduct) => void;
};

const ProductForm = ({ product, action, modal }: Props) => {
  const image = useRef() as React.RefObject<HTMLImageElement>;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleError = (errors: unknown) => {
    console.log(errors);
  };

  const registerOptions = {
    title: { required: "Title is required" },
    price: { required: "Price is required" },
    description: {
      required: "Description is required",
      maxLength: {
        value: 255,
        message: "Description must be maximum 255 characters",
      },
    },
  };

  const title = register<string>("title", registerOptions.title);
  const description = register("description", registerOptions.title);
  const price = register("price", registerOptions.price);
  const img = register("img", { required: true });

  const onSubmit = (data: FieldValues) => {
    let imageId = "1";
    const getId = product ? product.id : Date.now().toString();
    const newProduct: IProduct = {
      id: getId,
      title: data.title,
      description: data.description,
      imageId: imageId,
      price: Number(data.price),
    };

    const file = data.img.item(0);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let imageStr = reader.result as string;
      if (!product) {
        addImage(imageStr).then((res) => {
          imageId = res.result.rows[0].id.toString();
          addProductToDb({ ...newProduct, imageId: imageId });
        });
      } else {
        console.log(imageStr.length);
        updateImage(imageStr, product.imageId).then(() => {
          updateProductInDb({ ...newProduct, imageId: product.imageId });
        });
      }
      (image.current as HTMLImageElement).src = "";
      (image.current as HTMLImageElement).classList.add(styles.hide);
    };
    action(newProduct);
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
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(onSubmit, handleError)}
      >
        <MyInput
          label="Title"
          type="text"
          inputRef={title.ref}
          name={title.name}
          onChange={title.onChange}
        />
        <small className="text-danger">
          {errors?.title && (errors.title.message as string)}
        </small>
        <label>
          <strong>
            Description<span>*</span>:
          </strong>
          <textarea
            rows={5}
            maxLength={255}
            ref={description.ref}
            name={description.name}
            onChange={description.onChange}
          />
        </label>
        <small className="text-danger">
          {errors?.description && (errors.description.message as string)}
        </small>
        <MyInput
          label="Price"
          type="number"
          inputRef={price.ref}
          name={price.name}
          onChange={price.onChange}
        />
        <small className="text-danger">
          {errors?.price && (errors.price.message as string)}
        </small>
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

export default ProductForm;

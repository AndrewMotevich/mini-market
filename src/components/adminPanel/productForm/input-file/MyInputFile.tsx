import styles from "./MyInput.module.scss";
import { ChangeHandler, RefCallBack } from "react-hook-form";
type props = {
  inputRef: RefCallBack;
  name: string;
  onChange: ChangeHandler;
  reference: React.RefObject<HTMLImageElement>;
};

import React from "react";
import Image from "next/image";
import { NO_IMAGE_QUERY } from "@/constants/constants";

const MyInputFile = ({ inputRef, name, onChange, reference }: props) => {
  const addImgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgInput: HTMLInputElement =
      event.target as unknown as HTMLInputElement;
    const file = imgInput.files?.item(0);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      (reference.current as HTMLImageElement).src = reader.result as string;
      (reference.current as HTMLImageElement).className = styles.imgWrapper;
    };
    return;
  };

  return (
    <div className={styles.wrapper}>
      <p>
        <strong>Add image</strong>
      </p>
      <div className={styles.container}>
        <label
          className={styles.label}
          id="add-img-label"
          htmlFor="add-single-img"
        >
          +
          <Image
            src={NO_IMAGE_QUERY}
            ref={reference}
            className={styles.hide}
            layout="fill"
            objectFit="cover"
            alt="img"
          />
        </label>
        <input
          className={styles.input}
          type="file"
          id="add-single-img"
          accept="image/jpeg"
          ref={inputRef}
          name={name}
          onChange={(event) => {
            addImgHandler(event);
            onChange(event);
          }}
        />
      </div>
    </div>
  );
};

export default MyInputFile;

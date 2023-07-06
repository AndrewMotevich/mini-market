import React from "react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { convertImage } from "@/utils/convertImage";

const CreateProductForm = () => {
  const smileImage = `data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7`;
  const [image, setImage] = useState(smileImage);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files[0];

    convertImage(file).then((res) => setImage(res as string));
  }

  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(event) => handleChange(event)}
      ></input>
      <Image src={image} width={300} height={300} alt="Picture of the author" />
      <hr />
      <p>{image}</p>
    </div>
  );
};

export default CreateProductForm;

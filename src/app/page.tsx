import { getImageFromDb } from "@/lib/postgresDb";
import Image from "next/image";

export const revalidate = 60;

export default async function Page() {
  const { rows } = await getImageFromDb("1");

  return (
    <>
      <h1>Mini Market</h1>
      {rows.map((row, index) => {
        return (
          <Image
            src={row.image_data}
            width={300}
            height={300}
            alt="Picture of the author"
            key={index}
          ></Image>
        );
      })}
    </>
  );
}

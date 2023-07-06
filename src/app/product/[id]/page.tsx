import React from "react";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  // const res = await fetch(
  //   `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/vacancies/${id}`
  // );
  // if (res.status !== 200) {
  //   throw new Error("Failed to fetch data");
  // }
  // return res.json();
}

const Vacancy = async ({ params }: Props) => {
  const data = await getData(params.id);
  return (
    <div>
      <div>{params.id}</div>
    </div>
  );
};

export default Vacancy;

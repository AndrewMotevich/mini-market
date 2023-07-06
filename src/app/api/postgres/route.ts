import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const client = await db.connect();

  // try {
  // await client.sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
  //   const names = ["Fiona", "Lucy"];
  //   await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
  // } catch (error) {
  //   return NextResponse.json({ error });
  // }

  // const pets = await client.sql`SELECT * FROM Pets;`;
  // return NextResponse.json({ pets: pets.rows });
}

// import { drizzle } from "drizzle-orm/vercel-postgres";
// import { sql } from "@vercel/postgres";
// import {
//   pgTable,
//   serial,
//   text,
//   timestamp,
//   uniqueIndex,
// } from "drizzle-orm/pg-core";

// Use this object to send drizzle queries to your DB
// const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
// const ExampleTable = pgTable(
//   "pets",
//   {
//     name: text("name").notNull(),
//     owner: text("owner").notNull(),
//   }

// );

// const getExampleTable = async () => {
//   return await db.select().from(ExampleTable);
// };

// export async function GET(request: Request, response: Response) {
//   console.log(await db.select().from(ExampleTable));
//   return NextResponse.json({ json: "s" });
// }

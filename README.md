# slmax-react-testovoe-zadanie

This is a simple nextJs app, like a online shop.

Customer can add his goods, edit and delete them.

Client watch goods and get customers contacts to order goods

## Features:
- ISR for main page with product and for product page
- All CRUD for admin:
  - create products
  - get products
  - update products
  - delete products

## Used:
- Next13 with app directory
- TypeScript
- NextAuth
- Vercel Postgres Db (memory: 256mb)
- Vercel KV Db (memory: 256mb)
- SASS

## Q.A.:

 Q: Where is ISR?

 A: ISR on the main page and product page for get products
```
export const revalidate = 60;
```

 Q: Why I use two databases?

 A: PostgresDB using for images in base64 format. KV - for products.
 
 I used two databases to separate media data and product data.

 I hadn't used this two databases and I wanted to try them.

 I had very strict limit for one database (256 mb and other...)

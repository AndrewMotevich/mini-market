import "../sass/global.scss";
import { Inter } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mini market",
  description: `This is a simple nextJs app, like an online shop. 
    Customer can add his goods, edit and delete them. 
    Client can search and get customers contacts to order goods`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          <div className="main-container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

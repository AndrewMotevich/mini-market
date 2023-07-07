import Link from "next/link";
import React from "react";
import Image from "next/image";
import icon from "../../../public/market.svg";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>
          <Image src={icon} width={50} height={50} alt="Logo" />
          <Link href="/">Mini Market</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link href="/admin">
                <h3>Admin page</h3>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <h3>Contacts</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

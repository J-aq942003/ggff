import React from "react";
import "../styles/Footer.css";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border border-t-1 mt-auto px-12 py-4">
      <div className="flex flex-col md:flex-row md:justify-between borderff gap-y-3 items-center">
        <Link href="/" className="w-fit border-2ff border-black">
          <Image src={logo} alt="Evently logo" width={110} />
        </Link>
        <p className="text-center">2023 Evently. All Rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

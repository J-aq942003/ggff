import React from "react";
import "../styles/NavItems.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItems() {
  const pathName = usePathname();
  // console.log("pathName = " + pathName);
  return (
    <>
      <Link
        href="/"
        className={`${
          pathName == "/" ? "active-nav" : ""
        } hover:text-blue-400 transition-all duration-100`}
      >
        Home
      </Link>
      <Link
        href="/events/create"
        className={`${
          pathName == "/events/create" ? "active-nav" : ""
        } hover:text-blue-400 transition-all duration-100`}
      >
        Create Event
      </Link>
      <Link
        href="/profile"
        className={`${
          pathName == "/profile" ? "active-nav" : ""
        } hover:text-blue-400 transition-all duration-100`}
      >
        My Profile
      </Link>
    </>
  );
}

export default NavItems;

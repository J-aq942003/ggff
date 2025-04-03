"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const notFound = () => {
  // const pathName = usePathname();
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(window.location.pathname /*usePathname()*/);
  }, []);

  return (
    <div className="flex flex-col justify-center border-2 border-black min-h-screen text-centerff items-center">
      <p className="border-2 text-center mx-10 border-black max-w-fit whitespace-nowrapff">
        Not Found The Page in path {pathName}
      </p>
    </div>
  );
};

export default notFound;

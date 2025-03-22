import { usePathname } from "next/navigation";
import React from "react";
const notFound = () => {
  const pathName = usePathname();
  return (
    <div className="">
      <p>Not Found The Page in path {pathName}</p>
    </div>
  );
};

export default notFound;

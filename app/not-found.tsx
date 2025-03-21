import { usePathname } from "next/navigation";
import React from "react";
const notFound = () => {
  const pathName = usePathname();
  return (
    <div className="">
      <p>
        Not Found The Page in path <i className="font-bold">{pathName}</i>
      </p>
    </div>
  );
};

export default notFound;

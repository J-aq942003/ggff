//import { usePathname } from "next/navigation";
import React from "react";
export const dynamic = 'force-static'  // Add this line
const notFound = () => {
  //const pathName = usePathname();
  return (
    <div className="">
      <p>
        Not Found The Page in path
      </p>
    </div>
  );
};

export default notFound;

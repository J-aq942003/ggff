//import { usePathname } from "next/navigation";
import React from "react";
export const dynamic = 'force-static'  // Add this line
const notFound = () => {
  //const pathName = usePathname();
  return (
    <div className="">
<<<<<<< HEAD
      <p>Not Found The Page in path {pathName}</p>
=======
      <p>
        Not Found The Page in path
      </p>
>>>>>>> 266a14e9b6185b7f8194768e82565421fc4ce013
    </div>
  );
};

export default notFound;

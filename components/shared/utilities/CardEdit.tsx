import Image from "next/image";
import React from "react";
import edit from "../../../public/assets/icons/edit.svg";
import trash from "../../../public/assets/icons/delete.svg";
const CardEdit = () => {
  return (
    <div className="flex flex-col gap-2 py-1.5 px-1 sm:flex-row sm:px-1.5 sm:py-1 bg-[#ffffffe0] rounded-xl">
      <div className="border-2ff cursor-pointer p-1.5 rounded-lg hover:bg-gray-200 transition-all duration-200">
        <Image src={edit} alt="" width={18} className="" />
      </div>
      <div className="border-2ff cursor-pointer p-1.5 rounded-lg hover:bg-gray-200 transition-all duration-200">
        <Image src={trash} alt="" width={18} className="" />
      </div>
    </div>
  );
};

export default CardEdit;

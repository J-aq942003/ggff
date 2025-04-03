"use client";
import Image from "next/image";
import React from "react";
import locationIcon from "@/public/assets/icons/pin-location-svgrepo-com.svg";
// import locationIcon2 from "../../../public/assets/icons/pin-location-svgrepo-com.svg";
//////
type InputProps = {
  placeHolder?: string;
  icon?: string;
  width?: number;
  hight?: number;
  children?: React.ReactNode;
  typeInput?: "text" | "number";
};
const InputWithIcon = ({
  placeHolder = "None",
  icon = "/assets/icons/pin-location-svgrepo-com.svg",
  width = 24,
  hight = 24,
  children,
  typeInput,
}: InputProps) => {
  return (
    <div className="flex items-center gap-2 w-full rounded-3xl p-2 pr-3 bg-gray-200">
      <Image
        src={icon}
        alt=""
        width={width}
        height={hight}
        className="border-2ff border-blackff "
      />
      {children ? (
        children
      ) : (
        <input
          type={`${!typeInput ? "text" : typeInput}`}
          name=""
          id=""
          placeholder={placeHolder}
          className="bg-transparent border-none outline-none text-sm w-full"
        />
      )}
    </div>
  );
};

export default InputWithIcon;

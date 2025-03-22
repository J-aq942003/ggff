import Image from "next/image";
import React from "react";
import img from "../../../public/assets/images/test-2.png";
import CardEdit from "./CardEdit";
const EventCard = () => {
  return (
    <div
      dir="ltr"
      className="border mx-auto max-w-80ff border-[#CED4DA] min-h-[350px]ff rounded-2xl rounded-tl-2xlff overflow-hidden"
    >
      <div className="flex border-2ff min-h-fullff flex-col gap-7ff rounded-2xl rounded-tl-2xlff">
        <div className="border-2ff border-blue-700 relative">
          <Image src={img} alt="" className="max-h-[50vw]ff cursor-pointer" />
          <div className="border-2ff border-black max-w-fit absolute top-2 right-2">
            <CardEdit />
          </div>
        </div>
        <div className="border-2ff border-green-400 p-3">
          <div className="flex flex-col  gap-2.5 border-2ff border-red-600">
            <div className="flex max-w-fit gap-2 *:border-2ff *:border-blackff text-xs">
              <p className="px-3 py-1 rounded-xl bg-green-200 text-green-600 font-bold">
                $999
              </p>
              <p className="px-3 py-1 rounded-xl bg-gray-200 text-gray-600 font-bold">
                Tech
              </p>
            </div>
            <p className="text-gray-500 font-semibold text-sm">
              Fri, Dec 15, 7:00 AM
            </p>
            <h3 className="font-bold text-sm cursor-pointer">
              React Day Berlin
            </h3>
            <footer className="text-sm">Fraizan | JS Mastery</footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

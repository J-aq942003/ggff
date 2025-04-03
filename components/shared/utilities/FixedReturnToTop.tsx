"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import arrow from "../../../public/assets/icons/angle-top-svgrepo-com.svg";

const FixedReturnToTop = () => {
  useEffect(() => {
    window.onscroll = () => {
      // console.log("Hi + " + window.scrollY);
      // const returnTopDiv = document.getElementById("return-top-div");
      if (
        window.scrollY > 450 &&
        document
          .getElementById("return-top-div")
          ?.classList.contains("invisible")
      ) {
        console.log("I entered the if 1 hhhh");
        document
          .getElementById("return-top-div")
          ?.classList.toggle("invisible");
        return;
      } else if (
        window.scrollY <= 450 &&
        !document
          .getElementById("return-top-div")
          ?.classList.contains("invisible")
      ) {
        console.log("I entered the if 2 hhhh");
        document
          .getElementById("return-top-div")
          ?.classList.toggle("invisible");
        return;
      }
    };
  }, []);

  return (
    <div
      id="return-top-div"
      className="invisible fixed flex flex-col justify-center items-center text-centerff bottom-3 z-[1000] right-3 rounded-full min-w-12 min-h-12
     bg-green-400 cursor-pointer transition-allf transition-duration-500f animate-[fadeIn]f animation-duration-500f border-2ff border-blue-500"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      {/* <p className="">Top</p> */}
      <div className="border-2ff border-black">
        <Image src={arrow} alt="" className="w-8 h-7 p-0" />
      </div>
    </div>
  );
};

export default FixedReturnToTop;

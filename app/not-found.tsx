"use client";
import React from "react";
const notFound = () => {
  const pathName = window.location.pathname;
  return (
    <div className="">
      <p>
        Not Found The Page in path <i className="font-bold">{pathName}</i>
      </p>
    </div>
  );
};

export default notFound;

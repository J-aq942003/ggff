import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex justify-center items-center border-2 border-black min-h-screen
     bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center"
    >
      {children}
      <div></div>
    </div>
  );
};

export default layout;

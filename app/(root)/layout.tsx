import Footer from "@/components/shared/utilities/Footer";
import NavBar from "@/components/shared/utilities/NavBar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="root-pages-div"
      className="flex relative flex-col border-2 min-h-screen border-blue-700"
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;

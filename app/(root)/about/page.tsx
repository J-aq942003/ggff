import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        About Page{" "}
        <Button className="border cursor-pointer p-7 px-5">
          <Link href="/" className="border px-5 py-4">
            Return To
          </Link>
        </Button>
        {/* <SignOutButton>
          <button className="border border-gray-600 rounded px-3 py-1 ml-3 bg-orange-300">
            Sign Out
          </button>
        </SignOutButton> */}
        <SignedOut>
          <button className="border border-gray-600 rounded px-3 py-1 ml-3 bg-orange-300">
            Sign in
          </button>
        </SignedOut>
      </div>
    </>
  );
};

export default page;

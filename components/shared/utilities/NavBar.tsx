"use client";
import React from "react";
import "../styles/NavBar.css";
import Link from "next/link";
import Image from "next/image";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  useClerk,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNave";

function NavBar() {
  const { openSignIn } = useClerk();
  return (
    <header className="flex borderff border-green-500 min-w-full py-4">
      <div className="wrapper w-[96%]ff mx-auto sm:px-6f borderff md:borderff lg:border-0f flex items-center justify-between lg:min-w-[75vw]ff lg:px-0ff lg:mx-autoff 2xl:w-[77%]ff">
        <Link href="/" className="w-fit border-2ff border-black">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>
        <nav className="md:flex-between md:w-full hidden md:max-w-xs border-2ff border-black flexd gap-3d md:mx-auto">
          <NavItems />
        </nav>
        <div className="flex w-fit justify-end gap-3">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="rounded-3xl text-[12px] max-h-fit sm:max-h-10 sm:px-6 sm:text-[14px]"
            >
              <Link
                href="/sign-in"
                className="border-2ff border-green-500ff my-auto"
              >
                Login
              </Link>
            </Button>
          </SignedOut>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default NavBar;

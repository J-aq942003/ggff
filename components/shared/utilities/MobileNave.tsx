import React from "react";
import "../styles/MobileNav.css";
import Image from "next/image";
import navIcon from "../../../public/assets/icons/menu.svg";
import logo from "../../../public/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import NavItems from "./NavItems";

function MobileNav() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="p-0 bg-transparent hover:bg-transparent"
          >
            <div className="md:hidden border-2d w-fit cursor-pointer">
              <Image src={navIcon} alt="nav" width={24} height={24} />
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent className="px-2 md:hidden bg-white border-l-2 border-2ff border-blackff">
          <SheetHeader className="border-2ff w-fit mb-16">
            <Link href="/">
              <Image src={logo} alt="" width={150} className="cursor-pointer" />
            </Link>
          </SheetHeader>
          <div className="borderff grid gap-4 py-4ff">
            <div className="flex flex-col items-start gap-y-5 navs">
              <NavItems />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-[12px]">
                Name
              </Label>
              <Input
                id="name"
                value="Pedro Duarte"
                className="col-span-3 text-[15px] sm:text-[16px]"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right text-[12px]">
                Username
              </Label>
              <Input
                id="username"
                value="@peduarte"
                className="col-span-3 text-[15px] sm:text-[16px]"
              />
            </div> */}
          </div>
          <SheetFooter>
            {/* <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav;

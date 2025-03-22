import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// import logo from "../public/assets/images/logo.svg";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <head>
            {/* <link rel="icon" href="./favicon.ico" type="image/x-icon" /> */}
          </head>
          <body
            className={`${poppins.variable} border-2ff min-h-screen border-red-500`}
          >
            {children}
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}

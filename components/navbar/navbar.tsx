import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className=" ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  alt="Workflow"
                  className="block lg:hidden h-8 w-auto"
                  height="32"
                  src="/logo.png"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <img
                  alt="Workflow"
                  className="hidden lg:block h-8 w-auto"
                  height="32"
                  src="/logo.png"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/donate"
                >
                  Donate
                </Link>
                <Link
                  className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/contact"
                >
                  Contact Us
                </Link>
                <Link
                  className=" text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/meet"
                >
                  Meet Team
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button className="whitespace-nowrap text-sm" variant="secondary">
                <SignInButton />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

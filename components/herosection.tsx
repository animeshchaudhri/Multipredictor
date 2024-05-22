import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { SignIn, SignInButton } from "@clerk/nextjs";
import Cardsection from "./card1";
import { BackgroundGradientAnimation } from "./ui/gradiant";
import { TextGenerateEffect } from "./ui/typer";
import { Vortex } from "./ui/vortex";
import Navbar from "./navbar/navbar";

export function Herosection() {
  const words = ` Our project aims to deploy machine learning models through a web
  application built using the Flask web framework. The website
  provides users with the ability to interact with trained models
  for two different datasets: the Ames Housing dataset and the
  Titanic dataset
`;
  return (
    <div className=" ">
      <div className="absolute top-0 z-20 w-full ">
        <Navbar />
      </div>
      <div className=" relative w-full z-1 ">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          className="flex items-center justify-center"
        >
          <header>
            <div className="max-w-7xl  px-3 sm:px-6 lg:px-8 flex justify-between items-center mt-20">
              <div className="ml-4">
                <h1 className="text-7xl font-bold">INTRODUCING</h1>
                <TextGenerateEffect words={words} className="text-white" />
                <Button className="mt-6 bg-[#ff4081] hover:bg-[#ff79b0] text-white">
                  Get Started
                </Button>
              </div>
              <img
                alt="Health professional"
                className="hidden md:block"
                height="500"
                src="/Hero.png"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="500"
              />
            </div>
          </header>
        </Vortex>
      </div>
      <Cardsection />
    </div>
  );
}
export default Herosection;

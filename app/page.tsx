import { Daskboard } from "@/components/component/daskboard";
import Herosection from "@/components/herosection";
import Footer from "@/components/navbar/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Daskboard />
      {/* <Herosection /> */}
      <Footer />
    </>
  );
}

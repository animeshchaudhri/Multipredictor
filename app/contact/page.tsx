import { Contact } from "@/components/component/contact";
import Footer from "@/components/navbar/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;

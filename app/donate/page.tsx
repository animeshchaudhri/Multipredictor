import Donate from "@/components/component/donate";
import Footer from "@/components/navbar/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Donate />
      <Footer />
    </div>
  );
}

export default page;

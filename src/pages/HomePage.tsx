import HeroSection from "@/components/homePageComponents/HeroSection";
import Navbar from "@/components/Navbar";
import { ProductData } from "@/lib/types";
import React from "react";

const HomePage = (data: ProductData) => {
  console.log(data);
  return (
    <div>
      <Navbar />
      <HeroSection {...data} />
    </div>
  );
};

export default HomePage;

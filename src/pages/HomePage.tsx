import BodySection from "@/components/homePageComponents/BodySection";
import HeroSection from "@/components/homePageComponents/HeroSection";
import Navbar from "@/components/Navbar";
import { ProductData } from "@/lib/types";
import React from "react";

const HomePage = (data: ProductData) => {
  return (
    <div>
      <Navbar />
      <HeroSection {...data} />
      <BodySection data={data} />
    </div>
  );
};

export default HomePage;

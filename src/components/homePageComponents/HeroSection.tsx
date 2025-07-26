import { ProductData } from "@/lib/types";
import React from "react";
import ProductTrailer from "../ProductTrailer";

const HeroSection = (data: ProductData) => {
  return (
    <div className="bg-gradient-to-t from-blue-950 to-black text-white md:py-16 py-8">
      <div className="flex flex-col-reverse md:flex-row gap-16 items-center md:max-w-9/12 mx-auto">
        <div className="md:w-8/12 space-y-3 px-3 md:px-0">
          <h1 className="md:text-4xl text-3xl font-bold">{data.title}</h1>
          <div
            className="text-gray-300"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
        <div className="md:w-4/12 w-full px-3 md:px-0">
          <ProductTrailer media={data.media} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

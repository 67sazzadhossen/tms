import { ProductData } from "@/lib/types";
import React from "react";
import ProductTrailer from "../ProductTrailer";

const HeroSection = (data: ProductData) => {
  return (
    <div className="bg-gradient-to-t from-blue-950 to-black text-white py-16">
      <div className="flex gap-16 items-center max-w-9/12 mx-auto">
        <div className="w-7/12 space-y-3">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <div
            className="text-gray-300"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
        <div className="w-5/12">
          <ProductTrailer media={data.media} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

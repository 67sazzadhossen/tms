import { ProductData } from "@/lib/types";
import React from "react";

const Cta = ({ data }: { data?: ProductData }) => {
  if (!data?.cta_text?.name) return null;
  return (
    <div>
      <button className="w-full bg-green-700 text-white py-2 px-4 rounded">
        {data?.cta_text.name}
      </button>
    </div>
  );
};

export default Cta;

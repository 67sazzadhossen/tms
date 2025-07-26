import { CtaText } from "@/lib/types";
import React from "react";

const Cta = ({ ctaText }: { ctaText?: CtaText }) => {
  if (!ctaText?.name) return null;
  return (
    <div>
      <button className="w-full bg-green-700 text-white py-2 px-4 rounded">
        {ctaText?.name}
      </button>
    </div>
  );
};

export default Cta;

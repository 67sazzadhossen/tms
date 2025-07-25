import React from "react";
import Tabs from "./Tabs";
import { ProductData } from "@/lib/types";
import Cta from "./Cta";
import CheckList from "./CheckList";
import { BiPhoneCall } from "react-icons/bi";

const BodySection = ({ data }: { data: ProductData }) => {
  return (
    <div className="flex max-w-9/12 mx-auto">
      {/* left side */}
      <div className="w-8/12 pr-9">
        <Tabs data={data} />
      </div>

      {/* right side */}
      <div className="w-4/12 relative pb-6 px-3 mt-6 border-x border-b border-gray-300">
        <Cta data={data} />
        <CheckList checkList={data.checklist} />
        <div className="flex justify-between text-xs absolute w-full -bottom-9 left-0">
          <p>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
          <p className="flex gap-1 items-center text-green-700">
            <BiPhoneCall />
            <span className="underline">ফোন করুন (16910)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodySection;

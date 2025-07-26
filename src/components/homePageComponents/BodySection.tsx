import React from "react";
import { FeaturesSection, InstructorsSection, ProductData } from "@/lib/types";
import { BiPhoneCall } from "react-icons/bi";
import Cta from "./RightSection/Cta";
import CheckList from "./RightSection/CheckList";
import Tabs from "./LeftSection/Tabs";
import Instructors from "./LeftSection/Instructors";
import CourseStructure from "./LeftSection/CourseStructure";

const BodySection = ({ data }: { data: ProductData }) => {
  const instructors = data.sections.find(
    (item) => item.type === "instructors"
  ) as InstructorsSection;

  const courseStructure = data.sections.find(
    (item) => item.type === "features"
  ) as FeaturesSection;

  return (
    <div className="flex max-w-9/12 mx-auto">
      {/* left side */}
      <div className="w-8/12 pr-9">
        <Tabs sections={data.sections} />
        <Instructors instructors={instructors} />
        <CourseStructure courseStructure={courseStructure} />
      </div>

      {/* right side */}
      <div className="w-4/12 relative pb-6 px-3 mt-6 border-x border-b border-gray-300">
        <Cta ctaText={data?.cta_text} />
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

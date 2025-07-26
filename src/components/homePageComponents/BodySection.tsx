import React from "react";
import {
  AboutSection,
  FeatureExplanationSection,
  FeaturesSection,
  InstructorsSection,
  PointersSection,
  ProductData,
} from "@/lib/types";
import { BiPhoneCall } from "react-icons/bi";
import Cta from "./RightSection/Cta";
import CheckList from "./RightSection/CheckList";
import Tabs from "./LeftSection/Tabs";
import Instructors from "./LeftSection/Instructors";
import CourseStructure from "./LeftSection/CourseStructure";
import PointerSection from "./LeftSection/PointerSection";
import ExclusiveFeature from "./LeftSection/ExclusiveFeature";
import AboutCourseSection from "./LeftSection/AboutCourseSection";

const BodySection = ({ data }: { data: ProductData }) => {
  const instructors = data?.sections?.find(
    (item) => item.type === "instructors"
  ) as InstructorsSection;

  const courseStructure = data?.sections?.find(
    (item) => item.type === "features"
  ) as FeaturesSection;

  const pointerSectionData = data?.sections?.find(
    (item) => item.type === "pointers"
  ) as PointersSection;

  const exclusiveFeatureData = data?.sections?.find(
    (item) => item.type === "feature_explanations"
  ) as FeatureExplanationSection;
  const aboutCourseSectionData = data?.sections?.find(
    (item) => item.type === "about"
  ) as AboutSection;

  return (
    <div className="flex max-w-9/12 mx-auto">
      {/* left side */}
      <div className="w-8/12 pr-9">
        <Tabs sections={data?.sections} />
        <Instructors instructors={instructors} />
        <CourseStructure courseStructure={courseStructure} />
        <PointerSection pointerSectionData={pointerSectionData} />
        <ExclusiveFeature exclusiveFeatureData={exclusiveFeatureData} />
        <AboutCourseSection aboutCourseSectionData={aboutCourseSectionData} />
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

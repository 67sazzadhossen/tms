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
  if (!data || !data.sections) return null;
  const instructors = data.sections.find(
    (item) => item.type === "instructors"
  ) as InstructorsSection;

  const courseStructure = data.sections.find(
    (item) => item.type === "features"
  ) as FeaturesSection;

  const pointerSectionData = data.sections.find(
    (item) => item.type === "pointers"
  ) as PointersSection;

  const exclusiveFeatureData = data.sections.find(
    (item) => item.type === "feature_explanations" // singular, fix here
  ) as FeatureExplanationSection;

  const aboutCourseSectionData = data.sections.find(
    (item) => item.type === "about"
  ) as AboutSection;

  return (
    <div className="flex flex-col-reverse md:flex-row md:max-w-9/12 px-3 md:px-0 mx-auto  md:gap-0">
      {/* left side */}
      <div className="md:w-8/12 md:pr-9 relative">
        <div className="sticky top-0 bg-white hidden md:block">
          <Tabs sections={data.sections} />
        </div>

        {/* Each section wrapped with a div with matching id */}
        {instructors && (
          <div id={`section-${instructors.order_idx}`} className="my-20">
            <Instructors instructors={instructors} />
          </div>
        )}
        {courseStructure && (
          <div id={`section-${courseStructure.order_idx}`} className="my-20">
            <CourseStructure courseStructure={courseStructure} />
          </div>
        )}
        {pointerSectionData && (
          <div id={`section-${pointerSectionData.order_idx}`} className="my-20">
            <PointerSection pointerSectionData={pointerSectionData} />
          </div>
        )}
        {exclusiveFeatureData && (
          <div
            id={`section-${exclusiveFeatureData.order_idx}`}
            className="my-20"
          >
            <ExclusiveFeature exclusiveFeatureData={exclusiveFeatureData} />
          </div>
        )}
        {aboutCourseSectionData && (
          <div
            id={`section-${aboutCourseSectionData.order_idx}`}
            className="my-20"
          >
            <AboutCourseSection
              aboutCourseSectionData={aboutCourseSectionData}
            />
          </div>
        )}
      </div>

      {/* right side */}
      <div className="md:w-4/12  relative mt-6 ">
        <div className="sticky top-2 border-x border-b border-gray-300 px-4 pb-4 rounded-b-2xl">
          <Cta ctaText={data.cta_text} />
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
    </div>
  );
};

export default BodySection;

import Accordion from "@/components/shared/Accordion";
import NameHeading from "@/components/shared/NameHeading";
import { AboutSection } from "@/lib/types";
import React from "react";

const AboutCourseSection = ({
  aboutCourseSectionData,
}: {
  aboutCourseSectionData?: AboutSection;
}) => {
  return (
    <div>
      <NameHeading title={aboutCourseSectionData?.name} />
      <div className="p-5 border border-gray-200 rounded-2xl">
        {aboutCourseSectionData?.values?.map((item, idx) => (
          <Accordion
            title={item?.title}
            description={item?.description}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCourseSection;

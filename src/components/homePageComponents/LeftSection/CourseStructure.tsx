import NameHeading from "@/components/shared/NameHeading";
import { FeaturesSection } from "@/lib/types";
import Image from "next/image";
import React from "react";

const CourseStructure = ({
  courseStructure,
}: {
  courseStructure: FeaturesSection;
}) => {
  return (
    <div>
      <NameHeading title={courseStructure?.name} />
      <div className="grid md:grid-cols-2 gap-12 border border-gray-200 p-6 bg-gray-800 text-white rounded-2xl">
        {courseStructure?.values?.map((item, idx) => (
          <div key={idx} className="flex gap-2">
            <div className="max-w-9">
              <Image src={item?.icon} alt="icon" width={60} height={60} />
            </div>
            <div>
              <h1 className="text-lg font-bold mb-3">{item?.title}</h1>
              <p className="text-sm text-gray-400">{item?.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;

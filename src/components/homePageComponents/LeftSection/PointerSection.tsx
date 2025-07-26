import NameHeading from "@/components/shared/NameHeading";
import { PointersSection } from "@/lib/types";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const PointerSection = ({
  pointerSectionData,
}: {
  pointerSectionData?: PointersSection;
}) => {
  return (
    <div>
      <NameHeading title={pointerSectionData?.name} />
      <div className="grid grid-cols-2 gap-6 border border-gray-200 p-6 rounded-2xl">
        {pointerSectionData?.values?.map((item, idx) => (
          <div className="flex gap-3 text-sm" key={idx}>
            <span className="text-blue-400 mt-1">
              <IoCheckmarkSharp />
            </span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointerSection;

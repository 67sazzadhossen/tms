import CheckListItem from "@/components/shared/CheckListItem";
import NameHeading from "@/components/shared/NameHeading";
import { PointersSection } from "@/lib/types";
import React from "react";

const PointerSection = ({
  pointerSectionData,
}: {
  pointerSectionData?: PointersSection;
}) => {
  return (
    <div>
      <NameHeading title={pointerSectionData?.name} />
      <div className="grid md:grid-cols-2 gap-6 border border-gray-200 p-6 rounded-2xl">
        {pointerSectionData?.values?.map((item, idx) => (
          <CheckListItem checkItem={item.text} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PointerSection;

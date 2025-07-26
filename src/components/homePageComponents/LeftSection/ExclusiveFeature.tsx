import NameHeading from "@/components/shared/NameHeading";
import { FeatureExplanationSection } from "@/lib/types";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";

const ExclusiveFeature = ({
  exclusiveFeatureData,
}: {
  exclusiveFeatureData?: FeatureExplanationSection;
}) => {
  return (
    <div>
      <NameHeading title={exclusiveFeatureData?.name} />
      <div className="border border-gray-200 px-5 rounded-2xl">
        {exclusiveFeatureData?.values?.map((item, idx) => {
          const isLast = idx === exclusiveFeatureData.values.length - 1;
          return (
            <div
              key={idx}
              className={`flex justify-between gap-6 py-6 border-gray-200 ${
                !isLast ? "border-b" : ""
              }`}
            >
              <div>
                <h1 className="my-3">{item.title}</h1>
                {item?.checklist?.map((checkItem, cidx) => (
                  <div key={cidx}>
                    <div className="flex gap-2">
                      <span className="text-blue-400">
                        {" "}
                        <IoCheckmarkSharp />
                      </span>
                      {checkItem}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Image
                  src={item.file_url}
                  alt="image"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExclusiveFeature;

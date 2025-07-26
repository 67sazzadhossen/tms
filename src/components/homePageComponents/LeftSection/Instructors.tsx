import { InstructorsSection } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Instructors = ({ instructors }: { instructors?: InstructorsSection }) => {
  return (
    <div className="my-8">
      <h1 className="text-xl font-bold">{instructors?.name}</h1>
      <div>
        {instructors?.values.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-5 p-4 border border-gray-200 my-6"
          >
            <div>
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div>
              <button className="text-lg flex items-center gap-1 hover:text-green-700">
                {" "}
                {item.name} <IoIosArrowForward size={14} />
              </button>
              <div
                className="text-base"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;

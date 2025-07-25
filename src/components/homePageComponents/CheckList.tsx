import { Checklist } from "@/lib/types";
import Image from "next/image";
import React from "react";

const CheckList = ({ checkList }: { checkList?: Checklist[] }) => {
  console.log(checkList);
  return (
    <div className="mt-6">
      <h1 className="font-bold mb-4">এই কোর্সে যা থাকছে</h1>
      <ul className="space-y-2 ">
        {checkList?.map((item, idx) => (
          <li
            className={`flex items-center gap-4 text-sm text-${item.color} font-md`}
            key={idx}
          >
            <span>
              <Image src={item.icon} alt={item.text} width={15} height={15} />
            </span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckList;

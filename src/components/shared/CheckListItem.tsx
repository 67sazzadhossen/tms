import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const CheckListItem = ({ checkItem }: { checkItem: string }) => {
  return (
    <div>
      <div className="flex gap-2">
        <span className="text-blue-400 text-xl mt-1">
          {" "}
          <IoCheckmarkSharp />
        </span>
        {checkItem}
      </div>
    </div>
  );
};

export default CheckListItem;

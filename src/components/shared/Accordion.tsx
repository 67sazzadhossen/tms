import React from "react";

const Accordion = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-100 border-b rounded-none border-gray-200">
        <input type="checkbox" /> {/* <-- change here */}
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className="collapse-title font-semibold"
        ></div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="collapse-content text-sm"
        ></div>
      </div>
    </div>
  );
};

export default Accordion;

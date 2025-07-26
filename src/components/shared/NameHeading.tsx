import React from "react";

const NameHeading = ({ title }: { title?: string }) => {
  return <h1 className="text-xl font-bold my-6">{title}</h1>;
};

export default NameHeading;

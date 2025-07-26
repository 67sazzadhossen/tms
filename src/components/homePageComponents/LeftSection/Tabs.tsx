"use client";

import { Section } from "@/lib/types";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Tabs = ({ sections }: { sections?: Section[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sections) return null;
    if (containerRef.current) {
      const scrollAmount = 150;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mt-4">
      {/* Scrollable Tab List */}
      <div
        ref={containerRef}
        className="flex relative gap-4 overflow-x-auto scroll-smooth border-b border-gray-300  py-2 pt-4 custom-scrollbar mx-10 "
      >
        {sections?.map((item, idx) => (
          <div
            key={idx}
            className="whitespace-nowrap  text-sm font-medium text-gray-800 cursor-pointer hover:text-blue-600"
          >
            {item?.name}
          </div>
        ))}
      </div>

      {/* scroll navigation */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-700 border-none  p-2 rounded-full text-white"
      >
        <FaArrowLeft size={14} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-700 border-none  p-2 rounded-full text-white"
      >
        <FaArrowRight size={14} />
      </button>
    </div>
  );
};

export default Tabs;

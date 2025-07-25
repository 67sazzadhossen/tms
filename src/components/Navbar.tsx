import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPhone, BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const navItems = [
    {
      name: "Class 6-12",
      link: "#class6-12", // Example link, you can change this
    },
    {
      name: "Skills",
      link: "#skills", // Example link
    },
    {
      name: "Admission",
      link: "#admission", // Example link
    },
    {
      name: "Online Batch",
      link: "#online-batch", // Example link
    },
    {
      name: "English Centre",
      link: "#english-centre", // Example link
    },
    {
      name: "More",
      link: "#more", // Example link
    },
  ];
  return (
    <div className="max-w-11/12 mx-auto py-3 flex items-center gap-6 justify-around">
      {/* logo & search box*/}
      <div className="flex items-center gap-4">
        <Image
          src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
          width={100}
          height={80}
          alt="logo"
        />

        <div className="flex border items-center p-2 rounded-full gap-2 min-w-xs">
          <BiSearch size={24} />
          <input
            className="w-full border-none outline-none placeholder:text-xs"
            type="text"
            placeholder="স্কিলস কোর্স, কিংবা প্রোগ্রাম সার্চ করুন..."
          />
        </div>
      </div>

      {/* Navitems */}
      <ul className="flex items-center gap-6">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link href={item.link} className="flex items-center text-sm">
              {item.name}
              {item.name !== "Admission" && <MdKeyboardArrowDown size={24} />}
            </Link>
          </li>
        ))}
      </ul>

      {/* language toggle, help-center, login */}
      <div className="flex items-center gap-4 text-green-600 font-semibold">
        <button className="btn btn-sm bg-transparent font-md">বাং</button>
        <button className="flex items-center gap-1">
          <BiPhone />
          16910
        </button>
        <button className="bg-green-600 text-white btn btn-sm px-6">
          লগ-ইন
        </button>
      </div>
    </div>
  );
};

export default Navbar;

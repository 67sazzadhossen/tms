import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPhone, BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import LanguageSwitcher from "./shared/LanguageSwitcher";

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
    <div className="md:max-w-11/12 mx-auto py-3 flex items-center gap-6 justify-between md:justify-around px-3 md:px-0">
      {/* logo & search box*/}
      <div className="flex items-center gap-4">
        <div className="w-full flex items-center gap-1">
          <span className="text-2xl md:hidden">
            <MdMenu />
          </span>
          <Image
            src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
            width={100}
            height={80}
            alt="logo"
          />
        </div>

        <div className=" md:border items-center p-2 rounded-full gap-2 md:min-w-sm hidden md:flex">
          <span className="md:text-2xl text-sm">
            <BiSearch />
          </span>
          <input
            className="w-full border-none outline-none placeholder:text-xs "
            type="text"
            placeholder="স্কিলস কোর্স, কিংবা প্রোগ্রাম সার্চ করুন..."
          />
        </div>
      </div>

      {/* Navitems */}
      <ul className=" items-center gap-6 hidden lg:flex">
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
      <div className="flex items-center md:gap-4 gap-1 text-green-600 font-semibold">
        <div className="">
          <LanguageSwitcher />
        </div>
        <span className="md:text-2xl text-sm md:hidden">
          <BiSearch />
        </span>
        <button className="flex items-center gap-1">
          <BiPhone />
          <span className="hidden md:block"> 16910</span>
        </button>
        <button className="bg-green-600 text-white btn btn-xs md:btn-sm md:px-6">
          লগ-ইন
        </button>
      </div>
    </div>
  );
};

export default Navbar;

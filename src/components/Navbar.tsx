"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiPhone, BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import LanguageSwitcher from "./shared/LanguageSwitcher";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Class 6-12", link: "#class6-12" },
    { name: "Skills", link: "#skills" },
    { name: "Admission", link: "#admission" },
    { name: "Online Batch", link: "#online-batch" },
    { name: "English Centre", link: "#english-centre" },
    { name: "More", link: "#more" },
  ];

  return (
    <>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-[49]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            width={100}
            height={40}
            alt="logo"
          />
          <MdClose
            size={28}
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-4 p-4 text-sm">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.link}
                className="flex items-center justify-between py-2 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                {item.name !== "Admission" && <MdKeyboardArrowDown size={20} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Navbar */}
      <div className="md:max-w-11/12 mx-auto py-3 flex items-center gap-6 justify-between md:justify-around px-3 md:px-0 z-30 relative">
        {/* Logo & Search */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button
              className="text-2xl md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MdMenu />
            </button>
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              width={100}
              height={80}
              alt="logo"
            />
          </div>

          {/* Search Bar (Desktop Only) */}
          <div className="md:border items-center p-2 rounded-full gap-2 md:min-w-sm hidden md:flex">
            <span className="md:text-2xl text-sm">
              <BiSearch />
            </span>
            <input
              className="w-full border-none outline-none placeholder:text-xs"
              type="text"
              placeholder="স্কিলস কোর্স, কিংবা প্রোগ্রাম সার্চ করুন..."
            />
          </div>
        </div>

        {/* Navigation Links (Desktop Only) */}
        <ul className="items-center gap-6 hidden lg:flex">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.link} className="flex items-center text-sm">
                {item.name}
                {item.name !== "Admission" && <MdKeyboardArrowDown size={24} />}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center md:gap-4 gap-1 text-green-600 font-semibold">
          <LanguageSwitcher />
          <span className="md:text-2xl text-sm md:hidden">
            <BiSearch />
          </span>
          <button className="flex items-center gap-1">
            <BiPhone />
            <span className="hidden md:block">16910</span>
          </button>
          <button className="bg-green-600 text-white btn btn-xs md:btn-sm md:px-6">
            লগ-ইন
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

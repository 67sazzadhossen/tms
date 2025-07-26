"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentLang = searchParams?.get("lang") ?? "en";

  const handleLanguageChange = (newLang: string) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="">
      {currentLang === "bn" ? (
        <button
          onClick={() => handleLanguageChange("en")}
          className="btn btn-xs md:btn-sm bg-transparent font-md"
        >
          En
        </button>
      ) : (
        <button
          onClick={() => handleLanguageChange("bn")}
          className="btn btn-xs md:btn-sm bg-transparent font-md"
        >
          বাং
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;

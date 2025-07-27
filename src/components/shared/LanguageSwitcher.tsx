"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useTransition } from "react";
import LoadingSpinner from "../LoadingSpinner";

const LanguageSwitcher = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentLang = searchParams?.get("lang") ?? "en";
  const [isPending, startTransition] = useTransition(); // built-in React transition for smoother UI

  const handleLanguageChange = (newLang: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams?.toString() ?? "");
      params.set("lang", newLang);
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div>
      {isPending ? (
        <div className="text-xs md:text-sm">
          <LoadingSpinner />
        </div>
      ) : currentLang === "bn" ? (
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

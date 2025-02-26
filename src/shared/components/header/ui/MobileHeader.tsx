"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/shared/utils/stylesheet/clsx";

function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 px-40 w-full min-h-14 flex justify-between items-center duration-300 z-10",
        {
          "bg-secondary h-14 shadow-lg": isScrolled,
          "bg-transparent h-16": !isScrolled,
        }
      )}
    ></header>
  );
}

export { MobileHeader };

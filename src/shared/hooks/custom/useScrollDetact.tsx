"use client";

import { useEffect, useState } from "react";

function useScrollDetact() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScroll;
}

export { useScrollDetact };

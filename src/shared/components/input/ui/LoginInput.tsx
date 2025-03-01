"use client";

import React, { type ChangeEvent } from "react";

import { cn } from "@/shared/utils";

type LoginInputType = {
  type: "text" | "password";
  name?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function LoginInput({
  type,
  className,
  name,
  placeholder,
  onChange,
}: LoginInputType) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={cn(
        "px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-black border-2 border-black",
        className
      )}
      onChange={onChange}
      required
    />
  );
}

export { LoginInput };

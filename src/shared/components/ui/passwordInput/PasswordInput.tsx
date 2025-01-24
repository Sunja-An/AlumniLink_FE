"use client";

import { cn } from "@/shared/utils/clsx";
import React, { type ChangeEvent, useState } from "react";

type T_PasswordInput = {
  name: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
};

function PasswordInput({
  name,
  onChange,
  placeholder,
  className,
  value,
}: T_PasswordInput) {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div className="relative w-60">
      <input
        type={isShow ? "text" : "password"}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          className,
          "px-4 py-5 w-full bg-transparent rounded-md border-none outline-none"
        )}
        required
      />
      <span
        className={cn(
          "",
          "absolute left-0 px-4 py-5 pointer-events-none text-base duration-300 uppercase text-gray-200"
        )}
      >
        {name}
      </span>
      <div onClick={(prev) => setIsShow(!prev)} className="" />
    </div>
  );
}

export { PasswordInput };

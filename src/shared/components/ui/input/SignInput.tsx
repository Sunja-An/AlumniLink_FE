"use client";

import React, { ChangeEvent } from "react";

type T_SignInput = {
  type: "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function SignInput({ type, onChange }: T_SignInput) {
  return (
    <input
      type={type}
      className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="Your Email"
      onChange={onChange}
    />
  );
}

export { SignInput };

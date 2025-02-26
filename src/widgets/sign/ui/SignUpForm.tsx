"use client";

import React from "react";

import { LoginInput, useSignUpForm } from "@/shared";

function SignUpForm() {
  const email = useSignUpForm("email");
  const password = useSignUpForm("password");
  const nickname = useSignUpForm("nickname");
  const gitLink = useSignUpForm("gitLink");
  const resumeLink = useSignUpForm("resumeLink");
  const employed = useSignUpForm("employed");

  const SignUpInputComponentList = [
    email,
    password,
    nickname,
    gitLink,
    resumeLink,
  ];
  return (
    <form className="py-10 w-full flex flex-col justify-center items-center gap-4">
      {SignUpInputComponentList.map((item, key) => {
        if (item.name === "password") {
          return (
            <LoginInput
              type="password"
              name={item.name}
              value={item.value}
              onChange={item.onChange}
              placeholder={item.placeholder}
              key={key}
            />
          );
        } else {
          return (
            <LoginInput
              type="text"
              name={item.name}
              value={item.value}
              onChange={item.onChange}
              placeholder={item.placeholder}
              key={key}
            />
          );
        }
      })}
      <button
        type="submit"
        className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-white bg-softblack"
      >
        회원가입하기
      </button>
      <button
        type="button"
        className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-black bg-slate-100"
      >
        CLEAR
      </button>
    </form>
  );
}

export { SignUpForm };

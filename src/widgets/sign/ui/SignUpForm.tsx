"use client";

import React from "react";

import { LoginInput, useSignUpForm } from "@/shared";

function SignUpForm() {
  const { signUpInfo, placeholderText, onChange, onSubmit } = useSignUpForm();

  const SignUpInputList = [
    "email",
    "password",
    "nickname",
    "gitLink",
    "resumeLink",
  ];

  return (
    <form
      className="py-10 w-full flex flex-col justify-center items-center gap-4"
      onSubmit={onSubmit}
    >
      {SignUpInputList.map((item, key) => {
        if (item === "password") {
          return (
            <LoginInput
              type="password"
              name={item}
              value={signUpInfo[item]}
              onChange={onChange}
              placeholder={placeholderText[item]}
              key={key}
            />
          );
        } else if (
          item === "email" ||
          item === "nickname" ||
          item === "gitLink" ||
          item === "resumeLink"
        ) {
          return (
            <LoginInput
              type="text"
              name={item}
              value={signUpInfo[item]}
              onChange={onChange}
              placeholder={placeholderText[item]}
              key={key}
            />
          );
        }
      })}
      <button
        type="submit"
        className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-white bg-softblack hover:bg-black duration-300"
      >
        회원가입하기
      </button>
    </form>
  );
}

export { SignUpForm };

"use client";

import React, { type ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { type T_SignUp } from "@/entity/sign/sign";
import { get_sign_up } from "@/shared/api/sign.action";
import { SignInput } from "@/shared/components";

function SignUpView() {
  const router = useRouter();
  const [signUpInfo, setSignUpInfo] = useState<T_SignUp>({
    nickname: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSignUpInfo({
      ...signUpInfo,
      nickname: value,
    });
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSignUpInfo({
      ...signUpInfo,
      nickname: value,
    });
  };

  const onSubmitSignUp = async () => {
    const res = await get_sign_up({
      nickname: signUpInfo.nickname,
      password: signUpInfo.password,
    });
    if (res === 400) {
      setErrorMsg("중복된 Nickname 사용 중입니다.");
    } else if (res === 200) {
      router.push("/sign");
    }
  };

  return (
    <form onSubmit={onSubmitSignUp} id="sign-up">
      <div className="w-full flex justify-center items-start">
        <h3 className="text-center font-studioSans font-semibold text-3xl text-black">
          Sign Up
        </h3>
      </div>
      <div className="relative mt-4 w-full flex flex-col justify-start items-start gap-4">
        <SignInput type="text" onChange={onChangeNickName} />
        <input
          type="password"
          className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Your password"
          onChange={onChangePassword}
        />
        <p className="flex items-start mt-2 text-xs text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-1.5"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
          Use at least 8 characters, one uppercase, one lowercase and one
          number.
        </p>
      </div>
      <div className="mt-4 w-full flex justify-center items-center">
        <button
          type="submit"
          className="min-w-40 min-h-12 rounded-xl flex justify-center items-center bg-slate-100 duration-300 hover:scale-105 shadow-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { SignUpView };

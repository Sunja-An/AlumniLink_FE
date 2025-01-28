"use client";

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { T_Login } from "@/entity/user/user";
import { SignIn } from "@/views/sign/api/sign.action";
import { isSignInKey } from "@/shared";
import { useRouter } from "next/navigation";

export default function LoginView() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState<T_Login>({
    email: "",
    password: "",
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isSignInKey(name)) {
      setLoginInfo({
        ...loginInfo,
        [name]: value,
      });
    }
  };

  const onSubmitPost = (e: KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      submitLogic();
    }
  };

  const submitLogic = async () => {
    const res = await SignIn(loginInfo);
    if (res) {
      router.push("/info?page=0&size=0");
    } else {
      alert("에러가 발생하였습니다.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="w-full flex justify-center items-center">
        <span className="font-pretendard font-black text-4xl text-black uppercase">
          Login
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <form
          className="py-10 w-full flex flex-col justify-center items-center gap-4"
          onSubmit={onSubmitPost}
        >
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            name="email"
            onChange={onChangeText}
            className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-black"
            required
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            onChange={onChangeText}
            className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-black"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-black bg-slate-100"
            onClick={submitLogic}
          >
            로그인하기
          </button>
        </form>
      </div>
    </div>
  );
}

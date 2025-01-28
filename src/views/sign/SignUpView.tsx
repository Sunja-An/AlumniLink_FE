"use client";

import { T_SignUp } from "@/entity/user/user";
import React, { type ChangeEvent, KeyboardEvent, useState } from "react";
import { SignUp } from "@/views/sign/api/sign.action";
import { isSignUpKey } from "@/shared";
import { useRouter } from "next/navigation";

export default function SignUpView() {
  const router = useRouter();

  const [signUpInfo, setSignUpInfo] = useState<T_SignUp>({
    email: "",
    nickname: "",
    password: "",
    gitLink: "",
    resumeLink: "",
    employed: false,
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isSignUpKey(name)) {
      setSignUpInfo({
        ...signUpInfo,
        [name]: value,
      });
    }
  };

  const onSubmitLogin = (e: KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      submitLogic();
    }
  };

  const submitLogic = async () => {
    const res = await SignUp(signUpInfo);
    if (res) {
      router.push("/info?page=0&size=10");
    } else {
      alert("에러가 발생하였습니다.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="w-full flex justify-center items-center">
        <span className="font-pretendard font-black text-4xl text-black uppercase">
          회원가입
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <form
          className="py-10 w-full flex flex-col justify-center items-center gap-4"
          onSubmit={onSubmitLogin}
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
            type="text"
            placeholder="닉네임을 입력해주세요"
            name="nickname"
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
          <input
            type="text"
            placeholder="깃허브 주소를 입력해주세요"
            name="gitLink"
            onChange={onChangeText}
            className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-black"
          />
          <input
            type="text"
            placeholder="이력서 주소를 입력해주세요"
            name="resumeLink"
            onChange={onChangeText}
            className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-black"
          />
          <button
            type="submit"
            className="px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-white bg-softblack"
            onClick={submitLogic}
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
      </div>
    </div>
  );
}

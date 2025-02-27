"use client";

import { type ChangeEvent, type MouseEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";

import type { SignUpType } from "@/shared/types/sign/signup";
import { SignUpAPI } from "@/shared/action";
import { tokenContext } from "@/shared/lib";

function useSignUpForm() {
  const { setToken } = useContext(tokenContext);
  const router = useRouter();

  const [signUpInfo, setSignUpInfo] = useState<SignUpType>({
    email: "",
    password: "",
    nickname: "",
    gitLink: "",
    resumeLink: "",
    employed: false,
  });

  const placeholderText = {
    email: "이메일을 입력해주세요",
    password: "비밀번호를 입력해주세요",
    nickname: "닉네임을 입력해주세요",
    gitLink: "깃허브 링크를 입력해주세요",
    resumeLink: "이력서 링크를 입력해주세요",
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (
      name === "email" ||
      name === "password" ||
      name === "nickname" ||
      name === "gitLink" ||
      name === "resumeLink" ||
      name === "employed"
    ) {
      setSignUpInfo({
        ...signUpInfo,
        [name]: value,
      });
    }
  };

  const onSubmitSignUp = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await SignUpAPI(signUpInfo);
    if (res) {
      setToken(res.accessToken);
      router.push("/info?page=0&size=10");
    } else {
    }
  };

  return {
    signUpInfo,
    placeholderText,
    onChange: onChangeText,
    onSubmit: onSubmitSignUp,
  };
}

export { useSignUpForm };

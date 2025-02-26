"use client";

import { type ChangeEvent, MouseEvent, useState } from "react";
import type { SignUpType, useSignUpFormType } from "../../types/sign/signup";
import { SignUpAPI } from "@/shared/action";
import { useRouter } from "next/navigation";

function useSignUpForm<K extends keyof useSignUpFormType>(
  key: K
): useSignUpFormType[K] {
  const router = useRouter();

  const [signUpInfo, setSignUpInfo] = useState<SignUpType>({
    email: "",
    password: "",
    nickname: "",
    gitLink: "",
    resumeLink: "",
    employed: false,
  });

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
      router.push("/info?page=0&size=10");
    } else {
    }
  };

  if (key === "email") {
    return {
      name: key,
      value: signUpInfo.email,
      placeholder: "이메일을 입력해주세요",
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "password") {
    return {
      name: key,
      value: signUpInfo.password,
      placeholder: "비밀번호를 입력해주세요",
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "nickname") {
    return {
      name: key,
      value: signUpInfo.nickname,
      placeholder: "닉네임을 입력해주세요",
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "gitLink") {
    return {
      name: key,
      value: signUpInfo.gitLink,
      placeholder: "Github 주소를 입력해주세요",
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "resumeLink") {
    return {
      name: key,
      value: signUpInfo.resumeLink,
      placeholder: "이력서 링크를 입력해주세요",
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "employed") {
    return {
      name: key,
      value: signUpInfo.employed,
      placeholder: "취직을 하셨나요?",
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else {
    return onSubmitSignUp as useSignUpFormType[K];
  }
}

export { useSignUpForm };

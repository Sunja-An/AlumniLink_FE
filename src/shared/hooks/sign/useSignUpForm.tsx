"use client";

import { type ChangeEvent, useState } from "react";
import type { SignUpType, useSignUpFormType } from "../../types/sign/signup";

function useSignUpForm<K extends keyof useSignUpFormType>(
  key: K
): useSignUpFormType[K] {
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
  } else {
    return {
      name: key,
      value: signUpInfo.employed,
      placeholder: "취직을 하셨나요?",
      onChange: onChangeText,
    } as useSignUpFormType[K];
  }
}

export { useSignUpForm };

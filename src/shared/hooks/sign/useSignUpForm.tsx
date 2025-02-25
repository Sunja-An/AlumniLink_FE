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
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "password") {
    return {
      name: key,
      value: signUpInfo.password,
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "nickname") {
    return {
      name: key,
      value: signUpInfo.nickname,
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "gitLink") {
    return {
      name: key,
      value: signUpInfo.gitLink,
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else if (key === "resumeLink") {
    return {
      name: key,
      value: signUpInfo.resumeLink,
      onChange: onChangeText,
    } as useSignUpFormType[K];
  } else {
    return {
      name: key,
      value: signUpInfo.employed,
      onChange: onChangeText,
    } as useSignUpFormType[K];
  }
}

export { useSignUpForm };

"use client";

import { type ChangeEvent, useState } from "react";
import type { LoginType, useLoginType } from "@/shared/types/sign/login";

function useLoginForm<K extends keyof useLoginType>(key: K): useLoginType[K] {
  const [loginInfo, setLoginInfo] = useState<LoginType>({
    email: "",
    password: "",
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email" || name === "password") {
      setLoginInfo({
        ...loginInfo,
        [name]: value,
      });
    }
  };

  if (key === "email") {
    return {
      name: key,
      value: loginInfo.email,
      placeholder: "이메일을 입력해주세요",
      onChange: onChangeText,
    } as useLoginType[K];
  } else {
    return {
      name: key,
      value: loginInfo.password,
      placeholder: "비밀번호를 입력해주세요",
      onChange: onChangeText,
    } as useLoginType[K];
  }
}

export { useLoginForm };

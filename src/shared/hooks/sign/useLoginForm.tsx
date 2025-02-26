"use client";

import { type ChangeEvent, type MouseEvent, useState } from "react";
import type { LoginType, useLoginType } from "@/shared/types/sign/login";
import { LoginAPI } from "@/shared/action";
import { useRouter } from "next/navigation";

function useLoginForm<K extends keyof useLoginType>(key: K): useLoginType[K] {
  const router = useRouter();

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

  const onSubmitLogin = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await LoginAPI(loginInfo);
    if (res) {
      router.push("/info?page=0&size=10");
    } else {
    }
  };

  if (key === "email") {
    return {
      name: key,
      value: loginInfo.email,
      placeholder: "이메일을 입력해주세요",
      onChange: onChangeText,
    } as useLoginType[K];
  } else if (key === "password") {
    return {
      name: key,
      value: loginInfo.password,
      placeholder: "비밀번호를 입력해주세요",
      onChange: onChangeText,
    } as useLoginType[K];
  } else {
    return onSubmitLogin as useLoginType[K];
  }
}

export { useLoginForm };

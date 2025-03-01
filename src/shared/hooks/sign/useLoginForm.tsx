"use client";

import { type ChangeEvent, type MouseEvent, useState } from "react";
import type { LoginType } from "@/shared/types/sign/login";
import { LoginAPI } from "@/shared/action";
import { useRouter } from "next/navigation";
import { makeUrlQueryString } from "@/shared/utils/query/makeQueryString";

function useLoginForm() {
  const router = useRouter();

  const [loginInfo, setLoginInfo] = useState<LoginType>({
    email: "",
    password: "",
  });

  const placeholderText = {
    email: "이메일을 입력해주세요",
    password: "비밀번호를 입력해주세요",
  };

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
      const url = makeUrlQueryString("info", 0, 10, "ASC");
      if (url) {
        router.push(url);
      }
    } else {
      alert("로그인에 실패하였습니다.");
    }
  };

  return {
    loginInfo,
    placeholderText,
    onChange: onChangeText,
    onSubmit: onSubmitLogin,
  };
}

export { useLoginForm };

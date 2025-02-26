"use client";

import { LoginInput, useLoginForm } from "@/shared";
import React from "react";

function LoginForm() {
  const email = useLoginForm("email");
  const password = useLoginForm("password");
  return (
    <form className="py-10 w-full flex flex-col justify-center items-center gap-4">
      <LoginInput
        type="text"
        name={email.name}
        value={email.value}
        onChange={email.onChange}
        placeholder={email.placeholder}
      />
      <LoginInput
        type="password"
        name={password.name}
        value={password.value}
        onChange={password.onChange}
        placeholder={password.placeholder}
      />
      <button
        type="submit"
        className="login-block px-4 py-2 w-1/2 h-12 rounded-full font-pretendard text-sm text-black bg-slate-100"
      >
        로그인하기
      </button>
    </form>
  );
}

export { LoginForm };

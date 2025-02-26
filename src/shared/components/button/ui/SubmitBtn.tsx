"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { ToastContainer, ToastContentProps, toast } from "react-toastify";
import { LoginType } from "@/shared/types/sign/login";
import { SignUpType } from "@/shared/types/sign/signup";

type SignSubmitBtnType = {
  name?: string;
  value: LoginType | SignUpType;
  onAction: (value: LoginType | SignUpType) => Promise<boolean>;
};

function SignSubmitBtn({ onAction, value, name }: SignSubmitBtnType) {
  const router = useRouter();
  const notify = () => {};

  const onSubmit = async () => {
    const res = await onAction(value);
    if (res) {
    } else {
    }
  };

  return (
    <div className="">
      <button type="button"></button>
      <ToastContainer autoClose={false} />
    </div>
  );
}

export { SignSubmitBtn };

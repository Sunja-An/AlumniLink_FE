"use client";

import type { TipType, useTipFormType } from "@/shared/types/edit/tip";
import { type ChangeEvent, useState } from "react";

function useTipForm<K extends keyof useTipFormType>(key: K): useTipFormType[K] {
  const [tipInfo, setTipInfo] = useState<TipType>({
    title: "",
    body: "",
    description: "",
    tag: "TIP",
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title" || name === "body" || name == "description") {
      setTipInfo({
        ...tipInfo,
        [name]: value,
      });
    }
  };

  if (key === "body") {
    return {
      name: key,
      value: tipInfo.body,
      onChange: onChangeText,
    } as useTipFormType[K];
  } else if (key === "description") {
    return {
      name: key,
      value: tipInfo.description,
      onChange: onChangeText,
    } as useTipFormType[K];
  } else if (key === "title") {
    return {
      name: key,
      value: tipInfo.title,
      onChange: onChangeText,
    } as useTipFormType[K];
  } else {
    return {
      name: "tag",
      value: "TIP",
    } as useTipFormType[K];
  }
}

export { useTipForm };

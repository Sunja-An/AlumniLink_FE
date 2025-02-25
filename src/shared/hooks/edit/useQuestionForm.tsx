"use client";

import type {
  QuestionType,
  useQuestionFormType,
} from "@/shared/types/edit/question";
import { type ChangeEvent, useState } from "react";

function useQuestionForm<K extends keyof useQuestionFormType>(
  key: K
): useQuestionFormType[K] {
  const [questionInfo, setQuestionInfo] = useState<QuestionType>({
    title: "",
    body: "",
    description: "",
    tag: "QUESTION",
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title" || name === "body" || name == "description") {
      setQuestionInfo({
        ...questionInfo,
        [name]: value,
      });
    }
  };

  if (key === "body") {
    return {
      name: key,
      value: questionInfo.body,
      onChange: onChangeText,
    } as useQuestionFormType[K];
  } else if (key === "description") {
    return {
      name: key,
      value: questionInfo.description,
      onChange: onChangeText,
    } as useQuestionFormType[K];
  } else if (key === "title") {
    return {
      name: key,
      value: questionInfo.title,
      onChange: onChangeText,
    } as useQuestionFormType[K];
  } else {
    return {
      name: "tag",
      value: "QUESTION",
    } as useQuestionFormType[K];
  }
}

export { useQuestionForm };

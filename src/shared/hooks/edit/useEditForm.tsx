"use client";

import { type ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

import type { PostType, ProjectType, TAG } from "@/entity";
import { postProject, postQuestion, postTip } from "@/shared/action";

function useEditForm() {
  const router = useRouter();

  const [projectInfo, setProjectInfo] = useState<ProjectType>({
    name: "",
    info: "",
    deadline: "",
    link: "",
    maxCount: 0,
  });

  const [tipInfo, setTipInfo] = useState<PostType>({
    title: "",
    body: "",
    description: "",
    tag: "TIP",
  });

  const [questionInfo, setQuestionInfo] = useState<PostType>({
    title: "",
    body: "",
    description: "",
    tag: "TIP",
  });

  const [tagSelector, setTagSelector] = useState<TAG>("TIP");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (tagSelector === "TIP") {
      setTipInfo({
        ...tipInfo,
        [name]: value,
      });
    } else if (tagSelector === "QUESTION") {
      setQuestionInfo({
        ...questionInfo,
        [name]: value,
      });
    } else {
      setProjectInfo({
        ...projectInfo,
        [name]: value,
      });
    }
  };

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (tagSelector === "TIP") {
      setTipInfo({
        ...tipInfo,
        [name]: value,
      });
    } else if (tagSelector === "QUESTION") {
      setQuestionInfo({
        ...questionInfo,
        [name]: value,
      });
    } else {
      setProjectInfo({
        ...projectInfo,
        [name]: value,
      });
    }
  };

  const onSubmitPost = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tagSelector === "TIP") {
      const res = await postTip({ body: tipInfo });
      if (res) {
        router.push("/info?page=0&size=10");
      } else {
      }
    } else if (tagSelector === "QUESTION") {
      const res = await postQuestion({ body: questionInfo });
      if (res) {
        router.push("/info?page=0&size=10");
      } else {
      }
    } else {
      const res = await postProject({ body: projectInfo });
      if (res) {
        router.push(`/project?page=0&size=10`);
      } else {
      }
    }
  };

  const onChangeBody = (url: string) => {
    if (tagSelector === "TIP") {
      setTipInfo({
        ...tipInfo,
        body: url,
      });
    } else if (tagSelector === "QUESTION") {
      setQuestionInfo({
        ...tipInfo,
        body: url,
      });
    } else {
      setProjectInfo({
        ...projectInfo,
        info: url,
      });
    }
  };

  const onChangeNumber = (value: number) => {
    setProjectInfo({
      ...projectInfo,
      maxCount: value,
    });
  };

  return {
    projectInfo,
    tipInfo,
    questionInfo,
    tag: tagSelector,
    setTag: setTagSelector,
    onChange: onChangeText,
    onChangeInput,
    onChangeBody,
    onChangeNumber,
    onSubmit: onSubmitPost,
  };
}

export { useEditForm };

"use client";

import { type ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

import type { PostType, ProjectType, TAG } from "@/entity";
import { postProject, postQuestion, postTip } from "@/shared/action";
import { makeUrlQueryString } from "@/shared/utils/query/makeQueryString";

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
    const infoUrl = makeUrlQueryString("info", 0, 10, "DESC");
    const projectUrl = makeUrlQueryString("project", 0, 10, "DESC");
    if (tagSelector === "TIP") {
      const res = await postTip({ body: tipInfo });
      if (res) {
        if (infoUrl) {
          router.push(infoUrl);
        }
      } else {
      }
    } else if (tagSelector === "QUESTION") {
      const res = await postQuestion({ body: questionInfo });
      if (res) {
        if (infoUrl) {
          router.push(infoUrl);
        }
      } else {
      }
    } else {
      const res = await postProject({ body: projectInfo });
      if (res) {
        if (projectUrl) {
          router.push(projectUrl);
        }
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

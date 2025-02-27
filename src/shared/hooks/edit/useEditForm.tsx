"use client";

import { PostType, ProjectType, TAG } from "@/entity";
import { postProject, postQuestion, postTip } from "@/shared/action";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

function useEditForm() {
  const router = useRouter();

  const token = localStorage.getItem("access-token") ?? null;

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

  const onSubmitPost = async () => {
    if (tagSelector === "TIP") {
      const res = await postTip({ body: tipInfo, token: token });
      if (res) {
        router.push(`/info/${res.id}?page=0&size=5`);
      } else {
      }
    } else if (tagSelector === "QUESTION") {
      const res = await postQuestion({ body: questionInfo, token: token });
      if (res) {
        router.push(`/info/${res.id}?page=0&size=5`);
      } else {
      }
    } else {
      const res = await postProject({ body: projectInfo, token: token });
      if (res) {
        router.push(`/project/${res.id}`);
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

  return {
    projectInfo,
    tipInfo,
    questionInfo,
    tag: tagSelector,
    setTag: setTagSelector,
    onChange: onChangeText,
    onChangeBody,
    onSubmit: onSubmitPost,
  };
}

export { useEditForm };

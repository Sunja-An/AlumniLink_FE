"use client";

import type {
  ProjectType,
  useProjectFormType,
} from "@/shared/types/edit/project";
import { type ChangeEvent, useState } from "react";

function useProjectForm<K extends keyof useProjectFormType>(
  key: K
): useProjectFormType[K] {
  const [projectInfo, setProjectInfo] = useState<ProjectType>({
    name: "",
    info: "",
    link: "",
    maxCount: 0,
    deadline: "",
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (
      name === "name" ||
      name === "info" ||
      name === "link" ||
      name === "deadline"
    )
      setProjectInfo({
        ...projectInfo,
        [name]: value,
      });
  };

  const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "maxCount") {
      setProjectInfo({
        ...projectInfo,
        maxCount: parseInt(value),
      });
    }
  };

  if (key === "name") {
    return {
      name: key,
      value: projectInfo.name,
      onChange: onChangeText,
    } as useProjectFormType[K];
  } else if (key === "info") {
    return {
      name: key,
      value: projectInfo.info,
      onChange: onChangeText,
    } as useProjectFormType[K];
  } else if (key === "link") {
    return {
      name: key,
      value: projectInfo.link,
      onChange: onChangeText,
    } as useProjectFormType[K];
  } else if (key === "maxCount") {
    return {
      name: key,
      value: projectInfo.maxCount,
      onChange: onChangeNumber,
    } as useProjectFormType[K];
  } else {
    return {
      name: key,
      value: projectInfo.deadline,
      onChange: onChangeText,
    } as useProjectFormType[K];
  }
}

export { useProjectForm };

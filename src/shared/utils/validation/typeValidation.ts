import { T_Post } from "@/entity/info/post";
import { T_Project } from "@/entity/project/project";

const isPostKey = (key: string): key is keyof T_Post => {
  const validKeys: (keyof T_Post)[] = ["title", "body", "tag", "description"];
  return validKeys.includes(key as keyof T_Post);
};

const isProjectKey = (key: string): key is keyof T_Project => {
  const validKeys: (keyof T_Project)[] = [
    "name",
    "info",
    "link",
    "deadline",
    "maxCount",
  ];
  return validKeys.includes(key as keyof T_Project);
};

export { isPostKey, isProjectKey };

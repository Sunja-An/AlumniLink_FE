import { T_Post } from "@/entity/info/post";
import { T_Project } from "@/entity/project/project";
import { T_Login, T_SignUp } from "@/entity/user/user";

export const isSignUpKey = (key: string): key is keyof T_SignUp => {
  const validKeys: (keyof T_SignUp)[] = [
    "email",
    "password",
    "gitLink",
    "nickname",
    "employed",
    "resumeLink",
  ];
  return validKeys.includes(key as keyof T_SignUp);
};

export const isSignInKey = (key: string): key is keyof T_Login => {
  const validKeys: (keyof T_Login)[] = ["email", "password"];
  return validKeys.includes(key as keyof T_Login);
};

export const isPostKey = (key: string): key is keyof T_Post => {
  const validKeys: (keyof T_Post)[] = ["title", "body", "tag", "description"];
  return validKeys.includes(key as keyof T_Post);
};

export const isProjectKey = (key: string): key is keyof T_Project => {
  const validKeys: (keyof T_Project)[] = [
    "name",
    "info",
    "link",
    "deadline",
    "maxCount",
  ];
  return validKeys.includes(key as keyof T_Project);
};

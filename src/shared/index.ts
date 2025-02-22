export * from "@/shared/layout/CustomLayout";

export * from "@/shared/components/button/EditBtn";
export * from "@/shared/components/card/InfoCard";
export * from "@/shared/components/card/MyInfoCard";
export * from "@/shared/components/card/PostTypeCard";
export * from "@/shared/components/editor/Editor";
export * from "@/shared/components/searchBar/SearchBar";
export * from "@/shared/components/card/ProjectCard";
export * from "@/shared/components/pagination/Pagination";
export * from "@/shared/components/header/Hamburger";
export * from "@/shared/components/header/Header";
export * from "@/shared/components/viewEditor/ui/ViewEditor";
export * from "@/shared/components/comment/ui/WriteComment";
export * from "@/shared/components/comment/ui/Comment";

export { RequestBtn, ListBtn } from "@/shared/components/button/CustomBtn";
export { MyProjectCard } from "@/shared/components/card/MyProjectCard";
export { LogoTypography } from "@/shared/components/animation/LogoTypography/LogoTypography";

export { get_my_info } from "@/shared/utils/get_info";
export {
  isSignUpKey,
  isSignInKey,
  isPostKey,
  isProjectKey,
} from "@/shared/utils/is_valid_type";
export { server_get_my_info } from "@/shared/utils/server_get_info";
export { makeQueryString } from "@/shared/utils/make_query_string";
export { cn } from "@/shared/utils/clsx";
export { timeChanger } from "@/shared/utils/changeTime";

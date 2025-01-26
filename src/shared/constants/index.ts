import AlumniFlag from "/public/svg/alumni.svg";
import Graduate from "/public/svg/graduate.svg";
import My from "/public/svg/my.svg";
import Question from "/public/svg/question.svg";
import RightArrow from "/public/svg/RightArrow.svg";
import Search from "/public/svg/SearchIcon.svg";
import SignOut from "/public/svg/signout.svg";
import Image from "/public/svg/image.svg";
import Docs from "/public/svg/docs.svg";

import Github from "/public/sns/GithubMark.svg";
import Instagram from "/public/sns/insta.svg";

import Logo from "/public/logo/logo.png";
import LogoNoBackground from "/public/logo/LogoNoBg.png";

export const HEADER_CONTENT = [
  {
    id: 1,
    content: "정보 찾기",
    url: "info?page=0&size=0",
    isLoginNeed: false,
  },
  {
    id: 2,
    content: "프로젝트 찾기",
    url: "project?page=0&size=0",
    isLoginNeed: false,
  },
  {
    id: 3,
    content: "마이 페이지",
    url: "my",
    isLoginNeed: true,
  },
  {
    id: 4,
    content: "로그아웃",
    url: "",
    isLoginNeed: true,
  },
];

export const ICON_ALUMNIFLAG = AlumniFlag;
export const ICON_GRADUATE = Graduate;
export const ICON_MY = My;
export const ICON_QUESTION = Question;
export const ICON_ARROW = RightArrow;
export const ICON_SEARCH = Search;
export const ICON_SIGNOUT = SignOut;
export const ICON_IMAGE = Image;
export const ICON_DOCS = Docs;

export const ICON_GITHUB = Github;
export const ICON_INSTAGRAM = Instagram;

export const IMG_LOGO = Logo;
export const IMG_NO_BG_LOGO = LogoNoBackground;

import AlumniFlag from "/public/svg/alumni.svg";
import Graduate from "/public/svg/graduate.svg";
import My from "/public/svg/my.svg";
import Question from "/public/svg/question.svg";
import RightArrow from "/public/svg/RightArrow.svg";
import Search from "/public/svg/SearchIcon.svg";
import SignOut from "/public/svg/signout.svg";
import Image from "/public/svg/image.svg";
import Docs from "/public/svg/docs.svg";
import Information from "/public/svg/Information.svg";
import Resume from "/public/svg/resume.svg";
import TwoUser from "/public/svg/TwoUser.svg";
import User from "/public/svg/User.svg";
import Bell from "/public/svg/bell.svg";

import Github from "/public/sns/GithubMark.svg";
import Instagram from "/public/sns/insta.svg";

import Logo from "/public/logo/logo.png";
import LogoNoBackground from "/public/logo/LogoNoBg.png";
import TIP_CARD from "/public/img/LifeHacksImage.jpg";
import PROJECT_CARD from "/public/img/ProjectImage.jpg";
import QUESTION_CARD from "/public/img/QuestionImage.jpg";

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

export const PostTypeCardContent = {
  TIP: "여러분들의 크고 작은 경험들을 나눠주세요!",
  PROJECT: "프로젝트 같이 할 사람을 찾고 있나요? 공고 모집을 올려보세요!",
  RESUME: "모르는 것은 죄가 아닙니다! 본인이 모르는 것들을 공유해보세요!",
};

export const ICON_ALUMNIFLAG = AlumniFlag;
export const ICON_GRADUATE = Graduate;
export const ICON_MY = My;
export const ICON_QUESTION = Question;
export const ICON_ARROW = RightArrow;
export const ICON_SEARCH = Search;
export const ICON_SIGNOUT = SignOut;
export const ICON_IMAGE = Image;
export const ICON_PROJECT = Docs;
export const ICON_INFORMATION = Information;
export const ICON_RESUME = Resume;
export const ICON_TWO_USER = TwoUser;
export const ICON_USER = User;
export const ICON_BELL = Bell;

export const ICON_GITHUB = Github;
export const ICON_INSTAGRAM = Instagram;

export const IMG_LOGO = Logo;
export const IMG_NO_BG_LOGO = LogoNoBackground;
export const IMG_QUESTION = QUESTION_CARD;
export const IMG_PROJECT = PROJECT_CARD;
export const IMG_TIP = TIP_CARD;

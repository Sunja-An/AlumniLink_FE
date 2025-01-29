"use client";

import { useEffect, useState } from "react";

import { get_my_info, UserPayload } from "@/shared/utils/get_info";
import { HEADER_CONTENT } from "@/shared/constants";
import { useRouter } from "next/navigation";

import Cookie from "js-cookie";

function Header() {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<UserPayload | false>(false);

  const [idx, setIdx] = useState<number>(1);

  const onClickRouting = (url: string) => {
    router.push(`/${url}`);
  };

  const onClickItem = (id: number, url: string) => {
    if (id === 4) {
      Logout();
    } else {
      setIdx(id);
      router.push(`/${url}`);
    }
  };

  const Logout = () => {
    Cookie.remove("access-token");
    Cookie.remove("refresh-token");
    window.location.reload();
  };

  useEffect(() => {
    const user = get_my_info();
    if (user) {
      setUserInfo(user);
    }
  }, []);

  return (
    <header className="px-6 py-10 w-full h-full flex flex-col justify-start items-center gap-14 duration-300 bg-secondary rounded-3xl shadow-lg">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1] shadow-md" />
        {userInfo ? (
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <span className="font-pretendard font-bold text-lg text-black">
              {userInfo.nickname ?? "Waiting..."}
            </span>
            <span className="font-pretendard font-light text-sm text-gray-400">
              {userInfo.email ?? "..."}
            </span>
          </div>
        ) : (
          <div className="px-10 w-full flex flex-col justify-center items-center gap-2">
            <button
              type="button"
              onClick={() => onClickRouting("login")}
              className="w-full h-12 font-pretendard font-semibold text-lg text-black rounded-2xl bg-slate-50 border-2 border-black"
            >
              로그인하기
            </button>
            <button
              type="button"
              onClick={() => onClickRouting("signup")}
              className="w-full h-12 font-pretendard font-semibold text-lg text-white rounded-2xl bg-softblack"
            >
              회원가입하기
            </button>
          </div>
        )}
      </div>
      <nav className="w-full flex flex-col justify-center items-center">
        <ul className="px-10 w-full flex flex-col justify-start items-center gap-4">
          {HEADER_CONTENT.map((item, key: number) => {
            if (item.isLoginNeed === true) {
              if (userInfo !== false) {
                return (
                  <li
                    className={`w-full py-4 text-center font-pretendard font-bold text-lg text-black rounded-2xl duration-300 ${
                      idx === item.id
                        ? "bg-[#003366] text-white"
                        : "hover:bg-gray-50 "
                    }`}
                    onClick={() => onClickItem(item.id, item.url)}
                    key={key}
                  >
                    {item.content}
                  </li>
                );
              }
            } else {
              return (
                <li
                  className={`w-full py-4 text-center font-pretendard font-bold text-lg text-black rounded-2xl duration-300 ${
                    idx === item.id
                      ? "bg-[#003366] text-white"
                      : "hover:bg-gray-50 "
                  }`}
                  onClick={() => onClickItem(item.id, item.url)}
                  key={key}
                >
                  {item.content}
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
}

export { Header };

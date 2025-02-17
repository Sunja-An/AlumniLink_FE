"use client";

import { post_request_project } from "@/shared/action/project-request.action";
import { get_my_info } from "@/shared/utils/get_info";
import { useRouter } from "next/navigation";

function RequestBtn({ id }: { id: string }) {
  const router = useRouter();
  const onClickRequest = async () => {
    if (!get_my_info()) {
      router.push("/login");
    }

    const res = await post_request_project(id);
    if (res) {
    } else {
    }
  };
  return (
    <button
      type="button"
      className="w-40 h-12 rounded-xl border bg-blue-300 hover:bg-blue-400 duration-300 group"
      onClick={onClickRequest}
    >
      <span className="font-pretendard font-bold text-sm text-gray-700 group-hover:text-white duration-300">
        가입 요청
      </span>
    </button>
  );
}

function ListBtn() {
  const router = useRouter();
  const onClickGoBack = () => {
    router.back();
  };
  return (
    <button
      type="button"
      className="w-full h-12 rounded-full border bg-slate-400"
      onClick={onClickGoBack}
    >
      <span className="font-pretendard font-bold text-sm text-black">
        목록 돌아가기
      </span>
    </button>
  );
}

export { RequestBtn, ListBtn };

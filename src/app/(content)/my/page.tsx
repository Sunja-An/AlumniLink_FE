// action functions
import {
  getMyPosts,
  getMyProjects,
  tokenDecoder,
  getProjectRequests,
  StaticProfile,
} from "@/shared";

// widget layer
import { MyPostView, MyProjectView, MyRequestsView } from "@/widgets";
import Link from "next/link";

export default async function AlumniLink_MyPage() {
  const postInfoData = getMyPosts();
  const projectInfoData = getMyProjects();
  const projectRequestData = getProjectRequests();

  const userData = tokenDecoder();

  const [postInfos, projectInfos, user, projectRequests] = await Promise.all([
    postInfoData,
    projectInfoData,
    userData,
    projectRequestData,
  ]);

  return (
    <div className="px-60 w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-start items-start gap-8">
        <div className="profile-section w-full flex flex-col justify-start items-center gap-4">
          <StaticProfile />
          <span className="font-pretendard font-bold text-xl text-black">
            {user ? user.userData.nickname : "Unknown"}
          </span>
          <Link
            href={"/edit"}
            className="min-w-24 w-24 h-12 min-h-12 rounded-md flex justify-center items-center bg-lime-200 hover:bg-lime-300 duration-300"
          >
            <span className="font-pretendard font-bold text-sm text-black">
              새 글 작성
            </span>
          </Link>
        </div>
        <div className="w-full h-[2px] rounded-full bg-gray-200" />
        <div className="w-full flex flex-col justify-start items-start gap-8">
          <div className="w-full flex justify-start items-center gap-2">
            <span className="font-pretendard font-bold text-lg text-black">
              내가 쓴 글
            </span>
            <span className="font-pretendard font-bold text-lg text-blue-400">
              {postInfos.totalElements}
            </span>
          </div>
          <MyPostView postInfos={postInfos} />
        </div>
        <div className="w-full h-[2px] rounded-full bg-gray-200" />
        <div className="w-full flex flex-col justify-start items-start gap-8">
          <div className="w-full flex justify-start items-center gap-2">
            <span className="font-pretendard font-bold text-lg text-black">
              나의 프로젝트
            </span>
            <span className="font-pretendard font-bold text-lg text-blue-400">
              {projectInfos.totalElements}
            </span>
          </div>
          <MyProjectView projectInfos={projectInfos} />
        </div>
        <div className="w-full h-[2px] rounded-full bg-gray-200" />
        <div className="w-full flex flex-col justify-start items-start gap-8">
          <span className="font-pretendard font-bold text-lg text-black">
            프로젝트 참여 현황
          </span>
          <MyRequestsView />
        </div>
      </div>
    </div>
  );
}

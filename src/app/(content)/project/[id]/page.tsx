import {
  dueDayCalculate,
  getSingleProject,
  ListBtn,
  RequestBtn,
  Tag,
  timeFormatter,
  tokenDecoder,
  ViewEditor,
  GithubBookMarkCard,
} from "@/shared";

export default async function AlumniLink_Project_SinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = (await params) ?? {
    id: "0",
  };

  if (Array.isArray(id) || id === undefined) {
    return (
      <div className="py-5 w-full h-full flex justify-center items-center">
        <span className="font-pretendard font-bold xl:text-5xl lg:text-3xl md:text-xl text-black">
          URL 이 잘못되었습니다.
        </span>
      </div>
    );
  }

  const userData = tokenDecoder();
  const ProjectSingle = getSingleProject(id);

  const [user, ProjectSingleData] = await Promise.all([
    userData,
    ProjectSingle,
  ]);

  console.log(user);

  if (ProjectSingleData === false || ProjectSingleData === undefined) {
    return (
      <div className="px-20 py-10 w-full flex flex-col justify-center items-center">
        <span className="font-pretendard font-bold text-5xl text-black">
          서버에 오류가 있습니다.🥲
        </span>
      </div>
    );
  }

  const DeadlineConverter = () => {
    if (ProjectSingleData.nowCount === ProjectSingleData.maxCount) {
      return (
        <span className="font-pretendard font-bold text-lg text-red-600">
          충원되었습니다!
        </span>
      );
    }
    const message = dueDayCalculate(ProjectSingleData.deadline);
    if (message === "만료되었습니다.") {
      return (
        <span className="font-pretendard font-bold text-lg text-red-600">
          {message}
        </span>
      );
    } else {
      return (
        <span className="font-pretendard font-bold text-lg text-blue-300">
          {message}
        </span>
      );
    }
  };

  return (
    <div className="px-32 py-5 w-full flex justify-start items-start lg:flex-col lg:gap-8">
      <div className="w-full flex flex-col justify-start items-start gap-8">
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-black text-5xl text-black">
            {ProjectSingleData.name}
          </span>
        </div>
        <div className="w-full flex justify-start items-center">
          <Tag content="PROJECT" />
        </div>
        <div className="w-full flex justify-start items-center">
          {timeFormatter(ProjectSingleData.startTime)}
        </div>
        <div className="w-3/4 flex justify-center items-center">
          <GithubBookMarkCard githubLink={ProjectSingleData.gitLink} />
        </div>
        <div className="mt-8 w-full flex flex-col justify-start items-start">
          <ViewEditor markdown={ProjectSingleData.info} />
        </div>
        <div className="pl-4 w-full flex justify-start items-center">
          <ListBtn path="project" />
        </div>
      </div>
      <div className="sticky px-5 py-10 min-w-80 w-80 min-h-40 flex flex-col justify-start items-center rounded-lg bg-[#FFFAFA] shadow-lg gap-4">
        <span className="font-pretendard font-bold text-xl text-black">
          프로젝트 정보
        </span>
        <div className="w-full flex justify-center items-center gap-4">
          <span className="font-pretendard font-bold text-sm text-black">
            {ProjectSingleData.nowCount}
          </span>
          <span className="font-pretendard font-bold text-sm text-black">
            {ProjectSingleData.maxCount}
          </span>
        </div>
        {DeadlineConverter()}
        <RequestBtn
          id={id}
          isExpired={
            dueDayCalculate(ProjectSingleData.deadline) === "만료되었습니다."
          }
        />
      </div>
    </div>
  );
}

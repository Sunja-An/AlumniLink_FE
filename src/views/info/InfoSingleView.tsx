import { get_single_info } from "./api/info.action";

async function InfoSingleView({ id }: { id: string }) {
  const data = await get_single_info(id);
  if (data === false || data === undefined) {
    return (
      <div className="px-20 py-10 w-full flex flex-col justify-center items-center">
        <span className="font-pretendard font-bold text-5xl text-black">
          서버에 오류가 있습니다.🥲
        </span>
      </div>
    );
  }
  return (
    <div className="px-20 py-10 w-full flex flex-col justify-start items-start">
      <div className="">
        <span className="font-pretendard font-black text-2xl text-black">
          {data.title ?? "Loading..."}
        </span>
      </div>
    </div>
  );
}

export { InfoSingleView };

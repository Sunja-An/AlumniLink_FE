import { T_SinglePost } from "@/entity/info/post";
import { InfoCard } from "@/shared";
import { get_info_list } from "@/widgets/info/api/info.action";

async function ServerInfoList() {
  const data = await get_info_list(0, 0);
  if (data === false) {
    return (
      <div className="w-full flex flex-col justify-start items-center">
        <span className="font-pretendard font-bold text-5xl text-black">
          SERVER ERROR
        </span>
      </div>
    );
  } else if (data.totalElements === 0) {
    return (
      <div className="w-full flex flex-col justify-start items-center">
        <span className="font-pretendard font-bold text-5xl text-black">
          데이터가 없어용..
        </span>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col justify-start items-center">
        {data.content.map((item: T_SinglePost, key: number) => {
          return <InfoCard content={item} key={key} />;
        })}
      </div>
    );
  }
}

export { ServerInfoList };

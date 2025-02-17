import { ClientInfoList } from "@/widgets/info/ClientInfoList";
import { get_info_list } from "@/widgets/info/api/info.action";

export default async function InfoView({
  page,
  size,
}: {
  page: number;
  size: number;
}) {
  const InfoDatas = await get_info_list(page, size);
  return (
    <div className="px-20 py-5 w-full h-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-start items-start">
        <ClientInfoList data={InfoDatas} />
      </div>
    </div>
  );
}

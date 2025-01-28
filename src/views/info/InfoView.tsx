import { server_get_my_info } from "@/shared/utils/Server_get_token";

import { InfoUpload } from "@/widgets/upload";
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
  const userInfo = await server_get_my_info();
  return (
    <div className="px-20 w-full h-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex justify-start items-center">
        {userInfo && <InfoUpload />}
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <ClientInfoList data={InfoDatas} />
      </div>
    </div>
  );
}

import { server_get_my_info } from "@/shared/utils/Server_get_token";
import { ServerInfoList } from "@/widgets/info/ServerInfoList";
import { InfoUpload } from "@/widgets/upload";
import React from "react";

export default async function InfoView() {
  const userInfo = await server_get_my_info();
  return (
    <div className="px-20 w-full h-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex justify-start items-center">
        {userInfo && <InfoUpload />}
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <ServerInfoList />
      </div>
    </div>
  );
}

import { server_get_my_info } from "@/shared/utils/Server_get_token";
import { ProjectUpload } from "@/widgets/upload";
import React from "react";

export default async function ProjectView() {
  const userInfo = await server_get_my_info();
  return (
    <div className="px-20 w-full h-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex justify-start items-center">
        {userInfo && <ProjectUpload />}
      </div>
      <div className="w-full flex flex-col justify-start items-start"></div>
    </div>
  );
}

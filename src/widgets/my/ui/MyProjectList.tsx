"use client";

import { T_SingleProject } from "@/entity/project/project";
import { useEffect, useState } from "react";
import { getMyProjects } from "@/widgets/my/api/getMyInfo";

function MyProjectList() {
  const [data, setData] = useState<T_SingleProject[] | false>(false);
  useEffect(() => {
    getMyProjects()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <div className="w-full flex justify-start items-start"></div>;
}

export { MyProjectList };

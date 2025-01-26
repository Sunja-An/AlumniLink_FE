"use client";

import { useEffect, useState } from "react";
import { getMyPosts } from "@/widgets/my/api/getMyInfo";
import { T_SinglePost } from "@/entity/info/post";
import { MyInfoCard } from "@/shared";

function MyInfoList() {
  const [data, setData] = useState<T_SinglePost[] | false>(false);
  useEffect(() => {
    getMyPosts()
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full flex justify-start items-start">
      {data &&
        data.map((item: T_SinglePost, key: number) => {
          return <MyInfoCard content={item} key={key} />;
        })}
    </div>
  );
}

export { MyInfoList };

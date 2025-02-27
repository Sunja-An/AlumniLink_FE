import { EditWidget } from "@/widgets";

export default async function AlumniLink_Edit_Page() {
  return (
    <div className="px-60 w-full h-full flex flex-col justify-start items-center gap-8">
      <div className="w-full flex flex-col justify-start items-start">
        <span className="font-pretendard font-bold text-xl text-black">
          어떤 글을 쓰시고 싶으신가요?
        </span>
      </div>
      <EditWidget />
    </div>
  );
}

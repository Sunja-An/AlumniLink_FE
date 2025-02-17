import { InfoSingleView } from "@/views/info/InfoSingleView";

export default async function AlumniLink_Info_SinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = (await params) ?? {
    id: "0",
  };
  if (Array.isArray(id) || id === undefined) {
    console.log(id);
    return (
      <div className="py-5 w-full h-full flex justify-center items-center">
        <span className="font-pretendard font-bold xl:text-5xl lg:text-3xl md:text-xl text-black">
          URL 이 잘못되었습니다.
        </span>
      </div>
    );
  }
  return <InfoSingleView id={id} />;
}

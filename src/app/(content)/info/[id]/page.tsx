import { InfoSingleView } from "@/views/info/InfoSingleView";

export default async function AlumniLink_Info_SinglePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <InfoSingleView id={id} />;
}

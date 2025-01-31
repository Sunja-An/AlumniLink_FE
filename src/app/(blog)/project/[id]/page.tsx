import { ProjectSingleView } from "@/views/project/ProjectSingleView";
import React from "react";

export default function AlumniLink_Project_SinglePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <ProjectSingleView id={id} />;
}

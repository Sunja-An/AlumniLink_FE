"use client";

import { type T_SingleProject } from "@/entity/project/project";
import React from "react";

function ProjectCard({
  content,
  className,
}: {
  content: T_SingleProject;
  className?: string;
}) {
  return (
    <div className={`${className ?? ""}`}>
      <div className="">
        <span>{content.name}</span>
      </div>
    </div>
  );
}

export { ProjectCard };

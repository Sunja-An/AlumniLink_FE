"use client";

import { T_Project } from "@/entity/project/project";
import React, { useState } from "react";

function ProjectUpload() {
  const [projectInfo, setProjectInfo] = useState<T_Project>({
    name: "",
    info: "",
    gitLink: "",
  });
  return <div className=""></div>;
}

export { ProjectUpload };

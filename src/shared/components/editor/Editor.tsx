"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@/shared/components/editor/EditorInstance"),
  { ssr: false }
);

export { Editor };

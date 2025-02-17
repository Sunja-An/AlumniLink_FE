"use client";

import dynamic from "next/dynamic";

const ViewEditor = dynamic(
  () => import("@/shared/components/viewEditor/ui/ViewEditorInstance"),
  { ssr: false }
);

export { ViewEditor };

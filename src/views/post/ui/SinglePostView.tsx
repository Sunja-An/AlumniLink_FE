"use client";

import { Editor } from "@/shared/components";
import React from "react";

function SinglePostView({ content }: { content: string }) {
  const ViewContentProps = {
    type: false,
    value: content,
  };
  return (
    <div className="w-full">
      <Editor {...ViewContentProps} />
    </div>
  );
}

export { SinglePostView };

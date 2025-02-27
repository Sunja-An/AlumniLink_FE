"use client";

import React, { type ChangeEvent } from "react";

type TitleEditorType = {
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

function TitleEditor({ name, onChange }: TitleEditorType) {
  return (
    <textarea
      name={name}
      rows={2}
      maxLength={100}
      id="title-editor"
      onChange={onChange}
      placeholder="Title"
      className="p-5 w-full font-pretendard font-semibold text-sm text-black rounded-xl border-2 border-black"
    />
  );
}

export { TitleEditor };

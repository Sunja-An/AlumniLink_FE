"use client";

import React, { type ChangeEvent } from "react";

type TextAreaEditorType = {
  row: number;
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
  placeholder?: string;
};

function TextAreaEditor({
  name,
  row,
  onChange,
  maxLength,
  placeholder,
}: TextAreaEditorType) {
  return (
    <textarea
      name={name}
      rows={row}
      maxLength={maxLength}
      id="title-editor"
      onChange={onChange}
      placeholder={placeholder ?? "제목을 입력해주세요"}
      className="p-5 w-full font-pretendard font-semibold text-sm text-black rounded-xl border-2 border-black"
    />
  );
}

export { TextAreaEditor };

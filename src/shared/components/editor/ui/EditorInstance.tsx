"use client";

import React, { useEffect } from "react";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

type EditorInstanceType = {
  setMarkdown: (url: string) => void;
};

export default function EditorInstance({ setMarkdown }: EditorInstanceType) {
  const editor = useCreateBlockNote();

  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
  };

  useEffect(() => {
    // on mount, trigger initial conversion of the initial content to md
    onChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center bg-transparent focus:outline-none">
      <BlockNoteView
        editor={editor}
        editable={true}
        onChange={onChange}
        className="w-full h-full rounded-lg overflow-y-auto bg-transparent focus:outline-none"
      />
    </div>
  );
}

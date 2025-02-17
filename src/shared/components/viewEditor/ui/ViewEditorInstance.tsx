"use client";

import React, { useEffect } from "react";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView, Theme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

type EditorInstanceType = {
  markdown: string;
};

const lightRedTheme = {
  colors: {
    editor: {
      text: "#222222",
      background: "transparent",
    },
  },
  borderRadius: 4,
  fontFamily: "pretendard",
} satisfies Theme;

const darkRedTheme = {
  ...lightRedTheme,
  colors: {
    ...lightRedTheme.colors,
    editor: {
      text: "#121212",
      background: "#transparent",
    },
  },
} satisfies Theme;

const alumniLinkTheme = {
  light: lightRedTheme,
  dark: darkRedTheme,
};

export default function ViewEditorInstance({ markdown }: EditorInstanceType) {
  const editor = useCreateBlockNote();

  useEffect(() => {
    async function loadInitialHTML() {
      const blocks = await editor.tryParseMarkdownToBlocks(markdown);
      editor.replaceBlocks(editor.document, blocks);
    }
    loadInitialHTML();
  }, [editor]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center bg-transparent focus:outline-none">
      <BlockNoteView
        editor={editor}
        editable={false}
        style={{ background: "transparent" }}
        theme={alumniLinkTheme}
        className="w-full h-full rounded-lg overflow-y-auto focus:outline-none"
      />
    </div>
  );
}

"use client";

import {
  useCallback,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView, lightDefaultTheme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

type T_Editor = {
  type: boolean;
  setContent?: Dispatch<SetStateAction<string>>;
  value?: string;
};

export default function Editor({ type, setContent, value }: T_Editor) {
  const editor = useCreateBlockNote();

  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    if (setContent) {
      setContent(markdown);
    }
  };

  // For initialization; on mount, convert the initial Markdown to blocks and replace the default editor's content
  useEffect(() => {
    async function loadInitialHTML() {
      const blocks = await editor.tryParseMarkdownToBlocks(
        value ?? "**Input Your Content!!**"
      );
      editor.replaceBlocks(editor.document, blocks);
    }
    loadInitialHTML();
  }, [editor]);

  if (!type) {
    return (
      <BlockNoteView
        editor={editor}
        editable={false}
        content={value}
        theme={lightDefaultTheme}
      />
    );
  } else {
    return (
      <BlockNoteView
        editor={editor}
        editable={true}
        onChange={onChange}
        theme={lightDefaultTheme}
      />
    );
  }
}

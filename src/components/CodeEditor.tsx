"use client";
import Editor, { OnMount } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { customThemes } from "@/lib/themes";

interface CodeEditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
  theme: string;
}

export default function CodeEditor({ code, onChange, theme }: CodeEditorProps) {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    // Define custom themes
    for (const [name, def] of Object.entries(customThemes)) {
      monaco.editor.defineTheme(name, def);
    }
    // Set initial theme if it's custom
    if (theme in customThemes || theme === "vs-dark" || theme === "light" || theme === "hc-black") {
      monaco.editor.setTheme(theme);
    }
  };

  return (
    <Editor
      height="400px"
      language="javascript"
      value={code}
      onChange={onChange}
      onMount={handleEditorDidMount}
      options={{
        fontSize: 16,
        fontFamily: "Fira Code, monospace",
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        lineNumbers: "on",
        tabSize: 2,
        automaticLayout: true,
      }}
      theme={theme === "nightowl" ? "nightOwl" : theme}
    />
  );
}

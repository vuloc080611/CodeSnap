"use client";
import { useState, useRef } from "react";
import CodeEditor from "@/components/CodeEditor";
import ThemePicker from "@/components/ThemePicker";
import BackgroundPicker from "@/components/BackgroundPicker";
import ExportButton from "@/components/ExportButton";
import WindowMockup from "@/components/WindowMockup";
import { themes } from "@/lib/themes";

const defaultCode = `function hello() {\n  console.log("Hello, world!");\n}\n\nhello();`;

export default function Home() {
  const [code, setCode] = useState(defaultCode);
  const [themeId, setThemeId] = useState("vs-dark");
  const [background, setBackground] = useState("#0f172a");
  const captureRef = useRef<HTMLDivElement>(null);

  const selectedTheme = themes.find((t) => t.id === themeId) || themes[0];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-white">⚡ CodeSnap</h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-center mb-6">
        <ThemePicker selected={themeId} onSelect={setThemeId} />
        <BackgroundPicker selected={background} onSelect={setBackground} />
        <ExportButton targetRef={captureRef} filename="my-code" />
      </div>

      {/* Preview / captured area */}
      <WindowMockup ref={captureRef} background={background} windowTitle="code.js">
        <CodeEditor code={code} onChange={(val) => setCode(val || "")} theme={themeId} />
      </WindowMockup>

      <p className="mt-6 text-gray-400 text-sm">
        Dán code, chọn theme, bấm "Tải ảnh PNG". Ảnh có nền trong suốt (transparent) để bạn tự do ghép.
      </p>
    </div>
  );
}

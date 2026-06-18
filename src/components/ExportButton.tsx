"use client";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { useCallback } from "react";

interface ExportButtonProps {
  targetRef: React.RefObject<HTMLDivElement>;
  filename?: string;
}

export default function ExportButton({ targetRef, filename = "codesnap" }: ExportButtonProps) {
  const exportImage = useCallback(async () => {
    if (targetRef.current) {
      try {
        const dataUrl = await toPng(targetRef.current, {
          pixelRatio: 2,
          backgroundColor: "transparent",
        });
        saveAs(dataUrl, `${filename}.png`);
      } catch (error) {
        console.error("Oops, could not generate image", error);
      }
    }
  }, [targetRef, filename]);

  return (
    <button
      onClick={exportImage}
      className="flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition"
    >
      <span>📸</span> Tải ảnh PNG
    </button>
  );
}

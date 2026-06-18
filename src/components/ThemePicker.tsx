"use client";
import { themes, Theme } from "@/lib/themes";

interface ThemePickerProps {
  selected: string;
  onSelect: (themeId: string) => void;
}

export default function ThemePicker({ selected, onSelect }: ThemePickerProps) {
  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`px-3 py-1 rounded-full text-sm border transition ${
            selected === t.id
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-gray-500 text-gray-300 hover:border-gray-300"
          }`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
}

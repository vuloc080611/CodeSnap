"use client";
const backgrounds = [
  { name: "Solid Dark", value: "#0f172a" },
  { name: "Gradient Blue", value: "linear-gradient(135deg, #1e3a8a, #3b82f6)" },
  { name: "Gradient Sunset", value: "linear-gradient(135deg, #f97316, #ec4899)" },
  { name: "Gradient Forest", value: "linear-gradient(135deg, #064e3b, #10b981)" },
  { name: "Radial Light", value: "radial-gradient(circle, #f0f9ff, #bae6fd)" },
];

interface BackgroundPickerProps {
  selected: string;
  onSelect: (bg: string) => void;
}

export default function BackgroundPicker({ selected, onSelect }: BackgroundPickerProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {backgrounds.map((bg) => (
        <button
          key={bg.name}
          onClick={() => onSelect(bg.value)}
          className={`w-8 h-8 rounded-full border-2 ${
            selected === bg.value ? "border-blue-500 scale-110" : "border-gray-600"
          }`}
          style={{ background: bg.value }}
          title={bg.name}
        />
      ))}
    </div>
  );
}

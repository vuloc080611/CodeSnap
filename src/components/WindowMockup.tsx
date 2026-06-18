"use client";
import { forwardRef } from "react";

interface WindowMockupProps {
  children: React.ReactNode;
  background: string;
  windowTitle?: string;
}

const WindowMockup = forwardRef<HTMLDivElement, WindowMockupProps>(
  ({ children, background, windowTitle = "CodeSnap" }, ref) => {
    return (
      <div
        ref={ref}
        className="rounded-xl overflow-hidden shadow-2xl border border-gray-700"
        style={{ background, minWidth: "600px" }}
      >
        {/* Title bar */}
        <div className="flex items-center px-4 py-2 bg-gray-900/80">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="flex-1 text-center text-sm text-gray-400 font-medium">
            {windowTitle}
          </div>
          <div className="w-12"></div> {/* spacer */}
        </div>
        {/* Code area */}
        <div className="p-4">{children}</div>
      </div>
    );
  }
);
WindowMockup.displayName = "WindowMockup";
export default WindowMockup;

import React from "react";

const themes = [
  { icon: "💼", label: "Tech Interview Prep", value: "tech" },
  { icon: "🧳", label: "Travel Assistant", value: "travel" },
  { icon: "🧠", label: "Mental Wellness", value: "wellness" },
];

export default function Taskbar({ onSelectTheme }) {
  return (
    <div className="flex justify-center gap-4 p-4 bg-gray-100 rounded-xl shadow-md flex-wrap">
      {themes.map((theme) => (
        <button
          key={theme.value}
          onClick={() => onSelectTheme(theme.value)}
          className="px-4 py-2 bg-white hover:bg-blue-100 text-sm rounded-lg shadow transition-all duration-200"
        >
          <span className="mr-2 text-lg">{theme.icon}</span>
          {theme.label}
        </button>
      ))}
    </div>
  );
}
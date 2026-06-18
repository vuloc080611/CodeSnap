export interface Theme {
  id: string;
  name: string;
  editorTheme: string;  // Monaco Editor theme name
  background: string;   // CSS background of the window
}

export const themes: Theme[] = [
  { id: "vs-dark", name: "VS Code Dark", editorTheme: "vs-dark", background: "#1e1e1e" },
  { id: "light", name: "Light", editorTheme: "light", background: "#ffffff" },
  { id: "hc-black", name: "High Contrast", editorTheme: "hc-black", background: "#000000" },
  { id: "nightowl", name: "Night Owl", editorTheme: "nightOwl", background: "#011627" },
];

// You can add more Monaco themes by importing their JSON definition.
// For this starter, we'll include Night Owl definition inline.
export const customThemes = {
  nightOwl: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "637777", fontStyle: "italic" },
      { token: "keyword", foreground: "c792ea" },
      { token: "string", foreground: "ecc48d" },
      { token: "number", foreground: "f78c6c" },
      { token: "type", foreground: "82aaff" },
      { token: "function", foreground: "82aaff" },
      { token: "variable", foreground: "c792ea" },
    ],
    colors: {
      "editor.background": "#011627",
      "editor.foreground": "#d6deeb",
      "editorLineNumber.foreground": "#4b6479",
      "editor.selectionBackground": "#1d3b53",
    },
  },
};

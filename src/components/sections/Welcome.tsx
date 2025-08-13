// src/components/content/sections/Welcome.tsx

import { commandList } from "../../lib/commands";
// FIX 1: Import the ThemeColors type from your central types file.
import { ThemeColors } from "../../types";

// FIX 2: Replace 'any' with the specific 'ThemeColors' type.
const Welcome = ({ themeColors }: { themeColors: ThemeColors }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-8 p-8">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-full blur-3xl scale-150"></div>
      <div className="relative text-8xl animate-bounce">👋</div>
    </div>
    <div className="space-y-4 max-w-2xl">
      <h1
        className={`text-5xl font-bold ${themeColors.text} bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent`}
      >
        Welcome to My Interactive Portfolio
      </h1>
      <p className={`text-xl ${themeColors.textSecondary} leading-relaxed`}>
        Use the terminal to navigate through my digital world.
      </p>
      <div
        className={`flex items-center justify-center space-x-3 ${themeColors.textSecondary} text-lg`}
      >
        <span>Type</span>
        <code
          className={`${themeColors.bgSecondary} px-4 py-2 rounded-lg ${themeColors.accent} font-mono text-base border ${themeColors.border} shadow-lg`}
        >
          help
        </code>
        <span>to get started.</span>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-full max-w-lg">
      {Object.keys(commandList)
        .filter((cmd) => !["help", "clear", "theme"].includes(cmd))
        .map((cmd) => (
          <div
            key={cmd}
            className={`${themeColors.bgSecondary} p-3 rounded-lg border ${themeColors.border} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
          >
            <code
              className={`${themeColors.accent} text-sm group-hover:scale-105 transition-transform block`}
            >
              {cmd}
            </code>
          </div>
        ))}
    </div>
  </div>
);

export default Welcome;

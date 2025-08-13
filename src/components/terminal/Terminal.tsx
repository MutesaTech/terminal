// src/components/terminal/Terminal.tsx

import { Terminal as TerminalIcon } from "lucide-react";
// Import the new ThemeColors type
import { Theme, Command, ThemeColors } from "../../types/";
import { themes } from "../../lib/themes";
import History from "./History";
import Input from "./Input";

interface TerminalProps {
  theme: Theme;
  history: Command[];
  input: string;
  setInput: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  terminalRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
}

// Replace 'any' with the specific 'ThemeColors' type
const TerminalHeader: React.FC<{ themeColors: ThemeColors }> = ({
  themeColors,
}) => (
  <div
    className={`${themeColors.bgSecondary} px-4 py-2 border-b ${themeColors.border} flex items-center`}
  >
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>
    <div className="ml-4 flex items-center text-sm">
      <TerminalIcon size={16} className="mr-2" />
      <span className={themeColors.textSecondary}>Terminal</span>
    </div>
  </div>
);

const Terminal: React.FC<TerminalProps> = ({
  theme,
  history,
  input,
  setInput,
  handleKeyDown,
  handleSubmit,
  terminalRef,
  inputRef,
}) => {
  const themeColors = themes[theme].colors;

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className={`h-full ${themeColors.terminal} ${themeColors.text} font-mono text-sm flex flex-col transition-colors duration-300`}
    >
      <TerminalHeader themeColors={themeColors} />
      <div
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto"
        onClick={handleTerminalClick}
      >
        <History history={history} themeColors={themeColors} />
        <Input
          input={input}
          onInputChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          inputRef={inputRef}
          themeColors={themeColors}
        />
      </div>
    </div>
  );
};

export default Terminal;

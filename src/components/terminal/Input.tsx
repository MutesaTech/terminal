import React from "react";

interface InputProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  themeColors: { prompt: string; textSecondary: string };
}

const PromptDisplay = ({
  themeColors,
}: {
  themeColors: { prompt: string; textSecondary: string };
}) => (
  <div className="flex items-center">
    <span className={themeColors.prompt}>guest@portfolio</span>
    <span className={`${themeColors.textSecondary} mx-1`}>:</span>
    <span className="text-cyan-400">~</span>
    <span className={`${themeColors.textSecondary} mx-1`}>$</span>
  </div>
);

const Input: React.FC<InputProps> = ({
  input,
  onInputChange,
  onKeyDown,
  onSubmit,
  inputRef,
  themeColors,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-2">
      <PromptDisplay themeColors={themeColors} />
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        className="flex-1 bg-transparent outline-none"
        autoComplete="off"
        autoFocus
      />
    </form>
  );
};

export default Input;

"use client";
import Terminal from "./components/terminal/Terminal";
import ContentDisplay from "./components/content/ContentDisplay";
import { useTerminal } from "./hooks/useTerminal";
import { themes } from "./utils/themes";

export default function Home() {
  const {
    input,
    setInput,
    history,
    theme,
    currentSection,
    isContentVisible,
    terminalRef,
    inputRef,
    handleSubmit,
    handleKeyDown,
  } = useTerminal();

  const themeColors = themes[theme].colors;

  return (
    <main
      className={`min-h-screen ${themeColors.bg} flex flex-col lg:flex-row transition-colors duration-300`}
    >
      <div
        className={`w-full lg:w-3/5 border-b lg:border-b-0 lg:border-r ${themeColors.border}`}
      >
        <ContentDisplay
          currentSection={currentSection}
          isVisible={isContentVisible}
          theme={theme}
        />
      </div>
      <div className="w-full lg:w-2/5 h-[50vh] lg:h-auto">
        <Terminal
          theme={theme}
          history={history}
          input={input}
          setInput={setInput}
          handleKeyDown={handleKeyDown}
          handleSubmit={handleSubmit}
          terminalRef={terminalRef}
          inputRef={inputRef}
        />
      </div>
    </main>
  );
}

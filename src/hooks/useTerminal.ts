import { useState, useEffect, useCallback, useRef } from "react";
import { Command, Theme } from "../types";
// Import all the new functions and the commandList
import { commandList, getHelp, getDate, getSystemInfo } from "../lib/commands";
import { themes } from "../lib/themes";

export const useTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState<Theme>("cyberpunk");
  const [currentSection, setCurrentSection] = useState("welcome");
  const [isContentVisible, setIsContentVisible] = useState(true);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandHistoryRef = useRef<string[]>([]);

  // Welcome message
  useEffect(() => {
    addToHistory({
      input: "",
      output: `Welcome to my portfolio! Type 'help' to see available commands.`,
    });
  }, []);

  // Auto-focus and scroll logic
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addToHistory = (command: Command) => {
    setHistory((prev) => [...prev, command]);
    if (command.input) {
      commandHistoryRef.current.push(command.input);
    }
    setHistoryIndex(commandHistoryRef.current.length);
  };

  const handleCommand = useCallback(
    (cmd: string) => {
      const [command, ...args] = cmd.toLowerCase().trim().split(" ");
      let output: React.ReactNode = "";
      let newSection = currentSection;

      addToHistory({ input: cmd, output: "" }); // Show command immediately

      setTimeout(() => {
        switch (command) {
          // FIX: Updated help case to handle arguments
          case "help":
            output = getHelp(args[0]);
            break;
          case "whoami":
          case "skills":
          case "projects":
          case "experience":
          case "contact":
            newSection = command;
            output = `Loading ${command}...`;
            break;
          case "clear":
            setHistory([]);
            newSection = "welcome";
            break;
          case "theme": {
            const newTheme = args[0] as Theme;
            if (themes[newTheme]) {
              setTheme(newTheme);
              output = `Theme changed to ${themes[newTheme].name}.`;
            } else {
              // Use the detailed help function for themes
              output = getHelp("theme");
            }
            break;
          }
          // FIX: Added cases for the restored commands
          case "date":
            output = getDate();
            break;
          case "system":
            output = getSystemInfo();
            break;
          default:
            output = commandList[command]
              ? `Command not found: ${command}. Type 'help' for a list of commands.`
              : `Command not found: ${command}. Type 'help' for a list of commands.`;
            break;
        }

        if (newSection !== currentSection) {
          setIsContentVisible(false);
          setTimeout(() => {
            setCurrentSection(newSection);
            setIsContentVisible(true);
          }, 300); // Match animation duration
        }

        setHistory((prev) => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1] = {
            ...newHistory[newHistory.length - 1],
            output,
          };
          return newHistory;
        });
      }, 300); // Simulate processing time
    },
    [currentSection]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistoryRef.current[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < commandHistoryRef.current.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistoryRef.current[newIndex]);
      } else {
        setHistoryIndex(commandHistoryRef.current.length);
        setInput("");
      }
    }
  };

  return {
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
  };
};

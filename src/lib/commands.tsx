import { themes } from "./themes";

// Interface for detailed command information
interface CommandDetail {
  description: string;
  usage?: string;
}

// A more detailed list of all available commands
export const commandList: Record<string, CommandDetail> = {
  help: {
    description: "Displays this help message or info about a specific command.",
    usage: "help [command]",
  },
  whoami: {
    description: "Displays detailed information about me.",
  },
  skills: {
    description: "Lists my technical skills and areas of expertise.",
  },
  projects: {
    description: "Showcases my featured projects.",
  },
  experience: {
    description: "Displays my professional work experience in a timeline.",
  },
  contact: {
    description: "Shows my contact information and social links.",
  },
  theme: {
    description: "Changes the current theme or lists available themes.",
    usage: "theme [theme_name]",
  },
  date: {
    description: "Displays the current date and time in Kigali.",
  },
  system: {
    description: "Shows technical information about your system.",
  },
  clear: {
    description: "Clears the terminal screen.",
  },
};

/**
 * Generates the help output.
 * If a command is specified, it shows detailed help for that command.
 * Otherwise, it shows the list of all commands.
 * @param command (optional) The specific command to get help for.
 * @returns A formatted help string.
 */
export const getHelp = (command?: string): string => {
  if (command && commandList[command]) {
    const detail = commandList[command];
    let output = `<span class="text-fuchsia-400">${command}</span>: ${detail.description}`;
    if (detail.usage) {
      output += `\nUsage: <span class="text-cyan-400">${detail.usage}</span>`;
    }
    if (command === "theme") {
      output += `\nAvailable themes: ${Object.keys(themes).join(", ")}`;
    }
    return output;
  }

  const allCommands = Object.entries(commandList)
    .map(
      ([name, detail]) =>
        `  <span class="text-fuchsia-400">${name.padEnd(12, " ")}</span>- ${
          detail.description
        }`
    )
    .join("\n");

  return `Available commands:\n${allCommands}\n\nType 'help [command]' for more details.`;
};

/**
 * Gets the current date and time formatted for Kigali.
 */
export const getDate = (): string => {
  return new Date().toLocaleString("en-US", {
    timeZone: "Africa/Kigali",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

/**
 * Gathers and formats system information from the browser.
 */
export const getSystemInfo = (): string => {
  const ua = navigator.userAgent;
  let browserName = "Unknown";
  if (ua.includes("Firefox")) browserName = "Firefox";
  else if (ua.includes("Opera") || ua.includes("OPR")) browserName = "Opera";
  else if (ua.includes("Edge")) browserName = "Edge";
  else if (ua.includes("Chrome")) browserName = "Chrome";
  else if (ua.includes("Safari")) browserName = "Safari";

  const os = navigator.platform;
  const screen = `${window.screen.width}x${window.screen.height}`;
  const viewport = `${window.innerWidth}x${window.innerHeight}`;
  const language = navigator.language;

  const info = [
    `User Agent : ${ua}`,
    `Browser    : ${browserName}`,
    `OS         : ${os}`,
    `Screen     : ${screen}`,
    `Viewport   : ${viewport}`,
    `Language   : ${language}`,
  ];
  return `System Information:\n\n${info.join("\n")}`;
};

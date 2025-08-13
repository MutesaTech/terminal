import { Theme, ThemeConfig } from "../types";

export const themes: Record<Theme, ThemeConfig> = {
  cyberpunk: {
    name: "Cyberpunk",
    colors: {
      bg: "bg-[#0a0f23]",
      bgSecondary: "bg-[#141b3c]",
      text: "text-cyan-300",
      textSecondary: "text-gray-400",
      accent: "text-fuchsia-400",
      border: "border-fuchsia-500/20",
      terminal: "bg-[#0c122b]",
      prompt: "text-fuchsia-400",
    },
  },
  matrix: {
    name: "Matrix",
    colors: {
      bg: "bg-black",
      bgSecondary: "bg-gray-900/50",
      text: "text-green-400",
      textSecondary: "text-green-600",
      accent: "text-green-300",
      border: "border-green-500/20",
      terminal: "bg-black",
      prompt: "text-green-200",
    },
  },
  rose: {
    name: "Rosé Pine",
    colors: {
      bg: "bg-[#191724]",
      bgSecondary: "bg-[#26233a]",
      text: "text-[#e0def4]",
      textSecondary: "text-[#908caa]",
      accent: "text-[#eb6f92]",
      border: "border-rose-400/20",
      terminal: "bg-[#1f1d2e]",
      prompt: "text-rose-400",
    },
  },
  wood: {
    name: "Woodland",
    colors: {
      bg: "bg-[#2d2620]",
      bgSecondary: "bg-[#40362d]",
      text: "text-[#eaddc7]",
      textSecondary: "text-[#bdae93]",
      accent: "text-[#d6995b]",
      border: "border-orange-300/20",
      terminal: "bg-[#352d25]",
      prompt: "text-amber-300",
    },
  },
  vault: {
    name: "Vault",
    colors: {
      bg: "bg-[#0d1b1e]",
      bgSecondary: "bg-[#15292e]",
      text: "text-[#8eebe6]",
      textSecondary: "text-[#68a09b]",
      accent: "text-[#a5f3f0]",
      border: "border-teal-300/20",
      terminal: "bg-[#102024]",
      prompt: "text-teal-200",
    },
  },
};

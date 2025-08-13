import { LucideIcon } from "lucide-react";

/**
 * Represents a single command entry in the terminal history.
 */
export interface Command {
  input: string;
  output: React.ReactNode;
}

/**
 * Defines the available theme names for the portfolio.
 */
export type Theme = "cyberpunk" | "matrix" | "rose" | "wood" | "vault";

/**
 * Describes the specific color properties for a theme.
 * THIS IS THE PART THAT IS LIKELY MISSING OR NOT EXPORTED.
 */
export interface ThemeColors {
  bg: string;
  bgSecondary: string;
  text: string;
  textSecondary: string;
  accent: string;
  border: string;
  terminal: string;
  prompt: string;
}

/**
 * Represents the complete configuration for a single theme.
 */
export interface ThemeConfig {
  name: string;
  colors: ThemeColors;
}

// --- Content Data Types ---

/**
 * Defines the structure for a project showcase.
 */
export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  icon: LucideIcon;
}

/**
 * Defines the structure for a single technical skill.
 */
export interface Skill {
  name: string;
  icon: LucideIcon;
}

/**
 * A category that groups related skills.
 */
export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: LucideIcon; // <--- ADD THIS LINE
}

/**
 * Defines the structure for a job experience entry.
 */
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

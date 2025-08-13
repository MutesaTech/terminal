import { Database, Code, Server, Cloud, Bot, Settings } from "lucide-react";
import { SkillCategory } from "../types";

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React / Next.js", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: Code },
      { name: "Framer Motion", icon: Code },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js / Express", icon: Server },
      { name: "Python / Django", icon: Server },
      { name: "GraphQL", icon: Server },
      { name: "REST APIs", icon: Server },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Database },
      { name: "Firebase", icon: Database },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker", icon: Cloud },
      { name: "AWS / Vercel", icon: Cloud },
      { name: "CI/CD (GitHub Actions)", icon: Cloud },
      { name: "Terraform", icon: Cloud },
    ],
  },
  {
    title: "AI & ML",
    icon: Bot,
    skills: [
      { name: "TensorFlow", icon: Bot },
      { name: "LangChain", icon: Bot },
      { name: "Vector DBs", icon: Bot },
      { name: "Prompt Engineering", icon: Bot },
    ],
  },
  {
    title: "Other Tools",
    icon: Settings,
    skills: [
      { name: "Git & GitHub", icon: Settings },
      { name: "Figma", icon: Settings },
      { name: "Linear", icon: Settings },
      { name: "VS Code", icon: Settings },
    ],
  },
];

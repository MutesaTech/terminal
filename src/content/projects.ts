import { Briefcase, Code, Bot, Shield } from "lucide-react";
import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Project Nebula",
    description:
      "A collaborative real-time code editor with integrated AI-powered debugging and pair programming features.",
    tech: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL", "Docker"],
    liveUrl: "https://nebula.example.com",
    repoUrl: "https://github.com/user/nebula",
    icon: Code,
  },
  {
    title: "Aether Platform",
    description:
      "A comprehensive SaaS platform for managing cloud infrastructure, providing cost analysis and automated scaling.",
    tech: ["React", "Node.js", "GraphQL", "AWS Lambda", "Terraform"],
    liveUrl: "https://aether.example.com",
    repoUrl: "https://github.com/user/aether",
    icon: Briefcase,
  },
  {
    title: "ChatBot AI",
    description:
      "An intelligent customer support chatbot using natural language processing to resolve user queries instantly.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    repoUrl: "https://github.com/user/chatbot-ai",
    icon: Bot,
  },
  {
    title: "SecureVault",
    description:
      "A decentralized identity management system using blockchain technology to ensure user data privacy and security.",
    tech: ["Solidity", "Hardhat", "Next.js", "IPFS"],
    icon: Shield,
  },
];

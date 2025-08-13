import { Briefcase, Link, Github } from "lucide-react";
import { projects } from "../../content/projects";
import { ThemeColors } from "../../types"; // <-- FIX 1: Import the ThemeColors type

const ProjectsSection = ({ themeColors }: { themeColors: ThemeColors }) => (
  <div className="space-y-8">
    <div className="flex items-center space-x-3">
      <Briefcase className={themeColors.accent} size={28} />
      <h2 className={`text-3xl font-bold ${themeColors.text}`}>
        Featured Projects
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className={`${themeColors.bgSecondary} p-6 rounded-xl border ${themeColors.border} hover:shadow-2xl transition-all duration-300 group flex flex-col`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <project.icon className={themeColors.accent} size={24} />
              <h3 className={`text-xl font-semibold ${themeColors.text}`}>
                {project.title}
              </h3>
            </div>
          </div>
          <p
            className={`${themeColors.textSecondary} mb-4 leading-relaxed flex-grow`}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 ${themeColors.bg} ${themeColors.textSecondary} text-xs rounded-full border ${themeColors.border}`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4 mt-auto pt-4 border-t ${themeColors.border}">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 ${themeColors.textSecondary} hover:${themeColors.accent} transition-colors`}
              >
                <Link size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 ${themeColors.textSecondary} hover:${themeColors.accent} transition-colors`}
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;

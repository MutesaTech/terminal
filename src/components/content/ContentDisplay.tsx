import { motion } from "motion/react";
import { Theme } from "../../types";
import { themes } from "../../lib/themes";

import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import ContactSection from "../sections/ContactSection";
import Welcome from "../sections/Welcome";

interface ContentDisplayProps {
  currentSection: string;
  isVisible: boolean;
  theme: Theme;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({
  currentSection,
  isVisible,
  theme,
}) => {
  const themeColors = themes[theme].colors;

  const renderSection = () => {
    switch (currentSection) {
      case "whoami":
        return <AboutSection themeColors={themeColors} />;
      case "skills":
        return <SkillsSection themeColors={themeColors} />;
      case "projects":
        return <ProjectsSection themeColors={themeColors} />;
      case "experience":
        return <ExperienceSection themeColors={themeColors} />;
      case "contact":
        return <ContactSection themeColors={themeColors} />;
      default:
        return <Welcome themeColors={themeColors} />;
    }
  };

  return (
    <div
      className={`h-full ${themeColors.bg} p-8 overflow-y-auto transition-colors duration-300`}
    >
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderSection()}
      </motion.div>
    </div>
  );
};

export default ContentDisplay;

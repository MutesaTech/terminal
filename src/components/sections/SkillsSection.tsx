import { Code } from "lucide-react";
import { skills } from "../../content/skills";
import { ThemeColors } from "../../types"; // <-- FIX 1: Import the ThemeColors type

const SkillsSection = ({ themeColors }: { themeColors: ThemeColors }) => (
  <div className="space-y-8">
    <div className="flex items-center space-x-3">
      <Code className={themeColors.accent} size={28} />
      <h2 className={`text-3xl font-bold ${themeColors.text}`}>Tech Arsenal</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((category) => (
        <div
          key={category.title}
          className={`${themeColors.bgSecondary} p-6 rounded-xl border ${themeColors.border} hover:shadow-xl transition-all duration-300 group`}
        >
          <div className="flex items-center space-x-3 mb-4">
            <category.icon className={themeColors.accent} size={24} />
            <h3
              className={`text-xl font-semibold ${themeColors.text} group-hover:scale-105 transition-transform`}
            >
              {category.title}
            </h3>
          </div>
          <div className="space-y-3">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-3">
                <skill.icon
                  className={`${themeColors.textSecondary} w-4 h-4`}
                />
                <span
                  className={`${themeColors.textSecondary} hover:${themeColors.text} transition-colors`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsSection;

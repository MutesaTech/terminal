import { Briefcase } from "lucide-react";
import { experiences } from "../../content/experience";
import { ThemeColors } from "../../types";

const ExperienceSection = ({ themeColors }: { themeColors: ThemeColors }) => (
  <div className="space-y-8">
    <div className="flex items-center space-x-3">
      <Briefcase className={themeColors.accent} size={28} />
      <h2 className={`text-3xl font-bold ${themeColors.text}`}>
        Career Timeline
      </h2>
    </div>

    <div className="relative border-l-2 ${themeColors.border} ml-4 pl-8 space-y-12">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">
          <div
            className={`absolute -left-[42px] top-1 w-5 h-5 ${themeColors.accent.replace(
              "text-",
              "bg-"
            )} rounded-full border-4 ${themeColors.bg.replace(
              "bg-",
              "border-"
            )}`}
          ></div>
          <p className={`${themeColors.textSecondary} text-sm mb-1`}>
            {exp.period}
          </p>
          <h3 className={`text-xl font-semibold ${themeColors.text}`}>
            {exp.role}
          </h3>
          <p className={`${themeColors.accent} font-medium mb-3`}>
            {exp.company}
          </p>
          <ul
            className={`${themeColors.textSecondary} space-y-2 text-sm list-disc list-inside`}
          >
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceSection;

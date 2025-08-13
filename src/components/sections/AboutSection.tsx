// src/components/content/sections/AboutSection.tsx

import { User } from "lucide-react";
import { personalInfo } from "../../content/general";
import { ThemeColors } from "../../types"; // <-- FIX 1: Import the ThemeColors type

// FIX 2: Replace 'any' with the specific 'ThemeColors' type
const AboutSection = ({ themeColors }: { themeColors: ThemeColors }) => (
  <div className="space-y-8">
    <div className="flex items-center space-x-3">
      <User className={themeColors.accent} size={28} />
      <h2 className={`text-3xl font-bold ${themeColors.text}`}>Who Am I?</h2>
    </div>

    <div
      className={`${themeColors.bgSecondary} rounded-xl p-6 border ${themeColors.border} flex flex-col md:flex-row items-center gap-8`}
    >
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        alt="Profile"
        className={`w-36 h-36 rounded-full object-cover border-4 ${themeColors.border} shadow-2xl`}
      />
      <div className="flex-1 text-center md:text-left">
        <h3 className={`text-3xl font-bold ${themeColors.text}`}>
          {personalInfo.name}
        </h3>
        <p className={`${themeColors.accent} text-lg mb-4`}>
          {personalInfo.title}
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className={themeColors.textSecondary}>Location:</span>{" "}
            <span className={themeColors.text}>{personalInfo.location}</span>
          </div>
          <div>
            <span className={themeColors.textSecondary}>Status:</span>{" "}
            <span className="text-green-400 font-semibold">
              {personalInfo.status}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      className={`${themeColors.bgSecondary} p-6 rounded-xl border ${themeColors.border} space-y-4`}
    >
      <h3 className={`text-xl font-semibold ${themeColors.accent}`}>~/bio</h3>
      <p className={`${themeColors.textSecondary} leading-relaxed`}>
        {personalInfo.bio}
      </p>
    </div>
    <div
      className={`${themeColors.bgSecondary} p-6 rounded-xl border ${themeColors.border} space-y-4`}
    >
      <h3 className={`text-xl font-semibold ${themeColors.accent}`}>~/story</h3>
      <p className={`${themeColors.textSecondary} leading-relaxed`}>
        {personalInfo.story}
      </p>
    </div>
  </div>
);

export default AboutSection;

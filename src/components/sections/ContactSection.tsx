import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "../../content/general";
import { ThemeColors } from "../../types"; // <-- FIX 1: Import the ThemeColors type

const contactMethods = [
  {
    name: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: personalInfo.linkedin,
    href: `https://www.${personalInfo.linkedin}`,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: personalInfo.github,
    href: `https://www.${personalInfo.github}`,
    icon: Github,
  },
  {
    name: "Twitter",
    value: personalInfo.twitter,
    href: `https://www.${personalInfo.twitter}`,
    icon: Twitter,
  },
];

const ContactSection = ({ themeColors }: { themeColors: ThemeColors }) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // Add a toast notification here if you want
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <Mail className={themeColors.accent} size={28} />
        <h2 className={`text-3xl font-bold ${themeColors.text}`}>
          Get In Touch
        </h2>
      </div>
      <p className={`${themeColors.textSecondary} text-lg`}>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of an ambitious team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods.map((method) => (
          <a
            key={method.name}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${themeColors.bgSecondary} p-6 rounded-xl border ${themeColors.border} hover:shadow-xl transition-all duration-300 group flex items-center space-x-4`}
          >
            <method.icon
              className={`${themeColors.accent} w-8 h-8 group-hover:scale-110 transition-transform`}
            />
            <div>
              <h3 className={`text-lg font-semibold ${themeColors.text}`}>
                {method.name}
              </h3>
              <p
                className={`${themeColors.textSecondary} group-hover:${themeColors.text} transition-colors break-all`}
              >
                {method.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div
        className={`${themeColors.bgSecondary} p-6 rounded-xl border ${themeColors.border} text-center`}
      >
        <p className={`${themeColors.textSecondary}`}>
          Or simply copy my email address:
        </p>
        <button
          onClick={() => handleCopy(personalInfo.email)}
          className={`mt-2 px-4 py-2 rounded-lg border ${themeColors.border} ${themeColors.bg} hover:bg-opacity-50 transition-all`}
        >
          <span className={`${themeColors.accent} font-mono`}>
            {personalInfo.email}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactSection;

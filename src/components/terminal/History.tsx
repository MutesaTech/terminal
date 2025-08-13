import { Command } from "../../types";
import TypingEffect from "./TypingEffect";

interface HistoryProps {
  history: Command[];
  themeColors: { prompt: string; textSecondary: string };
}

const PromptDisplay = ({
  themeColors,
}: {
  themeColors: { prompt: string; textSecondary: string };
}) => (
  <div className="flex items-center">
    <span className={themeColors.prompt}>guest@portfolio</span>
    <span className={`${themeColors.textSecondary} mx-1`}>:</span>
    <span className="text-cyan-400">~</span>
    <span className={`${themeColors.textSecondary} mx-1`}>$</span>
  </div>
);

const History: React.FC<HistoryProps> = ({ history, themeColors }) => {
  return (
    <>
      {history.map((item, index) => (
        <div key={index} className="mb-2">
          {item.input && (
            <div className="flex items-center space-x-2">
              <PromptDisplay themeColors={themeColors} />
              <span>{item.input}</span>
            </div>
          )}
          {typeof item.output === "string" ? (
            <div className="whitespace-pre-wrap leading-relaxed">
              <TypingEffect text={item.output} />
            </div>
          ) : (
            <div className="mt-1">{item.output}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default History;

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Reset on text change

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, 10); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, [text, onComplete]);

  return <span dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default TypingEffect;

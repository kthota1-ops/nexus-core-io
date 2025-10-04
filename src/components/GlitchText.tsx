import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
      const glitched = text
        .split("")
        .map((char, i) => {
          if (Math.random() > 0.9) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join("");
      
      setDisplayText(glitched);
      
      setTimeout(() => {
        setDisplayText(text);
        setIsGlitching(false);
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${className} ${isGlitching ? "animate-glitch" : ""}`}>
      {displayText}
    </span>
  );
};

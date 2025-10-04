import { useEffect, useState } from "react";

const bootLines = [
  "> Initializing Portfolio System...",
  "> Loading Cybersecurity Modules...",
  "> Accessing Skill Database...",
  "> Verifying Credentials...",
  "> System Status: ONLINE",
  "> Access Granted. Welcome.",
];

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        onComplete();
      }, 500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, isComplete, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        {bootLines.slice(0, currentLine).map((line, index) => (
          <div
            key={index}
            className="text-cyber-glow font-mono text-sm md:text-base mb-2 animate-boot-text"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {line}
          </div>
        ))}
        {currentLine < bootLines.length && (
          <span className="text-cyber-glow animate-neon-pulse">_</span>
        )}
      </div>
    </div>
  );
};

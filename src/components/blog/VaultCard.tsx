import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Unlock, Calendar, Clock } from "lucide-react";

interface VaultCardProps {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
}

export const VaultCard = ({ title, excerpt, tags, date, readTime }: VaultCardProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleClick = () => {
    setIsUnlocked(!isUnlocked);
  };

  return (
    <Card
      onClick={handleClick}
      className={`
        relative overflow-hidden cursor-pointer
        bg-card/30 backdrop-blur-sm border-2
        transition-all duration-700 ease-out
        ${isUnlocked 
          ? "border-cyber-glow shadow-[0_0_40px_hsl(var(--cyber-glow)/0.4)] scale-105" 
          : "border-border hover:border-cyber-glow/50 hover:shadow-[0_0_20px_hsl(var(--cyber-glow)/0.2)]"
        }
      `}
    >
      {/* Vault Door Animation */}
      <div className="relative">
        <div 
          className={`
            absolute inset-0 bg-gradient-to-br from-cyber-glow/20 to-cyber-pink/20
            transition-all duration-700
            ${isUnlocked ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        />
        
        {/* Lock Icon with Animation */}
        <div className="absolute top-4 right-4 z-10">
          <div 
            className={`
              w-12 h-12 rounded-full border-2 flex items-center justify-center
              transition-all duration-500
              ${isUnlocked 
                ? "border-cyber-glow bg-cyber-glow/10 rotate-0" 
                : "border-cyber-pink bg-cyber-pink/10 rotate-180"
              }
            `}
          >
            {isUnlocked ? (
              <Unlock className="w-6 h-6 text-cyber-glow animate-neon-pulse" />
            ) : (
              <Lock className="w-6 h-6 text-cyber-pink" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 relative">
          {/* Title */}
          <h3 
            className={`
              font-orbitron text-xl font-bold
              transition-all duration-500
              ${isUnlocked ? "text-cyber-glow" : "text-foreground"}
            `}
          >
            {title}
          </h3>

          {/* Excerpt - Revealed on Unlock */}
          <div 
            className={`
              overflow-hidden transition-all duration-700
              ${isUnlocked ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              {excerpt}
            </p>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className={`
                  border font-mono text-xs
                  transition-all duration-500
                  ${isUnlocked 
                    ? "border-cyber-glow text-cyber-glow animate-neon-pulse" 
                    : "border-cyber-pink/50 text-cyber-pink"
                  }
                `}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Status Message */}
          <div 
            className={`
              text-xs font-mono pt-2
              transition-all duration-500
              ${isUnlocked 
                ? "text-cyber-glow opacity-100" 
                : "text-cyber-pink opacity-0"
              }
            `}
          >
            <span className="animate-neon-pulse">&gt; ACCESS_GRANTED</span>
          </div>
        </div>

        {/* Cyber Scanlines */}
        <div className={`
          absolute inset-0 pointer-events-none cyber-scanline
          ${isUnlocked ? "opacity-30" : "opacity-10"}
          transition-opacity duration-700
        `} />
      </div>
    </Card>
  );
};

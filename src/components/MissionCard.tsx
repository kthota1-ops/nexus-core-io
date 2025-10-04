import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Code } from "lucide-react";

interface MissionCardProps {
  title: string;
  role: string;
  period: string;
  threatLevel: "low" | "medium" | "high" | "critical";
  impact: string;
  technologies: string[];
  description: string;
}

export const MissionCard = ({
  title,
  role,
  period,
  threatLevel,
  impact,
  technologies,
  description,
}: MissionCardProps) => {
  const threatLevelColors = {
    low: "text-success",
    medium: "text-accent",
    high: "text-secondary",
    critical: "text-destructive",
  };

  const threatLevelIcons = {
    low: Shield,
    medium: Target,
    high: Target,
    critical: Code,
  };

  const ThreatIcon = threatLevelIcons[threatLevel];

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-500 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="p-6 space-y-4 relative">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-orbitron text-xl font-bold text-cyber-glow">
              {title}
            </h3>
            <p className="text-muted-foreground">{role}</p>
            <p className="text-sm text-muted-foreground font-mono">{period}</p>
          </div>
          <div className={`${threatLevelColors[threatLevel]} flex items-center gap-2`}>
            <ThreatIcon className="w-5 h-5" />
            <span className="text-xs font-mono uppercase">{threatLevel}</span>
          </div>
        </div>

        <p className="text-foreground/80 text-sm leading-relaxed">
          {description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyber-pink">IMPACT:</span>
            <span className="text-sm text-foreground">{impact}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className="border-primary/50 text-primary text-xs font-mono"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

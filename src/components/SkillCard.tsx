import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  category: "offensive" | "defensive" | "dev" | "hardware";
}

export const SkillCard = ({ icon, title, description, category }: SkillCardProps) => {
  const categoryColors = {
    offensive: "border-secondary hover:shadow-[0_0_30px_hsl(var(--secondary)/0.4)]",
    defensive: "border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]",
    dev: "border-accent hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)]",
    hardware: "border-success hover:shadow-[0_0_30px_hsl(var(--success)/0.4)]",
  };

  const categoryGlow = {
    offensive: "text-secondary",
    defensive: "text-primary",
    dev: "text-accent",
    hardware: "text-success",
  };

  return (
    <Card 
      className={`
        relative overflow-hidden bg-card/50 backdrop-blur-sm
        border-2 ${categoryColors[category]}
        transition-all duration-500 hover:scale-105
        group cursor-pointer
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-card opacity-50" />
      <div className="relative p-6 space-y-4">
        <div className={`${categoryGlow[category]} w-12 h-12 flex items-center justify-center text-3xl`}>
          {icon}
        </div>
        <h3 className={`font-orbitron text-xl font-bold ${categoryGlow[category]}`}>
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <div className={`absolute bottom-0 left-0 w-full h-1 ${categoryGlow[category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
          style={{ boxShadow: "0 0 10px currentColor" }}
        />
      </div>
    </Card>
  );
};

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface CyberButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  onClick?: () => void;
  className?: string;
}

export const CyberButton = ({ 
  children, 
  variant = "primary", 
  onClick,
  className = "" 
}: CyberButtonProps) => {
  const variants = {
    primary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300",
    secondary: "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)] transition-all duration-300",
    accent: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)] transition-all duration-300",
  };

  return (
    <Button
      onClick={onClick}
      className={`font-orbitron font-bold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      <span className="mr-2">[</span>
      {children}
      <span className="ml-2">]</span>
    </Button>
  );
};

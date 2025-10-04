import { Badge } from "@/components/ui/badge";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export const TagFilter = ({ tags, selectedTags, onTagToggle }: TagFilterProps) => {
  const tagColors: Record<string, string> = {
    Security: "border-cyber-pink text-cyber-pink hover:bg-cyber-pink/20",
    Python: "border-cyber-glow text-cyber-glow hover:bg-cyber-glow/20",
    DevOps: "border-cyber-gold text-cyber-gold hover:bg-cyber-gold/20",
    Hardware: "border-cyber-green text-cyber-green hover:bg-cyber-green/20",
    default: "border-primary text-primary hover:bg-primary/20",
  };

  const getTagColor = (tag: string) => {
    return tagColors[tag] || tagColors.default;
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {tags.map((tag, i) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <Badge
            key={tag}
            variant="outline"
            onClick={() => onTagToggle(tag)}
            className={`
              cursor-pointer font-mono text-sm px-4 py-2
              border-2 transition-all duration-300
              ${getTagColor(tag)}
              ${isSelected 
                ? "scale-110 shadow-[0_0_20px_currentColor]" 
                : "hover:scale-105"
              }
              animate-slide-up
            `}
            style={{ 
              animationDelay: `${i * 0.05}s`,
              background: isSelected ? "currentColor" : "transparent",
              color: isSelected ? "hsl(var(--background))" : undefined,
            }}
          >
            <span className="relative">
              {tag}
              {isSelected && (
                <span className="absolute -inset-1 border border-current rounded animate-neon-pulse opacity-50" />
              )}
            </span>
          </Badge>
        );
      })}
    </div>
  );
};

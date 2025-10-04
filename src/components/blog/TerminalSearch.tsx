import { useState } from "react";
import { Search } from "lucide-react";

interface TerminalSearchProps {
  onSearch: (query: string) => void;
}

export const TerminalSearch = ({ onSearch }: TerminalSearchProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div 
      className={`
        relative w-full max-w-2xl mx-auto
        border-2 rounded-lg overflow-hidden
        bg-background/50 backdrop-blur-sm
        transition-all duration-300
        ${isFocused 
          ? "border-cyber-glow shadow-[0_0_20px_hsl(var(--cyber-glow)/0.3)]" 
          : "border-border hover:border-cyber-glow/50"
        }
      `}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border-b border-border/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-success" />
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          knowledge_archives.terminal
        </span>
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-3 px-4 py-3">
        <Search className={`w-5 h-5 ${isFocused ? "text-cyber-glow" : "text-muted-foreground"} transition-colors`} />
        <span className="font-mono text-cyber-pink">search&gt;</span>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter keywords (e.g., python, security, hardware)..."
          className="
            flex-1 bg-transparent outline-none
            font-mono text-foreground placeholder:text-muted-foreground
            caret-cyber-glow
          "
        />
        <span 
          className={`
            w-2 h-4 bg-cyber-glow
            ${isFocused ? "animate-neon-pulse" : "opacity-0"}
          `}
        />
      </div>

      {/* Status Line */}
      {query && (
        <div className="px-4 py-2 bg-card/30 border-t border-border/50">
          <p className="text-xs font-mono text-cyber-glow">
            &gt; Scanning archives for: <span className="text-cyber-pink">{query}</span>
          </p>
        </div>
      )}
    </div>
  );
};

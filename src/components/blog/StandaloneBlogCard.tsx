import { BlogPost } from "@/data/blogData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTagColor } from "@/utils/tagColors";
import { Clock, Calendar } from "lucide-react";

interface StandaloneBlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export const StandaloneBlogCard = ({ post, onClick }: StandaloneBlogCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer group overflow-hidden bg-gradient-to-br from-cyber-pink/10 to-cyber-glow/10 border-2 border-cyber-pink/30 hover:border-cyber-pink hover:shadow-[0_0_40px_hsl(var(--cyber-pink)/0.4)] transition-all duration-500 hover:scale-105 animate-slide-up"
    >
      {/* Hero Image */}
      {post.heroImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          
          {/* Standalone Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyber-pink/90 backdrop-blur-sm border border-cyber-pink">
            <span className="text-xs font-mono font-bold">FEATURED</span>
          </div>
        </div>
      )}

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-cyber-pink transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className={`${getTagColor(tag)} border-2 font-mono text-xs`}
            >
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono pt-2 border-t border-border/30">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

import { BlogPost } from "@/data/blogData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTagColor } from "@/utils/tagColors";

interface BlogThumbnailProps {
  post: BlogPost;
  size?: "small" | "normal";
}

export const BlogThumbnail = ({ post, size = "normal" }: BlogThumbnailProps) => {
  const isSmall = size === "small";

  return (
    <Card 
      className={`
        ${isSmall ? "p-2" : "p-3"}
        bg-background/80 backdrop-blur-sm
        border border-cyber-glow/30
        hover:border-cyber-glow/60
        transition-all duration-300
        cursor-pointer group
        relative overflow-hidden
      `}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className={`relative ${isSmall ? "space-y-1" : "space-y-2"}`}>
        <h4 className={`
          font-orbitron font-bold text-foreground
          ${isSmall ? "text-[8px] line-clamp-2" : "text-xs line-clamp-2"}
          group-hover:text-cyber-glow transition-colors
        `}>
          {post.title}
        </h4>
        
        {!isSmall && (
          <>
            <p className="text-[8px] text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className={`text-[6px] px-1 py-0 h-3 border ${getTagColor(tag)}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

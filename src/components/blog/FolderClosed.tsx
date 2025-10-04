import { BlogFolder } from "@/data/blogData";
import { BlogThumbnail } from "./BlogThumbnail";

interface FolderClosedProps {
  folder: BlogFolder;
  onClick: () => void;
}

export const FolderClosed = ({ folder, onClick }: FolderClosedProps) => {
  const displayPosts = folder.posts.slice(0, 9);
  const emptySlots = 9 - displayPosts.length;

  return (
    <div 
      onClick={onClick}
      className="cursor-pointer group animate-slide-up"
    >
      {/* Folder Container */}
      <div className={`
        relative rounded-2xl p-6
        bg-gradient-to-br ${folder.gradient}
        border-2 border-cyber-glow/30
        hover:border-cyber-glow/60
        hover:shadow-[0_0_30px_hsl(var(--cyber-glow)/0.3)]
        transition-all duration-500
        hover:scale-105
      `}>
        {/* 3x3 Grid of Thumbnails */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {displayPosts.map((post, i) => (
            <div 
              key={post.id}
              className="animate-slide-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <BlogThumbnail post={post} size="small" />
            </div>
          ))}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <div 
              key={`empty-${i}`}
              className="aspect-square rounded bg-background/20 border border-border/20"
            />
          ))}
        </div>

        {/* Folder Name */}
        <div className="flex items-center justify-center gap-2 pt-2 border-t border-cyber-glow/20">
          <span className="text-2xl group-hover:scale-110 transition-transform">
            {folder.icon}
          </span>
          <h3 className="font-orbitron font-bold text-foreground group-hover:text-cyber-glow transition-colors">
            {folder.name}
          </h3>
        </div>

        {/* Post count badge */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyber-glow text-background flex items-center justify-center font-bold text-sm shadow-[0_0_20px_hsl(var(--cyber-glow))]">
          {folder.posts.length}
        </div>
      </div>
    </div>
  );
};

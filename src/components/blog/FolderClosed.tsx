import { BlogFolder } from "@/data/blogData";

interface FolderClosedProps {
  folder: BlogFolder;
  onClick: () => void;
}

export const FolderClosed = ({ folder, onClick }: FolderClosedProps) => {
  const displayPosts = folder.posts.slice(0, 4);
  const remainingCount = folder.posts.length - 4;

  return (
    <div 
      onClick={onClick}
      className="cursor-pointer group animate-slide-up"
    >
      <div className={`
        relative rounded-3xl p-6
        bg-gradient-to-br ${folder.gradient}
        border-2 border-cyber-glow/30
        hover:border-cyber-glow/60
        hover:shadow-[0_0_40px_hsl(var(--cyber-glow)/0.4)]
        transition-all duration-500
        hover:scale-105
      `}>
        {/* 2x2 Grid of Thumbnails */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {displayPosts.map((post, i) => (
            <div 
              key={post.id}
              className="aspect-square rounded-lg overflow-hidden border-2 border-cyber-glow/20 bg-background/50 backdrop-blur-sm animate-slide-up group-hover:border-cyber-glow/40 transition-all"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {post.heroImage ? (
                <img 
                  src={post.heroImage} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyber-glow/10 to-cyber-pink/10">
                  <span className="text-4xl">📄</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Folder Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 pt-2 border-t border-cyber-glow/20">
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {folder.icon}
            </span>
            <h3 className="font-orbitron font-bold text-lg text-foreground group-hover:text-cyber-glow transition-colors">
              {folder.name}
            </h3>
          </div>

          {remainingCount > 0 && (
            <p className="text-center text-xs font-mono text-muted-foreground">
              +{remainingCount} more
            </p>
          )}
        </div>

        {/* Post count badge */}
        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-cyber-glow text-background flex items-center justify-center font-bold shadow-[0_0_20px_hsl(var(--cyber-glow))] group-hover:animate-neon-pulse">
          {folder.posts.length}
        </div>
      </div>
    </div>
  );
};

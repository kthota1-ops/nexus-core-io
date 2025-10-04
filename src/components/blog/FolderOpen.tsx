import { BlogFolder, BlogPost } from "@/data/blogData";
import { X } from "lucide-react";
import { BlogThumbnail } from "./BlogThumbnail";

interface FolderOpenProps {
  folder: BlogFolder;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const FolderOpen = ({ folder, onClose, onSelectPost }: FolderOpenProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-slide-up"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
      
      {/* Folder Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`
          relative w-full max-w-4xl max-h-[80vh]
          rounded-3xl p-8
          bg-gradient-to-br ${folder.gradient}
          border-2 border-cyber-glow
          shadow-[0_0_50px_hsl(var(--cyber-glow)/0.5)]
          overflow-hidden
        `}
      >
        {/* Cyber scanlines */}
        <div className="absolute inset-0 cyber-scanline opacity-20 pointer-events-none" />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{folder.icon}</span>
            <h2 className="text-3xl font-orbitron font-bold text-cyber-glow">
              {folder.name}
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-destructive/20 border-2 border-destructive text-destructive hover:bg-destructive hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Posts Grid */}
        <div className="relative overflow-y-auto max-h-[calc(80vh-120px)] pr-2 custom-scrollbar">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {folder.posts.map((post, i) => (
              <div
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <BlogThumbnail post={post} size="normal" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

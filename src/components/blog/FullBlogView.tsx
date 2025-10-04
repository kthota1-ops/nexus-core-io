import { useState, useEffect } from "react";
import { BlogPost, blogPosts } from "@/data/blogData";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getTagColor, getTagGlowColor } from "@/utils/tagColors";
import ReactMarkdown from "react-markdown";

interface FullBlogViewProps {
  post: BlogPost;
  onClose: () => void;
}

export const FullBlogView = ({ post, onClose }: FullBlogViewProps) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [titleComplete, setTitleComplete] = useState(false);

  // Typewriter effect for title
  useEffect(() => {
    setDisplayedTitle("");
    setTitleComplete(false);
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex <= post.title.length) {
        setDisplayedTitle(post.title.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTitleComplete(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [post.title]);

  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.id))
    : [];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Glitch overlay */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
      
      {/* Blog Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border-2 border-cyber-glow shadow-[0_0_60px_hsl(var(--cyber-glow)/0.6)] bg-[#111111aa] animate-slide-up"
      >
        {/* Cyber scanlines */}
        <div className="absolute inset-0 cyber-scanline opacity-10 pointer-events-none" />
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-xl border-b-2 border-cyber-glow/30 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-glow">
                {displayedTitle}
                {!titleComplete && <span className="animate-neon-pulse">|</span>}
              </h1>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    className={`
                      ${getTagColor(tag)} ${getTagGlowColor(tag)}
                      border-2 font-mono
                      animate-slide-up
                    `}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-destructive/20 border-2 border-destructive text-destructive hover:bg-destructive hover:text-white transition-all duration-300 flex items-center justify-center shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6 custom-scrollbar">
          <div className="prose prose-invert prose-cyan max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-orbitron font-bold text-cyber-glow mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-orbitron font-bold text-cyber-pink mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-orbitron font-bold text-cyber-gold mt-6 mb-3">
                    {children}
                  </h3>
                ),
                code: ({ children, className }) => {
                  const isBlock = className?.includes("language-");
                  if (isBlock) {
                    return (
                      <code className="block bg-background/80 border border-cyber-glow/30 rounded p-4 my-4 text-sm font-mono text-cyber-glow overflow-x-auto">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="bg-background/60 border border-cyber-pink/30 rounded px-2 py-1 text-sm font-mono text-cyber-pink">
                      {children}
                    </code>
                  );
                },
                p: ({ children }) => (
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/90">
                    {children}
                  </ul>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border/30">
              <h3 className="text-xl font-orbitron font-bold text-cyber-gold mb-4">
                Related Archives
              </h3>
              <div className="flex flex-wrap gap-3">
                {relatedPosts.map((related, i) => (
                  <Badge
                    key={related.id}
                    variant="outline"
                    className="border-2 border-cyber-glow text-cyber-glow hover:bg-cyber-glow/20 cursor-pointer transition-all duration-300 px-4 py-2 text-sm animate-slide-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    📁 {related.title}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

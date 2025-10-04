import { useState, useEffect } from "react";
import { BlogPost, blogPosts } from "@/data/blogData";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getTagColor, getTagGlowColor } from "@/utils/tagColors";
import ReactMarkdown from "react-markdown";
import { CyberButton } from "../CyberButton";

interface FullBlogViewProps {
  post: BlogPost;
  onClose: () => void;
  onBack?: () => void;
}

export const FullBlogView = ({ post, onClose, onBack }: FullBlogViewProps) => {
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

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-white"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Hero Section */}
      {post.heroImage && (
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          
          {/* Close Button - Top Right */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-cyber-glow text-gray-900 hover:text-cyber-glow transition-all duration-300 flex items-center justify-center shadow-lg z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Back Button - Top Left (if available) */}
          {onBack && (
            <button
              onClick={onBack}
              className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-cyber-glow text-gray-900 hover:text-cyber-glow transition-all duration-300 flex items-center gap-2 shadow-lg z-10 font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Folder
            </button>
          )}
        </div>
      )}

      {/* Content - Medium Style */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {displayedTitle}
          {!titleComplete && <span className="text-cyber-glow animate-neon-pulse">|</span>}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, i) => (
            <Badge
              key={i}
              className={`
                ${getTagColor(tag)} ${getTagGlowColor(tag)}
                border-2 font-mono px-3 py-1
                hover:scale-110 transition-transform cursor-pointer
              `}
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 font-mono mb-12 pb-12 border-b-2 border-gray-200">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Article Content - Medium Style */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6 leading-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5 leading-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {children}
                </p>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.includes("language-");
                if (isBlock) {
                  return (
                    <pre className="bg-gray-900 rounded-xl p-6 my-8 overflow-x-auto border-l-4 border-cyber-glow">
                      <code className="text-cyber-glow font-mono text-sm">
                        {children}
                      </code>
                    </pre>
                  );
                }
                return (
                  <code className="bg-gray-100 text-cyber-pink rounded px-2 py-1 font-mono text-base">
                    {children}
                  </code>
                );
              },
              ul: ({ children }) => (
                <ul className="list-disc list-outside ml-6 space-y-3 mb-6 text-gray-700 text-lg">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside ml-6 space-y-3 mb-6 text-gray-700 text-lg">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-cyber-glow pl-6 py-2 my-8 italic text-gray-600 bg-gray-50 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-gray-900">
                  {children}
                </strong>
              ),
              a: ({ children, href }) => (
                <a 
                  href={href} 
                  className="text-cyber-glow hover:text-cyber-pink underline decoration-2 underline-offset-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid gap-4">
              {relatedPosts.map((related) => (
                <div
                  key={related.id}
                  className="p-6 rounded-xl border-2 border-gray-200 hover:border-cyber-glow hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-cyber-glow transition-colors mb-2">
                    {related.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{related.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {related.tags.slice(0, 3).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={`${getTagColor(tag)} text-xs`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation - Next Blog */}
        {nextPost && (
          <div className="mt-16 pt-12 border-t-2 border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-mono mb-2">UP NEXT</p>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">
                  {nextPost.title}
                </h4>
                <p className="text-gray-600">{nextPost.excerpt}</p>
              </div>
              <CyberButton variant="primary" className="shrink-0">
                <ArrowRight className="w-5 h-5" />
              </CyberButton>
            </div>
          </div>
        )}

        {/* Back to Top */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-600 hover:text-cyber-glow font-mono text-sm transition-colors"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

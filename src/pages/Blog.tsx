import { useState, useMemo } from "react";
import { blogFolders, blogPosts, hiddenFolder } from "@/data/blogData";
import { BlogPost } from "@/data/blogData";
import { FolderClosed } from "@/components/blog/FolderClosed";
import { FolderOpen } from "@/components/blog/FolderOpen";
import { FullBlogView } from "@/components/blog/FullBlogView";
import { TerminalSearch } from "@/components/blog/TerminalSearch";
import { StandaloneBlogCard } from "@/components/blog/StandaloneBlogCard";
import { toast } from "sonner";

const Blog = () => {
  const [openFolderId, setOpenFolderId] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [easterEggUnlocked, setEasterEggUnlocked] = useState(false);

  const openFolder = [...blogFolders, ...(easterEggUnlocked ? [hiddenFolder] : [])].find(
    f => f.id === openFolderId
  );

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setOpenFolderId(null);
  };

  const handleBackToFolder = () => {
    setSelectedPost(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Easter egg trigger
    if (query.toLowerCase() === "unlock all" && !easterEggUnlocked) {
      setEasterEggUnlocked(true);
      toast.success("🔓 Hidden folder unlocked: Behind the Scenes!", {
        description: "You found the secret archive!",
        duration: 5000,
      });
      setSearchQuery("");
    }
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Filter folders
  const filteredFolders = [...blogFolders, ...(easterEggUnlocked ? [hiddenFolder] : [])].map(folder => ({
    ...folder,
    posts: folder.posts.filter(post => {
      const matchesSearch = searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => post.tags.includes(tag));

      return matchesSearch && matchesTags;
    }),
  })).filter(folder => folder.posts.length > 0);

  // Filter standalone posts
  const standalonePosts = blogPosts.filter(post => {
    if (!post.isStandalone) return false;

    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTags = selectedTags.length === 0 ||
      selectedTags.some(tag => post.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold">
              <span className="text-cyber-gold">&lt; THE </span>
              <span className="text-cyber-glow">KNOWLEDGE</span>
              <span className="text-cyber-pink"> ARCHIVES </span>
              <span className="text-cyber-gold">/&gt;</span>
            </h1>
            <p className="text-muted-foreground font-mono text-lg">
              Classified security research and technical documentation
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-mono text-cyber-glow">
              <span className="animate-neon-pulse">&gt;</span>
              <span>Security Level: {easterEggUnlocked ? "ADMIN" : "CLASSIFIED"}</span>
              <span>|</span>
              <span>Folders: {filteredFolders.length}</span>
            </div>
          </div>

          {/* Terminal Search */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <TerminalSearch onSearch={handleSearch} />
          </div>

          {/* Interactive Tags */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-wrap gap-2 justify-center">
              {allTags.map((tag, i) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`
                    px-4 py-2 rounded-full font-mono text-sm
                    border-2 transition-all duration-300
                    ${selectedTags.includes(tag)
                      ? "bg-cyber-glow text-background border-cyber-glow shadow-[0_0_20px_hsl(var(--cyber-glow))] scale-110"
                      : "bg-background/50 text-foreground border-border hover:border-cyber-glow hover:scale-105"
                    }
                    animate-slide-up
                  `}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Standalone Posts */}
          {standalonePosts.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-orbitron font-bold text-cyber-pink">
                &gt; Featured Articles
              </h2>
              <div className="grid gap-6">
                {standalonePosts.map((post, i) => (
                  <div key={post.id} style={{ animationDelay: `${i * 0.1}s` }}>
                    <StandaloneBlogCard
                      post={post}
                      onClick={() => handleSelectPost(post)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Folders Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredFolders.map((folder, i) => (
              <div 
                key={folder.id}
                style={{ animationDelay: `${(standalonePosts.length + i) * 0.15}s` }}
              >
                <FolderClosed
                  folder={folder}
                  onClick={() => setOpenFolderId(folder.id)}
                />
              </div>
            ))}
          </div>

          {filteredFolders.length === 0 && standalonePosts.length === 0 && (
            <div className="text-center py-12 space-y-4">
              <p className="text-2xl font-orbitron text-cyber-pink">
                &gt; NO_ARCHIVES_FOUND
              </p>
              <p className="text-muted-foreground font-mono">
                {searchQuery === "unlock all" 
                  ? "Unlocking hidden archives..."
                  : "No posts match your search criteria."}
              </p>
            </div>
          )}

          {/* Status Footer */}
          <div className="pt-12 border-t border-border/30 text-center">
            <p className="text-sm font-mono text-muted-foreground">
              <span className="text-cyber-glow">&gt;</span> End of archives | Access Level: {easterEggUnlocked ? "ADMIN" : "VISITOR"}
            </p>
            {!easterEggUnlocked && (
              <p className="text-xs font-mono text-muted-foreground/50 mt-2">
                Hint: Try searching for hidden commands...
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Folder Open Modal */}
      {openFolder && (
        <FolderOpen
          folder={openFolder}
          onClose={() => setOpenFolderId(null)}
          onSelectPost={handleSelectPost}
        />
      )}

      {/* Full Blog View */}
      {selectedPost && (
        <FullBlogView
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onBack={openFolderId ? handleBackToFolder : undefined}
        />
      )}
    </div>
  );
};

export default Blog;

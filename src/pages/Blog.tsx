import { useState } from "react";
import { blogFolders } from "@/data/blogData";
import { BlogPost } from "@/data/blogData";
import { FolderClosed } from "@/components/blog/FolderClosed";
import { FolderOpen } from "@/components/blog/FolderOpen";
import { FullBlogView } from "@/components/blog/FullBlogView";
import { TerminalSearch } from "@/components/blog/TerminalSearch";

const Blog = () => {
  const [openFolderId, setOpenFolderId] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const openFolder = blogFolders.find(f => f.id === openFolderId);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setOpenFolderId(null);
  };

  const filteredFolders = blogFolders.map(folder => ({
    ...folder,
    posts: folder.posts.filter(post =>
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  })).filter(folder => folder.posts.length > 0);

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
              <span>Security Level: CLASSIFIED</span>
              <span>|</span>
              <span>Folders: {filteredFolders.length}</span>
            </div>
          </div>

          {/* Terminal Search */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <TerminalSearch onSearch={setSearchQuery} />
          </div>

          {/* Folders Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {filteredFolders.map((folder, i) => (
              <div 
                key={folder.id}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <FolderClosed
                  folder={folder}
                  onClick={() => setOpenFolderId(folder.id)}
                />
              </div>
            ))}
          </div>

          {filteredFolders.length === 0 && (
            <div className="text-center py-12 space-y-4">
              <p className="text-2xl font-orbitron text-cyber-pink">
                &gt; NO_ARCHIVES_FOUND
              </p>
              <p className="text-muted-foreground font-mono">
                No folders match your search criteria.
              </p>
            </div>
          )}

          {/* Status Footer */}
          <div className="pt-12 border-t border-border/30 text-center">
            <p className="text-sm font-mono text-muted-foreground">
              <span className="text-cyber-glow">&gt;</span> End of archives | Access Level: VISITOR
            </p>
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
        />
      )}
    </div>
  );
};

export default Blog;

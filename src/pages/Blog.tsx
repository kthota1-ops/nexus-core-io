import { useState, useMemo } from "react";
import { VaultCard } from "@/components/blog/VaultCard";
import { TerminalSearch } from "@/components/blog/TerminalSearch";
import { TagFilter } from "@/components/blog/TagFilter";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Advanced Penetration Testing Techniques",
    excerpt: "Deep dive into modern exploitation frameworks and methodology for ethical hacking. Learn advanced techniques used in real-world penetration testing scenarios.",
    tags: ["Security", "Python"],
    date: "2024-03-15",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building a Secure HomeLab Infrastructure",
    excerpt: "Complete guide to setting up a professional security testing environment using Raspberry Pi and enterprise-grade networking equipment.",
    tags: ["Hardware", "DevOps", "Security"],
    date: "2024-03-10",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Python Automation for Security Operations",
    excerpt: "Automate your security workflows with Python. From vulnerability scanning to report generation, streamline your security operations.",
    tags: ["Python", "DevOps"],
    date: "2024-03-05",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Web Application Security Assessment",
    excerpt: "Comprehensive methodology for identifying and exploiting web vulnerabilities including OWASP Top 10 and beyond.",
    tags: ["Security", "Python"],
    date: "2024-02-28",
    readTime: "15 min read",
  },
  {
    id: 5,
    title: "CI/CD Pipeline Security Best Practices",
    excerpt: "Implementing security in your DevOps pipeline. Learn how to integrate security testing and compliance checks into your deployment workflow.",
    tags: ["DevOps", "Security"],
    date: "2024-02-20",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "IoT Security and Raspberry Pi Projects",
    excerpt: "Exploring security implications of IoT devices and building secure smart home projects with Raspberry Pi.",
    tags: ["Hardware", "Security"],
    date: "2024-02-15",
    readTime: "11 min read",
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => post.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-gold">
              &lt; KNOWLEDGE_ARCHIVES /&gt;
            </h1>
            <p className="text-muted-foreground font-mono">
              Classified security research and technical documentation
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-mono text-cyber-glow">
              <span className="animate-neon-pulse">&gt;</span>
              <span>Total Archives: {blogPosts.length}</span>
              <span>|</span>
              <span>Active Filters: {selectedTags.length}</span>
              <span>|</span>
              <span>Results: {filteredPosts.length}</span>
            </div>
          </div>

          {/* Search */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <TerminalSearch onSearch={setSearchQuery} />
          </div>

          {/* Tag Filters */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-center text-sm font-mono text-muted-foreground">
                <span className="text-cyber-pink">&gt;</span> Filter by category:
              </p>
              <TagFilter 
                tags={allTags}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
              />
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, i) => (
                <div 
                  key={post.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <VaultCard {...post} />
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 space-y-4">
                <p className="text-2xl font-orbitron text-cyber-pink">
                  &gt; NO_ARCHIVES_FOUND
                </p>
                <p className="text-muted-foreground font-mono">
                  No posts match your search criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>

          {/* Status Footer */}
          <div className="pt-12 border-t border-border/30 text-center">
            <p className="text-sm font-mono text-muted-foreground">
              <span className="text-cyber-glow">&gt;</span> End of archives | Security Level: CLASSIFIED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

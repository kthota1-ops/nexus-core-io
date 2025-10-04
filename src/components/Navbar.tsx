import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Mission Logs", path: "/missions" },
    { name: "Establish_Uplink", path: "/connect" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-cyber-glow animate-neon-pulse" />
            <span className="font-orbitron font-bold text-lg">
              <span className="text-cyber-glow">CYBER</span>
              <span className="text-foreground">_PORT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  font-mono text-sm uppercase tracking-wider relative
                  transition-all duration-300
                  ${isActive(link.path) 
                    ? "text-cyber-glow" 
                    : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                <span className="text-cyber-pink">{isActive(link.path) ? ">" : ""}</span>
                {" "}{link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyber-glow shadow-[0_0_10px_hsl(var(--cyber-glow))]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyber-glow hover:text-cyber-pink transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  block py-3 font-mono text-sm uppercase tracking-wider
                  ${isActive(link.path) 
                    ? "text-cyber-glow" 
                    : "text-muted-foreground"
                  }
                `}
              >
                <span className="text-cyber-pink">{isActive(link.path) ? ">" : ""}</span>
                {" "}{link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

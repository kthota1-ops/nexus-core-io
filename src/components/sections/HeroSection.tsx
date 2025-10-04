import { GlitchText } from "../GlitchText";
import { CyberButton } from "../CyberButton";
import { Terminal } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <Terminal className="w-4 h-4 text-primary animate-neon-pulse" />
            <span className="text-sm font-mono text-primary">System Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black">
            <GlitchText 
              text="CYBERSECURITY"
              className="text-cyber-glow block mb-2"
            />
            <span className="text-foreground">ENGINEER</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-2xl mx-auto">
            <span className="text-cyber-pink">Developer</span>
            <span className="text-foreground"> | </span>
            <span className="text-cyber-gold">Hardware Innovator</span>
            <span className="text-foreground"> | </span>
            <span className="text-cyber-green">Offensive Security</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <CyberButton 
              variant="primary"
              onClick={() => scrollToSection("skills")}
            >
              Explore_Skills
            </CyberButton>
            <CyberButton 
              variant="secondary"
              onClick={() => scrollToSection("projects")}
            >
              Mission_Logs
            </CyberButton>
            <CyberButton 
              variant="accent"
              onClick={() => scrollToSection("contact")}
            >
              Establish_Uplink
            </CyberButton>
          </div>

          <div className="pt-12 space-y-2 font-mono text-sm text-muted-foreground">
            <p className="text-cyber-glow animate-neon-pulse">&gt; Access granted to portfolio systems</p>
            <p>&gt; Clearance level: VISITOR</p>
            <p>&gt; Security protocols: ACTIVE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

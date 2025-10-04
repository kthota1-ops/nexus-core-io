import { useState, useEffect } from "react";
import { BootSequence } from "@/components/BootSequence";
import { MatrixBackground } from "@/components/MatrixBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("bootComplete");
    if (hasBooted) {
      setBootComplete(true);
    }
  }, []);

  const handleBootComplete = () => {
    setBootComplete(true);
    sessionStorage.setItem("bootComplete", "true");
  };

  if (!bootComplete) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        
        <footer className="py-8 border-t border-border/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground font-mono">
              <span className="text-cyber-glow">&gt;</span> System Status: OPERATIONAL | Uptime: 99.9% | Security Level: MAXIMUM
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

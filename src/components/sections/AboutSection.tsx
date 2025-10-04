import { GraduationCap, Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  const certifications = [
    { name: "Linux+", icon: GraduationCap, year: "2024" },
    { name: "PJPT", icon: Shield, year: "2024" },
    { name: "SANS GFACT", icon: Award, year: "2024" },
  ];

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-glow">
              &lt; IDENTITY_VAULT /&gt;
            </h2>
            <p className="text-muted-foreground font-mono">Accessing credential database...</p>
          </div>

          <Card className="bg-card/30 backdrop-blur-xl border-2 border-primary/30 relative overflow-hidden group animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-50" />
            <div className="absolute inset-0 cyber-scanline" />
            
            <div className="relative p-8 md:p-12 space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-border-pulse">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <Shield className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-cyber-pink mb-2">
                    Cybersecurity Specialist
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Offensive security researcher and developer with expertise in penetration testing, 
                    vulnerability assessment, and secure system architecture. Passionate about hardware 
                    innovation and building resilient cyber defense systems.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                {certifications.map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <div 
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <Icon className="w-8 h-8 text-cyber-glow" />
                      <div>
                        <p className="font-orbitron font-bold text-foreground">{cert.name}</p>
                        <p className="text-xs text-muted-foreground font-mono">{cert.year}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

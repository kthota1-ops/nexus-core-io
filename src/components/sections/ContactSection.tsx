import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { CyberButton } from "../CyberButton";
import { Card } from "@/components/ui/card";

export const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#", color: "text-cyber-glow" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "text-cyber-pink" },
    { icon: Twitter, label: "Twitter", url: "#", color: "text-cyber-gold" },
    { icon: Mail, label: "Email", url: "mailto:contact@example.com", color: "text-cyber-green" },
  ];

  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-green">
              &lt; ESTABLISH_UPLINK /&gt;
            </h2>
            <p className="text-muted-foreground font-mono">Initializing secure communication channels...</p>
          </div>

          <Card className="bg-card/30 backdrop-blur-xl border-2 border-success/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-primary/5 opacity-50" />
            
            <div className="relative p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-success animate-border-pulse">
                  <div className="w-3 h-3 bg-success rounded-full animate-neon-pulse" />
                </div>
                <p className="text-lg text-foreground/80">
                  Ready to collaborate on security projects or discuss opportunities?
                  <br />
                  <span className="text-cyber-green font-mono">Connection established.</span>
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={i}
                      href={link.url}
                      className={`
                        flex flex-col items-center gap-3 p-6 rounded-lg
                        bg-background/50 border-2 border-border
                        hover:border-success hover:shadow-[0_0_20px_hsl(var(--success)/0.3)]
                        transition-all duration-300 group
                        animate-slide-up
                      `}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <Icon className={`w-8 h-8 ${link.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-border/50">
                <div className="flex flex-col items-center gap-4">
                  <p className="text-sm font-mono text-muted-foreground text-center">
                    <span className="text-cyber-green">&gt;</span> Signal strength: OPTIMAL
                    <br />
                    <span className="text-cyber-green">&gt;</span> Encryption: AES-256
                    <br />
                    <span className="text-cyber-green">&gt;</span> Status: Standing by for transmission
                  </p>
                  <CyberButton variant="primary">
                    Send_Transmission
                  </CyberButton>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

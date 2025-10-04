import { SkillCard } from "../SkillCard";
import { Sword, Shield, Code, Cpu } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    {
      icon: <Sword />,
      title: "Offensive Security",
      description: "Penetration testing, exploitation frameworks (Metasploit), vulnerability assessment, and bug bounty hunting with Burp Suite & OWASP ZAP.",
      category: "offensive" as const,
    },
    {
      icon: <Shield />,
      title: "Defensive Security",
      description: "Network security, incident response, threat intelligence, SIEM configuration, and security monitoring with advanced detection systems.",
      category: "defensive" as const,
    },
    {
      icon: <Code />,
      title: "Software Development",
      description: "Full-stack development with Python, JavaScript, React, and security-focused application development with DevSecOps practices.",
      category: "dev" as const,
    },
    {
      icon: <Cpu />,
      title: "Hardware Innovation",
      description: "Raspberry Pi projects, home lab infrastructure, network architecture, and IoT security implementation.",
      category: "hardware" as const,
    },
  ];

  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-pink">
              &lt; CYBER_ARSENAL /&gt;
            </h2>
            <p className="text-muted-foreground font-mono">Loading offensive and defensive capabilities...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div 
                key={i}
                className="animate-slide-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

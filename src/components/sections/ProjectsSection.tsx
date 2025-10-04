import { MissionCard } from "../MissionCard";

export const ProjectsSection = () => {
  const missions = [
    {
      title: "Bug Bounty Program",
      role: "Independent Security Researcher",
      period: "2023 - Present",
      threatLevel: "high" as const,
      impact: "Multiple critical vulnerabilities neutralized across enterprise applications",
      technologies: ["Burp Suite", "OWASP ZAP", "Python", "Web Security"],
      description: "Active participant in responsible disclosure programs, identifying and reporting security vulnerabilities in web applications and APIs.",
    },
    {
      title: "HomeLab Infrastructure",
      role: "System Architect",
      period: "2022 - Present",
      threatLevel: "medium" as const,
      impact: "Operational security testing environment with network segmentation",
      technologies: ["Raspberry Pi", "Linux", "Docker", "Network Security"],
      description: "Built comprehensive home lab environment for security research, penetration testing practice, and network architecture experimentation.",
    },
    {
      title: "Security Automation Tools",
      role: "Developer",
      period: "2023 - 2024",
      threatLevel: "low" as const,
      impact: "Automated vulnerability scanning reduced manual effort by 70%",
      technologies: ["Python", "Bash", "APIs", "Automation"],
      description: "Developed custom security automation scripts and tools for vulnerability assessment, report generation, and security monitoring.",
    },
  ];

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-gold">
              &lt; MISSION_LOGS /&gt;
            </h2>
            <p className="text-muted-foreground font-mono">Accessing classified project database...</p>
          </div>

          <div className="space-y-6">
            {missions.map((mission, i) => (
              <div 
                key={i}
                className="animate-slide-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <MissionCard {...mission} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

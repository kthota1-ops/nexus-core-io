export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  content: string;
  codeSnippets?: { language: string; code: string }[];
  relatedPosts?: number[];
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
];

export const blogFolders: BlogFolder[] = [
  {
    id: 1,
    name: "Web Security",
    icon: "🛡️",
    gradient: "from-tag-security/20 to-cyber-pink/20",
    posts: blogPosts.filter(p => p.id === 1 || p.id === 2),
  },
  {
    id: 2,
    name: "Python & Automation",
    icon: "🐍",
    gradient: "from-tag-python/20 to-cyber-green/20",
    posts: blogPosts.filter(p => p.id === 3),
  },
  {
    id: 3,
    name: "DevOps & Cloud",
    icon: "☁️",
    gradient: "from-tag-devops/20 to-tag-cloud/20",
    posts: blogPosts.filter(p => p.id === 4 || p.id === 6),
  },
  {
    id: 4,
    name: "Hardware Projects",
    icon: "🔧",
    gradient: "from-tag-hardware/20 to-cyber-gold/20",
    posts: blogPosts.filter(p => p.id === 5),
  },
];

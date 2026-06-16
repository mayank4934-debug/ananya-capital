import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const cyber_module0 = {
  id: "cybersecurity-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "cybersecurity-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Cybersecurity! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO CYBERSECURITY!

Hey! I'm thrilled to be your companion on this Cybersecurity journey! 🔐 Cybersecurity is one of the most critical and rapidly growing fields in tech — every organization needs skilled security professionals. You'll learn to think like an attacker to defend like a professional!

COURSE OVERVIEW
Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. You'll study core security principles (CIA Triad), network security, ethical hacking and penetration testing, web application security (OWASP Top 10), cryptography, and incident response. Cybersecurity professionals are essential in every industry and command premium salaries.

HOW THIS COURSE WORKS
This course has 3 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge). Theory-heavy modules in Cybersecurity may not have coding questions — this is by design since the field emphasizes concepts, tools, and analysis. After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~35 hours
This is a practical cybersecurity course. Dedicate 1–2 hours per day and you'll have core security skills in about 4 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "cybersecurity-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Cybersecurity course:

1. Security Fundamentals — CIA Triad, threat landscape, attack vectors, risk management
2. Networking — TCP/IP, firewalls, VPNs, DNS security, network scanning tools
3. Ethical Hacking — Penetration testing methodology, reconnaissance, exploitation
4. Web Security — OWASP Top 10, SQL injection, XSS, CSRF, secure coding
5. Cryptography — Symmetric/asymmetric encryption, hashing, TLS, digital signatures
6. Incident Response — Detection, containment, eradication, recovery, forensics`,
          codeExample: "",
        },
        {
          id: "cybersecurity-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Only in parts where scripting or code analysis is taught

Most cybersecurity topics are conceptual and tool-based, so many parts will not have traditional coding questions. This is intentional — understanding concepts deeply is more important than syntax in this field.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "cybersecurity-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what cybersecurity is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part (coding questions only in scripting topics)
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Cybersecurity journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Security Fundamentals ─────────────────────────────────────────

const cyber_module1 = {
  id: "cyber-security-fundamentals",
  title: "Module 1: Security Fundamentals",
  outcome:
    "Understand core security principles, common threats, and the basics of cryptography.",
  isLocked: false,
  parts: [
    {
      id: "cyber-m1-p1",
      title: "Part 1: CIA Triad & Threats",
      description:
        "Confidentiality, Integrity, Availability, and common attack vectors.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=ULGILG-ZhO0",
      notes:
        "The CIA Triad is the foundation of information security. Every security decision maps back to protecting Confidentiality, ensuring Integrity, and maintaining Availability of systems and data.",
      docs: [
        {
          label: "NIST Cybersecurity Framework",
          url: "https://www.nist.gov/cyberframework",
        },
        {
          label: "OWASP Top Ten",
          url: "https://owasp.org/www-project-top-ten/",
        },
      ],
      partQuiz: [
        {
          question: "What does the 'C' in the CIA Triad stand for?",
          options: ["Continuity", "Confidentiality", "Compliance", "Control"],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which attack overwhelms a server with traffic to deny service?",
          options: [
            "Phishing",
            "SQL Injection",
            "DoS/DDoS",
            "Man-in-the-Middle",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is a zero-day vulnerability?",
          options: [
            "A vulnerability patched on day zero",
            "An unknown flaw with no available patch",
            "A bug found on launch day",
            "A minor UI defect",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "cyber-m1-p1s1",
          title: "CIA Triad",
          content:
            "The CIA Triad defines the three core goals of information security. Confidentiality ensures only authorized users access data. Integrity guarantees data is not altered without authorization. Availability ensures systems are accessible when needed. Every security control exists to protect at least one of these pillars.",
          codeExample:
            "// CIA Triad in practice\n\n// Confidentiality: encrypt data at rest and in transit\nconst sensitiveData = encrypt(userRecord, secretKey);\n\n// Integrity: use hashing to detect tampering\nconst checksum = sha256(fileContents);\n// Later: verify no modifications\nif (sha256(fileContents) !== checksum) throw new Error('File tampered!');\n\n// Availability: implement retries and health checks\nasync function fetchWithRetry(url, retries = 3) {\n  for (let i = 0; i < retries; i++) {\n    try { return await fetch(url); } catch {}\n  }\n  throw new Error('Service unavailable');\n}",
          video: { youtubeId: "ULGILG-ZhO0", title: "CIA Triad Explained" },
          flowchart: "if-else",
        },
        {
          id: "cyber-m1-p1s2",
          title: "Common Threats & Attack Vectors",
          content:
            "Cyber threats include phishing (social engineering via email), malware (viruses, ransomware, trojans), SQL injection (malicious DB queries), XSS (injecting scripts into web pages), MITM (intercepting communications), and DoS/DDoS attacks. Understanding attack vectors helps you design defenses proactively.",
          codeExample:
            "// Example: SQL Injection (vulnerable vs. safe)\n\n// VULNERABLE — never do this\nconst query = `SELECT * FROM users WHERE name = '${userInput}'`;\n// Attacker input: ' OR '1'='1 → leaks all rows\n\n// SAFE — use parameterized queries\nconst query = 'SELECT * FROM users WHERE name = ?';\ndb.execute(query, [userInput]);\n\n// Example: XSS prevention\n// VULNERABLE\ndocument.innerHTML = userInput;\n// SAFE\ndocument.textContent = userInput; // escapes HTML automatically",
          video: { youtubeId: "ULGILG-ZhO0", title: "Common Cyber Threats" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "cyber-m1-p2",
      title: "Part 2: Cryptography Basics",
      description:
        "Symmetric & asymmetric encryption, hashing, and digital signatures.",
      videoUrl: "https://www.youtube.com/watch?v=AQDCe585Lnc",
      notes:
        "Cryptography is the mathematical backbone of security. Symmetric encryption uses one key for both encrypt/decrypt; asymmetric uses a public/private key pair. Hashes are one-way functions used for integrity verification and password storage.",
      docs: [
        {
          label: "OWASP Cryptographic Storage Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html",
        },
        {
          label: "MDN Web Crypto API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",
        },
      ],
      partQuiz: [
        {
          question:
            "Which algorithm is commonly used for symmetric encryption?",
          options: ["RSA", "AES", "SHA-256", "MD5"],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "What property makes a hash function suitable for passwords?",
          options: [
            "Reversible",
            "One-way (pre-image resistance)",
            "Fast to compute",
            "Short output",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "In asymmetric encryption, what is used to encrypt a message for a recipient?",
          options: [
            "Recipient's private key",
            "Sender's private key",
            "Recipient's public key",
            "Shared secret",
          ],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "cyber-m1-p2s1",
          title: "Symmetric & Asymmetric Encryption",
          content:
            "Symmetric encryption (AES, DES) uses the same key to encrypt and decrypt — fast, but the key must be shared securely. Asymmetric encryption (RSA, ECC) uses a public key to encrypt and a private key to decrypt — solves the key distribution problem but is slower. TLS uses asymmetric to exchange a symmetric session key.",
          codeExample:
            "// Symmetric encryption (AES) — Node.js crypto module\nconst crypto = require('crypto');\n\nconst key = crypto.randomBytes(32); // 256-bit key\nconst iv  = crypto.randomBytes(16); // initialization vector\n\nfunction encrypt(text) {\n  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);\n  return Buffer.concat([cipher.update(text), cipher.final()]).toString('hex');\n}\n\nfunction decrypt(encrypted) {\n  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);\n  return Buffer.concat([\n    decipher.update(Buffer.from(encrypted, 'hex')),\n    decipher.final(),\n  ]).toString();\n}\n\nconst ciphertext = encrypt('Hello, Security!');\nconsole.log('Encrypted:', ciphertext);\nconsole.log('Decrypted:', decrypt(ciphertext));",
          video: {
            youtubeId: "AQDCe585Lnc",
            title: "Symmetric vs Asymmetric Encryption",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "cyber-m1-p2s2",
          title: "Hashing & Digital Signatures",
          content:
            "A cryptographic hash (SHA-256, bcrypt) produces a fixed-size digest from any input. It is deterministic and one-way — you cannot reverse it. Use bcrypt/argon2 for passwords (adds salt + work factor). Digital signatures use the sender's private key to sign and anyone with the public key can verify authenticity and integrity.",
          codeExample:
            "const crypto = require('crypto');\n\n// SHA-256 hash\nconst hash = crypto.createHash('sha256').update('password123').digest('hex');\nconsole.log(hash); // a fixed 64-char hex string\n\n// Digital signature\nconst { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });\n\nconst message = 'Transfer $100 to Alice';\nconst signature = crypto.sign('sha256', Buffer.from(message), privateKey);\n\nconst valid = crypto.verify('sha256', Buffer.from(message), publicKey, signature);\nconsole.log('Signature valid:', valid); // true\n\n// Tamper detection\nconst tampered = 'Transfer $9999 to Alice';\nconst invalid = crypto.verify('sha256', Buffer.from(tampered), publicKey, signature);\nconsole.log('Tampered valid:', invalid); // false",
          video: {
            youtubeId: "AQDCe585Lnc",
            title: "Hashing & Digital Signatures",
          },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "Which pillar of the CIA Triad ensures data is not altered by unauthorized parties?",
      options: [
        "Confidentiality",
        "Availability",
        "Integrity",
        "Authentication",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "What type of attack tricks users into revealing credentials via fake emails?",
      options: ["Brute force", "Phishing", "SQL Injection", "Buffer overflow"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which key is used to verify a digital signature?",
      options: [
        "Sender's private key",
        "Receiver's private key",
        "Sender's public key",
        "Shared symmetric key",
      ],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "cyber-m1-test1",
      title: "Hash & Verify a Password",
      description:
        "Write a JavaScript function hashPassword(plain) that returns a SHA-256 hex digest of the input, and a function verifyPassword(plain, hash) that returns true if they match. Use Node.js crypto module.",
      starterCode:
        "const crypto = require('crypto');\n\nfunction hashPassword(plain) {\n  // Return SHA-256 hex digest\n}\n\nfunction verifyPassword(plain, hash) {\n  // Return true if hashes match\n}\n\nconst h = hashPassword('secure123');\nconsole.log(verifyPassword('secure123', h)); // true\nconsole.log(verifyPassword('wrong', h));     // false\n",
      hints: [
        "Use crypto.createHash('sha256').update(plain).digest('hex')",
        "In verifyPassword, hash the plain text and compare to the stored hash",
        "Use === for string comparison of hex digests",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Network Security ───────────────────────────────────────────────

const cyber_module2 = {
  id: "cyber-network-security",
  title: "Module 2: Network Security",
  outcome:
    "Secure networks using firewalls and VPNs, and understand ethical hacking methodology.",
  isLocked: true,
  parts: [
    {
      id: "cyber-m2-p1",
      title: "Part 1: Firewalls & VPNs",
      description:
        "Network perimeter defense, firewall rules, and encrypted tunnels.",
      videoUrl: "https://www.youtube.com/watch?v=eO6QKDL3p1I",
      notes:
        "Firewalls inspect and filter traffic based on rules. VPNs create encrypted tunnels over public networks, protecting data in transit. Together they form the perimeter defense layer of network security.",
      docs: [
        {
          label: "Cloudflare — What is a Firewall?",
          url: "https://www.cloudflare.com/learning/security/what-is-a-firewall/",
        },
        {
          label: "OpenVPN Documentation",
          url: "https://openvpn.net/community-resources/",
        },
      ],
      partQuiz: [
        {
          question:
            "What does a stateful firewall track that a stateless one does not?",
          options: [
            "IP addresses",
            "MAC addresses",
            "Connection state",
            "Bandwidth usage",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does VPN stand for?",
          options: [
            "Virtual Private Network",
            "Verified Proxy Node",
            "Virtual Protocol Network",
            "Verified Private Node",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Which protocol does IPSec operate at?",
          options: [
            "Application layer",
            "Transport layer",
            "Network layer",
            "Data link layer",
          ],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "cyber-m2-p1s1",
          title: "Firewalls & Packet Filtering",
          content:
            "A firewall controls incoming and outgoing network traffic based on predetermined rules. Packet-filtering firewalls inspect IP headers. Stateful firewalls track TCP connection state. Next-generation firewalls (NGFW) also inspect packet payloads using deep packet inspection (DPI). Rules follow a top-down evaluation — the first matching rule wins.",
          codeExample:
            "# iptables — Linux firewall rule examples\n\n# Block all incoming traffic by default\niptables -P INPUT DROP\n\n# Allow established/related connections\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n\n# Allow SSH on port 22\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\n\n# Allow HTTP and HTTPS\niptables -A INPUT -p tcp --dport 80  -j ACCEPT\niptables -A INPUT -p tcp --dport 443 -j ACCEPT\n\n# Block a specific IP\niptables -A INPUT -s 192.168.1.100 -j DROP\n\n# List all rules\niptables -L -v -n",
          video: { youtubeId: "eO6QKDL3p1I", title: "Firewalls Explained" },
          flowchart: "if-else",
        },
        {
          id: "cyber-m2-p1s2",
          title: "VPNs & Encrypted Tunnels",
          content:
            "A VPN encapsulates and encrypts all traffic between the client and the VPN server, protecting data on untrusted networks. SSL/TLS VPNs (OpenVPN, WireGuard) operate at the application layer; IPSec VPNs operate at the network layer. Split tunneling routes only specific traffic through the VPN. Zero-trust models challenge the traditional VPN perimeter approach.",
          codeExample:
            "// Simplified TLS handshake flow (conceptual)\n\n// 1. Client Hello — supported cipher suites + random nonce\nclient.send({ type: 'ClientHello', ciphers: ['AES-256-GCM-SHA384'], random: clientRandom });\n\n// 2. Server Hello — chosen cipher + certificate\nserver.send({ type: 'ServerHello', cipher: 'AES-256-GCM-SHA384', cert: serverCert });\n\n// 3. Client verifies certificate against trusted CAs\nconst trusted = verifyCertificate(serverCert, trustedCAs);\n\n// 4. Key exchange — ECDHE generates shared secret\nconst sharedSecret = ECDHE(clientPrivate, serverPublic);\n\n// 5. Both sides derive symmetric session keys\nconst sessionKey = HKDF(sharedSecret, clientRandom, serverRandom);\n\n// 6. All subsequent data encrypted with sessionKey\nclient.send(encrypt('GET /api/data HTTP/1.1', sessionKey));",
          video: { youtubeId: "eO6QKDL3p1I", title: "How VPNs Work" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "cyber-m2-p2",
      title: "Part 2: Ethical Hacking Intro",
      description:
        "Penetration testing methodology, reconnaissance, and vulnerability scanning.",
      videoUrl: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
      notes:
        "Ethical hacking (penetration testing) uses the same techniques as malicious hackers but with authorization to find vulnerabilities before attackers do. The methodology follows: Reconnaissance → Scanning → Exploitation → Post-exploitation → Reporting.",
      docs: [
        {
          label: "OWASP Testing Guide",
          url: "https://owasp.org/www-project-web-security-testing-guide/",
        },
        {
          label: "Kali Linux Documentation",
          url: "https://www.kali.org/docs/",
        },
      ],
      partQuiz: [
        {
          question: "What is the first phase of a penetration test?",
          options: ["Exploitation", "Reporting", "Reconnaissance", "Scanning"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does a port scanner like nmap primarily discover?",
          options: [
            "Passwords",
            "Open ports and running services",
            "Encryption keys",
            "File contents",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which of these is passive reconnaissance?",
          options: [
            "Port scanning",
            "Sending packets to the target",
            "Reading public WHOIS records",
            "Exploiting a vulnerability",
          ],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "cyber-m2-p2s1",
          title: "Penetration Testing Methodology",
          content:
            "Ethical hacking follows a structured methodology: 1) Planning & Scoping (define targets and rules of engagement), 2) Reconnaissance (gather info passively/actively), 3) Scanning & Enumeration (identify open ports, services, OS), 4) Exploitation (attempt to gain access), 5) Post-Exploitation (privilege escalation, lateral movement), 6) Reporting (document findings, risk ratings, remediation). Always obtain written authorization before testing.",
          codeExample:
            "# Penetration testing phases — tool reference\n\n# Phase 1: Passive Reconnaissance\n# WHOIS lookup\nwhois example.com\n\n# DNS enumeration\nnslookup -type=MX example.com\ndig example.com ANY\n\n# Phase 2: Active Scanning\n# nmap — discover open ports and services\nnmap -sV -sC -O 192.168.1.1          # version, scripts, OS detection\nnmap -p 1-1000 --open 192.168.1.0/24 # scan port range on subnet\n\n# Phase 3: Vulnerability Scanning\n# nikto — web server vulnerability scanner\nnikto -h http://target.example.com\n\n# gobuster — directory brute force\ngobuster dir -u http://target.example.com -w /usr/share/wordlists/common.txt",
          video: {
            youtubeId: "3Kq1MIfTWCE",
            title: "Penetration Testing Phases",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "cyber-m2-p2s2",
          title: "Reconnaissance & Scanning",
          content:
            "Reconnaissance collects information about the target without direct interaction (passive) or with direct probing (active). Tools include WHOIS, DNS lookup, Shodan, theHarvester (passive), and nmap, Nessus, nikto (active). Scanning maps the attack surface: open ports, service versions, and detected vulnerabilities form the basis of the exploitation phase.",
          codeExample:
            "# theHarvester — email/subdomain OSINT tool\ntheHarvester -d example.com -b google,linkedin\n\n# Shodan CLI — search internet-connected devices\nshodan search 'apache country:IN'\nshodan host 1.2.3.4\n\n# nmap service version & default scripts\nnmap -sV --script=default 192.168.1.50\n\n# Sample nmap output interpretation:\n# PORT     STATE  SERVICE  VERSION\n# 22/tcp   open   ssh      OpenSSH 8.2 (Ubuntu)\n# 80/tcp   open   http     Apache httpd 2.4.41\n# 3306/tcp open   mysql    MySQL 8.0.27\n# 8080/tcp closed http-proxy\n# → Open SSH, HTTP, MySQL are potential attack surfaces\n# → MySQL on default port exposed to network is high risk",
          video: { youtubeId: "3Kq1MIfTWCE", title: "Recon & Scanning Tools" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "What is the default policy direction in a deny-by-default firewall?",
      options: [
        "Allow all, deny specified",
        "Deny all, allow specified",
        "Allow all traffic",
        "Log only, no blocking",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which layer of the OSI model do VPNs using SSL/TLS primarily operate at?",
      options: [
        "Network layer",
        "Data link layer",
        "Application layer",
        "Physical layer",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "What document must you obtain before conducting a penetration test?",
      options: [
        "NDA only",
        "Written authorization / rules of engagement",
        "Verbal consent",
        "A court order",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "cyber-m2-test1",
      title: "Simple Port Scanner",
      description:
        "Write a Node.js function scanPorts(host, ports) that attempts a TCP connection to each port in the ports array and returns an object { open: number[], closed: number[] }. Use net.createConnection with a 1-second timeout.",
      starterCode:
        "const net = require('net');\n\nfunction scanPorts(host, ports) {\n  // Return a Promise resolving to { open: [], closed: [] }\n}\n\nscanPorts('localhost', [22, 80, 3000, 9999]).then(console.log);\n",
      hints: [
        "Use Promise.all(ports.map(port => checkPort(host, port)))",
        "net.createConnection({ host, port, timeout: 1000 }) — listen for 'connect' (open) and 'error'/'timeout' (closed)",
        "Accumulate results and resolve with { open, closed } after all promises settle",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Application Security ──────────────────────────────────────────

const cyber_module3 = {
  id: "cyber-application-security",
  title: "Module 3: Application Security",
  outcome:
    "Apply OWASP guidelines and secure coding practices to build safe applications.",
  isLocked: true,
  parts: [
    {
      id: "cyber-m3-p1",
      title: "Part 1: OWASP Top 10",
      description:
        "The ten most critical web application security risks and how to mitigate them.",
      videoUrl: "https://www.youtube.com/watch?v=ravI-F5YOQU",
      notes:
        "The OWASP Top 10 is the standard awareness document for web application security. Understanding each risk — from injection to insecure design — is essential for building secure applications.",
      docs: [
        {
          label: "OWASP Top 10 Official",
          url: "https://owasp.org/www-project-top-ten/",
        },
        {
          label: "OWASP Cheat Sheet Series",
          url: "https://cheatsheetseries.owasp.org/",
        },
      ],
      partQuiz: [
        {
          question:
            "Which OWASP Top 10 risk involves injecting malicious scripts into web pages viewed by others?",
          options: [
            "SQL Injection",
            "Cross-Site Request Forgery",
            "Cross-Site Scripting (XSS)",
            "Broken Access Control",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the primary defense against SQL Injection?",
          options: [
            "Input length limits",
            "Parameterized queries / prepared statements",
            "HTTPS",
            "Rate limiting",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which OWASP category covers using outdated libraries with known vulnerabilities?",
          options: [
            "Insecure Design",
            "Vulnerable and Outdated Components",
            "Security Misconfiguration",
            "Cryptographic Failures",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "cyber-m3-p1s1",
          title: "Injection & Broken Access Control",
          content:
            "Injection (A03) occurs when untrusted data is sent to an interpreter as part of a command or query. SQL, NoSQL, OS, and LDAP injection are common forms. Always use parameterized queries and ORMs. Broken Access Control (A01, the #1 risk) allows users to act outside their intended permissions — enforce least privilege, deny by default, and validate authorization server-side on every request.",
          codeExample:
            "// SQL Injection — vulnerable vs. safe\n\n// VULNERABLE\napp.get('/user', (req, res) => {\n  const query = `SELECT * FROM users WHERE id = ${req.query.id}`;\n  // Attacker: id=1 OR 1=1 → leaks all users\n  db.query(query, (err, rows) => res.json(rows));\n});\n\n// SAFE — parameterized query\napp.get('/user', (req, res) => {\n  db.query('SELECT * FROM users WHERE id = ?', [req.query.id], (err, rows) => {\n    res.json(rows);\n  });\n});\n\n// Broken Access Control — server-side check\napp.get('/admin', (req, res) => {\n  // WRONG: trusting client-supplied role\n  if (req.body.role === 'admin') { ... }\n\n  // CORRECT: verify from session/DB\n  const user = getUserFromSession(req.sessionId);\n  if (user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });\n  res.json(adminData);\n});",
          video: {
            youtubeId: "ravI-F5YOQU",
            title: "Injection & Access Control",
          },
          flowchart: "if-else",
        },
        {
          id: "cyber-m3-p1s2",
          title: "XSS, CSRF & Cryptographic Failures",
          content:
            "Cross-Site Scripting (XSS) injects malicious scripts into pages. Prevent with output encoding, Content Security Policy (CSP), and avoiding innerHTML. CSRF tricks authenticated users into submitting forged requests — defend with CSRF tokens and SameSite cookies. Cryptographic Failures include storing passwords in plain text or using weak algorithms (MD5, SHA-1) — always use bcrypt/argon2 for passwords and AES-256 for data encryption.",
          codeExample:
            "// XSS Prevention\n// VULNERABLE\ndocument.getElementById('name').innerHTML = userInput;\n\n// SAFE — textContent escapes HTML\ndocument.getElementById('name').textContent = userInput;\n// Or use DOMPurify for rich HTML\nimport DOMPurify from 'dompurify';\nelement.innerHTML = DOMPurify.sanitize(userInput);\n\n// CSRF Token (Express example)\nconst csrf = require('csurf');\napp.use(csrf({ cookie: true }));\napp.get('/form', (req, res) => {\n  res.render('form', { csrfToken: req.csrfToken() });\n});\n// In HTML: <input type=\"hidden\" name=\"_csrf\" value=\"<%= csrfToken %>\">\n\n// Cryptographic Failure — password storage\nconst bcrypt = require('bcrypt');\n// Hash on registration\nconst hash = await bcrypt.hash(plainPassword, 12);\n// Verify on login\nconst match = await bcrypt.compare(plainPassword, storedHash);",
          video: {
            youtubeId: "ravI-F5YOQU",
            title: "XSS, CSRF & Crypto Failures",
          },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "cyber-m3-p2",
      title: "Part 2: Secure Coding Practices",
      description:
        "Input validation, authentication hardening, dependency management, and security headers.",
      videoUrl: "https://www.youtube.com/watch?v=F5KJVuii0Yw",
      notes:
        "Secure coding integrates security at every stage of development. Validate and sanitize all input, enforce strong authentication, manage dependencies, set security headers, and follow the principle of least privilege across your entire stack.",
      docs: [
        {
          label: "OWASP Secure Coding Practices",
          url: "https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/",
        },
        {
          label: "Mozilla Security Headers",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security",
        },
      ],
      partQuiz: [
        {
          question: "What is the principle of least privilege?",
          options: [
            "Granting all permissions by default",
            "Granting only the minimum permissions needed to perform a task",
            "Restricting admin accounts only",
            "Using role-based access for UI elements only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which HTTP header prevents clickjacking attacks?",
          options: [
            "Content-Security-Policy",
            "X-Frame-Options",
            "Strict-Transport-Security",
            "X-Content-Type-Options",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does input sanitization do?",
          options: [
            "Validates length only",
            "Removes or encodes dangerous characters from user input",
            "Blocks all non-ASCII input",
            "Encrypts user input",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "cyber-m3-p2s1",
          title: "Input Validation & Authentication Hardening",
          content:
            "Never trust user input — validate type, length, format, and range server-side. Use allow-lists over deny-lists. For authentication: enforce strong password policies, implement MFA, use secure session tokens (httpOnly, Secure, SameSite cookies), store passwords with bcrypt/argon2, implement account lockout after failed attempts, and use HTTPS everywhere.",
          codeExample:
            "// Input validation with Joi (Node.js)\nconst Joi = require('joi');\n\nconst registerSchema = Joi.object({\n  username: Joi.string().alphanum().min(3).max(30).required(),\n  email: Joi.string().email().required(),\n  password: Joi.string().min(8).pattern(/[A-Z]/).pattern(/[0-9]/).required(),\n  age: Joi.number().integer().min(13).max(120),\n});\n\napp.post('/register', async (req, res) => {\n  const { error, value } = registerSchema.validate(req.body);\n  if (error) return res.status(400).json({ error: error.details[0].message });\n\n  // Safe to use value.username, value.email, etc.\n  const hash = await bcrypt.hash(value.password, 12);\n  await db.createUser({ ...value, password: hash });\n  res.status(201).json({ message: 'User created' });\n});\n\n// Account lockout\nconst loginAttempts = new Map();\napp.post('/login', async (req, res) => {\n  const attempts = loginAttempts.get(req.body.email) || 0;\n  if (attempts >= 5) return res.status(429).json({ error: 'Account locked. Try after 15 minutes.' });\n  // ... verify password, reset or increment attempts\n});",
          video: { youtubeId: "F5KJVuii0Yw", title: "Input Validation & Auth" },
          flowchart: "if-else",
        },
        {
          id: "cyber-m3-p2s2",
          title: "Security Headers & Dependency Management",
          content:
            "HTTP security headers instruct browsers to enforce policies: Content-Security-Policy (CSP) restricts script sources, X-Frame-Options prevents clickjacking, HSTS enforces HTTPS, X-Content-Type-Options prevents MIME sniffing. Dependency management: regularly audit packages (npm audit, Snyk), pin versions, use automated tools like Dependabot, and remove unused dependencies.",
          codeExample:
            "// Security headers with Helmet.js (Express)\nconst helmet = require('helmet');\n\napp.use(helmet()); // applies all defaults\n\n// Or fine-tune individual headers:\napp.use(helmet.contentSecurityPolicy({\n  directives: {\n    defaultSrc: [\"'self'\"],\n    scriptSrc: [\"'self'\", 'cdn.trusted.com'],\n    imgSrc: [\"'self'\", 'data:', 'https:'],\n    upgradeInsecureRequests: [],\n  },\n}));\n\napp.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true }));\napp.use(helmet.frameguard({ action: 'deny' }));\napp.use(helmet.noSniff());\n\n// Dependency audit\n// $ npm audit                → list vulnerabilities\n// $ npm audit fix            → auto-fix minor/patch\n// $ npx snyk test            → detailed vulnerability report\n// $ npx depcheck             → find unused dependencies\n\n// package.json: pin exact versions\n// { \"express\": \"4.18.2\" }  ✓\n// { \"express\": \"^4.0.0\" }  ✗  (allows major upgrades)",
          video: { youtubeId: "F5KJVuii0Yw", title: "Security Headers & Deps" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which OWASP risk is ranked #1 in the 2021 Top 10?",
      options: [
        "SQL Injection",
        "Cryptographic Failures",
        "Broken Access Control",
        "Security Misconfiguration",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "What does Content Security Policy (CSP) primarily protect against?",
      options: [
        "SQL Injection",
        "XSS by restricting script sources",
        "CSRF attacks",
        "Brute force login",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which tool audits Node.js project dependencies for known vulnerabilities?",
      options: ["eslint", "prettier", "npm audit", "tsc"],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "cyber-m3-test1",
      title: "Secure Registration Endpoint",
      description:
        "Write an Express route POST /register that: validates email format and password length >= 8, hashes the password with bcrypt (saltRounds=10), and returns 400 with an error message for invalid input or 201 with { message: 'User created' } on success.",
      starterCode:
        "const express = require('express');\nconst bcrypt = require('bcrypt');\nconst app = express();\napp.use(express.json());\n\napp.post('/register', async (req, res) => {\n  const { email, password } = req.body;\n  // 1. Validate email and password\n  // 2. Hash password\n  // 3. Respond correctly\n});\n",
      hints: [
        "Validate email with a regex: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)",
        "Check password.length >= 8 and return res.status(400).json({ error: '...' }) if invalid",
        "Use await bcrypt.hash(password, 10) then return res.status(201).json({ message: 'User created' })",
      ],
    },
  ] as CTestProblem[],
};

// ─── Assembled Course ─────────────────────────────────────────────────────────

export const CYBERSECURITY_COURSE = {
  id: "cybersecurity-course",
  name: "Cybersecurity",
  description:
    "Master core security principles, network defense, ethical hacking, and secure application development.",
  icon: "🔐",
  color: "from-red-800 to-red-600",
  totalModules: 3,
  certificate: {
    title: "Cybersecurity Certificate",
    description:
      "Awarded for completing all 3 modules of the Cybersecurity course.",
  },
  modules: [
    cyber_module0,
    cyber_module1,
    cyber_module2,
    cyber_module3,
  ] as unknown as CModule[],
};

export const CYBERSECURITY_ROADMAP_ENTRY = {
  id: "cybersecurity",
  name: "Cybersecurity",
  icon: "🔐",
  color: "from-red-800 to-red-600",
  description:
    "Protect systems and data with security fundamentals, network defense, and ethical hacking.",
  topics: [
    {
      title: "CIA Triad & Common Threats",
      videoId: "ULGILG-ZhO0",
      duration: "40 min",
    },
    {
      title: "Cryptography Basics",
      videoId: "AQDCe585Lnc",
      duration: "45 min",
    },
    { title: "Firewalls & VPNs", videoId: "eO6QKDL3p1I", duration: "35 min" },
    {
      title: "Ethical Hacking & Penetration Testing",
      videoId: "3Kq1MIfTWCE",
      duration: "50 min",
    },
    { title: "OWASP Top 10", videoId: "ravI-F5YOQU", duration: "45 min" },
    {
      title: "Secure Coding Practices",
      videoId: "F5KJVuii0Yw",
      duration: "40 min",
    },
  ],
  courseId: "cybersecurity-course",
};

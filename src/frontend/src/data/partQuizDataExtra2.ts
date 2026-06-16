// Part Quiz Data Extra 2 — Cybersecurity, Blockchain, Cloud, AI/ML, Game Dev, UI/UX
import type { PartQuizData } from "./partQuizData";

// ─── CYBERSECURITY ────────────────────────────────────────────────────────────
const CS_M1_P1: PartQuizData = {
  mcqs: [
    {
      id: "csm1p1-1",
      question: "What does CIA stand in security?",
      options: [
        "Confidentiality Integrity Availability",
        "Control Identity Access",
        "Cyber Intrusion Alert",
        "Central Information Agency",
      ],
      correct: 0,
      explanation: "CIA triad is Confidentiality Integrity Availability.",
      xp: 5,
    },
    {
      id: "csm1p1-2",
      question: "Which attack overwhelms a server?",
      options: ["Phishing", "DoS", "MITM", "SQL Injection"],
      correct: 1,
      explanation: "DoS floods server to deny service.",
      xp: 5,
    },
    {
      id: "csm1p1-3",
      question: "Phishing attacks target?",
      options: ["Servers", "Networks", "Users via deception", "Firewalls"],
      correct: 2,
      explanation: "Phishing deceives users into revealing info.",
      xp: 5,
    },
    {
      id: "csm1p1-4",
      question: "MITM attack intercepts?",
      options: [
        "Passwords only",
        "Communication between parties",
        "Database queries",
        "DNS servers",
      ],
      correct: 1,
      explanation: "MITM intercepts communication between two parties.",
      xp: 5,
    },
    {
      id: "csm1p1-5",
      question: "A vulnerability is a?",
      options: [
        "Known attack",
        "Weakness in system",
        "Security policy",
        "Type of malware",
      ],
      correct: 1,
      explanation: "Vulnerability is a weakness that can be exploited.",
      xp: 5,
    },
    {
      id: "csm1p1-6",
      question: "Confidentiality ensures data is?",
      options: [
        "Available always",
        "Accurate",
        "Accessible only by authorized",
        "Encrypted",
      ],
      correct: 2,
      explanation: "Confidentiality limits data access to authorized users.",
      xp: 5,
    },
    {
      id: "csm1p1-7",
      question: "Integrity means data is?",
      options: [
        "Encrypted",
        "Unmodified and accurate",
        "Backed up",
        "Compressed",
      ],
      correct: 1,
      explanation: "Integrity ensures data has not been tampered with.",
      xp: 5,
    },
    {
      id: "csm1p1-8",
      question: "Availability ensures systems are?",
      options: ["Encrypted", "Accessible when needed", "Monitored", "Patched"],
      correct: 1,
      explanation:
        "Availability means systems are accessible to authorized users.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "csm1p1-pq1",
      title: "CIA Check",
      description:
        "Print which CIA property is violated given a scenario string.",
      examples: [{ input: "data_modified", output: "Integrity violated" }],
      starterCode:
        'scenario = "data_modified"\n# Check which CIA property\nprint("Integrity violated")',
      languageId: 71,
      languageLabel: "Python",
      hints: [
        "Check if scenario contains modified",
        "Use if/elif for each CIA property",
        "Print the violated property name",
      ],
      solutionKeywords: ["if", "print"],
      xp: 20,
    },
  ],
};

const CS_M2_P1: PartQuizData = {
  mcqs: [
    {
      id: "csm2p1-1",
      question: "Stateful firewall tracks?",
      options: [
        "Only IP addresses",
        "Connection state",
        "User credentials",
        "File hashes",
      ],
      correct: 1,
      explanation: "Stateful firewalls track the state of network connections.",
      xp: 5,
    },
    {
      id: "csm2p1-2",
      question: "IDS stands for?",
      options: [
        "Internet Defense System",
        "Intrusion Detection System",
        "Internal Data Security",
        "Integrated Denial Service",
      ],
      correct: 1,
      explanation: "IDS is Intrusion Detection System.",
      xp: 5,
    },
    {
      id: "csm2p1-3",
      question: "IPS differs from IDS because it?",
      options: [
        "Only detects",
        "Also blocks threats",
        "Encrypts traffic",
        "Monitors logs",
      ],
      correct: 1,
      explanation: "IPS actively blocks threats, IDS only detects.",
      xp: 5,
    },
    {
      id: "csm2p1-4",
      question: "VPN tunneling creates?",
      options: [
        "Public network",
        "Encrypted private channel",
        "Firewall rule",
        "IP whitelist",
      ],
      correct: 1,
      explanation: "VPN creates an encrypted tunnel over public networks.",
      xp: 5,
    },
    {
      id: "csm2p1-5",
      question: "SSL/TLS handshake negotiates?",
      options: [
        "User passwords",
        "Encryption keys",
        "IP addresses",
        "Port numbers",
      ],
      correct: 1,
      explanation: "TLS handshake establishes encryption keys for session.",
      xp: 5,
    },
    {
      id: "csm2p1-6",
      question: "Port scanning helps attackers?",
      options: [
        "Steal passwords",
        "Find open services",
        "Encrypt data",
        "Bypass DNS",
      ],
      correct: 1,
      explanation: "Port scanning discovers open ports and services.",
      xp: 5,
    },
    {
      id: "csm2p1-7",
      question: "Stateless firewall filters by?",
      options: [
        "Connection state",
        "IP and port rules only",
        "User identity",
        "Packet content",
      ],
      correct: 1,
      explanation:
        "Stateless firewalls use IP/port rules without tracking state.",
      xp: 5,
    },
    {
      id: "csm2p1-8",
      question: "HTTPS uses which protocol?",
      options: ["HTTP", "FTP", "TLS", "SSH"],
      correct: 2,
      explanation: "HTTPS uses TLS to encrypt HTTP traffic.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "csm2p1-pq1",
      title: "Port Checker",
      description:
        "Given a list of ports, print which are commonly vulnerable.",
      examples: [
        {
          input: "[21, 22, 80]",
          output: "21: FTP (vulnerable)\n22: SSH\n80: HTTP",
        },
      ],
      starterCode: "ports = [21, 22, 80]\nfor p in ports:\n    print(p)",
      languageId: 71,
      languageLabel: "Python",
      hints: [
        "Use a dictionary mapping ports to services",
        "Check if port is in dict",
        "Print port and service name",
      ],
      solutionKeywords: ["for", "print", "dict"],
      xp: 20,
    },
  ],
};

const CS_M3_P1: PartQuizData = {
  mcqs: [
    {
      id: "csm3p1-1",
      question: "SQL injection exploits?",
      options: [
        "Weak passwords",
        "Unsanitized database queries",
        "Open ports",
        "Weak encryption",
      ],
      correct: 1,
      explanation: "SQL injection inserts malicious SQL into queries.",
      xp: 5,
    },
    {
      id: "csm3p1-2",
      question: "XSS stands for?",
      options: [
        "Cross-Site Scripting",
        "Cross-Server Security",
        "Extensible Script Schema",
        "External Security Standard",
      ],
      correct: 0,
      explanation: "XSS is Cross-Site Scripting vulnerability.",
      xp: 5,
    },
    {
      id: "csm3p1-3",
      question: "Stored XSS persists in?",
      options: [
        "Browser cache",
        "Server database",
        "URL parameters",
        "HTTP headers",
      ],
      correct: 1,
      explanation: "Stored XSS saves malicious script in the database.",
      xp: 5,
    },
    {
      id: "csm3p1-4",
      question: "CSRF token prevents?",
      options: [
        "SQL injection",
        "Cross-site request forgery",
        "XSS attacks",
        "DoS attacks",
      ],
      correct: 1,
      explanation: "CSRF tokens verify request origin to prevent forgery.",
      xp: 5,
    },
    {
      id: "csm3p1-5",
      question: "IDOR is an example of?",
      options: [
        "Authentication bypass",
        "Broken access control",
        "Injection attack",
        "Cryptography flaw",
      ],
      correct: 1,
      explanation:
        "IDOR (Insecure Direct Object Reference) is broken access control.",
      xp: 5,
    },
    {
      id: "csm3p1-6",
      question: "OWASP stands for?",
      options: [
        "Open Web App Security Project",
        "Online Web Audit Security Protocol",
        "Open Worldwide Application Survey",
        "Organized Web Attack Security Plan",
      ],
      correct: 0,
      explanation: "OWASP is Open Web Application Security Project.",
      xp: 5,
    },
    {
      id: "csm3p1-7",
      question: "Broken authentication allows?",
      options: [
        "Data theft via SQL",
        "Unauthorized account access",
        "XSS execution",
        "Port scanning",
      ],
      correct: 1,
      explanation: "Broken auth lets attackers compromise user accounts.",
      xp: 5,
    },
    {
      id: "csm3p1-8",
      question: "Reflected XSS is triggered via?",
      options: [
        "Database",
        "Malicious URL link",
        "File upload",
        "Cookie theft",
      ],
      correct: 1,
      explanation: "Reflected XSS is embedded in URL and reflected back.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "csm3p1-pq1",
      title: "Input Sanitizer",
      description:
        "Write a function to detect if input contains SQL injection patterns.",
      examples: [
        { input: "'; DROP TABLE users;--", output: "SQL injection detected" },
      ],
      starterCode:
        'def check_sql(input_str):\n    if "DROP" in input_str or "--" in input_str:\n        return "SQL injection detected"\n    return "Safe"',
      languageId: 71,
      languageLabel: "Python",
      hints: [
        "Check for SQL keywords like DROP, SELECT",
        "Look for comment sequences --",
        "Return detection message",
      ],
      solutionKeywords: ["def", "if", "return"],
      xp: 20,
    },
  ],
};

const CS_M4_P1: PartQuizData = {
  mcqs: [
    {
      id: "csm4p1-1",
      question: "AES is what type of encryption?",
      options: ["Asymmetric", "Symmetric", "Hashing", "Public key"],
      correct: 1,
      explanation: "AES is symmetric — same key encrypts and decrypts.",
      xp: 5,
    },
    {
      id: "csm4p1-2",
      question: "RSA uses how many keys?",
      options: ["One", "Two", "Three", "Four"],
      correct: 1,
      explanation: "RSA uses a public/private key pair.",
      xp: 5,
    },
    {
      id: "csm4p1-3",
      question: "SHA-256 produces a hash of?",
      options: ["128 bits", "256 bits", "512 bits", "64 bits"],
      correct: 1,
      explanation: "SHA-256 outputs a 256-bit hash digest.",
      xp: 5,
    },
    {
      id: "csm4p1-4",
      question: "bcrypt is used for?",
      options: [
        "Encrypting files",
        "Hashing passwords",
        "Key exchange",
        "Digital signatures",
      ],
      correct: 1,
      explanation: "bcrypt is a password hashing algorithm with salt.",
      xp: 5,
    },
    {
      id: "csm4p1-5",
      question: "A digital signature provides?",
      options: [
        "Confidentiality",
        "Authentication and integrity",
        "Availability",
        "Compression",
      ],
      correct: 1,
      explanation:
        "Digital signatures authenticate sender and verify integrity.",
      xp: 5,
    },
    {
      id: "csm4p1-6",
      question: "PKI stands for?",
      options: [
        "Private Key Infrastructure",
        "Public Key Infrastructure",
        "Packet Key Index",
        "Protected Key Interface",
      ],
      correct: 1,
      explanation: "PKI is Public Key Infrastructure managing certificates.",
      xp: 5,
    },
    {
      id: "csm4p1-7",
      question: "A CA in PKI is responsible for?",
      options: [
        "Hashing passwords",
        "Issuing digital certificates",
        "Routing traffic",
        "Scanning ports",
      ],
      correct: 1,
      explanation:
        "Certificate Authority issues and signs digital certificates.",
      xp: 5,
    },
    {
      id: "csm4p1-8",
      question: "Hashing is a one-way function, meaning?",
      options: [
        "It can be reversed",
        "Original data cannot be recovered",
        "It uses two keys",
        "It compresses data",
      ],
      correct: 1,
      explanation: "Hashes cannot be reversed to get original input.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "csm4p1-pq1",
      title: "Hash Generator",
      description: "Use hashlib to generate SHA-256 hash of a string.",
      examples: [{ input: "hello", output: "2cf24dba..." }],
      starterCode:
        'import hashlib\ntext = "hello"\nhash_val = hashlib.sha256(text.encode()).hexdigest()',
      languageId: 71,
      languageLabel: "Python",
      hints: [
        "Import hashlib module",
        "Use sha256 with encode()",
        "Call hexdigest() for hex output",
      ],
      solutionKeywords: ["hashlib", "sha256", "hexdigest"],
      xp: 20,
    },
  ],
};

const CS_M5_P1: PartQuizData = {
  mcqs: [
    {
      id: "csm5p1-1",
      question: "First phase of pen testing is?",
      options: ["Exploitation", "Reconnaissance", "Reporting", "Scanning"],
      correct: 1,
      explanation: "Reconnaissance is the information gathering phase.",
      xp: 5,
    },
    {
      id: "csm5p1-2",
      question: "Kali Linux is used for?",
      options: [
        "Web development",
        "Penetration testing",
        "Database management",
        "Game development",
      ],
      correct: 1,
      explanation: "Kali Linux is a security-focused pen testing distro.",
      xp: 5,
    },
    {
      id: "csm5p1-3",
      question: "CVE stands for?",
      options: [
        "Common Vulnerabilities and Exposures",
        "Cyber Vulnerability Exploit",
        "Critical Vendor Evaluation",
        "Central Vulnerability Engine",
      ],
      correct: 0,
      explanation: "CVE is Common Vulnerabilities and Exposures database.",
      xp: 5,
    },
    {
      id: "csm5p1-4",
      question: "Responsible disclosure means?",
      options: [
        "Publishing exploits publicly",
        "Reporting vulns to vendor first",
        "Ignoring vulnerabilities",
        "Selling to hackers",
      ],
      correct: 1,
      explanation:
        "Responsible disclosure reports to vendor before public release.",
      xp: 5,
    },
    {
      id: "csm5p1-5",
      question: "Exploitation phase involves?",
      options: [
        "Gathering information",
        "Actively using vulnerabilities",
        "Writing reports",
        "Scanning ports",
      ],
      correct: 1,
      explanation: "Exploitation actively leverages found vulnerabilities.",
      xp: 5,
    },
    {
      id: "csm5p1-6",
      question: "Nmap is used for?",
      options: [
        "Password cracking",
        "Network scanning",
        "Web exploitation",
        "Log analysis",
      ],
      correct: 1,
      explanation: "Nmap scans networks for hosts and open ports.",
      xp: 5,
    },
    {
      id: "csm5p1-7",
      question: "A pen test report should include?",
      options: [
        "Only found vulns",
        "Findings, risk, remediation",
        "Attacker identity",
        "System passwords",
      ],
      correct: 1,
      explanation:
        "Reports cover findings, severity ratings, and remediation steps.",
      xp: 5,
    },
    {
      id: "csm5p1-8",
      question: "Scanning phase comes after?",
      options: ["Exploitation", "Reporting", "Reconnaissance", "Patching"],
      correct: 2,
      explanation: "Scanning follows recon to discover attack surfaces.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "csm5p1-pq1",
      title: "Recon Simulator",
      description: "Simulate recon by printing open ports from a given list.",
      examples: [
        { input: "[80, 443, 8080]", output: "Open: 80\nOpen: 443\nOpen: 8080" },
      ],
      starterCode:
        'ports = [80, 443, 8080]\nfor port in ports:\n    print("Open:", port)',
      languageId: 71,
      languageLabel: "Python",
      hints: [
        "Iterate over ports list",
        "Print each port with label",
        "Format as Open: port_number",
      ],
      solutionKeywords: ["for", "print"],
      xp: 20,
    },
  ],
};

// ─── BLOCKCHAIN ───────────────────────────────────────────────────────────────
const BC_M1_P1: PartQuizData = {
  mcqs: [
    {
      id: "bcm1p1-1",
      question: "A block contains a previous hash to?",
      options: [
        "Save space",
        "Link blocks in chain",
        "Encrypt data",
        "Speed up mining",
      ],
      correct: 1,
      explanation: "Previous hash links blocks creating an immutable chain.",
      xp: 5,
    },
    {
      id: "bcm1p1-2",
      question: "Nonce in PoW is used to?",
      options: [
        "Sign transactions",
        "Find valid block hash",
        "Store data",
        "Identify miners",
      ],
      correct: 1,
      explanation:
        "Nonce is iterated until block hash meets difficulty target.",
      xp: 5,
    },
    {
      id: "bcm1p1-3",
      question: "PoS consensus selects validators by?",
      options: [
        "Computing power",
        "Staked cryptocurrency",
        "Age of account",
        "Number of transactions",
      ],
      correct: 1,
      explanation: "Proof of Stake selects validators based on staked coins.",
      xp: 5,
    },
    {
      id: "bcm1p1-4",
      question: "Blockchain immutability means?",
      options: [
        "Data can be deleted",
        "Records cannot be altered",
        "Fast transactions",
        "Low energy use",
      ],
      correct: 1,
      explanation: "Immutability ensures past records cannot be changed.",
      xp: 5,
    },
    {
      id: "bcm1p1-5",
      question: "Decentralization means no?",
      options: ["Cryptography", "Central authority", "Consensus", "Mining"],
      correct: 1,
      explanation: "Decentralization removes single points of control.",
      xp: 5,
    },
    {
      id: "bcm1p1-6",
      question: "PoW requires nodes to solve?",
      options: [
        "Logic puzzles",
        "Cryptographic hash puzzles",
        "Network routing",
        "Smart contracts",
      ],
      correct: 1,
      explanation: "PoW requires solving computationally hard hash puzzles.",
      xp: 5,
    },
    {
      id: "bcm1p1-7",
      question: "Genesis block is the?",
      options: [
        "Last block",
        "First block in chain",
        "Largest block",
        "Invalid block",
      ],
      correct: 1,
      explanation: "Genesis block is the very first block in a blockchain.",
      xp: 5,
    },
    {
      id: "bcm1p1-8",
      question: "Blockchain data is stored across?",
      options: [
        "One central server",
        "Many distributed nodes",
        "Cloud storage",
        "Single database",
      ],
      correct: 1,
      explanation: "Blockchain distributes data across all network nodes.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "bcm1p1-pq1",
      title: "Block Hash Simulator",
      description:
        "Create a simple block object with hash and prevHash fields.",
      examples: [{ input: "block data", output: "{ data, hash, prevHash }" }],
      starterCode:
        'const block = {\n  data: "tx1",\n  prevHash: "0000",\n  hash: "abc1"\n};\nconsole.log(block);',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Create an object with data, prevHash, hash",
        "Simulate hash as a string",
        "Log the block object",
      ],
      solutionKeywords: ["const", "prevHash", "hash", "console.log"],
      xp: 20,
    },
  ],
};

const BC_M2_P1: PartQuizData = {
  mcqs: [
    {
      id: "bcm2p1-1",
      question: "Solidity is used to write?",
      options: [
        "Frontend apps",
        "Smart contracts",
        "Database queries",
        "Network protocols",
      ],
      correct: 1,
      explanation: "Solidity is Ethereum's smart contract language.",
      xp: 5,
    },
    {
      id: "bcm2p1-2",
      question: "A Solidity mapping is similar to?",
      options: ["Array", "Key-value store", "Loop", "Function"],
      correct: 1,
      explanation: "Mapping in Solidity is a key-value hash map.",
      xp: 5,
    },
    {
      id: "bcm2p1-3",
      question: "The payable modifier allows?",
      options: [
        "Reading state",
        "Receiving Ether",
        "Emitting events",
        "Modifying storage",
      ],
      correct: 1,
      explanation: "payable functions can receive Ether payments.",
      xp: 5,
    },
    {
      id: "bcm2p1-4",
      question: "Gas in Ethereum represents?",
      options: [
        "Storage size",
        "Computation cost",
        "Network speed",
        "Token supply",
      ],
      correct: 1,
      explanation: "Gas measures the computational cost of operations.",
      xp: 5,
    },
    {
      id: "bcm2p1-5",
      question: "Remix IDE is used for?",
      options: [
        "Frontend development",
        "Writing and testing Solidity",
        "Mining Ethereum",
        "NFT trading",
      ],
      correct: 1,
      explanation: "Remix IDE is a browser-based Solidity development tool.",
      xp: 5,
    },
    {
      id: "bcm2p1-6",
      question: "Events in Solidity are used for?",
      options: [
        "Storing data on chain",
        "Logging and off-chain notifications",
        "Payment processing",
        "Access control",
      ],
      correct: 1,
      explanation: "Events emit logs that off-chain apps can listen to.",
      xp: 5,
    },
    {
      id: "bcm2p1-7",
      question: "A modifier in Solidity adds?",
      options: [
        "New state variables",
        "Reusable function preconditions",
        "Payment logic",
        "Event listeners",
      ],
      correct: 1,
      explanation: "Modifiers add reusable validation to functions.",
      xp: 5,
    },
    {
      id: "bcm2p1-8",
      question: "Contract state variables are stored?",
      options: [
        "In browser memory",
        "On the blockchain",
        "In IPFS",
        "In local storage",
      ],
      correct: 1,
      explanation: "State variables persist on the Ethereum blockchain.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "bcm2p1-pq1",
      title: "Simple Counter Contract",
      description:
        "Write a Solidity-style counter in JavaScript using an object.",
      examples: [{ input: "increment 3 times", output: "count: 3" }],
      starterCode:
        'let count = 0;\nfunction increment() { count++; }\nincrement(); increment(); increment();\nconsole.log("count:", count);',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use a variable to store count",
        "Create increment function",
        "Call function multiple times",
      ],
      solutionKeywords: ["count", "increment", "console.log"],
      xp: 20,
    },
  ],
};

const BC_M3_P1: PartQuizData = {
  mcqs: [
    {
      id: "bcm3p1-1",
      question: "AMM stands for?",
      options: [
        "Automated Market Maker",
        "Asset Management Module",
        "Async Mining Method",
        "Advanced Merkle Map",
      ],
      correct: 0,
      explanation: "AMM is Automated Market Maker used in DEXes.",
      xp: 5,
    },
    {
      id: "bcm3p1-2",
      question: "Liquidity pools contain?",
      options: [
        "User passwords",
        "Paired token reserves",
        "Mining hardware",
        "Validator stakes",
      ],
      correct: 1,
      explanation: "Liquidity pools hold pairs of tokens for trading.",
      xp: 5,
    },
    {
      id: "bcm3p1-3",
      question: "Uniswap uses which pricing formula?",
      options: [
        "Supply and demand",
        "x * y = k constant product",
        "Order book matching",
        "Fixed price oracle",
      ],
      correct: 1,
      explanation: "Uniswap uses x*y=k constant product formula.",
      xp: 5,
    },
    {
      id: "bcm3p1-4",
      question: "Yield farming earns rewards by?",
      options: [
        "Mining blocks",
        "Providing liquidity",
        "Holding NFTs",
        "Running nodes",
      ],
      correct: 1,
      explanation:
        "Yield farmers earn by providing liquidity to DeFi protocols.",
      xp: 5,
    },
    {
      id: "bcm3p1-5",
      question: "USDC is a?",
      options: [
        "Volatile cryptocurrency",
        "Fiat-backed stablecoin",
        "Governance token",
        "NFT collection",
      ],
      correct: 1,
      explanation: "USDC is a USD-backed stablecoin.",
      xp: 5,
    },
    {
      id: "bcm3p1-6",
      question: "DAI is backed by?",
      options: [
        "USD reserves",
        "Crypto collateral",
        "Gold",
        "Government bonds",
      ],
      correct: 1,
      explanation: "DAI is a crypto-collateralized decentralized stablecoin.",
      xp: 5,
    },
    {
      id: "bcm3p1-7",
      question: "DeFi stands for?",
      options: [
        "Decentralized Finance",
        "Digital Fee Index",
        "Distributed Fiat",
        "Delegated Funding",
      ],
      correct: 0,
      explanation: "DeFi is Decentralized Finance built on blockchains.",
      xp: 5,
    },
    {
      id: "bcm3p1-8",
      question: "Impermanent loss affects?",
      options: ["Borrowers", "Liquidity providers", "Miners", "Token holders"],
      correct: 1,
      explanation: "Impermanent loss is a risk for liquidity pool providers.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "bcm3p1-pq1",
      title: "AMM Price Calculator",
      description: "Calculate token price using x*y=k formula.",
      examples: [{ input: "x=100, y=100, dx=10", output: "new y: 90.91" }],
      starterCode:
        'const x = 100, y = 100;\nconst k = x * y;\nconst dx = 10;\nconst newY = k / (x + dx);\nconsole.log("new y:", newY.toFixed(2));',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Calculate k = x * y",
        "Add dx to x for new x value",
        "Compute new y = k / newX",
      ],
      solutionKeywords: ["const", "k", "newY", "toFixed"],
      xp: 20,
    },
  ],
};

const BC_M4_P1: PartQuizData = {
  mcqs: [
    {
      id: "bcm4p1-1",
      question: "ethers.js Provider connects to?",
      options: ["Database", "Ethereum network", "IPFS", "REST API"],
      correct: 1,
      explanation: "Provider connects your app to the Ethereum blockchain.",
      xp: 5,
    },
    {
      id: "bcm4p1-2",
      question: "Signer in ethers.js is used to?",
      options: [
        "Read blockchain data",
        "Sign and send transactions",
        "Deploy contracts",
        "Listen to events",
      ],
      correct: 1,
      explanation: "Signer holds private key and signs transactions.",
      xp: 5,
    },
    {
      id: "bcm4p1-3",
      question: "MetaMask is a?",
      options: [
        "Blockchain explorer",
        "Web3 browser wallet",
        "Mining software",
        "Smart contract compiler",
      ],
      correct: 1,
      explanation: "MetaMask is a browser extension Web3 wallet.",
      xp: 5,
    },
    {
      id: "bcm4p1-4",
      question: "contract.call() is used for?",
      options: [
        "Sending transactions",
        "Reading contract state",
        "Deploying contracts",
        "Approving tokens",
      ],
      correct: 1,
      explanation: "call() reads state without spending gas.",
      xp: 5,
    },
    {
      id: "bcm4p1-5",
      question: "Web3 events are emitted when?",
      options: [
        "Contract is deployed",
        "Specific contract actions occur",
        "Block is mined",
        "User connects wallet",
      ],
      correct: 1,
      explanation: "Events fire when contract emits them during execution.",
      xp: 5,
    },
    {
      id: "bcm4p1-6",
      question: "ABI in Web3 stands for?",
      options: [
        "Application Binary Interface",
        "Async Blockchain Interface",
        "Account Balance Index",
        "Address Block Identifier",
      ],
      correct: 0,
      explanation: "ABI defines how to interact with a smart contract.",
      xp: 5,
    },
    {
      id: "bcm4p1-7",
      question: "contract.send() in Web3?",
      options: [
        "Reads data for free",
        "Sends a transaction with gas",
        "Deploys new contract",
        "Listens to events",
      ],
      correct: 1,
      explanation: "send() creates a transaction that costs gas.",
      xp: 5,
    },
    {
      id: "bcm4p1-8",
      question: "To interact with a contract you need?",
      options: [
        "Only contract address",
        "Address and ABI",
        "ABI and private key",
        "Address and RPC URL",
      ],
      correct: 1,
      explanation: "Contract interaction needs address and ABI.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "bcm4p1-pq1",
      title: "Mock Web3 Connect",
      description: "Simulate connecting to a wallet and reading an address.",
      examples: [{ input: "connect()", output: "Connected: 0x1234..." }],
      starterCode:
        'function connect() {\n  const address = "0x1234abcd";\n  console.log("Connected:", address);\n}\nconnect();',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Define a connect function",
        "Store a mock address string",
        "Log the connected address",
      ],
      solutionKeywords: ["function", "address", "console.log"],
      xp: 20,
    },
  ],
};

const BC_M5_P1: PartQuizData = {
  mcqs: [
    {
      id: "bcm5p1-1",
      question: "ERC-721 defines standard for?",
      options: [
        "Fungible tokens",
        "Non-fungible tokens",
        "DeFi protocols",
        "Stablecoins",
      ],
      correct: 1,
      explanation: "ERC-721 is the NFT token standard on Ethereum.",
      xp: 5,
    },
    {
      id: "bcm5p1-2",
      question: "IPFS stores NFT metadata because?",
      options: [
        "It is cheaper",
        "It is decentralized storage",
        "It is faster",
        "It is required by law",
      ],
      correct: 1,
      explanation: "IPFS provides decentralized off-chain metadata storage.",
      xp: 5,
    },
    {
      id: "bcm5p1-3",
      question: "Minting an NFT means?",
      options: [
        "Buying it on OpenSea",
        "Creating it on blockchain",
        "Transferring ownership",
        "Burning old tokens",
      ],
      correct: 1,
      explanation: "Minting creates a new NFT token on the blockchain.",
      xp: 5,
    },
    {
      id: "bcm5p1-4",
      question: "OpenSea is an NFT?",
      options: ["Blockchain network", "Marketplace", "Wallet", "Standard"],
      correct: 1,
      explanation: "OpenSea is the largest NFT trading marketplace.",
      xp: 5,
    },
    {
      id: "bcm5p1-5",
      question: "Gas optimization reduces?",
      options: [
        "Token price",
        "Transaction costs",
        "Block size",
        "Mining time",
      ],
      correct: 1,
      explanation: "Gas optimization lowers the cost of contract execution.",
      xp: 5,
    },
    {
      id: "bcm5p1-6",
      question: "tokenURI in ERC-721 returns?",
      options: ["Token price", "Metadata URL", "Owner address", "Token ID"],
      correct: 1,
      explanation: "tokenURI returns the URL to the NFT metadata JSON.",
      xp: 5,
    },
    {
      id: "bcm5p1-7",
      question: "NFT ownership is verified by?",
      options: [
        "OpenSea database",
        "On-chain ownerOf mapping",
        "IPFS storage",
        "User profile",
      ],
      correct: 1,
      explanation: "ownerOf maps token ID to owner address on-chain.",
      xp: 5,
    },
    {
      id: "bcm5p1-8",
      question: "Packing storage variables saves?",
      options: [
        "Network bandwidth",
        "Gas by reducing storage slots",
        "Deployment time",
        "Mining rewards",
      ],
      correct: 1,
      explanation: "Packing variables into same 32-byte slot reduces gas.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "bcm5p1-pq1",
      title: "NFT Token Tracker",
      description: "Simulate an NFT ownership map using a JavaScript object.",
      examples: [
        { input: 'mint(1, "Alice")', output: "Token 1 owned by Alice" },
      ],
      starterCode:
        'const owners = {};\nfunction mint(id, owner) {\n  owners[id] = owner;\n  console.log("Token", id, "owned by", owner);\n}\nmint(1, "Alice");',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use object as mapping",
        "Store tokenId as key, owner as value",
        "Log ownership on mint",
      ],
      solutionKeywords: ["owners", "mint", "console.log"],
      xp: 20,
    },
  ],
};

// ─── CLOUD ────────────────────────────────────────────────────────────────────
const CL_M1_P1: PartQuizData = {
  mcqs: [
    {
      id: "clm1p1-1",
      question: "IaaS provides?",
      options: [
        "Managed applications",
        "Virtualized infrastructure",
        "Only databases",
        "Only storage",
      ],
      correct: 1,
      explanation:
        "IaaS provides virtualized compute, storage, and networking.",
      xp: 5,
    },
    {
      id: "clm1p1-2",
      question: "PaaS provides developers with?",
      options: [
        "Raw hardware",
        "Platform to deploy apps",
        "Only SaaS apps",
        "Physical servers",
      ],
      correct: 1,
      explanation: "PaaS provides runtime, OS, and middleware for development.",
      xp: 5,
    },
    {
      id: "clm1p1-3",
      question: "SaaS is accessed via?",
      options: [
        "Direct hardware",
        "Web browser or API",
        "SSH terminal",
        "Local installation",
      ],
      correct: 1,
      explanation: "SaaS is delivered as ready-to-use software via internet.",
      xp: 5,
    },
    {
      id: "clm1p1-4",
      question: "Hybrid cloud combines?",
      options: [
        "Two private clouds",
        "Public and private cloud",
        "Multiple SaaS apps",
        "IaaS and PaaS",
      ],
      correct: 1,
      explanation:
        "Hybrid cloud integrates public and private cloud environments.",
      xp: 5,
    },
    {
      id: "clm1p1-5",
      question: "Availability Zones are?",
      options: [
        "Global regions",
        "Isolated data centers in a region",
        "Public IP ranges",
        "CDN edge locations",
      ],
      correct: 1,
      explanation: "AZs are isolated fault domains within a cloud region.",
      xp: 5,
    },
    {
      id: "clm1p1-6",
      question: "Shared responsibility model means?",
      options: [
        "Cloud owns all security",
        "Customer and cloud share security duties",
        "Customer owns all security",
        "No security needed",
      ],
      correct: 1,
      explanation:
        "Shared responsibility splits security between cloud and customer.",
      xp: 5,
    },
    {
      id: "clm1p1-7",
      question: "Public cloud resources are?",
      options: [
        "Owned by one company",
        "Shared across multiple tenants",
        "Always on-premises",
        "Limited to government",
      ],
      correct: 1,
      explanation: "Public cloud is multi-tenant shared infrastructure.",
      xp: 5,
    },
    {
      id: "clm1p1-8",
      question: "Private cloud is hosted?",
      options: [
        "By AWS exclusively",
        "On-premises or dedicated",
        "On public internet",
        "In shared data centers",
      ],
      correct: 1,
      explanation:
        "Private cloud is dedicated infrastructure for one organization.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "clm1p1-pq1",
      title: "Cloud Model Classifier",
      description:
        "Classify a service as IaaS, PaaS, or SaaS based on description.",
      examples: [{ input: "EC2 virtual machine", output: "IaaS" }],
      starterCode:
        'const services = {EC2: "IaaS", "App Engine": "PaaS", Gmail: "SaaS"};\nconsole.log(services["EC2"]);\nconsole.log(services["App Engine"]);',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use an object to map services to types",
        "EC2 is IaaS, App Engine is PaaS",
        "Log each service classification",
      ],
      solutionKeywords: ["const", "services", "console.log"],
      xp: 20,
    },
  ],
};

const CL_M2_P1: PartQuizData = {
  mcqs: [
    {
      id: "clm2p1-1",
      question: "EC2 provides?",
      options: [
        "Serverless functions",
        "Virtual machines",
        "Managed databases",
        "CDN",
      ],
      correct: 1,
      explanation: "EC2 (Elastic Compute Cloud) provides virtual machines.",
      xp: 5,
    },
    {
      id: "clm2p1-2",
      question: "S3 is used for?",
      options: [
        "Running code",
        "Object storage",
        "Virtual networking",
        "Container orchestration",
      ],
      correct: 1,
      explanation: "S3 (Simple Storage Service) stores objects/files.",
      xp: 5,
    },
    {
      id: "clm2p1-3",
      question: "RDS manages which layer for you?",
      options: [
        "Application code",
        "Database engine and patching",
        "Network routing",
        "CDN caching",
      ],
      correct: 1,
      explanation: "RDS manages database engine, backups, and patching.",
      xp: 5,
    },
    {
      id: "clm2p1-4",
      question: "Lambda runs code?",
      options: [
        "On dedicated VMs",
        "Without managing servers",
        "Only during business hours",
        "On containers you manage",
      ],
      correct: 1,
      explanation: "Lambda is serverless — no server management required.",
      xp: 5,
    },
    {
      id: "clm2p1-5",
      question: "IAM roles grant?",
      options: [
        "Network access",
        "Permissions to AWS resources",
        "Database connections",
        "SSH keys",
      ],
      correct: 1,
      explanation: "IAM roles define permissions for AWS service access.",
      xp: 5,
    },
    {
      id: "clm2p1-6",
      question: "S3 ACL controls?",
      options: [
        "Encryption algorithm",
        "Access to buckets and objects",
        "Data replication",
        "Bandwidth limits",
      ],
      correct: 1,
      explanation: "S3 ACLs control read/write access to buckets/objects.",
      xp: 5,
    },
    {
      id: "clm2p1-7",
      question: "IAM policy is written in?",
      options: ["XML", "JSON", "YAML", "HCL"],
      correct: 1,
      explanation: "IAM policies are defined as JSON documents.",
      xp: 5,
    },
    {
      id: "clm2p1-8",
      question: "EC2 instance type T2.micro is?",
      options: [
        "High memory",
        "High CPU",
        "Low cost general purpose",
        "GPU optimized",
      ],
      correct: 2,
      explanation: "T2.micro is a low-cost general purpose instance.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "clm2p1-pq1",
      title: "AWS Service Matcher",
      description: "Match AWS services to their purpose using an object.",
      examples: [{ input: "Lambda", output: "Serverless compute" }],
      starterCode:
        'const aws = {\n  Lambda: "Serverless compute",\n  S3: "Object storage",\n  RDS: "Managed database"\n};\nObject.entries(aws).forEach(([k, v]) => console.log(k, "->", v));',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Create object with service names as keys",
        "Iterate with Object.entries",
        "Log key-value pairs",
      ],
      solutionKeywords: ["const", "Object.entries", "forEach", "console.log"],
      xp: 20,
    },
  ],
};

const CL_M3_P1: PartQuizData = {
  mcqs: [
    {
      id: "clm3p1-1",
      question: "Lambda cold start occurs when?",
      options: [
        "Function fails",
        "New container is initialized",
        "Memory limit exceeded",
        "Timeout reached",
      ],
      correct: 1,
      explanation: "Cold start happens when Lambda spins up a fresh container.",
      xp: 5,
    },
    {
      id: "clm3p1-2",
      question: "API Gateway triggers Lambda via?",
      options: [
        "Scheduled cron",
        "HTTP requests",
        "Database changes",
        "File uploads only",
      ],
      correct: 1,
      explanation: "API Gateway invokes Lambda on incoming HTTP requests.",
      xp: 5,
    },
    {
      id: "clm3p1-3",
      question: "Event-driven architecture reacts to?",
      options: [
        "Scheduled intervals",
        "Events from services",
        "User typing",
        "Network packets",
      ],
      correct: 1,
      explanation: "Event-driven systems respond to events as they occur.",
      xp: 5,
    },
    {
      id: "clm3p1-4",
      question: "Lambda pay-per-use billing counts?",
      options: [
        "Running time per hour",
        "Invocations and duration",
        "Storage used",
        "API calls only",
      ],
      correct: 1,
      explanation: "Lambda bills per invocation count and execution duration.",
      xp: 5,
    },
    {
      id: "clm3p1-5",
      question: "S3 event trigger fires when?",
      options: [
        "Lambda fails",
        "Object is uploaded",
        "IAM role changes",
        "Region switches",
      ],
      correct: 1,
      explanation:
        "S3 events fire on object creation, deletion, or modification.",
      xp: 5,
    },
    {
      id: "clm3p1-6",
      question: "DynamoDB Streams capture?",
      options: [
        "S3 uploads",
        "Table change events",
        "Lambda logs",
        "API requests",
      ],
      correct: 1,
      explanation: "DynamoDB Streams record item-level changes in real time.",
      xp: 5,
    },
    {
      id: "clm3p1-7",
      question: "Serverless reduces operational overhead by?",
      options: [
        "Removing all costs",
        "Eliminating server management",
        "Removing code deployment",
        "Merging all services",
      ],
      correct: 1,
      explanation:
        "Serverless removes server provisioning and management burden.",
      xp: 5,
    },
    {
      id: "clm3p1-8",
      question: "Lambda function timeout default is?",
      options: ["1 second", "3 seconds", "60 seconds", "15 minutes"],
      correct: 1,
      explanation: "Lambda default timeout is 3 seconds, max is 15 minutes.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "clm3p1-pq1",
      title: "Lambda Handler Simulation",
      description:
        "Write a mock Lambda handler that processes an event object.",
      examples: [{ input: '{type: "upload"}', output: "Processed: upload" }],
      starterCode:
        'function handler(event) {\n  console.log("Processed:", event.type);\n  return { status: 200 };\n}\nhandler({ type: "upload" });',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Function takes an event parameter",
        "Access event.type property",
        "Return a response object",
      ],
      solutionKeywords: ["function", "event", "console.log", "return"],
      xp: 20,
    },
  ],
};

const CL_M4_P1: PartQuizData = {
  mcqs: [
    {
      id: "clm4p1-1",
      question: "Terraform uses HCL to?",
      options: [
        "Write Lambda functions",
        "Define infrastructure as code",
        "Monitor cloud metrics",
        "Deploy containers",
      ],
      correct: 1,
      explanation: "Terraform uses HCL to declaratively define infrastructure.",
      xp: 5,
    },
    {
      id: "clm4p1-2",
      question: "Ansible is used for?",
      options: [
        "Blockchain contracts",
        "Configuration management",
        "Container building",
        "DNS routing",
      ],
      correct: 1,
      explanation: "Ansible automates configuration management with playbooks.",
      xp: 5,
    },
    {
      id: "clm4p1-3",
      question: "AWS CodePipeline automates?",
      options: [
        "Database backups",
        "CI/CD deployment stages",
        "Security scanning",
        "Cost reporting",
      ],
      correct: 1,
      explanation: "CodePipeline orchestrates build, test, and deploy stages.",
      xp: 5,
    },
    {
      id: "clm4p1-4",
      question: "CloudWatch is used to?",
      options: [
        "Deploy code",
        "Monitor metrics and alarms",
        "Manage IAM",
        "Store objects",
      ],
      correct: 1,
      explanation: "CloudWatch collects metrics and triggers alarms.",
      xp: 5,
    },
    {
      id: "clm4p1-5",
      question: "IaC benefits include?",
      options: [
        "Manual server setup",
        "Version-controlled infrastructure",
        "Slower deployments",
        "No automation",
      ],
      correct: 1,
      explanation: "IaC allows infrastructure to be versioned and automated.",
      xp: 5,
    },
    {
      id: "clm4p1-6",
      question: "Terraform plan command shows?",
      options: [
        "Applied changes",
        "Proposed infrastructure changes",
        "Current costs",
        "Running services",
      ],
      correct: 1,
      explanation: "terraform plan previews changes before applying them.",
      xp: 5,
    },
    {
      id: "clm4p1-7",
      question: "An Ansible playbook is written in?",
      options: ["JSON", "HCL", "YAML", "XML"],
      correct: 2,
      explanation: "Ansible playbooks are written in YAML format.",
      xp: 5,
    },
    {
      id: "clm4p1-8",
      question: "CloudWatch alarm triggers when metric?",
      options: ["Is updated", "Exceeds threshold", "Is created", "Is deleted"],
      correct: 1,
      explanation:
        "CloudWatch alarms trigger when a metric crosses a threshold.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "clm4p1-pq1",
      title: "Infrastructure State Tracker",
      description: "Simulate Terraform state by tracking created resources.",
      examples: [{ input: "create EC2", output: 'State: {EC2: "running"}' }],
      starterCode:
        'const state = {};\nfunction create(resource) {\n  state[resource] = "running";\n  console.log("State:", JSON.stringify(state));\n}\ncreate("EC2");',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use object as state store",
        "Add resource on create call",
        "Stringify and log the state",
      ],
      solutionKeywords: ["state", "create", "JSON.stringify", "console.log"],
      xp: 20,
    },
  ],
};

const CL_M5_P1: PartQuizData = {
  mcqs: [
    {
      id: "clm5p1-1",
      question: "GCP BigQuery equivalent in AWS is?",
      options: ["DynamoDB", "Redshift", "RDS", "ElastiCache"],
      correct: 1,
      explanation:
        "AWS Redshift is equivalent to GCP BigQuery for data warehousing.",
      xp: 5,
    },
    {
      id: "clm5p1-2",
      question: "Reserved instances reduce cost by?",
      options: [
        "Paying per second",
        "Committing to long-term usage",
        "Using spot pricing",
        "Sharing resources",
      ],
      correct: 1,
      explanation:
        "Reserved instances offer discount for 1-3 year commitments.",
      xp: 5,
    },
    {
      id: "clm5p1-3",
      question: "Spot instances can be?",
      options: [
        "Reserved permanently",
        "Interrupted by cloud provider",
        "Always cheapest",
        "Only for serverless",
      ],
      correct: 1,
      explanation: "Spot instances can be reclaimed when capacity is needed.",
      xp: 5,
    },
    {
      id: "clm5p1-4",
      question: "Multi-region failover ensures?",
      options: [
        "Lower costs",
        "High availability across regions",
        "Faster deployments",
        "Simpler architecture",
      ],
      correct: 1,
      explanation:
        "Multi-region failover keeps app available if one region fails.",
      xp: 5,
    },
    {
      id: "clm5p1-5",
      question: "Cost tagging helps with?",
      options: [
        "Security scanning",
        "Tracking spend by team/project",
        "Scaling instances",
        "Monitoring latency",
      ],
      correct: 1,
      explanation: "Tags enable cost allocation reports by team or project.",
      xp: 5,
    },
    {
      id: "clm5p1-6",
      question: "FinOps focuses on?",
      options: [
        "Network security",
        "Cloud financial management",
        "Deployment pipelines",
        "Container orchestration",
      ],
      correct: 1,
      explanation: "FinOps aligns cloud spending with business value.",
      xp: 5,
    },
    {
      id: "clm5p1-7",
      question: "GCP Compute Engine is equivalent to?",
      options: ["S3", "Lambda", "EC2", "RDS"],
      correct: 2,
      explanation: "GCP Compute Engine is equivalent to AWS EC2.",
      xp: 5,
    },
    {
      id: "clm5p1-8",
      question: "Cloud region selection affects?",
      options: [
        "Code quality",
        "Latency and compliance",
        "Language support",
        "IDE choice",
      ],
      correct: 1,
      explanation: "Region affects latency, compliance, and data residency.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "clm5p1-pq1",
      title: "Cost Tag Calculator",
      description: "Calculate total cost per team from tagged resource costs.",
      examples: [{ input: '{team: "A", cost: 100}', output: "Team A: $100" }],
      starterCode:
        'const resources = [{team: "A", cost: 100}, {team: "B", cost: 200}, {team: "A", cost: 50}];\nconst totals = {};\nresources.forEach(r => { totals[r.team] = (totals[r.team] || 0) + r.cost; });\nObject.entries(totals).forEach(([t, c]) => console.log("Team", t + ":", "$" + c));',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Iterate through resources array",
        "Accumulate cost by team key",
        "Log team totals",
      ],
      solutionKeywords: ["forEach", "totals", "console.log"],
      xp: 20,
    },
  ],
};

// ─── AI/ML ENGINEER ───────────────────────────────────────────────────────────
const AI_M1_P1: PartQuizData = {
  mcqs: [
    {
      id: "aim1p1-1",
      question: "Deep Learning is a subset of?",
      options: ["Data Science", "Machine Learning", "Statistics", "Databases"],
      correct: 1,
      explanation:
        "Deep Learning is a subset of Machine Learning using neural nets.",
      xp: 5,
    },
    {
      id: "aim1p1-2",
      question: "A reactive AI agent?",
      options: [
        "Plans ahead",
        "Responds to current state only",
        "Learns from data",
        "Uses memory",
      ],
      correct: 1,
      explanation:
        "Reactive agents respond to current environment without memory.",
      xp: 5,
    },
    {
      id: "aim1p1-3",
      question: "BFS explores nodes?",
      options: ["Deepest first", "Level by level", "Randomly", "By cost"],
      correct: 1,
      explanation:
        "BFS explores all nodes at current depth before going deeper.",
      xp: 5,
    },
    {
      id: "aim1p1-4",
      question: "A* search uses which heuristic?",
      options: [
        "None",
        "Estimated cost to goal",
        "Random selection",
        "Depth counter",
      ],
      correct: 1,
      explanation: "A* uses f(n) = g(n) + h(n) with heuristic estimate.",
      xp: 5,
    },
    {
      id: "aim1p1-5",
      question: "Deductive reasoning moves from?",
      options: [
        "Specific to general",
        "General to specific",
        "Data to patterns",
        "Images to labels",
      ],
      correct: 1,
      explanation: "Deductive reasoning derives specifics from general rules.",
      xp: 5,
    },
    {
      id: "aim1p1-6",
      question: "Machine Learning learns from?",
      options: [
        "Hard-coded rules",
        "Data patterns",
        "Human instructions only",
        "Network traffic",
      ],
      correct: 1,
      explanation: "ML algorithms learn patterns from training data.",
      xp: 5,
    },
    {
      id: "aim1p1-7",
      question: "A deliberative AI agent plans using?",
      options: [
        "Current stimulus only",
        "Internal world model",
        "Random search",
        "Fixed rules",
      ],
      correct: 1,
      explanation: "Deliberative agents use internal models for planning.",
      xp: 5,
    },
    {
      id: "aim1p1-8",
      question: "Artificial Intelligence broadly means?",
      options: [
        "Robots only",
        "Simulating human intelligence",
        "Only machine learning",
        "Database optimization",
      ],
      correct: 1,
      explanation: "AI is the simulation of human intelligence in machines.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "aim1p1-pq1",
      title: "BFS Simulation",
      description: "Implement BFS on a simple graph using a queue.",
      examples: [{ input: "start: A", output: "Visited: A B C D" }],
      starterCode:
        'const graph = {A: ["B", "C"], B: ["D"], C: [], D: []};\nconst queue = ["A"], visited = [];\nwhile (queue.length) {\n  const node = queue.shift();\n  if (!visited.includes(node)) { visited.push(node); queue.push(...graph[node]); }\n}\nconsole.log("Visited:", visited.join(" "));',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use array as queue with shift()",
        "Track visited nodes in array",
        "Push neighbors to queue",
      ],
      solutionKeywords: ["queue", "visited", "shift", "push"],
      xp: 20,
    },
  ],
};

const AI_M2_P1: PartQuizData = {
  mcqs: [
    {
      id: "aim2p1-1",
      question: "Feature engineering involves?",
      options: [
        "Writing SQL queries",
        "Creating useful input variables",
        "Deploying models",
        "Building APIs",
      ],
      correct: 1,
      explanation:
        "Feature engineering creates informative variables for ML models.",
      xp: 5,
    },
    {
      id: "aim2p1-2",
      question: "Cross-validation estimates?",
      options: [
        "Training speed",
        "Model generalization performance",
        "Dataset size",
        "Feature count",
      ],
      correct: 1,
      explanation: "Cross-validation measures how well a model generalizes.",
      xp: 5,
    },
    {
      id: "aim2p1-3",
      question: "Hyperparameter tuning optimizes?",
      options: [
        "Training data",
        "Model configuration settings",
        "Feature names",
        "Data collection",
      ],
      correct: 1,
      explanation: "Hyperparameter tuning finds optimal model settings.",
      xp: 5,
    },
    {
      id: "aim2p1-4",
      question: "Reproducibility in ML requires?",
      options: [
        "More data",
        "Fixed random seeds",
        "Faster hardware",
        "Larger models",
      ],
      correct: 1,
      explanation:
        "Setting random seeds ensures experiments can be reproduced.",
      xp: 5,
    },
    {
      id: "aim2p1-5",
      question: "Data normalization scales features to?",
      options: [
        "Original range",
        "Common scale",
        "Integer values",
        "Binary values",
      ],
      correct: 1,
      explanation: "Normalization scales features to a consistent range.",
      xp: 5,
    },
    {
      id: "aim2p1-6",
      question: "Train/test split prevents?",
      options: [
        "Underfitting",
        "Overfitting on test data",
        "Data leakage",
        "Feature selection",
      ],
      correct: 1,
      explanation: "Separate test set prevents evaluating on training data.",
      xp: 5,
    },
    {
      id: "aim2p1-7",
      question: "Missing data handling includes?",
      options: [
        "Deleting only",
        "Imputation or removal",
        "Ignoring values",
        "Doubling samples",
      ],
      correct: 1,
      explanation: "Missing values can be imputed or rows dropped.",
      xp: 5,
    },
    {
      id: "aim2p1-8",
      question: "A data pipeline automates?",
      options: [
        "Model training only",
        "Collection to preprocessing flow",
        "Report generation",
        "UI rendering",
      ],
      correct: 1,
      explanation:
        "Data pipelines automate the flow from collection to features.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "aim2p1-pq1",
      title: "Feature Normalizer",
      description: "Normalize an array of values to 0-1 range using min-max.",
      examples: [{ input: "[0, 5, 10]", output: "[0, 0.5, 1]" }],
      starterCode:
        "const data = [0, 5, 10];\nconst min = Math.min(...data);\nconst max = Math.max(...data);\nconst normalized = data.map(v => (v - min) / (max - min));\nconsole.log(normalized);",
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Find min and max of array",
        "Apply (v - min) / (max - min)",
        "Use map to transform each value",
      ],
      solutionKeywords: ["Math.min", "Math.max", "map", "normalized"],
      xp: 20,
    },
  ],
};

const AI_M3_P1: PartQuizData = {
  mcqs: [
    {
      id: "aim3p1-1",
      question: "Attention mechanism in transformers?",
      options: [
        "Ignores context",
        "Weighs word relationships",
        "Compresses data",
        "Adds noise",
      ],
      correct: 1,
      explanation: "Attention weighs how much each word relates to others.",
      xp: 5,
    },
    {
      id: "aim3p1-2",
      question: "BERT is trained with?",
      options: [
        "Next token prediction",
        "Masked language modeling",
        "Image classification",
        "Reinforcement learning",
      ],
      correct: 1,
      explanation: "BERT uses masked language modeling for pretraining.",
      xp: 5,
    },
    {
      id: "aim3p1-3",
      question: "GPT generates text?",
      options: [
        "Bidirectionally",
        "Autoregressively left-to-right",
        "By filling masks",
        "From images",
      ],
      correct: 1,
      explanation: "GPT generates tokens left to right autoregressively.",
      xp: 5,
    },
    {
      id: "aim3p1-4",
      question: "BPE tokenization splits text into?",
      options: ["Words only", "Characters only", "Sub-word units", "Sentences"],
      correct: 2,
      explanation: "BPE (Byte Pair Encoding) creates sub-word tokens.",
      xp: 5,
    },
    {
      id: "aim3p1-5",
      question: "RAG pattern retrieves?",
      options: [
        "Random samples",
        "Relevant docs before generating",
        "Training data",
        "Model weights",
      ],
      correct: 1,
      explanation:
        "RAG retrieves relevant context before LLM generates response.",
      xp: 5,
    },
    {
      id: "aim3p1-6",
      question: "A transformer encoder processes?",
      options: [
        "Left to right only",
        "All tokens simultaneously",
        "Token by token",
        "Images only",
      ],
      correct: 1,
      explanation:
        "Encoder processes all tokens in parallel with self-attention.",
      xp: 5,
    },
    {
      id: "aim3p1-7",
      question: "Fine-tuning adapts a model by?",
      options: [
        "Training from scratch",
        "Continuing training on task data",
        "Adding more layers",
        "Changing tokenizer",
      ],
      correct: 1,
      explanation: "Fine-tuning continues training on domain-specific data.",
      xp: 5,
    },
    {
      id: "aim3p1-8",
      question: "Embeddings represent words as?",
      options: [
        "One-hot arrays",
        "Dense numeric vectors",
        "Frequency counts",
        "Binary codes",
      ],
      correct: 1,
      explanation: "Word embeddings are dense vector representations.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "aim3p1-pq1",
      title: "Simple Token Counter",
      description: "Count word frequency as a basic tokenization step.",
      examples: [
        { input: '"the cat sat"', output: "{the: 1, cat: 1, sat: 1}" },
      ],
      starterCode:
        'const text = "the cat sat on the mat";\nconst tokens = text.split(" ");\nconst freq = {};\ntokens.forEach(t => { freq[t] = (freq[t] || 0) + 1; });\nconsole.log(freq);',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Split text by spaces",
        "Count each word in object",
        "Log the frequency object",
      ],
      solutionKeywords: ["split", "forEach", "freq", "console.log"],
      xp: 20,
    },
  ],
};

const AI_M4_P1: PartQuizData = {
  mcqs: [
    {
      id: "aim4p1-1",
      question: "MLflow tracks?",
      options: [
        "Network traffic",
        "ML experiments and metrics",
        "Database queries",
        "UI events",
      ],
      correct: 1,
      explanation: "MLflow tracks parameters, metrics, and model artifacts.",
      xp: 5,
    },
    {
      id: "aim4p1-2",
      question: "Model registry stores?",
      options: [
        "Training data",
        "Versioned model artifacts",
        "Feature definitions",
        "User data",
      ],
      correct: 1,
      explanation: "Model registry manages versioned model artifacts.",
      xp: 5,
    },
    {
      id: "aim4p1-3",
      question: "A/B testing in ML compares?",
      options: [
        "Two datasets",
        "Two model versions in production",
        "Two feature sets",
        "Two teams",
      ],
      correct: 1,
      explanation: "A/B testing routes traffic to compare model versions.",
      xp: 5,
    },
    {
      id: "aim4p1-4",
      question: "Data drift occurs when?",
      options: [
        "Model improves",
        "Input data distribution changes",
        "Labels are updated",
        "Hardware upgrades",
      ],
      correct: 1,
      explanation:
        "Data drift is a change in input data distribution over time.",
      xp: 5,
    },
    {
      id: "aim4p1-5",
      question: "Retraining triggers include?",
      options: [
        "New IDE version",
        "Performance degradation detection",
        "Network upgrade",
        "UI change",
      ],
      correct: 1,
      explanation:
        "Models are retrained when performance drops below threshold.",
      xp: 5,
    },
    {
      id: "aim4p1-6",
      question: "MLOps combines?",
      options: [
        "ML and DevOps",
        "ML and databases",
        "ML and UI design",
        "ML and networking",
      ],
      correct: 0,
      explanation:
        "MLOps applies DevOps practices to machine learning workflows.",
      xp: 5,
    },
    {
      id: "aim4p1-7",
      question: "Model versioning helps with?",
      options: [
        "Training speed",
        "Rollback and comparison",
        "Data collection",
        "Cost reduction",
      ],
      correct: 1,
      explanation: "Versioning enables rollback and A/B comparison.",
      xp: 5,
    },
    {
      id: "aim4p1-8",
      question: "A feature store provides?",
      options: [
        "Model weights",
        "Reusable pre-computed features",
        "Training labels",
        "Deployment configs",
      ],
      correct: 1,
      explanation: "Feature stores centralize reusable feature definitions.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "aim4p1-pq1",
      title: "Experiment Logger",
      description: "Simulate MLflow by logging experiment params and metrics.",
      examples: [
        { input: "log(lr=0.01, acc=0.95)", output: "{lr: 0.01, acc: 0.95}" },
      ],
      starterCode:
        'const experiments = [];\nfunction log(params) {\n  experiments.push(params);\n  console.log("Logged:", JSON.stringify(params));\n}\nlog({ lr: 0.01, acc: 0.95 });',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Store experiments in array",
        "Push params object to array",
        "Log each experiment entry",
      ],
      solutionKeywords: ["experiments", "push", "log", "JSON.stringify"],
      xp: 20,
    },
  ],
};

const AI_M5_P1: PartQuizData = {
  mcqs: [
    {
      id: "aim5p1-1",
      question: "Model quantization reduces?",
      options: [
        "Accuracy",
        "Model size and latency",
        "Training time",
        "Data needs",
      ],
      correct: 1,
      explanation: "Quantization reduces model size by lowering precision.",
      xp: 5,
    },
    {
      id: "aim5p1-2",
      question: "Response caching reduces?",
      options: [
        "Model accuracy",
        "Repeated inference latency",
        "Training cost",
        "Feature count",
      ],
      correct: 1,
      explanation:
        "Caching stores responses to avoid recomputing same queries.",
      xp: 5,
    },
    {
      id: "aim5p1-3",
      question: "Safety filters in LLMs block?",
      options: [
        "Low confidence outputs",
        "Harmful or inappropriate content",
        "Slow responses",
        "Large inputs",
      ],
      correct: 1,
      explanation: "Safety filters detect and block harmful model outputs.",
      xp: 5,
    },
    {
      id: "aim5p1-4",
      question: "Model monitoring dashboards track?",
      options: [
        "Source code changes",
        "Prediction quality over time",
        "UI interactions",
        "Network speed",
      ],
      correct: 1,
      explanation: "Monitoring dashboards track model performance metrics.",
      xp: 5,
    },
    {
      id: "aim5p1-5",
      question: "SLA for ML systems defines?",
      options: [
        "Training budget",
        "Response time and availability",
        "Dataset size",
        "Feature count",
      ],
      correct: 1,
      explanation: "SLA defines acceptable latency and uptime for ML services.",
      xp: 5,
    },
    {
      id: "aim5p1-6",
      question: "Pruning a neural network removes?",
      options: [
        "Training data",
        "Unimportant weights",
        "Input features",
        "Output labels",
      ],
      correct: 1,
      explanation:
        "Pruning removes low-importance weights to compress the model.",
      xp: 5,
    },
    {
      id: "aim5p1-7",
      question: "Load balancing ML endpoints distributes?",
      options: [
        "Training jobs",
        "Inference traffic across replicas",
        "Data preprocessing",
        "Feature engineering",
      ],
      correct: 1,
      explanation:
        "Load balancing distributes prediction requests across replicas.",
      xp: 5,
    },
    {
      id: "aim5p1-8",
      question: "Latency in ML serving is measured as?",
      options: [
        "Training time per epoch",
        "Time to return prediction",
        "Data processing rate",
        "Model accuracy",
      ],
      correct: 1,
      explanation: "Serving latency is the time from request to response.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "aim5p1-pq1",
      title: "Response Cache",
      description: "Implement a simple cache to avoid repeated computations.",
      examples: [{ input: 'query: "hello"', output: "Cache hit: hi there" }],
      starterCode:
        'const cache = {};\nfunction respond(query) {\n  if (cache[query]) { console.log("Cache hit:", cache[query]); return; }\n  const result = "hi there";\n  cache[query] = result;\n  console.log("Computed:", result);\n}\nrespond("hello"); respond("hello");',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use object as cache store",
        "Check cache before computing",
        "Store result after first computation",
      ],
      solutionKeywords: ["cache", "if", "console.log"],
      xp: 20,
    },
  ],
};

// ─── GAME DEV ─────────────────────────────────────────────────────────────────
const GD_M1_P1: PartQuizData = {
  mcqs: [
    {
      id: "gdm1p1-1",
      question: "The game loop runs?",
      options: [
        "Once at start",
        "Every frame continuously",
        "Only on input",
        "Once per second",
      ],
      correct: 1,
      explanation:
        "Game loop runs every frame to update and render game state.",
      xp: 5,
    },
    {
      id: "gdm1p1-2",
      question: "FixedUpdate in Unity is used for?",
      options: [
        "Rendering",
        "Physics calculations",
        "UI updates",
        "Input handling",
      ],
      correct: 1,
      explanation:
        "FixedUpdate runs at fixed intervals for consistent physics.",
      xp: 5,
    },
    {
      id: "gdm1p1-3",
      question: "A GameObject in Unity is?",
      options: [
        "A script",
        "A base entity in scenes",
        "A texture",
        "A physics material",
      ],
      correct: 1,
      explanation: "GameObject is the base entity that holds components.",
      xp: 5,
    },
    {
      id: "gdm1p1-4",
      question: "Transform component controls?",
      options: [
        "Color and texture",
        "Position, rotation, scale",
        "Physics mass",
        "Audio clips",
      ],
      correct: 1,
      explanation:
        "Transform holds position, rotation, and scale of a GameObject.",
      xp: 5,
    },
    {
      id: "gdm1p1-5",
      question: "Scene management in Unity handles?",
      options: [
        "Shader compilation",
        "Loading/unloading levels",
        "Asset imports",
        "Network connections",
      ],
      correct: 1,
      explanation:
        "Scene management loads and transitions between game levels.",
      xp: 5,
    },
    {
      id: "gdm1p1-6",
      question: "Update() in Unity is called?",
      options: [
        "Once at start",
        "Every frame",
        "Every physics step",
        "On collision",
      ],
      correct: 1,
      explanation: "Update is called once per frame by the Unity engine.",
      xp: 5,
    },
    {
      id: "gdm1p1-7",
      question: "Components in Unity define?",
      options: [
        "Scene hierarchy",
        "Behavior and data of GameObjects",
        "Asset file format",
        "Build settings",
      ],
      correct: 1,
      explanation: "Components add specific behaviors or data to GameObjects.",
      xp: 5,
    },
    {
      id: "gdm1p1-8",
      question: "Start() in Unity is called?",
      options: [
        "Every frame",
        "Once before first Update",
        "On collision",
        "At app launch",
      ],
      correct: 1,
      explanation:
        "Start() initializes the script before the first frame update.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "gdm1p1-pq1",
      title: "Game Loop Simulator",
      description: "Simulate a basic game loop that runs for 5 frames.",
      examples: [
        {
          input: "run 5 frames",
          output: "Frame 1\nFrame 2\nFrame 3\nFrame 4\nFrame 5",
        },
      ],
      starterCode:
        'let frame = 0;\nconst maxFrames = 5;\nwhile (frame < maxFrames) {\n  frame++;\n  console.log("Frame", frame);\n}',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use a while loop for the game loop",
        "Increment frame counter each iteration",
        "Log current frame number",
      ],
      solutionKeywords: ["while", "frame", "console.log"],
      xp: 20,
    },
  ],
};

const GD_M2_P1: PartQuizData = {
  mcqs: [
    {
      id: "gdm2p1-1",
      question: "Sprite renderer displays?",
      options: [
        "3D meshes",
        "2D images on GameObjects",
        "Physics shapes",
        "Audio sources",
      ],
      correct: 1,
      explanation: "Sprite Renderer draws 2D sprites on GameObjects.",
      xp: 5,
    },
    {
      id: "gdm2p1-2",
      question: "A Tilemap organizes?",
      options: [
        "Audio clips",
        "2D tiles in a grid",
        "3D terrain",
        "Particle effects",
      ],
      correct: 1,
      explanation: "Tilemap creates 2D grid-based levels from tile assets.",
      xp: 5,
    },
    {
      id: "gdm2p1-3",
      question: "Rigidbody2D adds?",
      options: [
        "Sprite drawing",
        "Physics simulation to object",
        "Animation control",
        "Input handling",
      ],
      correct: 1,
      explanation: "Rigidbody2D enables physics simulation on 2D objects.",
      xp: 5,
    },
    {
      id: "gdm2p1-4",
      question: "Collider2D defines?",
      options: [
        "Visual shape",
        "Physics collision boundary",
        "Animation trigger",
        "Sound trigger",
      ],
      correct: 1,
      explanation: "Collider2D defines the shape used for physics collisions.",
      xp: 5,
    },
    {
      id: "gdm2p1-5",
      question: "Animator transitions between?",
      options: ["Scenes", "Animation states", "Sound clips", "Prefabs"],
      correct: 1,
      explanation: "Animator manages transitions between animation states.",
      xp: 5,
    },
    {
      id: "gdm2p1-6",
      question: "Cinemachine in Unity improves?",
      options: [
        "Physics simulation",
        "2D and 3D camera behavior",
        "UI layout",
        "Audio mixing",
      ],
      correct: 1,
      explanation:
        "Cinemachine provides advanced camera controls and tracking.",
      xp: 5,
    },
    {
      id: "gdm2p1-7",
      question: "A Tileset contains?",
      options: [
        "3D models",
        "Collection of tile sprites",
        "Character animations",
        "Physics materials",
      ],
      correct: 1,
      explanation:
        "Tileset is a collection of tile images for building levels.",
      xp: 5,
    },
    {
      id: "gdm2p1-8",
      question: "IsTrigger on Collider2D makes?",
      options: [
        "Physics bounce",
        "Collision without physics response",
        "Invisible object",
        "Particle emit",
      ],
      correct: 1,
      explanation: "IsTrigger detects overlap without blocking movement.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "gdm2p1-pq1",
      title: "2D Position Updater",
      description: "Simulate a 2D sprite moving right each frame.",
      examples: [{ input: "start x=0", output: "x: 1\nx: 2\nx: 3" }],
      starterCode:
        'let x = 0;\nconst speed = 1;\nfor (let i = 0; i < 3; i++) {\n  x += speed;\n  console.log("x:", x);\n}',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use a loop to simulate frames",
        "Add speed to position each frame",
        "Log position after update",
      ],
      solutionKeywords: ["x", "speed", "console.log"],
      xp: 20,
    },
  ],
};

const GD_M3_P1: PartQuizData = {
  mcqs: [
    {
      id: "gdm3p1-1",
      question: "A mesh in 3D graphics is made of?",
      options: ["Pixels", "Vertices and triangles", "Sprites", "Tiles"],
      correct: 1,
      explanation:
        "Meshes are 3D shapes defined by vertices and triangle faces.",
      xp: 5,
    },
    {
      id: "gdm3p1-2",
      question: "A material controls?",
      options: [
        "Physics behavior",
        "Visual appearance of surface",
        "Animation speed",
        "Collision shape",
      ],
      correct: 1,
      explanation: "Material defines color, texture, and shader of a surface.",
      xp: 5,
    },
    {
      id: "gdm3p1-3",
      question: "Directional light simulates?",
      options: [
        "Point source",
        "Sunlight from infinite distance",
        "Spotlight cone",
        "Ambient only",
      ],
      correct: 1,
      explanation: "Directional light simulates the sun with parallel rays.",
      xp: 5,
    },
    {
      id: "gdm3p1-4",
      question: "Camera frustum defines?",
      options: [
        "Render texture",
        "Visible volume of the scene",
        "Light direction",
        "Physics layer",
      ],
      correct: 1,
      explanation:
        "Frustum is the pyramid-shaped visible region of the camera.",
      xp: 5,
    },
    {
      id: "gdm3p1-5",
      question: "A shader program runs on?",
      options: ["CPU", "GPU", "RAM", "Disk"],
      correct: 1,
      explanation: "Shaders are programs executed on the GPU for rendering.",
      xp: 5,
    },
    {
      id: "gdm3p1-6",
      question: "Ray casting in 3D checks?",
      options: [
        "Pixel color",
        "Line intersection with objects",
        "Animation frames",
        "Audio distance",
      ],
      correct: 1,
      explanation: "Ray casting tests if a ray intersects with scene objects.",
      xp: 5,
    },
    {
      id: "gdm3p1-7",
      question: "Texture mapping applies?",
      options: [
        "Lighting info",
        "2D image onto 3D surface",
        "Physics force",
        "Animation rig",
      ],
      correct: 1,
      explanation: "Textures map 2D images onto 3D mesh surfaces.",
      xp: 5,
    },
    {
      id: "gdm3p1-8",
      question: "Point light emits light?",
      options: [
        "In one direction",
        "Equally in all directions",
        "In a cone shape",
        "Along a line",
      ],
      correct: 1,
      explanation:
        "Point light radiates equally in all directions from a point.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "gdm3p1-pq1",
      title: "3D Vector Calculator",
      description: "Calculate the distance between two 3D points.",
      examples: [{ input: "A(0,0,0) B(1,1,1)", output: "Distance: 1.73" }],
      starterCode:
        'const A = {x: 0, y: 0, z: 0};\nconst B = {x: 1, y: 1, z: 1};\nconst dist = Math.sqrt((B.x-A.x)**2 + (B.y-A.y)**2 + (B.z-A.z)**2);\nconsole.log("Distance:", dist.toFixed(2));',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use 3D distance formula",
        "Square differences for each axis",
        "Take square root of sum",
      ],
      solutionKeywords: ["Math.sqrt", "dist", "toFixed", "console.log"],
      xp: 20,
    },
  ],
};

const GD_M4_P1: PartQuizData = {
  mcqs: [
    {
      id: "gdm4p1-1",
      question: "Rigidbody constraints limit?",
      options: [
        "Visual quality",
        "Movement or rotation axes",
        "Texture resolution",
        "Audio range",
      ],
      correct: 1,
      explanation: "Constraints lock specific axes of movement or rotation.",
      xp: 5,
    },
    {
      id: "gdm4p1-2",
      question: "NavMesh baking creates?",
      options: [
        "Texture atlas",
        "Walkable area map for pathfinding",
        "3D physics mesh",
        "Animation rig",
      ],
      correct: 1,
      explanation:
        "NavMesh baking generates the walkable surface for navigation.",
      xp: 5,
    },
    {
      id: "gdm4p1-3",
      question: "A* pathfinding finds?",
      options: [
        "Shortest visual path",
        "Optimal path with heuristic",
        "Random valid path",
        "Deepest route",
      ],
      correct: 1,
      explanation: "A* finds optimal path using cost + heuristic estimate.",
      xp: 5,
    },
    {
      id: "gdm4p1-4",
      question: "An enemy state machine uses?",
      options: [
        "Random movement",
        "States like patrol/chase/attack",
        "Constant sprinting",
        "Player input",
      ],
      correct: 1,
      explanation: "State machines manage enemy behaviors as distinct states.",
      xp: 5,
    },
    {
      id: "gdm4p1-5",
      question: "Detection radius triggers when?",
      options: [
        "Health drops",
        "Player enters range",
        "Level loads",
        "Frame rate drops",
      ],
      correct: 1,
      explanation: "Detection radius activates enemy when player is in range.",
      xp: 5,
    },
    {
      id: "gdm4p1-6",
      question: "Navmesh agent in Unity handles?",
      options: [
        "Sprite animation",
        "Automatic navigation along NavMesh",
        "Input detection",
        "Shader rendering",
      ],
      correct: 1,
      explanation: "NavMesh Agent moves characters along baked NavMesh paths.",
      xp: 5,
    },
    {
      id: "gdm4p1-7",
      question: "State transitions in FSM occur when?",
      options: [
        "Frame renders",
        "Conditions are met",
        "Audio plays",
        "Scene loads",
      ],
      correct: 1,
      explanation:
        "FSM transitions between states when conditions are satisfied.",
      xp: 5,
    },
    {
      id: "gdm4p1-8",
      question: "Physics layers in Unity separate?",
      options: [
        "Visual rendering order",
        "Collision groups",
        "Audio channels",
        "Animation tracks",
      ],
      correct: 1,
      explanation:
        "Physics layers define which objects collide with each other.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "gdm4p1-pq1",
      title: "Enemy State Machine",
      description: "Simulate a simple enemy FSM with patrol and chase states.",
      examples: [{ input: "playerNear: true", output: "State: chase" }],
      starterCode:
        'let state = "patrol";\nconst playerNear = true;\nif (playerNear) state = "chase";\nconsole.log("State:", state);',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Start in patrol state",
        "Check if player is within range",
        "Transition to chase state if true",
      ],
      solutionKeywords: ["state", "if", "console.log"],
      xp: 20,
    },
  ],
};

const GD_M5_P1: PartQuizData = {
  mcqs: [
    {
      id: "gdm5p1-1",
      question: "IL2CPP in Unity build outputs?",
      options: [
        "JavaScript code",
        "C++ compiled native code",
        "WebAssembly",
        "Python scripts",
      ],
      correct: 1,
      explanation: "IL2CPP converts C# IL to C++ for native compilation.",
      xp: 5,
    },
    {
      id: "gdm5p1-2",
      question: "Mono build in Unity uses?",
      options: [
        "C++ compilation",
        "C# interpreter at runtime",
        "JavaScript engine",
        "Bytecode recompilation",
      ],
      correct: 1,
      explanation:
        "Mono uses a C# interpreter, faster to build but slower runtime.",
      xp: 5,
    },
    {
      id: "gdm5p1-3",
      question: "In-app purchases allow players to?",
      options: [
        "Cheat in game",
        "Buy items with real money",
        "Save game progress",
        "Change game settings",
      ],
      correct: 1,
      explanation:
        "IAP lets players purchase virtual items with real currency.",
      xp: 5,
    },
    {
      id: "gdm5p1-4",
      question: "Steam Greenlight was a process for?",
      options: [
        "Patching games",
        "Community voting on game releases",
        "Anti-cheat systems",
        "Matchmaking",
      ],
      correct: 1,
      explanation: "Steam Greenlight let the community vote on game releases.",
      xp: 5,
    },
    {
      id: "gdm5p1-5",
      question: "Game analytics SDKs track?",
      options: [
        "Frame rate only",
        "Player behavior and engagement",
        "Asset file sizes",
        "Shader performance",
      ],
      correct: 1,
      explanation:
        "Analytics SDKs track player sessions, events, and retention.",
      xp: 5,
    },
    {
      id: "gdm5p1-6",
      question: "Build settings in Unity control?",
      options: [
        "Shader quality",
        "Target platform and included scenes",
        "Physics gravity",
        "Audio compression",
      ],
      correct: 1,
      explanation:
        "Build settings define target platform and which scenes to include.",
      xp: 5,
    },
    {
      id: "gdm5p1-7",
      question: "Player retention measures?",
      options: [
        "Frame rate",
        "How long players keep returning",
        "Asset loading time",
        "Server uptime",
      ],
      correct: 1,
      explanation: "Retention tracks day-1, day-7, day-30 return rates.",
      xp: 5,
    },
    {
      id: "gdm5p1-8",
      question: "WebGL build targets?",
      options: [
        "Mobile apps",
        "Browser-based game deployment",
        "Console platforms",
        "Desktop only",
      ],
      correct: 1,
      explanation: "WebGL builds deploy Unity games to web browsers.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "gdm5p1-pq1",
      title: "Analytics Event Logger",
      description: "Log game analytics events with player ID and event name.",
      examples: [
        {
          input: "player1, level_complete",
          output: '{player: "player1", event: "level_complete"}',
        },
      ],
      starterCode:
        'const events = [];\nfunction track(player, event) {\n  const entry = { player, event };\n  events.push(entry);\n  console.log(JSON.stringify(entry));\n}\ntrack("player1", "level_complete");',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Create entry object from params",
        "Push to events array",
        "Log the JSON entry",
      ],
      solutionKeywords: ["track", "events", "push", "JSON.stringify"],
      xp: 20,
    },
  ],
};

// ─── UI/UX DESIGN ─────────────────────────────────────────────────────────────
const UX_M1_P1: PartQuizData = {
  mcqs: [
    {
      id: "uxm1p1-1",
      question: "Hue in color theory refers to?",
      options: [
        "Brightness",
        "Color name like red/blue",
        "Transparency",
        "Contrast ratio",
      ],
      correct: 1,
      explanation: "Hue is the pure color (red, green, blue, etc.).",
      xp: 5,
    },
    {
      id: "uxm1p1-2",
      question: "Saturation controls?",
      options: [
        "Color brightness",
        "Color intensity/purity",
        "Font weight",
        "Border radius",
      ],
      correct: 1,
      explanation: "Saturation determines how vivid or muted a color appears.",
      xp: 5,
    },
    {
      id: "uxm1p1-3",
      question: "WCAG contrast ratio for text is?",
      options: ["2:1 minimum", "4.5:1 minimum", "7:1 minimum", "1:1 minimum"],
      correct: 1,
      explanation:
        "WCAG requires 4.5:1 contrast for normal text accessibility.",
      xp: 5,
    },
    {
      id: "uxm1p1-4",
      question: "Leading in typography is?",
      options: [
        "Letter spacing",
        "Line spacing between rows",
        "Font weight",
        "Character width",
      ],
      correct: 1,
      explanation: "Leading is the vertical space between lines of text.",
      xp: 5,
    },
    {
      id: "uxm1p1-5",
      question: "Gestalt principle of proximity means?",
      options: [
        "Similar items look same",
        "Close items appear grouped",
        "Items in line are related",
        "Enclosed items are one unit",
      ],
      correct: 1,
      explanation: "Proximity: objects near each other appear to be a group.",
      xp: 5,
    },
    {
      id: "uxm1p1-6",
      question: "Visual hierarchy guides users?",
      options: [
        "Through code logic",
        "To important content first",
        "Through animations",
        "By color only",
      ],
      correct: 1,
      explanation:
        "Visual hierarchy directs attention to priority content first.",
      xp: 5,
    },
    {
      id: "uxm1p1-7",
      question: "Tracking in typography affects?",
      options: [
        "Line height",
        "Overall letter spacing in text",
        "Paragraph margins",
        "Font size",
      ],
      correct: 1,
      explanation: "Tracking adjusts the uniform spacing between all letters.",
      xp: 5,
    },
    {
      id: "uxm1p1-8",
      question: "The Gestalt principle of similarity groups?",
      options: [
        "Nearby items",
        "Items sharing visual properties",
        "Enclosed items",
        "Aligned items",
      ],
      correct: 1,
      explanation: "Similarity groups items that share color, shape, or size.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "uxm1p1-pq1",
      title: "Contrast Checker",
      description:
        "Calculate if contrast ratio meets the 4.5:1 WCAG AA standard.",
      examples: [{ input: "ratio: 5.2", output: "Passes WCAG AA" }],
      starterCode:
        'const ratio = 5.2;\nif (ratio >= 4.5) {\n  console.log("Passes WCAG AA");\n} else {\n  console.log("Fails WCAG AA");\n}',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Compare ratio against 4.5 threshold",
        "Use if/else for pass or fail",
        "Log the result message",
      ],
      solutionKeywords: ["ratio", "if", "console.log"],
      xp: 20,
    },
  ],
};

const UX_M2_P1: PartQuizData = {
  mcqs: [
    {
      id: "uxm2p1-1",
      question: "A user persona represents?",
      options: [
        "Real user account",
        "Fictional target user archetype",
        "Developer profile",
        "Admin user",
      ],
      correct: 1,
      explanation: "Personas are fictional characters representing user types.",
      xp: 5,
    },
    {
      id: "uxm2p1-2",
      question: "User story format starts with?",
      options: [
        "Given/When/Then",
        "As a user I want",
        "Feature: Scenario:",
        "Test case: input:",
      ],
      correct: 1,
      explanation:
        'User stories follow "As a [user] I want [goal] so that [reason]".',
      xp: 5,
    },
    {
      id: "uxm2p1-3",
      question: "Card sorting helps with?",
      options: [
        "Color selection",
        "Information architecture",
        "Animation design",
        "Typography",
      ],
      correct: 1,
      explanation: "Card sorting reveals how users mentally organize content.",
      xp: 5,
    },
    {
      id: "uxm2p1-4",
      question: "Affinity mapping groups?",
      options: [
        "Color palettes",
        "Research insights by theme",
        "User accounts",
        "Icon sets",
      ],
      correct: 1,
      explanation: "Affinity mapping clusters research data into themes.",
      xp: 5,
    },
    {
      id: "uxm2p1-5",
      question: "An empathy map captures?",
      options: [
        "Technical requirements",
        "What user thinks/feels/says/does",
        "Business KPIs",
        "Color choices",
      ],
      correct: 1,
      explanation: "Empathy maps visualize user emotions and behaviors.",
      xp: 5,
    },
    {
      id: "uxm2p1-6",
      question: "User research goal is to?",
      options: [
        "Skip testing",
        "Understand user needs",
        "Build faster",
        "Reduce costs only",
      ],
      correct: 1,
      explanation: "User research uncovers real user needs and pain points.",
      xp: 5,
    },
    {
      id: "uxm2p1-7",
      question: "A user journey map shows?",
      options: [
        "Database schema",
        "Steps user takes to complete goal",
        "Code flow",
        "File structure",
      ],
      correct: 1,
      explanation: "Journey maps trace user steps, emotions, and touchpoints.",
      xp: 5,
    },
    {
      id: "uxm2p1-8",
      question: "Jobs To Be Done framework focuses on?",
      options: [
        "UI components",
        "What outcome user needs",
        "Backend APIs",
        "Color themes",
      ],
      correct: 1,
      explanation: "JTBD focuses on the job users hire a product to do.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "uxm2p1-pq1",
      title: "User Story Generator",
      description: "Create user story strings from role, goal, and reason.",
      examples: [
        {
          input: "user, login, access dashboard",
          output: "As a user I want to login so that access dashboard",
        },
      ],
      starterCode:
        'function story(role, goal, reason) {\n  return "As a " + role + " I want to " + goal + " so that " + reason;\n}\nconsole.log(story("user", "login", "access dashboard"));',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Concatenate strings in user story format",
        "Function takes role, goal, reason",
        "Return formatted string",
      ],
      solutionKeywords: ["function", "return", "console.log"],
      xp: 20,
    },
  ],
};

const UX_M3_P1: PartQuizData = {
  mcqs: [
    {
      id: "uxm3p1-1",
      question: "Figma frames are used for?",
      options: [
        "Storing assets",
        "Defining screen or component bounds",
        "Writing code",
        "Running tests",
      ],
      correct: 1,
      explanation: "Frames in Figma define screen layouts and component areas.",
      xp: 5,
    },
    {
      id: "uxm3p1-2",
      question: "Figma components enable?",
      options: [
        "Code generation",
        "Reusable design elements",
        "User authentication",
        "Animation scripting",
      ],
      correct: 1,
      explanation:
        "Components allow design elements to be reused consistently.",
      xp: 5,
    },
    {
      id: "uxm3p1-3",
      question: "Component variants in Figma define?",
      options: [
        "Color palettes",
        "Multiple states of a component",
        "User flows",
        "Export formats",
      ],
      correct: 1,
      explanation:
        "Variants define different states like hover, active, disabled.",
      xp: 5,
    },
    {
      id: "uxm3p1-4",
      question: "Auto-layout in Figma creates?",
      options: [
        "Database schemas",
        "Responsive dynamic layouts",
        "Code exports",
        "Animation timelines",
      ],
      correct: 1,
      explanation:
        "Auto-layout makes frames resize and stack content automatically.",
      xp: 5,
    },
    {
      id: "uxm3p1-5",
      question: "Prototype links in Figma simulate?",
      options: [
        "Code execution",
        "User navigation between screens",
        "API calls",
        "Data loading",
      ],
      correct: 1,
      explanation: "Prototype links connect frames to simulate user flows.",
      xp: 5,
    },
    {
      id: "uxm3p1-6",
      question: "Design tokens are?",
      options: [
        "Security keys",
        "Named values for design properties",
        "API tokens",
        "Payment tokens",
      ],
      correct: 1,
      explanation:
        "Design tokens store named values for colors, spacing, typography.",
      xp: 5,
    },
    {
      id: "uxm3p1-7",
      question: "Overlay interaction in Figma shows?",
      options: [
        "New page",
        "Modal or popup on top",
        "Hidden layers",
        "Component variants",
      ],
      correct: 1,
      explanation: "Overlays display frames as modals over existing screens.",
      xp: 5,
    },
    {
      id: "uxm3p1-8",
      question: "Figma is primarily used for?",
      options: [
        "Writing code",
        "UI/UX design and prototyping",
        "Version control",
        "Database modeling",
      ],
      correct: 1,
      explanation: "Figma is a collaborative UI/UX design and prototype tool.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "uxm3p1-pq1",
      title: "Design Token Manager",
      description: "Implement a simple design token lookup system.",
      examples: [{ input: 'getToken("primary")', output: "#6200EE" }],
      starterCode:
        'const tokens = {\n  primary: "#6200EE",\n  background: "#FFFFFF",\n  text: "#000000"\n};\nfunction getToken(name) {\n  return tokens[name] || "not found";\n}\nconsole.log(getToken("primary"));',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Store tokens in object",
        "Lookup by name key",
        "Return value or fallback",
      ],
      solutionKeywords: ["tokens", "getToken", "return", "console.log"],
      xp: 20,
    },
  ],
};

const UX_M4_P1: PartQuizData = {
  mcqs: [
    {
      id: "uxm4p1-1",
      question: 'Nielsen heuristic "visibility of status" means?',
      options: [
        "Show hidden menus",
        "Keep users informed of progress",
        "Use visible colors",
        "Show all data",
      ],
      correct: 1,
      explanation:
        "System should always keep users informed about what is happening.",
      xp: 5,
    },
    {
      id: "uxm4p1-2",
      question: "A/B testing compares?",
      options: [
        "Two databases",
        "Two design variations with users",
        "Two teams",
        "Two code branches",
      ],
      correct: 1,
      explanation: "A/B testing shows two variants to different user groups.",
      xp: 5,
    },
    {
      id: "uxm4p1-3",
      question: "Heatmaps show?",
      options: [
        "Server temperature",
        "Where users click or focus",
        "Database queries",
        "Code coverage",
      ],
      correct: 1,
      explanation:
        "Heatmaps visualize user attention and interaction patterns.",
      xp: 5,
    },
    {
      id: "uxm4p1-4",
      question: "Usability test script defines?",
      options: [
        "API endpoints",
        "Tasks for test participants",
        "Color themes",
        "Database schema",
      ],
      correct: 1,
      explanation:
        "Test scripts outline tasks and scenarios for usability sessions.",
      xp: 5,
    },
    {
      id: "uxm4p1-5",
      question: 'Nielsen heuristic "error prevention" suggests?',
      options: [
        "Show errors clearly",
        "Design to prevent errors first",
        "Add error logs",
        "Train users",
      ],
      correct: 1,
      explanation: "Design should prevent problems before they occur.",
      xp: 5,
    },
    {
      id: "uxm4p1-6",
      question: "Design iteration means?",
      options: [
        "Finalizing design once",
        "Repeatedly improving based on feedback",
        "Skipping testing",
        "Copying competitor design",
      ],
      correct: 1,
      explanation:
        "Iteration refines design through repeated test-feedback cycles.",
      xp: 5,
    },
    {
      id: "uxm4p1-7",
      question: "Hotjar is used for?",
      options: [
        "Code linting",
        "Behavior analytics and heatmaps",
        "Git version control",
        "API testing",
      ],
      correct: 1,
      explanation: "Hotjar records user behavior and generates heatmaps.",
      xp: 5,
    },
    {
      id: "uxm4p1-8",
      question: "Conversion rate measures?",
      options: [
        "Page load time",
        "Users completing desired action",
        "Server uptime",
        "Error count",
      ],
      correct: 1,
      explanation:
        "Conversion rate is the percentage of users completing a goal.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "uxm4p1-pq1",
      title: "A/B Test Result Calculator",
      description: "Calculate conversion rates for two variants.",
      examples: [{ input: "A: 100 users, 20 convert", output: "A: 20.00%" }],
      starterCode:
        'const A = { users: 100, converts: 20 };\nconst B = { users: 100, converts: 30 };\nconsole.log("A:", (A.converts / A.users * 100).toFixed(2) + "%");\nconsole.log("B:", (B.converts / B.users * 100).toFixed(2) + "%");',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Divide converts by users",
        "Multiply by 100 for percentage",
        "Use toFixed(2) for formatting",
      ],
      solutionKeywords: ["converts", "users", "toFixed", "console.log"],
      xp: 20,
    },
  ],
};

const UX_M5_P1: PartQuizData = {
  mcqs: [
    {
      id: "uxm5p1-1",
      question: "A UX portfolio case study includes?",
      options: [
        "Code samples only",
        "Problem, process, and outcome",
        "Only final screens",
        "User credentials",
      ],
      correct: 1,
      explanation:
        "Case studies show problem, research, design process, and results.",
      xp: 5,
    },
    {
      id: "uxm5p1-2",
      question: "A design system contains?",
      options: [
        "Only colors",
        "Tokens, components, and guidelines",
        "Backend APIs",
        "User research data",
      ],
      correct: 1,
      explanation:
        "Design systems include tokens, components, and usage guidelines.",
      xp: 5,
    },
    {
      id: "uxm5p1-3",
      question: "Storybook is used for?",
      options: [
        "Writing user stories",
        "Documenting UI components in isolation",
        "Project management",
        "Database design",
      ],
      correct: 1,
      explanation: "Storybook documents and tests UI components independently.",
      xp: 5,
    },
    {
      id: "uxm5p1-4",
      question: "Zeplin is used for?",
      options: [
        "Creating designs",
        "Handing off designs to developers",
        "Running A/B tests",
        "User research",
      ],
      correct: 1,
      explanation: "Zeplin generates specs and assets for developer handoff.",
      xp: 5,
    },
    {
      id: "uxm5p1-5",
      question: "Developer handoff includes?",
      options: [
        "Source code files",
        "Specs, assets, and style guide",
        "Database dumps",
        "Server configs",
      ],
      correct: 1,
      explanation:
        "Handoff provides measurements, assets, and design tokens to devs.",
      xp: 5,
    },
    {
      id: "uxm5p1-6",
      question: "Design system tokens ensure?",
      options: [
        "Random styling",
        "Visual consistency across product",
        "Faster code execution",
        "Automatic testing",
      ],
      correct: 1,
      explanation: "Tokens enforce consistent colors, spacing, and typography.",
      xp: 5,
    },
    {
      id: "uxm5p1-7",
      question: "A case study should show?",
      options: [
        "Only polished final UI",
        "Design thinking and iterations",
        "Only client quotes",
        "Code architecture",
      ],
      correct: 1,
      explanation:
        "Case studies demonstrate design thinking process, not just results.",
      xp: 5,
    },
    {
      id: "uxm5p1-8",
      question: "Component-driven development means?",
      options: [
        "Writing code in components",
        "Building UI from isolated components",
        "Using only React",
        "Testing each API endpoint",
      ],
      correct: 1,
      explanation: "CDD builds and tests UI components in isolation first.",
      xp: 5,
    },
  ],
  programmingQuestions: [
    {
      id: "uxm5p1-pq1",
      title: "Design Token Reporter",
      description: "Print all design tokens from a system object.",
      examples: [{ input: '{primary: "#6200EE"}', output: "primary: #6200EE" }],
      starterCode:
        'const designSystem = {\n  primary: "#6200EE",\n  spacing: "8px",\n  fontBase: "16px"\n};\nObject.entries(designSystem).forEach(([key, val]) => {\n  console.log(key + ": " + val);\n});',
      languageId: 63,
      languageLabel: "JavaScript",
      hints: [
        "Use Object.entries to iterate",
        "Destructure key and value",
        "Log key: value format",
      ],
      solutionKeywords: ["Object.entries", "forEach", "console.log"],
      xp: 20,
    },
  ],
};

// ─── Export ───────────────────────────────────────────────────────────────────
export const EXTRA_QUIZZES_2: Record<string, PartQuizData> = {
  "cybersec-module1-part1": CS_M1_P1,
  "cybersec-module2-part1": CS_M2_P1,
  "cybersec-module3-part1": CS_M3_P1,
  "cybersec-module4-part1": CS_M4_P1,
  "cybersec-module5-part1": CS_M5_P1,
  "blockchain-module1-part1": BC_M1_P1,
  "blockchain-module2-part1": BC_M2_P1,
  "blockchain-module3-part1": BC_M3_P1,
  "blockchain-module4-part1": BC_M4_P1,
  "blockchain-module5-part1": BC_M5_P1,
  "cloud-module1-part1": CL_M1_P1,
  "cloud-module2-part1": CL_M2_P1,
  "cloud-module3-part1": CL_M3_P1,
  "cloud-module4-part1": CL_M4_P1,
  "cloud-module5-part1": CL_M5_P1,
  "aiml-module1-part1": AI_M1_P1,
  "aiml-module2-part1": AI_M2_P1,
  "aiml-module3-part1": AI_M3_P1,
  "aiml-module4-part1": AI_M4_P1,
  "aiml-module5-part1": AI_M5_P1,
  "gamedev-module1-part1": GD_M1_P1,
  "gamedev-module2-part1": GD_M2_P1,
  "gamedev-module3-part1": GD_M3_P1,
  "gamedev-module4-part1": GD_M4_P1,
  "gamedev-module5-part1": GD_M5_P1,
  "uiux-module1-part1": UX_M1_P1,
  "uiux-module2-part1": UX_M2_P1,
  "uiux-module3-part1": UX_M3_P1,
  "uiux-module4-part1": UX_M4_P1,
  "uiux-module5-part1": UX_M5_P1,
};

export default EXTRA_QUIZZES_2;

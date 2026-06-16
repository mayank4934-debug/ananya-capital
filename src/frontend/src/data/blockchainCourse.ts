import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const blockchain_module0 = {
  id: "blockchain-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "blockchain-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Blockchain Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO BLOCKCHAIN DEVELOPMENT!

Hey! I'm so excited to be your companion on this Blockchain Development journey! ⛓️ Blockchain is one of the most innovative technologies of the 21st century — it's powering cryptocurrencies, decentralized finance, NFTs, supply chain transparency, and so much more. Get ready to build on the future of the internet!

COURSE OVERVIEW
Blockchain development is the art of building decentralized applications (DApps) on distributed ledger networks. You'll start with blockchain fundamentals (how blocks, chains, and consensus work), dive into cryptography (hashing, digital signatures), learn Solidity for writing smart contracts on Ethereum, use Web3.js and Ethers.js to connect web apps to the blockchain, and build complete DApps.

HOW THIS COURSE WORKS
This course has 3 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write Solidity or Web3 code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~35 hours
This is a focused blockchain course. Dedicate 1–2 hours per day and you'll be deploying your first smart contract in about 4 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "blockchain-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Blockchain Development course:

1. Blockchain Basics — How blockchains work, distributed ledgers, consensus mechanisms, nodes
2. Cryptography — Hashing (SHA-256), digital signatures, public/private keys, Merkle trees
3. Consensus Mechanisms — Proof of Work, Proof of Stake, Byzantine fault tolerance
4. Smart Contracts — Solidity syntax, state variables, functions, events, modifiers
5. DApps — Connecting Web3.js/Ethers.js to smart contracts, MetaMask integration
6. Projects — Build and deploy a complete DApp on the Ethereum testnet`,
          codeExample: "",
        },
        {
          id: "blockchain-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Solidity/Web3 exercises in coding parts

Conceptual parts (like "How consensus works") do NOT have coding questions. Only parts where you write Solidity or interact with the blockchain include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "blockchain-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what blockchain development is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Blockchain Development journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Blockchain Basics ─────────────────────────────────────────────

const blockchain_module1 = {
  id: "blockchain-basics",
  title: "Module 1: Blockchain Basics",
  outcome:
    "Understand how blockchains work and the cryptographic principles that secure them.",
  isLocked: false,
  parts: [
    {
      id: "bc-m1-p1",
      title: "Part 1: How Blockchain Works",
      description:
        "Distributed ledgers, blocks, chains, consensus mechanisms, and nodes.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=yubzJw0uiE4",
      notes:
        "A blockchain is a distributed, append-only ledger where data is grouped into blocks linked by cryptographic hashes. Consensus mechanisms (PoW, PoS) ensure all nodes agree on the canonical chain without a central authority.",
      docs: [
        { label: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" },
        {
          label: "Ethereum Docs — How Ethereum works",
          url: "https://ethereum.org/en/developers/docs/intro-to-ethereum/",
        },
      ],
      partQuiz: [
        {
          question:
            "What links each block to the previous one in a blockchain?",
          options: [
            "A timestamp",
            "A cryptographic hash of the previous block",
            "A digital signature",
            "A merkle root only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which consensus mechanism requires miners to solve a computationally expensive puzzle?",
          options: [
            "Proof of Stake",
            "Delegated PoS",
            "Proof of Work",
            "Proof of Authority",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "What property makes it practically impossible to alter a past block without redoing all subsequent work?",
          options: [
            "Digital signatures",
            "Chain immutability via hash linkage",
            "Merkle trees",
            "Node replication",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "bc-m1-p1s1",
          title: "Blocks, Chains & Distributed Ledgers",
          content:
            "A block contains a header (previous hash, timestamp, nonce, merkle root) and a body (transactions). Blocks are chained: each block's header includes the SHA-256 hash of the previous block header. Changing any historical block invalidates every subsequent hash — making tampering computationally infeasible. The ledger is replicated across thousands of nodes; no single point of failure exists.",
          codeExample:
            "// Minimal block structure (JavaScript)\nconst crypto = require('crypto');\n\nclass Block {\n  constructor(index, previousHash, data) {\n    this.index = index;\n    this.timestamp = Date.now();\n    this.previousHash = previousHash;\n    this.data = data;\n    this.nonce = 0;\n    this.hash = this.calculateHash();\n  }\n\n  calculateHash() {\n    return crypto\n      .createHash('sha256')\n      .update(\n        this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce\n      )\n      .digest('hex');\n  }\n}\n\n// Genesis block\nconst genesis = new Block(0, '0000000000000000', { message: 'Genesis' });\nconsole.log('Genesis hash:', genesis.hash);\n\n// Next block — links to genesis\nconst block1 = new Block(1, genesis.hash, { from: 'Alice', to: 'Bob', amount: 10 });\nconsole.log('Block 1 hash:', block1.hash);",
          video: { youtubeId: "yubzJw0uiE4", title: "How Blockchain Works" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "bc-m1-p1s2",
          title: "Consensus Mechanisms",
          content:
            "Consensus ensures all nodes agree on the valid chain. Proof of Work (PoW) — miners compete to find a nonce that produces a hash below a target (Bitcoin). Proof of Stake (PoS) — validators stake coins as collateral; selected proportional to stake (Ethereum post-Merge). Delegated PoS (DPoS) — token holders vote for a small set of delegates. Proof of Authority (PoA) — known, trusted validators (private chains). PoS is more energy-efficient; PoW has the most battle-tested security.",
          codeExample:
            "// Proof of Work — mine a block with difficulty\nclass Block {\n  mine(difficulty) {\n    const target = '0'.repeat(difficulty); // e.g. '0000'\n    while (!this.hash.startsWith(target)) {\n      this.nonce++;\n      this.hash = this.calculateHash();\n    }\n    console.log(`Mined! nonce=${this.nonce} hash=${this.hash}`);\n  }\n}\n\n// Simulate mining with difficulty 4\nconst b = new Block(1, '0'.repeat(64), { tx: 'Alice->Bob 5 ETH' });\nconsole.time('mine');\nb.mine(4); // finds a hash starting with '0000'\nconsole.timeEnd('mine');\n\n// Difficulty 4 takes ~10k iterations on average\n// Bitcoin adjusts difficulty every 2016 blocks to target 10-min block time",
          video: { youtubeId: "yubzJw0uiE4", title: "Consensus Mechanisms" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "bc-m1-p2",
      title: "Part 2: Cryptography in Blockchain",
      description:
        "Hashing, public/private key pairs, digital signatures, and Merkle trees.",
      videoUrl: "https://www.youtube.com/watch?v=xIDL_akeras",
      notes:
        "Blockchain relies on SHA-256 for block hashing, ECDSA (secp256k1) for transaction signatures, and Merkle trees for efficient transaction verification. Understanding these primitives is essential before writing smart contracts.",
      docs: [
        {
          label: "Bitcoin Wiki — ECDSA",
          url: "https://en.bitcoin.it/wiki/Elliptic_Curve_Digital_Signature_Algorithm",
        },
        {
          label: "Ethereum — Cryptography",
          url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/",
        },
      ],
      partQuiz: [
        {
          question: "Which hash function does Bitcoin use for block hashing?",
          options: ["MD5", "SHA-1", "SHA-256", "Keccak-512"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the purpose of a Merkle tree in a block?",
          options: [
            "Store miner identity",
            "Efficiently verify that a transaction is included in a block",
            "Encrypt transactions",
            "Link blocks together",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "In Ethereum, what algorithm is used to sign transactions?",
          options: ["RSA-2048", "AES-256", "ECDSA with secp256k1", "Ed25519"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "bc-m1-p2s1",
          title: "SHA-256 & Merkle Trees",
          content:
            "SHA-256 produces a deterministic 256-bit digest. A tiny change in input produces a completely different hash (avalanche effect), making tampering detectable. A Merkle tree hashes transactions in pairs up to a single root hash stored in the block header. To verify one transaction, you only need O(log n) hashes — not the entire block. This enables SPV (Simplified Payment Verification) for lightweight clients.",
          codeExample:
            "const crypto = require('crypto');\nconst sha256 = d => crypto.createHash('sha256').update(d).digest('hex');\n\n// Build a simple Merkle tree from 4 transactions\nconst txs = ['Alice->Bob:10', 'Bob->Carol:5', 'Carol->Dave:3', 'Dave->Eve:2'];\nconst leafHashes = txs.map(sha256);\nconsole.log('Leaf hashes:', leafHashes);\n\n// Level 1: hash pairs\nconst l1a = sha256(leafHashes[0] + leafHashes[1]);\nconst l1b = sha256(leafHashes[2] + leafHashes[3]);\n\n// Merkle root\nconst merkleRoot = sha256(l1a + l1b);\nconsole.log('Merkle root:', merkleRoot);\n\n// To verify leafHashes[0] is in the tree:\n// Provide: leafHashes[0], leafHashes[1] (sibling), l1b (uncle)\n// Recompute: l1a' = sha256(leaf0 + leaf1), root' = sha256(l1a' + l1b)\n// root' === merkleRoot  → transaction verified!",
          video: { youtubeId: "xIDL_akeras", title: "SHA-256 & Merkle Trees" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "bc-m1-p2s2",
          title: "ECDSA & Wallet Addresses",
          content:
            "Every blockchain account is a key pair: a 256-bit private key (secret) and a public key derived via Elliptic Curve Diffie-Hellman on secp256k1. An Ethereum address is the last 20 bytes of Keccak-256 hash of the public key. To send a transaction, you sign the transaction hash with your private key using ECDSA — anyone can verify authenticity with your public key without knowing the private key.",
          codeExample:
            "// Ethereum-style key pair & address derivation (ethers.js)\nimport { ethers } from 'ethers';\n\n// Generate a random wallet\nconst wallet = ethers.Wallet.createRandom();\nconsole.log('Private key:', wallet.privateKey); // KEEP SECRET\nconsole.log('Public key: ', wallet.publicKey);\nconsole.log('Address:    ', wallet.address); // 0x...\n\n// Sign a message\nconst message = 'Transfer 1 ETH to Bob';\nconst signature = await wallet.signMessage(message);\nconsole.log('Signature:', signature);\n\n// Verify — recover signer address\nconst recovered = ethers.verifyMessage(message, signature);\nconsole.log('Signer matches:', recovered === wallet.address); // true\n\n// If message is tampered:\nconst tamperedMsg = 'Transfer 100 ETH to Bob';\nconst recoveredTampered = ethers.verifyMessage(tamperedMsg, signature);\nconsole.log('Tampered valid:', recoveredTampered === wallet.address); // false",
          video: { youtubeId: "xIDL_akeras", title: "ECDSA & Wallets" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "What uniquely identifies a block and links it to the next block?",
      options: [
        "Its index",
        "Its cryptographic hash",
        "The miner's address",
        "The timestamp",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "In Proof of Work, what does a miner vary to produce a valid hash?",
      options: ["Timestamp", "Previous hash", "Nonce", "Transaction list"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does an Ethereum address represent?",
      options: [
        "The full public key",
        "The last 20 bytes of Keccak-256 of the public key",
        "A SHA-256 hash of the private key",
        "A random 40-character string",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "bc-m1-test1",
      title: "Build a Minimal Blockchain",
      description:
        "Implement a Blockchain class with methods addBlock(data) and isValid(). Each block must contain index, previousHash, timestamp, data, nonce, and hash. isValid() should verify every block's hash and previousHash link. Mine blocks with difficulty 2 (hash starts with '00').",
      starterCode:
        "const crypto = require('crypto');\n\nclass Block {\n  constructor(index, previousHash, data) {\n    // Initialize properties and compute initial hash\n  }\n  calculateHash() {\n    // Return SHA-256 hex of index+previousHash+timestamp+data+nonce\n  }\n  mine(difficulty) {\n    // Increment nonce until hash starts with '0'.repeat(difficulty)\n  }\n}\n\nclass Blockchain {\n  constructor() { this.chain = [this.createGenesis()]; }\n  createGenesis() { /* return genesis block */ }\n  addBlock(data) { /* mine with difficulty 2 and push */ }\n  isValid() { /* verify hash and previousHash for each block */ }\n}\n\nconst bc = new Blockchain();\nbc.addBlock({ from: 'Alice', to: 'Bob', amount: 5 });\nbc.addBlock({ from: 'Bob', to: 'Carol', amount: 2 });\nconsole.log('Valid:', bc.isValid()); // true\n",
      hints: [
        "In calculateHash, use crypto.createHash('sha256').update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).digest('hex')",
        "In mine, loop while !this.hash.startsWith('0'.repeat(difficulty)): nonce++ then recalculate hash",
        "In isValid, loop from index 1; check block.hash === block.calculateHash() and block.previousHash === chain[i-1].hash",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Smart Contracts ────────────────────────────────────────────────

const blockchain_module2 = {
  id: "blockchain-smart-contracts",
  title: "Module 2: Smart Contracts",
  outcome:
    "Write, test, and deploy Solidity smart contracts on the Ethereum network.",
  isLocked: true,
  parts: [
    {
      id: "bc-m2-p1",
      title: "Part 1: Ethereum & Solidity",
      description:
        "Ethereum Virtual Machine, accounts, gas, and the Solidity language fundamentals.",
      videoUrl: "https://www.youtube.com/watch?v=ipwxYa-F1uY",
      notes:
        "Ethereum extends Bitcoin's blockchain with a Turing-complete virtual machine (EVM). Smart contracts are programs deployed on-chain, executed by every node. Solidity is the primary language — statically typed, contract-based, compiled to EVM bytecode.",
      docs: [
        {
          label: "Solidity Documentation",
          url: "https://docs.soliditylang.org/",
        },
        {
          label: "Ethereum EVM Docs",
          url: "https://ethereum.org/en/developers/docs/evm/",
        },
      ],
      partQuiz: [
        {
          question: "What is 'gas' in the Ethereum network?",
          options: [
            "A native token",
            "A unit measuring computational work required to execute operations",
            "A type of smart contract",
            "The mining reward",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which Solidity visibility modifier makes a function callable only within the contract?",
          options: ["public", "external", "internal", "private"],
          correct: 3,
          xp: 10,
        },
        {
          question:
            "What keyword marks a Solidity function as not modifying state?",
          options: ["payable", "virtual", "view", "pure"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "bc-m2-p1-pq1",
          title: "Basic Solidity Contract",
          description:
            "Write a Solidity contract SimpleStorage with a private uint256 storedValue, a public function set(uint256 val) to update it, and a view function get() returning the stored value.",
          starterCode:
            "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    // Declare storedValue\n\n    function set(uint256 val) public {\n        // Store val\n    }\n\n    function get() public view returns (uint256) {\n        // Return storedValue\n    }\n}\n",
          hints: [
            "Declare: uint256 private storedValue;",
            "In set: storedValue = val;",
            "In get: return storedValue;",
          ],
          language: "solidity",
        },
      ],
      subsections: [
        {
          id: "bc-m2-p1s1",
          title: "Ethereum Accounts, EVM & Gas",
          content:
            "Ethereum has two account types: Externally Owned Accounts (EOA — controlled by private keys) and Contract Accounts (code + storage, no private key). The EVM is a stack-based virtual machine that executes contract bytecode deterministically on every node. Gas prevents infinite loops — each opcode costs a specific gas amount. Users set a gasLimit and gasPrice; if execution exceeds gasLimit, it reverts (but gas is still consumed). Post-EIP-1559, fees include a base fee (burned) + optional priority tip.",
          codeExample:
            "// Solidity data types and state variables\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract DataTypes {\n    // Value types (stored in stack/storage)\n    uint256 public count;          // unsigned 256-bit integer\n    int256  public temperature;    // signed integer\n    bool    public isActive;       // boolean\n    address public owner;          // 20-byte Ethereum address\n    bytes32 public dataHash;       // fixed-size byte array\n\n    // Reference types\n    string  public name;           // dynamic string (storage)\n    uint256[] public scores;       // dynamic array\n    mapping(address => uint256) public balances; // hash map\n\n    constructor() {\n        owner = msg.sender;   // deployer's address\n        isActive = true;\n        count = 0;\n    }\n}",
          video: { youtubeId: "ipwxYa-F1uY", title: "Ethereum EVM & Accounts" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "bc-m2-p1s2",
          title: "Solidity Fundamentals",
          content:
            "Solidity is statically typed and contract-oriented. Key concepts: state variables (persistent storage), functions (public/private/internal/external, view/pure/payable), events (emitted for off-chain listeners), modifiers (reusable preconditions), and the constructor (runs once on deployment). msg.sender is the caller address; msg.value is ETH sent. require() enforces conditions and reverts with an error message on failure.",
          codeExample:
            "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract Counter {\n    uint256 private count;\n    address public owner;\n\n    event CountIncremented(address indexed by, uint256 newCount);\n\n    modifier onlyOwner() {\n        require(msg.sender == owner, 'Not the owner');\n        _; // continue execution\n    }\n\n    constructor() {\n        owner = msg.sender;\n        count = 0;\n    }\n\n    function increment() public {\n        count++;\n        emit CountIncremented(msg.sender, count);\n    }\n\n    function reset() public onlyOwner {\n        count = 0;\n    }\n\n    function getCount() public view returns (uint256) {\n        return count;\n    }\n}",
          video: {
            youtubeId: "ipwxYa-F1uY",
            title: "Solidity Language Basics",
          },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "bc-m2-p2",
      title: "Part 2: Writing & Deploying Contracts",
      description:
        "Hardhat development environment, testing with ethers.js, and deploying to testnets.",
      videoUrl: "https://www.youtube.com/watch?v=gyMwXuJrbJQ",
      notes:
        "Hardhat is the standard Ethereum development environment — compile, test, and deploy Solidity contracts. Tests are written in JavaScript/TypeScript using ethers.js. Deploy to Sepolia testnet with a funded wallet before mainnet.",
      docs: [
        { label: "Hardhat Documentation", url: "https://hardhat.org/docs" },
        {
          label: "OpenZeppelin Contracts",
          url: "https://docs.openzeppelin.com/contracts/",
        },
      ],
      partQuiz: [
        {
          question:
            "What command compiles Solidity contracts in a Hardhat project?",
          options: [
            "npx hardhat deploy",
            "npx hardhat compile",
            "npx hardhat test",
            "npx hardhat node",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which OpenZeppelin contract is used as a base for fungible tokens (ERC-20)?",
          options: ["ERC721", "ERC1155", "ERC20", "Ownable"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does calling contract.deploy() return in ethers.js?",
          options: [
            "A transaction hash string",
            "A Contract instance (not yet mined)",
            "The deployed address immediately",
            "A boolean success flag",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "bc-m2-p2-pq1",
          title: "ERC-20 Token Contract",
          description:
            "Using OpenZeppelin, write a Solidity ERC-20 token called StudyToken (symbol: STK) with an initial supply of 1,000,000 tokens minted to the deployer in the constructor.",
          starterCode:
            "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport '@openzeppelin/contracts/token/ERC20/ERC20.sol';\n\ncontract StudyToken is ERC20 {\n    constructor() ERC20(/* name, symbol */) {\n        // Mint 1,000,000 tokens (with 18 decimals) to msg.sender\n    }\n}\n",
          hints: [
            "Pass 'StudyToken', 'STK' to the ERC20 constructor",
            "ERC-20 uses 18 decimals by default: 1 token = 1 * 10**18 units",
            "Use _mint(msg.sender, 1_000_000 * 10**decimals());",
          ],
          language: "solidity",
        },
      ],
      subsections: [
        {
          id: "bc-m2-p2s1",
          title: "Hardhat Setup & Testing",
          content:
            "Hardhat provides a local EVM node, contract compilation, and a testing framework. Initialize with `npm init` + `npm install hardhat`, then `npx hardhat init`. Tests use Mocha/Chai + ethers.js. Deploy scripts use `hre.ethers` to get signers and factories. Always test on a local Hardhat node before testnet deployment to save gas fees.",
          codeExample:
            "// hardhat.config.js\nrequire('@nomicfoundation/hardhat-toolbox');\n\nmodule.exports = {\n  solidity: '0.8.19',\n  networks: {\n    sepolia: {\n      url: process.env.SEPOLIA_RPC_URL,\n      accounts: [process.env.PRIVATE_KEY],\n    },\n  },\n};\n\n// test/Counter.test.js\nconst { expect } = require('chai');\nconst { ethers } = require('hardhat');\n\ndescribe('Counter', () => {\n  let counter, owner, addr1;\n\n  beforeEach(async () => {\n    [owner, addr1] = await ethers.getSigners();\n    const Counter = await ethers.getContractFactory('Counter');\n    counter = await Counter.deploy();\n  });\n\n  it('starts at 0', async () => {\n    expect(await counter.getCount()).to.equal(0);\n  });\n\n  it('increments count', async () => {\n    await counter.connect(addr1).increment();\n    expect(await counter.getCount()).to.equal(1);\n  });\n\n  it('only owner can reset', async () => {\n    await counter.increment();\n    await expect(counter.connect(addr1).reset()).to.be.revertedWith('Not the owner');\n    await counter.reset();\n    expect(await counter.getCount()).to.equal(0);\n  });\n});",
          video: { youtubeId: "gyMwXuJrbJQ", title: "Hardhat Setup & Testing" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "bc-m2-p2s2",
          title: "Deploying to Testnets",
          content:
            "Deploy scripts use `ethers.getContractFactory` to compile + `factory.deploy()` to send the deployment transaction. Call `contract.waitForDeployment()` to wait for confirmation. Use Sepolia testnet (get free ETH from Alchemy/Infura faucet). After deployment, verify on Etherscan with `npx hardhat verify --network sepolia <address>` for public ABI access. Store the deployed address and ABI in your frontend.",
          codeExample:
            "// scripts/deploy.js\nconst { ethers } = require('hardhat');\n\nasync function main() {\n  const [deployer] = await ethers.getSigners();\n  console.log('Deploying with:', deployer.address);\n  console.log('Balance:', ethers.formatEther(await deployer.provider.getBalance(deployer.address)), 'ETH');\n\n  // Deploy Counter contract\n  const Counter = await ethers.getContractFactory('Counter');\n  const counter = await Counter.deploy();\n  await counter.waitForDeployment();\n\n  const addr = await counter.getAddress();\n  console.log('Counter deployed to:', addr);\n\n  // Interact immediately\n  await counter.increment();\n  console.log('Count after increment:', (await counter.getCount()).toString());\n}\n\nmain().catch(err => { console.error(err); process.exitCode = 1; });\n\n// Run: npx hardhat run scripts/deploy.js --network sepolia",
          video: {
            youtubeId: "gyMwXuJrbJQ",
            title: "Deploying to Sepolia Testnet",
          },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "What happens when a transaction runs out of gas mid-execution?",
      options: [
        "Execution pauses and resumes later",
        "It reverts all state changes but gas is still consumed",
        "Gas is refunded and state is saved",
        "The block is rejected",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which Solidity keyword prevents a function from reading OR writing state?",
      options: ["view", "constant", "pure", "immutable"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does `msg.sender` refer to in a Solidity function?",
      options: [
        "The contract's own address",
        "The address that deployed the contract",
        "The address that called the current function",
        "The block miner's address",
      ],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "bc-m2-test1",
      title: "Simple Voting Contract",
      description:
        "Write a Solidity contract Voting with: a mapping(address => bool) hasVoted, a mapping(string => uint256) voteCounts, a function vote(string memory candidate) that records one vote per address (require not already voted), and a view function getVotes(string memory candidate) returning the count.",
      starterCode:
        "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract Voting {\n    // Declare mappings\n\n    function vote(string memory candidate) public {\n        // Ensure msg.sender hasn't voted yet\n        // Mark as voted\n        // Increment candidate vote count\n    }\n\n    function getVotes(string memory candidate) public view returns (uint256) {\n        // Return vote count for candidate\n    }\n}\n",
      hints: [
        "Declare: mapping(address => bool) public hasVoted; and mapping(string => uint256) public voteCounts;",
        "In vote: require(!hasVoted[msg.sender], 'Already voted'); hasVoted[msg.sender] = true; voteCounts[candidate]++;",
        "In getVotes: return voteCounts[candidate];",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Web3 & DApps ───────────────────────────────────────────────────

const blockchain_module3 = {
  id: "blockchain-web3-dapps",
  title: "Module 3: Web3 & DApps",
  outcome:
    "Connect frontends to the blockchain using Web3.js/Ethers.js and build a complete DApp.",
  isLocked: true,
  parts: [
    {
      id: "bc-m3-p1",
      title: "Part 1: Web3.js & Ethers.js",
      description:
        "Connecting to Ethereum nodes, reading chain data, and sending transactions from JavaScript.",
      videoUrl: "https://www.youtube.com/watch?v=a0osIaAOFSE",
      notes:
        "Ethers.js (v6) is the modern standard for interacting with Ethereum from JavaScript. It provides Provider (read), Signer (write), and Contract abstractions. MetaMask injects window.ethereum — use it to request accounts and sign transactions in the browser.",
      docs: [
        {
          label: "Ethers.js v6 Documentation",
          url: "https://docs.ethers.org/v6/",
        },
        {
          label: "MetaMask Developer Docs",
          url: "https://docs.metamask.io/guide/",
        },
      ],
      partQuiz: [
        {
          question:
            "In ethers.js, which object is used to READ data from the blockchain without a wallet?",
          options: ["Signer", "Contract", "Provider", "Wallet"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "What does window.ethereum represent in a browser with MetaMask installed?",
          options: [
            "A REST API endpoint",
            "The injected EIP-1193 provider for wallet interaction",
            "The Ethereum mainnet URL",
            "A local Hardhat node",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which ethers.js method requests the user to connect their MetaMask wallet?",
          options: [
            "provider.getAccounts()",
            "signer.connect()",
            "provider.send('eth_requestAccounts', [])",
            "ethers.connect(window.ethereum)",
          ],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "bc-m3-p1-pq1",
          title: "Read Contract Data with Ethers.js",
          description:
            "Using ethers.js v6, write an async function getBalance(contractAddress, abi, userAddress) that connects to the Ethereum mainnet via a public RPC, instantiates the contract, and returns the ERC-20 token balance of userAddress formatted with 18 decimals.",
          starterCode:
            "import { ethers } from 'ethers';\n\nexport async function getBalance(contractAddress, abi, userAddress) {\n  // 1. Create a JsonRpcProvider (use 'https://eth.llamarpc.com')\n  // 2. Instantiate the Contract with provider (read-only)\n  // 3. Call balanceOf(userAddress)\n  // 4. Return ethers.formatUnits(balance, 18)\n}\n",
          hints: [
            "const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com');",
            "const contract = new ethers.Contract(contractAddress, abi, provider);",
            "const balance = await contract.balanceOf(userAddress); return ethers.formatUnits(balance, 18);",
          ],
          language: "javascript",
        },
      ],
      subsections: [
        {
          id: "bc-m3-p1s1",
          title: "Providers, Signers & Contract Instances",
          content:
            "A Provider connects to an Ethereum node (via RPC URL or MetaMask) and reads public chain data — blocks, balances, transactions, contract calls. A Signer wraps a private key and can authorize and send transactions. A Contract instance (new ethers.Contract(address, abi, providerOrSigner)) binds a deployed contract to JavaScript — call view functions directly as async methods; state-changing functions require a Signer and return a TransactionResponse.",
          codeExample:
            "import { ethers, BrowserProvider } from 'ethers';\n\n// Read-only provider (no wallet needed)\nconst readProvider = new ethers.JsonRpcProvider('https://eth.llamarpc.com');\n\n// Get latest block\nconst block = await readProvider.getBlock('latest');\nconsole.log('Block number:', block.number);\nconsole.log('Gas limit:   ', block.gasLimit.toString());\n\n// Get ETH balance\nconst balance = await readProvider.getBalance('0xd8dA6BF...');\nconsole.log('Balance:', ethers.formatEther(balance), 'ETH');\n\n// Browser wallet provider (MetaMask)\nconst browserProvider = new BrowserProvider(window.ethereum);\nawait browserProvider.send('eth_requestAccounts', []);\nconst signer = await browserProvider.getSigner();\nconsole.log('Connected wallet:', await signer.getAddress());\n\n// Read contract (ERC-20 example)\nconst erc20Abi = ['function balanceOf(address) view returns (uint256)', 'function symbol() view returns (string)'];\nconst token = new ethers.Contract('0xA0b86991c6...', erc20Abi, readProvider);\nconsole.log('Symbol:', await token.symbol());\nconsole.log('Balance:', ethers.formatUnits(await token.balanceOf(signer.getAddress()), 6));",
          video: {
            youtubeId: "a0osIaAOFSE",
            title: "Ethers.js Providers & Signers",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "bc-m3-p1s2",
          title: "Sending Transactions & Listening to Events",
          content:
            "State-changing contract calls (non-view functions) submit a transaction to the mempool. Call `contract.methodName(args)` with a Signer — it returns a TransactionResponse; await `.wait()` for confirmation receipt. Listen to contract events with `contract.on('EventName', handler)` — useful for real-time UI updates. Use `contract.queryFilter(filter, fromBlock, toBlock)` for historical events.",
          codeExample:
            "import { ethers, BrowserProvider } from 'ethers';\n\nconst provider = new BrowserProvider(window.ethereum);\nawait provider.send('eth_requestAccounts', []);\nconst signer = await provider.getSigner();\n\nconst counterAbi = [\n  'function increment() public',\n  'function getCount() public view returns (uint256)',\n  'event CountIncremented(address indexed by, uint256 newCount)',\n];\nconst counter = new ethers.Contract(CONTRACT_ADDRESS, counterAbi, signer);\n\n// Send transaction\nconsole.log('Sending increment transaction...');\nconst tx = await counter.increment();\nconsole.log('TX hash:', tx.hash);\nconst receipt = await tx.wait(); // wait for 1 confirmation\nconsole.log('Confirmed in block:', receipt.blockNumber);\nconsole.log('New count:', (await counter.getCount()).toString());\n\n// Listen for future events\ncounter.on('CountIncremented', (by, newCount) => {\n  console.log(`${by} incremented count to ${newCount.toString()}`);\n});\n\n// Query past events\nconst filter = counter.filters.CountIncremented();\nconst events = await counter.queryFilter(filter, -100); // last 100 blocks\nevents.forEach(e => console.log('Past event:', e.args.by, '->', e.args.newCount.toString()));",
          video: {
            youtubeId: "a0osIaAOFSE",
            title: "Sending Transactions & Events",
          },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "bc-m3-p2",
      title: "Part 2: Building a DApp",
      description:
        "Full-stack DApp architecture: React frontend, wallet connection, contract interaction, and IPFS.",
      videoUrl: "https://www.youtube.com/watch?v=aqmegZqv0pY",
      notes:
        "A DApp (Decentralized Application) combines a smart contract backend with a web frontend. The frontend connects to the user's wallet (MetaMask), calls contract methods, and reacts to blockchain events. IPFS or Arweave host static assets decentrally.",
      docs: [
        {
          label: "RainbowKit — Wallet Connection UI",
          url: "https://www.rainbowkit.com/docs/introduction",
        },
        {
          label: "wagmi — React Hooks for Ethereum",
          url: "https://wagmi.sh/react/getting-started",
        },
      ],
      partQuiz: [
        {
          question:
            "Which library provides ready-made React hooks for reading/writing Ethereum contracts?",
          options: ["web3.js", "wagmi", "viem", "hardhat-ethers"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does IPFS stand for, and why is it used in DApps?",
          options: [
            "Internet Protocol File System — for faster loading",
            "InterPlanetary File System — for decentralized, content-addressed file storage",
            "Indexed Persistent File Store — for on-chain storage",
            "Integrated Protocol File Server — for private data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "In a DApp, where should you NEVER store a user's private key?",
          options: [
            "In MetaMask's encrypted vault",
            "In a hardware wallet",
            "In localStorage or as a JavaScript variable",
            "In a browser extension",
          ],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "bc-m3-p2-pq1",
          title: "React Wallet Connect Component",
          description:
            "Write a React component WalletConnect that uses ethers.js BrowserProvider to connect MetaMask. Show a 'Connect Wallet' button when disconnected; once connected, display the shortened address (first 6 + last 4 chars) and a 'Disconnect' button that resets state.",
          starterCode:
            "import { useState } from 'react';\nimport { ethers, BrowserProvider } from 'ethers';\n\nexport function WalletConnect() {\n  const [address, setAddress] = useState('');\n\n  async function connect() {\n    // Request accounts, get signer address, set it\n  }\n\n  function disconnect() {\n    // Reset address state\n  }\n\n  const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '';\n\n  return (\n    <div>\n      {/* Show connect or disconnect button based on address state */}\n    </div>\n  );\n}\n",
          hints: [
            "In connect: const provider = new BrowserProvider(window.ethereum); await provider.send('eth_requestAccounts',[]); const signer = await provider.getSigner(); setAddress(await signer.getAddress());",
            "In disconnect: setAddress('');",
            "Render: if address is set, show the shortAddress + a Disconnect button; otherwise show a Connect Wallet button",
          ],
          language: "javascript",
        },
      ],
      subsections: [
        {
          id: "bc-m3-p2s1",
          title: "DApp Architecture & Wallet Connection",
          content:
            "A DApp architecture: 1) Smart Contract (on-chain logic + storage), 2) Frontend (React/Next.js — reads/writes contract via ethers.js), 3) Wallet (MetaMask — signs transactions, holds keys), 4) Node (Alchemy/Infura/public RPC — relays transactions to the network), 5) IPFS (optional — decentralized media/metadata storage). Never store private keys in your app. Use wagmi + RainbowKit for production wallet UX — they handle multi-wallet support, network switching, and connection state.",
          codeExample:
            "// Minimal React DApp — Counter interaction\nimport { useState, useEffect } from 'react';\nimport { ethers, BrowserProvider } from 'ethers';\n\nconst ABI = [\n  'function increment() public',\n  'function getCount() public view returns (uint256)',\n];\nconst ADDRESS = '0xYourDeployedContractAddress';\n\nexport default function App() {\n  const [count, setCount]     = useState(null);\n  const [account, setAccount] = useState('');\n  const [contract, setContract] = useState(null);\n\n  async function connect() {\n    const provider = new BrowserProvider(window.ethereum);\n    await provider.send('eth_requestAccounts', []);\n    const signer = await provider.getSigner();\n    setAccount(await signer.getAddress());\n    const c = new ethers.Contract(ADDRESS, ABI, signer);\n    setContract(c);\n    setCount((await c.getCount()).toString());\n  }\n\n  async function increment() {\n    const tx = await contract.increment();\n    await tx.wait();\n    setCount((await contract.getCount()).toString());\n  }\n\n  return (\n    <div>\n      {!account ? <button onClick={connect}>Connect Wallet</button> : <p>Connected: {account}</p>}\n      {count !== null && <p>Count: {count}</p>}\n      {contract && <button onClick={increment}>Increment</button>}\n    </div>\n  );\n}",
          video: { youtubeId: "aqmegZqv0pY", title: "DApp Architecture" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "bc-m3-p2s2",
          title: "IPFS, Metadata & DApp Best Practices",
          content:
            "IPFS (InterPlanetary File System) stores files by content hash — upload once, reference forever by CID. NFT metadata (name, description, image) is typically stored on IPFS, with the CID in the smart contract. Use Pinata or web3.storage to pin files and prevent garbage collection. DApp security: validate all inputs client-side AND contract-side, handle transaction failures gracefully, show pending/confirmed states, and never expose RPC API keys in frontend code — use environment variables or a backend proxy.",
          codeExample:
            "// Upload to IPFS via Pinata API\nasync function uploadToIPFS(file) {\n  const formData = new FormData();\n  formData.append('file', file);\n\n  const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {\n    method: 'POST',\n    headers: { Authorization: `Bearer ${process.env.PINATA_JWT}` },\n    body: formData,\n  });\n  const { IpfsHash } = await res.json();\n  // Access via: https://ipfs.io/ipfs/<IpfsHash>\n  return `ipfs://${IpfsHash}`;\n}\n\n// NFT Metadata JSON structure (stored on IPFS)\nconst metadata = {\n  name: 'Study Certificate #001',\n  description: 'Awarded for completing the Blockchain Development course on Code & Crush.',\n  image: 'ipfs://QmYourImageCID',\n  attributes: [\n    { trait_type: 'Course', value: 'Blockchain Development' },\n    { trait_type: 'Completion Date', value: '2026-04-12' },\n    { trait_type: 'Score', value: 95 },\n  ],\n};\n// Upload metadata JSON → get metadataCID → call NFT contract's mint(address, metadataCID)",
          video: {
            youtubeId: "aqmegZqv0pY",
            title: "IPFS & DApp Best Practices",
          },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "Which ethers.js class wraps a private key and can sign/send transactions?",
      options: ["Provider", "Contract", "Signer", "Interface"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is a content identifier (CID) in IPFS?",
      options: [
        "A URL path on a central server",
        "A cryptographic hash uniquely identifying file content",
        "A random UUID assigned at upload",
        "An Ethereum contract address",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "In a React DApp, what triggers a UI re-render when an on-chain event occurs?",
      options: [
        "The blockchain automatically pushes updates to all browsers",
        "contract.on('EventName', handler) which calls setState in the handler",
        "Polling window.ethereum every 100ms",
        "React automatically subscribes to MetaMask events",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "bc-m3-test1",
      title: "NFT Minting DApp",
      description:
        "Write a Solidity contract StudyCertNFT that extends ERC721 from OpenZeppelin with: a counter for token IDs, an owner-only function mint(address to, string memory tokenURI) that mints an NFT to the recipient, sets its token URI, and increments the counter. Use ERC721URIStorage as the base.",
      starterCode:
        "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';\nimport '@openzeppelin/contracts/access/Ownable.sol';\n\ncontract StudyCertNFT is ERC721URIStorage, Ownable {\n    uint256 private _tokenIdCounter;\n\n    constructor() ERC721('StudyCert', 'SCERT') Ownable(msg.sender) {}\n\n    function mint(address to, string memory tokenURI) public onlyOwner {\n        // Use _tokenIdCounter as the token ID\n        // Mint the token, set its URI, then increment the counter\n    }\n}\n",
      hints: [
        "Store current ID: uint256 tokenId = _tokenIdCounter;",
        "Mint: _safeMint(to, tokenId); then set the URI: _setTokenURI(tokenId, tokenURI);",
        "Finally increment: _tokenIdCounter++;",
      ],
    },
  ] as CTestProblem[],
};

// ─── Assembled Course ─────────────────────────────────────────────────────────

export const BLOCKCHAIN_COURSE = {
  id: "blockchain-course",
  name: "Blockchain Development",
  description:
    "Master blockchain fundamentals, smart contract development with Solidity, and build full-stack decentralized applications.",
  icon: "⛓️",
  color: "from-purple-700 to-blue-600",
  totalModules: 3,
  certificate: {
    title: "Blockchain Development Certificate",
    description:
      "Awarded for completing all 3 modules of the Blockchain Development course.",
  },
  modules: [
    blockchain_module0,
    blockchain_module1,
    blockchain_module2,
    blockchain_module3,
  ] as unknown as CModule[],
};

export const BLOCKCHAIN_ROADMAP_ENTRY = {
  id: "blockchain",
  name: "Blockchain",
  icon: "⛓️",
  color: "from-purple-700 to-blue-600",
  description:
    "Build decentralized apps with Solidity, Ethereum, Web3.js, and smart contract deployment.",
  topics: [
    {
      title: "How Blockchain Works",
      videoId: "yubzJw0uiE4",
      duration: "40 min",
    },
    {
      title: "Cryptography in Blockchain",
      videoId: "xIDL_akeras",
      duration: "35 min",
    },
    {
      title: "Ethereum & Solidity Basics",
      videoId: "ipwxYa-F1uY",
      duration: "50 min",
    },
    {
      title: "Writing & Deploying Smart Contracts",
      videoId: "gyMwXuJrbJQ",
      duration: "45 min",
    },
    {
      title: "Web3.js & Ethers.js",
      videoId: "a0osIaAOFSE",
      duration: "40 min",
    },
    { title: "Building a DApp", videoId: "aqmegZqv0pY", duration: "55 min" },
  ],
  courseId: "blockchain-course",
};

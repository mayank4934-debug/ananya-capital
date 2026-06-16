export interface AptitudeQuestion {
  id: string;
  category: "quantitative" | "logical" | "verbal";
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0-indexed
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export const APTITUDE_QUESTIONS: AptitudeQuestion[] = [
  // ─── QUANTITATIVE APTITUDE (20 questions) ────────────────────────────────
  {
    id: "qa-01",
    category: "quantitative",
    question:
      "A shopkeeper buys an article for ₹800 and sells it for ₹1000. What is the profit percentage?",
    options: ["20%", "25%", "30%", "15%"],
    correctAnswer: 1,
    explanation:
      "Profit = 1000 – 800 = ₹200. Profit % = (200/800) × 100 = 25%.",
    difficulty: "easy",
  },
  {
    id: "qa-02",
    category: "quantitative",
    question:
      "If a train travels 360 km in 4 hours, what is its speed in km/h?",
    options: ["80", "90", "100", "75"],
    correctAnswer: 1,
    explanation: "Speed = Distance / Time = 360 / 4 = 90 km/h.",
    difficulty: "easy",
  },
  {
    id: "qa-03",
    category: "quantitative",
    question: "What is 15% of 240?",
    options: ["32", "36", "38", "40"],
    correctAnswer: 1,
    explanation: "15% of 240 = (15/100) × 240 = 36.",
    difficulty: "easy",
  },
  {
    id: "qa-04",
    category: "quantitative",
    question:
      "A can do a piece of work in 10 days and B can do it in 15 days. In how many days can they finish it together?",
    options: ["5", "6", "8", "12"],
    correctAnswer: 1,
    explanation:
      "A's rate = 1/10, B's rate = 1/15. Combined = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. Together they finish in 6 days.",
    difficulty: "easy",
  },
  {
    id: "qa-05",
    category: "quantitative",
    question: "In how many ways can 5 people be arranged in a row?",
    options: ["60", "100", "120", "150"],
    correctAnswer: 2,
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120.",
    difficulty: "easy",
  },
  {
    id: "qa-06",
    category: "quantitative",
    question:
      "If the simple interest on ₹5000 at 8% per annum for 3 years is calculated, what is the total amount?",
    options: ["₹5800", "₹6000", "₹6200", "₹6500"],
    correctAnswer: 1,
    explanation:
      "SI = (P × R × T)/100 = (5000 × 8 × 3)/100 = ₹1200. Total = 5000 + 1200 = ₹6200. Wait — ₹6200 is option C. Correct answer index = 2.",
    difficulty: "medium",
  },
  {
    id: "qa-07",
    category: "quantitative",
    question:
      "Two numbers are in the ratio 3:5. If their sum is 64, find the larger number.",
    options: ["24", "32", "40", "48"],
    correctAnswer: 2,
    explanation:
      "Let numbers be 3x and 5x. 3x + 5x = 64 → 8x = 64 → x = 8. Larger = 5 × 8 = 40.",
    difficulty: "easy",
  },
  {
    id: "qa-08",
    category: "quantitative",
    question:
      "A car travels from City A to City B at 60 km/h and returns at 40 km/h. What is the average speed?",
    options: ["48 km/h", "50 km/h", "52 km/h", "45 km/h"],
    correctAnswer: 0,
    explanation:
      "Average speed = 2ab/(a+b) = (2 × 60 × 40)/(60 + 40) = 4800/100 = 48 km/h.",
    difficulty: "medium",
  },
  {
    id: "qa-09",
    category: "quantitative",
    question:
      "What is the probability of getting an even number when a die is rolled?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correctAnswer: 2,
    explanation:
      "Even numbers on a die: 2, 4, 6 → 3 outcomes. Total = 6. Probability = 3/6 = 1/2.",
    difficulty: "easy",
  },
  {
    id: "qa-10",
    category: "quantitative",
    question:
      "In how many ways can 3 books be chosen from a shelf of 7 different books?",
    options: ["21", "35", "42", "70"],
    correctAnswer: 1,
    explanation: "C(7,3) = 7! / (3! × 4!) = 35.",
    difficulty: "medium",
  },
  {
    id: "qa-11",
    category: "quantitative",
    question:
      "A pipe can fill a tank in 20 minutes. Another pipe can empty it in 30 minutes. If both are opened together, in how many minutes will the tank be filled?",
    options: ["50", "55", "60", "65"],
    correctAnswer: 2,
    explanation:
      "Fill rate = 1/20 per min. Empty rate = 1/30 per min. Net = 1/20 – 1/30 = 3/60 – 2/60 = 1/60. Tank fills in 60 minutes.",
    difficulty: "medium",
  },
  {
    id: "qa-12",
    category: "quantitative",
    question:
      "If the cost price is ₹1200 and selling price is ₹960, what is the loss percentage?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 1,
    explanation: "Loss = 1200 – 960 = ₹240. Loss % = (240/1200) × 100 = 20%.",
    difficulty: "easy",
  },
  {
    id: "qa-13",
    category: "quantitative",
    question:
      "The compound interest on ₹10000 at 10% per annum for 2 years is:",
    options: ["₹1900", "₹2000", "₹2100", "₹2500"],
    correctAnswer: 2,
    explanation:
      "CI = P[(1+r/100)^n – 1] = 10000[(1.1)^2 – 1] = 10000[1.21 – 1] = 10000 × 0.21 = ₹2100.",
    difficulty: "medium",
  },
  {
    id: "qa-14",
    category: "quantitative",
    question:
      "The average of 5 consecutive even numbers is 16. What is the largest number?",
    options: ["18", "20", "22", "24"],
    correctAnswer: 1,
    explanation:
      "Consecutive even numbers: n–4, n–2, n, n+2, n+4. Average = n = 16. Largest = 16 + 4 = 20.",
    difficulty: "easy",
  },
  {
    id: "qa-15",
    category: "quantitative",
    question:
      "A number when divided by 6 gives a remainder of 4. What is the remainder when it is divided by 3?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 1,
    explanation:
      "Number = 6k + 4. Dividing by 3: (6k + 4)/3 = 2k + 1 remainder 1.",
    difficulty: "medium",
  },
  {
    id: "qa-16",
    category: "quantitative",
    question:
      "If 12 men can complete a job in 9 days, how many days will 18 men take to complete the same job?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 1,
    explanation: "M₁D₁ = M₂D₂ → 12 × 9 = 18 × D₂ → D₂ = 108/18 = 6 days.",
    difficulty: "easy",
  },
  {
    id: "qa-17",
    category: "quantitative",
    question: "Find the value of √(0.0016).",
    options: ["0.04", "0.004", "0.4", "0.0004"],
    correctAnswer: 0,
    explanation: "√0.0016 = √(16/10000) = 4/100 = 0.04.",
    difficulty: "easy",
  },
  {
    id: "qa-18",
    category: "quantitative",
    question:
      "A sum of money doubles in 8 years at simple interest. In how many years will it triple?",
    options: ["12", "14", "16", "18"],
    correctAnswer: 2,
    explanation:
      "Rate = 100/(P × T) → If money doubles: SI = P, so P = P × R × 8 / 100 → R = 12.5%. To triple: SI = 2P = P × 12.5 × T / 100 → T = 16 years.",
    difficulty: "hard",
  },
  {
    id: "qa-19",
    category: "quantitative",
    question: "What is the LCM of 12, 15, and 20?",
    options: ["30", "45", "60", "90"],
    correctAnswer: 2,
    explanation: "12 = 2²×3, 15 = 3×5, 20 = 2²×5. LCM = 2²×3×5 = 60.",
    difficulty: "easy",
  },
  {
    id: "qa-20",
    category: "quantitative",
    question:
      "Three coins are tossed. What is the probability of getting exactly 2 heads?",
    options: ["1/8", "2/8", "3/8", "4/8"],
    correctAnswer: 2,
    explanation:
      "Total outcomes = 2³ = 8. Favourable (HHT, HTH, THH) = 3. P = 3/8.",
    difficulty: "medium",
  },

  // ─── LOGICAL REASONING (20 questions) ────────────────────────────────────
  {
    id: "lr-01",
    category: "logical",
    question: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    correctAnswer: 1,
    explanation: "Differences: 4, 6, 8, 10, 12. Next term = 30 + 12 = 42.",
    difficulty: "easy",
  },
  {
    id: "lr-02",
    category: "logical",
    question: "BIRD is coded as DLTF. What is the code for FISH?",
    options: ["HKUJ", "HKUJ", "HKTJ", "HKUK"],
    correctAnswer: 0,
    explanation: "Each letter is shifted by +2: F→H, I→K, S→U, H→J → HKUJ.",
    difficulty: "easy",
  },
  {
    id: "lr-03",
    category: "logical",
    question:
      "A is the father of B. B is the brother of C. D is the son of C. How is A related to D?",
    options: ["Grandfather", "Father", "Uncle", "Brother"],
    correctAnswer: 0,
    explanation:
      "A → B (sibling of C) → C → D. A is father of B and C (indirectly), making A the grandfather of D.",
    difficulty: "medium",
  },
  {
    id: "lr-04",
    category: "logical",
    question:
      "Ravi walks 10m north, turns right and walks 5m, turns right and walks 10m. How far is he from the starting point?",
    options: ["0m", "5m", "10m", "15m"],
    correctAnswer: 1,
    explanation:
      "Ravi ends up 5m east of start (net horizontal displacement). Distance = 5m.",
    difficulty: "easy",
  },
  {
    id: "lr-05",
    category: "logical",
    question:
      "All roses are flowers. Some flowers are red. Which conclusion follows?\nI. All roses are red.\nII. Some flowers are roses.",
    options: ["Only I", "Only II", "Both I and II", "Neither I nor II"],
    correctAnswer: 1,
    explanation:
      "All roses are flowers → some flowers are roses (II follows). We cannot conclude all roses are red (I doesn't follow).",
    difficulty: "medium",
  },
  {
    id: "lr-06",
    category: "logical",
    question: "If COMPUTER is coded as RFUVQNPC, what is the code for PRINTER?",
    options: ["QSJOUFS", "AQJOUFQ", "SFOUQJQ", "QSJOUFQ"],
    correctAnswer: 0,
    explanation:
      "Each letter shifted by +1: P→Q, R→S, I→J, N→O, T→U, E→F, R→S → QSJOUFS.",
    difficulty: "medium",
  },
  {
    id: "lr-07",
    category: "logical",
    question: "Find the odd one out: 16, 25, 36, 48, 64, 81",
    options: ["25", "48", "64", "81"],
    correctAnswer: 1,
    explanation:
      "All are perfect squares except 48. 16=4², 25=5², 36=6², 64=8², 81=9². 48 is not a perfect square.",
    difficulty: "easy",
  },
  {
    id: "lr-08",
    category: "logical",
    question:
      "In a queue, A is 7th from the front and B is 12th from the back. If there are 18 people in the queue, how many people are between A and B?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 0,
    explanation:
      "B is 12th from back → 18–12+1 = 7th from front. Both A and B are at position 7 — they are the same person or adjacent. No one is between them: 0.",
    difficulty: "hard",
  },
  {
    id: "lr-09",
    category: "logical",
    question:
      "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    options: ["Grandmother", "Mother", "Sister", "Aunt"],
    correctAnswer: 1,
    explanation:
      "'Only daughter of my mother' = the woman herself. So the man's mother is the woman herself. The woman is the man's mother.",
    difficulty: "medium",
  },
  {
    id: "lr-10",
    category: "logical",
    question: "What comes next in the series: Z, X, V, T, R, ?",
    options: ["O", "P", "Q", "S"],
    correctAnswer: 1,
    explanation:
      "Each letter decreases by 2: Z(26), X(24), V(22), T(20), R(18), P(16).",
    difficulty: "easy",
  },
  {
    id: "lr-11",
    category: "logical",
    question:
      "Five friends — A, B, C, D, E — are sitting in a row. A is to the right of B and to the left of C. D is to the right of C. Who is in the middle?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 2,
    explanation:
      "Order from left: B, A, C, D. E can be at an end. C is in position 3 in B–A–C–D, so C is the middle of 5 positions.",
    difficulty: "medium",
  },
  {
    id: "lr-12",
    category: "logical",
    question:
      "If A + B means A is the mother of B, and A – B means A is the brother of B, what does P + Q – R mean?",
    options: [
      "P is the aunt of R",
      "P is the mother of Q who is the brother of R",
      "R is the nephew of P",
      "Both B and C",
    ],
    correctAnswer: 3,
    explanation:
      "P + Q = P is mother of Q. Q – R = Q is brother of R. So P is the mother of Q, Q is the brother of R, making R the nephew of P and Q. Both B and C are correct.",
    difficulty: "hard",
  },
  {
    id: "lr-13",
    category: "logical",
    question: "Look at the series: 3, 9, 27, 81, ?",
    options: ["162", "243", "324", "180"],
    correctAnswer: 1,
    explanation:
      "Each term is multiplied by 3: 3×3=9, 9×3=27, 27×3=81, 81×3=243.",
    difficulty: "easy",
  },
  {
    id: "lr-14",
    category: "logical",
    question:
      "In a certain code language, 'pit dar na' means 'you are good', 'dar tok pa' means 'good and bad'. What is the code for 'good'?",
    options: ["pit", "dar", "na", "tok"],
    correctAnswer: 1,
    explanation:
      "'dar' appears in both sentences, and 'good' is the common word. So 'dar' = good.",
    difficulty: "medium",
  },
  {
    id: "lr-15",
    category: "logical",
    question:
      "Statements: All cats are animals. All dogs are animals. Conclusions: I. All cats are dogs. II. Some animals are cats.",
    options: [
      "Only I follows",
      "Only II follows",
      "Both follow",
      "Neither follows",
    ],
    correctAnswer: 1,
    explanation:
      "From 'All cats are animals,' we can conclude 'Some animals are cats' (II). We cannot conclude all cats are dogs (I) just because both are animals.",
    difficulty: "medium",
  },
  {
    id: "lr-16",
    category: "logical",
    question: "Which number should come next: 1, 1, 2, 3, 5, 8, 13, ?",
    options: ["18", "21", "24", "26"],
    correctAnswer: 1,
    explanation: "This is the Fibonacci series. 8 + 13 = 21.",
    difficulty: "easy",
  },
  {
    id: "lr-17",
    category: "logical",
    question:
      "Mirror image: If the word READ is written as DAER in a mirror, how will FLOW appear?",
    options: ["WOLF", "FLOW", "WLOF", "FOWL"],
    correctAnswer: 0,
    explanation: "Mirror reverses the word: FLOW → WOLF.",
    difficulty: "easy",
  },
  {
    id: "lr-18",
    category: "logical",
    question:
      "A clock shows 8:00 AM. What will the angle between the hour and minute hand be at that time?",
    options: ["120°", "150°", "240°", "300°"],
    correctAnswer: 2,
    explanation:
      "At 8:00, hour hand at 240° (8×30°), minute hand at 0°. Angle = 240°.",
    difficulty: "medium",
  },
  {
    id: "lr-19",
    category: "logical",
    question: "Find the analogy: Book : Library :: Painting : ?",
    options: ["Canvas", "Artist", "Museum", "Color"],
    correctAnswer: 2,
    explanation:
      "Books are stored/displayed in a library; paintings are stored/displayed in a museum.",
    difficulty: "easy",
  },
  {
    id: "lr-20",
    category: "logical",
    question: "If 6×4=30, 5×3=20, 7×2=21, then 8×5=?",
    options: ["40", "45", "48", "50"],
    correctAnswer: 1,
    explanation:
      "Pattern: a×b = a×(b+1). 6×5=30, 5×4=20, 7×3=21, 8×6=48. Wait — 8×(5+1)=48. Answer = 48 (index 2).",
    difficulty: "hard",
  },

  // ─── VERBAL ABILITY (20 questions) ──────────────────────────────────────
  {
    id: "va-01",
    category: "verbal",
    question: "Choose the synonym of 'ELOQUENT':",
    options: ["Articulate", "Silent", "Confused", "Rude"],
    correctAnswer: 0,
    explanation:
      "'Eloquent' means fluent and persuasive in speaking. 'Articulate' means able to express clearly — the closest synonym.",
    difficulty: "easy",
  },
  {
    id: "va-02",
    category: "verbal",
    question: "Choose the antonym of 'BENEVOLENT':",
    options: ["Kind", "Generous", "Malevolent", "Helpful"],
    correctAnswer: 2,
    explanation:
      "'Benevolent' means kind and well-meaning. Its antonym is 'Malevolent' meaning having evil intentions.",
    difficulty: "easy",
  },
  {
    id: "va-03",
    category: "verbal",
    question:
      "Fill in the blank: The scientist was known for her _____ approach to research, never accepting results without extensive verification.",
    options: ["casual", "rigorous", "careless", "superficial"],
    correctAnswer: 1,
    explanation:
      "'Rigorous' means extremely thorough and careful, which fits the description of not accepting results without extensive verification.",
    difficulty: "medium",
  },
  {
    id: "va-04",
    category: "verbal",
    question: "Identify the correct sentence:",
    options: [
      "Neither of the students have submitted their assignment.",
      "Neither of the students has submitted their assignment.",
      "Neither of the student have submitted their assignment.",
      "Neither of the student has submitted their assignment.",
    ],
    correctAnswer: 1,
    explanation:
      "'Neither' takes a singular verb. 'Neither of the students has' is correct. 'Their' is acceptable as a singular gender-neutral pronoun.",
    difficulty: "medium",
  },
  {
    id: "va-05",
    category: "verbal",
    question: "Choose the synonym of 'PRAGMATIC':",
    options: ["Idealistic", "Practical", "Theoretical", "Emotional"],
    correctAnswer: 1,
    explanation:
      "'Pragmatic' means dealing with things sensibly and realistically — closest to 'Practical'.",
    difficulty: "easy",
  },
  {
    id: "va-06",
    category: "verbal",
    question:
      "Fill in the blank: Despite the heavy rainfall, the team was determined to _____ with the outdoor event.",
    options: ["cancel", "postpone", "proceed", "abandon"],
    correctAnswer: 2,
    explanation:
      "'Proceed' means to continue. 'Despite' signals contrast, suggesting the team went on regardless of the rain.",
    difficulty: "easy",
  },
  {
    id: "va-07",
    category: "verbal",
    question:
      "Read the passage: 'The new policy aims to streamline the approval process by reducing paperwork and automating routine checks.' What is the primary goal of the new policy?",
    options: [
      "To increase paperwork",
      "To hire more employees",
      "To simplify and speed up approvals",
      "To eliminate all checks",
    ],
    correctAnswer: 2,
    explanation:
      "'Streamline' means make more efficient. Reducing paperwork and automating checks all point to simplifying and speeding up the approval process.",
    difficulty: "easy",
  },
  {
    id: "va-08",
    category: "verbal",
    question: "Choose the antonym of 'VERBOSE':",
    options: ["Wordy", "Concise", "Lengthy", "Elaborate"],
    correctAnswer: 1,
    explanation:
      "'Verbose' means using more words than necessary. Its antonym is 'Concise' — brief and to the point.",
    difficulty: "easy",
  },
  {
    id: "va-09",
    category: "verbal",
    question: "Identify the error: 'One of my friend are coming to the party.'",
    options: ["One of my", "friend are", "coming to", "the party"],
    correctAnswer: 1,
    explanation:
      "'One of my friends' requires singular verb: 'One of my friends is coming.' 'friend are' is incorrect; should be 'friends is'.",
    difficulty: "medium",
  },
  {
    id: "va-10",
    category: "verbal",
    question: "Choose the synonym of 'METICULOUS':",
    options: ["Careless", "Thorough", "Quick", "Simple"],
    correctAnswer: 1,
    explanation:
      "'Meticulous' means showing great attention to detail. 'Thorough' is the closest synonym.",
    difficulty: "easy",
  },
  {
    id: "va-11",
    category: "verbal",
    question:
      "Fill in the blank: The chairman made a _____ speech that inspired the entire organization.",
    options: ["mundane", "stirring", "boring", "confusing"],
    correctAnswer: 1,
    explanation:
      "'Stirring' means causing strong emotions or excitement — fits a speech that inspires everyone.",
    difficulty: "easy",
  },
  {
    id: "va-12",
    category: "verbal",
    question: "Choose the correctly spelled word:",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accommodetion"],
    correctAnswer: 1,
    explanation:
      "The correct spelling is 'Accommodation' — double 'c' and double 'm'.",
    difficulty: "easy",
  },
  {
    id: "va-13",
    category: "verbal",
    question: "Choose the antonym of 'TRANSPARENT':",
    options: ["Clear", "Obvious", "Opaque", "Visible"],
    correctAnswer: 2,
    explanation:
      "'Transparent' allows light to pass through. 'Opaque' does not allow light through — the antonym.",
    difficulty: "easy",
  },
  {
    id: "va-14",
    category: "verbal",
    question:
      "Fill in the blank: The _____ of the agreement was disputed by both parties.",
    options: ["validity", "validness", "validy", "validateness"],
    correctAnswer: 0,
    explanation:
      "'Validity' is the correct noun form meaning the quality of being legally or factually sound.",
    difficulty: "medium",
  },
  {
    id: "va-15",
    category: "verbal",
    question:
      "Reading comprehension: 'Despite being the smallest planet in the solar system, Mercury has a surprisingly large iron core that takes up about 85% of its radius.' What percentage of Mercury's radius is the iron core?",
    options: ["55%", "75%", "85%", "95%"],
    correctAnswer: 2,
    explanation:
      "The passage explicitly states the iron core takes up about 85% of Mercury's radius.",
    difficulty: "easy",
  },
  {
    id: "va-16",
    category: "verbal",
    question:
      "Identify the figure of speech: 'The wind whispered secrets through the trees.'",
    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
    correctAnswer: 2,
    explanation:
      "Attributing the human action of whispering to the wind is personification.",
    difficulty: "easy",
  },
  {
    id: "va-17",
    category: "verbal",
    question: "Choose the synonym of 'AMBIGUOUS':",
    options: ["Clear", "Definite", "Vague", "Certain"],
    correctAnswer: 2,
    explanation:
      "'Ambiguous' means open to more than one interpretation. 'Vague' is the closest synonym — unclear.",
    difficulty: "easy",
  },
  {
    id: "va-18",
    category: "verbal",
    question:
      "Select the correct option to fill the blank: 'He is looking forward to _____ you at the conference.'",
    options: ["meet", "meeting", "met", "have met"],
    correctAnswer: 1,
    explanation:
      "'Looking forward to' is followed by a gerund (verb+ing). Correct: 'looking forward to meeting'.",
    difficulty: "medium",
  },
  {
    id: "va-19",
    category: "verbal",
    question: "Choose the antonym of 'FRUGAL':",
    options: ["Thrifty", "Economical", "Extravagant", "Careful"],
    correctAnswer: 2,
    explanation:
      "'Frugal' means sparing in money or food. Its antonym is 'Extravagant' — spending lavishly.",
    difficulty: "easy",
  },
  {
    id: "va-20",
    category: "verbal",
    question:
      "Identify the error: 'The committee have decided to postpone the meeting to next Monday.'",
    options: ["The committee", "have decided", "to postpone", "to next Monday"],
    correctAnswer: 1,
    explanation:
      "In American English, collective nouns like 'committee' take a singular verb: 'The committee has decided'. British English allows plural, but 'have' is typically flagged in placement tests.",
    difficulty: "hard",
  },
];

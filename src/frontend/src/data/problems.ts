export interface CodingProblem {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  tags: string[];
  companies: string[];
  description: string;
  examples: Array<{ input: string; output: string; explanation: string }>;
  hints: string[];
  solution: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
  xpReward: number;
}

export const CODING_PROBLEMS: CodingProblem[] = [
  // ─── ARRAYS ───────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Arrays",
    tags: ["Array", "Hash Map"],
    companies: ["Google", "Amazon", "Meta"],
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "nums[0] + nums[1] = 2 + 7 = 9, so return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "nums[1] + nums[2] = 2 + 4 = 6.",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "nums[0] + nums[1] = 3 + 3 = 6.",
      },
    ],
    hints: [
      "Think about using a data structure that allows O(1) lookups.",
      "For each number, check if (target - number) exists somewhere earlier in the array.",
      "Use a hash map: store each value → index. For each nums[i], look up (target - nums[i]) in the map.",
    ],
    solution: `function twoSum(nums, target) {
  // Map stores value -> index for O(1) lookup
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // If complement already seen, we found our pair
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    explanation:
      "We iterate once through the array. For each element, we compute its complement (target - element) and check the hash map. If found, return both indices. Otherwise, add the current element and index to the map.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    xpReward: 50,
  },
  {
    id: 2,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "Arrays",
    tags: ["Array", "Greedy"],
    companies: ["Amazon", "Google"],
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transactions are done and the max profit = 0.",
      },
    ],
    hints: [
      "You need to find the largest difference where the larger number comes after the smaller number.",
      "Keep track of the minimum price seen so far as you scan left to right.",
      "At each step, compute profit = currentPrice - minPrice. Track the maximum of these profits.",
    ],
    solution: `function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    // Update minimum price seen so far
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      // Update max profit if selling today beats the record
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;
}`,
    explanation:
      "Single pass: maintain the minimum price encountered so far and at each step compute the potential profit if we sold today. Track the maximum profit seen.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
  {
    id: 3,
    title: "Product of Array Except Self",
    difficulty: "Medium",
    topic: "Arrays",
    tags: ["Array", "Prefix Product"],
    companies: ["Amazon", "Google", "Meta"],
    description:
      "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation:
          "answer[0]=2*3*4=24, answer[1]=1*3*4=12, answer[2]=1*2*4=8, answer[3]=1*2*3=6.",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
        explanation: "Product of all except self for each position.",
      },
    ],
    hints: [
      "The product except self equals (product of all elements to the left) * (product of all elements to the right).",
      "First compute a prefix product array, then a suffix product array, then multiply them.",
      "Optimize to O(1) extra space by computing prefix products in the output array, then applying suffix products in a second pass.",
    ],
    solution: `function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  // Forward pass: result[i] = product of all elements to the left of i
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  // Backward pass: multiply by product of all elements to the right of i
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
}`,
    explanation:
      "Two passes: first fill result with prefix products (product of everything left of index i), then multiply by suffix products (everything right of i) in reverse. No division needed.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 4,
    title: "Maximum Subarray",
    difficulty: "Medium",
    topic: "Arrays",
    tags: ["Array", "Dynamic Programming", "Kadane's Algorithm"],
    companies: ["Amazon", "Apple", "Microsoft"],
    description:
      "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "Single element array.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The entire array [5,4,-1,7,8] gives sum 23.",
      },
    ],
    hints: [
      "Think about what it means to 'extend' a subarray versus starting a new one.",
      "At each position, decide: is it better to extend the current subarray or start fresh?",
      "Kadane's: currentSum = max(nums[i], currentSum + nums[i]). Track global max.",
    ],
    solution: `function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // Either extend the current subarray or start new one here
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,
    explanation:
      "Kadane's algorithm: at each index, decide whether to extend the running subarray or restart. currentSum becomes the max of the current element alone or adding it to the running sum. Track the overall maximum.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 5,
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Arrays",
    tags: ["Array", "Binary Search"],
    companies: ["Amazon", "Microsoft"],
    description:
      "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.",
    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "1",
        explanation: "The original array was [1,2,3,4,5] rotated 3 times.",
      },
      {
        input: "nums = [4,5,6,7,0,1,2]",
        output: "0",
        explanation: "Rotated 4 times, minimum is 0.",
      },
      {
        input: "nums = [11,13,15,17]",
        output: "11",
        explanation: "No rotation, minimum is first element.",
      },
    ],
    hints: [
      "Binary search works because one half of the array is always sorted.",
      "If nums[mid] > nums[right], the minimum is in the right half. Otherwise it is in the left half (including mid).",
      "Narrow the search space by half each iteration until left == right.",
    ],
    solution: `function findMin(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // If mid element is greater than rightmost, min is in right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Min is in left half (including mid)
      right = mid;
    }
  }
  return nums[left];
}`,
    explanation:
      "Binary search: compare mid with right boundary. If nums[mid] > nums[right], the inflection point (minimum) is in the right half. Otherwise shrink to left half including mid. Converges to the minimum.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },

  // ─── STRINGS ──────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Valid Anagram",
    difficulty: "Easy",
    topic: "Strings",
    tags: ["String", "Hash Map", "Sorting"],
    companies: ["Amazon", "Google"],
    description:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
        explanation: "Both strings have the same character frequencies.",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
        explanation: "Different characters.",
      },
    ],
    hints: [
      "Two strings are anagrams if they contain the same characters with the same frequencies.",
      "Sort both strings and compare — O(n log n). Can you do better?",
      "Count character frequencies with a hash map (or array of size 26), increment for s and decrement for t, then check all zeros.",
    ],
    solution: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  // Use an array of 26 for lowercase letters
  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }
  return count.every(c => c === 0);
}`,
    explanation:
      "Use a frequency array of size 26. Increment for each character in s, decrement for each in t. If all counts are zero at the end, the strings are anagrams.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
  {
    id: 7,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    topic: "Strings",
    tags: ["String", "Dynamic Programming", "Expand From Center"],
    companies: ["Amazon", "Google", "Microsoft"],
    description:
      "Given a string s, return the longest palindromic substring in s.",
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: '"aba" is also a valid answer.',
      },
      {
        input: 's = "cbbd"',
        output: '"bb"',
        explanation: '"bb" is the longest palindrome.',
      },
    ],
    hints: [
      "A palindrome can be expanded outward from its center.",
      "Every palindrome has a center — either a single character (odd length) or two equal characters (even length).",
      "For each index, try expanding from both odd and even centers and track the longest palindrome found.",
    ],
    solution: `function longestPalindrome(s) {
  let start = 0, maxLen = 1;
  function expand(l, r) {
    // Expand as long as characters match
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxLen) {
        maxLen = r - l + 1;
        start = l;
      }
      l--;
      r++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expand(i, i);     // Odd-length palindromes
    expand(i, i + 1); // Even-length palindromes
  }
  return s.substring(start, start + maxLen);
}`,
    explanation:
      "Expand-from-center approach: for each position, try both odd and even center expansions. Track the start and length of the longest palindrome found.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 8,
    title: "Group Anagrams",
    difficulty: "Medium",
    topic: "Strings",
    tags: ["String", "Hash Map", "Sorting"],
    companies: ["Amazon", "Google", "Meta"],
    description:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
        explanation: "Anagram groups are identified by sorted form.",
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
        explanation: "Single empty string.",
      },
    ],
    hints: [
      "Two words are anagrams if they have the same sorted form.",
      "Use the sorted string as a key in a hash map, and group all anagrams under that key.",
      "Alternatively use a character count array as a key to avoid the O(k log k) sort.",
    ],
    solution: `function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    // Sort the string to create a canonical key
    const key = str.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
}`,
    explanation:
      "For each string, sort its characters to form a canonical key. Group all strings sharing the same key — they are anagrams of each other.",
    timeComplexity: "O(n * k log k) where k is max string length",
    spaceComplexity: "O(n * k)",
    xpReward: 75,
  },
  {
    id: 9,
    title: "Minimum Window Substring",
    difficulty: "Hard",
    topic: "Strings",
    tags: ["String", "Sliding Window", "Hash Map"],
    companies: ["Meta", "Amazon", "Google"],
    description:
      'Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".',
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation: 'The minimum window containing A, B, C is "BANC".',
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
        explanation: "Window is the whole string.",
      },
      {
        input: 's = "a", t = "aa"',
        output: '""',
        explanation: "Not enough a's in s.",
      },
    ],
    hints: [
      "Use two pointers (left, right) to form a sliding window over s.",
      "Expand right until the window contains all characters in t, then shrink left to minimize the window.",
      'Track character counts with two maps: one for what we need (t), one for what we have (window). Use a "formed" counter to know when the window is valid.',
    ],
    solution: `function minWindow(s, t) {
  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);
  let have = 0, required = need.size;
  const window = new Map();
  let res = '', resLen = Infinity;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    window.set(c, (window.get(c) || 0) + 1);
    // Check if this character's count in window meets the need
    if (need.has(c) && window.get(c) === need.get(c)) have++;
    // Shrink window from left when all characters are satisfied
    while (have === required) {
      if (r - l + 1 < resLen) {
        resLen = r - l + 1;
        res = s.slice(l, r + 1);
      }
      const lc = s[l];
      window.set(lc, window.get(lc) - 1);
      if (need.has(lc) && window.get(lc) < need.get(lc)) have--;
      l++;
    }
  }
  return res;
}`,
    explanation:
      'Sliding window: expand right to include all needed characters, then contract left to minimize the window size. Track satisfied character counts with a "have" counter compared to "required".',
    timeComplexity: "O(m + n)",
    spaceComplexity: "O(m + n)",
    xpReward: 150,
  },
  {
    id: 10,
    title: "Encode and Decode Strings",
    difficulty: "Medium",
    topic: "Strings",
    tags: ["String", "Design"],
    companies: ["Google", "Meta"],
    description:
      "Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and is decoded back to the original list of strings. Implement encode and decode functions.",
    examples: [
      {
        input: '["lint","code","love","you"]',
        output: '["lint","code","love","you"]',
        explanation: "Encode then decode returns the original list.",
      },
      {
        input: '["we","say",":","yes"]',
        output: '["we","say",":","yes"]',
        explanation: "Colons and special chars are handled correctly.",
      },
    ],
    hints: [
      "You cannot use a simple delimiter like comma because strings may contain it.",
      'Use a length-prefix approach: encode each string as "<length>#<string>".',
      'To decode, read until "#" to get the length, then read exactly that many characters.',
    ],
    solution: `function encode(strs) {
  // Prefix each string with its length followed by '#'
  return strs.map(s => s.length + '#' + s).join('');
}
function decode(str) {
  const result = [];
  let i = 0;
  while (i < str.length) {
    // Find the '#' delimiter for the length prefix
    let j = i;
    while (str[j] !== '#') j++;
    const len = parseInt(str.slice(i, j));
    result.push(str.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
  }
  return result;
}`,
    explanation:
      'Length-prefix encoding: prepend "<length>#" to each string. Decoding reads the length, then extracts exactly that many characters. Works with any character in the strings.',
    timeComplexity: "O(n) for both encode and decode",
    spaceComplexity: "O(n)",
    xpReward: 75,
  },

  // ─── TWO POINTERS ─────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Valid Palindrome",
    difficulty: "Easy",
    topic: "Two Pointers",
    tags: ["String", "Two Pointers"],
    companies: ["Meta", "Microsoft"],
    description:
      "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise.",
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
    ],
    hints: [
      "Use two pointers starting from both ends, moving inward.",
      "Skip non-alphanumeric characters as you move each pointer.",
      "Compare lowercased characters at both pointers; return false if they differ.",
    ],
    solution: `function isPalindrome(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    // Skip non-alphanumeric from left
    while (l < r && !/[a-zA-Z0-9]/.test(s[l])) l++;
    // Skip non-alphanumeric from right
    while (l < r && !/[a-zA-Z0-9]/.test(s[r])) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
}`,
    explanation:
      "Two pointers approach: skip non-alphanumeric characters and compare case-insensitively. If any pair mismatches, it is not a palindrome.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
  {
    id: 12,
    title: "Three Sum",
    difficulty: "Medium",
    topic: "Two Pointers",
    tags: ["Array", "Two Pointers", "Sorting"],
    companies: ["Google", "Amazon", "Meta"],
    description:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "These two triplets sum to zero.",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "No triplets sum to zero.",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
        explanation: "One triplet of zeros.",
      },
    ],
    hints: [
      "Sort the array first to enable two-pointer and easy duplicate skipping.",
      "Fix one element and use two pointers on the rest of the array to find pairs that sum to its negation.",
      "Skip duplicate values for the fixed element and both pointers to avoid duplicate triplets.",
    ],
    solution: `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate for fixed element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        // Skip duplicates for both pointers
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
}`,
    explanation:
      "Sort the array. For each element, use two pointers to find pairs that sum to its negation. Skip duplicates at every level to avoid repeated triplets.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 13,
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "Two Pointers",
    tags: ["Array", "Two Pointers", "Greedy"],
    companies: ["Amazon", "Google"],
    description:
      "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "Lines at index 1 and 8 with height min(8,7)=7, width=7. Area=49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
        explanation: "Only one container possible.",
      },
    ],
    hints: [
      "Start with the widest container (left=0, right=n-1).",
      "The area is limited by the shorter line. To potentially increase area, move the pointer at the shorter line inward.",
      "At each step: area = min(height[l], height[r]) * (r - l). Move the smaller side inward.",
    ],
    solution: `function maxArea(height) {
  let l = 0, r = height.length - 1;
  let max = 0;
  while (l < r) {
    // Area is limited by the shorter height
    const area = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(max, area);
    // Move the pointer at the shorter line
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
}`,
    explanation:
      "Two pointers from both ends. Compute current area and update max. Move the pointer with the shorter height inward — the wider width cannot compensate for the short side, so we hope for a taller line.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 14,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topic: "Two Pointers",
    tags: ["Array", "Two Pointers", "Dynamic Programming", "Stack"],
    companies: ["Google", "Amazon", "Microsoft"],
    description:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The above elevation map traps 6 units of water.",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
        explanation: "9 units trapped.",
      },
    ],
    hints: [
      "Water above position i = min(maxLeft[i], maxRight[i]) - height[i] (if positive).",
      "Precompute maxLeft and maxRight arrays, then sum up the water.",
      "Two-pointer optimization: maintain leftMax and rightMax. If leftMax < rightMax, process left pointer; otherwise process right.",
    ],
    solution: `function trap(height) {
  let l = 0, r = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;
  while (l < r) {
    if (leftMax < rightMax) {
      // Left side is the bottleneck
      leftMax = Math.max(leftMax, height[l]);
      water += leftMax - height[l];
      l++;
    } else {
      // Right side is the bottleneck
      rightMax = Math.max(rightMax, height[r]);
      water += rightMax - height[r];
      r--;
    }
  }
  return water;
}`,
    explanation:
      "Two pointers with max tracking: whichever side has the smaller max constrains the water at that position. Process that side, adding water = max - height[i].",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 150,
  },
  {
    id: 15,
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    topic: "Two Pointers",
    tags: ["Array", "Two Pointers"],
    companies: ["Microsoft", "Amazon"],
    description:
      "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the number of unique elements k.",
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2, nums = [1,2,_]",
        explanation: "Return 2, with first two elements being 1 and 2.",
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5, nums = [0,1,2,3,4,_,_,_,_,_]",
        explanation: "Return 5, first five elements are unique.",
      },
    ],
    hints: [
      "Use two pointers: a slow pointer for the position to write next, and a fast pointer to scan.",
      "When fast pointer finds a new unique value (different from slow), copy it to the slow pointer position.",
      "Slow pointer tracks the count of unique elements found.",
    ],
    solution: `function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0; // Position to write the next unique element
  for (let fast = 1; fast < nums.length; fast++) {
    // Found a new unique element
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1; // Number of unique elements
}`,
    explanation:
      "Slow pointer marks the boundary of unique elements. Fast pointer scans ahead; whenever it finds a value different from slow, it writes it at slow+1.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },

  // ─── SLIDING WINDOW ───────────────────────────────────────────────────────
  {
    id: 16,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "Sliding Window",
    tags: ["String", "Sliding Window", "Hash Map"],
    companies: ["Amazon", "Google", "Meta"],
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation:
          '"abc" is the longest substring without repeating characters.',
      },
      { input: 's = "bbbbb"', output: "1", explanation: '"b" is the longest.' },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: '"wke" is the longest.',
      },
    ],
    hints: [
      "Use a sliding window with a set to track characters in the current window.",
      "Expand the window by adding characters from the right. If a duplicate is found, shrink from the left.",
      "Alternatively, store the last seen index of each character in a map to jump the left pointer directly.",
    ],
    solution: `function lengthOfLongestSubstring(s) {
  const map = new Map(); // char -> last seen index
  let max = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    // If char was seen and is inside the current window, shrink from left
    if (map.has(c) && map.get(c) >= left) {
      left = map.get(c) + 1;
    }
    map.set(c, right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}`,
    explanation:
      "Sliding window with a hash map of last seen positions. When a duplicate is found within the window, jump left pointer past the previous occurrence. Track max window size.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(n, alphabet))",
    xpReward: 75,
  },
  {
    id: 17,
    title: "Best Time to Buy and Sell Stock II",
    difficulty: "Medium",
    topic: "Sliding Window",
    tags: ["Array", "Greedy"],
    companies: ["Amazon"],
    description:
      "You are given an integer array prices where prices[i] is the price of a given stock on the ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day. Find and return the maximum profit you can achieve.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "7",
        explanation:
          "Buy on day 2 (1), sell day 3 (5), profit 4. Buy day 4 (3), sell day 5 (6), profit 3. Total = 7.",
      },
      {
        input: "prices = [1,2,3,4,5]",
        output: "4",
        explanation: "Buy day 1, sell day 5. Or buy/sell each day: total 4.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "Prices only fall, no profit possible.",
      },
    ],
    hints: [
      "You can make multiple transactions. Think about capturing every upward movement.",
      "If prices[i] > prices[i-1], you would have bought at i-1 and sold at i.",
      "Greedy: sum up all positive consecutive differences.",
    ],
    solution: `function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // Capture every upward price movement
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}`,
    explanation:
      "Greedy approach: add every positive daily gain. This is equivalent to buying and selling at every local minimum/maximum. The sum of all upward steps equals the total profit from an optimal strategy.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 18,
    title: "Permutation in String",
    difficulty: "Medium",
    topic: "Sliding Window",
    tags: ["String", "Sliding Window", "Hash Map"],
    companies: ["Google", "Amazon", "Microsoft"],
    description:
      "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1's permutations is the substring of s2.",
    examples: [
      {
        input: 's1 = "ab", s2 = "eidbaooo"',
        output: "true",
        explanation: '"ba" is a permutation of "ab" and is a substring of s2.',
      },
      {
        input: 's1 = "ab", s2 = "eidboaoo"',
        output: "false",
        explanation: "No permutation of s1 is a substring of s2.",
      },
    ],
    hints: [
      "A permutation has the same character frequencies. Use a fixed-size sliding window of length s1.length.",
      "Maintain a frequency map of the current window in s2 and compare with s1's frequency map.",
      'Use a count of "matched" characters to check if all 26 character counts match efficiently.',
    ],
    solution: `function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  const need = new Array(26).fill(0);
  const window = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (const c of s1) need[c.charCodeAt(0) - a]++;
  let matches = 0;
  for (let i = 0; i < 26; i++) if (need[i] === 0) matches++;
  for (let r = 0; r < s2.length; r++) {
    const ci = s2.charCodeAt(r) - a;
    window[ci]++;
    if (window[ci] === need[ci]) matches++;
    else if (window[ci] === need[ci] + 1) matches--;
    // Remove leftmost character when window exceeds s1 length
    if (r >= s1.length) {
      const li = s2.charCodeAt(r - s1.length) - a;
      window[li]--;
      if (window[li] === need[li]) matches++;
      else if (window[li] === need[li] - 1) matches--;
    }
    if (matches === 26) return true;
  }
  return false;
}`,
    explanation:
      'Fixed-size sliding window equal to s1.length. Track character frequency differences. A "matches" counter checks how many of the 26 characters have the same count in window and need.',
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 19,
    title: "Minimum Size Subarray Sum",
    difficulty: "Medium",
    topic: "Sliding Window",
    tags: ["Array", "Sliding Window", "Binary Search"],
    companies: ["Amazon", "Google"],
    description:
      "Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.",
    examples: [
      {
        input: "target = 7, nums = [2,3,1,2,4,3]",
        output: "2",
        explanation: "Subarray [4,3] has the minimal length with sum >= 7.",
      },
      {
        input: "target = 4, nums = [1,4,4]",
        output: "1",
        explanation: "[4] satisfies the condition.",
      },
      {
        input: "target = 11, nums = [1,1,1,1,1,1,1,1]",
        output: "0",
        explanation: "No subarray sums to 11.",
      },
    ],
    hints: [
      "Use a variable-size sliding window. Expand by moving right, shrink by moving left.",
      "When the current sum >= target, try to minimize the window by moving left.",
      "Track the minimum window length each time the sum condition is satisfied.",
    ],
    solution: `function minSubArrayLen(target, nums) {
  let left = 0, sum = 0, minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    // Shrink window from left while sum condition is satisfied
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}`,
    explanation:
      "Variable-size sliding window: add elements on right, shrink from left while sum >= target, updating the minimum length each time.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 20,
    title: "Fruits Into Baskets",
    difficulty: "Medium",
    topic: "Sliding Window",
    tags: ["Array", "Sliding Window", "Hash Map"],
    companies: ["Amazon", "Google"],
    description:
      "You are visiting a farm that has a single row of fruit trees. You will be given two baskets, and your goal is to pick as much fruit as possible. With the following rules: You only have two baskets, and each basket can only hold a single type of fruit. Starting from any tree, you must pick exactly one fruit from every tree while moving to the right. You must stop once you reach a tree with fruit that cannot fit in your basket. Return the maximum number of fruits you can pick.",
    examples: [
      {
        input: "fruits = [1,2,1]",
        output: "3",
        explanation: "We can pick from all trees.",
      },
      {
        input: "fruits = [0,1,2,2]",
        output: "3",
        explanation: "We can pick fruits [1,2,2] from index 1 to 3.",
      },
      {
        input: "fruits = [1,2,3,2,2]",
        output: "4",
        explanation: "We can pick fruits [2,3,2,2] from index 1 to 4.",
      },
    ],
    hints: [
      "This is equivalent to: find the longest subarray with at most 2 distinct values.",
      "Use a sliding window with a hash map tracking counts of each fruit type in the window.",
      "When the window has more than 2 distinct types, shrink from the left until valid again.",
    ],
    solution: `function totalFruit(fruits) {
  const basket = new Map();
  let left = 0, max = 0;
  for (let right = 0; right < fruits.length; right++) {
    const f = fruits[right];
    basket.set(f, (basket.get(f) || 0) + 1);
    // Shrink window when more than 2 distinct fruit types
    while (basket.size > 2) {
      const lf = fruits[left];
      basket.set(lf, basket.get(lf) - 1);
      if (basket.get(lf) === 0) basket.delete(lf);
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}`,
    explanation:
      "Longest subarray with at most 2 distinct elements. Sliding window with a frequency map. Shrink from left when the map has more than 2 keys.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },

  // ─── STACKS ───────────────────────────────────────────────────────────────
  {
    id: 21,
    title: "Valid Parentheses",
    difficulty: "Easy",
    topic: "Stacks",
    tags: ["String", "Stack"],
    companies: ["Google", "Amazon", "Meta"],
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "Single matching pair.",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "Three matching pairs.",
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "Mismatched brackets.",
      },
    ],
    hints: [
      "Use a stack to track open brackets.",
      "When you see a closing bracket, check if the top of the stack is the matching opening bracket.",
      "At the end, the stack should be empty for a valid string.",
    ],
    solution: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const c of s) {
    if (c in map) {
      // Close bracket: check if top matches
      if (stack.pop() !== map[c]) return false;
    } else {
      // Open bracket: push to stack
      stack.push(c);
    }
  }
  return stack.length === 0;
}`,
    explanation:
      "Stack-based matching: push open brackets, pop and verify on close brackets. Valid if stack is empty at the end.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    xpReward: 50,
  },
  {
    id: 22,
    title: "Daily Temperatures",
    difficulty: "Medium",
    topic: "Stacks",
    tags: ["Array", "Stack", "Monotonic Stack"],
    companies: ["Amazon", "Google"],
    description:
      "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
        explanation: "For day 0 (73), day 1 is warmer (+1 day).",
      },
      {
        input: "temperatures = [30,40,50,60]",
        output: "[1,1,1,0]",
        explanation: "Each day is warmer than the previous.",
      },
    ],
    hints: [
      "We need to find, for each day, the next greater element's index.",
      "Use a monotonic decreasing stack of indices. When a warmer day is found, pop and compute the difference.",
      "Push index i onto the stack. When temperatures[i] > temperatures[stack.top()], resolve the top.",
    ],
    solution: `function dailyTemperatures(temps) {
  const n = temps.length;
  const result = new Array(n).fill(0);
  const stack = []; // Indices of days with unresolved warmer day
  for (let i = 0; i < n; i++) {
    // Pop all days that found their warmer day today
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  return result;
}`,
    explanation:
      "Monotonic stack: maintain a stack of indices whose warmer day has not been found yet. When the current temperature is warmer than the stack top, pop and record the difference.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    xpReward: 75,
  },
  {
    id: 23,
    title: "Car Fleet",
    difficulty: "Medium",
    topic: "Stacks",
    tags: ["Array", "Stack", "Sorting"],
    companies: ["Google"],
    description:
      "There are n cars going to the same destination along a one-lane road. The destination is target miles away. You are given two integer arrays position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour). A car fleet is a non-empty set of cars driving at the same speed. Return the number of car fleets that will arrive at the destination.",
    examples: [
      {
        input: "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
        output: "3",
        explanation: "3 car fleets arrive at destination.",
      },
      {
        input: "target = 10, position = [3], speed = [3]",
        output: "1",
        explanation: "One fleet.",
      },
    ],
    hints: [
      "Sort cars by starting position in descending order (closest to target first).",
      "Calculate time to reach target for each car: (target - position) / speed.",
      "A car catches up to the fleet ahead if its time is <= the fleet's time. Use a stack to track fleet arrival times.",
    ],
    solution: `function carFleet(target, position, speed) {
  const cars = position.map((p, i) => [p, speed[i]]);
  // Sort by position descending (closest to target first)
  cars.sort((a, b) => b[0] - a[0]);
  const stack = [];
  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;
    // Only form a new fleet if this car arrives later than the one ahead
    if (!stack.length || time > stack[stack.length - 1]) {
      stack.push(time);
    }
  }
  return stack.length;
}`,
    explanation:
      "Sort by position descending. Compute arrival time for each car. A car merges with the fleet ahead if its time <= the fleet's time (it catches up). Track distinct arrival times on a stack.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    xpReward: 75,
  },
  {
    id: 24,
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    topic: "Stacks",
    tags: ["Array", "Stack", "Monotonic Stack"],
    companies: ["Amazon", "Google", "Microsoft"],
    description:
      "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    examples: [
      {
        input: "heights = [2,1,5,6,2,3]",
        output: "10",
        explanation:
          "The largest rectangle spans bars 5 and 6, area = 2 * 5 = 10.",
      },
      {
        input: "heights = [2,4]",
        output: "4",
        explanation: "Single bar of height 4.",
      },
    ],
    hints: [
      "For each bar, the maximum rectangle using it as the shortest bar extends left and right to the first shorter bar.",
      "Use a monotonic increasing stack of indices. When a shorter bar is found, pop and calculate the rectangle.",
      "When popping index mid, width = current_index - stack.top() - 1 (or current_index if stack is empty).",
    ],
    solution: `function largestRectangleArea(heights) {
  const stack = []; // Monotonic increasing stack of indices
  let max = 0;
  const n = heights.length;
  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : heights[i];
    // Pop all bars taller than current
    while (stack.length && heights[stack[stack.length - 1]] > h) {
      const height = heights[stack.pop()];
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      max = Math.max(max, height * width);
    }
    stack.push(i);
  }
  return max;
}`,
    explanation:
      "Monotonic increasing stack. For each bar that is shorter than the stack top, pop the top and compute area: height = popped bar, width extends to current index - new top - 1.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    xpReward: 150,
  },
  {
    id: 25,
    title: "Min Stack",
    difficulty: "Easy",
    topic: "Stacks",
    tags: ["Stack", "Design"],
    companies: ["Amazon", "Google", "Microsoft"],
    description:
      "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class with methods: push(val), pop(), top(), and getMin().",
    examples: [
      {
        input:
          '["MinStack","push","push","push","getMin","pop","top","getMin"] [[],[-2],[0],[-3],[],[],[],[]]',
        output: "[null,null,null,null,-3,null,0,-2]",
        explanation: "Tracking min through pushes and pops.",
      },
    ],
    hints: [
      "A single stack cannot track minimums through pops efficiently.",
      "Use an auxiliary stack that tracks the current minimum at each level.",
      "When pushing x, push min(x, minStack.top()) onto the min stack. Pop both stacks together.",
    ],
    solution: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Tracks min at each stack level
  }
  push(val) {
    this.stack.push(val);
    // Push the new minimum
    const min = this.minStack.length
      ? Math.min(val, this.minStack[this.minStack.length - 1])
      : val;
    this.minStack.push(min);
  }
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`,
    explanation:
      "Parallel min stack: for each push, store the current minimum at this stack depth. Both stacks are always the same size. getMin() is always O(1).",
    timeComplexity: "O(1) for all operations",
    spaceComplexity: "O(n)",
    xpReward: 50,
  },

  // ─── TREES ────────────────────────────────────────────────────────────────
  {
    id: 26,
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "Trees",
    tags: ["Tree", "DFS", "BFS", "Recursion"],
    companies: ["Amazon", "Google", "Meta"],
    description:
      "Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
        explanation: "The tree has depth 3.",
      },
      {
        input: "root = [1,null,2]",
        output: "2",
        explanation: "Only right child, depth 2.",
      },
    ],
    hints: [
      "Think recursively: the depth of a tree is 1 + max(depth of left, depth of right).",
      "Base case: null node returns depth 0.",
      "Alternatively, use BFS level-order traversal and count levels.",
    ],
    solution: `function maxDepth(root) {
  // Base case: empty tree
  if (!root) return 0;
  // Depth is 1 (current node) plus max of children depths
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`,
    explanation:
      "Recursive DFS: base case is null → 0. For each node, return 1 + max of left and right subtree depths.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h) where h is tree height",
    xpReward: 50,
  },
  {
    id: 27,
    title: "Invert Binary Tree",
    difficulty: "Easy",
    topic: "Trees",
    tags: ["Tree", "DFS", "BFS", "Recursion"],
    companies: ["Google", "Amazon"],
    description:
      "Given the root of a binary tree, invert the tree, and return its root.",
    examples: [
      {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]",
        explanation: "Mirror image of the original tree.",
      },
      {
        input: "root = [2,1,3]",
        output: "[2,3,1]",
        explanation: "Swap left and right children.",
      },
    ],
    hints: [
      "Swap the left and right children of each node.",
      "Recursively invert both subtrees.",
      "Post-order traversal works well: invert children first, then swap.",
    ],
    solution: `function invertTree(root) {
  if (!root) return null;
  // Swap left and right children
  [root.left, root.right] = [root.right, root.left];
  // Recursively invert subtrees
  invertTree(root.left);
  invertTree(root.right);
  return root;
}`,
    explanation:
      "Recursively swap the left and right children of every node. Base case is null node. Works top-down (pre-order) or bottom-up (post-order).",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    xpReward: 50,
  },
  {
    id: 28,
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    topic: "Trees",
    tags: ["Tree", "DFS", "BST"],
    companies: ["Amazon", "Google", "Microsoft"],
    description:
      "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as: the left subtree of a node contains only nodes with keys less than the node's key, the right subtree only keys greater, and both subtrees are also BSTs.",
    examples: [
      {
        input: "root = [2,1,3]",
        output: "true",
        explanation: "Valid BST: 1 < 2 < 3.",
      },
      {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
        explanation:
          "Node 4 is in the right subtree of 5, but 4 < 5, violating BST property.",
      },
    ],
    hints: [
      "Each node must be greater than all nodes in its left subtree and less than all in its right subtree.",
      "Pass valid range (min, max) down the recursion: left child must be < node.val, right child must be > node.val.",
      "Start with (-Infinity, +Infinity) at the root.",
    ],
    solution: `function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  // Current node must be within (min, max) bounds
  if (root.val <= min || root.val >= max) return false;
  // Left subtree: max bound becomes current value
  // Right subtree: min bound becomes current value
  return isValidBST(root.left, min, root.val) &&
         isValidBST(root.right, root.val, max);
}`,
    explanation:
      "Recursive bounds check: each node receives a valid range (min, max). Left children must have max = parent.val; right children must have min = parent.val.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    xpReward: 75,
  },
  {
    id: 29,
    title: "Lowest Common Ancestor of a BST",
    difficulty: "Easy",
    topic: "Trees",
    tags: ["Tree", "BST", "DFS"],
    companies: ["Amazon", "Meta", "Microsoft"],
    description:
      "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST. The LCA is defined between two nodes p and q as the lowest node in the tree that has both p and q as descendants (where we allow a node to be a descendant of itself).",
    examples: [
      {
        input: "root = [6,2,8,0,4,7,9], p = 2, q = 8",
        output: "6",
        explanation: "LCA of 2 and 8 is 6 (the root).",
      },
      {
        input: "root = [6,2,8,0,4,7,9], p = 2, q = 4",
        output: "2",
        explanation: "LCA of 2 and 4 is 2 (2 is ancestor of 4).",
      },
    ],
    hints: [
      "Use BST properties: if both p and q are less than root, LCA is in the left subtree.",
      "If both are greater than root, LCA is in the right subtree.",
      "If they split (one ≤ root ≤ other), the current root is the LCA.",
    ],
    solution: `function lowestCommonAncestor(root, p, q) {
  // Both values smaller: LCA is in left subtree
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // Both values larger: LCA is in right subtree
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  // Values split (or one equals root): current node is LCA
  return root;
}`,
    explanation:
      "BST property: navigate left if both values < root, right if both > root. When they diverge or one equals root, the current node is the LCA.",
    timeComplexity: "O(h)",
    spaceComplexity: "O(h)",
    xpReward: 50,
  },
  {
    id: 30,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    topic: "Trees",
    tags: ["Tree", "BFS", "Queue"],
    companies: ["Amazon", "Google", "Meta"],
    description:
      "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation: "Three levels, each collected into a subarray.",
      },
      { input: "root = [1]", output: "[[1]]", explanation: "Single node." },
    ],
    hints: [
      "Use BFS with a queue. Process all nodes at one level before moving to the next.",
      "Track the number of nodes at each level (queue size at the start of each level).",
      "For each level, dequeue all nodes and enqueue their children.",
    ],
    solution: `function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}`,
    explanation:
      "BFS with a queue. At the start of each iteration, record the queue size (= nodes at current level). Process exactly that many nodes, enqueue their children, then move to next level.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    xpReward: 75,
  },

  // ─── GRAPHS ───────────────────────────────────────────────────────────────
  {
    id: 31,
    title: "Number of Islands",
    difficulty: "Medium",
    topic: "Graphs",
    tags: ["Array", "DFS", "BFS", "Union Find"],
    companies: ["Amazon", "Google", "Meta"],
    description:
      "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    examples: [
      {
        input:
          'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
        explanation: "All land cells are connected, forming one island.",
      },
      {
        input:
          'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
        explanation: "Three separate islands.",
      },
    ],
    hints: [
      "Iterate through all cells. When you find a '1', it is a new island. Increment count.",
      "Use DFS/BFS to mark all connected '1's as visited (e.g., set to '0') to avoid counting them again.",
      "DFS: recursively visit all 4 neighbors (up, down, left, right) of land cells.",
    ],
    solution: `function numIslands(grid) {
  let count = 0;
  function dfs(r, c) {
    // Out of bounds or water: stop
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== '1') return;
    grid[r][c] = '0'; // Mark as visited
    dfs(r + 1, c); dfs(r - 1, c);
    dfs(r, c + 1); dfs(r, c - 1);
  }
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c); // Flood-fill the entire island
      }
    }
  }
  return count;
}`,
    explanation:
      "DFS flood-fill: for each unvisited land cell, increment count and DFS to mark the entire island as visited. Total DFS calls = number of islands.",
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n) recursion stack",
    xpReward: 75,
  },
  {
    id: 32,
    title: "Clone Graph",
    difficulty: "Medium",
    topic: "Graphs",
    tags: ["Graph", "DFS", "BFS", "Hash Map"],
    companies: ["Google", "Meta", "Amazon"],
    description:
      "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node contains a value (int) and a list of its neighbors.",
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
        explanation: "Deep copy preserves the same structure.",
      },
      {
        input: "adjList = [[]]",
        output: "[[]]",
        explanation: "Single node with no neighbors.",
      },
    ],
    hints: [
      "Use DFS or BFS. Keep a visited map of original node → cloned node.",
      "When visiting a node: if already cloned, return the clone. Otherwise create a new node and clone its neighbors.",
      "The visited map prevents infinite loops in cyclic graphs.",
    ],
    solution: `function cloneGraph(node) {
  if (!node) return null;
  const visited = new Map(); // original node -> cloned node
  function dfs(n) {
    if (visited.has(n)) return visited.get(n);
    const clone = { val: n.val, neighbors: [] };
    visited.set(n, clone);
    for (const neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }
  return dfs(node);
}`,
    explanation:
      "DFS with a visited map. Create clone before visiting neighbors to handle cycles. Each node is cloned exactly once.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    xpReward: 75,
  },
  {
    id: 33,
    title: "Course Schedule",
    difficulty: "Medium",
    topic: "Graphs",
    tags: ["Graph", "DFS", "Topological Sort", "Cycle Detection"],
    companies: ["Google", "Meta", "Amazon"],
    description:
      "There are numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses, otherwise return false.",
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation: "Take course 0 then course 1.",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
        explanation: "Cycle: 0 depends on 1 and 1 depends on 0.",
      },
    ],
    hints: [
      "Model the problem as a directed graph. A cycle means you cannot complete all courses.",
      "Use DFS cycle detection with 3 states: unvisited, visiting (in current path), visited.",
      'If DFS reaches a "visiting" node, a cycle exists.',
    ],
    solution: `function canFinish(numCourses, prerequisites) {
  const adj = Array.from({length: numCourses}, () => []);
  for (const [a, b] of prerequisites) adj[b].push(a);
  // 0=unvisited, 1=visiting, 2=done
  const state = new Array(numCourses).fill(0);
  function dfs(node) {
    if (state[node] === 1) return false; // Cycle found
    if (state[node] === 2) return true;  // Already processed
    state[node] = 1; // Mark as visiting
    for (const next of adj[node]) {
      if (!dfs(next)) return false;
    }
    state[node] = 2; // Mark as done
    return true;
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
}`,
    explanation:
      'DFS with 3-color cycle detection on a directed graph. If DFS revisits a "visiting" node, a cycle exists (cannot finish courses). Process all nodes in case the graph is disconnected.',
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V + E)",
    xpReward: 75,
  },
  {
    id: 34,
    title: "Pacific Atlantic Water Flow",
    difficulty: "Medium",
    topic: "Graphs",
    tags: ["Array", "DFS", "BFS", "Matrix"],
    companies: ["Google", "Amazon"],
    description:
      "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. Rain water can flow to neighboring cells (up, down, left, right) if the neighboring cell's height is less than or equal to the current cell's height. Return a list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.",
    examples: [
      {
        input:
          "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
        explanation: "Cells that can reach both oceans.",
      },
    ],
    hints: [
      "Instead of simulating water flowing forward, do reverse BFS/DFS from each ocean.",
      "Pacific: top row + left column. Atlantic: bottom row + right column.",
      "A cell is in the answer if it can be reached from both oceans (reverse flow means going uphill or equal).",
    ],
    solution: `function pacificAtlantic(heights) {
  const m = heights.length, n = heights[0].length;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  function bfs(starts) {
    const visited = Array.from({length: m}, () => new Array(n).fill(false));
    const queue = [...starts];
    for (const [r, c] of starts) visited[r][c] = true;
    while (queue.length) {
      const [r, c] = queue.shift();
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n
            && !visited[nr][nc] && heights[nr][nc] >= heights[r][c]) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }
    return visited;
  }
  const pacific = [];
  const atlantic = [];
  for (let r = 0; r < m; r++) { pacific.push([r, 0]); atlantic.push([r, n-1]); }
  for (let c = 0; c < n; c++) { pacific.push([0, c]); atlantic.push([m-1, c]); }
  const pReach = bfs(pacific);
  const aReach = bfs(atlantic);
  const result = [];
  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++)
      if (pReach[r][c] && aReach[r][c]) result.push([r, c]);
  return result;
}`,
    explanation:
      "Reverse BFS from ocean borders: cells reachable from Pacific start (top/left edges), cells reachable from Atlantic start (bottom/right edges). Intersection is the answer.",
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
    xpReward: 75,
  },
  {
    id: 35,
    title: "Rotting Oranges",
    difficulty: "Medium",
    topic: "Graphs",
    tags: ["Array", "BFS", "Matrix"],
    companies: ["Amazon", "Google", "Microsoft"],
    description:
      "You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), 2 (rotten orange). Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
    examples: [
      {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4",
        explanation: "Takes 4 minutes for all oranges to rot.",
      },
      {
        input: "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        output: "-1",
        explanation: "Bottom-left orange is isolated and never rots.",
      },
      {
        input: "grid = [[0,2]]",
        output: "0",
        explanation: "No fresh oranges from the start.",
      },
    ],
    hints: [
      "Use multi-source BFS starting from all rotten oranges simultaneously.",
      "Count fresh oranges. Each BFS wave rots adjacent fresh oranges.",
      "Track the number of minutes (BFS levels). Return -1 if fresh oranges remain.",
    ],
    solution: `function orangesRotting(grid) {
  const m = grid.length, n = grid[0].length;
  const queue = [];
  let fresh = 0;
  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      if (grid[r][c] === 1) fresh++;
    }
  if (fresh === 0) return 0;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let minutes = 0;
  while (queue.length && fresh > 0) {
    minutes++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift();
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          fresh--;
          queue.push([nr, nc]);
        }
      }
    }
  }
  return fresh === 0 ? minutes : -1;
}`,
    explanation:
      "Multi-source BFS: all rotten oranges start together. Each minute (BFS level) spreads rot to adjacent fresh oranges. Return minutes elapsed; -1 if any fresh remain.",
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
    xpReward: 75,
  },

  // ─── DYNAMIC PROGRAMMING ──────────────────────────────────────────────────
  {
    id: 36,
    title: "Climbing Stairs",
    difficulty: "Easy",
    topic: "Dynamic Programming",
    tags: ["Dynamic Programming", "Math", "Memoization"],
    companies: ["Amazon", "Google", "Apple"],
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [
      { input: "n = 2", output: "2", explanation: "1+1 or 2. Two ways." },
      {
        input: "n = 3",
        output: "3",
        explanation: "1+1+1, 1+2, 2+1. Three ways.",
      },
    ],
    hints: [
      "Think about how you arrive at step n: either from step n-1 (1 step) or step n-2 (2 steps).",
      "dp[n] = dp[n-1] + dp[n-2]. This is the Fibonacci sequence.",
      "Optimize to O(1) space by tracking only the last two values.",
    ],
    solution: `function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`,
    explanation:
      "Fibonacci DP: ways to reach step i = ways to reach i-1 + ways to reach i-2. Optimize space by keeping only two previous values.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
  {
    id: 37,
    title: "House Robber",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    tags: ["Array", "Dynamic Programming"],
    companies: ["Amazon", "Google", "Microsoft"],
    description:
      "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
        explanation: "Rob house 1 (1) and house 3 (3). Total = 4.",
      },
      {
        input: "nums = [2,7,9,3,1]",
        output: "12",
        explanation: "Rob house 1 (2), house 3 (9), house 5 (1). Total = 12.",
      },
    ],
    hints: [
      "At each house, decide: rob it (plus max from i-2) or skip it (max from i-1).",
      "dp[i] = max(dp[i-1], dp[i-2] + nums[i]).",
      "Optimize to O(1) space with two variables.",
    ],
    solution: `function rob(nums) {
  let prev2 = 0, prev1 = 0;
  for (const num of nums) {
    const curr = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`,
    explanation:
      "1D DP: at each house, the optimal is max(skip this house, rob this house + best from two houses ago). Space-optimized to two variables.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 75,
  },
  {
    id: 38,
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    tags: ["String", "Dynamic Programming"],
    companies: ["Google", "Amazon", "Microsoft"],
    description:
      "Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is a sequence that appears in the same relative order but not necessarily contiguous.",
    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
        explanation: 'LCS is "ace", length 3.',
      },
      {
        input: 'text1 = "abc", text2 = "abc"',
        output: "3",
        explanation: "LCS is the entire string.",
      },
      {
        input: 'text1 = "abc", text2 = "def"',
        output: "0",
        explanation: "No common characters.",
      },
    ],
    hints: [
      "Build a 2D DP table where dp[i][j] = LCS length for text1[0..i-1] and text2[0..j-1].",
      "If text1[i-1] === text2[j-1], dp[i][j] = 1 + dp[i-1][j-1].",
      "Otherwise dp[i][j] = max(dp[i-1][j], dp[i][j-1]).",
    ],
    solution: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  // dp[i][j] = LCS length for text1[0..i-1] and text2[0..j-1]
  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}`,
    explanation:
      "2D DP table: if characters match, extend the LCS by 1. Otherwise, take the max from skipping one character in either string.",
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
    xpReward: 75,
  },
  {
    id: 39,
    title: "Word Break",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    tags: ["String", "Dynamic Programming", "Trie", "Memoization"],
    companies: ["Google", "Amazon", "Meta"],
    description:
      "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    examples: [
      {
        input: 's = "leetcode", wordDict = ["leet","code"]',
        output: "true",
        explanation: '"leet code" is a valid segmentation.',
      },
      {
        input: 's = "applepenapple", wordDict = ["apple","pen"]',
        output: "true",
        explanation: '"apple pen apple" is valid.',
      },
      {
        input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]',
        output: "false",
        explanation: "Cannot segment the full string.",
      },
    ],
    hints: [
      "dp[i] = true if s[0..i-1] can be segmented using wordDict.",
      "For each position i, check all j < i: if dp[j] is true and s[j..i-1] is in the dictionary, dp[i] = true.",
      "Use a Set for O(1) dictionary lookups.",
    ],
    solution: `function wordBreak(s, wordDict) {
  const dict = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // Empty string is always valid
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // If first j chars are valid and remaining is in dict
      if (dp[j] && dict.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}`,
    explanation:
      "DP: dp[i] = true if s[0..i] can be broken into words. For each position, check all possible last words. Use a Set for dictionary lookups.",
    timeComplexity: "O(n³) in worst case (n² states, O(n) slice)",
    spaceComplexity: "O(n)",
    xpReward: 75,
  },
  {
    id: 40,
    title: "Coin Change",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    tags: ["Array", "Dynamic Programming", "BFS"],
    companies: ["Amazon", "Google", "Microsoft"],
    description:
      "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    examples: [
      {
        input: "coins = [1,5,10,25], amount = 36",
        output: "3",
        explanation: "25 + 10 + 1 = 3 coins.",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
        explanation: "Cannot make 3 with only 2s.",
      },
      {
        input: "coins = [1], amount = 0",
        output: "0",
        explanation: "Zero coins for amount 0.",
      },
    ],
    hints: [
      "dp[i] = minimum coins to make amount i.",
      "For each amount i, try each coin c: dp[i] = min(dp[i], dp[i - c] + 1) if i >= c.",
      "Initialize dp[0] = 0 and all others to Infinity. Return -1 if dp[amount] is still Infinity.",
    ],
    solution: `function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 coins to make amount 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] + 1 < dp[i]) {
        dp[i] = dp[i - coin] + 1;
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
    explanation:
      "Bottom-up DP: dp[i] = min coins for amount i. Try each coin and take the minimum. Build up from 0 to target amount.",
    timeComplexity: "O(amount * coins.length)",
    spaceComplexity: "O(amount)",
    xpReward: 75,
  },

  // ─── RECURSION ────────────────────────────────────────────────────────────
  {
    id: 41,
    title: "Fibonacci Number",
    difficulty: "Easy",
    topic: "Recursion",
    tags: ["Math", "Dynamic Programming", "Recursion", "Memoization"],
    companies: ["Amazon", "Apple"],
    description:
      "The Fibonacci numbers, commonly denoted F(n), form a sequence where each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n).",
    examples: [
      {
        input: "n = 2",
        output: "1",
        explanation: "F(2) = F(1) + F(0) = 1 + 0 = 1.",
      },
      {
        input: "n = 3",
        output: "2",
        explanation: "F(3) = F(2) + F(1) = 1 + 1 = 2.",
      },
      {
        input: "n = 4",
        output: "3",
        explanation: "F(4) = F(3) + F(2) = 2 + 1 = 3.",
      },
    ],
    hints: [
      "The naive recursive solution has O(2^n) time due to repeated subproblems.",
      "Add memoization (cache results in a map) to reduce to O(n).",
      "Or use bottom-up DP: iterate from 2 to n with two variables.",
    ],
    solution: `function fib(n) {
  // Memoized recursion
  const memo = new Map([[0, 0], [1, 1]]);
  function helper(k) {
    if (memo.has(k)) return memo.get(k);
    const result = helper(k - 1) + helper(k - 2);
    memo.set(k, result);
    return result;
  }
  return helper(n);
}`,
    explanation:
      "Memoized recursion: cache previously computed Fibonacci values to avoid exponential recomputation. Each value is computed at most once → O(n) time.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    xpReward: 50,
  },
  {
    id: 42,
    title: "Power of Two",
    difficulty: "Easy",
    topic: "Recursion",
    tags: ["Math", "Bit Manipulation", "Recursion"],
    companies: ["Google", "Amazon"],
    description:
      "Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2^x.",
    examples: [
      { input: "n = 1", output: "true", explanation: "2^0 = 1." },
      { input: "n = 16", output: "true", explanation: "2^4 = 16." },
      {
        input: "n = 3",
        output: "false",
        explanation: "3 is not a power of two.",
      },
    ],
    hints: [
      "If n <= 0, it cannot be a power of two.",
      "Recursive approach: if n is divisible by 2, recurse on n/2. Base case: n == 1.",
      "Bit trick: a power of two has exactly one bit set. n & (n-1) == 0 checks this in O(1).",
    ],
    solution: `function isPowerOfTwo(n) {
  // Bit manipulation: power of 2 has exactly one bit set
  // n & (n-1) clears the lowest set bit
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}`,
    explanation:
      "A power of two in binary has exactly one bit set (e.g. 4 = 100, 8 = 1000). n & (n-1) clears the lowest set bit, so for a power of two the result is always 0.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
  {
    id: 43,
    title: "Subsets",
    difficulty: "Medium",
    topic: "Recursion",
    tags: ["Array", "Backtracking", "Bit Manipulation"],
    companies: ["Amazon", "Google", "Meta"],
    description:
      "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
        explanation: "All 2^3 = 8 subsets.",
      },
      {
        input: "nums = [0]",
        output: "[[],[0]]",
        explanation: "Empty set and single element.",
      },
    ],
    hints: [
      "Each element is either included or excluded — this gives 2^n subsets.",
      "Use backtracking: at each step, decide to include or not include nums[i], then recurse.",
      "Start with an empty subset and grow it, adding the result at each recursive call.",
    ],
    solution: `function subsets(nums) {
  const result = [];
  function backtrack(start, current) {
    result.push([...current]); // Add current subset to result
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);       // Include nums[i]
      backtrack(i + 1, current);   // Recurse with next elements
      current.pop();               // Backtrack: remove nums[i]
    }
  }
  backtrack(0, []);
  return result;
}`,
    explanation:
      "Backtracking: at each call, save the current subset. Then for each remaining element, add it, recurse, and remove it. This generates all 2^n subsets.",
    timeComplexity: "O(n * 2^n)",
    spaceComplexity: "O(n * 2^n)",
    xpReward: 75,
  },
  {
    id: 44,
    title: "Permutations",
    difficulty: "Medium",
    topic: "Recursion",
    tags: ["Array", "Backtracking"],
    companies: ["Amazon", "Google", "Meta"],
    description:
      "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        explanation: "All 6 permutations of [1,2,3].",
      },
      {
        input: "nums = [0,1]",
        output: "[[0,1],[1,0]]",
        explanation: "Two permutations.",
      },
    ],
    hints: [
      "Use backtracking: choose each unused element as the next one in the permutation.",
      "Track which elements are used with a boolean array or by swapping in-place.",
      "When the current permutation length equals nums.length, add it to results.",
    ],
    solution: `function permute(nums) {
  const result = [];
  function backtrack(current, used) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // Skip already used elements
      used[i] = true;
      current.push(nums[i]);
      backtrack(current, used);
      current.pop();
      used[i] = false; // Backtrack
    }
  }
  backtrack([], new Array(nums.length).fill(false));
  return result;
}`,
    explanation:
      "Backtracking: at each position, try all unused elements. When the permutation is complete (length = n), save it. Backtrack by removing the element and marking it unused.",
    timeComplexity: "O(n * n!)",
    spaceComplexity: "O(n * n!)",
    xpReward: 75,
  },
  {
    id: 45,
    title: "Generate Parentheses",
    difficulty: "Medium",
    topic: "Recursion",
    tags: ["String", "Backtracking", "Dynamic Programming"],
    companies: ["Google", "Amazon", "Meta"],
    description:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    examples: [
      {
        input: "n = 3",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
        explanation: "All 5 valid combinations for 3 pairs.",
      },
      {
        input: "n = 1",
        output: '["()"]',
        explanation: "Only one valid combination.",
      },
    ],
    hints: [
      "Use backtracking. Track open count and close count.",
      'You can add "(" if open < n. You can add ")" if close < open.',
      "When string length is 2*n, you have a complete valid combination.",
    ],
    solution: `function generateParenthesis(n) {
  const result = [];
  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    // Add open paren if we still have budget
    if (open < n) backtrack(current + '(', open + 1, close);
    // Add close paren only if it would still be valid
    if (close < open) backtrack(current + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return result;
}`,
    explanation:
      'Backtracking with validity constraints: add "(" if open count < n, add ")" if close count < open count. This naturally generates only valid combinations.',
    timeComplexity: "O(4^n / sqrt(n)) — Catalan number",
    spaceComplexity: "O(n)",
    xpReward: 75,
  },

  // ─── BIT MANIPULATION ─────────────────────────────────────────────────────
  {
    id: 46,
    title: "Single Number",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    tags: ["Array", "Bit Manipulation"],
    companies: ["Amazon", "Google", "Apple"],
    description:
      "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
        explanation: "1 appears only once.",
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
        explanation: "4 appears only once.",
      },
      { input: "nums = [1]", output: "1", explanation: "Single element." },
    ],
    hints: [
      "XOR of a number with itself is 0. XOR with 0 is the number itself.",
      "XOR all numbers together: pairs cancel out (a ^ a = 0), the single number remains.",
      "XOR is commutative and associative, so order does not matter.",
    ],
    solution: `function singleNumber(nums) {
  // XOR all numbers: duplicates cancel out, single remains
  return nums.reduce((acc, n) => acc ^ n, 0);
}`,
    explanation:
      "XOR trick: a ^ a = 0 and a ^ 0 = a. XOR-ing all elements causes duplicates to cancel out, leaving only the unique element.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
  {
    id: 47,
    title: "Number of 1 Bits",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    tags: ["Divide and Conquer", "Bit Manipulation"],
    companies: ["Amazon", "Google", "Microsoft"],
    description:
      "Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).",
    examples: [
      {
        input: "n = 11",
        output: "3",
        explanation: "11 in binary is 1011, which has 3 set bits.",
      },
      {
        input: "n = 128",
        output: "1",
        explanation: "128 = 10000000 has 1 set bit.",
      },
      { input: "n = 2147483645", output: "30", explanation: "30 bits set." },
    ],
    hints: [
      "Repeatedly check the least significant bit: n & 1.",
      "Right-shift n by 1 each iteration and count 1s.",
      "Brian Kernighan's trick: n & (n-1) clears the lowest set bit. Count how many times until n = 0.",
    ],
    solution: `function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    // n & (n-1) clears the lowest set bit
    n = n & (n - 1);
    count++;
  }
  return count;
}`,
    explanation:
      "Brian Kernighan's bit trick: n & (n-1) removes the lowest set bit. Count iterations until n becomes 0 — equals the number of set bits.",
    timeComplexity: "O(number of set bits)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
  {
    id: 48,
    title: "Counting Bits",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    tags: ["Dynamic Programming", "Bit Manipulation"],
    companies: ["Amazon", "Google"],
    description:
      "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
    examples: [
      {
        input: "n = 2",
        output: "[0,1,1]",
        explanation: "0=0b00, 1=0b01, 2=0b10.",
      },
      {
        input: "n = 5",
        output: "[0,1,1,2,1,2]",
        explanation: "Bit counts for 0 to 5.",
      },
    ],
    hints: [
      "For even i: bits(i) = bits(i/2) since right-shifting only removes a 0.",
      "For odd i: bits(i) = bits(i-1) + 1 = bits(i >> 1) + (i & 1).",
      "General formula: dp[i] = dp[i >> 1] + (i & 1).",
    ],
    solution: `function countBits(n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    // Right shift by 1 gives us a number we already computed
    // The lost bit is the current LSB
    dp[i] = dp[i >> 1] + (i & 1);
  }
  return dp;
}`,
    explanation:
      "DP bit trick: dp[i] = dp[i >> 1] + (i & 1). Right-shifting removes the LSB, so we reuse a previously computed count and add 1 if the LSB was 1.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    xpReward: 50,
  },
  {
    id: 49,
    title: "Reverse Bits",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    tags: ["Divide and Conquer", "Bit Manipulation"],
    companies: ["Google", "Amazon", "Microsoft"],
    description: "Reverse bits of a given 32-bit unsigned integer.",
    examples: [
      {
        input: "n = 43261596",
        output: "964176192",
        explanation:
          "00000010100101000001111010011100 reversed is 00111001011110000010100101000000.",
      },
      {
        input: "n = 4294967293",
        output: "3221225471",
        explanation: "Reverse of the bit pattern.",
      },
    ],
    hints: [
      "Process each of the 32 bits one at a time.",
      "In each iteration: extract the least significant bit of n and append it to the result.",
      "Right-shift n and left-shift result 32 times.",
    ],
    solution: `function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result * 2) + (n & 1); // Shift result left and add LSB of n
    n = n >>> 1; // Unsigned right shift n
  }
  return result >>> 0; // Return as unsigned 32-bit integer
}`,
    explanation:
      "Loop 32 times: extract the LSB of n with (n & 1), append it to result by shifting result left. Use unsigned right shift (>>>) for JavaScript's 32-bit unsigned behavior.",
    timeComplexity: "O(1) — always 32 iterations",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
  {
    id: 50,
    title: "Missing Number",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    tags: ["Array", "Hash Table", "Math", "Bit Manipulation", "Sorting"],
    companies: ["Amazon", "Google", "Apple"],
    description:
      "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
        explanation: "n=3, range is [0,3]. Missing number is 2.",
      },
      { input: "nums = [0,1]", output: "2", explanation: "n=2, missing is 2." },
      {
        input: "nums = [9,6,4,2,3,5,7,0,1]",
        output: "8",
        explanation: "Missing is 8.",
      },
    ],
    hints: [
      "Gauss formula: expected sum = n*(n+1)/2. Subtract actual sum to find missing.",
      "XOR approach: XOR all indices 0..n with all values. Only the missing number remains.",
      "Both approaches are O(n) time and O(1) space.",
    ],
    solution: `function missingNumber(nums) {
  const n = nums.length;
  // Gauss formula: sum of 0..n is n*(n+1)/2
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}`,
    explanation:
      "Gauss formula: the sum of integers from 0 to n is n*(n+1)/2. Subtract the actual array sum. The difference is the missing number.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    xpReward: 50,
  },
];

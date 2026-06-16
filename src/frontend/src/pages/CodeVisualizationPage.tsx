import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code,
  Home,
  LayoutDashboard,
  Pause,
  Play,
  RefreshCw,
  Shuffle,
  Upload,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface StepVariable {
  name: string;
  value: string | number | boolean | number[];
}

export interface VisStep {
  lineIndex: number;
  description: string;
  variables: StepVariable[];
  arrayState?: number[];
  highlightIndices?: number[];
  swapping?: [number, number];
  sortedUpTo?: number;
  foundIndex?: number;
  stackState?: { label: string; value: number | string }[];
  queueState?: { label: string; value: number | string }[];
  callStack?: { fn: string; param: string | number }[];
  dpTable?: number[];
  dpHighlight?: number;
  pointerI?: number;
  pointerJ?: number;
  pivotIndex?: number;
  mergeState?: { left: number[]; right: number[]; merged: number[] } | null;
}

export interface Algorithm {
  id: string;
  label: string;
  code: string;
  steps: (arr?: number[], target?: number) => VisStep[];
  category: "sorting" | "searching" | "datastructure" | "recursion";
  complexity: string;
  description: string;
  defaultArray?: number[];
  defaultTarget?: number;
  supportsCustomInput?: boolean;
}

// ─── Algorithm Categories ─────────────────────────────────────────────────────
const CATEGORIES: { id: Algorithm["category"]; label: string; icon: string }[] =
  [
    { id: "sorting", label: "Sorting", icon: "📊" },
    { id: "searching", label: "Searching", icon: "🔍" },
    { id: "datastructure", label: "Data Structures", icon: "🗂️" },
    { id: "recursion", label: "Recursion", icon: "🔁" },
  ];

// ─── BUBBLE SORT ──────────────────────────────────────────────────────────────
const BUBBLE_SORT_CODE = `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([5, 3, 8, 1, 4]);`;

function makeBubbleSortSteps(arr: number[] = [5, 3, 8, 1, 4]): VisStep[] {
  const steps: VisStep[] = [];
  const a = [...arr];
  const n = a.length;
  let comparisons = 0;
  let swaps = 0;

  steps.push({
    lineIndex: 0,
    description: "Start bubbleSort",
    variables: [],
    arrayState: [...a],
  });
  steps.push({
    lineIndex: 1,
    description: `Set n = ${n}`,
    variables: [{ name: "n", value: n }],
    arrayState: [...a],
  });

  for (let i = 0; i < n - 1; i++) {
    steps.push({
      lineIndex: 2,
      description: `Outer pass i=${i}: checking unsorted portion`,
      variables: [
        { name: "i", value: i },
        { name: "comparisons", value: comparisons },
        { name: "swaps", value: swaps },
      ],
      arrayState: [...a],
      sortedUpTo: n - i,
    });
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      steps.push({
        lineIndex: 3,
        description: `Compare arr[${j}]=${a[j]} vs arr[${j + 1}]=${a[j + 1]}`,
        variables: [
          { name: "j", value: j },
          { name: "comparisons", value: comparisons },
        ],
        arrayState: [...a],
        highlightIndices: [j, j + 1],
        pointerI: i,
        pointerJ: j,
        sortedUpTo: n - i,
      });
      if (a[j] > a[j + 1]) {
        swaps++;
        steps.push({
          lineIndex: 5,
          description: `${a[j]} > ${a[j + 1]} → SWAP!`,
          variables: [
            { name: "temp", value: a[j] },
            { name: "swaps", value: swaps },
          ],
          arrayState: [...a],
          swapping: [j, j + 1],
          sortedUpTo: n - i,
        });
        const tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
        steps.push({
          lineIndex: 7,
          description: `After swap: arr[${j}]=${a[j]}, arr[${j + 1}]=${a[j + 1]}`,
          variables: [
            { name: "arr[j]", value: a[j] },
            { name: "arr[j+1]", value: a[j + 1] },
          ],
          arrayState: [...a],
          highlightIndices: [j, j + 1],
          sortedUpTo: n - i,
        });
      } else {
        steps.push({
          lineIndex: 4,
          description: `No swap (${a[j]} ≤ ${a[j + 1]})`,
          variables: [
            { name: "arr[j]", value: a[j] },
            { name: "arr[j+1]", value: a[j + 1] },
          ],
          arrayState: [...a],
          sortedUpTo: n - i,
        });
      }
    }
  }
  steps.push({
    lineIndex: 11,
    description: `✅ Sorted! [${a.join(", ")}] — ${comparisons} comparisons, ${swaps} swaps`,
    variables: [
      { name: "result", value: `[${a.join(",")}]` },
      { name: "comparisons", value: comparisons },
      { name: "swaps", value: swaps },
    ],
    arrayState: [...a],
    sortedUpTo: 0,
  });
  return steps;
}

// ─── SELECTION SORT ───────────────────────────────────────────────────────────
const SELECTION_SORT_CODE = `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr;
}

selectionSort([64, 25, 12, 22, 11]);`;

function makeSelectionSortSteps(
  arr: number[] = [64, 25, 12, 22, 11],
): VisStep[] {
  const steps: VisStep[] = [];
  const a = [...arr];
  const n = a.length;

  steps.push({
    lineIndex: 0,
    description: "Start selectionSort",
    variables: [],
    arrayState: [...a],
  });
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    steps.push({
      lineIndex: 3,
      description: `Pass ${i}: assume minimum is at index ${i} (value=${a[i]})`,
      variables: [
        { name: "i", value: i },
        { name: "minIdx", value: minIdx },
      ],
      arrayState: [...a],
      highlightIndices: [minIdx],
      sortedUpTo: i,
    });
    for (let j = i + 1; j < n; j++) {
      steps.push({
        lineIndex: 4,
        description: `Check arr[${j}]=${a[j]} < arr[minIdx=${minIdx}]=${a[minIdx]}?`,
        variables: [
          { name: "j", value: j },
          { name: "minIdx", value: minIdx },
        ],
        arrayState: [...a],
        highlightIndices: [j, minIdx],
        sortedUpTo: i,
      });
      if (a[j] < a[minIdx]) {
        minIdx = j;
        steps.push({
          lineIndex: 5,
          description: `New minimum found at index ${j} (value=${a[j]})`,
          variables: [
            { name: "minIdx", value: minIdx },
            { name: "min value", value: a[minIdx] },
          ],
          arrayState: [...a],
          highlightIndices: [minIdx],
          sortedUpTo: i,
        });
      }
    }
    if (minIdx !== i) {
      steps.push({
        lineIndex: 9,
        description: `Swap index ${i} (${a[i]}) with minIdx ${minIdx} (${a[minIdx]})`,
        variables: [
          { name: "i", value: i },
          { name: "minIdx", value: minIdx },
        ],
        arrayState: [...a],
        swapping: [i, minIdx],
        sortedUpTo: i,
      });
      const tmp = a[i];
      a[i] = a[minIdx];
      a[minIdx] = tmp;
      steps.push({
        lineIndex: 11,
        description: `Swapped! Index ${i} now has value ${a[i]}`,
        variables: [{ name: "arr[i]", value: a[i] }],
        arrayState: [...a],
        highlightIndices: [i],
        sortedUpTo: i + 1,
      });
    } else {
      steps.push({
        lineIndex: 8,
        description: "Already in place, no swap needed",
        variables: [{ name: "arr[i]", value: a[i] }],
        arrayState: [...a],
        highlightIndices: [i],
        sortedUpTo: i + 1,
      });
    }
  }
  steps.push({
    lineIndex: 14,
    description: `✅ Array sorted: [${a.join(", ")}]`,
    variables: [{ name: "result", value: `[${a.join(",")}]` }],
    arrayState: [...a],
    sortedUpTo: 0,
  });
  return steps;
}

// ─── INSERTION SORT ───────────────────────────────────────────────────────────
const INSERTION_SORT_CODE = `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

insertionSort([12, 11, 13, 5, 6]);`;

function makeInsertionSortSteps(arr: number[] = [12, 11, 13, 5, 6]): VisStep[] {
  const steps: VisStep[] = [];
  const a = [...arr];
  const n = a.length;

  steps.push({
    lineIndex: 0,
    description: "Start insertionSort — first element is trivially sorted",
    variables: [],
    arrayState: [...a],
  });
  for (let i = 1; i < n; i++) {
    const key = a[i];
    let j = i - 1;
    steps.push({
      lineIndex: 3,
      description: `Pick key = arr[${i}] = ${key} to insert into sorted portion`,
      variables: [
        { name: "i", value: i },
        { name: "key", value: key },
      ],
      arrayState: [...a],
      highlightIndices: [i],
    });
    while (j >= 0 && a[j] > key) {
      steps.push({
        lineIndex: 5,
        description: `arr[${j}]=${a[j]} > key(${key}) → shift right`,
        variables: [
          { name: "j", value: j },
          { name: "key", value: key },
        ],
        arrayState: [...a],
        highlightIndices: [j, j + 1],
      });
      a[j + 1] = a[j];
      j--;
      steps.push({
        lineIndex: 6,
        description: `Shifted arr[${j + 1}] → arr[${j + 2}]`,
        variables: [{ name: "j", value: j }],
        arrayState: [...a],
        highlightIndices: [j + 1, j + 2],
      });
    }
    a[j + 1] = key;
    steps.push({
      lineIndex: 8,
      description: `Insert key=${key} at position ${j + 1}`,
      variables: [
        { name: "key", value: key },
        { name: "position", value: j + 1 },
      ],
      arrayState: [...a],
      highlightIndices: [j + 1],
    });
  }
  steps.push({
    lineIndex: 11,
    description: `✅ Sorted: [${a.join(", ")}]`,
    variables: [{ name: "result", value: `[${a.join(",")}]` }],
    arrayState: [...a],
    sortedUpTo: 0,
  });
  return steps;
}

// ─── MERGE SORT ───────────────────────────────────────────────────────────────
const MERGE_SORT_CODE = `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
}

mergeSort([38, 27, 43, 3, 9, 82, 10]);`;

function makeMergeSortSteps(
  arr: number[] = [38, 27, 43, 3, 9, 82, 10],
): VisStep[] {
  const steps: VisStep[] = [];

  function mergeSort(a: number[], depth: number): number[] {
    if (a.length <= 1) {
      steps.push({
        lineIndex: 1,
        description: `Base case: [${a.join(",")}] length≤1, return as-is`,
        variables: [
          { name: "depth", value: depth },
          { name: "arr", value: `[${a.join(",")}]` },
        ],
        arrayState: [...a],
      });
      return a;
    }
    const mid = Math.floor(a.length / 2);
    steps.push({
      lineIndex: 2,
      description: `Split [${a.join(",")}] at mid=${mid}`,
      variables: [
        { name: "mid", value: mid },
        { name: "depth", value: depth },
      ],
      arrayState: [...a],
      mergeState: { left: a.slice(0, mid), right: a.slice(mid), merged: [] },
    });
    const left = mergeSort(a.slice(0, mid), depth + 1);
    const right = mergeSort(a.slice(mid), depth + 1);
    steps.push({
      lineIndex: 5,
      description: `Merge sorted [${left.join(",")}] and [${right.join(",")}]`,
      variables: [
        { name: "left", value: `[${left.join(",")}]` },
        { name: "right", value: `[${right.join(",")}]` },
      ],
      arrayState: [...left, ...right],
      mergeState: { left, right, merged: [] },
    });
    const merged: number[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i++]);
      } else {
        merged.push(right[j++]);
      }
      steps.push({
        lineIndex: 12,
        description: `Merged so far: [${merged.join(",")}]`,
        variables: [
          { name: "merged", value: `[${merged.join(",")}]` },
          { name: "i", value: i },
          { name: "j", value: j },
        ],
        arrayState: [...merged, ...left.slice(i), ...right.slice(j)],
        mergeState: {
          left: left.slice(i),
          right: right.slice(j),
          merged: [...merged],
        },
      });
    }
    const result = merged.concat(left.slice(i), right.slice(j));
    steps.push({
      lineIndex: 14,
      description: `✅ Merged result: [${result.join(",")}]`,
      variables: [{ name: "result", value: `[${result.join(",")}]` }],
      arrayState: [...result],
      mergeState: { left: [], right: [], merged: [...result] },
    });
    return result;
  }

  steps.push({
    lineIndex: 0,
    description: "Start mergeSort — divide and conquer",
    variables: [],
    arrayState: [...arr],
  });
  const result = mergeSort([...arr], 0);
  steps.push({
    lineIndex: 15,
    description: `✅ Final sorted array: [${result.join(", ")}]`,
    variables: [{ name: "result", value: `[${result.join(",")}]` }],
    arrayState: [...result],
  });
  return steps;
}

// ─── QUICK SORT ───────────────────────────────────────────────────────────────
const QUICK_SORT_CODE = `function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

quickSort(arr, 0, arr.length - 1);`;

function makeQuickSortSteps(arr: number[] = [10, 7, 8, 9, 1, 5]): VisStep[] {
  const steps: VisStep[] = [];
  const a = [...arr];

  function partition(low: number, high: number): number {
    const pivot = a[high];
    let i = low - 1;
    steps.push({
      lineIndex: 8,
      description: `Partition: pivot = arr[${high}] = ${pivot}`,
      variables: [
        { name: "pivot", value: pivot },
        { name: "low", value: low },
        { name: "high", value: high },
      ],
      arrayState: [...a],
      pivotIndex: high,
    });
    for (let j = low; j < high; j++) {
      steps.push({
        lineIndex: 11,
        description: `Compare arr[${j}]=${a[j]} ≤ pivot(${pivot})?`,
        variables: [
          { name: "j", value: j },
          { name: "i", value: i },
          { name: "pivot", value: pivot },
        ],
        arrayState: [...a],
        highlightIndices: [j],
        pivotIndex: high,
      });
      if (a[j] <= pivot) {
        i++;
        steps.push({
          lineIndex: 13,
          description: `Yes! Swap arr[${i}]=${a[i]} with arr[${j}]=${a[j]}`,
          variables: [
            { name: "i", value: i },
            { name: "j", value: j },
          ],
          arrayState: [...a],
          swapping: [i, j],
          pivotIndex: high,
        });
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
        steps.push({
          lineIndex: 13,
          description: `After swap: arr=[${a.join(",")}]`,
          variables: [
            { name: "arr[i]", value: a[i] },
            { name: "arr[j]", value: a[j] },
          ],
          arrayState: [...a],
          pivotIndex: high,
        });
      }
    }
    steps.push({
      lineIndex: 16,
      description: `Place pivot ${pivot} at position ${i + 1}`,
      variables: [{ name: "pivot pos", value: i + 1 }],
      arrayState: [...a],
      swapping: [i + 1, high],
    });
    const tmp = a[i + 1];
    a[i + 1] = a[high];
    a[high] = tmp;
    steps.push({
      lineIndex: 17,
      description: `Pivot ${a[i + 1]} is now in its correct position ${i + 1}`,
      variables: [{ name: "pivotPos", value: i + 1 }],
      arrayState: [...a],
      highlightIndices: [i + 1],
    });
    return i + 1;
  }

  function quickSort(low: number, high: number) {
    if (low < high) {
      steps.push({
        lineIndex: 1,
        description: `quickSort range [${low}..${high}]: [${a.slice(low, high + 1).join(",")}]`,
        variables: [
          { name: "low", value: low },
          { name: "high", value: high },
        ],
        arrayState: [...a],
      });
      const pi = partition(low, high);
      quickSort(low, pi - 1);
      quickSort(pi + 1, high);
    }
  }

  steps.push({
    lineIndex: 0,
    description: "Start quickSort — choose pivot, partition, recurse",
    variables: [],
    arrayState: [...a],
  });
  quickSort(0, a.length - 1);
  steps.push({
    lineIndex: 5,
    description: `✅ Sorted: [${a.join(", ")}]`,
    variables: [{ name: "result", value: `[${a.join(",")}]` }],
    arrayState: [...a],
    sortedUpTo: 0,
  });
  return steps;
}

// ─── BINARY SEARCH ────────────────────────────────────────────────────────────
const BINARY_SEARCH_CODE = `function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid; // Found!
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1; // Not found
}

binarySearch([1, 3, 5, 7, 9, 11], 7);`;

function makeBinarySearchSteps(
  arr: number[] = [1, 3, 5, 7, 9, 11],
  target = 7,
): VisStep[] {
  const steps: VisStep[] = [];
  let low = 0;
  let high = arr.length - 1;

  steps.push({
    lineIndex: 0,
    description: "Start binarySearch — array must be sorted",
    variables: [],
    arrayState: [...arr],
  });
  steps.push({
    lineIndex: 1,
    description: `Set low=0, high=${high}, target=${target}`,
    variables: [
      { name: "low", value: low },
      { name: "high", value: high },
      { name: "target", value: target },
    ],
    arrayState: [...arr],
    highlightIndices: [low, high],
  });

  while (low <= high) {
    steps.push({
      lineIndex: 4,
      description: `Loop: low(${low}) ≤ high(${high})`,
      variables: [
        { name: "low", value: low },
        { name: "high", value: high },
      ],
      arrayState: [...arr],
      highlightIndices: [low, high],
    });
    const mid = Math.floor((low + high) / 2);
    steps.push({
      lineIndex: 5,
      description: `mid = ⌊(${low}+${high})/2⌋ = ${mid}, arr[mid]=${arr[mid]}`,
      variables: [
        { name: "mid", value: mid },
        { name: "arr[mid]", value: arr[mid] },
        { name: "target", value: target },
      ],
      arrayState: [...arr],
      highlightIndices: [mid],
    });
    if (arr[mid] === target) {
      steps.push({
        lineIndex: 7,
        description: `✅ arr[${mid}]=${arr[mid]} === target! Found at index ${mid}`,
        variables: [{ name: "result", value: mid }],
        arrayState: [...arr],
        highlightIndices: [mid],
        foundIndex: mid,
      });
      break;
    }
    if (arr[mid] < target) {
      low = mid + 1;
      steps.push({
        lineIndex: 9,
        description: `${arr[mid]} < ${target} → search right half, low = ${low}`,
        variables: [{ name: "low", value: low }],
        arrayState: [...arr],
        highlightIndices: [low],
      });
    } else {
      high = mid - 1;
      steps.push({
        lineIndex: 11,
        description: `${arr[mid]} > ${target} → search left half, high = ${high}`,
        variables: [{ name: "high", value: high }],
        arrayState: [...arr],
        highlightIndices: [high],
      });
    }
  }
  if (low > high) {
    steps.push({
      lineIndex: 14,
      description: `❌ Target ${target} not found in array`,
      variables: [{ name: "result", value: -1 }],
      arrayState: [...arr],
    });
  }
  return steps;
}

// ─── LINEAR SEARCH ────────────────────────────────────────────────────────────
const LINEAR_SEARCH_CODE = `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found at index i
    }
  }
  return -1; // Not found
}

linearSearch([4, 2, 7, 1, 9, 3], 7);`;

function makeLinearSearchSteps(
  arr: number[] = [4, 2, 7, 1, 9, 3],
  target = 7,
): VisStep[] {
  const steps: VisStep[] = [];

  steps.push({
    lineIndex: 0,
    description: "Start linearSearch — scan left to right",
    variables: [],
    arrayState: [...arr],
  });
  steps.push({
    lineIndex: 1,
    description: `Searching for target = ${target}`,
    variables: [{ name: "target", value: target }],
    arrayState: [...arr],
  });

  for (let i = 0; i < arr.length; i++) {
    steps.push({
      lineIndex: 1,
      description: `Check index ${i}: arr[${i}] = ${arr[i]}`,
      variables: [
        { name: "i", value: i },
        { name: "arr[i]", value: arr[i] },
        { name: "target", value: target },
      ],
      arrayState: [...arr],
      highlightIndices: [i],
    });
    if (arr[i] === target) {
      steps.push({
        lineIndex: 3,
        description: `✅ Found! arr[${i}] = ${arr[i]} matches target ${target}`,
        variables: [{ name: "result", value: i }],
        arrayState: [...arr],
        highlightIndices: [i],
        foundIndex: i,
      });
      return steps;
    }
    steps.push({
      lineIndex: 2,
      description: `${arr[i]} ≠ ${target} — keep searching`,
      variables: [{ name: "i", value: i }],
      arrayState: [...arr],
      highlightIndices: [i],
    });
  }
  steps.push({
    lineIndex: 6,
    description: `❌ Target ${target} not found after scanning all ${arr.length} elements`,
    variables: [{ name: "result", value: -1 }],
    arrayState: [...arr],
  });
  return steps;
}

// ─── STACK OPERATIONS ─────────────────────────────────────────────────────────
const STACK_CODE = `class Stack {
  constructor() { this.items = []; }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Operations: push(10), push(20), push(30), peek(), pop(), pop()`;

function makeStackSteps(): VisStep[] {
  const steps: VisStep[] = [];
  const stack: { label: string; value: number | string }[] = [];

  const ops: { type: "push" | "pop" | "peek"; val?: number }[] = [
    { type: "push", val: 10 },
    { type: "push", val: 20 },
    { type: "push", val: 30 },
    { type: "peek" },
    { type: "pop" },
    { type: "pop" },
    { type: "push", val: 50 },
    { type: "pop" },
  ];

  steps.push({
    lineIndex: 0,
    description: "Initialize empty Stack",
    variables: [{ name: "stack", value: "[]" }],
    stackState: [],
  });
  for (const op of ops) {
    if (op.type === "push" && op.val !== undefined) {
      steps.push({
        lineIndex: 3,
        description: `PUSH ${op.val} onto stack`,
        variables: [{ name: "element", value: op.val }],
        stackState: [...stack],
      });
      stack.push({ label: `${op.val}`, value: op.val });
      steps.push({
        lineIndex: 4,
        description: `Stack after push: TOP = ${stack[stack.length - 1].value}`,
        variables: [
          { name: "top", value: stack[stack.length - 1].value },
          { name: "size", value: stack.length },
        ],
        stackState: [...stack],
      });
    } else if (op.type === "pop") {
      if (stack.length === 0) {
        steps.push({
          lineIndex: 7,
          description: "POP attempted — stack is empty! Underflow",
          variables: [{ name: "result", value: "Underflow" }],
          stackState: [],
        });
      } else {
        const top = stack[stack.length - 1].value;
        steps.push({
          lineIndex: 6,
          description: `POP from stack — removing ${top} (top element)`,
          variables: [{ name: "popped", value: top }],
          stackState: [...stack],
        });
        stack.pop();
        steps.push({
          lineIndex: 8,
          description: `Popped ${top}. New top: ${stack.length > 0 ? stack[stack.length - 1].value : "stack empty"}`,
          variables: [
            { name: "result", value: top },
            { name: "size", value: stack.length },
          ],
          stackState: [...stack],
        });
      }
    } else if (op.type === "peek") {
      const top = stack.length > 0 ? stack[stack.length - 1].value : "empty";
      steps.push({
        lineIndex: 11,
        description: `PEEK — top element is ${top} (not removed)`,
        variables: [{ name: "top", value: top }],
        stackState: [...stack],
      });
    }
  }
  steps.push({
    lineIndex: 17,
    description: `✅ Stack operations complete. Final stack size: ${stack.length}`,
    variables: [{ name: "size", value: stack.length }],
    stackState: [...stack],
  });
  return steps;
}

// ─── QUEUE OPERATIONS ─────────────────────────────────────────────────────────
const QUEUE_CODE = `class Queue {
  constructor() { this.items = []; }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Ops: enqueue(10), enqueue(20), enqueue(30), front(), dequeue(), dequeue()`;

function makeQueueSteps(): VisStep[] {
  const steps: VisStep[] = [];
  const queue: { label: string; value: number | string }[] = [];

  const ops: { type: "enqueue" | "dequeue" | "front"; val?: number }[] = [
    { type: "enqueue", val: 10 },
    { type: "enqueue", val: 20 },
    { type: "enqueue", val: 30 },
    { type: "front" },
    { type: "dequeue" },
    { type: "dequeue" },
    { type: "enqueue", val: 40 },
    { type: "dequeue" },
  ];

  steps.push({
    lineIndex: 0,
    description: "Initialize empty Queue (FIFO — First In, First Out)",
    variables: [{ name: "queue", value: "[]" }],
    queueState: [],
  });
  for (const op of ops) {
    if (op.type === "enqueue" && op.val !== undefined) {
      steps.push({
        lineIndex: 3,
        description: `ENQUEUE ${op.val} — add to rear`,
        variables: [{ name: "element", value: op.val }],
        queueState: [...queue],
      });
      queue.push({ label: `${op.val}`, value: op.val });
      steps.push({
        lineIndex: 4,
        description: `Queue: FRONT=${queue[0].value} → REAR=${queue[queue.length - 1].value}`,
        variables: [
          { name: "front", value: queue[0].value },
          { name: "rear", value: queue[queue.length - 1].value },
          { name: "size", value: queue.length },
        ],
        queueState: [...queue],
      });
    } else if (op.type === "dequeue") {
      if (queue.length === 0) {
        steps.push({
          lineIndex: 8,
          description: "DEQUEUE attempted — queue is empty! Underflow",
          variables: [{ name: "result", value: "Underflow" }],
          queueState: [],
        });
      } else {
        const front = queue[0].value;
        steps.push({
          lineIndex: 7,
          description: `DEQUEUE — remove ${front} from front`,
          variables: [{ name: "dequeued", value: front }],
          queueState: [...queue],
        });
        queue.shift();
        steps.push({
          lineIndex: 9,
          description: `Dequeued ${front}. New front: ${queue.length > 0 ? queue[0].value : "queue empty"}`,
          variables: [
            { name: "result", value: front },
            { name: "size", value: queue.length },
          ],
          queueState: [...queue],
        });
      }
    } else if (op.type === "front") {
      const f = queue.length > 0 ? queue[0].value : "empty";
      steps.push({
        lineIndex: 12,
        description: `FRONT — peek at front element: ${f} (not removed)`,
        variables: [{ name: "front", value: f }],
        queueState: [...queue],
      });
    }
  }
  steps.push({
    lineIndex: 17,
    description: `✅ Queue operations complete. Final size: ${queue.length}`,
    variables: [{ name: "size", value: queue.length }],
    queueState: [...queue],
  });
  return steps;
}

// ─── FACTORIAL (Recursive) ────────────────────────────────────────────────────
const FACTORIAL_CODE = `function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1);
}

factorial(5);`;

function makeFactorialSteps(): VisStep[] {
  const steps: VisStep[] = [];
  const callStack: { fn: string; param: string | number }[] = [];

  function fact(n: number): number {
    callStack.push({ fn: "factorial", param: n });
    steps.push({
      lineIndex: 0,
      description: `factorial(${n}) called — push frame onto call stack`,
      variables: [{ name: "n", value: n }],
      callStack: [...callStack],
    });
    if (n <= 1) {
      steps.push({
        lineIndex: 2,
        description: `Base case! n=${n} ≤ 1, return 1`,
        variables: [
          { name: "n", value: n },
          { name: "result", value: 1 },
        ],
        callStack: [...callStack],
      });
      callStack.pop();
      steps.push({
        lineIndex: 2,
        description: `Pop factorial(${n}) frame — returning 1`,
        variables: [{ name: "returned", value: 1 }],
        callStack: [...callStack],
      });
      return 1;
    }
    steps.push({
      lineIndex: 4,
      description: `n=${n} > 1 → compute ${n} × factorial(${n - 1})`,
      variables: [{ name: "n", value: n }],
      callStack: [...callStack],
    });
    const sub = fact(n - 1);
    const result = n * sub;
    steps.push({
      lineIndex: 4,
      description: `factorial(${n - 1}) = ${sub}, so ${n} × ${sub} = ${result}`,
      variables: [
        { name: "n", value: n },
        { name: "sub", value: sub },
        { name: "result", value: result },
      ],
      callStack: [...callStack],
    });
    callStack.pop();
    steps.push({
      lineIndex: 4,
      description: `Pop factorial(${n}) frame — returning ${result}`,
      variables: [{ name: "returned", value: result }],
      callStack: [...callStack],
    });
    return result;
  }

  steps.push({
    lineIndex: 6,
    description: "Call factorial(5) — watch the call stack build up!",
    variables: [],
    callStack: [],
  });
  const result = fact(5);
  steps.push({
    lineIndex: 6,
    description: `✅ factorial(5) = ${result}`,
    variables: [{ name: "result", value: result }],
    callStack: [],
  });
  return steps;
}

// ─── FIBONACCI DP ─────────────────────────────────────────────────────────────
const FIBONACCI_CODE = `function fibonacci(n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n];
}

fibonacci(8);`;

function makeFibonacciSteps(): VisStep[] {
  const n = 8;
  const steps: VisStep[] = [];
  const dp = new Array(n + 1).fill(0);

  steps.push({
    lineIndex: 0,
    description: `fibonacci(${n}) — use DP table to avoid recomputation`,
    variables: [{ name: "n", value: n }],
    dpTable: [...dp],
    dpHighlight: -1,
  });
  steps.push({
    lineIndex: 1,
    description: `Create dp array of size ${n + 1}, all zeros`,
    variables: [{ name: "size", value: n + 1 }],
    dpTable: [...dp],
    dpHighlight: -1,
  });
  dp[0] = 0;
  steps.push({
    lineIndex: 2,
    description: "Base case: dp[0] = 0",
    variables: [{ name: "dp[0]", value: 0 }],
    dpTable: [...dp],
    dpHighlight: 0,
  });
  dp[1] = 1;
  steps.push({
    lineIndex: 3,
    description: "Base case: dp[1] = 1",
    variables: [{ name: "dp[1]", value: 1 }],
    dpTable: [...dp],
    dpHighlight: 1,
  });

  for (let i = 2; i <= n; i++) {
    steps.push({
      lineIndex: 5,
      description: `Computing dp[${i}] = dp[${i - 1}] + dp[${i - 2}]`,
      variables: [
        { name: "i", value: i },
        { name: `dp[${i - 1}]`, value: dp[i - 1] },
        { name: `dp[${i - 2}]`, value: dp[i - 2] },
      ],
      dpTable: [...dp],
      dpHighlight: i,
    });
    dp[i] = dp[i - 1] + dp[i - 2];
    steps.push({
      lineIndex: 6,
      description: `dp[${i}] = ${dp[i - 1]} + ${dp[i - 2]} = ${dp[i]}`,
      variables: [{ name: `dp[${i}]`, value: dp[i] }],
      dpTable: [...dp],
      dpHighlight: i,
    });
  }

  steps.push({
    lineIndex: 9,
    description: `✅ fibonacci(${n}) = dp[${n}] = ${dp[n]}`,
    variables: [
      { name: "result", value: dp[n] },
      { name: "sequence", value: dp.join(" → ") },
    ],
    dpTable: [...dp],
    dpHighlight: n,
  });
  return steps;
}

// ─── TWO SUM ─────────────────────────────────────────────────────────────────
const TWO_SUM_CODE = `function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

twoSum([2, 7, 11, 15], 9);`;

function makeTwoSumSteps(
  nums: number[] = [2, 7, 11, 15],
  target = 9,
): VisStep[] {
  const steps: VisStep[] = [];
  const map: Record<number, number> = {};

  steps.push({
    lineIndex: 0,
    description: "Start twoSum — use hash map for O(n) solution",
    variables: [],
    arrayState: [...nums],
  });
  steps.push({
    lineIndex: 1,
    description: `Target = ${target}, initialize empty hash map`,
    variables: [
      { name: "target", value: target },
      { name: "map", value: "{}" },
    ],
    arrayState: [...nums],
  });

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    steps.push({
      lineIndex: 2,
      description: `i=${i}: nums[${i}]=${nums[i]}, complement=${target}-${nums[i]}=${complement}`,
      variables: [
        { name: "i", value: i },
        { name: "nums[i]", value: nums[i] },
        { name: "complement", value: complement },
      ],
      arrayState: [...nums],
      highlightIndices: [i],
    });
    steps.push({
      lineIndex: 4,
      description: `Is ${complement} in map? ${map[complement] !== undefined ? "YES! Found pair!" : "No"}`,
      variables: [{ name: "map", value: JSON.stringify(map) }],
      arrayState: [...nums],
      highlightIndices: [i],
    });
    if (map[complement] !== undefined) {
      steps.push({
        lineIndex: 5,
        description: `✅ Found pair! nums[${map[complement]}]+nums[${i}]=${nums[map[complement]]}+${nums[i]}=${target}`,
        variables: [{ name: "result", value: `[${map[complement]}, ${i}]` }],
        arrayState: [...nums],
        highlightIndices: [map[complement], i],
      });
      break;
    }
    map[nums[i]] = i;
    steps.push({
      lineIndex: 7,
      description: `Store map[${nums[i]}] = ${i}`,
      variables: [{ name: "map", value: JSON.stringify(map) }],
      arrayState: [...nums],
    });
  }
  return steps;
}

// ─── Algorithm Registry ────────────────────────────────────────────────────────
export const ALGORITHM_REGISTRY: Algorithm[] = [
  {
    id: "bubble",
    label: "Bubble Sort",
    code: BUBBLE_SORT_CODE,
    steps: makeBubbleSortSteps,
    category: "sorting",
    complexity: "O(n²)",
    description: "Compare adjacent pairs, bubble largest to end",
    defaultArray: [5, 3, 8, 1, 4],
    supportsCustomInput: true,
  },
  {
    id: "selection",
    label: "Selection Sort",
    code: SELECTION_SORT_CODE,
    steps: makeSelectionSortSteps,
    category: "sorting",
    complexity: "O(n²)",
    description: "Find min in unsorted, place at front",
    defaultArray: [64, 25, 12, 22, 11],
    supportsCustomInput: true,
  },
  {
    id: "insertion",
    label: "Insertion Sort",
    code: INSERTION_SORT_CODE,
    steps: makeInsertionSortSteps,
    category: "sorting",
    complexity: "O(n²)",
    description: "Insert each element into sorted position",
    defaultArray: [12, 11, 13, 5, 6],
    supportsCustomInput: true,
  },
  {
    id: "merge",
    label: "Merge Sort",
    code: MERGE_SORT_CODE,
    steps: makeMergeSortSteps,
    category: "sorting",
    complexity: "O(n log n)",
    description: "Divide into halves, merge sorted halves",
    defaultArray: [38, 27, 43, 3, 9, 82, 10],
    supportsCustomInput: true,
  },
  {
    id: "quick",
    label: "Quick Sort",
    code: QUICK_SORT_CODE,
    steps: makeQuickSortSteps,
    category: "sorting",
    complexity: "O(n log n)",
    description: "Choose pivot, partition, recurse",
    defaultArray: [10, 7, 8, 9, 1, 5],
    supportsCustomInput: true,
  },
  {
    id: "binary",
    label: "Binary Search",
    code: BINARY_SEARCH_CODE,
    steps: (arr, t) => makeBinarySearchSteps(arr, t),
    category: "searching",
    complexity: "O(log n)",
    description: "Halve search space each step",
    defaultArray: [1, 3, 5, 7, 9, 11],
    defaultTarget: 7,
    supportsCustomInput: true,
  },
  {
    id: "linear",
    label: "Linear Search",
    code: LINEAR_SEARCH_CODE,
    steps: (arr, t) => makeLinearSearchSteps(arr, t),
    category: "searching",
    complexity: "O(n)",
    description: "Scan left to right until found",
    defaultArray: [4, 2, 7, 1, 9, 3],
    defaultTarget: 7,
    supportsCustomInput: true,
  },
  {
    id: "stack",
    label: "Stack Ops",
    code: STACK_CODE,
    steps: makeStackSteps,
    category: "datastructure",
    complexity: "O(1)",
    description: "LIFO — push/pop/peek operations",
  },
  {
    id: "queue",
    label: "Queue Ops",
    code: QUEUE_CODE,
    steps: makeQueueSteps,
    category: "datastructure",
    complexity: "O(1)",
    description: "FIFO — enqueue/dequeue/front",
  },
  {
    id: "factorial",
    label: "Factorial",
    code: FACTORIAL_CODE,
    steps: makeFactorialSteps,
    category: "recursion",
    complexity: "O(n)",
    description: "Recursive call stack unwinding",
  },
  {
    id: "fibonacci",
    label: "Fibonacci DP",
    code: FIBONACCI_CODE,
    steps: makeFibonacciSteps,
    category: "recursion",
    complexity: "O(n)",
    description: "DP table filled step by step",
  },
  {
    id: "twosum",
    label: "Two Sum",
    code: TWO_SUM_CODE,
    steps: (arr, t) => makeTwoSumSteps(arr, t),
    category: "searching",
    complexity: "O(n)",
    description: "Hash map for O(n) pair lookup",
    defaultArray: [2, 7, 11, 15],
    defaultTarget: 9,
    supportsCustomInput: true,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getStepType(
  desc: string,
): "done" | "swap" | "compare" | "normal" | "found" {
  if (desc.startsWith("✅")) return "done";
  if (desc.startsWith("❌")) return "found";
  if (desc.toLowerCase().includes("swap")) return "swap";
  if (
    desc.toLowerCase().includes("compare") ||
    desc.toLowerCase().includes("check") ||
    desc.toLowerCase().includes("===") ||
    desc.toLowerCase().includes(">")
  )
    return "compare";
  return "normal";
}

const STEP_STYLES = {
  done: {
    border: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    label: "✅ Done",
    labelColor: "#22c55e",
    badge: "bg-green-500",
  },
  found: {
    border: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    label: "❌ Not Found",
    labelColor: "#ef4444",
    badge: "bg-red-500",
  },
  swap: {
    border: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    label: "🔄 Swap",
    labelColor: "#ef4444",
    badge: "bg-red-500",
  },
  compare: {
    border: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    label: "⚖️ Compare",
    labelColor: "#f59e0b",
    badge: "bg-amber-500",
  },
  normal: {
    border: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    label: "→ Execute",
    labelColor: "#8b5cf6",
    badge: "bg-violet-500",
  },
};

const VAR_COLORS = [
  {
    bg: "bg-violet-500/20",
    text: "text-violet-300",
    border: "border-violet-500/40",
  },
  { bg: "bg-pink-500/20", text: "text-pink-300", border: "border-pink-500/40" },
  {
    bg: "bg-amber-500/20",
    text: "text-amber-300",
    border: "border-amber-500/40",
  },
  { bg: "bg-cyan-500/20", text: "text-cyan-300", border: "border-cyan-500/40" },
  {
    bg: "bg-emerald-500/20",
    text: "text-emerald-300",
    border: "border-emerald-500/40",
  },
];

function varColor(name: string) {
  const hash = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return VAR_COLORS[hash % VAR_COLORS.length];
}

function randomArray(len = 8, max = 80): number[] {
  return Array.from({ length: len }, () => Math.floor(Math.random() * max) + 5);
}

function parseArrayInput(input: string): number[] | null {
  try {
    const nums = input
      .split(",")
      .map((s) => Number.parseInt(s.trim(), 10))
      .filter((n) => !Number.isNaN(n));
    if (nums.length < 2 || nums.length > 15) return null;
    return nums;
  } catch {
    return null;
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function BottomNav() {
  const { setPage } = useApp();
  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Chat", page: "chat" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Study", page: "study" },
    { icon: <Calendar className="w-5 h-5" />, label: "Events", page: "events" },
    { icon: <Code className="w-5 h-5" />, label: "Problems", page: "problems" },
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
      page: "dashboard",
    },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border flex items-center justify-around px-2 py-2 shadow-lg">
      {navItems.map((item) => (
        <button
          type="button"
          key={item.page}
          onClick={() => setPage(item.page as Parameters<typeof setPage>[0])}
          className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary transition-colors px-3 py-1"
        >
          {item.icon}
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

// Array Bar Visualizer
function ArrayVisualizer({
  array,
  highlightIndices = [],
  swapping,
  sortedUpTo,
  foundIndex,
  algoId,
  variables,
  zoom,
}: {
  array: number[];
  highlightIndices?: number[];
  swapping?: [number, number];
  sortedUpTo?: number;
  foundIndex?: number;
  algoId: string;
  variables: StepVariable[];
  zoom: number;
}) {
  const max = Math.max(...array, 1);
  const maxBarH = 140 * zoom;
  let low = -1;
  let high = -1;
  let mid = -1;
  if (algoId === "binary" || algoId === "linear") {
    for (const v of variables) {
      if (v.name === "low" && typeof v.value === "number") low = v.value;
      if (v.name === "high" && typeof v.value === "number") high = v.value;
      if (v.name === "mid" && typeof v.value === "number") mid = v.value;
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="flex items-end gap-1.5 justify-center w-full"
        style={{ minHeight: maxBarH + 50 }}
      >
        {array.map((val, idx) => {
          const isHighlight = highlightIndices.includes(idx);
          const isSwap =
            swapping && (swapping[0] === idx || swapping[1] === idx);
          const isSorted =
            sortedUpTo !== undefined &&
            sortedUpTo !== 0 &&
            idx >= (sortedUpTo || array.length);
          const isFound = foundIndex === idx;
          const barH = Math.max(16, (val / max) * maxBarH);
          let barColor = "#4f46e5";
          let shadow = "none";
          if (isFound) {
            barColor = "#22c55e";
            shadow = "0 0 20px 6px rgba(34,197,94,0.5)";
          } else if (isSwap) {
            barColor = "#ef4444";
            shadow = "0 0 16px 4px rgba(239,68,68,0.5)";
          } else if (isHighlight) {
            barColor = "#f59e0b";
            shadow = "0 0 16px 4px rgba(245,158,11,0.4)";
          } else if (isSorted) {
            barColor = "#22c55e";
          }

          return (
            <motion.div
              key={`bar-${idx}`}
              layout
              className="flex flex-col items-center"
              style={{
                minWidth: Math.max(24, Math.floor((280 * zoom) / array.length)),
              }}
            >
              <motion.span
                animate={{
                  color: isSwap
                    ? "#ef4444"
                    : isHighlight
                      ? "#f59e0b"
                      : isFound
                        ? "#22c55e"
                        : "#a5b4fc",
                }}
                transition={{ duration: 0.2 }}
                className="text-xs font-bold mb-1"
                style={{ fontSize: 11 * zoom }}
              >
                {val}
              </motion.span>
              <motion.div
                key={`bar-rect-${idx}`}
                animate={{
                  height: barH,
                  backgroundColor: barColor,
                  boxShadow: shadow,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="w-full rounded-t-md relative overflow-visible"
                style={{ minHeight: 6 }}
              >
                {isSwap && (
                  <motion.div
                    className="absolute inset-0 rounded-t-md"
                    animate={{ opacity: [0.6, 0, 0.6] }}
                    transition={{
                      duration: 0.6,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{ backgroundColor: barColor }}
                  />
                )}
              </motion.div>
              <span
                className="text-[10px] mt-0.5"
                style={{ color: "#4b5563", fontSize: 10 * zoom }}
              >
                {idx}
              </span>
              {algoId === "binary" && (
                <div className="flex flex-col items-center gap-0.5 mt-0.5">
                  {low === idx && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[9px] font-bold text-cyan-400 bg-cyan-500/20 rounded px-1"
                    >
                      ▲L
                    </motion.span>
                  )}
                  {mid === idx && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[9px] font-bold text-amber-400 bg-amber-500/20 rounded px-1"
                    >
                      ▲M
                    </motion.span>
                  )}
                  {high === idx && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[9px] font-bold text-pink-400 bg-pink-500/20 rounded px-1"
                    >
                      ▲H
                    </motion.span>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Stack Visualizer
function StackVisualizer({
  items,
}: { items: { label: string; value: number | string }[] }) {
  return (
    <div className="flex flex-col items-center gap-1 py-2">
      <div className="text-xs text-gray-500 mb-2 font-mono">← TOP</div>
      {items.length === 0 && (
        <div className="text-gray-600 text-sm italic py-4">Stack is empty</div>
      )}
      <AnimatePresence>
        {[...items].reverse().map((item, idx) => (
          <motion.div
            key={`stack-${item.label}-${idx}`}
            initial={{ opacity: 0, x: -40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={`w-32 h-12 rounded-lg flex items-center justify-center font-bold text-lg border-2 ${idx === 0 ? "bg-blue-600/30 border-blue-400 text-blue-200 shadow-[0_0_16px_rgba(59,130,246,0.4)]" : "bg-violet-600/20 border-violet-500/40 text-violet-300"}`}
          >
            {item.value}
            {idx === 0 && (
              <span className="text-[10px] text-blue-400 ml-2 font-normal">
                ← TOP
              </span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="w-32 h-2 bg-gray-700 rounded mt-1" />
      <div className="text-[10px] text-gray-600 mt-1">BOTTOM</div>
    </div>
  );
}

// Queue Visualizer
function QueueVisualizer({
  items,
}: { items: { label: string; value: number | string }[] }) {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {items.length === 0 && (
          <div className="text-gray-600 text-sm italic py-4">
            Queue is empty
          </div>
        )}
        <AnimatePresence>
          {items.map((item, idx) => (
            <motion.div
              key={`queue-${item.label}-${idx}`}
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-lg border-2 ${idx === 0 ? "bg-green-600/30 border-green-400 text-green-200 shadow-[0_0_16px_rgba(34,197,94,0.4)]" : idx === items.length - 1 ? "bg-amber-600/30 border-amber-400 text-amber-200" : "bg-violet-600/20 border-violet-500/40 text-violet-300"}`}
            >
              {item.value}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {items.length > 0 && (
        <div className="flex gap-2 text-[10px] text-gray-500">
          <span className="text-green-400">↑ FRONT (dequeue)</span>
          {items.length > 1 && (
            <span className="text-amber-400">↑ REAR (enqueue)</span>
          )}
        </div>
      )}
    </div>
  );
}

// Call Stack Visualizer (for Factorial)
function CallStackVisualizer({
  frames,
}: { frames: { fn: string; param: string | number }[] }) {
  return (
    <div className="flex flex-col items-center gap-1 py-2">
      <div className="text-xs text-gray-500 mb-1 font-mono">
        ← CALL STACK TOP
      </div>
      {frames.length === 0 && (
        <div className="text-gray-600 text-sm italic py-4">
          Call stack empty
        </div>
      )}
      <AnimatePresence>
        {[...frames].reverse().map((frame, idx) => (
          <motion.div
            key={`frame-${frame.fn}-${frame.param}-${idx}`}
            initial={{ opacity: 0, scale: 0.7, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`rounded-lg px-4 py-2 font-mono text-sm border flex items-center gap-2 ${idx === 0 ? "bg-amber-600/30 border-amber-400 text-amber-200 shadow-[0_0_14px_rgba(245,158,11,0.3)]" : "bg-gray-800 border-gray-600 text-gray-300"}`}
          >
            <span className="text-cyan-400">{frame.fn}</span>
            <span className="text-gray-500">(</span>
            <span className="text-pink-300 font-bold">
              {String(frame.param)}
            </span>
            <span className="text-gray-500">)</span>
            {idx === 0 && (
              <span className="text-[10px] text-amber-400 ml-1">← active</span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// DP Table Visualizer (Fibonacci)
function DPTableVisualizer({
  table,
  highlight,
}: { table: number[]; highlight: number }) {
  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <div className="flex gap-1 flex-wrap justify-center">
        {table.map((val, idx) => (
          <motion.div
            key={`dp-${idx}`}
            animate={{
              backgroundColor:
                idx === highlight
                  ? "rgba(59,130,246,0.4)"
                  : idx < highlight
                    ? "rgba(34,197,94,0.2)"
                    : "rgba(55,65,81,0.5)",
              borderColor:
                idx === highlight
                  ? "#3b82f6"
                  : idx < highlight
                    ? "#22c55e"
                    : "#374151",
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center rounded-lg border-2 w-12 h-14 justify-center"
          >
            <span
              className={`text-lg font-bold ${idx === highlight ? "text-blue-300" : idx < highlight ? "text-green-300" : "text-gray-500"}`}
            >
              {val}
            </span>
            <span className="text-[10px] text-gray-500 mt-0.5">dp[{idx}]</span>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-4 text-[10px] text-gray-500 mt-1">
        <span className="text-blue-400">■ Computing</span>
        <span className="text-green-400">■ Filled</span>
        <span className="text-gray-500">■ Pending</span>
      </div>
    </div>
  );
}

// Merge State Visualizer
function MergeVisualizer({
  state,
}: { state: NonNullable<VisStep["mergeState"]> }) {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="flex gap-6 flex-wrap justify-center">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-blue-400 font-bold">LEFT</span>
          <div className="flex gap-1">
            {state.left.map((v, i) => (
              <div
                key={`l-${i}`}
                className="w-10 h-10 rounded bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-200 font-bold text-sm"
              >
                {v}
              </div>
            ))}
            {state.left.length === 0 && (
              <div className="text-gray-600 text-xs italic px-2">empty</div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-pink-400 font-bold">RIGHT</span>
          <div className="flex gap-1">
            {state.right.map((v, i) => (
              <div
                key={`r-${i}`}
                className="w-10 h-10 rounded bg-pink-600/30 border border-pink-500/50 flex items-center justify-center text-pink-200 font-bold text-sm"
              >
                {v}
              </div>
            ))}
            {state.right.length === 0 && (
              <div className="text-gray-600 text-xs italic px-2">empty</div>
            )}
          </div>
        </div>
      </div>
      {state.merged.length > 0 && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-green-400 font-bold">MERGED ↓</span>
          <div className="flex gap-1">
            {state.merged.map((v, i) => (
              <motion.div
                key={`m-${i}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-10 h-10 rounded bg-green-600/30 border border-green-500/50 flex items-center justify-center text-green-200 font-bold text-sm"
              >
                {v}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Code Panel with syntax-highlighted lines
function syntaxHighlight(line: string, isActive: boolean): React.ReactNode {
  if (isActive) {
    return <span style={{ color: "#fef08a" }}>{line}</span>;
  }
  // Simple token split — no dangerouslySetInnerHTML
  const keywords =
    /\b(function|return|let|const|var|if|else|for|while|new|class|constructor|this)\b/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: intentional loop pattern
  while ((match = keywords.exec(line)) !== null) {
    if (match.index > last)
      parts.push(
        <span key={`pre-${match.index}`} style={{ color: "#94a3b8" }}>
          {line.slice(last, match.index)}
        </span>,
      );
    parts.push(
      <span key={`kw-${match.index}`} style={{ color: "#c084fc" }}>
        {match[0]}
      </span>,
    );
    last = match.index + match[0].length;
  }
  if (last < line.length)
    parts.push(
      <span key="tail" style={{ color: "#94a3b8" }}>
        {line.slice(last)}
      </span>,
    );
  return parts.length > 0 ? (
    <>{parts}</>
  ) : (
    <span style={{ color: "#94a3b8" }}>{line}</span>
  );
}

function CodePanel({
  lines,
  activeLineIndex,
  zoom,
}: { lines: string[]; activeLineIndex: number; zoom: number }) {
  const activeRef = useRef<HTMLDivElement>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeLineIndex]);

  return (
    <div
      className="font-mono rounded-xl overflow-auto p-3 text-left h-full"
      style={{
        background: "#070d1a",
        fontSize: 12 * zoom,
        lineHeight: 1.75,
        maxHeight: 280,
      }}
    >
      {lines.map((line, i) => (
        <div
          key={`line-${i}`}
          ref={i === activeLineIndex ? activeRef : undefined}
          className={`flex gap-2 px-2 rounded transition-all duration-200 ${i === activeLineIndex ? "bg-yellow-500/20 shadow-[0_0_8px_rgba(234,179,8,0.3)]" : ""}`}
        >
          <span
            className="select-none w-6 text-right shrink-0"
            style={{ color: i === activeLineIndex ? "#fbbf24" : "#374151" }}
          >
            {i + 1}
          </span>
          <span className="whitespace-pre">
            {syntaxHighlight(line, i === activeLineIndex)}
          </span>
        </div>
      ))}
    </div>
  );
}

function makeCustomSteps(code: string): VisStep[] {
  return code.split("\n").map((line, i) => ({
    lineIndex: i,
    description: line.trim()
      ? `Executing: ${line.trim().slice(0, 60)}${line.trim().length > 60 ? "..." : ""}`
      : "(blank line)",
    variables: [],
  }));
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CodeVisualizationPage() {
  const { setPage } = useApp();
  const savedAlgo =
    typeof localStorage !== "undefined"
      ? (localStorage.getItem("cv_algo") ?? "bubble")
      : "bubble";
  const savedSpeed =
    typeof localStorage !== "undefined"
      ? Number(localStorage.getItem("cv_speed") ?? 1)
      : 1;
  const savedArr =
    typeof localStorage !== "undefined"
      ? (localStorage.getItem("cv_array") ?? "")
      : "";

  const [selectedAlgoId, setSelectedAlgoId] = useState<string>(savedAlgo);
  const [customCode, setCustomCode] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(savedSpeed);
  const [zoom, setZoom] = useState(1);
  const [arrayInput, setArrayInput] = useState(savedArr);
  const [targetInput, setTargetInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    Algorithm["category"] | "all"
  >("all");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const algo =
    ALGORITHM_REGISTRY.find((a) => a.id === selectedAlgoId) ??
    ALGORITHM_REGISTRY[0];

  const computedArray = (): number[] | undefined => {
    if (!algo.supportsCustomInput) return undefined;
    if (arrayInput.trim()) {
      const parsed = parseArrayInput(arrayInput);
      if (parsed) {
        if (algo.id === "binary") return [...parsed].sort((a, b) => a - b);
        return parsed;
      }
    }
    return algo.defaultArray;
  };

  const computedTarget = (): number | undefined => {
    const t = Number.parseInt(targetInput.trim(), 10);
    if (!Number.isNaN(t)) return t;
    return algo.defaultTarget;
  };

  const steps: VisStep[] = isCustom
    ? makeCustomSteps(customCode || "// Paste your code here")
    : algo.steps(computedArray(), computedTarget());

  const codeLines = (
    isCustom ? customCode || "// Paste your code here" : algo.code
  ).split("\n");
  const currentStep = steps[stepIndex] ?? steps[0];
  const stepType = getStepType(currentStep.description);
  const stepStyle = STEP_STYLES[stepType];
  const progress =
    steps.length > 1 ? (stepIndex / (steps.length - 1)) * 100 : 0;

  // Persist preferences
  useEffect(() => {
    localStorage.setItem("cv_algo", selectedAlgoId);
  }, [selectedAlgoId]);
  useEffect(() => {
    localStorage.setItem("cv_speed", String(speed));
  }, [speed]);
  useEffect(() => {
    if (arrayInput) localStorage.setItem("cv_array", arrayInput);
  }, [arrayInput]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intervalRef stable
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 800 / speed);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, speed, steps.length]);

  const reset = () => {
    setStepIndex(0);
    setIsPlaying(false);
  };

  const handleAlgoSelect = (id: string) => {
    setSelectedAlgoId(id);
    setIsCustom(false);
    setInputError("");
    reset();
  };

  const handleArrayInput = (val: string) => {
    setArrayInput(val);
    setInputError("");
    reset();
  };

  const handleTargetInput = (val: string) => {
    setTargetInput(val);
    reset();
  };

  const handleRandomize = () => {
    const arr = randomArray(Math.floor(Math.random() * 5) + 6, 90);
    const sorted = algo.id === "binary" ? [...arr].sort((a, b) => a - b) : arr;
    setArrayInput(sorted.join(", "));
    reset();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setCustomCode((ev.target?.result as string) ?? "");
      setIsCustom(true);
      reset();
    };
    reader.readAsText(file);
  };

  const filteredAlgos =
    activeCategory === "all"
      ? ALGORITHM_REGISTRY
      : ALGORITHM_REGISTRY.filter((a) => a.category === activeCategory);

  return (
    <div
      className="h-[100dvh] flex flex-col overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      {/* Header with back button */}
      <header
        className="shrink-0 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)",
          borderBottom: "1px solid rgba(59,130,246,0.25)",
        }}
      >
        <button
          type="button"
          onClick={() => setPage("problems")}
          data-ocid="visualizer.back_button"
          aria-label="Back to problems"
          className="text-blue-400 hover:text-white transition-colors text-xs flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 min-h-[36px] shrink-0"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Back</span>
        </button>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
            <span className="text-blue-400 text-lg sm:text-xl">⬡</span>
            <span>
              Code <span className="text-blue-400">Vision</span>
            </span>
          </div>
          <div
            className="text-[10px] sm:text-[11px] hidden sm:block"
            style={{ color: "rgba(148,163,184,0.7)" }}
          >
            Step-by-step algorithm visualization platform
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-xs text-blue-300 hover:text-white px-2.5 sm:px-3 py-1.5 rounded-full border border-blue-500/40 flex items-center gap-1 transition-colors hover:bg-blue-500/10 min-h-[36px]"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Upload .js</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".js,.ts,.txt"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar — hidden on small mobile, visible on sm+ */}
        <aside
          className="hidden sm:flex w-44 md:w-52 shrink-0 flex-col overflow-hidden border-r"
          style={{
            background: "#070d1a",
            borderColor: "rgba(59,130,246,0.15)",
          }}
        >
          <div
            className="p-3 border-b"
            style={{ borderColor: "rgba(59,130,246,0.15)" }}
          >
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">
              Algorithms
            </div>
            <div className="flex flex-wrap gap-1">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${activeCategory === "all" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
              >
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${activeCategory === cat.id ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  {cat.icon}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
            {CATEGORIES.filter(
              (c) => activeCategory === "all" || activeCategory === c.id,
            ).map((cat) => {
              const catAlgos = filteredAlgos.filter(
                (a) => a.category === cat.id,
              );
              if (catAlgos.length === 0) return null;
              return (
                <div key={cat.id}>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1.5 mt-1"
                    style={{ color: "rgba(100,116,139,0.8)" }}
                  >
                    {cat.icon} {cat.label}
                  </div>
                  {catAlgos.map((a) => (
                    <button
                      type="button"
                      key={a.id}
                      onClick={() => handleAlgoSelect(a.id)}
                      data-ocid={`algo-btn-${a.id}`}
                      className={`w-full text-left px-3 py-2 rounded-lg mb-0.5 transition-all ${!isCustom && selectedAlgoId === a.id ? "bg-blue-600/30 border border-blue-500/50 text-white shadow-[0_0_10px_rgba(59,130,246,0.2)]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                    >
                      <div className="text-xs font-semibold leading-tight">
                        {a.label}
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span
                          className="text-[10px] font-mono"
                          style={{ color: "#60a5fa" }}
                        >
                          {a.complexity}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              );
            })}
            {/* Custom code */}
            <div className="mt-2">
              <div
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-1.5"
                style={{ color: "rgba(100,116,139,0.8)" }}
              >
                ✏️ Custom
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsCustom(true);
                  reset();
                }}
                data-ocid="algo-btn-custom"
                className={`w-full text-left px-3 py-2 rounded-lg transition-all ${isCustom ? "bg-blue-600/30 border border-blue-500/50 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                <div className="text-xs font-semibold">Custom Code</div>
                <div className="text-[10px] text-gray-500">
                  Upload or paste JS
                </div>
              </button>
            </div>
          </div>
        </aside>

        {/* Center + Right panels */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Input bar */}
          {algo.supportsCustomInput && !isCustom && (
            <div
              className="shrink-0 px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 flex-wrap border-b"
              style={{
                background: "#080e1c",
                borderColor: "rgba(59,130,246,0.12)",
              }}
            >
              <div className="flex items-center gap-2">
                <label
                  htmlFor="array-input-field"
                  className="text-[11px] text-gray-500 font-mono"
                >
                  Array:
                </label>
                <input
                  id="array-input-field"
                  type="text"
                  value={arrayInput}
                  onChange={(e) => handleArrayInput(e.target.value)}
                  placeholder={`e.g. ${(algo.defaultArray ?? [5, 3, 8]).join(", ")}`}
                  data-ocid="array-input"
                  className="bg-gray-900 border border-gray-700 rounded-lg px-2 py-1 text-xs text-white font-mono w-40 outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleRandomize}
                  className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                  title="Randomize"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                </button>
              </div>
              {algo.defaultTarget !== undefined && (
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="target-input-field"
                    className="text-[11px] text-gray-500 font-mono"
                  >
                    Target:
                  </label>
                  <input
                    id="target-input-field"
                    type="number"
                    value={targetInput}
                    onChange={(e) => handleTargetInput(e.target.value)}
                    placeholder={String(algo.defaultTarget)}
                    data-ocid="target-input"
                    className="bg-gray-900 border border-gray-700 rounded-lg px-2 py-1 text-xs text-white font-mono w-16 outline-none focus:border-blue-500"
                  />
                </div>
              )}
              {inputError && (
                <span className="text-[11px] text-red-400">{inputError}</span>
              )}
              <span className="text-[10px] text-gray-600 ml-auto">
                Max 15 elements •{" "}
                {algo.id === "binary" ? "Array auto-sorted" : "Comma-separated"}
              </span>
            </div>
          )}

          <div className="flex-1 flex overflow-hidden">
            {/* Center: Visualization */}
            <div
              className="flex-1 flex flex-col overflow-y-auto pb-20"
              style={{ minWidth: 0 }}
            >
              <div className="p-4 space-y-4">
                {/* Custom code textarea */}
                <AnimatePresence>
                  {isCustom && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <textarea
                        value={customCode}
                        onChange={(e) => {
                          setCustomCode(e.target.value);
                          reset();
                        }}
                        placeholder={
                          "// Paste JavaScript code here\nfunction example(n) {\n  let sum = 0;\n  for (let i = 1; i <= n; i++) { sum += i; }\n  return sum;\n}\nexample(5);"
                        }
                        className="w-full h-36 font-mono text-xs rounded-xl p-3 resize-none outline-none border focus:border-blue-500"
                        style={{
                          background: "#070d1a",
                          color: "#e2e8f0",
                          borderColor: "rgba(59,130,246,0.2)",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main visualization card */}
                <div
                  className="rounded-2xl overflow-hidden border"
                  style={{
                    background:
                      "linear-gradient(160deg, #0f172a 0%, #131a2e 100%)",
                    borderColor: "rgba(59,130,246,0.2)",
                    boxShadow: "0 8px 40px rgba(15,23,42,0.6)",
                  }}
                >
                  {/* Visualization header */}
                  <div
                    className="px-4 pt-4 pb-2 flex items-center justify-between border-b"
                    style={{ borderColor: "rgba(59,130,246,0.12)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                        {isCustom ? "Custom Code" : algo.label}
                      </span>
                      {!isCustom && (
                        <span className="text-[10px] font-mono bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
                          {algo.complexity}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setZoom((z) => Math.max(0.7, z - 0.15))}
                        className="p-1 rounded text-gray-500 hover:text-white transition-colors"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] text-gray-600 font-mono w-8 text-center">
                        {Math.round(zoom * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={() => setZoom((z) => Math.min(1.5, z + 0.15))}
                        className="p-1 rounded text-gray-500 hover:text-white transition-colors"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Visual area */}
                  <div className="px-4 py-4 min-h-[160px] flex items-center justify-center">
                    {currentStep.dpTable ? (
                      <DPTableVisualizer
                        table={currentStep.dpTable}
                        highlight={currentStep.dpHighlight ?? -1}
                      />
                    ) : currentStep.callStack ? (
                      <CallStackVisualizer frames={currentStep.callStack} />
                    ) : currentStep.stackState ? (
                      <StackVisualizer items={currentStep.stackState} />
                    ) : currentStep.queueState ? (
                      <QueueVisualizer items={currentStep.queueState} />
                    ) : currentStep.mergeState ? (
                      <MergeVisualizer state={currentStep.mergeState} />
                    ) : currentStep.arrayState ? (
                      <ArrayVisualizer
                        array={currentStep.arrayState}
                        highlightIndices={currentStep.highlightIndices}
                        swapping={currentStep.swapping}
                        sortedUpTo={currentStep.sortedUpTo}
                        foundIndex={currentStep.foundIndex}
                        algoId={selectedAlgoId}
                        variables={currentStep.variables}
                        zoom={zoom}
                      />
                    ) : (
                      <div className="text-gray-600 text-sm italic">
                        No visual for this step
                      </div>
                    )}
                  </div>

                  {/* Step description */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`step-${stepIndex}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="mx-4 mb-3 rounded-xl p-3 relative"
                      style={{
                        background: stepStyle.bg,
                        borderLeft: `4px solid ${stepStyle.border}`,
                        border: `1px solid ${stepStyle.border}40`,
                        borderLeftWidth: 4,
                      }}
                    >
                      <div
                        className={`absolute top-2.5 right-3 ${stepStyle.badge} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}
                      >
                        {stepIndex + 1}/{steps.length}
                      </div>
                      <div
                        className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: stepStyle.labelColor }}
                      >
                        {stepStyle.label}
                      </div>
                      <div className="text-sm font-semibold text-white pr-16 leading-snug">
                        {currentStep.description}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Variables panel */}
                  {currentStep.variables.length > 0 && (
                    <div className="px-4 pb-4">
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">
                        Variables
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {currentStep.variables.map((v, idx) => {
                          const vc = varColor(v.name);
                          return (
                            <motion.div
                              key={`${v.name}-${JSON.stringify(v.value)}-${idx}`}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 18,
                              }}
                              className={`${vc.bg} border ${vc.border} rounded-lg px-2.5 py-1.5 text-xs font-mono`}
                            >
                              <span className={`${vc.text} font-bold`}>
                                {v.name}
                              </span>
                              <span className="text-gray-500"> = </span>
                              <span className="text-white font-semibold">
                                {String(v.value)}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="text-gray-500 font-mono">
                      Step {stepIndex + 1} / {steps.length}
                    </span>
                    <span className="font-bold" style={{ color: "#60a5fa" }}>
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(30,41,59,0.8)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                      }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <div
                  className="rounded-2xl border p-4 space-y-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #0d1526 0%, #111e38 100%)",
                    borderColor: "rgba(59,130,246,0.15)",
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setStepIndex((p) => Math.max(0, p - 1));
                        setIsPlaying(false);
                      }}
                      disabled={stepIndex === 0}
                      data-ocid="step-back-btn"
                      className="rounded-full w-10 h-10 p-0 border-gray-700 hover:border-blue-500 bg-gray-900/60"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div className="relative">
                      {isPlaying && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 0, 0.4],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          style={{ background: "#3b82f6" }}
                        />
                      )}
                      <Button
                        onClick={() => setIsPlaying((p) => !p)}
                        disabled={stepIndex >= steps.length - 1 && !isPlaying}
                        data-ocid="play-pause-btn"
                        className="relative rounded-full w-14 h-14 p-0 text-white shadow-xl"
                        style={{
                          background: isPlaying
                            ? "linear-gradient(135deg, #dc2626, #7c3aed)"
                            : "linear-gradient(135deg, #2563eb, #4f46e5)",
                          boxShadow: isPlaying
                            ? "0 0 24px 4px rgba(59,130,246,0.5)"
                            : "0 4px 20px rgba(37,99,235,0.4)",
                        }}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6" />
                        )}
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setStepIndex((p) => Math.min(steps.length - 1, p + 1));
                        setIsPlaying(false);
                      }}
                      disabled={stepIndex >= steps.length - 1}
                      data-ocid="step-forward-btn"
                      className="rounded-full w-10 h-10 p-0 border-gray-700 hover:border-blue-500 bg-gray-900/60"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={reset}
                      data-ocid="reset-btn"
                      className="rounded-full w-10 h-10 p-0 border-gray-700 hover:border-blue-500 bg-gray-900/60"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-gray-500">⚡ Speed</span>
                      <span className="font-bold text-blue-300">
                        {speed.toFixed(1)}x
                      </span>
                    </div>
                    <Slider
                      min={0.5}
                      max={5}
                      step={0.5}
                      value={[speed]}
                      onValueChange={([v]) => setSpeed(v)}
                      data-ocid="speed-slider"
                    />
                    <div className="flex justify-between text-[10px] text-gray-600 mt-1">
                      <span>0.5x Slow</span>
                      <span>5x Fast</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-gray-500">🎯 Jump to Step</span>
                      <span className="font-bold text-blue-300">
                        {stepIndex + 1}
                      </span>
                    </div>
                    <Slider
                      min={0}
                      max={steps.length - 1}
                      step={1}
                      value={[stepIndex]}
                      onValueChange={([v]) => {
                        setStepIndex(v);
                        setIsPlaying(false);
                      }}
                      data-ocid="step-scrubber"
                    />
                    <div className="flex justify-between text-[10px] text-gray-600 mt-1">
                      <span>Start</span>
                      <span>End</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel: Code — hidden on small screens */}
            <div
              className="hidden md:flex w-56 lg:w-64 shrink-0 flex-col overflow-hidden border-l"
              style={{
                background: "#070d1a",
                borderColor: "rgba(59,130,246,0.12)",
              }}
            >
              <div
                className="px-3 py-2 border-b flex items-center justify-between"
                style={{ borderColor: "rgba(59,130,246,0.12)" }}
              >
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
                  Source Code
                </span>
                <span className="text-[10px] text-gray-600 font-mono">
                  Line {currentStep.lineIndex + 1}
                </span>
              </div>
              <div className="flex-1 overflow-hidden p-2">
                <CodePanel
                  lines={codeLines}
                  activeLineIndex={currentStep.lineIndex}
                  zoom={zoom}
                />
              </div>
              {/* Algorithm info */}
              {!isCustom && (
                <div
                  className="p-3 border-t space-y-2"
                  style={{ borderColor: "rgba(59,130,246,0.12)" }}
                >
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">
                    About
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {algo.description}
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-mono bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
                      {algo.complexity}
                    </span>
                    <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full capitalize">
                      {algo.category}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

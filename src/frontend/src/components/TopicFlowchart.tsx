import { motion } from "motion/react";
import type { ReactElement } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type FlowchartType =
  // existing
  | "memory-hierarchy"
  | "compiler-flow"
  | "if-else"
  | "loop"
  | "linear-search"
  | "function-call"
  | "pointer-ops"
  | "array-access"
  | "switch-flow"
  | "do-while"
  | "for-loop"
  // new – module 1
  | "processor-flow"
  | "io-device-flow"
  | "storage-hierarchy"
  | "os-flow"
  | "loader-linker-flow"
  | "algorithm-flow"
  | "compilation-pipeline"
  | "data-types-hierarchy"
  | "variable-lifecycle"
  | "storage-classes-flow"
  // new – module 2
  | "operator-precedence-flow"
  | "type-conversion-flow"
  | "bitwise-ops-flow"
  | "nested-if-flow"
  | "break-continue-flow"
  // new – module 3
  | "array-declaration-flow"
  | "multidim-array-flow"
  | "string-ops-flow"
  | "structure-flow"
  | "union-vs-struct-flow"
  | "array-of-structs-flow"
  | "bubble-sort-flow"
  // new – module 4
  | "call-by-value-ref-flow"
  | "array-passing-flow"
  | "recursion-stack-flow"
  // new – module 5
  | "pointer-arithmetic-flow"
  | "array-of-pointers-flow"
  | "struct-pointer-flow";

interface TopicFlowchartProps {
  type: FlowchartType;
}

// ─── Shared SVG Primitives ────────────────────────────────────────────────────

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={`arr-${id}`}
        markerWidth="8"
        markerHeight="6"
        refX="7"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
      </marker>
    </defs>
  );
}

function A({
  id,
  x1,
  y1,
  x2,
  y2,
}: { id: string; x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#6b7280"
      strokeWidth="1.5"
      markerEnd={`url(#arr-${id})`}
    />
  );
}

function Line({
  x1,
  y1,
  x2,
  y2,
}: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6b7280" strokeWidth="1.5" />
  );
}

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  color,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  color?: string;
}) {
  const fills: Record<string, string> = {
    blue: "#1e40af22",
    green: "#16a34a22",
    orange: "#ea580c22",
    purple: "#7c3aed22",
    cyan: "#0891b222",
    pink: "#db277722",
    teal: "#0f766e22",
  };
  const strokes: Record<string, string> = {
    blue: "#3b82f6",
    green: "#22c55e",
    orange: "#f97316",
    purple: "#a855f7",
    cyan: "#22d3ee",
    pink: "#ec4899",
    teal: "#14b8a6",
  };
  const fill = fills[color ?? ""] ?? "#ffffff08";
  const stroke = strokes[color ?? ""] ?? "#4b5563";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="6"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - (sub ? 7 : 0)}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="11"
        fontWeight="600"
        fill="#f1f5f9"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 9}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="9"
          fill="#94a3b8"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Diamond({
  x,
  y,
  w,
  h,
  label,
}: { x: number; y: number; w: number; h: number; label: string }) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g>
      <polygon
        points={`${cx},${y} ${x + w},${cy} ${cx},${y + h} ${x},${cy}`}
        fill="#92400e22"
        stroke="#f59e0b"
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="10"
        fontWeight="600"
        fill="#f1f5f9"
      >
        {label}
      </text>
    </g>
  );
}

function Term({
  x,
  y,
  w,
  h,
  label,
  red,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  red?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={h / 2}
        fill={red ? "#dc262622" : "#16a34a22"}
        stroke={red ? "#ef4444" : "#22c55e"}
        strokeWidth="1.5"
      />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        {label}
      </text>
    </g>
  );
}

function Lbl({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="9"
      fontStyle="italic"
      fill="#94a3b8"
    >
      {text}
    </text>
  );
}

// ─── Existing Charts ──────────────────────────────────────────────────────────

function MemoryHierarchyChart() {
  const id = "mem";
  return (
    <svg
      viewBox="0 0 300 300"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="mem-title"
    >
      <title id="mem-title">Memory Hierarchy</title>
      <Defs id={id} />
      <Box
        x={100}
        y={10}
        w={100}
        h={34}
        label="CPU Registers"
        sub="~1 ns • Bytes"
        color="purple"
      />
      <A id={id} x1={150} y1={44} x2={150} y2={64} />
      <Box
        x={85}
        y={64}
        w={130}
        h={34}
        label="Cache (L1/L2/L3)"
        sub="~4–40 ns • MB"
        color="cyan"
      />
      <A id={id} x1={150} y1={98} x2={150} y2={118} />
      <Box
        x={70}
        y={118}
        w={160}
        h={34}
        label="RAM (Main Memory)"
        sub="~60–100 ns • GB"
        color="blue"
      />
      <A id={id} x1={150} y1={152} x2={150} y2={172} />
      <Box
        x={55}
        y={172}
        w={190}
        h={34}
        label="SSD / HDD Storage"
        sub="~0.1–10 ms • TB"
        color="orange"
      />
      <A id={id} x1={150} y1={206} x2={150} y2={226} />
      <Box
        x={40}
        y={226}
        w={220}
        h={34}
        label="Network / Cloud"
        sub="~100 ms • PB"
        color="green"
      />
      <text
        x={6}
        y={150}
        fontSize="9"
        fill="#94a3b8"
        textAnchor="middle"
        transform="rotate(-90, 6, 150)"
      >
        Faster / Smaller
      </text>
      <text
        x={294}
        y={150}
        fontSize="9"
        fill="#94a3b8"
        textAnchor="middle"
        transform="rotate(90, 294, 150)"
      >
        Slower / Larger
      </text>
    </svg>
  );
}

function CompilerFlowChart() {
  const id = "comp";
  const boxes = [
    { label: "Source Code (.c)", color: "cyan" },
    { label: "Preprocessor", sub: "#include, #define" },
    { label: "Lexer", sub: "Tokenize keywords" },
    { label: "Parser", sub: "Build syntax tree" },
    { label: "Semantic Analysis", sub: "Type check / scope" },
    { label: "Code Generation", sub: "Assembly (.s)" },
    { label: "Assembler", sub: "Object code (.o)" },
    { label: "Linker", sub: "Combine libraries" },
    { label: "Executable", color: "green" },
  ];
  const bH = 28;
  const gap = 7;
  const bW = 200;
  const totalH = boxes.length * bH + (boxes.length - 1) * gap + 24;
  return (
    <svg
      viewBox={`0 0 260 ${totalH}`}
      className="w-full max-w-xs mx-auto"
      aria-labelledby="comp-title"
    >
      <title id="comp-title">Compiler Pipeline</title>
      <Defs id={id} />
      {boxes.map((b, i) => {
        const y = 10 + i * (bH + gap);
        return (
          <g key={b.label}>
            <Box
              x={30}
              y={y}
              w={bW}
              h={bH}
              label={b.label}
              sub={b.sub}
              color={b.color}
            />
            {i < boxes.length - 1 && (
              <A id={id} x1={130} y1={y + bH} x2={130} y2={y + bH + gap} />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function IfElseChart() {
  const id = "ife";
  return (
    <svg
      viewBox="0 0 280 260"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="ife-title"
    >
      <title id="ife-title">if-else Flowchart</title>
      <Defs id={id} />
      <Term x={100} y={10} w={80} h={28} label="START" />
      <A id={id} x1={140} y1={38} x2={140} y2={62} />
      <Diamond x={78} y={62} w={124} h={50} label="Condition?" />
      <A id={id} x1={202} y1={87} x2={232} y2={87} />
      <Lbl x={218} y={80} text="YES" />
      <Box x={226} y={71} w={44} h={32} label="True" color="green" />
      <A id={id} x1={248} y1={103} x2={248} y2={182} />
      <A id={id} x1={78} y1={87} x2={16} y2={87} />
      <Lbl x={44} y={80} text="NO" />
      <Box x={4} y={71} w={44} h={32} label="False" color="orange" />
      <A id={id} x1={26} y1={103} x2={26} y2={182} />
      <Line x1={26} y1={182} x2={248} y2={182} />
      <A id={id} x1={140} y1={182} x2={140} y2={206} />
      <Box x={95} y={206} w={90} h={28} label="Continue…" color="blue" />
      <A id={id} x1={140} y1={234} x2={140} y2={248} />
      <Term x={100} y={248} w={80} h={24} label="END" red />
    </svg>
  );
}

function LoopChart() {
  const id = "loop";
  return (
    <svg
      viewBox="0 0 280 300"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="loop-title"
    >
      <title id="loop-title">while Loop Flowchart</title>
      <Defs id={id} />
      <Term x={100} y={10} w={80} h={28} label="START" />
      <A id={id} x1={140} y1={38} x2={140} y2={58} />
      <Box x={90} y={58} w={100} h={28} label="Init: i = 0" color="blue" />
      <A id={id} x1={140} y1={86} x2={140} y2={108} />
      <Diamond x={78} y={108} w={124} h={48} label="i &lt; n ?" />
      <A id={id} x1={202} y1={132} x2={252} y2={132} />
      <Lbl x={228} y={124} text="NO" />
      <A id={id} x1={252} y1={132} x2={252} y2={262} />
      <A id={id} x1={252} y1={262} x2={207} y2={262} />
      <A id={id} x1={140} y1={156} x2={140} y2={178} />
      <Lbl x={108} y={168} text="YES" />
      <Box x={88} y={178} w={104} h={28} label="Loop Body" color="purple" />
      <A id={id} x1={140} y1={206} x2={140} y2={228} />
      <Box x={88} y={228} w={104} h={28} label="Increment: i++" color="cyan" />
      <A id={id} x1={88} y1={242} x2={38} y2={242} />
      <Line x1={38} y1={132} x2={38} y2={242} />
      <A id={id} x1={38} y1={132} x2={78} y2={132} />
      <Term x={157} y={252} w={78} h={26} label="END" red />
    </svg>
  );
}

function LinearSearchChart() {
  const id = "lsearch";
  return (
    <svg
      viewBox="0 0 290 330"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="lsearch-title"
    >
      <title id="lsearch-title">Linear Search Flowchart</title>
      <Defs id={id} />
      <Term x={105} y={10} w={80} h={28} label="START" />
      <A id={id} x1={145} y1={38} x2={145} y2={58} />
      <Box
        x={87}
        y={58}
        w={116}
        h={28}
        label="Input: array, key"
        color="blue"
      />
      <A id={id} x1={145} y1={86} x2={145} y2={106} />
      <Box x={87} y={106} w={116} h={28} label="Set i = 0" color="cyan" />
      <A id={id} x1={145} y1={134} x2={145} y2={154} />
      <Diamond x={83} y={154} w={124} h={48} label="i &lt; length?" />
      <A id={id} x1={207} y1={178} x2={255} y2={178} />
      <Lbl x={232} y={170} text="NO" />
      <Box x={237} y={164} w={54} h={28} label="Not Found" color="orange" />
      <A id={id} x1={264} y1={192} x2={264} y2={284} />
      <A id={id} x1={145} y1={202} x2={145} y2={222} />
      <Lbl x={113} y={213} text="YES" />
      <Diamond x={77} y={222} w={136} h={48} label="arr[i]==key?" />
      <A id={id} x1={213} y1={246} x2={255} y2={246} />
      <Lbl x={234} y={238} text="YES" />
      <Box x={238} y={232} w={46} h={28} label="Found!" color="green" />
      <A id={id} x1={145} y1={270} x2={145} y2={292} />
      <Lbl x={113} y={282} text="NO" />
      <Box
        x={87}
        y={292}
        w={116}
        h={28}
        label="i++ (next element)"
        color="purple"
      />
      <A id={id} x1={87} y1={306} x2={32} y2={306} />
      <Line x1={32} y1={178} x2={32} y2={306} />
      <A id={id} x1={32} y1={178} x2={83} y2={178} />
      <A id={id} x1={264} y1={284} x2={264} y2={310} />
      <Term x={214} y={310} w={80} h={26} label="END" red />
    </svg>
  );
}

function FunctionCallChart() {
  const id = "fn";
  return (
    <svg
      viewBox="0 0 300 310"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="fn-title"
    >
      <title id="fn-title">Function Call Stack</title>
      <Defs id={id} />
      <Box x={10} y={10} w={120} h={28} label="Caller: main()" color="blue" />
      <A id={id} x1={70} y1={38} x2={70} y2={58} />
      <Box x={10} y={58} w={120} h={28} label="Call: foo(args)" color="cyan" />
      <A id={id} x1={130} y1={72} x2={158} y2={72} />
      <Box x={155} y={10} w={130} h={130} label="" color="purple" />
      <text
        x={220}
        y={28}
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#f1f5f9"
      >
        Call Stack
      </text>
      <Box x={165} y={36} w={110} h={24} label="main() frame" color="blue" />
      <Box x={165} y={66} w={110} h={24} label="foo() pushed" color="orange" />
      <Box
        x={165}
        y={96}
        w={110}
        h={24}
        label="local vars, args"
        color="cyan"
      />
      <A id={id} x1={220} y1={140} x2={220} y2={162} />
      <Box x={155} y={162} w={130} h={28} label="Execute foo()" color="green" />
      <A id={id} x1={220} y1={190} x2={220} y2={212} />
      <Box
        x={155}
        y={212}
        w={130}
        h={28}
        label="foo() frame popped"
        color="orange"
      />
      <A id={id} x1={155} y1={226} x2={130} y2={226} />
      <Box x={10} y={212} w={120} h={28} label="Return value" color="purple" />
      <A id={id} x1={70} y1={240} x2={70} y2={260} />
      <Box
        x={10}
        y={260}
        w={120}
        h={28}
        label="main() continues"
        color="blue"
      />
      <A id={id} x1={220} y1={240} x2={220} y2={276} />
      <Term x={160} y={276} w={120} h={26} label="Stack unwound" red />
    </svg>
  );
}

function PointerOpsChart() {
  const id = "ptr";
  return (
    <svg
      viewBox="0 0 300 230"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="ptr-title"
    >
      <title id="ptr-title">Pointer Operations</title>
      <Defs id={id} />
      <text
        x={60}
        y={22}
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#94a3b8"
      >
        Variable
      </text>
      <Box
        x={10}
        y={30}
        w={100}
        h={36}
        label="int x = 42"
        sub="at 0x1000"
        color="blue"
      />
      <A id={id} x1={110} y1={48} x2={148} y2={48} />
      <Lbl x={130} y={40} text="&amp;x" />
      <text
        x={200}
        y={22}
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#94a3b8"
      >
        Pointer
      </text>
      <Box
        x={148}
        y={30}
        w={100}
        h={36}
        label="int* p = &x"
        sub="stores 0x1000"
        color="purple"
      />
      <A id={id} x1={198} y1={66} x2={198} y2={104} />
      <Lbl x={212} y={88} text="*p" />
      <Box
        x={148}
        y={104}
        w={100}
        h={36}
        label="*p == 42"
        sub="value at address"
        color="green"
      />
      <A id={id} x1={148} y1={122} x2={110} y2={122} />
      <Lbl x={128} y={114} text="*p = 99" />
      <Box
        x={10}
        y={104}
        w={100}
        h={36}
        label="x is now 99"
        sub="same memory"
        color="orange"
      />
      <A id={id} x1={60} y1={140} x2={60} y2={168} />
      <Box
        x={10}
        y={168}
        w={130}
        h={32}
        label="if (p != NULL)"
        sub="always check first"
        color="cyan"
      />
      <A id={id} x1={198} y1={140} x2={198} y2={168} />
      <Box
        x={150}
        y={168}
        w={138}
        h={32}
        label="p++ / p-- / p+n"
        sub="pointer arithmetic"
        color="blue"
      />
    </svg>
  );
}

function ArrayAccessChart() {
  const id = "arr";
  const vals = [10, 20, 30, 40, 50];
  return (
    <svg
      viewBox="0 0 300 195"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="arr-title"
    >
      <title id="arr-title">Array Access</title>
      <Defs id={id} />
      <text
        x={150}
        y={18}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        int arr[5] — Contiguous Memory
      </text>
      {vals.map((val, i) => (
        <g key={val}>
          <rect
            x={20 + i * 52}
            y={30}
            width={46}
            height={36}
            rx="4"
            fill="#1e40af22"
            stroke="#3b82f6"
            strokeWidth="1.5"
          />
          <text
            x={20 + i * 52 + 23}
            y={51}
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#f1f5f9"
          >
            {val}
          </text>
          <text
            x={20 + i * 52 + 23}
            y={80}
            textAnchor="middle"
            fontSize="10"
            fill="#94a3b8"
          >
            arr[{i}]
          </text>
        </g>
      ))}
      <A id={id} x1={150} y1={136} x2={150} y2={96} />
      <Box x={100} y={144} w={100} h={28} label="arr[2] = 30" color="purple" />
      <Box
        x={10}
        y={168}
        w={280}
        h={22}
        label="Address = base + index × sizeof(int)"
        color="cyan"
      />
    </svg>
  );
}

function SwitchFlowChart() {
  const id = "sw";
  return (
    <svg
      viewBox="0 0 300 290"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="sw-title"
    >
      <title id="sw-title">switch Statement Flowchart</title>
      <Defs id={id} />
      <Term x={110} y={10} w={80} h={28} label="START" />
      <A id={id} x1={150} y1={38} x2={150} y2={58} />
      <Box x={90} y={58} w={120} h={28} label="switch(expr)" color="blue" />
      <A id={id} x1={150} y1={86} x2={150} y2={108} />
      <Diamond x={88} y={108} w={124} h={44} label="case 1?" />
      <A id={id} x1={212} y1={130} x2={250} y2={130} />
      <Lbl x={232} y={122} text="YES" />
      <Box x={244} y={116} w={50} h={28} label="code 1" color="green" />
      <A id={id} x1={269} y1={144} x2={269} y2={260} />
      <A id={id} x1={150} y1={152} x2={150} y2={172} />
      <Lbl x={118} y={164} text="NO" />
      <Diamond x={88} y={172} w={124} h={44} label="case 2?" />
      <A id={id} x1={212} y1={194} x2={250} y2={194} />
      <Lbl x={232} y={186} text="YES" />
      <Box x={244} y={180} w={50} h={28} label="code 2" color="cyan" />
      <A id={id} x1={269} y1={208} x2={269} y2={260} />
      <A id={id} x1={150} y1={216} x2={150} y2={236} />
      <Lbl x={118} y={228} text="NO" />
      <Box x={88} y={236} w={124} h={28} label="default:" color="orange" />
      <A id={id} x1={150} y1={264} x2={150} y2={278} />
      <Line x1={150} y1={278} x2={269} y2={278} />
      <Term x={110} y={278} w={80} h={26} label="END" red />
    </svg>
  );
}

function DoWhileChart() {
  const id = "dw";
  return (
    <svg
      viewBox="0 0 280 270"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="dw-title"
    >
      <title id="dw-title">do-while Loop Flowchart</title>
      <Defs id={id} />
      <Term x={100} y={10} w={80} h={28} label="START" />
      <A id={id} x1={140} y1={38} x2={140} y2={58} />
      <text
        x={62}
        y={75}
        textAnchor="middle"
        fontSize="9"
        fill="#fb923c"
        fontWeight="700"
      >
        Runs first!
      </text>
      <Box x={90} y={58} w={100} h={28} label="Loop Body" color="purple" />
      <A id={id} x1={140} y1={86} x2={140} y2={108} />
      <Box x={90} y={108} w={100} h={28} label="Increment" color="cyan" />
      <A id={id} x1={140} y1={136} x2={140} y2={158} />
      <Diamond x={80} y={158} w={120} h={50} label="Condition?" />
      <A id={id} x1={80} y1={183} x2={30} y2={183} />
      <Lbl x={52} y={175} text="YES" />
      <Line x1={30} y1={72} x2={30} y2={183} />
      <A id={id} x1={30} y1={72} x2={90} y2={72} />
      <A id={id} x1={140} y1={208} x2={140} y2={234} />
      <Lbl x={108} y={222} text="NO" />
      <Term x={100} y={234} w={80} h={28} label="END" red />
    </svg>
  );
}

function ForLoopChart() {
  const id = "fl";
  return (
    <svg
      viewBox="0 0 300 320"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="fl-title"
    >
      <title id="fl-title">for Loop Flowchart</title>
      <Defs id={id} />
      <Term x={110} y={10} w={80} h={28} label="START" />
      <A id={id} x1={150} y1={38} x2={150} y2={58} />
      <Box x={100} y={58} w={100} h={28} label="Init: i = 0" color="blue" />
      <A id={id} x1={150} y1={86} x2={150} y2={108} />
      <Diamond x={88} y={108} w={124} h={48} label="i &lt; n?" />
      <A id={id} x1={212} y1={132} x2={258} y2={132} />
      <Lbl x={236} y={124} text="NO" />
      <A id={id} x1={258} y1={132} x2={258} y2={280} />
      <A id={id} x1={258} y1={280} x2={208} y2={280} />
      <A id={id} x1={150} y1={156} x2={150} y2={178} />
      <Lbl x={118} y={168} text="YES" />
      <Box x={98} y={178} w={104} h={28} label="Loop Body" color="purple" />
      <A id={id} x1={150} y1={206} x2={150} y2={228} />
      <Box x={98} y={228} w={104} h={28} label="Update: i++" color="cyan" />
      <A id={id} x1={98} y1={242} x2={40} y2={242} />
      <Line x1={40} y1={132} x2={40} y2={242} />
      <A id={id} x1={40} y1={132} x2={88} y2={132} />
      <Term x={128} y={272} w={80} h={28} label="END" red />
    </svg>
  );
}

// ─── New Charts — Module 1 ────────────────────────────────────────────────────

function ProcessorFlowChart() {
  const id = "cpu";
  const steps = [
    { label: "Fetch", sub: "PC → Memory", color: "blue" as const },
    { label: "Decode", sub: "Instruction → signals", color: "cyan" as const },
    { label: "Execute", sub: "ALU operation", color: "purple" as const },
    { label: "Write Back", sub: "Result → Register", color: "green" as const },
    { label: "Update PC", sub: "PC = PC + 1", color: "orange" as const },
  ];
  return (
    <svg
      viewBox="0 0 260 320"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="cpu-title"
    >
      <title id="cpu-title">CPU Fetch-Decode-Execute Cycle</title>
      <Defs id={id} />
      <Term x={90} y={8} w={80} h={26} label="START" />
      <A id={id} x1={130} y1={34} x2={130} y2={52} />
      {steps.map((s, i) => {
        const y = 52 + i * 46;
        return (
          <g key={s.label}>
            <Box
              x={40}
              y={y}
              w={180}
              h={34}
              label={s.label}
              sub={s.sub}
              color={s.color}
            />
            {i < steps.length - 1 && (
              <A id={id} x1={130} y1={y + 34} x2={130} y2={y + 46} />
            )}
          </g>
        );
      })}
      <A id={id} x1={40} y1={282} x2={14} y2={282} />
      <Line x1={14} y1={52} x2={14} y2={282} />
      <A id={id} x1={14} y1={52} x2={40} y2={52} />
      <Lbl x={28} y={167} text="Loop" />
    </svg>
  );
}

function IoDeviceFlowChart() {
  const id = "io";
  return (
    <svg
      viewBox="0 0 280 260"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="io-title"
    >
      <title id="io-title">I/O Device Interaction</title>
      <Defs id={id} />
      <Box
        x={10}
        y={10}
        w={100}
        h={34}
        label="Input Device"
        sub="Keyboard/Mouse"
        color="blue"
      />
      <A id={id} x1={60} y1={44} x2={60} y2={78} />
      <Box
        x={10}
        y={78}
        w={100}
        h={34}
        label="Device Driver"
        sub="OS Interface"
        color="cyan"
      />
      <A id={id} x1={110} y1={95} x2={140} y2={95} />
      <Box
        x={140}
        y={78}
        w={130}
        h={60}
        label="CPU / Memory"
        sub="Processing"
        color="purple"
      />
      <A id={id} x1={205} y1={138} x2={205} y2={168} />
      <Box
        x={140}
        y={168}
        w={130}
        h={34}
        label="Output Driver"
        sub="OS / DMA"
        color="cyan"
      />
      <A id={id} x1={205} y1={202} x2={205} y2={226} />
      <Box
        x={140}
        y={226}
        w={130}
        h={28}
        label="Output Device"
        sub="Monitor/Printer"
        color="green"
      />
      <Diamond x={6} y={156} w={108} h={44} label="Interrupt?" />
      <A id={id} x1={60} y1={112} x2={60} y2={156} />
      <A id={id} x1={60} y1={200} x2={60} y2={224} />
      <Lbl x={60} y={214} text="YES" />
      <Box
        x={14}
        y={224}
        w={92}
        h={28}
        label="ISR Handler"
        sub="Service routine"
        color="orange"
      />
      <A id={id} x1={106} y1={178} x2={140} y2={178} />
      <Lbl x={124} y={170} text="NO" />
    </svg>
  );
}

function StorageHierarchyChart() {
  const id = "stor";
  const items = [
    { label: "Registers", sub: "< 1ns | Bytes", color: "purple" as const },
    { label: "L1/L2 Cache", sub: "1–10ns | KB–MB", color: "cyan" as const },
    { label: "RAM", sub: "60ns | GB", color: "blue" as const },
    { label: "SSD", sub: "0.1ms | TB", color: "orange" as const },
    { label: "HDD", sub: "10ms | TB", color: "teal" as const },
    { label: "Cloud/Network", sub: "100ms | PB", color: "green" as const },
  ];
  return (
    <svg
      viewBox="0 0 280 310"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="stor-title"
    >
      <title id="stor-title">Storage Hierarchy</title>
      <Defs id={id} />
      <text
        x={140}
        y={12}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        Storage Hierarchy (Fast → Slow)
      </text>
      {items.map((item, i) => {
        const w = 80 + i * 30;
        const x = (280 - w) / 2;
        const y = 22 + i * 44;
        return (
          <g key={item.label}>
            <Box
              x={x}
              y={y}
              w={w}
              h={34}
              label={item.label}
              sub={item.sub}
              color={item.color}
            />
            {i < items.length - 1 && (
              <A id={id} x1={140} y1={y + 34} x2={140} y2={y + 44} />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function OsFlowChart() {
  const id = "os";
  return (
    <svg
      viewBox="0 0 290 320"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="os-title"
    >
      <title id="os-title">OS Boot and Process Management</title>
      <Defs id={id} />
      <Term x={105} y={8} w={80} h={26} label="Power ON" />
      <A id={id} x1={145} y1={34} x2={145} y2={56} />
      <Box
        x={65}
        y={56}
        w={160}
        h={30}
        label="BIOS / UEFI"
        sub="Hardware init"
        color="orange"
      />
      <A id={id} x1={145} y1={86} x2={145} y2={108} />
      <Box
        x={65}
        y={108}
        w={160}
        h={30}
        label="Boot Loader"
        sub="Loads OS kernel"
        color="cyan"
      />
      <A id={id} x1={145} y1={138} x2={145} y2={160} />
      <Box
        x={65}
        y={160}
        w={160}
        h={30}
        label="OS Kernel"
        sub="Core services"
        color="blue"
      />
      <A id={id} x1={145} y1={190} x2={145} y2={212} />
      <Box
        x={6}
        y={212}
        w={130}
        h={30}
        label="Process Mgmt"
        sub="create / schedule"
        color="purple"
      />
      <Box
        x={154}
        y={212}
        w={130}
        h={30}
        label="Memory Mgmt"
        sub="alloc / virtual"
        color="teal"
      />
      <A id={id} x1={71} y1={242} x2={71} y2={264} />
      <A id={id} x1={219} y1={242} x2={219} y2={264} />
      <Box
        x={6}
        y={264}
        w={130}
        h={30}
        label="File System"
        sub="I/O control"
        color="green"
      />
      <Box
        x={154}
        y={264}
        w={130}
        h={30}
        label="User Apps"
        sub="system calls"
        color="orange"
      />
    </svg>
  );
}

function LoaderLinkerFlowChart() {
  const id = "ll";
  return (
    <svg
      viewBox="0 0 280 360"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="ll-title"
    >
      <title id="ll-title">Loader and Linker Flow</title>
      <Defs id={id} />
      <Box x={20} y={10} w={110} h={28} label="source1.c" color="cyan" />
      <Box x={150} y={10} w={110} h={28} label="source2.c" color="cyan" />
      <A id={id} x1={75} y1={38} x2={75} y2={60} />
      <A id={id} x1={205} y1={38} x2={205} y2={60} />
      <Box
        x={20}
        y={60}
        w={110}
        h={28}
        label="object1.o"
        sub="Compiled"
        color="blue"
      />
      <Box
        x={150}
        y={60}
        w={110}
        h={28}
        label="object2.o"
        sub="Compiled"
        color="blue"
      />
      <A id={id} x1={75} y1={88} x2={75} y2={116} />
      <A id={id} x1={205} y1={88} x2={205} y2={116} />
      <Line x1={75} y1={116} x2={205} y2={116} />
      <A id={id} x1={140} y1={116} x2={140} y2={134} />
      <Box
        x={50}
        y={134}
        w={180}
        h={32}
        label="LINKER"
        sub="Resolve symbols + libraries"
        color="orange"
      />
      <A id={id} x1={140} y1={166} x2={140} y2={190} />
      <Box
        x={50}
        y={190}
        w={180}
        h={30}
        label="Executable file"
        sub="a.out / program.exe"
        color="green"
      />
      <A id={id} x1={140} y1={220} x2={140} y2={244} />
      <Box
        x={50}
        y={244}
        w={180}
        h={32}
        label="LOADER (OS)"
        sub="Load into RAM"
        color="purple"
      />
      <A id={id} x1={140} y1={276} x2={140} y2={300} />
      <Box
        x={50}
        y={300}
        w={180}
        h={30}
        label="Memory (RAM)"
        sub="Ready to execute"
        color="teal"
      />
      <A id={id} x1={140} y1={330} x2={140} y2={348} />
      <Term x={100} y={348} w={80} h={26} label="Run!" />
    </svg>
  );
}

function AlgorithmFlowChart() {
  const id = "algo";
  const steps = [
    { label: "Problem", sub: "Define input/output", color: "orange" as const },
    { label: "Algorithm", sub: "Step-by-step logic", color: "blue" as const },
    { label: "Flowchart", sub: "Visual diagram", color: "cyan" as const },
    { label: "Pseudocode", sub: "Informal code", color: "purple" as const },
    { label: "Source Code", sub: "C / Python etc.", color: "green" as const },
    { label: "Test & Debug", sub: "Verify output", color: "teal" as const },
  ];
  return (
    <svg
      viewBox="0 0 240 340"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="algo-title"
    >
      <title id="algo-title">Algorithm to Program Pipeline</title>
      <Defs id={id} />
      {steps.map((s, i) => {
        const y = 8 + i * 52;
        return (
          <g key={s.label}>
            <Box
              x={20}
              y={y}
              w={200}
              h={38}
              label={s.label}
              sub={s.sub}
              color={s.color}
            />
            {i < steps.length - 1 && (
              <A id={id} x1={120} y1={y + 38} x2={120} y2={y + 52} />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function CompilationPipelineChart() {
  const id = "cpipe";
  const stages = [
    { label: "Source Code", sub: "program.c", color: "cyan" as const },
    { label: "Preprocessor", sub: "Macros expanded", color: "blue" as const },
    { label: "Compiler", sub: "→ Assembly (.s)", color: "purple" as const },
    { label: "Assembler", sub: "→ Object (.o)", color: "orange" as const },
    { label: "Linker", sub: "Combine objects", color: "teal" as const },
    { label: "Executable", sub: "a.out / .exe", color: "green" as const },
  ];
  return (
    <svg
      viewBox="0 0 240 330"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="cpipe-title"
    >
      <title id="cpipe-title">Compilation Pipeline</title>
      <Defs id={id} />
      {stages.map((s, i) => {
        const y = 8 + i * 52;
        return (
          <g key={s.label}>
            <Box
              x={20}
              y={y}
              w={200}
              h={38}
              label={s.label}
              sub={s.sub}
              color={s.color}
            />
            {i < stages.length - 1 && (
              <A id={id} x1={120} y1={y + 38} x2={120} y2={y + 52} />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function DataTypesHierarchyChart() {
  const id = "dt";
  return (
    <svg
      viewBox="0 0 300 260"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="dt-title"
    >
      <title id="dt-title">C Data Types Hierarchy</title>
      <Defs id={id} />
      <Box x={90} y={8} w={120} h={30} label="C Data Types" color="blue" />
      <A id={id} x1={90} y1={23} x2={50} y2={60} />
      <A id={id} x1={150} y1={38} x2={150} y2={60} />
      <A id={id} x1={210} y1={23} x2={250} y2={60} />
      <Box x={4} y={60} w={92} h={30} label="Basic" color="cyan" />
      <Box x={104} y={60} w={92} h={30} label="Derived" color="purple" />
      <Box x={204} y={60} w={80} h={30} label="Void" color="teal" />
      <A id={id} x1={50} y1={90} x2={30} y2={116} />
      <A id={id} x1={50} y1={90} x2={70} y2={116} />
      <Box x={4} y={116} w={52} h={28} label="int" sub="4 bytes" color="blue" />
      <Box
        x={60}
        y={116}
        w={52}
        h={28}
        label="float"
        sub="4 bytes"
        color="blue"
      />
      <A id={id} x1={50} y1={144} x2={30} y2={168} />
      <A id={id} x1={50} y1={144} x2={70} y2={168} />
      <Box
        x={4}
        y={168}
        w={52}
        h={28}
        label="char"
        sub="1 byte"
        color="orange"
      />
      <Box
        x={60}
        y={168}
        w={52}
        h={28}
        label="double"
        sub="8 bytes"
        color="orange"
      />
      <A id={id} x1={150} y1={90} x2={130} y2={116} />
      <A id={id} x1={150} y1={90} x2={170} y2={116} />
      <Box x={104} y={116} w={52} h={28} label="Array" color="purple" />
      <Box x={160} y={116} w={52} h={28} label="Pointer" color="purple" />
      <A id={id} x1={150} y1={144} x2={150} y2={168} />
      <Box x={110} y={168} w={80} h={28} label="Struct/Union" color="purple" />
    </svg>
  );
}

function VariableLifecycleChart() {
  const id = "vlc";
  return (
    <svg
      viewBox="0 0 260 300"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="vlc-title"
    >
      <title id="vlc-title">Variable Lifecycle</title>
      <Defs id={id} />
      <Term x={90} y={8} w={80} h={26} label="START" />
      <A id={id} x1={130} y1={34} x2={130} y2={56} />
      <Box
        x={45}
        y={56}
        w={170}
        h={34}
        label="Declare"
        sub="int x; (reserves memory)"
        color="blue"
      />
      <A id={id} x1={130} y1={90} x2={130} y2={112} />
      <Box
        x={45}
        y={112}
        w={170}
        h={34}
        label="Initialize"
        sub="x = 10; (assign value)"
        color="cyan"
      />
      <A id={id} x1={130} y1={146} x2={130} y2={168} />
      <Box
        x={45}
        y={168}
        w={170}
        h={34}
        label="Use"
        sub="printf, calculate, assign"
        color="purple"
      />
      <A id={id} x1={130} y1={202} x2={130} y2={224} />
      <Diamond x={68} y={224} w={124} h={44} label="Scope ends?" />
      <A id={id} x1={192} y1={246} x2={232} y2={246} />
      <Lbl x={213} y={238} text="NO" />
      <A id={id} x1={232} y1={246} x2={232} y2={190} />
      <A id={id} x1={232} y1={190} x2={215} y2={190} />
      <A id={id} x1={130} y1={268} x2={130} y2={286} />
      <Lbl x={100} y={278} text="YES" />
      <Term x={90} y={286} w={80} h={26} label="Freed" red />
    </svg>
  );
}

function StorageClassesFlowChart() {
  const id = "sc";
  return (
    <svg
      viewBox="0 0 300 290"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="sc-title"
    >
      <title id="sc-title">Storage Classes in C</title>
      <Defs id={id} />
      <Box x={90} y={8} w={120} h={30} label="Storage Classes" color="blue" />
      <A id={id} x1={90} y1={23} x2={30} y2={60} />
      <A id={id} x1={120} y1={38} x2={100} y2={60} />
      <A id={id} x1={180} y1={38} x2={200} y2={60} />
      <A id={id} x1={210} y1={23} x2={270} y2={60} />
      <Box x={4} y={60} w={54} h={28} label="auto" color="blue" />
      <Box x={72} y={60} w={64} h={28} label="register" color="cyan" />
      <Box x={166} y={60} w={54} h={28} label="static" color="purple" />
      <Box x={240} y={60} w={54} h={28} label="extern" color="orange" />
      <text x={31} y={106} textAnchor="middle" fontSize="9" fill="#94a3b8">
        Local
      </text>
      <text x={104} y={106} textAnchor="middle" fontSize="9" fill="#94a3b8">
        CPU reg
      </text>
      <text x={193} y={106} textAnchor="middle" fontSize="9" fill="#94a3b8">
        Persists
      </text>
      <text x={267} y={106} textAnchor="middle" fontSize="9" fill="#94a3b8">
        Global
      </text>
      <Box x={4} y={116} w={54} h={28} label="block" sub="scope" color="blue" />
      <Box x={72} y={116} w={64} h={28} label="fast" sub="hint" color="cyan" />
      <Box
        x={166}
        y={116}
        w={54}
        h={28}
        label="static"
        sub="1 init"
        color="purple"
      />
      <Box
        x={240}
        y={116}
        w={54}
        h={28}
        label="shared"
        sub="files"
        color="orange"
      />
      <Box
        x={20}
        y={170}
        w={260}
        h={34}
        label="Lifetime: block < static = extern = program"
        color="teal"
      />
      <Box
        x={20}
        y={214}
        w={260}
        h={34}
        label="Scope: block | block | file | global"
        color="green"
      />
      <Box
        x={20}
        y={258}
        w={260}
        h={26}
        label="Default: auto for local, extern for global"
        sub=""
        color="blue"
      />
    </svg>
  );
}

// ─── New Charts — Module 2 ────────────────────────────────────────────────────

function OperatorPrecedenceFlowChart() {
  const id = "op";
  const levels = [
    { label: "( )  Parentheses", color: "green" as const },
    { label: "++ / -- / ! / ~", color: "cyan" as const },
    { label: "* / %", color: "blue" as const },
    { label: "+ -", color: "blue" as const },
    { label: "<< >>  Shift", color: "purple" as const },
    { label: "< <= > >= == !=", color: "orange" as const },
    { label: "& | ^  Bitwise", color: "teal" as const },
    { label: "&& ||  Logical", color: "orange" as const },
    { label: "?:  Ternary", color: "cyan" as const },
    { label: "= += -= etc.", color: "blue" as const },
  ];
  return (
    <svg
      viewBox="0 0 240 340"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="op-title"
    >
      <title id="op-title">Operator Precedence (High → Low)</title>
      <Defs id={id} />
      <text
        x={120}
        y={12}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        Precedence: High → Low
      </text>
      {levels.map((l, i) => (
        <g key={l.label}>
          <Box
            x={20}
            y={18 + i * 30}
            w={200}
            h={24}
            label={l.label}
            color={l.color}
          />
          {i < levels.length - 1 && (
            <A id={id} x1={120} y1={42 + i * 30} x2={120} y2={48 + i * 30} />
          )}
        </g>
      ))}
    </svg>
  );
}

function TypeConversionFlowChart() {
  const id = "tc";
  return (
    <svg
      viewBox="0 0 280 310"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="tc-title"
    >
      <title id="tc-title">Type Conversion in C</title>
      <Defs id={id} />
      <Box x={80} y={8} w={120} h={30} label="Expression" color="blue" />
      <A id={id} x1={140} y1={38} x2={140} y2={60} />
      <Diamond x={78} y={60} w={124} h={50} label="Mixed types?" />
      <A id={id} x1={202} y1={85} x2={244} y2={85} />
      <Lbl x={224} y={77} text="YES" />
      <Box x={238} y={70} w={38} h={30} label="Auto" color="orange" />
      <A id={id} x1={257} y1={100} x2={257} y2={130} />
      <Box
        x={200}
        y={130}
        w={70}
        h={30}
        label="Implicit"
        sub="int→float"
        color="orange"
      />
      <A id={id} x1={78} y1={85} x2={36} y2={85} />
      <Lbl x={56} y={77} text="NO" />
      <Diamond x={4} y={112} w={116} h={50} label="Cast used?" />
      <A id={id} x1={120} y1={137} x2={160} y2={137} />
      <Lbl x={141} y={129} text="YES" />
      <Box
        x={154}
        y={120}
        w={90}
        h={34}
        label="Explicit Cast"
        sub="(float)a / b"
        color="cyan"
      />
      <A id={id} x1={62} y1={162} x2={62} y2={196} />
      <Lbl x={38} y={180} text="NO" />
      <Box
        x={10}
        y={196}
        w={104}
        h={30}
        label="Same type"
        sub="no conversion"
        color="green"
      />
      <A id={id} x1={62} y1={226} x2={62} y2={256} />
      <A id={id} x1={235} y1={160} x2={235} y2={224} />
      <A id={id} x1={199} y1={224} x2={114} y2={224} />
      <Box
        x={10}
        y={256}
        w={260}
        h={30}
        label="Evaluate and produce result"
        color="teal"
      />
    </svg>
  );
}

function BitwiseOpsFlowChart() {
  const id = "bw";
  return (
    <svg
      viewBox="0 0 290 290"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="bw-title"
    >
      <title id="bw-title">Bitwise Operations</title>
      <Defs id={id} />
      <text
        x={145}
        y={12}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        Bitwise Operators
      </text>
      <Box x={10} y={22} w={130} h={28} label="a = 5  →  0101" color="blue" />
      <Box x={150} y={22} w={130} h={28} label="b = 3  →  0011" color="cyan" />
      <Box
        x={10}
        y={64}
        w={130}
        h={28}
        label="a &amp; b = 0001 = 1"
        sub="AND: both bits 1"
        color="purple"
      />
      <Box
        x={150}
        y={64}
        w={130}
        h={28}
        label="a | b = 0111 = 7"
        sub="OR: either bit 1"
        color="orange"
      />
      <Box
        x={10}
        y={106}
        w={130}
        h={28}
        label="a ^ b = 0110 = 6"
        sub="XOR: bits differ"
        color="teal"
      />
      <Box
        x={150}
        y={106}
        w={130}
        h={28}
        label="~a = 1010 = -6"
        sub="NOT: flip all bits"
        color="pink"
      />
      <Box
        x={10}
        y={148}
        w={130}
        h={28}
        label="a &lt;&lt; 1 = 1010 = 10"
        sub="Left shift ×2"
        color="blue"
      />
      <Box
        x={150}
        y={148}
        w={130}
        h={28}
        label="a &gt;&gt; 1 = 0010 = 2"
        sub="Right shift ÷2"
        color="cyan"
      />
      <Box
        x={10}
        y={196}
        w={270}
        h={30}
        label="Use: flags, masks, fast multiply/divide"
        color="green"
      />
      <Box
        x={10}
        y={240}
        w={270}
        h={30}
        label="Tip: use parentheses! & < == in precedence"
        color="orange"
      />
    </svg>
  );
}

function NestedIfFlowChart() {
  const id = "nif";
  return (
    <svg
      viewBox="0 0 300 310"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="nif-title"
    >
      <title id="nif-title">Nested if-else Decision Tree</title>
      <Defs id={id} />
      <Term x={110} y={8} w={80} h={26} label="START" />
      <A id={id} x1={150} y1={34} x2={150} y2={58} />
      <Diamond x={88} y={58} w={124} h={50} label="Outer if?" />
      <A id={id} x1={150} y1={108} x2={150} y2={132} />
      <Lbl x={122} y={120} text="YES" />
      <Diamond x={88} y={132} w={124} h={50} label="Inner if?" />
      <A id={id} x1={150} y1={182} x2={150} y2={208} />
      <Lbl x={122} y={196} text="YES" />
      <Box x={100} y={208} w={100} h={28} label="Inner true" color="green" />
      <A id={id} x1={212} y1={157} x2={260} y2={157} />
      <Lbl x={237} y={149} text="NO" />
      <Box x={254} y={143} w={40} h={28} label="Inner else" color="orange" />
      <A id={id} x1={78} y1={83} x2={18} y2={83} />
      <Lbl x={44} y={75} text="NO" />
      <Box x={4} y={68} w={46} h={30} label="Outer else" color="orange" />
      <A id={id} x1={27} y1={98} x2={27} y2={268} />
      <A id={id} x1={150} y1={236} x2={150} y2={268} />
      <A id={id} x1={274} y1={171} x2={274} y2={268} />
      <Line x1={27} y1={268} x2={274} y2={268} />
      <A id={id} x1={150} y1={268} x2={150} y2={288} />
      <Term x={110} y={288} w={80} h={26} label="END" red />
    </svg>
  );
}

function BreakContinueFlowChart() {
  const id = "bc";
  return (
    <svg
      viewBox="0 0 290 320"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="bc-title"
    >
      <title id="bc-title">break and continue in Loops</title>
      <Defs id={id} />
      <Term x={105} y={8} w={80} h={26} label="START" />
      <A id={id} x1={145} y1={34} x2={145} y2={56} />
      <Diamond x={83} y={56} w={124} h={50} label="i &lt; n?" />
      <A id={id} x1={145} y1={106} x2={145} y2={130} />
      <Lbl x={117} y={118} text="YES" />
      <Diamond x={77} y={130} w={136} h={50} label="break cond?" />
      <A id={id} x1={213} y1={155} x2={255} y2={155} />
      <Lbl x={235} y={147} text="YES" />
      <Box x={250} y={141} w={36} h={28} label="break" color="orange" />
      <A id={id} x1={268} y1={169} x2={268} y2={296} />
      <A id={id} x1={145} y1={180} x2={145} y2={204} />
      <Lbl x={117} y={193} text="NO" />
      <Diamond x={77} y={204} w={136} h={50} label="continue cond?" />
      <A id={id} x1={213} y1={229} x2={255} y2={229} />
      <Lbl x={235} y={221} text="YES" />
      <Box x={250} y={215} w={36} h={28} label="next i" color="cyan" />
      <A id={id} x1={145} y1={254} x2={145} y2={278} />
      <Lbl x={117} y={267} text="NO" />
      <Box x={95} y={278} w={100} h={28} label="i++ / body" color="purple" />
      <A id={id} x1={95} y1={292} x2={30} y2={292} />
      <Line x1={30} y1={81} x2={30} y2={292} />
      <A id={id} x1={30} y1={81} x2={83} y2={81} />
      <A id={id} x1={207} y1={81} x2={255} y2={81} />
      <Lbl x={232} y={73} text="NO" />
      <A id={id} x1={255} y1={81} x2={255} y2={296} />
      <Term x={214} y={296} w={80} h={26} label="END" red />
    </svg>
  );
}

// ─── New Charts — Module 3 ────────────────────────────────────────────────────

function ArrayDeclarationFlowChart() {
  const id = "adcl";
  return (
    <svg
      viewBox="0 0 280 310"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="adcl-title"
    >
      <title id="adcl-title">Array Declaration, Init and Access</title>
      <Defs id={id} />
      <Term x={100} y={8} w={80} h={26} label="START" />
      <A id={id} x1={140} y1={34} x2={140} y2={56} />
      <Box
        x={40}
        y={56}
        w={200}
        h={32}
        label="Declare"
        sub="int arr[5];"
        color="blue"
      />
      <A id={id} x1={140} y1={88} x2={140} y2={110} />
      <Box
        x={40}
        y={110}
        w={200}
        h={32}
        label="Initialize"
        sub="{10,20,30,40,50}"
        color="cyan"
      />
      <A id={id} x1={140} y1={142} x2={140} y2={164} />
      <Box
        x={40}
        y={164}
        w={200}
        h={32}
        label="Access arr[i]"
        sub="index 0 to n-1"
        color="purple"
      />
      <A id={id} x1={140} y1={196} x2={140} y2={218} />
      <Diamond x={78} y={218} w={124} h={50} label="i in bounds?" />
      <A id={id} x1={78} y1={243} x2={18} y2={243} />
      <Lbl x={44} y={235} text="NO" />
      <Box x={4} y={228} w={14} h={30} label="" color="orange" />
      <text x={11} y={244} textAnchor="middle" fontSize="8" fill="#f97316">
        UB!
      </text>
      <A id={id} x1={202} y1={243} x2={240} y2={243} />
      <Lbl x={222} y={235} text="YES" />
      <Box x={238} y={228} w={38} h={30} label="OK" color="green" />
      <A id={id} x1={140} y1={268} x2={140} y2={296} />
      <Lbl x={112} y={282} text="continue" />
      <Box
        x={40}
        y={296}
        w={200}
        h={26}
        label="address = base + i×sizeof(T)"
        color="teal"
      />
    </svg>
  );
}

function MultidimArrayFlowChart() {
  const id = "mda";
  return (
    <svg
      viewBox="0 0 280 260"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="mda-title"
    >
      <title id="mda-title">2D Array Row-Column Access</title>
      <Defs id={id} />
      <text
        x={140}
        y={14}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        int mat[3][4] — Row-Major
      </text>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}-${col}`}>
            <rect
              x={20 + col * 58}
              y={26 + row * 44}
              width={52}
              height={36}
              rx="4"
              fill="#1e40af22"
              stroke="#3b82f6"
              strokeWidth="1.5"
            />
            <text
              x={46 + col * 58}
              y={42 + row * 44}
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill="#f1f5f9"
            >
              [{row}][{col}]
            </text>
          </g>
        )),
      )}
      <A id={id} x1={140} y1={162} x2={140} y2={184} />
      <Box
        x={30}
        y={184}
        w={220}
        h={30}
        label="Access: mat[row][col]"
        color="purple"
      />
      <A id={id} x1={140} y1={214} x2={140} y2={238} />
      <Box
        x={30}
        y={238}
        w={220}
        h={26}
        label="addr = base + (r×cols + c)×sizeof(T)"
        color="cyan"
      />
    </svg>
  );
}

function StringOpsFlowChart() {
  const id = "sop";
  return (
    <svg
      viewBox="0 0 280 310"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="sop-title"
    >
      <title id="sop-title">String Operations in C</title>
      <Defs id={id} />
      <Box
        x={40}
        y={8}
        w={200}
        h={30}
        label="char str[50]"
        sub={"'H','e','l','l','o','\\0'"}
        color="blue"
      />
      <A id={id} x1={140} y1={38} x2={140} y2={60} />
      <Box
        x={40}
        y={60}
        w={200}
        h={30}
        label="scanf / gets"
        sub="Read string (input)"
        color="cyan"
      />
      <A id={id} x1={140} y1={90} x2={140} y2={112} />
      <Box
        x={40}
        y={112}
        w={200}
        h={30}
        label="strlen(str)"
        sub="Length (excl. \\0)"
        color="purple"
      />
      <A id={id} x1={140} y1={142} x2={140} y2={164} />
      <Box
        x={40}
        y={164}
        w={200}
        h={30}
        label="strcpy(dest, src)"
        sub="Copy string"
        color="orange"
      />
      <A id={id} x1={140} y1={194} x2={140} y2={216} />
      <Box
        x={40}
        y={216}
        w={200}
        h={30}
        label="strcat(dest, src)"
        sub="Concatenate"
        color="teal"
      />
      <A id={id} x1={140} y1={246} x2={140} y2={268} />
      <Box
        x={40}
        y={268}
        w={200}
        h={30}
        label="strcmp(s1, s2)"
        sub="0=equal, ±>/<"
        color="green"
      />
    </svg>
  );
}

function StructureFlowChart() {
  const id = "strf";
  return (
    <svg
      viewBox="0 0 280 310"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="strf-title"
    >
      <title id="strf-title">Structure: Definition and Access</title>
      <Defs id={id} />
      <Term x={100} y={8} w={80} h={26} label="START" />
      <A id={id} x1={140} y1={34} x2={140} y2={56} />
      <Box
        x={20}
        y={56}
        w={240}
        h={34}
        label="Define struct"
        sub="struct Student { char name[50]; int roll; float gpa; };"
        color="blue"
      />
      <A id={id} x1={140} y1={90} x2={140} y2={112} />
      <Box
        x={20}
        y={112}
        w={240}
        h={30}
        label="Declare variable"
        sub='struct Student s1 = {"Alice", 101, 9.2f};'
        color="cyan"
      />
      <A id={id} x1={140} y1={142} x2={140} y2={164} />
      <Box
        x={20}
        y={164}
        w={240}
        h={30}
        label="Access with dot ( . )"
        sub="s1.name  s1.roll  s1.gpa"
        color="purple"
      />
      <A id={id} x1={140} y1={194} x2={140} y2={216} />
      <Box
        x={20}
        y={216}
        w={240}
        h={30}
        label="Pass to function (by value)"
        sub="func(s1) copies all members"
        color="orange"
      />
      <A id={id} x1={140} y1={246} x2={140} y2={268} />
      <Box
        x={20}
        y={268}
        w={240}
        h={30}
        label="Pass pointer (by reference)"
        sub="func(&s1) → use ptr->name"
        color="teal"
      />
    </svg>
  );
}

function UnionVsStructFlowChart() {
  const id = "uvs";
  return (
    <svg
      viewBox="0 0 290 270"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="uvs-title"
    >
      <title id="uvs-title">Union vs Structure Memory</title>
      <Defs id={id} />
      <text
        x={145}
        y={14}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        struct vs union Memory Layout
      </text>
      <text
        x={72}
        y={30}
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fill="#3b82f6"
      >
        struct Data
      </text>
      <text
        x={218}
        y={30}
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fill="#a855f7"
      >
        union Data
      </text>
      <Box x={4} y={36} w={136} h={28} label="int i (4B)" color="blue" />
      <Box x={4} y={68} w={136} h={28} label="float f (4B)" color="blue" />
      <Box x={4} y={100} w={136} h={28} label="char c (1B)" color="blue" />
      <Box x={4} y={136} w={136} h={24} label="Total = 9B+" color="green" />
      <Box
        x={150}
        y={36}
        w={136}
        h={90}
        label="shared memory (4B)"
        sub="only 1 valid at a time"
        color="purple"
      />
      <text x={218} y={100} textAnchor="middle" fontSize="8" fill="#94a3b8">
        int OR float OR char
      </text>
      <Box
        x={150}
        y={136}
        w={136}
        h={24}
        label="Total = 4B (largest)"
        color="green"
      />
      <Box
        x={40}
        y={172}
        w={210}
        h={30}
        label="struct: all members, own memory"
        color="blue"
      />
      <Box
        x={40}
        y={212}
        w={210}
        h={30}
        label="union: shared memory, 1 at a time"
        color="purple"
      />
    </svg>
  );
}

function ArrayOfStructsFlowChart() {
  const id = "aos";
  return (
    <svg
      viewBox="0 0 280 290"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="aos-title"
    >
      <title id="aos-title">Array of Structures</title>
      <Defs id={id} />
      <Term x={100} y={8} w={80} h={26} label="START" />
      <A id={id} x1={140} y1={34} x2={140} y2={56} />
      <Box
        x={10}
        y={56}
        w={260}
        h={30}
        label="struct Student students[30];"
        sub="Array of 30 Student records"
        color="blue"
      />
      <A id={id} x1={140} y1={86} x2={140} y2={108} />
      <Box
        x={10}
        y={108}
        w={260}
        h={30}
        label="students[0].name = Alice"
        sub="Access first record"
        color="cyan"
      />
      <A id={id} x1={140} y1={138} x2={140} y2={160} />
      <Box
        x={10}
        y={160}
        w={260}
        h={30}
        label="for i=0 to n-1"
        sub="Loop through all records"
        color="purple"
      />
      <A id={id} x1={140} y1={190} x2={140} y2={212} />
      <Box
        x={10}
        y={212}
        w={260}
        h={30}
        label="students[i].roll, students[i].marks"
        sub="Read / write each field"
        color="orange"
      />
      <A id={id} x1={140} y1={242} x2={140} y2={264} />
      <Box
        x={10}
        y={264}
        w={260}
        h={26}
        label="In-memory database of records"
        color="green"
      />
    </svg>
  );
}

function BubbleSortFlowChart() {
  const id = "bsort";
  return (
    <svg
      viewBox="0 0 300 360"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="bsort-title"
    >
      <title id="bsort-title">Bubble Sort Flowchart</title>
      <Defs id={id} />
      <Term x={110} y={8} w={80} h={26} label="START" />
      <A id={id} x1={150} y1={34} x2={150} y2={56} />
      <Box x={80} y={56} w={140} h={28} label="i = 0" color="blue" />
      <A id={id} x1={150} y1={84} x2={150} y2={106} />
      <Diamond x={88} y={106} w={124} h={48} label="i &lt; n-1?" />
      <A id={id} x1={212} y1={130} x2={260} y2={130} />
      <Lbl x={237} y={122} text="NO" />
      <A id={id} x1={260} y1={130} x2={260} y2={320} />
      <A id={id} x1={150} y1={154} x2={150} y2={176} />
      <Lbl x={122} y={165} text="YES" />
      <Box x={80} y={176} w={140} h={28} label="j = 0" color="cyan" />
      <A id={id} x1={150} y1={204} x2={150} y2={224} />
      <Diamond x={84} y={224} w={132} h={48} label="j &lt; n-1-i?" />
      <A id={id} x1={216} y1={248} x2={260} y2={248} />
      <Lbl x={239} y={240} text="NO" />
      <A id={id} x1={260} y1={248} x2={260} y2={300} />
      <A id={id} x1={150} y1={272} x2={150} y2={294} />
      <Lbl x={122} y={283} text="YES" />
      <Diamond x={68} y={294} w={164} h={48} label="arr[j]>arr[j+1]?" />
      <A id={id} x1={232} y1={318} x2={260} y2={318} />
      <Lbl x={247} y={310} text="YES" />
      <Box x={258} y={304} w={36} h={28} label="swap" color="orange" />
      <A id={id} x1={150} y1={342} x2={150} y2={364} />
      <Lbl x={122} y={353} text="NO" />
      <Box x={100} y={364} w={100} h={28} label="j++" color="purple" />
      <A id={id} x1={100} y1={378} x2={26} y2={378} />
      <Line x1={26} y1={248} x2={26} y2={378} />
      <A id={id} x1={26} y1={248} x2={84} y2={248} />
      <A id={id} x1={260} y1={300} x2={260} y2={290} />
      <A id={id} x1={260} y1={290} x2={220} y2={290} />
      <Box x={80} y={296} w={0} h={0} label="" />
      <A id={id} x1={260} y1={320} x2={260} y2={340} />
      <A id={id} x1={260} y1={340} x2={294} y2={340} />
      <Term x={210} y={320} w={80} h={26} label="END" red />
    </svg>
  );
}

// ─── New Charts — Module 4 ────────────────────────────────────────────────────

function CallByValueRefFlowChart() {
  const id = "cbvr";
  return (
    <svg
      viewBox="0 0 290 290"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="cbvr-title"
    >
      <title id="cbvr-title">Call by Value vs Call by Reference</title>
      <Defs id={id} />
      <text
        x={145}
        y={14}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        Value vs Reference
      </text>
      <text
        x={72}
        y={30}
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fill="#3b82f6"
      >
        Call by Value
      </text>
      <text
        x={218}
        y={30}
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fill="#a855f7"
      >
        Call by Reference
      </text>
      <Box
        x={4}
        y={36}
        w={136}
        h={28}
        label="func(int x)"
        sub="copy passed"
        color="blue"
      />
      <Box
        x={150}
        y={36}
        w={136}
        h={28}
        label="func(int *x)"
        sub="address passed"
        color="purple"
      />
      <A id={id} x1={72} y1={64} x2={72} y2={94} />
      <A id={id} x1={218} y1={64} x2={218} y2={94} />
      <Box
        x={4}
        y={94}
        w={136}
        h={28}
        label="x++ inside fn"
        sub="copy changes"
        color="blue"
      />
      <Box
        x={150}
        y={94}
        w={136}
        h={28}
        label="(*x)++ inside fn"
        sub="original changes"
        color="purple"
      />
      <A id={id} x1={72} y1={122} x2={72} y2={152} />
      <A id={id} x1={218} y1={122} x2={218} y2={152} />
      <Box
        x={4}
        y={152}
        w={136}
        h={28}
        label="original unchanged"
        color="green"
      />
      <Box
        x={150}
        y={152}
        w={136}
        h={28}
        label="original modified!"
        color="orange"
      />
      <Box
        x={4}
        y={196}
        w={136}
        h={28}
        label="Safe — no side effects"
        color="teal"
      />
      <Box
        x={150}
        y={196}
        w={136}
        h={28}
        label="Use for swap, update"
        color="cyan"
      />
      <Box
        x={40}
        y={244}
        w={210}
        h={28}
        label="Call: func(n) vs func(&n)"
        color="blue"
      />
    </svg>
  );
}

function ArrayPassingFlowChart() {
  const id = "ap";
  return (
    <svg
      viewBox="0 0 280 290"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="ap-title"
    >
      <title id="ap-title">Passing Arrays to Functions</title>
      <Defs id={id} />
      <Term x={100} y={8} w={80} h={26} label="main()" />
      <A id={id} x1={140} y1={34} x2={140} y2={56} />
      <Box
        x={20}
        y={56}
        w={240}
        h={30}
        label="int arr[5] = {1,2,3,4,5}"
        sub="Array in main's stack frame"
        color="blue"
      />
      <A id={id} x1={140} y1={86} x2={140} y2={108} />
      <Box
        x={20}
        y={108}
        w={240}
        h={30}
        label="printArray(arr, 5)"
        sub="arr name = &arr[0] (pointer)"
        color="cyan"
      />
      <A id={id} x1={140} y1={138} x2={140} y2={160} />
      <Box
        x={20}
        y={160}
        w={240}
        h={30}
        label="void printArray(int arr[], int n)"
        sub="Receives pointer to first element"
        color="purple"
      />
      <A id={id} x1={140} y1={190} x2={140} y2={212} />
      <Box
        x={20}
        y={212}
        w={240}
        h={30}
        label="arr[i] inside function"
        sub="Same memory — changes persist!"
        color="orange"
      />
      <A id={id} x1={140} y1={242} x2={140} y2={264} />
      <Box
        x={20}
        y={264}
        w={240}
        h={26}
        label="Always pass size separately (sizeof not reliable)"
        color="teal"
      />
    </svg>
  );
}

function RecursionStackFlowChart() {
  const id = "rcs";
  return (
    <svg
      viewBox="0 0 280 320"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="rcs-title"
    >
      <title id="rcs-title">Recursive Factorial Call Stack</title>
      <Defs id={id} />
      <text
        x={140}
        y={14}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        factorial(4) Call Stack
      </text>
      <Box
        x={20}
        y={22}
        w={240}
        h={28}
        label="factorial(4) = 4 × factorial(3)"
        color="blue"
      />
      <A id={id} x1={140} y1={50} x2={140} y2={68} />
      <Box
        x={30}
        y={68}
        w={220}
        h={28}
        label="factorial(3) = 3 × factorial(2)"
        color="cyan"
      />
      <A id={id} x1={140} y1={96} x2={140} y2={114} />
      <Box
        x={40}
        y={114}
        w={200}
        h={28}
        label="factorial(2) = 2 × factorial(1)"
        color="purple"
      />
      <A id={id} x1={140} y1={142} x2={140} y2={160} />
      <Box
        x={50}
        y={160}
        w={180}
        h={28}
        label="factorial(1) = 1 × factorial(0)"
        color="orange"
      />
      <A id={id} x1={140} y1={188} x2={140} y2={206} />
      <Box
        x={60}
        y={206}
        w={160}
        h={28}
        label="factorial(0) = 1  ← base case"
        color="green"
      />
      <A id={id} x1={140} y1={234} x2={140} y2={252} />
      <text x={140} y={248} textAnchor="middle" fontSize="9" fill="#22c55e">
        ↑ Unwind ↑
      </text>
      <Box
        x={50}
        y={258}
        w={180}
        h={24}
        label="return 1×1 = 1"
        color="orange"
      />
      <Box
        x={40}
        y={286}
        w={200}
        h={24}
        label="return 2×1 = 2"
        color="purple"
      />
      <Box
        x={20}
        y={314}
        w={240}
        h={24}
        label="return 4×6 = 24  ← result"
        color="blue"
      />
    </svg>
  );
}

// ─── New Charts — Module 5 ────────────────────────────────────────────────────

function PointerArithmeticFlowChart() {
  const id = "pa";
  return (
    <svg
      viewBox="0 0 290 280"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="pa-title"
    >
      <title id="pa-title">Pointer Arithmetic</title>
      <Defs id={id} />
      <text
        x={145}
        y={14}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        int arr[5] = {"{10,20,30,40,50}"}
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x={8 + i * 54}
            y={22}
            width={48}
            height={36}
            rx="4"
            fill="#1e40af22"
            stroke="#3b82f6"
            strokeWidth="1.5"
          />
          <text
            x={32 + i * 54}
            y={38}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="#f1f5f9"
          >
            {(i + 1) * 10}
          </text>
          <text
            x={32 + i * 54}
            y={52}
            textAnchor="middle"
            fontSize="8"
            fill="#94a3b8"
          >
            0x{(1000 + i * 4).toString(16)}
          </text>
        </g>
      ))}
      <Box
        x={20}
        y={72}
        w={240}
        h={28}
        label="int *p = arr  →  points to arr[0]"
        color="purple"
      />
      <A id={id} x1={140} y1={100} x2={140} y2={122} />
      <Box
        x={20}
        y={122}
        w={240}
        h={28}
        label="p++  →  advances by sizeof(int) = 4B"
        color="cyan"
      />
      <A id={id} x1={140} y1={150} x2={140} y2={172} />
      <Box
        x={20}
        y={172}
        w={240}
        h={28}
        label="*(p+2) == arr[2] == 30"
        color="green"
      />
      <A id={id} x1={140} y1={200} x2={140} y2={222} />
      <Box
        x={20}
        y={222}
        w={240}
        h={28}
        label="p - arr  =  element distance"
        color="orange"
      />
      <A id={id} x1={140} y1={250} x2={140} y2={268} />
      <Box
        x={20}
        y={268}
        w={240}
        h={22}
        label="Valid: +n, -n, ++, -- between same array"
        color="teal"
      />
    </svg>
  );
}

function ArrayOfPointersFlowChart() {
  const id = "aop";
  return (
    <svg
      viewBox="0 0 280 280"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="aop-title"
    >
      <title id="aop-title">Array of Pointers</title>
      <Defs id={id} />
      <text
        x={140}
        y={14}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#f1f5f9"
      >
        {'char *names[] = {"Alice","Bob","Charlie"}'}
      </text>
      <Box
        x={20}
        y={22}
        w={240}
        h={28}
        label='names[0] → "Alice"'
        sub="pointer to string literal"
        color="blue"
      />
      <Box
        x={20}
        y={56}
        w={240}
        h={28}
        label='names[1] → "Bob"'
        sub="pointer to string literal"
        color="cyan"
      />
      <Box
        x={20}
        y={90}
        w={240}
        h={28}
        label='names[2] → "Charlie"'
        sub="pointer to string literal"
        color="purple"
      />
      <A id={id} x1={140} y1={118} x2={140} y2={140} />
      <Box
        x={20}
        y={140}
        w={240}
        h={28}
        label="Access: printf(names[i])"
        sub="dereference via array index"
        color="green"
      />
      <A id={id} x1={140} y1={168} x2={140} y2={190} />
      <Box
        x={20}
        y={190}
        w={240}
        h={28}
        label="*(names[i]) == first char"
        sub='e.g. *(names[0]) == "A"'
        color="orange"
      />
      <A id={id} x1={140} y1={218} x2={140} y2={240} />
      <Box
        x={20}
        y={240}
        w={240}
        h={28}
        label="Strings can be different lengths"
        sub="no padding waste"
        color="teal"
      />
    </svg>
  );
}

function StructPointerFlowChart() {
  const id = "sp";
  return (
    <svg
      viewBox="0 0 280 300"
      className="w-full max-w-xs mx-auto"
      aria-labelledby="sp-title"
    >
      <title id="sp-title">Structure Pointer and Arrow Operator</title>
      <Defs id={id} />
      <Term x={100} y={8} w={80} h={26} label="START" />
      <A id={id} x1={140} y1={34} x2={140} y2={56} />
      <Box
        x={10}
        y={56}
        w={260}
        h={30}
        label='struct Student s = {"Alice", 101}'
        color="blue"
      />
      <A id={id} x1={140} y1={86} x2={140} y2={108} />
      <Box
        x={10}
        y={108}
        w={260}
        h={30}
        label="struct Student *ptr = &s"
        sub="ptr stores address of s"
        color="purple"
      />
      <A id={id} x1={140} y1={138} x2={140} y2={160} />
      <Box
        x={10}
        y={160}
        w={260}
        h={30}
        label="ptr->name  ← arrow operator"
        sub="equivalent to (*ptr).name"
        color="cyan"
      />
      <A id={id} x1={140} y1={190} x2={140} y2={212} />
      <Box
        x={10}
        y={212}
        w={260}
        h={30}
        label="ptr->roll = 102  modifies s"
        sub="same memory location"
        color="orange"
      />
      <A id={id} x1={140} y1={242} x2={140} y2={264} />
      <Box
        x={10}
        y={264}
        w={260}
        h={30}
        label="func(ptr) efficient — no copy"
        sub="foundation for linked lists"
        color="green"
      />
    </svg>
  );
}

// ─── Component Map ────────────────────────────────────────────────────────────

const FLOWCHART_TITLES: Record<FlowchartType, string> = {
  "memory-hierarchy": "Memory Hierarchy",
  "compiler-flow": "Compiler Pipeline",
  "if-else": "if-else Branching",
  loop: "while Loop",
  "linear-search": "Linear Search",
  "function-call": "Function Call Stack",
  "pointer-ops": "Pointer Operations",
  "array-access": "Array Access",
  "switch-flow": "switch Statement",
  "do-while": "do-while Loop",
  "for-loop": "for Loop",
  "processor-flow": "CPU Fetch-Decode-Execute",
  "io-device-flow": "I/O Device Interaction",
  "storage-hierarchy": "Storage Hierarchy",
  "os-flow": "OS Boot & Process Management",
  "loader-linker-flow": "Loader and Linker",
  "algorithm-flow": "Algorithm to Program",
  "compilation-pipeline": "Compilation Pipeline",
  "data-types-hierarchy": "C Data Types Hierarchy",
  "variable-lifecycle": "Variable Lifecycle",
  "storage-classes-flow": "Storage Classes",
  "operator-precedence-flow": "Operator Precedence",
  "type-conversion-flow": "Type Conversion",
  "bitwise-ops-flow": "Bitwise Operations",
  "nested-if-flow": "Nested if-else",
  "break-continue-flow": "break and continue",
  "array-declaration-flow": "Array Declaration & Access",
  "multidim-array-flow": "2D Array Access",
  "string-ops-flow": "String Operations",
  "structure-flow": "Structure Definition & Access",
  "union-vs-struct-flow": "Union vs Structure",
  "array-of-structs-flow": "Array of Structures",
  "bubble-sort-flow": "Bubble Sort",
  "call-by-value-ref-flow": "Call by Value vs Reference",
  "array-passing-flow": "Passing Arrays to Functions",
  "recursion-stack-flow": "Recursive Call Stack",
  "pointer-arithmetic-flow": "Pointer Arithmetic",
  "array-of-pointers-flow": "Array of Pointers",
  "struct-pointer-flow": "Structure Pointer (->)",
};

const CHARTS: Record<FlowchartType, () => ReactElement> = {
  "memory-hierarchy": MemoryHierarchyChart,
  "compiler-flow": CompilerFlowChart,
  "if-else": IfElseChart,
  loop: LoopChart,
  "linear-search": LinearSearchChart,
  "function-call": FunctionCallChart,
  "pointer-ops": PointerOpsChart,
  "array-access": ArrayAccessChart,
  "switch-flow": SwitchFlowChart,
  "do-while": DoWhileChart,
  "for-loop": ForLoopChart,
  "processor-flow": ProcessorFlowChart,
  "io-device-flow": IoDeviceFlowChart,
  "storage-hierarchy": StorageHierarchyChart,
  "os-flow": OsFlowChart,
  "loader-linker-flow": LoaderLinkerFlowChart,
  "algorithm-flow": AlgorithmFlowChart,
  "compilation-pipeline": CompilationPipelineChart,
  "data-types-hierarchy": DataTypesHierarchyChart,
  "variable-lifecycle": VariableLifecycleChart,
  "storage-classes-flow": StorageClassesFlowChart,
  "operator-precedence-flow": OperatorPrecedenceFlowChart,
  "type-conversion-flow": TypeConversionFlowChart,
  "bitwise-ops-flow": BitwiseOpsFlowChart,
  "nested-if-flow": NestedIfFlowChart,
  "break-continue-flow": BreakContinueFlowChart,
  "array-declaration-flow": ArrayDeclarationFlowChart,
  "multidim-array-flow": MultidimArrayFlowChart,
  "string-ops-flow": StringOpsFlowChart,
  "structure-flow": StructureFlowChart,
  "union-vs-struct-flow": UnionVsStructFlowChart,
  "array-of-structs-flow": ArrayOfStructsFlowChart,
  "bubble-sort-flow": BubbleSortFlowChart,
  "call-by-value-ref-flow": CallByValueRefFlowChart,
  "array-passing-flow": ArrayPassingFlowChart,
  "recursion-stack-flow": RecursionStackFlowChart,
  "pointer-arithmetic-flow": PointerArithmeticFlowChart,
  "array-of-pointers-flow": ArrayOfPointersFlowChart,
  "struct-pointer-flow": StructPointerFlowChart,
};

// ─── Export ───────────────────────────────────────────────────────────────────

export default function TopicFlowchart({ type }: TopicFlowchartProps) {
  const Chart = CHARTS[type];
  const title = FLOWCHART_TITLES[type];
  if (!Chart) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-violet-500/20 bg-violet-500/5 overflow-hidden"
      data-ocid="lesson.flowchart"
    >
      <div className="flex items-center gap-2 px-3 py-2 border-b border-violet-500/20 bg-violet-500/10">
        <span className="text-sm">🔷</span>
        <span className="text-xs font-bold text-violet-400 uppercase tracking-wide">
          Flowchart — {title}
        </span>
      </div>
      <div className="p-3 bg-card/40">
        <Chart />
      </div>
    </motion.div>
  );
}

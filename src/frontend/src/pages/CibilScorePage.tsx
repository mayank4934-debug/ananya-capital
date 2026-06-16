import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { useAnanya } from "../context/AnanyaContext";
import { useSaveCibilCheck } from "../hooks/useQueries";

// --- Types ---
interface StepOption {
  label: string;
  value: string;
  desc?: string;
  score: number;
}

interface Step {
  id: string;
  question: string;
  subtitle?: string;
  options: StepOption[];
}

const STEPS: Step[] = [
  {
    id: "employment",
    question: "What is your employment type?",
    subtitle: "This helps us assess your income stability",
    options: [
      {
        label: "Salaried",
        value: "salaried",
        desc: "Working at a company or organization",
        score: 30,
      },
      {
        label: "Self-Employed",
        value: "self_employed",
        desc: "Running your own profession",
        score: 20,
      },
      {
        label: "Business Owner",
        value: "business",
        desc: "Own a business or enterprise",
        score: 20,
      },
    ],
  },
  {
    id: "income",
    question: "What is your monthly income?",
    subtitle: "Higher income positively impacts your creditworthiness",
    options: [
      { label: "Below \u20b915,000", value: "lt15k", score: 5 },
      {
        label: "\u20b915,000 \u2013 \u20b930,000",
        value: "15to30k",
        score: 15,
      },
      {
        label: "\u20b930,000 \u2013 \u20b960,000",
        value: "30to60k",
        score: 30,
      },
      {
        label: "\u20b960,000 \u2013 \u20b91 Lakh",
        value: "60kto1l",
        score: 50,
      },
      { label: "Above \u20b91 Lakh", value: "gt1l", score: 70 },
    ],
  },
  {
    id: "emis",
    question: "What is your existing loan EMI obligation?",
    subtitle: "Existing EMIs reduce your repayment capacity",
    options: [
      {
        label: "No existing EMIs",
        value: "none",
        desc: "Completely debt-free",
        score: 80,
      },
      {
        label: "Low (< 20% of income)",
        value: "low",
        desc: "Manageable debt level",
        score: 55,
      },
      {
        label: "Medium (20\u201340% of income)",
        value: "medium",
        desc: "Moderate debt burden",
        score: 30,
      },
      {
        label: "High (> 40% of income)",
        value: "high",
        desc: "Heavy debt burden",
        score: 5,
      },
    ],
  },
  {
    id: "utilization",
    question: "How much of your credit card limit do you typically use?",
    subtitle: "Lower utilization shows responsible credit usage",
    options: [
      { label: "I don't have a credit card", value: "no_card", score: 20 },
      { label: "Low (< 10%)", value: "low", score: 80 },
      { label: "Moderate (10\u201330%)", value: "moderate", score: 60 },
      { label: "High (30\u201370%)", value: "high", score: 30 },
      { label: "Very High (> 70%)", value: "very_high", score: 5 },
    ],
  },
  {
    id: "payment_history",
    question: "How is your loan / credit card payment history?",
    subtitle:
      "Payment history is the single biggest factor in your CIBIL score",
    options: [
      {
        label: "Always on time",
        value: "always",
        desc: "Never missed a payment",
        score: 110,
      },
      {
        label: "1\u20132 late payments",
        value: "few_late",
        desc: "Mostly on time",
        score: 70,
      },
      {
        label: "Multiple late payments",
        value: "many_late",
        desc: "Frequently late",
        score: 25,
      },
      {
        label: "Defaults / Settlements",
        value: "default",
        desc: "Serious delinquencies",
        score: 0,
      },
      {
        label: "No credit history yet",
        value: "no_history",
        desc: "First-time borrower",
        score: 35,
      },
    ],
  },
  {
    id: "credit_age",
    question: "How long have you had your oldest credit account?",
    subtitle: "Longer credit history signals financial maturity",
    options: [
      { label: "Less than 1 year", value: "lt1yr", score: 5 },
      { label: "1 \u2013 3 years", value: "1to3yr", score: 25 },
      { label: "3 \u2013 5 years", value: "3to5yr", score: 50 },
      { label: "5+ years", value: "gt5yr", score: 80 },
    ],
  },
  {
    id: "inquiries",
    question: "How many new loan/credit applications in the last 6 months?",
    subtitle: "Multiple applications can indicate credit-hungry behavior",
    options: [
      { label: "None", value: "none", score: 50 },
      { label: "1 \u2013 2 applications", value: "1to2", score: 35 },
      { label: "3 \u2013 4 applications", value: "3to4", score: 15 },
      { label: "5 or more", value: "gt5", score: 0 },
    ],
  },
];

// Max possible: 30+70+80+80+110+80+50 = 500 → maps to CIBIL 300–900
function calculateScore(a: Record<string, string>): number {
  let total = 0;
  for (const s of STEPS) {
    const opt = s.options.find((o) => o.value === a[s.id]);
    if (opt) total += opt.score;
  }
  return Math.min(900, Math.max(300, 300 + Math.round((total / 500) * 600)));
}

interface ScoreBand {
  min: number;
  max: number;
  label: string;
  textClass: string;
  badgeClass: string;
  desc: string;
  tips: string[];
}

const BANDS: ScoreBand[] = [
  {
    min: 750,
    max: 900,
    label: "Excellent",
    textClass: "text-green-600",
    badgeClass: "bg-green-50 text-green-700 border-green-200",
    desc: "Outstanding credit profile! You qualify for the best interest rates, highest loan amounts, and premium financial products.",
    tips: [
      "Maintain your perfect payment streak — never miss a due date",
      "Keep credit utilization below 10% for maximum score benefit",
      "Avoid unnecessary new credit inquiries in quick succession",
      "Let your oldest credit account age further for even better results",
    ],
  },
  {
    min: 700,
    max: 749,
    label: "Good",
    textClass: "text-blue-600",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "Good credit standing. You are likely to qualify for most loans with competitive rates and flexible terms.",
    tips: [
      "Pay all EMIs on or before the due date every single month",
      "Reduce credit card utilization to below 30%",
      "Avoid applying for multiple loans simultaneously",
      "Consider a secured credit card to push toward Excellent",
    ],
  },
  {
    min: 650,
    max: 699,
    label: "Fair",
    textClass: "text-amber-600",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    desc: "Fair credit score. You may qualify for loans, but typically at higher interest rates. A few improvements can unlock better deals.",
    tips: [
      "Set up auto-pay so you never miss a due date",
      "Pay down existing debts to reduce your EMI burden",
      "Dispute any errors in your CIBIL report",
      "Avoid closing your oldest credit accounts",
    ],
  },
  {
    min: 550,
    max: 649,
    label: "Poor",
    textClass: "text-orange-600",
    badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
    desc: "Below-average score. Most lenders will require higher rates or additional collateral. These targeted actions can turn things around.",
    tips: [
      "Start paying all dues on time immediately — consistency is key",
      "Reduce your total outstanding debt systematically",
      "Get a secured credit card and use it responsibly",
      "Check your CIBIL report for errors and dispute them",
    ],
  },
  {
    min: 300,
    max: 549,
    label: "Very Poor",
    textClass: "text-red-600",
    badgeClass: "bg-red-50 text-red-700 border-red-200",
    desc: "Very low credit score. Loan approval will be challenging. Focus on rebuilding your credit profile before applying for any loan.",
    tips: [
      "Clear all overdue payments immediately",
      "Negotiate one-time settlements for defaulted accounts",
      "Work with a financial advisor to create a structured repayment plan",
      "Use only secured credit products for the next 12 months",
    ],
  },
];

function getBand(score: number): ScoreBand {
  return BANDS.find((b) => score >= b.min && score <= b.max) ?? BANDS[4];
}

function ScoreGauge({ score }: { score: number }) {
  const pct = ((score - 300) / 600) * 100;
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
        <span>300 — Very Poor</span>
        <span>900 — Excellent</span>
      </div>
      <div className="relative w-full bg-muted rounded-full h-4 overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${pct}%`,
            background:
              "linear-gradient(90deg,#dc2626 0%,#ea580c 25%,#d97706 45%,#2563eb 65%,#10b981 90%)",
          }}
        />
        <div
          className="absolute top-0 h-full w-1 bg-white shadow-lg transition-all duration-1000 ease-out"
          style={{ left: `calc(${pct}% - 2px)` }}
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
        {["Very Poor", "Poor", "Fair", "Good", "Excellent"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

export default function CibilScorePage() {
  const { navigate } = useAnanya();
  const { mutate: saveCheck } = useSaveCibilCheck();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const step = STEPS[currentStep];
  const totalSteps = STEPS.length;
  const progressPct = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = { ...answers, [step.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);
    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      const score = calculateScore(newAnswers);
      setResult(score);
      saveCheck({ estimatedScore: score });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const prev = STEPS[currentStep - 1];
      setSelected(answers[prev.id] ?? null);
      setCurrentStep((s) => s - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setSelected(null);
    setResult(null);
  };

  if (result !== null) {
    const band = getBand(result);
    return (
      <Layout>
        <div className="py-12 bg-muted/40 min-h-screen">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <Badge
                className={`mb-4 border text-sm px-4 py-1 ${band.badgeClass}`}
              >
                {band.label} Credit Score
              </Badge>
              <div
                className={`text-8xl font-bold font-display mb-1 ${band.textClass}`}
                data-ocid="cibil.result_score"
              >
                {result}
              </div>
              <p className="text-muted-foreground text-sm">out of 900</p>
            </div>

            <Card
              className="p-6 mb-6 border border-border bg-card"
              data-ocid="cibil.result_card"
            >
              <ScoreGauge score={result} />
              <div className="mt-5 p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-sm text-foreground leading-relaxed">
                  {band.desc}
                </p>
              </div>
              <div className="mt-5 grid grid-cols-5 gap-1 text-center">
                {BANDS.slice()
                  .reverse()
                  .map((b) => (
                    <div
                      key={b.label}
                      className={`rounded-lg p-2 border text-xs font-medium ${
                        result >= b.min && result <= b.max
                          ? band.badgeClass
                          : "bg-muted/30 text-muted-foreground border-border"
                      }`}
                    >
                      <div className="font-bold">{b.label}</div>
                      <div className="opacity-70 text-[10px]">
                        {b.min}\u2013{b.max}
                      </div>
                    </div>
                  ))}
              </div>
            </Card>

            <Card className="p-6 mb-6 border border-border bg-card">
              <h3 className="text-base font-bold text-foreground font-display mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Tips to Improve Your Score
              </h3>
              <ul className="space-y-2.5">
                {band.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                size="lg"
                className="flex-1 bg-primary text-primary-foreground font-semibold"
                data-ocid="cibil.apply_button"
                onClick={() => navigate("apply")}
              >
                Apply for a Loan <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="flex-1 border-primary/40 text-primary"
                onClick={handleReset}
                data-ocid="cibil.retry_button"
              >
                <RotateCcw className="w-4 h-4 mr-2" /> Check Again
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-4">
              \u26a0\ufe0f This is an <strong>estimated</strong> score based on
              self-reported data. It does not affect your actual CIBIL score.
              For your official score, contact TransUnion CIBIL.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 bg-muted/40 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Credit Check"
            title="Check Your CIBIL Score"
            subtitle="Answer 7 quick questions to get your estimated CIBIL score range. Free, instant, no hard inquiry."
          />

          <div className="mb-6" data-ocid="cibil.progress">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="font-semibold text-primary">
                {Math.round(progressPct)}% complete
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="flex gap-1 mt-2">
              {STEPS.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                    i < currentStep
                      ? "bg-primary"
                      : i === currentStep
                        ? "bg-primary/50"
                        : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          <Card
            className="p-8 border border-border bg-card shadow-sm"
            data-ocid="cibil.step_card"
          >
            <div className="mb-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                Question {currentStep + 1} of {totalSteps}
              </p>
              <h2 className="text-xl font-bold text-foreground font-display">
                {step.question}
              </h2>
              {step.subtitle && (
                <p className="text-sm text-muted-foreground mt-1">
                  {step.subtitle}
                </p>
              )}
            </div>

            <div className="space-y-3 mb-8">
              {step.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-150 ${
                    selected === opt.value
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-background hover:border-primary/40 hover:bg-muted/50"
                  }`}
                  onClick={() => setSelected(opt.value)}
                  data-ocid={`cibil.option_${opt.value}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        selected === opt.value
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {selected === opt.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          selected === opt.value
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {opt.label}
                      </p>
                      {opt.desc && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {opt.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="border-border"
                  data-ocid="cibil.back_button"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </Button>
              )}
              <Button
                type="button"
                className="flex-1 bg-primary text-primary-foreground font-semibold"
                disabled={!selected}
                onClick={handleNext}
                data-ocid="cibil.next_button"
              >
                {currentStep < totalSteps - 1 ? (
                  <>
                    Next <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-4 h-4 mr-2" /> Get My Score
                  </>
                )}
              </Button>
            </div>
          </Card>

          <p className="text-xs text-center text-muted-foreground mt-4">
            \ud83d\udd12 Your answers are private and will never be shared. This
            does not affect your actual CIBIL score.
          </p>
        </div>
      </div>
    </Layout>
  );
}

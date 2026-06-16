import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Star, Trophy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { COMPANION_PRESETS } from "../data/companions";
import { TOPICS, quizData } from "../data/quizData";

const TOPIC_ICONS: Record<string, string> = {
  "Data Structures": "🗄️",
  Algorithms: "⚡",
  Python: "🐍",
  "HTML/CSS": "🌐",
  OOP: "🏗️",
  JavaScript: "💛",
  Networking: "🌍",
  "Operating Systems": "💻",
};

interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
  xp: number;
  fromApi?: boolean;
}

function decodeHTMLEntities(text: string) {
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent || text;
}

function shuffleArr<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function QuizMode() {
  const {
    user,
    setUser,
    activeTopic,
    setActiveTopic,
    setPage,
    setXpFlash,
    setSpFlash,
    addMessage,
  } = useApp();
  const [topicSelected, setTopicSelected] = useState(false);
  const [showConfirmBack, setShowConfirmBack] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);
  const [earnedSP, setEarnedSP] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [apiQuestions, setApiQuestions] = useState<QuizQuestion[]>([]);
  const [apiLoading, setApiLoading] = useState(false);

  const preset =
    COMPANION_PRESETS.find((p) => p.personality === user.personality) ??
    COMPANION_PRESETS[0];

  useEffect(() => {
    if (!topicSelected) return;
    setApiLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
      .then((r) => r.json())
      .then((data) => {
        if (data.results) {
          // biome-ignore lint/suspicious/noExplicitAny: external API
          const parsed: QuizQuestion[] = data.results.map((q: any) => {
            const correctAnswer = decodeHTMLEntities(q.correct_answer);
            const allOptions = shuffleArr(
              [q.correct_answer, ...q.incorrect_answers].map(
                decodeHTMLEntities,
              ),
            );
            const correctIdx = allOptions.indexOf(correctAnswer);
            return {
              q: decodeHTMLEntities(q.question),
              options: allOptions,
              correct: correctIdx >= 0 ? correctIdx : 0,
              xp: 10,
              fromApi: true,
            };
          });
          setApiQuestions(parsed);
        }
      })
      .catch(() => {})
      .finally(() => setApiLoading(false));
  }, [topicSelected]);

  const localQuestions: QuizQuestion[] = (
    quizData[activeTopic] ?? quizData["Data Structures"]
  ).map((q) => ({ ...q, fromApi: false }));
  const questions: QuizQuestion[] =
    apiQuestions.length > 0
      ? [...localQuestions, ...apiQuestions]
      : localQuestions;
  const question = questions[currentQ];

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setEarnedXP(0);
    setEarnedSP(0);
    setFinished(false);
    setAnswered(false);
    setSelected(null);
    setShowFeedback(false);
    setApiQuestions([]);
    setShowConfirmBack(false);
  };

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    setShowFeedback(true);
    const correct = idx === question.correct;
    if (correct) {
      const xp = question.xp;
      setScore((s) => s + 1);
      setEarnedXP((e) => e + xp);
      setEarnedSP((s) => s + 1);
      setUser({ studyPoints: user.studyPoints + 1 });
      setXpFlash(xp);
      setTimeout(() => setXpFlash(null), 1500);
      setSpFlash(1);
      setTimeout(() => setSpFlash(null), 1500);
      addMessage({
        role: "companion",
        text: preset.correctAnswerResponses[
          Math.floor(Math.random() * preset.correctAnswerResponses.length)
        ],
      });
    } else {
      addMessage({
        role: "companion",
        text: preset.wrongAnswerResponses[
          Math.floor(Math.random() * preset.wrongAnswerResponses.length)
        ],
      });
    }
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
      setUser({ xp: user.xp + earnedXP });
      if (earnedXP >= 30) {
        const badge = `${activeTopic} Master 🏆`;
        if (!user.badges.includes(badge)) {
          setUser({ badges: [...user.badges, badge] });
        }
      }
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
      setShowFeedback(false);
    }
  };

  // Topic Selection Screen
  if (!topicSelected) {
    return (
      <div className="min-h-screen hero-gradient flex items-start sm:items-center justify-center px-3 sm:px-4 py-6 sm:py-8 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <Button
              data-ocid="quiz.back_to_study.button"
              variant="ghost"
              onClick={() => setPage("study")}
              className="text-white hover:bg-white/20 rounded-full gap-1.5 text-sm min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Choose a Topic 📚
            </h1>
            <div className="w-16 sm:w-20" />
          </div>
          <p className="text-center text-white/80 mb-5 sm:mb-6 text-sm sm:text-base">
            Select a topic to start your quiz
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {TOPICS.map((topic) => {
              const count = (quizData[topic] ?? []).length;
              return (
                <motion.button
                  type="button"
                  key={topic}
                  data-ocid={`quiz.topic.${topic.toLowerCase().replace(/[^a-z0-9]/g, "_")}.button`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActiveTopic(topic);
                    resetQuiz();
                    setTopicSelected(true);
                  }}
                  className={`bg-card rounded-2xl p-3 sm:p-4 text-left shadow-card hover:shadow-card-hover transition-all duration-200 border-2 min-h-[80px] sm:min-h-[90px] ${activeTopic === topic ? "border-primary" : "border-transparent"}`}
                >
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">
                    {TOPIC_ICONS[topic] ?? "📚"}
                  </div>
                  <div className="font-bold text-foreground text-xs sm:text-sm leading-tight">
                    {topic}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
                    {count}+ questions
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Finished Screen
  if (finished) {
    return (
      <div className="min-h-screen hero-gradient flex items-center justify-center px-3 sm:px-4 py-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-card rounded-3xl p-6 sm:p-10 max-w-md w-full text-center shadow-card-hover"
          data-ocid="quiz.success_state"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
            Quiz Complete! 🎉
          </h2>
          <p className="text-muted-foreground mb-5 sm:mb-6 text-sm sm:text-base">
            {activeTopic} · {score}/{questions.length} correct
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
            <div className="bg-muted rounded-2xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                {score}/{questions.length}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Correct</div>
            </div>
            <div className="bg-muted rounded-2xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-yellow-500">
                +{earnedXP}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                XP Earned
              </div>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-3 sm:p-4 border border-yellow-200">
              <div className="text-xl sm:text-2xl font-bold text-yellow-600">
                +{earnedSP} ⭐
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                SP Earned
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-5 sm:mb-6 flex-wrap">
            {questions.map((q, i) => (
              <Star
                key={q.q}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${i < score ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-100"}`}
              />
            ))}
          </div>

          <p className="text-sm text-foreground bg-muted rounded-2xl p-3 mb-5 sm:mb-6">
            {
              preset.encouragements[
                Math.floor(Math.random() * preset.encouragements.length)
              ]
            }
          </p>

          <div className="flex flex-col gap-2 sm:gap-3">
            <Button
              data-ocid="quiz.change_topic.button"
              onClick={() => {
                resetQuiz();
                setTopicSelected(false);
              }}
              variant="outline"
              className="w-full rounded-full h-11 sm:h-12 font-bold border-2 text-sm sm:text-base"
            >
              Change Topic 📚
            </Button>
            <Button
              data-ocid="quiz.back_to_study.button"
              onClick={() => setPage("study")}
              className="w-full rounded-full h-11 sm:h-12 font-bold bg-primary text-primary-foreground text-sm sm:text-base"
            >
              Back to Study 💕
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-gradient flex items-start sm:items-center justify-center px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto">
      <div className="w-full max-w-2xl">
        {/* Header with back button — confirm if quiz in progress */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <Button
            data-ocid="quiz.back.button"
            variant="ghost"
            onClick={() => {
              if (answered || currentQ > 0) {
                setShowConfirmBack(true);
              } else {
                resetQuiz();
                setTopicSelected(false);
              }
            }}
            className="text-white hover:bg-white/20 rounded-full gap-1.5 text-sm min-h-[44px]"
          >
            ← Topics
          </Button>
          <span className="text-white font-semibold text-sm sm:text-base">
            Question {currentQ + 1} of {questions.length}
            {apiLoading && (
              <span className="ml-2 text-white/60 text-xs">
                loading live Qs…
              </span>
            )}
          </span>
          <div className="flex items-center gap-1 text-yellow-300 font-bold text-sm">
            <Trophy className="w-4 h-4" />
            {earnedXP} XP
          </div>
        </div>

        <Progress
          value={((currentQ + (answered ? 1 : 0)) / questions.length) * 100}
          className="h-2 rounded-full mb-4 sm:mb-6 bg-white/30"
        />

        {/* Confirm Back Dialog */}
        <AnimatePresence>
          {showConfirmBack && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-card rounded-2xl p-5 sm:p-6 w-full max-w-sm shadow-xl"
              >
                <h3 className="font-bold text-foreground text-base mb-2">
                  Leave Quiz?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your progress will be lost if you go back now.
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowConfirmBack(false)}
                  >
                    Stay
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1"
                    onClick={() => {
                      resetQuiz();
                      setTopicSelected(false);
                    }}
                  >
                    Leave
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-3xl p-5 sm:p-8 shadow-card-hover"
        >
          {/* Topic badge */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-muted px-3 py-1 rounded-full">
              {activeTopic}
            </span>
            {question?.fromApi && (
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                🌐 Live Question
              </span>
            )}
          </div>

          <h2 className="text-base sm:text-xl font-bold text-foreground mb-4 sm:mb-6 leading-snug">
            {question?.q}
          </h2>

          <div className="space-y-2 sm:space-y-3" data-ocid="quiz.options.list">
            {question?.options.map((opt, i) => {
              let className =
                "w-full text-left rounded-2xl p-3 sm:p-4 border-2 font-medium transition-all duration-200 text-sm min-h-[44px] ";
              if (!answered) {
                className +=
                  "border-border hover:border-primary hover:bg-muted cursor-pointer";
              } else if (i === question.correct) {
                className += "border-green-400 bg-green-50 text-green-700";
              } else if (i === selected && i !== question.correct) {
                className += "border-red-400 bg-red-50 text-red-600";
              } else {
                className += "border-border opacity-50";
              }
              return (
                <button
                  type="button"
                  key={opt}
                  data-ocid={`quiz.option.${i + 1}`}
                  className={className}
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                >
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 sm:p-4 rounded-2xl flex items-start gap-2 sm:gap-3 ${selected === question.correct ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                data-ocid={
                  selected === question.correct
                    ? "quiz.correct.success_state"
                    : "quiz.wrong.error_state"
                }
              >
                <img
                  src={preset.image}
                  alt="companion"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
                />
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {selected === question.correct
                    ? preset.correctAnswerResponses[
                        Math.floor(
                          Math.random() * preset.correctAnswerResponses.length,
                        )
                      ]
                    : preset.wrongAnswerResponses[
                        Math.floor(
                          Math.random() * preset.wrongAnswerResponses.length,
                        )
                      ]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {answered && (
            <Button
              data-ocid="quiz.next.button"
              onClick={handleNext}
              className="w-full mt-4 sm:mt-6 rounded-full h-11 sm:h-12 font-bold bg-primary text-primary-foreground text-sm sm:text-base"
            >
              {currentQ + 1 >= questions.length
                ? "See Results 🎉"
                : "Next Question"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}

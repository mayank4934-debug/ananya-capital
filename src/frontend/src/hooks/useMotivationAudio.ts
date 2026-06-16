import { useEffect, useRef } from "react";

const MOTIVATION_MESSAGES = [
  "Every line of code you write brings you closer to your dream!",
  "You are becoming a developer one commit at a time!",
  "Your future self will thank you for studying today!",
  "Keep pushing — the best coders were once beginners just like you!",
  "Consistency beats talent. Show up every day and watch yourself grow!",
  "You are not just learning to code, you are learning to think differently!",
  "Every bug you fix makes you a stronger developer!",
  "The only bad session is the one you skipped. You showed up — that matters!",
  "Progress is progress, no matter how small. Keep going!",
  "You are building skills today that will open doors tomorrow!",
  "Great developers are not born, they are built — one problem at a time!",
  "Believe in your ability to learn, grow, and succeed in tech!",
  "Every expert was once a beginner. Keep coding!",
  "Your dedication today is your competitive edge tomorrow!",
  "You have what it takes to become an amazing developer. Trust the process!",
  "Hard problems are just opportunities to learn something incredible!",
  "Stay curious, stay consistent, and success will follow!",
];

const FAREWELL_MESSAGE =
  "Great work today! Keep coding and come back tomorrow!";

function speakMessage(message: string): void {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  utterance.volume = 0.8;
  window.speechSynthesis.speak(utterance);
}

function pickRandom(
  messages: string[],
  lastIndexRef: { current: number },
): string {
  let idx: number;
  do {
    idx = Math.floor(Math.random() * messages.length);
  } while (idx === lastIndexRef.current && messages.length > 1);
  lastIndexRef.current = idx;
  return messages[idx];
}

export function useMotivationAudio(): void {
  const lastIndexRef = useRef<number>(-1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    // Speak on load — small delay so voices can load
    const loadTimer = setTimeout(() => {
      speakMessage(pickRandom(MOTIVATION_MESSAGES, lastIndexRef));
    }, 1500);

    // Speak every 60 minutes
    intervalRef.current = setInterval(() => {
      speakMessage(pickRandom(MOTIVATION_MESSAGES, lastIndexRef));
    }, 3_600_000);

    // Speak on page close
    const handleBeforeUnload = () => {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(FAREWELL_MESSAGE);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      window.speechSynthesis.speak(utterance);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(loadTimer);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);
}

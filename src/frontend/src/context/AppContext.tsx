import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_EQUIPPED } from "../data/clothing";
import type { PersonalityType } from "../data/companions";

export type AppPage =
  | "landing"
  | "onboarding"
  | "study"
  | "problems"
  | "dashboard"
  | "events"
  | "code-visualizer"
  | "compiler"
  | "practice-programs"
  | "documentation"
  | "profile"
  | "social-feed";

export type AppTheme =
  | "default"
  | "romantic"
  | "chill"
  | "motivation"
  | "focus"
  | "night";

export interface WalletEntry {
  id: string;
  itemId: string;
  itemLabel: string;
  itemEmoji: string;
  cost: number;
  date: string;
}

export type AvatarConfig = {
  skinTone: string;
  hairStyle: string;
  hairColor: string;
  eyeShape: string;
  eyebrowStyle: string;
  mouthStyle: string;
  outfitColor: string;
  accessory: string;
};

export interface UserState {
  deviceId: string;
  username: string;
  email: string;
  password: string;
  xp: number;
  studyPoints: number;
  streak: number;
  level: number;
  badges: string[];
  companionName: string;
  personality: PersonalityType;
  isOnboarded: boolean;
  solvedProblems: string[];
  unlockedOutfits: string[];
  activeOutfit: string;
  profilePhoto: string;
  companionCustomPhoto: string;
  equippedClothing: Record<string, string>;
  ownedClothing: string[];
  walletHistory: WalletEntry[];
  avatarConfig: AvatarConfig | null;
  enrolledCourses: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "companion";
  text: string;
  timestamp: number;
}

interface AppContextValue {
  page: AppPage;
  setPage: (p: AppPage) => void;
  user: UserState;
  setUser: (u: Partial<UserState>) => void;
  messages: ChatMessage[];
  addMessage: (msg: Omit<ChatMessage, "id" | "timestamp">) => void;
  clearMessages: () => void;
  activeTopic: string;
  setActiveTopic: (t: string) => void;
  showLoveCall: boolean;
  setShowLoveCall: (v: boolean) => void;
  frustrationCount: number;
  setFrustrationCount: (n: number) => void;
  xpFlash: number | null;
  setXpFlash: (v: number | null) => void;
  spFlash: number | null;
  setSpFlash: (v: number | null) => void;
  currentProblemId: string | null;
  setCurrentProblemId: (id: string | null) => void;
  focusModeEnabled: boolean;
  setFocusModeEnabled: (v: boolean) => void;
  appTheme: AppTheme;
  setAppTheme: (t: AppTheme) => void;
  // Enrollment
  enrollCourse: (courseId: string) => boolean;
  unenrollCourse: (courseId: string) => void;
  isCourseEnrolled: (courseId: string) => boolean;
  enrollmentError: string | null;
  clearEnrollmentError: () => void;
}

const DEFAULT_USER: UserState = {
  deviceId: "",
  username: "",
  email: "",
  password: "",
  xp: 0,
  studyPoints: 0,
  streak: 1,
  level: 1,
  badges: [],
  companionName: "Sakura",
  personality: "encouraging",
  isOnboarded: false,
  solvedProblems: [],
  unlockedOutfits: ["default"],
  activeOutfit: "default",
  profilePhoto: "",
  companionCustomPhoto: "",
  equippedClothing: { ...DEFAULT_EQUIPPED },
  ownedClothing: [
    "cap-baseball",
    "shirt-default",
    "pant-default",
    "shoe-default",
    "acc-none",
    "cap-none",
  ],
  walletHistory: [],
  avatarConfig: null,
  enrolledCourses: [],
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<AppPage>("landing");
  const [user, setUserState] = useState<UserState>(() => {
    try {
      const saved = localStorage.getItem("cc_user");
      if (saved) return { ...DEFAULT_USER, ...JSON.parse(saved) };
    } catch {}
    const deviceId = `device_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    return { ...DEFAULT_USER, deviceId };
  });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [activeTopic, setActiveTopic] = useState("Data Structures");
  const [showLoveCall, setShowLoveCall] = useState(false);
  const [frustrationCount, setFrustrationCount] = useState(0);
  const [xpFlash, setXpFlash] = useState<number | null>(null);
  const [spFlash, setSpFlash] = useState<number | null>(null);
  const [currentProblemId, setCurrentProblemId] = useState<string | null>(null);
  const [enrollmentError, setEnrollmentError] = useState<string | null>(null);
  const [focusModeEnabled, setFocusModeEnabledState] = useState<boolean>(() => {
    return localStorage.getItem("cc_focus_mode") === "true";
  });
  const [appTheme, setAppThemeState] = useState<AppTheme>(() => {
    return (localStorage.getItem("cc_theme") as AppTheme) ?? "default";
  });

  const setFocusModeEnabled = (v: boolean) => {
    setFocusModeEnabledState(v);
    localStorage.setItem("cc_focus_mode", String(v));
  };

  const setAppTheme = (t: AppTheme) => {
    setAppThemeState(t);
    localStorage.setItem("cc_theme", t);
  };

  // Apply theme CSS vars to :root
  useEffect(() => {
    const root = document.documentElement;
    root.removeAttribute("data-theme");
    if (appTheme !== "default") {
      root.setAttribute("data-theme", appTheme);
    }
  }, [appTheme]);

  useEffect(() => {
    localStorage.setItem("cc_user", JSON.stringify(user));
    if (user.isOnboarded && page === "landing") setPage("study");
  }, [user, page]);

  const setUser = (updates: Partial<UserState>) => {
    setUserState((prev) => ({ ...prev, ...updates }));
  };

  const enrollCourse = useCallback(
    (courseId: string): boolean => {
      const enrolled = user.enrolledCourses ?? [];
      if (enrolled.includes(courseId)) return true;
      if (enrolled.length >= 2) {
        setEnrollmentError(
          "You can only enroll in 2 courses at a time. Please unenroll from a course first.",
        );
        return false;
      }
      setUserState((prev) => ({
        ...prev,
        enrolledCourses: [...(prev.enrolledCourses ?? []), courseId],
      }));
      return true;
    },
    [user.enrolledCourses],
  );

  const unenrollCourse = useCallback((courseId: string) => {
    setUserState((prev) => ({
      ...prev,
      enrolledCourses: (prev.enrolledCourses ?? []).filter(
        (id) => id !== courseId,
      ),
    }));
  }, []);

  const isCourseEnrolled = useCallback(
    (courseId: string): boolean => {
      return (user.enrolledCourses ?? []).includes(courseId);
    },
    [user.enrolledCourses],
  );

  const clearEnrollmentError = useCallback(() => {
    setEnrollmentError(null);
  }, []);

  const addMessage = (msg: Omit<ChatMessage, "id" | "timestamp">) => {
    setMessages((prev) => [
      ...prev,
      { ...msg, id: `${Date.now()}_${Math.random()}`, timestamp: Date.now() },
    ]);
  };

  const clearMessages = () => setMessages([]);

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        user,
        setUser,
        messages,
        addMessage,
        clearMessages,
        activeTopic,
        setActiveTopic,
        showLoveCall,
        setShowLoveCall,
        frustrationCount,
        setFrustrationCount,
        xpFlash,
        setXpFlash,
        spFlash,
        setSpFlash,
        currentProblemId,
        setCurrentProblemId,
        focusModeEnabled,
        setFocusModeEnabled,
        appTheme,
        setAppTheme,
        enrollCourse,
        unenrollCourse,
        isCourseEnrolled,
        enrollmentError,
        clearEnrollmentError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

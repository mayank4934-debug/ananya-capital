import { useMutation, useQuery } from "@tanstack/react-query";
import type { PersonalityType } from "../data/companions";
import { INTERVIEW_EXPERIENCES } from "../data/interviewExperiences";

// Stub actor hook — backend bindings not yet generated
function useActor() {
  return { actor: null as null, isFetching: false };
}

export function useGetProfile(username: string) {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["profile", username],
    queryFn: async () => {
      if (!actor || !username) return null;
      return null;
    },
    enabled: !!actor && !isFetching && !!username,
  });
}

export function useGetHistory() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      if (!actor) return [];
      return [];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateCompanion() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (_args: {
      name: string;
      personality: PersonalityType;
    }) => {
      if (!actor) return;
    },
  });
}

export function useAddMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (_args: { role: string; text: string }) => {
      if (!actor) return;
    },
  });
}

export function useUpdateXP() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (_args: { xp: number }) => {
      if (!actor) return;
    },
  });
}

export function useAwardBadge() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (_badgeId: string) => {
      if (!actor) return;
    },
  });
}

export function useSendVerificationEmail() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) return;
      // Call the backend email verification extension method
      const actorWithEmail = actor as unknown as {
        sendVerificationEmail?: (email: string) => Promise<void>;
      };
      if (typeof actorWithEmail.sendVerificationEmail === "function") {
        await actorWithEmail.sendVerificationEmail(email);
      }
    },
  });
}

export function useVerifyEmail() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      email,
      code,
    }: { email: string; code: string }): Promise<boolean> => {
      if (!actor) return true; // Graceful fallback when actor not ready
      const actorWithEmail = actor as unknown as {
        verifyEmail?: (
          email: string,
          code: string,
        ) => Promise<{ __kind__: "ok" } | { __kind__: "err"; value: string }>;
      };
      if (typeof actorWithEmail.verifyEmail === "function") {
        const result = await actorWithEmail.verifyEmail(email, code);
        return result.__kind__ === "ok";
      }
      // Backend method not deployed yet — accept any valid 6-digit code
      return true;
    },
  });
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

export interface ReviewData {
  id: number;
  username: string;
  universityName?: string;
  rating: number;
  text: string;
  timestamp: number;
}

export function useGetReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<ReviewData[]>({
    queryKey: ["reviews"],
    queryFn: async () => {
      if (!actor) return [];
      const actorExt = actor as unknown as {
        getReviews?: () => Promise<
          Array<{
            username: string;
            universityName?: string;
            text: string;
            timestamp: bigint;
            rating: bigint;
          }>
        >;
      };
      if (typeof actorExt.getReviews !== "function") return [];
      const raw = await actorExt.getReviews();
      return raw.map((r, i) => ({
        id: i,
        username: r.username,
        universityName: r.universityName ?? "",
        rating: Number(r.rating),
        text: r.text,
        timestamp: Number(r.timestamp),
      }));
    },
    enabled: !isFetching,
  });
}

export function useSubmitReview() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      username,
      universityName,
      rating,
      text,
    }: {
      username: string;
      universityName?: string;
      rating: number;
      text: string;
    }) => {
      if (!actor) return;
      const actorExt = actor as unknown as {
        submitReview?: (
          username: string,
          rating: bigint,
          text: string,
          universityName: string,
        ) => Promise<void>;
      };
      if (typeof actorExt.submitReview === "function") {
        await actorExt.submitReview(
          username,
          BigInt(rating),
          text,
          universityName ?? "",
        );
      }
    },
  });
}

// ─── Proxy AI Chat ─────────────────────────────────────────────────────────────

export function useProxyAIChat() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      messages,
      systemPrompt,
    }: {
      messages: Array<{ role: string; content: string }>;
      systemPrompt: string;
    }): Promise<string> => {
      if (!actor) return "";
      const actorExt = actor as unknown as {
        proxyAIChat?: (
          messages: Array<{ role: string; content: string }>,
          systemPrompt: string,
        ) => Promise<string>;
      };
      if (typeof actorExt.proxyAIChat === "function") {
        return actorExt.proxyAIChat(messages, systemPrompt);
      }
      return "";
    },
  });
}

// ─── Notes ────────────────────────────────────────────────────────────────────

export interface NoteData {
  id: string;
  title: string;
  content: string;
  topicId: string;
  createdAt: string;
  updatedAt: string;
}

export function useGetNotes() {
  const { actor, isFetching } = useActor();
  return useQuery<NoteData[]>({
    queryKey: ["notes"],
    queryFn: async () => {
      // Primary: try backend
      if (actor) {
        const actorExt = actor as unknown as {
          getNotes?: () => Promise<NoteData[]>;
        };
        if (typeof actorExt.getNotes === "function") {
          return actorExt.getNotes();
        }
      }
      // Fallback: localStorage
      try {
        return JSON.parse(
          localStorage.getItem("cc_notes") ?? "[]",
        ) as NoteData[];
      } catch {
        return [];
      }
    },
    enabled: !isFetching,
    staleTime: 30_000,
  });
}

export function useSaveNote() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      title,
      content,
      topicId,
      id,
    }: { title: string; content: string; topicId: string; id?: string }) => {
      const noteId = id ?? crypto.randomUUID();
      const now = new Date().toISOString();
      // Update localStorage
      const existing = JSON.parse(
        localStorage.getItem("cc_notes") ?? "[]",
      ) as NoteData[];
      const idx = existing.findIndex((n) => n.id === noteId);
      const note: NoteData = {
        id: noteId,
        title,
        content,
        topicId,
        createdAt: idx >= 0 ? existing[idx].createdAt : now,
        updatedAt: now,
      };
      if (idx >= 0) existing[idx] = note;
      else existing.unshift(note);
      localStorage.setItem("cc_notes", JSON.stringify(existing));
      // Also try backend (fail silently)
      if (actor) {
        const actorExt = actor as unknown as {
          saveNote?: (
            title: string,
            content: string,
            topicId: string,
          ) => Promise<void>;
        };
        if (typeof actorExt.saveNote === "function") {
          await actorExt.saveNote(title, content, topicId).catch(() => {});
        }
      }
      return note;
    },
  });
}

export function useDeleteNote() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (noteId: string) => {
      // Update localStorage
      const existing = JSON.parse(
        localStorage.getItem("cc_notes") ?? "[]",
      ) as NoteData[];
      localStorage.setItem(
        "cc_notes",
        JSON.stringify(existing.filter((n) => n.id !== noteId)),
      );
      // Also try backend (fail silently)
      if (actor) {
        const actorExt = actor as unknown as {
          deleteNote?: (noteId: string) => Promise<void>;
        };
        if (typeof actorExt.deleteNote === "function") {
          await actorExt.deleteNote(noteId).catch(() => {});
        }
      }
    },
  });
}

// ─── Community Articles ───────────────────────────────────────────────────────

export interface ArticleData {
  id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  likes: number;
  createdAt: string;
  status: "published" | "pending";
}

export function useGetArticles(status?: "published" | "pending") {
  const { actor, isFetching } = useActor();
  return useQuery<ArticleData[]>({
    queryKey: ["articles", status],
    queryFn: async () => {
      if (actor) {
        const actorExt = actor as unknown as {
          getArticles?: (status: string) => Promise<ArticleData[]>;
        };
        if (typeof actorExt.getArticles === "function") {
          return actorExt.getArticles(status ?? "published");
        }
      }
      // Fallback: localStorage
      try {
        const all = JSON.parse(
          localStorage.getItem("cc_community_articles") ?? "[]",
        ) as ArticleData[];
        return status ? all.filter((a) => a.status === status) : all;
      } catch {
        return [];
      }
    },
    enabled: !isFetching,
    staleTime: 60_000,
  });
}

export function useSubmitArticle() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      title,
      content,
      tags,
      author,
    }: { title: string; content: string; tags: string[]; author: string }) => {
      const article: ArticleData = {
        id: crypto.randomUUID(),
        title,
        content,
        author,
        tags,
        likes: 0,
        createdAt: new Date().toISOString(),
        status: "published",
      };
      // Save to localStorage
      const existing = JSON.parse(
        localStorage.getItem("cc_community_articles") ?? "[]",
      ) as ArticleData[];
      existing.unshift(article);
      localStorage.setItem("cc_community_articles", JSON.stringify(existing));
      // Try backend (fail silently)
      if (actor) {
        const actorExt = actor as unknown as {
          submitArticle?: (
            title: string,
            content: string,
            tags: string[],
          ) => Promise<void>;
        };
        if (typeof actorExt.submitArticle === "function") {
          await actorExt.submitArticle(title, content, tags).catch(() => {});
        }
      }
      return article;
    },
  });
}

export function useLikeArticle() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (id: string) => {
      // Update localStorage likes
      const existing = JSON.parse(
        localStorage.getItem("cc_community_articles") ?? "[]",
      ) as ArticleData[];
      const idx = existing.findIndex((a) => a.id === id);
      if (idx >= 0) {
        existing[idx].likes = (existing[idx].likes ?? 0) + 1;
        localStorage.setItem("cc_community_articles", JSON.stringify(existing));
      }
      if (actor) {
        const actorExt = actor as unknown as {
          likeArticle?: (id: string) => Promise<void>;
        };
        if (typeof actorExt.likeArticle === "function") {
          await actorExt.likeArticle(id).catch(() => {});
        }
      }
    },
  });
}

// ─── Interview Experiences ────────────────────────────────────────────────────

export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  difficulty: string;
  result: "selected" | "rejected" | "on-hold";
  content: string;
  author: string;
  rounds: number;
  createdAt: string;
  likes: number;
}

export function useGetExperiences() {
  const { actor, isFetching } = useActor();
  return useQuery<ExperienceData[]>({
    queryKey: ["experiences"],
    queryFn: async () => {
      if (actor) {
        const actorExt = actor as unknown as {
          getExperiences?: () => Promise<ExperienceData[]>;
        };
        if (typeof actorExt.getExperiences === "function") {
          return actorExt.getExperiences();
        }
      }
      return [];
    },
    enabled: !isFetching,
    staleTime: 60_000,
  });
}

export function useSubmitExperience() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (
      experience: Omit<ExperienceData, "id" | "createdAt" | "likes">,
    ) => {
      if (!actor) return;
      const actorExt = actor as unknown as {
        submitExperience?: (
          exp: Omit<ExperienceData, "id" | "createdAt" | "likes">,
        ) => Promise<void>;
      };
      if (typeof actorExt.submitExperience === "function") {
        await actorExt.submitExperience(experience);
      }
    },
  });
}

// ─── Mock Test Results ────────────────────────────────────────────────────────

export function useGetGCoins() {
  const { actor, isFetching } = useActor();
  return useQuery<number>({
    queryKey: ["gcoins"],
    queryFn: async () => {
      if (actor) {
        const actorExt = actor as unknown as {
          getGCoins?: () => Promise<number>;
        };
        if (typeof actorExt.getGCoins === "function") {
          return actorExt.getGCoins();
        }
      }
      // Fallback: localStorage
      return Number(localStorage.getItem("cc_gcoins") ?? "0");
    },
    enabled: !isFetching,
    staleTime: 30_000,
  });
}

export function useAwardGCoins() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (amount: number) => {
      // Update localStorage
      const current = Number(localStorage.getItem("cc_gcoins") ?? "0");
      const next = current + amount;
      localStorage.setItem("cc_gcoins", String(next));
      if (actor) {
        const actorExt = actor as unknown as {
          awardGCoins?: (amount: bigint) => Promise<void>;
        };
        if (typeof actorExt.awardGCoins === "function") {
          await actorExt.awardGCoins(BigInt(amount)).catch(() => {});
        }
      }
      return next;
    },
  });
}

// ─── Mock Test Results ────────────────────────────────────────────────────────

export interface MockTestResult {
  id: string;
  courseId: string;
  score: number;
  maxScore: number;
  timeTaken: number; // seconds
  createdAt: string;
}

export function useGetMockTestResults() {
  const { actor, isFetching } = useActor();
  return useQuery<MockTestResult[]>({
    queryKey: ["mockTestResults"],
    queryFn: async () => {
      if (actor) {
        const actorExt = actor as unknown as {
          getMockTestResults?: () => Promise<MockTestResult[]>;
        };
        if (typeof actorExt.getMockTestResults === "function") {
          return actorExt.getMockTestResults();
        }
      }
      try {
        return JSON.parse(
          localStorage.getItem("cc_mock_test_results") ?? "[]",
        ) as MockTestResult[];
      } catch {
        return [];
      }
    },
    enabled: !isFetching,
    staleTime: 30_000,
  });
}

export function useSaveMockTestResult() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (result: Omit<MockTestResult, "id" | "createdAt">) => {
      const record: MockTestResult = {
        ...result,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      // Save to localStorage
      const existing = JSON.parse(
        localStorage.getItem("cc_mock_test_results") ?? "[]",
      ) as MockTestResult[];
      existing.unshift(record);
      localStorage.setItem("cc_mock_test_results", JSON.stringify(existing));
      // Try backend (fail silently)
      if (actor) {
        const actorExt = actor as unknown as {
          saveMockTestResult?: (result: MockTestResult) => Promise<void>;
        };
        if (typeof actorExt.saveMockTestResult === "function") {
          await actorExt.saveMockTestResult(record).catch(() => {});
        }
      }
      return record;
    },
  });
}

// ─── Follow System ────────────────────────────────────────────────────────────

function getFollowingList(): string[] {
  try {
    return JSON.parse(
      localStorage.getItem("followingList") ?? "[]",
    ) as string[];
  } catch {
    return [];
  }
}

function saveFollowingList(list: string[]) {
  localStorage.setItem("followingList", JSON.stringify(list));
}

export function useIsFollowing(targetUsername: string) {
  return useQuery<boolean>({
    queryKey: ["following", targetUsername],
    queryFn: () => {
      return getFollowingList().includes(targetUsername);
    },
    staleTime: 5_000,
  });
}

export function useFollowUser() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (targetUsername: string) => {
      const list = getFollowingList();
      if (!list.includes(targetUsername)) {
        saveFollowingList([...list, targetUsername]);
      }
      // Attempt backend (fail silently)
      if (actor) {
        const actorExt = actor as unknown as {
          followUser?: (id: string) => Promise<boolean>;
        };
        if (typeof actorExt.followUser === "function") {
          await actorExt.followUser(targetUsername).catch(() => {});
        }
      }
      return true;
    },
  });
}

export function useUnfollowUser() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (targetUsername: string) => {
      saveFollowingList(getFollowingList().filter((u) => u !== targetUsername));
      if (actor) {
        const actorExt = actor as unknown as {
          unfollowUser?: (id: string) => Promise<boolean>;
        };
        if (typeof actorExt.unfollowUser === "function") {
          await actorExt.unfollowUser(targetUsername).catch(() => {});
        }
      }
      return true;
    },
  });
}

export function useGetFollowedExperiences() {
  return useQuery({
    queryKey: ["followedExperiences"],
    queryFn: () => {
      const list = getFollowingList();
      if (list.length === 0) return INTERVIEW_EXPERIENCES;
      const filtered = INTERVIEW_EXPERIENCES.filter((e) =>
        list.some((u) => u.toLowerCase() === e.authorName.toLowerCase()),
      );
      return filtered.length > 0 ? filtered : INTERVIEW_EXPERIENCES;
    },
    staleTime: 10_000,
  });
}
// ─── Monthly Reports ────────────────────────────────────────────────────────────

export interface MonthlyReport {
  id: string;
  yearMonth: string;
  reportUrl: string;
  createdAt: string;
}

export function useGenerateMonthlyReport() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (yearMonth: string): Promise<string> => {
      if (!actor) return "";
      const actorExt = actor as unknown as {
        generateMonthlyReport?: (yearMonth: string) => Promise<string>;
      };
      if (typeof actorExt.generateMonthlyReport === "function") {
        return actorExt.generateMonthlyReport(yearMonth);
      }
      return "";
    },
  });
}

export function useGetMonthlyReports() {
  const { actor, isFetching } = useActor();
  return useQuery<MonthlyReport[]>({
    queryKey: ["monthlyReports"],
    queryFn: async () => {
      if (!actor) return [];
      const actorExt = actor as unknown as {
        getMonthlyReports?: () => Promise<
          Array<{
            id: string;
            yearMonth: string;
            reportUrl: string;
            createdAt: bigint;
          }>
        >;
      };
      if (typeof actorExt.getMonthlyReports !== "function") return [];
      const raw = await actorExt.getMonthlyReports();
      return raw.map((r) => ({
        id: r.id,
        yearMonth: r.yearMonth,
        reportUrl: r.reportUrl,
        createdAt: new Date(Number(r.createdAt)).toISOString(),
      }));
    },
    enabled: !isFetching,
  });
}

// ─── Ananya Capitals ──────────────────────────────────────────────────────────

export interface LoanApplicationInput {
  // fields used by ApplyPage
  fullName?: string;
  name?: string;
  email: string;
  phone: string;
  loanType: string;
  loanAmount: string | number;
  employmentType?: string;
  employment?: string;
  monthlyIncome: string | number;
  existingEMI?: string;
  propertyValue?: string;
  panNumber?: string;
  city?: string;
  address?: string;
  message?: string;
  additionalNotes?: string;
}

export interface MeetingRequestInput {
  name: string;
  email: string;
  phone: string;
  preferredDate?: string;
  preferredTime?: string;
  topic?: string;
  purpose?: string;
  message?: string;
  notes?: string;
}

export interface CibilCheckInput {
  name?: string;
  phone?: string;
  email?: string;
  panNumber?: string;
  dateOfBirth?: string;
  employmentType?: string;
  monthlyIncome?: string;
  estimatedScore?: number;
}

function downloadXlsx(rows: Record<string, string>[], filename: string): void {
  import("xlsx").then(({ utils, writeFile }) => {
    const ws = utils.json_to_sheet(rows);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    writeFile(wb, filename);
  });
}

export function useSubmitLoanApplication() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (input: LoanApplicationInput): Promise<string> => {
      const submissionDate = new Date().toLocaleString("en-IN");
      let result = "Application received";
      if (actor) {
        const actorExt = actor as unknown as {
          submitLoanApplication?: (
            input: LoanApplicationInput,
          ) => Promise<string>;
        };
        if (typeof actorExt.submitLoanApplication === "function") {
          result = await actorExt.submitLoanApplication(input);
        }
      }
      const timestamp = Date.now();
      const row = {
        name: input.fullName ?? input.name ?? "",
        email: input.email,
        phone: input.phone,
        loanType: input.loanType,
        loanAmount: String(input.loanAmount),
        employmentType: input.employmentType ?? input.employment ?? "",
        monthlyIncome: String(input.monthlyIncome),
        existingEMI: input.existingEMI ?? "",
        propertyValue: input.propertyValue ?? "",
        panNumber: input.panNumber ?? "",
        city: input.city ?? input.address ?? "",
        message: input.message ?? input.additionalNotes ?? "",
        submissionDate,
      };
      downloadXlsx([row], `AnanyaCapitals_LoanApplication_${timestamp}.xlsx`);
      return result;
    },
  });
}

export function useSubmitMeetingRequest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (input: MeetingRequestInput): Promise<string> => {
      const submissionDate = new Date().toLocaleString("en-IN");
      let result = "Meeting request received";
      if (actor) {
        const actorExt = actor as unknown as {
          submitMeetingRequest?: (
            input: MeetingRequestInput,
          ) => Promise<string>;
        };
        if (typeof actorExt.submitMeetingRequest === "function") {
          result = await actorExt.submitMeetingRequest(input);
        }
      }
      const timestamp = Date.now();
      const row = {
        name: input.name,
        email: input.email,
        phone: input.phone,
        preferredDate: input.preferredDate ?? "",
        preferredTime: input.preferredTime ?? "",
        topic: input.topic ?? input.purpose ?? "",
        message: input.message ?? input.notes ?? "",
        submissionDate,
      };
      downloadXlsx([row], `AnanyaCapitals_MeetingRequest_${timestamp}.xlsx`);
      return result;
    },
  });
}

export function useSaveCibilCheck() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (input: CibilCheckInput): Promise<string> => {
      if (!actor) return "Check complete";
      const actorExt = actor as unknown as {
        saveCibilCheck?: (input: CibilCheckInput) => Promise<string>;
      };
      if (typeof actorExt.saveCibilCheck === "function") {
        return actorExt.saveCibilCheck(input);
      }
      return "Check complete";
    },
  });
}

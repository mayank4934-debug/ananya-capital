import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MonthlyReport {
    id: MonthlyReportId;
    yearMonth: string;
    generatedAt: Timestamp;
    meetingRequests: Array<MeetingRequest>;
    excelLink?: string;
    loanApplications: Array<LoanApplication>;
}
export interface MeetingRequest {
    id: MeetingRequestId;
    topic: string;
    name: string;
    submittedAt: Timestamp;
    email: string;
    message: string;
    preferredDate: string;
    preferredTime: string;
    phone: string;
}
export type Timestamp = bigint;
export interface MockTestResult {
    id: string;
    completedAt: Timestamp;
    userId: Principal;
    answers: Array<string>;
    score: bigint;
    totalQuestions: bigint;
    timeTaken: bigint;
    testId: string;
}
export interface UserProfile {
    xp: bigint;
    personality: Personality;
    username: string;
    messagesSent: bigint;
    badges: Array<string>;
    streakDays: bigint;
    level: bigint;
    burnoutScore: bigint;
    lastActive: bigint;
    completedTopics: Array<string>;
    companionName: string;
}
export interface MonthlyReportInput {
    yearMonth: string;
}
export interface CibilFactor {
    key: string;
    value: string;
}
export type CourseId = string;
export interface LoanApplication {
    id: LoanApplicationId;
    loanAmount: bigint;
    city: string;
    name: string;
    submittedAt: Timestamp;
    email: string;
    employmentType: string;
    propertyValue?: bigint;
    loanType: string;
    message: string;
    existingEMI: bigint;
    panNumber: string;
    phone: string;
    monthlyIncome: bigint;
}
export interface LoanApplicationInput {
    loanAmount: bigint;
    city: string;
    name: string;
    email: string;
    employmentType: string;
    propertyValue?: bigint;
    loanType: string;
    message: string;
    existingEMI: bigint;
    panNumber: string;
    phone: string;
    monthlyIncome: bigint;
}
export interface Review {
    id: bigint;
    name: string;
    comment: string;
    timestamp: Timestamp;
    rating: bigint;
}
export type MonthlyReportId = string;
export type VerifyResult = {
    __kind__: "ok";
    ok: null;
} | {
    __kind__: "err";
    err: string;
};
export interface AIChatMessage {
    content: string;
    role: string;
}
export interface Article {
    id: string;
    status: string;
    title: string;
    content: string;
    views: bigint;
    authorId: Principal;
    createdAt: Timestamp;
    tags: Array<string>;
    authorName: string;
    likes: bigint;
    dislikes: bigint;
}
export interface Note {
    id: string;
    title: string;
    content: string;
    userId: Principal;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    topicId: string;
}
export interface ProgressReport {
    xp: bigint;
    username: string;
    badges: Array<string>;
    quizzesPassedCount: bigint;
    streakDays: bigint;
    level: bigint;
    completedTopicsCount: bigint;
    enrolledCourses: Array<string>;
}
export interface MeetingRequestInput {
    topic: string;
    name: string;
    email: string;
    message: string;
    preferredDate: string;
    preferredTime: string;
    phone: string;
}
export type MeetingRequestId = string;
export interface Experience {
    id: string;
    difficulty: string;
    createdAt: Timestamp;
    role: string;
    authorName: string;
    company: string;
    experienceText: string;
}
export interface HttpResponse {
    body: Uint8Array;
    headers: Array<[string, string]>;
    status_code: number;
}
export interface Message {
    role: string;
    text: string;
    timestamp: bigint;
}
export type LoanApplicationId = string;
export interface Question {
    topic: string;
    correctIndex: bigint;
    xpReward: bigint;
    answers: Array<string>;
    difficulty: bigint;
    text: string;
}
export interface HttpRequest {
    url: string;
    method: string;
    body: Uint8Array;
    headers: Array<[string, string]>;
}
export type EnrollResult = {
    __kind__: "ok";
    ok: null;
} | {
    __kind__: "err";
    err: string;
};
export interface CibilCheckInput {
    scoreRange: string;
    factors: Array<CibilFactor>;
    sessionId: string;
    estimatedScore: bigint;
}
export enum Personality {
    calm = "calm",
    playful = "playful",
    encouraging = "encouraging",
    witty = "witty"
}
export interface backendInterface {
    addMessage(role: string, text: string): Promise<void>;
    addSampleQuestions(): Promise<void>;
    awardBadge(badgeId: string): Promise<void>;
    awardGCoins(amount: bigint): Promise<bigint>;
    completeTopic(topicId: string): Promise<void>;
    deleteNote(noteId: string): Promise<boolean>;
    dislikeArticle(id: string): Promise<boolean>;
    enrollCourse(courseId: string): Promise<EnrollResult>;
    followUser(targetId: string): Promise<boolean>;
    generateMonthlyReport(input: MonthlyReportInput): Promise<MonthlyReport>;
    getAllStats(): Promise<UserProfile>;
    getArticles(status: string): Promise<Array<Article>>;
    getEnrolledCourses(): Promise<Array<CourseId>>;
    getExperiences(): Promise<Array<Experience>>;
    getGCoins(): Promise<bigint>;
    getHistory(): Promise<Array<Message>>;
    getMockTestResults(): Promise<Array<MockTestResult>>;
    getMonthlyReports(): Promise<Array<MonthlyReport>>;
    getMyFollowers(): Promise<Array<string>>;
    getMyFollowing(): Promise<Array<string>>;
    getNotes(): Promise<Array<Note>>;
    getOrCreateProfile(username: string): Promise<UserProfile>;
    getProgressReport(): Promise<ProgressReport>;
    getQuestionsByTopic(topic: string): Promise<Array<Question>>;
    getReviews(): Promise<Array<Review>>;
    http_request(req: HttpRequest): Promise<HttpResponse>;
    incrementArticleView(id: string): Promise<boolean>;
    isFollowingUser(targetId: string): Promise<boolean>;
    likeArticle(id: string): Promise<boolean>;
    proxyAIChat(messages: Array<AIChatMessage>, systemPrompt: string): Promise<string>;
    saveCibilCheck(check: CibilCheckInput): Promise<string>;
    saveMockTestResult(testId: string, score: bigint, totalQuestions: bigint, timeTaken: bigint, answers: Array<string>): Promise<MockTestResult>;
    saveNote(title: string, content: string, topicId: string): Promise<Note>;
    sendVerificationEmail(email: string): Promise<void>;
    submitArticle(title: string, content: string, tags: Array<string>, authorName: string): Promise<Article>;
    submitExperience(authorName: string, company: string, role: string, difficulty: string, experienceText: string): Promise<Experience>;
    submitLoanApplication(app: LoanApplicationInput): Promise<string>;
    submitMeetingRequest(req: MeetingRequestInput): Promise<string>;
    submitReview(name: string, rating: bigint, comment: string): Promise<{
        __kind__: "ok";
        ok: Review;
    } | {
        __kind__: "err";
        err: string;
    }>;
    unenrollCourse(courseId: string): Promise<EnrollResult>;
    unfollowUser(targetId: string): Promise<boolean>;
    updateCompanion(name: string, personality: Personality): Promise<void>;
    updateNote(noteId: string, title: string, content: string): Promise<Note | null>;
    verifyEmail(email: string, code: string): Promise<VerifyResult>;
}

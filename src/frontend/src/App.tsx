import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import { AnanyaProvider, useAnanya } from "./context/AnanyaContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoansPage = lazy(() => import("./pages/LoansPage"));
const LoanDetailPage = lazy(() => import("./pages/LoanDetailPage"));
const ApplyPage = lazy(() => import("./pages/ApplyPage"));
const MeetingPage = lazy(() => import("./pages/MeetingPage"));
const CibilScorePage = lazy(() => import("./pages/CibilScorePage"));
const EmiCalculatorPage = lazy(() => import("./pages/EmiCalculatorPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 30_000 },
  },
});

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <LoadingSpinner size="lg" text="Loading..." />
    </div>
  );
}

function AnanyaRouter() {
  const { page } = useAnanya();
  return (
    <Suspense fallback={<PageLoader />}>
      {page === "home" && <HomePage />}
      {page === "loans" && <LoansPage />}
      {page === "loan-detail" && <LoanDetailPage />}
      {page === "apply" && <ApplyPage />}
      {page === "meeting" && <MeetingPage />}
      {page === "cibil-score" && <CibilScorePage />}
      {page === "emi-calculator" && <EmiCalculatorPage />}
      {page === "about" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      {page === "terms" && <TermsPage />}
      {page === "privacy" && <PrivacyPage />}
      <Toaster />
    </Suspense>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnanyaProvider>
        <AnanyaRouter />
      </AnanyaProvider>
    </QueryClientProvider>
  );
}

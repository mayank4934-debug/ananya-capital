import { type ReactNode, createContext, useContext, useState } from "react";

export type AnanyaPage =
  | "home"
  | "loans"
  | "loan-detail"
  | "apply"
  | "meeting"
  | "cibil-score"
  | "emi-calculator"
  | "about"
  | "contact"
  | "terms"
  | "privacy";

interface AnanyaContextValue {
  page: AnanyaPage;
  setPage: (p: AnanyaPage) => void;
  loanSlug: string | null;
  setLoanSlug: (s: string | null) => void;
  navigate: (p: AnanyaPage, slug?: string) => void;
}

const AnanyaContext = createContext<AnanyaContextValue | null>(null);

export function AnanyaProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<AnanyaPage>("home");
  const [loanSlug, setLoanSlug] = useState<string | null>(null);

  const navigate = (p: AnanyaPage, slug?: string) => {
    setPage(p);
    if (slug !== undefined) setLoanSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnanyaContext.Provider
      value={{ page, setPage, loanSlug, setLoanSlug, navigate }}
    >
      {children}
    </AnanyaContext.Provider>
  );
}

export function useAnanya() {
  const ctx = useContext(AnanyaContext);
  if (!ctx) throw new Error("useAnanya must be used within AnanyaProvider");
  return ctx;
}

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { type AnanyaPage, useAnanya } from "../context/AnanyaContext";

const NAV_LINKS: { label: string; page: AnanyaPage }[] = [
  { label: "Home", page: "home" },
  { label: "Our Offerings", page: "loans" },
  { label: "CIBIL Score", page: "cibil-score" },
  { label: "EMI Calculator", page: "emi-calculator" },
  { label: "About Us", page: "about" },
  { label: "Contact", page: "contact" },
];

export default function Header() {
  const { page, navigate } = useAnanya();
  const [open, setOpen] = useState(false);

  const handleNav = (p: AnanyaPage) => {
    navigate(p);
    setOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle"
      data-ocid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("home")}
            className="flex items-center gap-2 group"
            data-ocid="header.logo_button"
          >
            <img
              src="/assets/images/logo.png"
              alt="Ananya Capitals"
              className="w-9 h-9 object-contain rounded-xl shadow-sm group-hover:shadow-md transition-shadow"
            />
            <div className="leading-tight">
              <span className="block text-base font-bold text-foreground font-display">
                Ananya
              </span>
              <span className="block text-[10px] font-semibold text-primary tracking-widest uppercase">
                Capitals
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => navigate(link.page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  page === link.page
                    ? "text-primary bg-primary/8 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-ocid={`header.nav_${link.page}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("meeting")}
              className="border-primary/40 text-primary hover:bg-primary/5"
              data-ocid="header.meeting_button"
            >
              Schedule Meeting
            </Button>
            <Button
              size="sm"
              onClick={() => navigate("apply")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm"
              data-ocid="header.apply_button"
            >
              Apply for Loan
            </Button>
          </div>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
                data-ocid="header.menu_button"
              >
                {open ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card">
              <div className="flex flex-col gap-1 mt-8">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.page}
                    type="button"
                    onClick={() => handleNav(link.page)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      page === link.page
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                    data-ocid={`header.mobile_nav_${link.page}`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="border-primary/40 text-primary"
                    onClick={() => handleNav("meeting")}
                    data-ocid="header.mobile_meeting_button"
                  >
                    Schedule Meeting
                  </Button>
                  <Button
                    className="bg-primary text-primary-foreground font-semibold"
                    onClick={() => handleNav("apply")}
                    data-ocid="header.mobile_apply_button"
                  >
                    Apply for Loan
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

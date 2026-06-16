import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import CTABanner from "../components/CTABanner";
import Layout from "../components/Layout";
import LoanCard from "../components/LoanCard";
import ReviewSection from "../components/ReviewSection";
import SectionHeader from "../components/SectionHeader";
import { useAnanya } from "../context/AnanyaContext";
import { LOAN_PRODUCTS } from "../data/loanProducts";

const STATS = [
  {
    icon: Building2,
    label: "Years of Experience",
    value: "12+",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    label: "Loans Disbursed",
    value: "₹500 Cr+",
    color: "text-primary",
  },
  {
    icon: Users,
    label: "Happy Customers",
    value: "25,000+",
    color: "text-primary",
  },
];

const WHY_US = [
  {
    icon: Clock,
    title: "Fast Approval",
    desc: "Get loan approval in as little as 24 hours with minimal documentation.",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    desc: "RBI-approved NBFC with robust security. Your data is always protected.",
  },
  {
    icon: Award,
    title: "Competitive Rates",
    desc: "Best-in-class interest rates tailored to your financial profile.",
  },
  {
    icon: CheckCircle2,
    title: "Doorstep Service",
    desc: "Our team comes to you — from application to disbursal.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ramesh Sharma",
    role: "Small Business Owner",
    text: "Ananya Capitals helped me expand my shop with a quick business loan. The process was smooth and the team was very supportive!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Software Engineer",
    text: "I got my home loan approved within 3 days. Amazing experience! The interest rates were the best I found in the market.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Transport Operator",
    text: "Commercial vehicle loan for my new truck was processed hassle-free. Highly recommend Ananya Capitals to all business owners.",
    rating: 5,
  },
];

export default function HomePage() {
  const { navigate } = useAnanya();
  const featuredLoans = LOAN_PRODUCTS.slice(0, 6);

  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative min-h-[90vh] flex items-center bg-background overflow-hidden"
        data-ocid="hero.section"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-ananya-capitals.dim_1200x600.jpg"
            alt="Ananya Capitals hero"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge
              className="mb-5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15"
              data-ocid="hero.badge"
            >
              🏆 India's Trusted Loan Partner
            </Badge>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display leading-tight mb-5"
              data-ocid="hero.heading"
            >
              Empower Your Dreams with{" "}
              <span className="text-primary">Smart Finance</span>
            </h1>
            <p
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
              data-ocid="hero.subtext"
            >
              Ananya Capitals offers tailored loan solutions — from home loans
              to business finance. Transparent rates, fast disbursal, and expert
              guidance every step of the way.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              data-ocid="hero.cta_group"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-md text-base"
                onClick={() => navigate("apply")}
                data-ocid="hero.apply_button"
              >
                Apply for Loan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/5 font-semibold px-8 text-base"
                onClick={() => navigate("cibil-score")}
                data-ocid="hero.cibil_button"
              >
                Check CIBIL Score
              </Button>
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              {["RBI Registered NBFC", "ISO 9001:2015", "Zero Foreclosure"].map(
                (t) => (
                  <div
                    key={t}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-primary" data-ocid="stats.section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
                data-ocid={`stats.item.${i + 1}`}
              >
                <s.icon className="w-8 h-8 text-primary-foreground/70 mb-2" />
                <p className="text-4xl font-bold text-primary-foreground font-display">
                  {s.value}
                </p>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LOANS */}
      <section
        className="py-16 bg-background"
        data-ocid="featured_loans.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Offerings"
            title="Loan Solutions for Every Need"
            subtitle="From home ownership to business expansion — we have the right financial product for you."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLoans.map((loan, i) => (
              <LoanCard key={loan.slug} loan={loan} index={i + 1} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
              onClick={() => navigate("loans")}
              data-ocid="featured_loans.view_all_button"
            >
              View All Loan Products
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-muted/40" data-ocid="why_us.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Ananya Capitals"
            title="The Smart Way to Borrow"
            subtitle="We combine technology with human expertise to make lending simple, transparent, and fair."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <Card
                key={i}
                className="p-6 border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-200"
                data-ocid={`why_us.item.${i + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-background" data-ocid="testimonials.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Customer Stories"
            title="Trusted by Thousands"
            subtitle="Real customers share how Ananya Capitals helped them achieve their financial goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Card
                key={i}
                className="p-6 border border-border bg-card hover:shadow-md transition-shadow"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ReviewSection />
      <CTABanner />
    </Layout>
  );
}

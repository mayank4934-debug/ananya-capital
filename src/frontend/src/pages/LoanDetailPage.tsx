import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
} from "lucide-react";
import CTABanner from "../components/CTABanner";
import Layout from "../components/Layout";
import { useAnanya } from "../context/AnanyaContext";
import { LOAN_PRODUCTS, LOAN_PRODUCTS_BY_LEGACY } from "../data/loanProducts";

export default function LoanDetailPage() {
  const { loanSlug, navigate } = useAnanya();
  const loan =
    LOAN_PRODUCTS.find((l) => l.slug === loanSlug) ??
    LOAN_PRODUCTS.find(
      (l) => l.slug === LOAN_PRODUCTS_BY_LEGACY[loanSlug ?? ""],
    ) ??
    LOAN_PRODUCTS[0];

  return (
    <Layout>
      <section className="py-8 bg-muted/40 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("loans")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            data-ocid="loan_detail.back_button"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Loans
          </button>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              {loan.icon}
            </div>
            <div>
              <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                Loan Product
              </Badge>
              <h1 className="text-3xl font-bold text-foreground font-display">
                {loan.name}
              </h1>
              <p className="text-muted-foreground mt-1">{loan.shortDesc}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">
                Maximum Amount
              </p>
              <p className="text-xl font-bold text-foreground font-display">
                {loan.maxAmount}
              </p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">
                Interest Rate (from)
              </p>
              <p className="text-xl font-bold text-primary font-display">
                {loan.interestRate}
              </p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Loan Tenure</p>
              <p className="text-xl font-bold text-foreground font-display">
                {loan.tenure}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card
                className="p-6 border border-border"
                data-ocid="loan_detail.highlights_card"
              >
                <h2 className="text-xl font-bold text-foreground font-display mb-4">
                  Key Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {loan.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card
                className="p-6 border border-border"
                data-ocid="loan_detail.eligibility_card"
              >
                <h2 className="text-xl font-bold text-foreground font-display mb-4">
                  Eligibility Criteria
                </h2>
                <ul className="space-y-2">
                  {loan.eligibility.map((e) => (
                    <li
                      key={e}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card
                className="p-6 border border-border"
                data-ocid="loan_detail.docs_card"
              >
                <h2 className="text-xl font-bold text-foreground font-display mb-4">
                  Documents Required
                </h2>
                <ul className="space-y-2">
                  {loan.documents.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card
                className="p-6 border border-border"
                data-ocid="loan_detail.faqs_card"
              >
                <h2 className="text-xl font-bold text-foreground font-display mb-4">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {loan.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`faq-${idx}`}
                      className="accordion-panel"
                      data-ocid={`loan_detail.faq.item.${idx + 1}`}
                    >
                      <AccordionTrigger className="px-4 py-3 text-sm font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                        <span className="flex items-center gap-2 text-left">
                          <ChevronDown className="w-4 h-4 text-primary flex-shrink-0" />
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
            <div className="space-y-4">
              <Card className="p-6 border-2 border-primary bg-primary/5">
                <h3 className="text-lg font-bold text-foreground font-display mb-3">
                  Ready to Apply?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get quick approval and competitive rates. Apply online in
                  minutes.
                </p>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mb-3"
                  onClick={() => navigate("apply")}
                  data-ocid="loan_detail.apply_button"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary/40 text-primary hover:bg-primary/5"
                  onClick={() => navigate("emi-calculator")}
                  data-ocid="loan_detail.emi_button"
                >
                  Calculate EMI
                </Button>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="text-base font-semibold text-foreground font-display mb-3">
                  Need Help?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Talk to our loan expert for personalized guidance.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-border"
                  onClick={() => navigate("meeting")}
                  data-ocid="loan_detail.meeting_button"
                >
                  Schedule a Meeting
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAnanya } from "../context/AnanyaContext";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to Apply for Your Loan?",
  subtitle = "Take the next step towards your financial goals. Our experts are ready to guide you.",
}: CTABannerProps) {
  const { navigate } = useAnanya();
  return (
    <section className="py-16 bg-primary" data-ocid="cta_banner.section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground font-display mb-3">
              {title}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 shadow-lg"
              onClick={() => navigate("apply")}
              data-ocid="cta_banner.apply_button"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

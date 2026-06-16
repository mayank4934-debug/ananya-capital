import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useAnanya } from "../context/AnanyaContext";
import type { LoanProduct } from "../data/loanProducts";

interface LoanCardProps {
  loan: LoanProduct;
  index?: number;
}

export default function LoanCard({ loan, index = 1 }: LoanCardProps) {
  const { navigate } = useAnanya();

  return (
    <Card
      className="group relative flex flex-col p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer bg-card overflow-hidden"
      onClick={() => navigate("loan-detail", loan.slug)}
      data-ocid={`loan_card.item.${index}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/15 transition-colors duration-200">
          {loan.icon}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-1 font-display">
          {loan.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {loan.shortDesc}
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-muted/60 rounded-lg p-2">
            <p className="text-xs text-muted-foreground">Max Amount</p>
            <p className="text-sm font-semibold text-foreground">
              {loan.maxAmount}
            </p>
          </div>
          <div className="bg-muted/60 rounded-lg p-2">
            <p className="text-xs text-muted-foreground">Interest Rate</p>
            <p className="text-sm font-semibold text-primary">
              {loan.interestRate}
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 group/btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate("loan-detail", loan.slug);
          }}
          data-ocid={`loan_card.view_button.${index}`}
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}

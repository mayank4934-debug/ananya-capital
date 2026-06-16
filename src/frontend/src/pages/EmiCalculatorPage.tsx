import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator } from "lucide-react";
import { useState } from "react";
import CTABanner from "../components/CTABanner";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { useAnanya } from "../context/AnanyaContext";

const LOAN_TYPES = [
  "Home Loan",
  "Business Loan",
  "Personal Loan",
  "Loan Against Property",
  "Two Wheeler Loan",
  "Used Car Loan",
];

function calcEmi(principal: number, rate: number, months: number): number {
  if (!principal || !rate || !months) return 0;
  const r = rate / 12 / 100;
  return (principal * r * (1 + r) ** months) / ((1 + r) ** months - 1);
}

export default function EmiCalculatorPage() {
  const { navigate } = useAnanya();
  const [loanType, setLoanType] = useState("Home Loan");
  const [principal, setPrincipal] = useState("500000");
  const [rate, setRate] = useState("8.5");
  const [tenure, setTenure] = useState("12");

  const emi = calcEmi(Number(principal), Number(rate), Number(tenure));
  const totalAmount = emi * Number(tenure);
  const totalInterest = totalAmount - Number(principal);
  const fmt = (n: number) =>
    n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const pctPrincipal =
    totalAmount > 0 ? (Number(principal) / totalAmount) * 100 : 50;
  const pctInterest = 100 - pctPrincipal;

  return (
    <Layout>
      <div className="py-12 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="EMI Calculator"
            title="Calculate Your EMI"
            subtitle="Know your monthly instalments before you apply. Transparent and instant."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input */}
            <Card
              className="p-8 border border-border bg-card"
              data-ocid="emi.calculator_card"
            >
              <h3 className="text-lg font-semibold text-foreground font-display mb-6">
                Loan Details
              </h3>
              <div className="space-y-5">
                <div>
                  <Label>Loan Type</Label>
                  <Select value={loanType} onValueChange={setLoanType}>
                    <SelectTrigger
                      className="mt-1"
                      data-ocid="emi.loan_type_select"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {LOAN_TYPES.map((l) => (
                        <SelectItem key={l} value={l}>
                          {l}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="principal">Loan Amount (₹)</Label>
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="mt-1"
                    data-ocid="emi.principal_input"
                  />
                  <input
                    type="range"
                    min={10000}
                    max={10000000}
                    step={10000}
                    value={Number(principal)}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full mt-2 accent-primary"
                    data-ocid="emi.principal_range"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>₹10K</span>
                    <span>₹1 Cr</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="rate">Interest Rate (% p.a.)</Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="mt-1"
                    data-ocid="emi.rate_input"
                  />
                  <input
                    type="range"
                    min={5}
                    max={24}
                    step={0.5}
                    value={Number(rate)}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full mt-2 accent-primary"
                    data-ocid="emi.rate_range"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5%</span>
                    <span>24%</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="tenure">Loan Tenure (Months)</Label>
                  <Input
                    id="tenure"
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="mt-1"
                    data-ocid="emi.tenure_input"
                  />
                  <input
                    type="range"
                    min={6}
                    max={240}
                    step={6}
                    value={Number(tenure)}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full mt-2 accent-primary"
                    data-ocid="emi.tenure_range"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>6 months</span>
                    <span>20 years</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Result */}
            <div className="space-y-4">
              <Card
                className="p-8 border-2 border-primary bg-primary/5"
                data-ocid="emi.result_card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground font-display">
                    EMI Breakdown
                  </h3>
                </div>
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    Monthly EMI
                  </p>
                  <p className="text-5xl font-bold text-primary font-display">
                    ₹{fmt(emi)}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                      Principal Amount
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      ₹{fmt(Number(principal))}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                      Total Interest
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      ₹{fmt(totalInterest)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-semibold text-foreground">
                      Total Amount Payable
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      ₹{fmt(totalAmount)}
                    </span>
                  </div>
                </div>
                {/* Visual bar */}
                <div className="mt-4">
                  <div className="flex rounded-full overflow-hidden h-3">
                    <div
                      className="bg-primary transition-all duration-500"
                      style={{ width: `${pctPrincipal}%` }}
                      title="Principal"
                    />
                    <div
                      className="bg-primary/30 transition-all duration-500"
                      style={{ width: `${pctInterest}%` }}
                      title="Interest"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                      Principal {pctPrincipal.toFixed(0)}%
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/30 inline-block" />
                      Interest {pctInterest.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </Card>
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground font-semibold"
                onClick={() => navigate("apply")}
                data-ocid="emi.apply_button"
              >
                Apply for This Loan
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
    </Layout>
  );
}

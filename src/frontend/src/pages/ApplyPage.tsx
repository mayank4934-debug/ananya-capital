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
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Download,
  FileText,
  PartyPopper,
  Upload,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { LOAN_PRODUCTS } from "../data/loanProducts";
import { useSubmitLoanApplication } from "../hooks/useQueries";

const CONFETTI_COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#f97316",
  "#ec4899",
  "#06b6d4",
];
const CONFETTI_POSITIONS = [
  { top: "8%", left: "12%" },
  { top: "18%", left: "75%" },
  { top: "4%", left: "48%" },
  { top: "28%", left: "22%" },
  { top: "12%", left: "62%" },
  { top: "6%", left: "88%" },
  { top: "22%", left: "5%" },
  { top: "32%", left: "92%" },
];

function ConfettiBurst() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {CONFETTI_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-3 rounded-sm animate-bounce"
          style={{
            ...pos,
            background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            transform: `rotate(${i * 22}deg)`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
}

const EMPLOYMENT_TYPES = [
  "Salaried",
  "Self-Employed",
  "Business Owner",
  "Farmer",
  "Other",
];

export default function ApplyPage() {
  const { mutate: submitApplication, isPending } = useSubmitLoanApplication();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    loanType: "",
    loanAmount: "",
    employment: "",
    monthlyIncome: "",
    address: "",
    notes: "",
  });

  const set = (k: string, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  useEffect(() => {
    if (showConfetti) {
      const t = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(t);
    }
  }, [showConfetti]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitApplication(
      {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        loanType: form.loanType,
        loanAmount: Number(form.loanAmount),
        employmentType: form.employment,
        monthlyIncome: Number(form.monthlyIncome),
        address: form.address,
        additionalNotes: form.notes,
      },
      {
        onSuccess: () => {
          setSubmittedName(form.fullName);
          setSubmitted(true);
          setShowConfetti(true);
          toast.success("Application submitted! Excel file downloaded.", {
            duration: 5000,
          });
        },
        onError: () => toast.error("Failed to submit. Please try again."),
      },
    );
  };

  if (submitted) {
    return (
      <Layout>
        <div
          className="relative min-h-[70vh] flex items-center justify-center bg-background px-4 overflow-hidden"
          data-ocid="apply.success_state"
        >
          {showConfetti && <ConfettiBurst />}
          <div className="text-center max-w-md relative z-10">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
              <PartyPopper className="absolute -top-2 -right-2 w-8 h-8 text-amber-500 rotate-12" />
            </div>
            <h2 className="text-3xl font-bold text-foreground font-display mb-3">
              Application Submitted!
            </h2>
            <p className="text-muted-foreground mb-4">
              Thank you
              {submittedName ? (
                <>
                  , <strong>{submittedName}</strong>
                </>
              ) : null}
              ! Our team will review your application and contact you within 24
              hours.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 text-left space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Download className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">
                  Excel sheet downloaded to your device
                </span>
              </div>
              <p className="text-xs text-muted-foreground pl-6">
                Your application details have been saved as an Excel file for
                your records.
              </p>
              <div className="flex items-center gap-2 text-sm pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-foreground font-medium">
                  Application reference saved
                </span>
              </div>
            </div>
            <Button
              type="button"
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-primary/40 text-primary"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Loan Application"
            title="Apply for a Loan"
            subtitle="Fill in your details below. Our team will get back to you within 24 hours."
          />
          <Card
            className="p-8 border border-border bg-card shadow-sm"
            data-ocid="apply.form_card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={form.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                      placeholder="Ramesh Sharma"
                      required
                      className="mt-1"
                      data-ocid="apply.fullname_input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Mobile Number *</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      className="mt-1"
                      data-ocid="apply.phone_input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="ramesh@example.com"
                      required
                      className="mt-1"
                      data-ocid="apply.email_input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="address">Current Address</Label>
                    <Textarea
                      id="address"
                      value={form.address}
                      onChange={(e) => set("address", e.target.value)}
                      placeholder="123 Main Street, City, State, PIN"
                      rows={2}
                      className="mt-1"
                      data-ocid="apply.address_input"
                    />
                  </div>
                </div>
              </div>

              {/* Loan Details */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Loan Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Loan Type *</Label>
                    <Select onValueChange={(v) => set("loanType", v)} required>
                      <SelectTrigger
                        className="mt-1"
                        data-ocid="apply.loan_type_select"
                      >
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        {LOAN_PRODUCTS.map((l) => (
                          <SelectItem key={l.slug} value={l.slug}>
                            {l.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="loanAmount">
                      Loan Amount Required (₹) *
                    </Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      value={form.loanAmount}
                      onChange={(e) => set("loanAmount", e.target.value)}
                      placeholder="500000"
                      required
                      className="mt-1"
                      data-ocid="apply.loan_amount_input"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Info */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Financial Profile
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Employment Type *</Label>
                    <Select
                      onValueChange={(v) => set("employment", v)}
                      required
                    >
                      <SelectTrigger
                        className="mt-1"
                        data-ocid="apply.employment_select"
                      >
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {EMPLOYMENT_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="monthlyIncome">Monthly Income (₹) *</Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={form.monthlyIncome}
                      onChange={(e) => set("monthlyIncome", e.target.value)}
                      placeholder="50000"
                      required
                      className="mt-1"
                      data-ocid="apply.income_input"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Supporting Documents
                </h3>
                <button
                  type="button"
                  className="w-full border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => fileRef.current?.click()}
                  data-ocid="apply.document_dropzone"
                >
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {fileName ? (
                      <span className="text-primary font-medium flex items-center justify-center gap-1">
                        <FileText className="w-4 h-4" /> {fileName}
                      </span>
                    ) : (
                      <>
                        Click to upload documents{" "}
                        <span className="text-xs">
                          (PDF, JPG, PNG – max 10MB)
                        </span>
                      </>
                    )}
                  </p>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.xlsx,.xls"
                    className="hidden"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name ?? "")
                    }
                    data-ocid="apply.upload_button"
                  />
                </button>
                <p className="text-xs text-muted-foreground mt-2">
                  Accepted: Aadhaar, PAN, salary slips, bank statements,
                  property documents, Excel sheets
                </p>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Any additional information you'd like to share..."
                  rows={3}
                  className="mt-1"
                  data-ocid="apply.notes_textarea"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground font-semibold text-base"
                disabled={isPending}
                data-ocid="apply.submit_button"
              >
                {isPending ? "Submitting..." : "Submit Application"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our terms. Your data is secure and
                will not be shared without consent.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

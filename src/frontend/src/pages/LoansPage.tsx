import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import CTABanner from "../components/CTABanner";
import Layout from "../components/Layout";
import LoanCard from "../components/LoanCard";
import SectionHeader from "../components/SectionHeader";
import { LOAN_PRODUCTS } from "../data/loanProducts";

const CATEGORIES = [
  "All",
  "Home",
  "Business",
  "Personal",
  "Vehicle",
  "Property",
  "Micro",
];

const CATEGORY_MAP: Record<string, string[]> = {
  All: [],
  Home: ["home-loan", "industrial-shed-loan"],
  Business: ["business-loan", "micro-enterprise-loan", "machinery-loan"],
  Personal: ["personal-loan"],
  Vehicle: ["two-wheeler-loan", "used-car-loan", "commercial-vehicle-loan"],
  Property: ["loan-against-property"],
  Micro: ["micro-enterprise-loan"],
};

export default function LoansPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = LOAN_PRODUCTS.filter((loan) => {
    const matchSearch =
      loan.name.toLowerCase().includes(search.toLowerCase()) ||
      loan.shortDesc.toLowerCase().includes(search.toLowerCase());
    const matchCat =
      category === "All" || CATEGORY_MAP[category]?.includes(loan.slug);
    return matchSearch && matchCat;
  });

  return (
    <Layout>
      <section className="py-12 bg-muted/40" data-ocid="loans.header_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="All Products"
            title="Explore Our Loan Products"
            subtitle="10 tailored loan categories designed to fuel every financial goal."
          />
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search loans..."
                className="pl-9"
                data-ocid="loans.search_input"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                type="button"
                variant={category === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(cat)}
                className={
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-primary"
                }
                data-ocid={`loans.filter_${cat.toLowerCase()}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background" data-ocid="loans.grid_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20" data-ocid="loans.empty_state">
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-muted-foreground">
                No loan products match your search.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filtered.length} product{filtered.length !== 1 ? "s" : ""}{" "}
                  found
                </p>
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary"
                >
                  {category}
                </Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((loan, i) => (
                  <LoanCard key={loan.slug} loan={loan} index={i + 1} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
}

export interface LoanProduct {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  maxAmount: string;
  interestRate: string;
  tenure: string;
  processingFee: string;
  minIncome: string;
  highlights: string[];
  eligibility: string[];
  documents: string[];
  features: string[];
  color: string;
  faqs: { question: string; answer: string }[];
}

export const LOAN_PRODUCTS: LoanProduct[] = [
  {
    slug: "personal",
    name: "Personal Loan",
    shortDesc:
      "Meet your personal financial needs quickly and conveniently with minimal documentation",
    icon: "\ud83d\udc64",
    maxAmount: "\u20b910 Crore",
    interestRate: "8.5% - 13% p.a.",
    processingFee: "Up to 2% of loan amount",
    tenure: "Up to 7 years",
    minIncome: "\u20b925,000/month",
    highlights: [
      "No collateral required",
      "Instant approval in 2 hours",
      "Flexible end-use",
      "Minimal paperwork",
    ],
    eligibility: [
      "Age: 21\u201360 years",
      "Salaried or self-employed",
      "Minimum income: \u20b925,000/month",
      "CIBIL score 650+",
      "Stable employment history",
    ],
    documents: [
      "Identity proof (Aadhaar/PAN)",
      "Address proof",
      "Income proof (salary slips / ITR)",
      "Bank statements (6 months)",
      "Form 16 or ITR",
    ],
    features: [
      "No end-use restriction",
      "Part prepayment allowed",
      "Online loan management",
      "Balance transfer facility",
    ],
    color: "sky",
    faqs: [
      {
        question: "What is the maximum loan amount I can get?",
        answer:
          "You can avail a personal loan of up to \u20b910 Crore depending on your income and credit profile.",
      },
      {
        question: "How long does approval take?",
        answer:
          "We offer instant in-principle approval within 2 hours, subject to document verification.",
      },
      {
        question: "Is collateral required?",
        answer:
          "No, personal loans are unsecured and do not require any collateral or guarantor.",
      },
      {
        question: "Can I prepay my loan?",
        answer:
          "Yes, part prepayment and full foreclosure are allowed after 6 months with nominal charges.",
      },
      {
        question: "What is the interest rate range?",
        answer:
          "Interest rates range from 8.5% to 13% per annum based on your credit score and profile.",
      },
    ],
  },
  {
    slug: "business",
    name: "Business Loan",
    shortDesc:
      "Empower your business growth with tailored financial solutions and fast disbursal",
    icon: "\ud83d\udcbc",
    maxAmount: "\u20b910 Crore",
    interestRate: "8.5% - 13% p.a.",
    processingFee: "Up to 2% of loan amount",
    tenure: "Up to 10 years",
    minIncome: "\u20b930,000/month",
    highlights: [
      "Collateral-free options available",
      "Fast processing in 72 hours",
      "Flexible EMI schedules",
      "Doorstep service",
    ],
    eligibility: [
      "Business vintage: 2+ years",
      "Annual turnover \u20b910 Lakhs+",
      "Age: 25\u201365 years",
      "CIBIL score 650+",
      "Valid GST registration preferred",
    ],
    documents: [
      "Business registration proof",
      "GST returns (2 years)",
      "Bank statements (12 months)",
      "ITR (2 years)",
      "Aadhaar & PAN card",
    ],
    features: [
      "No end-use restriction",
      "Top-up facility available",
      "Online account management",
      "Seasonal repayment options",
    ],
    color: "indigo",
    faqs: [
      {
        question: "What is the maximum business loan amount?",
        answer:
          "Business loans up to \u20b910 Crore are available based on turnover and creditworthiness.",
      },
      {
        question: "Do I need collateral?",
        answer:
          "Collateral-free options are available for eligible businesses with strong financials.",
      },
      {
        question: "How is the interest rate determined?",
        answer:
          "Rates range from 8.5% to 13% based on business vintage, turnover, and CIBIL score.",
      },
      {
        question: "Can I get a top-up on my existing loan?",
        answer:
          "Yes, top-up facility is available after 12 months of regular EMI payments.",
      },
      {
        question: "What is the processing time?",
        answer:
          "We process and disburse business loans within 72 hours of complete documentation.",
      },
    ],
  },
  {
    slug: "od-facility",
    name: "OD Facility",
    shortDesc:
      "Overdraft facility for working capital needs with flexible withdrawal and repayment",
    icon: "\ud83d\udd04",
    maxAmount: "\u20b910 Crore",
    interestRate: "8.5% - 13% p.a.",
    processingFee: "Up to 1.5% of limit",
    tenure: "Renewable annually",
    minIncome: "\u20b950,000/month",
    highlights: [
      "Pay interest only on amount used",
      "Flexible withdrawal & repayment",
      "No prepayment charges",
      "Ideal for working capital",
    ],
    eligibility: [
      "Business vintage: 3+ years",
      "Annual turnover \u20b925 Lakhs+",
      "Age: 25\u201365 years",
      "CIBIL score 680+",
      "Existing banking relationship preferred",
    ],
    documents: [
      "Business registration proof",
      "GST returns (2 years)",
      "Bank statements (12 months)",
      "ITR (2 years)",
      "Aadhaar & PAN card",
    ],
    features: [
      "Interest charged only on utilized amount",
      "Unlimited withdrawals within limit",
      "Auto-renewal option",
      "No hidden charges",
    ],
    color: "emerald",
    faqs: [
      {
        question: "How does OD facility work?",
        answer:
          "You get a pre-approved credit limit. Interest is charged only on the amount you withdraw, not the full limit.",
      },
      {
        question: "What is the maximum OD limit?",
        answer:
          "Overdraft facilities up to \u20b910 Crore are available for eligible businesses.",
      },
      {
        question: "Is there a fixed EMI?",
        answer:
          "No fixed EMI. You can repay and redraw as needed within the sanctioned limit.",
      },
      {
        question: "How is interest calculated?",
        answer:
          "Interest is calculated daily on the outstanding balance and debited monthly.",
      },
      {
        question: "Can the limit be enhanced?",
        answer:
          "Yes, the limit can be enhanced annually based on your business growth and repayment track record.",
      },
    ],
  },
  {
    slug: "home",
    name: "Home Loan",
    shortDesc:
      "Fulfill your dream of owning a home with affordable financing and long tenure",
    icon: "\ud83c\udfe0",
    maxAmount: "\u20b910 Crore",
    interestRate: "8.5% - 13% p.a.",
    processingFee: "Up to 1% of loan amount",
    tenure: "Up to 30 years",
    minIncome: "\u20b920,000/month",
    highlights: [
      "Minimal documentation",
      "Quick disbursal in 7 days",
      "Flexible repayment",
      "No hidden charges",
    ],
    eligibility: [
      "Age: 21\u201365 years",
      "Salaried or self-employed",
      "Minimum income: \u20b920,000/month",
      "CIBIL score 650+",
      "Clear property title",
    ],
    documents: [
      "Aadhaar & PAN card",
      "Income proof (salary slips / ITR)",
      "Bank statement (6 months)",
      "Property documents (title, plan approval)",
      "Builder agreement / sale deed",
    ],
    features: [
      "Tax benefits under Sec 80C & 24(b)",
      "Balance transfer at lower rates",
      "Top-up loan facility",
      "Free legal & technical support",
    ],
    color: "blue",
    faqs: [
      {
        question: "What is the maximum home loan amount?",
        answer:
          "Home loans up to \u20b910 Crore are available depending on property value and income.",
      },
      {
        question: "What is the maximum tenure?",
        answer:
          "You can opt for a tenure of up to 30 years, subject to your retirement age.",
      },
      {
        question: "Can I transfer my existing home loan?",
        answer:
          "Yes, we offer balance transfer at competitive rates with minimal documentation.",
      },
      {
        question: "Are there tax benefits?",
        answer:
          "Yes, you can claim tax deductions under Section 80C (principal) and Section 24(b) (interest).",
      },
      {
        question: "What is the LTV ratio?",
        answer:
          "We finance up to 90% of the property value for loans up to \u20b930 Lakhs, and 80% for higher amounts.",
      },
    ],
  },
  {
    slug: "lap",
    name: "Loan Against Property",
    shortDesc:
      "Unlock the value of your residential or commercial property for large financial needs",
    icon: "\ud83c\udfe2",
    maxAmount: "\u20b910 Crore",
    interestRate: "8.5% - 13% p.a.",
    processingFee: "Up to 1% of loan amount",
    tenure: "Up to 20 years",
    minIncome: "\u20b930,000/month",
    highlights: [
      "High loan amount",
      "Lower interest rates",
      "Long repayment tenure",
      "Retain property ownership",
    ],
    eligibility: [
      "Age: 25\u201370 years",
      "Property ownership required",
      "Minimum income: \u20b930,000/month",
      "CIBIL score 650+",
      "Clear property title",
    ],
    documents: [
      "Property documents (title deed, chain)",
      "Income proof / ITR (2 years)",
      "Bank statements (12 months)",
      "Property valuation report",
      "Aadhaar & PAN card",
    ],
    features: [
      "Overdraft facility available",
      "Balance transfer option",
      "Tax benefits on interest paid",
      "Flexible usage of funds",
    ],
    color: "teal",
    faqs: [
      {
        question: "What types of property are accepted?",
        answer:
          "Residential, commercial, and industrial properties with clear titles are accepted.",
      },
      {
        question: "What is the maximum loan amount?",
        answer:
          "Loan Against Property up to \u20b910 Crore is available based on property valuation.",
      },
      {
        question: "Can I use the loan for any purpose?",
        answer:
          "Yes, funds can be used for business expansion, education, medical expenses, or any legal purpose.",
      },
      {
        question: "Do I lose ownership of my property?",
        answer:
          "No, you retain full ownership. The property is only mortgaged as security.",
      },
      {
        question: "What is the typical LTV ratio?",
        answer:
          "We offer up to 70% of the property's market value as loan amount.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education Loan",
    shortDesc:
      "Finance your higher education dreams in India or abroad with flexible repayment",
    icon: "\ud83c\udf93",
    maxAmount: "\u20b910 Crore",
    interestRate: "8.5% - 13% p.a.",
    processingFee: "Up to 1% of loan amount",
    tenure: "Up to 15 years",
    minIncome: "\u20b915,000/month (co-applicant)",
    highlights: [
      "Coverage for tuition & living expenses",
      "Moratorium period available",
      "Tax benefits under Section 80E",
      "No collateral for loans up to \u20b97.5 Lakhs",
    ],
    eligibility: [
      "Age: 18\u201335 years",
      "Admission to recognized institution",
      "Co-applicant (parent/guardian) required",
      "CIBIL score 600+",
      "Academic record considered",
    ],
    documents: [
      "Admission letter from institution",
      "Academic records (10th, 12th, graduation)",
      "Co-applicant income proof",
      "Aadhaar & PAN of applicant & co-applicant",
      "Course fee structure",
    ],
    features: [
      "100% finance for tuition & living",
      "Moratorium during course + 6 months",
      "Flexible repayment after course completion",
      "Tax deduction on interest paid",
    ],
    color: "violet",
    faqs: [
      {
        question: "What expenses are covered?",
        answer:
          "Tuition fees, examination fees, library/lab charges, travel, and living expenses are covered.",
      },
      {
        question: "Is a co-applicant mandatory?",
        answer:
          "Yes, a parent or guardian must be a co-applicant for all education loans.",
      },
      {
        question: "When does repayment start?",
        answer:
          "Repayment starts after course completion plus a 6-month moratorium period.",
      },
      {
        question: "Are there tax benefits?",
        answer:
          "Yes, interest paid on education loans is eligible for deduction under Section 80E with no upper limit.",
      },
      {
        question: "Is collateral required?",
        answer:
          "No collateral is required for loans up to \u20b97.5 Lakhs. For higher amounts, collateral may be needed.",
      },
    ],
  },
  {
    slug: "car",
    name: "Car Loan",
    shortDesc:
      "Drive your dream car home with hassle-free financing for new and used vehicles",
    icon: "\ud83d\ude97",
    maxAmount: "\u20b910 Crore",
    interestRate: "8.5% - 13% p.a.",
    processingFee: "Up to 1% of loan amount",
    tenure: "Up to 7 years",
    minIncome: "\u20b918,000/month",
    highlights: [
      "Up to 100% on-road financing",
      "Quick approval in 24 hours",
      "New & used cars covered",
      "Flexible EMI options",
    ],
    eligibility: [
      "Age: 21\u201365 years",
      "Minimum income: \u20b918,000/month",
      "CIBIL score 600+",
      "Stable employment or business",
      "Valid driving license",
    ],
    documents: [
      "Identity & address proof",
      "Income proof (salary slip or ITR)",
      "Bank statement (3 months)",
      "Vehicle quotation from dealer",
      "Driving license copy",
    ],
    features: [
      "New & used cars covered",
      "Minimal paperwork",
      "Same-day disbursal available",
      "No hidden charges",
    ],
    color: "orange",
    faqs: [
      {
        question: "What is the maximum car loan amount?",
        answer:
          "Car loans up to \u20b910 Crore are available depending on the vehicle and your income.",
      },
      {
        question: "Can I finance a used car?",
        answer: "Yes, we finance both new and used cars up to 10 years of age.",
      },
      {
        question: "What is the typical down payment?",
        answer:
          "We offer up to 100% on-road financing for eligible customers, meaning zero down payment.",
      },
      {
        question: "How quickly is the loan disbursed?",
        answer:
          "Loans are disbursed within 24 hours of complete documentation and approval.",
      },
      {
        question: "Can I prepay my car loan?",
        answer:
          "Yes, prepayment is allowed after 6 months. Nominal charges may apply.",
      },
    ],
  },
];

// Backward compatibility aliases for legacy slugs
export const LOAN_PRODUCTS_BY_LEGACY: Record<string, string> = {
  "home-loan": "home",
  "business-loan": "business",
  "personal-loan": "personal",
  "loan-against-property": "lap",
  "od-facility": "od-facility",
  "education-loan": "education",
  "car-loan": "car",
};

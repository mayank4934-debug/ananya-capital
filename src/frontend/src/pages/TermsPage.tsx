import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Ananya Capitals website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use the service.",
  },
  {
    title: "2. Eligibility",
    content:
      "You must be at least 18 years of age and a resident of India to use our loan application services. By using our services, you represent and warrant that you meet all eligibility requirements. Ananya Capitals reserves the right to verify your identity and eligibility at any time.",
  },
  {
    title: "3. Loan Application & Approval",
    content:
      "Submitting a loan application does not guarantee approval. All applications are subject to credit checks, document verification, and internal risk assessment. Approved loan amounts, interest rates, and tenures are determined based on your credit profile, income, and other factors. Final terms will be communicated via a sanction letter.",
  },
  {
    title: "4. Interest Rates & Charges",
    content:
      "Interest rates for our offerings range from 8.5% to 13% per annum, depending on the loan type, credit score, and applicant profile. Processing fees, prepayment charges, and other applicable fees will be disclosed upfront in the loan agreement. There are no hidden charges.",
  },
  {
    title: "5. Repayment Obligations",
    content:
      "Borrowers are obligated to repay the loan as per the agreed EMI schedule. Failure to make timely payments may result in penal charges, reporting to credit bureaus (CIBIL), and legal recovery proceedings. We encourage borrowers to contact us immediately if they anticipate repayment difficulties.",
  },
  {
    title: "6. Privacy & Data Protection",
    content:
      "We collect and process personal information solely for the purpose of evaluating loan applications and providing financial services. Your data is stored securely and is never sold to third parties. Please refer to our Privacy Policy for detailed information on data handling practices.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, and software, is the property of Ananya Capitals and is protected by Indian and international copyright laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Ananya Capitals shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.",
  },
  {
    title: "9. Governing Law & Jurisdiction",
    content:
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.",
  },
  {
    title: "10. Changes to Terms",
    content:
      "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Continued use of our services after any changes constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <Layout>
      <div className="py-12 bg-muted/40" data-ocid="terms.page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Legal"
            title="Terms & Conditions"
            subtitle="Please read these terms carefully before using our services."
          />
          <div className="space-y-6">
            {SECTIONS.map((section, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 shadow-subtle"
                data-ocid={`terms.section.${i + 1}`}
              >
                <h3 className="text-lg font-semibold text-foreground font-display mb-3">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            Last updated: June 2026
          </p>
        </div>
      </div>
    </Layout>
  );
}

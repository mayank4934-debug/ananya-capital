import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content:
      "We collect personal information including your name, contact details, PAN number, Aadhaar details, income proof, bank statements, employment details, and property documents (where applicable). This information is collected solely for the purpose of processing your loan application and providing financial services.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used to evaluate loan eligibility, process applications, communicate with you, comply with regulatory requirements (RBI, KYC norms), and improve our services. We may share necessary information with partner banks and NBFCs solely for loan processing purposes.",
  },
  {
    title: "3. Data Security",
    content:
      "We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your personal information. Our systems are regularly audited and monitored to prevent unauthorized access, alteration, or disclosure.",
  },
  {
    title: "4. Cookies & Tracking",
    content:
      "Our website uses cookies to enhance user experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionalities of the website.",
  },
  {
    title: "5. Third-Party Links",
    content:
      "Our website may contain links to third-party websites (partner banks, credit bureaus, etc.). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to access, correct, update, or delete your personal information. You may also withdraw consent for data processing at any time by contacting us at ananyacapital813@gmail.com. Please note that withdrawal may affect our ability to process your loan application.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. After this period, data is securely deleted or anonymized.",
  },
  {
    title: "8. Children's Privacy",
    content:
      "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If we discover that a minor has provided us with personal information, we will promptly delete such information.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at ananyacapital813@gmail.com or visit our office at B-37A Kalkaji, New Delhi 110019.",
  },
];

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="py-12 bg-muted/40" data-ocid="privacy.page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Legal"
            title="Privacy Policy"
            subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
          />
          <div className="space-y-6">
            {SECTIONS.map((section, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 shadow-subtle"
                data-ocid={`privacy.section.${i + 1}`}
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

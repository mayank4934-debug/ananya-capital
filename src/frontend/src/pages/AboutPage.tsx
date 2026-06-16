import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Award,
  Building2,
  CheckCircle2,
  Eye,
  Globe,
  Handshake,
  Landmark,
  Lightbulb,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import CTABanner from "../components/CTABanner";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

const TEAM = [
  {
    name: "Anjali Kapoor",
    role: "Founder & CEO",
    desc: "15+ years in financial services. Former VP at HDFC Bank.",
    initials: "AK",
  },
  {
    name: "Suresh Menon",
    role: "Chief Credit Officer",
    desc: "Expert in credit risk with 12 years of experience.",
    initials: "SM",
  },
  {
    name: "Deepa Iyer",
    role: "Head of Operations",
    desc: "Operational excellence with a customer-first approach.",
    initials: "DI",
  },
];

const MILESTONES = [
  {
    year: "2014",
    title: "Founded",
    desc: "Ananya Capitals established in New Delhi with a vision to democratize credit access for all Indians.",
  },
  {
    year: "2016",
    title: "First 100 Crore",
    desc: "Achieved cumulative loan disbursal of ₹100 crore, building trust with early partners.",
  },
  {
    year: "2018",
    title: "Pan-India Expansion",
    desc: "Expanded operations beyond Delhi NCR to Mumbai, Bangalore, and Hyderabad.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Launched online loan application platform to serve customers digitally during the pandemic.",
  },
  {
    year: "2022",
    title: "Top 3 Channel Partner",
    desc: "Recognized amongst the top 3 most preferred channel partners for loans across India's widest network.",
  },
  {
    year: "2024",
    title: "₹1000 Cr Disbursed",
    desc: "Crossed the milestone of ₹1000 crore in cumulative loan disbursals across all products.",
  },
  {
    year: "2026",
    title: "Future Ready",
    desc: "Serving 50,000+ happy customers with AI-powered loan matching and instant approvals.",
  },
];

const TRUSTED_PARTNERS = [
  { name: "HDFC Bank", icon: Landmark },
  { name: "SBI", icon: Landmark },
  { name: "ICICI Bank", icon: Landmark },
  { name: "Axis Bank", icon: Landmark },
  { name: "IDFC First Bank", icon: Landmark },
  { name: "Federal Bank", icon: Landmark },
  { name: "Bajaj Finserv", icon: Building2 },
  { name: "Tata Capital", icon: Building2 },
  { name: "Kotak Mahindra", icon: Landmark },
  { name: "IndusInd Bank", icon: Landmark },
  { name: "Yes Bank", icon: Landmark },
  { name: "RBL Bank", icon: Landmark },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary" data-ocid="about.hero_section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            About Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground font-display mb-4">
            Empowering Financial Dreams Since 2014
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Ananya Capitals is amongst the top 3 most preferred channel partners
            for loans across India's widest network of banks, NBFCs, and
            fintechs.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section
        className="py-16 bg-background"
        data-ocid="about.overview_section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Overview
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-4">
                India's Trusted Loan Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ananya Capitals has been at the forefront of financial inclusion
                since 2014. We bridge the gap between borrowers and India's
                leading financial institutions, ensuring every individual and
                business gets access to the right credit solution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a network spanning 50+ cities and partnerships with 25+
                banks and NBFCs, we have disbursed over ₹1000 crore in loans,
                helping thousands achieve their dreams.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Cities Covered" },
                { value: "25+", label: "Bank Partners" },
                { value: "50,000+", label: "Happy Customers" },
                { value: "₹1000 Cr+", label: "Loans Disbursed" },
              ].map((stat, i) => (
                <Card
                  key={i}
                  className="p-6 border border-border bg-card text-center"
                  data-ocid={`about.stat.${i + 1}`}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-primary font-display">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        className="py-16 bg-muted/40"
        data-ocid="about.introduction_section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Globe,
                    title: "Pan-India Presence",
                    desc: "Serving customers across all major cities and towns in India.",
                  },
                  {
                    icon: Handshake,
                    title: "Strong Partnerships",
                    desc: "Collaborations with India's top banks and financial institutions.",
                  },
                  {
                    icon: Zap,
                    title: "Fast Processing",
                    desc: "Quick approvals and disbursals with minimal documentation.",
                  },
                  {
                    icon: Shield,
                    title: "Trusted & Secure",
                    desc: "RBI-compliant processes with complete data security.",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="p-5 border border-border bg-card hover:shadow-md transition-all"
                    data-ocid={`about.intro_card.${i + 1}`}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Introduction
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-4">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2014, Ananya Capitals started with a simple mission:
                to make credit accessible to every Indian. What began as a small
                consultancy in New Delhi has grown into one of India's most
                trusted loan channel partners.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We don't just process loans — we understand your financial goals
                and match you with the best lending partner from our extensive
                network. Our team of experienced financial advisors ensures you
                get the most competitive interest rates and terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are a salaried professional looking for a personal
                loan, a business owner seeking working capital, or a family
                planning to buy a home, Ananya Capitals is your one-stop
                solution for all credit needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        className="py-16 bg-background"
        data-ocid="about.vision_mission_section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Vision & Mission"
            title="Our Purpose"
            subtitle="Driven by a clear vision to transform India's lending landscape."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted and preferred financial partner,
                empowering every individual and business with seamless access to
                credit. We envision a financially inclusive India where no dream
                is limited by lack of funds.
              </p>
            </Card>
            <Card className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To simplify the lending process through technology,
                transparency, and trust. We strive to connect borrowers with the
                right lenders, offering personalized solutions at competitive
                rates with minimal turnaround time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/40" data-ocid="about.values_section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            subtitle="We believe everyone deserves access to fair and transparent financial services."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Trust & Transparency",
                desc: "No hidden charges. No fine print. Complete transparency in every transaction.",
              },
              {
                icon: Users,
                title: "Customer First",
                desc: "Every decision we make puts our customers' interests at the forefront.",
              },
              {
                icon: Target,
                title: "Accessibility",
                desc: "Financial products designed for everyone, not just the privileged few.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Award-winning service with a 4.8/5 customer satisfaction rating.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Leveraging technology to make lending faster, smarter, and more accessible.",
              },
              {
                icon: Handshake,
                title: "Partnership",
                desc: "Building long-term relationships with customers and lending partners alike.",
              },
              {
                icon: Zap,
                title: "Speed",
                desc: "Quick approvals and disbursals because we value your time.",
              },
              {
                icon: Globe,
                title: "Inclusivity",
                desc: "Serving customers from all walks of life across urban and rural India.",
              },
            ].map((v, i) => (
              <Card
                key={i}
                className="p-6 border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
                data-ocid={`about.value.${i + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground font-display mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section
        className="py-16 bg-background"
        data-ocid="about.timeline_section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Our Journey"
            title="Milestones That Define Us"
            subtitle="From a small Delhi consultancy to a pan-India loan channel partner."
          />
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            {MILESTONES.map((m, i) => (
              <div
                key={i}
                className="flex gap-6 mb-8"
                data-ocid={`about.milestone.${i + 1}`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="pt-2">
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary mb-2"
                  >
                    {m.year}
                  </Badge>
                  <h3 className="font-semibold text-foreground font-display">
                    {m.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-muted/40" data-ocid="about.partners_section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Trusted Partners"
            title="Banks & NBFCs That Trust Us"
            subtitle="We are amongst the top 3 most preferred channel partners for India's widest network of banks, NBFCs, and fintechs."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TRUSTED_PARTNERS.map((partner, i) => (
              <Card
                key={i}
                className="p-4 border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all text-center"
                data-ocid={`about.partner.${i + 1}`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <partner.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {partner.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-background" data-ocid="about.team_section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Leadership"
            title="Meet Our Team"
            subtitle="Experienced professionals dedicated to your financial success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <Card
                key={i}
                className="p-6 text-center border border-border bg-card hover:shadow-md transition-shadow"
                data-ocid={`about.team_member.${i + 1}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-foreground font-display">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground">{member.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-10 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Certifications & Registrations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RBI Registered NBFC",
              "ISO 9001:2015 Certified",
              "SSL Secured",
              "MSME Registered",
              "GST Compliant",
            ].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}

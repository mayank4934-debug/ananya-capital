import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { type AnanyaPage, useAnanya } from "../context/AnanyaContext";

export default function Footer() {
  const { navigate } = useAnanya();
  const year = new Date().getFullYear();

  const quickLinks: { label: string; page: AnanyaPage }[] = [
    { label: "Home", page: "home" },
    { label: "Our Offerings", page: "loans" },
    { label: "Apply for Loan", page: "apply" },
    { label: "CIBIL Score Check", page: "cibil-score" },
    { label: "EMI Calculator", page: "emi-calculator" },
    { label: "About Us", page: "about" },
    { label: "Contact Us", page: "contact" },
  ];

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => navigate("home")}
              className="flex items-center gap-2 mb-4"
            >
              <img
                src="/assets/images/logo.png"
                alt="Ananya Capitals"
                className="w-9 h-9 object-contain rounded-xl"
              />
              <div className="leading-tight">
                <span className="block text-base font-bold text-foreground font-display">
                  Ananya
                </span>
                <span className="block text-[10px] font-semibold text-primary tracking-widest uppercase">
                  Capitals
                </span>
              </div>
            </button>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Amongst the top 3 most preferred channel partners for loans across
              India's widest network of banks, NBFCs, and fintechs.
            </p>
            <div className="flex gap-3">
              {[
                {
                  Icon: Facebook,
                  href: "https://facebook.com/ananyacapital",
                  label: "Facebook",
                },
                {
                  Icon: Twitter,
                  href: "https://twitter.com/ananyacapital",
                  label: "Twitter",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/ananyacapital",
                  label: "Instagram",
                },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com/company/ananyacapital",
                  label: "LinkedIn",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => navigate(link.page)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">
              Our Offerings
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Personal Loan",
                "Business Loan",
                "OD Facility",
                "Home Loan",
                "Loan Against Property",
                "Education Loan",
                "Car Loan",
              ].map((name) => (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => navigate("loans")}
                    className="hover:text-primary transition-colors"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  B-37A Kalkaji, New Delhi 110019
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/918510852911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 85108 52911 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:ananyacapital813@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ananyacapital813@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-semibold mb-2">
                Trust & Security
              </p>
              <div className="flex flex-wrap gap-2">
                {["RBI Approved", "ISO Certified", "SSL Secured"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {year}. Ananya Capitals. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <button
              type="button"
              onClick={() => navigate("terms")}
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={() => navigate("privacy")}
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

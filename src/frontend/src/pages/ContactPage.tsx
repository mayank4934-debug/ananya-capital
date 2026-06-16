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
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { useSubmitMeetingRequest } from "../hooks/useQueries";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 85108 52911",
    sub: "Mon-Sat, 9 AM – 6 PM",
    href: "https://wa.me/918510852911",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ananyacapital813@gmail.com",
    sub: "We respond within 2 hours",
    href: "mailto:ananyacapital813@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "B-37A Kalkaji",
    sub: "New Delhi 110019",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat: 9 AM – 6 PM",
    sub: "Sunday: Closed",
  },
];

const SUBJECTS = [
  "Loan Inquiry",
  "Application Status",
  "EMI Query",
  "CIBIL Score Help",
  "General Feedback",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const { mutate: submitMeeting, isPending } = useSubmitMeetingRequest();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMeeting(
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        purpose: form.subject,
        preferredDate: "",
        preferredTime: "",
        notes: form.message,
      },
      {
        onSuccess: () => {
          setSent(true);
          toast.success("Message sent! We'll get back to you shortly.");
        },
        onError: () => toast.error("Failed to send. Please try again."),
      },
    );
  };

  return (
    <Layout>
      <div className="py-12 bg-muted/40" data-ocid="contact.page">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Get in Touch"
            title="Contact Us"
            subtitle="Have questions? Our friendly team is here to help you every step of the way."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {CONTACT_INFO.map((info, i) => (
                <Card
                  key={i}
                  className="p-4 border border-border bg-card hover:shadow-sm transition-shadow"
                  data-ocid={`contact.info.${i + 1}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {info.value}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        {info.sub}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="p-4 border border-border bg-card">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/ananyacapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                    data-ocid="contact.instagram_link"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Instagram</title>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/918510852911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="WhatsApp"
                    data-ocid="contact.whatsapp_link"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>WhatsApp</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:ananyacapital813@gmail.com"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Email"
                    data-ocid="contact.email_link"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form + Map */}
            <div className="lg:col-span-2 space-y-6">
              {/* Google Maps Embed */}
              <Card
                className="border border-border bg-card overflow-hidden"
                data-ocid="contact.map_card"
              >
                <div className="w-full h-64 sm:h-80">
                  <iframe
                    title="Ananya Capitals Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.738123456789!2d77.2582!3d28.5484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzU0LjIiTiA3N8KwMTUnMjkuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="map-embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    data-ocid="contact.google_map"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground">
                    B-37A Kalkaji, New Delhi 110019
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Near Kalkaji Metro Station, Delhi
                  </p>
                </div>
              </Card>

              {sent ? (
                <Card
                  className="p-8 border border-border bg-card text-center"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground font-display mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll respond within 2 business
                    hours.
                  </p>
                  <Button
                    onClick={() => setSent(false)}
                    variant="outline"
                    className="border-primary/40 text-primary"
                    data-ocid="contact.send_another_button"
                  >
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <Card
                  className="p-8 border border-border bg-card"
                  data-ocid="contact.form_card"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground font-display">
                      Send us a Message
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cname">Full Name *</Label>
                        <Input
                          id="cname"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          required
                          placeholder="Your name"
                          className="mt-1"
                          data-ocid="contact.name_input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cphone">Phone Number *</Label>
                        <Input
                          id="cphone"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          required
                          placeholder="+91 85108 52911"
                          className="mt-1"
                          data-ocid="contact.phone_input"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="cemail">Email Address *</Label>
                        <Input
                          id="cemail"
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          required
                          placeholder="ananyacapital813@gmail.com"
                          className="mt-1"
                          data-ocid="contact.email_input"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Label>Subject *</Label>
                        <Select
                          onValueChange={(v) => set("subject", v)}
                          required
                        >
                          <SelectTrigger
                            className="mt-1"
                            data-ocid="contact.subject_select"
                          >
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {SUBJECTS.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="cmessage">Message *</Label>
                        <Textarea
                          id="cmessage"
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          required
                          placeholder="How can we help you?"
                          rows={5}
                          className="mt-1"
                          data-ocid="contact.message_textarea"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground font-semibold"
                      disabled={isPending}
                      data-ocid="contact.submit_button"
                    >
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

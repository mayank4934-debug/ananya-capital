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
import { Calendar, CheckCircle2, Clock, Download, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { useSubmitMeetingRequest } from "../hooks/useQueries";

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
const PURPOSES = [
  "Home Loan Inquiry",
  "Business Loan Inquiry",
  "Personal Loan Inquiry",
  "CIBIL Score Help",
  "Loan Against Property",
  "General Financial Advice",
  "Other",
];

export default function MeetingPage() {
  const { mutate: submitMeeting, isPending } = useSubmitMeetingRequest();
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    name: "",
    date: "",
    time: "",
  });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    date: "",
    time: "",
    notes: "",
  });
  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMeeting(
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        purpose: form.purpose,
        preferredDate: form.date,
        preferredTime: form.time,
        notes: form.notes,
      },
      {
        onSuccess: () => {
          setSubmittedData({
            name: form.name,
            date: form.date,
            time: form.time,
          });
          setSubmitted(true);
          toast.success("Meeting scheduled! Details saved as Excel.", {
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
          className="min-h-[70vh] flex items-center justify-center bg-background px-4"
          data-ocid="meeting.success_state"
        >
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground font-display mb-3">
              Meeting Scheduled!
            </h2>
            <p className="text-muted-foreground mb-5">
              Thank you
              {submittedData.name ? (
                <>
                  , <strong>{submittedData.name}</strong>
                </>
              ) : null}
              ! We've received your request and will confirm your slot shortly.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 text-left space-y-3">
              {submittedData.date && (
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      Requested Date &amp; Time
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {submittedData.date} at {submittedData.time}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3 text-sm">
                <Download className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">
                    Details saved as Excel
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Your meeting request has been downloaded for your records
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">
                    Confirmation within 2 hours
                  </p>
                  <p className="text-muted-foreground text-xs">
                    On business days, Mon–Sat, 9 AM–6 PM
                  </p>
                </div>
              </div>
            </div>
            <Button
              type="button"
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-primary/40 text-primary"
            >
              Schedule Another
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
            badge="Book a Consultation"
            title="Schedule a Meeting"
            subtitle="Talk to our financial expert. Get personalized loan guidance."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card
                className="p-8 border border-border bg-card"
                data-ocid="meeting.form_card"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        required
                        placeholder="Your full name"
                        className="mt-1"
                        data-ocid="meeting.name_input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <Input
                        id="phone"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        required
                        placeholder="+91 98765 43210"
                        className="mt-1"
                        data-ocid="meeting.phone_input"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="email@example.com"
                        className="mt-1"
                        data-ocid="meeting.email_input"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label>Purpose of Meeting *</Label>
                      <Select onValueChange={(v) => set("purpose", v)} required>
                        <SelectTrigger
                          className="mt-1"
                          data-ocid="meeting.purpose_select"
                        >
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          {PURPOSES.map((p) => (
                            <SelectItem key={p} value={p}>
                              {p}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={(e) => set("date", e.target.value)}
                        required
                        className="mt-1"
                        data-ocid="meeting.date_input"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <Label>Preferred Time *</Label>
                      <Select onValueChange={(v) => set("time", v)} required>
                        <SelectTrigger
                          className="mt-1"
                          data-ocid="meeting.time_select"
                        >
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIME_SLOTS.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        value={form.notes}
                        onChange={(e) => set("notes", e.target.value)}
                        placeholder="Any specific questions or requirements..."
                        rows={3}
                        className="mt-1"
                        data-ocid="meeting.notes_textarea"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground font-semibold"
                    disabled={isPending}
                    data-ocid="meeting.submit_button"
                  >
                    {isPending ? "Scheduling..." : "Schedule Meeting"}
                  </Button>
                </form>
              </Card>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  desc: "+91 98765 43210",
                  sub: "Mon-Sat, 9 AM - 6 PM",
                },
                {
                  icon: Clock,
                  title: "Response Time",
                  desc: "Within 2 hours",
                  sub: "On business days",
                },
                {
                  icon: Calendar,
                  title: "Meeting Types",
                  desc: "In-person or video",
                  sub: "At your convenience",
                },
              ].map((item, i) => (
                <Card key={i} className="p-4 border border-border bg-card">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {item.desc}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { createReservation } from "@/lib/api";

const TIMES = [
  "11:30","12:00","12:30","13:00","13:30","14:00","14:30",
  "18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00",
];

const OCCASIONS = ["Casual Dining", "Family Gathering", "Business Meeting", "Birthday", "Anniversary", "Group Outing"];

function formatDate(d) {
  if (!d) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function displayDate(d) {
  if (!d) return "Select a date";
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
}

export default function Reservation() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Casual Dining");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) {
      toast.error("Please fill in name, phone, date and time.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        name,
        phone,
        email: email || null,
        date: formatDate(date),
        time,
        guests: Number(guests),
        occasion,
        notes: notes || null,
      };
      const res = await createReservation(payload);
      setConfirmed(res);
      toast.success("Reservation received! We'll call to confirm shortly.");
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || err?.message || "Something went wrong";
      toast.error(typeof msg === "string" ? msg : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reserve" data-testid="reservation-section" className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 reveal">
            <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-5">Reserve a table</div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#2A3B2C]">
              Save your seat
              <br />
              <span className="italic font-light">at EMPIRE.</span>
            </h2>
            <p className="mt-6 text-[#4A5D4E] leading-relaxed">
              Tell us when you&apos;d like to dine in. We&apos;ll hold your table and
              get in touch on WhatsApp or phone to confirm — usually within an hour.
            </p>

            <div className="mt-10 space-y-5 text-sm text-[#4A5D4E]">
              <div className="flex justify-between border-b border-[#E6E1D8] pb-3">
                <span>Lunch</span>
                <span className="font-medium text-[#2A3B2C]">11:30 – 15:00</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E1D8] pb-3">
                <span>Dinner</span>
                <span className="font-medium text-[#2A3B2C]">18:30 – 23:00</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E1D8] pb-3">
                <span>Private dining</span>
                <span className="font-medium text-[#2A3B2C]">By reservation</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E1D8] pb-3">
                <span>Group bookings</span>
                <span className="font-medium text-[#2A3B2C]">Up to 30 guests</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative bg-[#F2EFE9] border border-[#E6E1D8] rounded-sm p-8 lg:p-10">
              {confirmed ? (
                <div data-testid="reservation-confirmed" className="text-center py-10">
                  <div className="mx-auto h-14 w-14 rounded-full bg-[#2A3B2C] text-[#FAF9F6] flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif-display text-3xl text-[#2A3B2C]">Reservation received</h3>
                  <p className="mt-3 text-[#4A5D4E]">
                    Thank you, <span className="font-medium text-[#2A3B2C]">{confirmed.name}</span> — a table for{" "}
                    <span className="font-medium text-[#2A3B2C]">{confirmed.guests}</span> on{" "}
                    <span className="font-medium text-[#2A3B2C]">{confirmed.date}</span> at{" "}
                    <span className="font-medium text-[#2A3B2C]">{confirmed.time}</span>.
                  </p>
                  <p className="mt-2 text-sm text-[#4A5D4E]">
                    We&apos;ll call you on <span className="font-medium text-[#2A3B2C]">{confirmed.phone}</span> to confirm.
                  </p>
                  <Button
                    data-testid="new-reservation-btn"
                    onClick={() => { setConfirmed(null); setName(""); setPhone(""); setEmail(""); setNotes(""); setDate(null); setTime(""); setGuests("2"); }}
                    className="mt-8 bg-[#C85A32] hover:bg-[#D96B43] text-white rounded-sm"
                  >
                    Make another reservation
                  </Button>
                </div>
              ) : (
                <form data-testid="reservation-form" onSubmit={submit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="r-name" className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Full name</Label>
                      <Input
                        id="r-name"
                        data-testid="reservation-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aarav Patel"
                        className="mt-2 bg-white border-[#E6E1D8] focus-visible:ring-[#C85A32] rounded-sm h-12"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="r-phone" className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Phone</Label>
                      <Input
                        id="r-phone"
                        data-testid="reservation-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98xxxxxxxx"
                        className="mt-2 bg-white border-[#E6E1D8] focus-visible:ring-[#C85A32] rounded-sm h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="r-email" className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Email (optional)</Label>
                    <Input
                      id="r-email"
                      type="email"
                      data-testid="reservation-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 bg-white border-[#E6E1D8] focus-visible:ring-[#C85A32] rounded-sm h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                      <Label className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            data-testid="reservation-date-trigger"
                            className="mt-2 w-full h-12 px-3 inline-flex items-center justify-between bg-white border border-[#E6E1D8] rounded-sm text-sm text-[#2A3B2C] hover:border-[#C85A32]"
                          >
                            <span className={date ? "" : "text-[#4A5D4E]"}>{displayDate(date)}</span>
                            <CalendarIcon className="h-4 w-4 text-[#4A5D4E]" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white" align="start">
                          <Calendar
                            data-testid="reservation-calendar"
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Time</Label>
                      <Select value={time} onValueChange={setTime}>
                        <SelectTrigger data-testid="reservation-time" className="mt-2 h-12 bg-white border-[#E6E1D8] rounded-sm focus:ring-[#C85A32]">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {TIMES.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Guests</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger data-testid="reservation-guests" className="mt-2 h-12 bg-white border-[#E6E1D8] rounded-sm focus:ring-[#C85A32]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                            <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "guest" : "guests"}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Occasion</Label>
                    <Select value={occasion} onValueChange={setOccasion}>
                      <SelectTrigger data-testid="reservation-occasion" className="mt-2 h-12 bg-white border-[#E6E1D8] rounded-sm focus:ring-[#C85A32]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {OCCASIONS.map((o) => (
                          <SelectItem key={o} value={o}>{o}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="r-notes" className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Special requests (optional)</Label>
                    <Textarea
                      id="r-notes"
                      data-testid="reservation-notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Birthday cake, high chair, dietary preferences…"
                      rows={3}
                      className="mt-2 bg-white border-[#E6E1D8] focus-visible:ring-[#C85A32] rounded-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    data-testid="reservation-submit"
                    disabled={submitting}
                    className="w-full h-13 py-4 bg-[#C85A32] hover:bg-[#D96B43] text-white rounded-sm tracking-wide"
                  >
                    {submitting ? "Sending…" : "Reserve my table"}
                  </Button>

                  <p className="text-xs text-[#4A5D4E] text-center">
                    Or call / WhatsApp us directly at{" "}
                    <a href="tel:07676556639" className="text-[#C85A32] underline-grow">07676 556639</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

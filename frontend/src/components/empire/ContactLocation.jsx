import React from "react";
import { MapPin, Phone, MessageCircle, Clock, CreditCard, Car } from "lucide-react";

const HOURS = [
  { day: "Monday — Thursday", time: "11:30 — 23:00" },
  { day: "Friday — Saturday", time: "11:30 — 23:30" },
  { day: "Sunday", time: "12:00 — 23:00" },
];

export default function ContactLocation() {
  const mapSrc =
    "https://www.google.com/maps?q=NWKRTC+Bus+Stand+Belalkanda+Bhatkal+Karnataka+581320&output=embed";

  return (
    <section id="contact" data-testid="contact-section" className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 reveal">
            <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-5">Contact & Location</div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#2A3B2C]">
              Right beside
              <br />
              <span className="italic font-light">the bus stand.</span>
            </h2>

            <div className="mt-10 rounded-sm overflow-hidden border border-[#E6E1D8] bg-white">
              <iframe
                data-testid="map-frame"
                title="EMPIRE Restaurant Location"
                src={mapSrc}
                className="w-full h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="h-full bg-white border border-[#E6E1D8] rounded-sm p-8 lg:p-10 flex flex-col">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-[#C85A32]" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[#4A5D4E]">Address</div>
                  <p className="mt-1 text-[#2A3B2C] leading-relaxed">
                    SRS Complex, Near NWKRTC Bus Stand,
                    <br />
                    Belalkanda, Bhatkal, Karnataka — 581320
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-[#C85A32]" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[#4A5D4E]">Phone</div>
                  <a href="tel:07676556639" className="mt-1 block text-[#2A3B2C] underline-grow">07676 556639</a>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <MessageCircle className="h-5 w-5 mt-1 text-[#C85A32]" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[#4A5D4E]">WhatsApp orders</div>
                  <a
                    data-testid="whatsapp-link"
                    href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER || "917676556639"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[#2A3B2C] underline-grow"
                  >
                    07676 556639
                  </a>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <Clock className="h-5 w-5 mt-1 text-[#C85A32]" />
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-[#4A5D4E]">Opening hours</div>
                  <ul className="mt-2 space-y-1.5">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm text-[#2A3B2C]">
                        <span>{h.day}</span>
                        <span className="font-medium">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-[#F2EFE9] rounded-sm">
                  <CreditCard className="h-4 w-4 mt-0.5 text-[#C85A32]" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Payments</div>
                    <p className="text-sm text-[#2A3B2C] mt-1">Cards, UPI, NFC, Cash</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#F2EFE9] rounded-sm">
                  <Car className="h-4 w-4 mt-0.5 text-[#C85A32]" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E]">Parking</div>
                    <p className="text-sm text-[#2A3B2C] mt-1">Free lot & street</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <a
                  data-testid="contact-call-btn"
                  href="tel:07676556639"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#2A3B2C] text-white px-5 py-3.5 text-sm hover:bg-[#3a4f3d] transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call to order
                </a>
                <a
                  data-testid="contact-whatsapp-btn"
                  href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER || "917676556639"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#C85A32] text-white px-5 py-3.5 text-sm hover:bg-[#D96B43] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Utensils, Users, Sparkles, HeartHandshake } from "lucide-react";

const STATS = [
  { value: "1000+", label: "Happy diners every week" },
  { value: "6", label: "Ways to enjoy our food" },
  { value: "12+", label: "Hours of warm service daily" },
  { value: "100%", label: "Freshly prepared, halal options" },
];

const VALUES = [
  { icon: Utensils, title: "Flavor First", desc: "Recipes built around freshness, spice and balance." },
  { icon: Users, title: "Family Style", desc: "Private dining rooms and seating for the whole table." },
  { icon: Sparkles, title: "Quietly Trendy", desc: "Cozy, modern interiors that stay calm at lunch hour." },
  { icon: HeartHandshake, title: "Hospitable", desc: "Service that treats travelers and regulars alike." },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-5">
              About the restaurant
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#2A3B2C] tracking-tight">
              A familiar table
              <br />
              <span className="italic font-light">in the heart of Bhatkal.</span>
            </h2>
            <p className="mt-6 text-[#4A5D4E] text-base sm:text-lg leading-relaxed">
              EMPIRE is one of Bhatkal&apos;s most loved family dining destinations —
              steps from the NWKRTC Bus Stand. From quick bites between journeys
              to slow Sunday dinners with the whole family, the menu and the room
              are built to welcome everyone.
            </p>
            <p className="mt-4 text-[#4A5D4E] text-base sm:text-lg leading-relaxed">
              Halal mains, vegetarian classics, desserts worth a detour, and
              service that quietly takes care of the details.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  data-testid={`stat-${i}`}
                  className="border-t border-[#E6E1D8] pt-5"
                >
                  <div className="font-serif-display text-4xl text-[#2A3B2C]">{s.value}</div>
                  <div className="mt-1 text-sm text-[#4A5D4E]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1651440204216-548382747b40"
                alt="Inside EMPIRE Restaurant"
                className="w-full h-[520px] object-cover rounded-sm shadow-[0_30px_60px_-30px_rgba(42,59,44,0.4)]"
              />
              <div className="absolute -bottom-8 -left-8 hidden md:block bg-[#2A3B2C] text-[#FAF9F6] p-8 max-w-xs">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#FAF9F6]/70">Signature</div>
                <div className="mt-2 font-serif-display text-2xl leading-tight">
                  &ldquo;Their desserts and biryani are reason enough to come back.&rdquo;
                </div>
                <div className="mt-3 text-xs text-[#FAF9F6]/70">— Regulars of EMPIRE</div>
              </div>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 gap-8">
              {VALUES.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 h-11 w-11 rounded-sm bg-[#F2EFE9] flex items-center justify-center text-[#C85A32]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A3B2C] text-base">{title}</h4>
                    <p className="text-sm text-[#4A5D4E] mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

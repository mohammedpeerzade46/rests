import React from "react";
import {
  Salad,
  Bike,
  MapPin,
  Sofa,
  CreditCard,
  ParkingCircle,
} from "lucide-react";

const ROWS = [
  {
    icon: Salad,
    title: "Quality food",
    desc: "Freshly prepared meals from carefully selected ingredients — halal mains and vegetarian classics.",
  },
  {
    icon: Bike,
    title: "Six ways to order",
    desc: "Dine-in, takeaway, home delivery, no-contact delivery, kerbside pickup and drive-through.",
  },
  {
    icon: MapPin,
    title: "Convenient location",
    desc: "SRS Complex, right next to the NWKRTC Bus Stand — easy stop for travelers and locals.",
  },
  {
    icon: Sofa,
    title: "Comfortable atmosphere",
    desc: "Cozy and quietly trendy — family seating, group arrangements and a private dining room.",
  },
  {
    icon: CreditCard,
    title: "Easy to pay",
    desc: "Credit and debit cards, NFC mobile payments, UPI and all major digital payment methods.",
  },
  {
    icon: ParkingCircle,
    title: "Plenty of parking",
    desc: "Free parking lot, free street parking and ample space — convenient for visitors arriving by car.",
  },
];

export default function WhyChoose() {
  return (
    <section data-testid="why-choose-section" className="bg-[#2A3B2C] text-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 reveal">
            <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-5">Why EMPIRE</div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Built around
              <br />
              <span className="italic font-light text-[#FAF9F6]/85">your visit.</span>
            </h2>
            <p className="mt-6 text-[#FAF9F6]/75 leading-relaxed">
              Whether you&apos;re here for a quiet meal, a celebration, a business
              meeting or a fast bite between buses — every detail is shaped
              around making the visit easier.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {ROWS.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} data-testid={`why-row-${i}`} className="reveal flex gap-5">
                <div className="shrink-0 h-12 w-12 rounded-sm border border-[#FAF9F6]/20 flex items-center justify-center text-[#C85A32]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-2xl text-[#FAF9F6] tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm text-[#FAF9F6]/75 leading-relaxed max-w-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

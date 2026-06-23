import React from "react";

const SERVICES = [
  "Dine-In",
  "Takeaway",
  "Home Delivery",
  "No-Contact Delivery",
  "Kerbside Pickup",
  "Drive-Through",
  "Reservations",
  "Private Dining",
  "Free Parking",
];

function Track() {
  return (
    <div className="marquee-track items-center py-10">
      {[...SERVICES, ...SERVICES].map((s, i) => (
        <div key={i} className="flex items-center gap-24 whitespace-nowrap">
          <span className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2A3B2C] tracking-tight">
            {s}
          </span>
          <span className="text-[#C85A32] text-3xl">✦</span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesMarquee() {
  return (
    <section
      data-testid="services-marquee"
      className="relative bg-[#F2EFE9] overflow-hidden border-y border-[#E6E1D8]"
    >
      <Track />
    </section>
  );
}

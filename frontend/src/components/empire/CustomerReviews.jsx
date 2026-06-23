import React from "react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Aishwarya Hegde",
    role: "Bhatkal · Regular",
    text:
      "Hands down the best biryani in Bhatkal. The dum is perfect, the meat is tender and the family seating is always available. We dine here at least twice a month.",
    stars: 5,
  },
  {
    name: "Mohammed Faraz",
    role: "Mangalore · Visitor",
    text:
      "Stopped here on the way back from Goa. Quick service, halal, very clean and the prawn biryani was outstanding. EMPIRE is now a planned stop, not a coincidence.",
    stars: 5,
  },
  {
    name: "Priya & Ramesh",
    role: "Anniversary dinner",
    text:
      "Booked the private dining room for our anniversary. Warm staff, great ambience, and the dessert platter was the highlight. Totally worth it.",
    stars: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section
      data-testid="reviews-section"
      className="bg-[#F2EFE9] py-24 lg:py-32 relative grain"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-4">Customer reviews</div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Loved by Bhatkal,
              <br />
              <span className="italic font-light">trusted by travelers.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-[#2A3B2C]">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#C85A32] text-[#C85A32]" />
              ))}
            </div>
            <div className="text-sm text-[#4A5D4E]">
              <span className="font-serif-display text-2xl text-[#2A3B2C]">4.7</span> · 1,200+ reviews
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              data-testid={`review-${i}`}
              className="reveal relative bg-[#FAF9F6] border border-[#E6E1D8] p-8 lg:p-10 rounded-sm flex flex-col"
            >
              <Quote className="h-6 w-6 text-[#C85A32] mb-5" />
              <p className="text-[#2A3B2C] leading-relaxed text-base">{r.text}</p>
              <div className="mt-auto pt-8 flex items-center justify-between">
                <div>
                  <div className="font-medium text-[#2A3B2C]">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E] mt-1">{r.role}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-[#C85A32] text-[#C85A32]" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

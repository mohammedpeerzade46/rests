import React from "react";

const IMAGES = [
  { url: "https://images.pexels.com/photos/9773757/pexels-photo-9773757.jpeg", span: "md:col-span-7", h: "h-[420px]" },
  { url: "https://images.unsplash.com/photo-1667388968964-4aa652df0a9b", span: "md:col-span-5", h: "h-[420px]" },
  { url: "https://images.unsplash.com/photo-1613274554329-70f997f5789f", span: "md:col-span-4", h: "h-[300px]" },
  { url: "https://images.unsplash.com/photo-1709548145082-04d0cde481d4", span: "md:col-span-4", h: "h-[300px]" },
  { url: "https://images.pexels.com/photos/12181619/pexels-photo-12181619.jpeg", span: "md:col-span-4", h: "h-[300px]" },
];

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-4">Inside EMPIRE</div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#2A3B2C] leading-[1.05]">
              The room,
              <br />
              <span className="italic font-light">the table, the day.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#4A5D4E] leading-relaxed">
            Cozy, casual and family-friendly — with a private dining room and
            plenty of space to spread out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              data-testid={`gallery-${i}`}
              className={`reveal group relative overflow-hidden rounded-sm ${img.span} ${img.h}`}
            >
              <img
                src={img.url}
                alt={`Gallery ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#2A3B2C]/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

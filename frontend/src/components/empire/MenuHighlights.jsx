import React from "react";

const ITEMS = [
  {
    name: "Hyderabadi Biryani",
    tag: "Signature · Halal",
    price: "₹240",
    desc: "Slow-cooked basmati layered with aromatic spices, tender meat and saffron.",
    img: "https://images.pexels.com/photos/28909536/pexels-photo-28909536.jpeg",
    span: "lg:col-span-7 lg:row-span-2",
    h: "h-[560px]",
  },
  {
    name: "Quick Bites Platter",
    tag: "Small Plates",
    price: "₹180",
    desc: "Crisp, warm and made-to-share — perfect between buses.",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
    span: "lg:col-span-5",
    h: "h-[270px]",
  },
  {
    name: "Garden Vegetarian Thali",
    tag: "Vegetarian",
    price: "₹220",
    desc: "Dal, sabzi, rice, roti, salad & sweet — a complete homestyle meal.",
    img: "https://images.unsplash.com/photo-1667388968964-4aa652df0a9b",
    span: "lg:col-span-5",
    h: "h-[270px]",
  },
  {
    name: "House Desserts",
    tag: "Sweet Endings",
    price: "₹120",
    desc: "Gulab jamun, kulfi and seasonal favourites — the reason regulars stay later.",
    img: "https://images.unsplash.com/photo-1709548145082-04d0cde481d4",
    span: "lg:col-span-4",
    h: "h-[330px]",
  },
  {
    name: "Family Feast",
    tag: "Group Dining",
    price: "₹999",
    desc: "Curated multi-course meal for 4 — biryani, curries, breads, dessert.",
    img: "https://images.unsplash.com/photo-1613274554329-70f997f5789f",
    span: "lg:col-span-8",
    h: "h-[330px]",
  },
];

function Card({ item, index }) {
  return (
    <article
      data-testid={`menu-item-${index}`}
      className={`reveal group relative overflow-hidden rounded-sm border border-[#E6E1D8] bg-[#FAF9F6] ${item.span}`}
    >
      <div className={`relative ${item.h} overflow-hidden`}>
        <img
          src={item.img}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A3B2C]/85 via-[#2A3B2C]/20 to-transparent" />
        <div className="absolute top-5 left-5">
          <span className="inline-block bg-[#FAF9F6]/90 text-[#2A3B2C] text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-sm">
            {item.tag}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-[#FAF9F6]">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-serif-display text-2xl sm:text-3xl tracking-tight">{item.name}</h3>
            <div className="font-serif-display text-2xl text-[#FAF9F6]">{item.price}</div>
          </div>
          <p className="mt-2 text-sm text-[#FAF9F6]/85 max-w-md leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </article>
  );
}

export default function MenuHighlights() {
  return (
    <section id="menu" data-testid="menu-section" className="bg-[#F2EFE9] py-24 lg:py-32 relative grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-4">From the kitchen</div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#2A3B2C] leading-[1.05]">
              Menu highlights,
              <br />
              <span className="italic font-light">made fresh, served warm.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#4A5D4E] leading-relaxed">
            Halal mains, vegetarian classics, quick bites and house-made desserts —
            small plates and main courses for every mood.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {ITEMS.map((item, i) => (
            <Card key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

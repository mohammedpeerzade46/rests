import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu";

const PICKS = ["butter-chicken", "chicken-biryani", "fish-curry"];

export default function ChefRecommendations() {
  const items = PICKS.map((id) => MENU_ITEMS.find((i) => i.id === id)).filter(Boolean);

  return (
    <section
      id="chefs"
      data-testid="chefs-section"
      className="bg-[#FAF9F6] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-4">
              Chef&apos;s recommendations
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Three dishes
              <br />
              <span className="italic font-light">to start with.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#4A5D4E] leading-relaxed">
            The plates our regulars come back for — handpicked by the kitchen,
            served the way they&apos;ve always been loved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {items.map((it, i) => (
            <article
              key={it.id}
              data-testid={`chef-pick-${i}`}
              className="reveal group"
            >
              <div className="relative overflow-hidden rounded-sm">
                <div className="h-[360px] overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-[10px] uppercase tracking-[0.25em] bg-[#FAF9F6]/95 text-[#2A3B2C] px-3 py-1.5 rounded-sm">
                    Pick 0{i + 1}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <h3 className="font-serif-display text-2xl sm:text-3xl tracking-tight text-[#2A3B2C]">
                  {it.name}
                </h3>
                <Link
                  to="/menu"
                  className="shrink-0 h-10 w-10 rounded-full border border-[#E6E1D8] flex items-center justify-center text-[#2A3B2C] hover:bg-[#C85A32] hover:text-white hover:border-[#C85A32] transition-colors"
                  aria-label={`View ${it.name} on menu`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-[#4A5D4E] leading-relaxed">{it.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

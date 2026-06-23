import React, { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/empire/Header";
import Footer from "@/components/empire/Footer";
import MenuSearchBar from "@/components/empire/MenuSearchBar";
import MenuCategoriesNav from "@/components/empire/MenuCategoriesNav";
import MenuItemCard from "@/components/empire/MenuItemCard";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menu";

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const sectionRefs = useRef({});

  // scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = MENU_ITEMS.filter((it) => {
      if (!q) return true;
      return (
        it.name.toLowerCase().includes(q) ||
        it.description.toLowerCase().includes(q) ||
        it.category.toLowerCase().includes(q)
      );
    });

    const map = {};
    MENU_CATEGORIES.forEach((c) => {
      if (c.id === "all") return;
      map[c.id] = filtered.filter((it) => it.category === c.id);
    });
    return map;
  }, [query]);

  const visibleCategories = useMemo(() => {
    return MENU_CATEGORIES.filter((c) => c.id === "all" || (grouped[c.id] && grouped[c.id].length > 0));
  }, [grouped]);

  const totalResults = useMemo(
    () => Object.values(grouped).reduce((s, arr) => s + arr.length, 0),
    [grouped]
  );

  const scrollToCategory = (id) => {
    setActiveCat(id);
    if (id === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // active section highlight on scroll
  useEffect(() => {
    if (query) return; // skip during search
    const onScroll = () => {
      let current = "all";
      const yMid = window.scrollY + 220;
      MENU_CATEGORIES.forEach((c) => {
        if (c.id === "all") return;
        const el = sectionRefs.current[c.id];
        if (el && el.offsetTop <= yMid) current = c.id;
      });
      setActiveCat(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [query]);

  return (
    <div data-testid="menu-page" className="min-h-screen bg-[#FAF9F6] text-[#2A3B2C]">
      <Header />

      {/* Page heading */}
      <section className="bg-[#FAF9F6] border-b border-[#E6E1D8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-10 lg:pt-32 lg:pb-14">
          <div className="text-xs tracking-[0.3em] uppercase text-[#C85A32] mb-4">Our menu</div>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
            Made fresh,
            <br />
            <span className="italic font-light">served warm.</span>
          </h1>
          <p className="mt-5 text-[#4A5D4E] max-w-2xl leading-relaxed">
            Browse our complete menu — biryanis, grills, vegetarian specialties,
            desserts, beverages and more. Add to cart and check out on WhatsApp.
          </p>

          <div className="mt-8 max-w-xl">
            <MenuSearchBar value={query} onChange={setQuery} />
          </div>
        </div>
      </section>

      {/* Sticky categories */}
      <MenuCategoriesNav
        categories={visibleCategories}
        active={activeCat}
        onSelect={scrollToCategory}
      />

      {/* Items */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32 pt-10 lg:pt-14">
        {totalResults === 0 ? (
          <div data-testid="menu-no-results" className="py-24 text-center">
            <div className="font-serif-display text-3xl text-[#2A3B2C]">No matches found</div>
            <p className="mt-3 text-[#4A5D4E]">
              Try searching for &ldquo;chicken&rdquo;, &ldquo;biryani&rdquo;, &ldquo;dessert&rdquo; or browse all categories.
            </p>
          </div>
        ) : (
          MENU_CATEGORIES.filter((c) => c.id !== "all").map((cat) => {
            const items = grouped[cat.id] || [];
            if (items.length === 0) return null;
            return (
              <div
                key={cat.id}
                ref={(el) => (sectionRefs.current[cat.id] = el)}
                data-testid={`menu-section-${cat.id}`}
                className="pt-16 first:pt-2"
              >
                <div className="flex items-end justify-between mb-8">
                  <h2 className="font-serif-display text-3xl sm:text-4xl tracking-tight">{cat.label}</h2>
                  <span className="text-xs tracking-[0.25em] uppercase text-[#4A5D4E]">
                    {items.length} item{items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {items.map((it) => (
                    <MenuItemCard key={it.id} item={it} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      <Footer />
    </div>
  );
}

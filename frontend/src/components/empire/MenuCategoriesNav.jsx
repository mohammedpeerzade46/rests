import React, { useEffect, useRef } from "react";

export default function MenuCategoriesNav({ categories, active, onSelect }) {
  const trackRef = useRef(null);

  // auto-scroll active button into view
  useEffect(() => {
    const el = trackRef.current?.querySelector(`[data-cat="${active}"]`);
    if (el && trackRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const offset = elRect.left - trackRect.left - trackRect.width / 2 + elRect.width / 2;
      trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div
      data-testid="menu-categories-nav"
      className="sticky top-20 z-30 bg-[#FAF9F6]/90 backdrop-blur-xl border-y border-[#E6E1D8]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={trackRef}
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-3"
        >
          {categories.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                data-testid={`menu-cat-${c.id}`}
                data-cat={c.id}
                onClick={() => onSelect(c.id)}
                className={`shrink-0 px-4 sm:px-5 py-2.5 text-sm rounded-sm transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[#2A3B2C] text-[#FAF9F6]"
                    : "text-[#2A3B2C] hover:bg-[#F2EFE9]"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

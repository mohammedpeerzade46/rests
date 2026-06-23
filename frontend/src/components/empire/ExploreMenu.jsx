import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ExploreMenu() {
  return (
    <section
      id="explore"
      data-testid="explore-menu-section"
      className="bg-[#FAF9F6] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal relative bg-[#2A3B2C] text-[#FAF9F6] rounded-sm overflow-hidden p-10 sm:p-14 lg:p-20 text-center">
          {/* warm bloom */}
          <div className="absolute -top-24 -right-24 w-[40vw] h-[40vw] rounded-full bg-[#C85A32]/25 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[30vw] h-[30vw] rounded-full bg-[#F5A65B]/15 blur-[80px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C85A32] mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              The full menu
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.02]">
              Explore Our
              <br />
              <span className="italic font-light">Menu.</span>
            </h2>

            <p className="mt-7 max-w-2xl mx-auto text-[#FAF9F6]/80 leading-relaxed text-base sm:text-lg">
              Browse our complete menu featuring biryanis, grills, vegetarian
              specialties, desserts, beverages, and more.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                data-testid="explore-view-menu-btn"
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#FAF9F6] text-[#2A3B2C] px-7 py-4 text-sm font-medium tracking-wide hover:bg-white transition-colors"
              >
                View Full Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                data-testid="explore-order-btn"
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#C85A32] text-white px-7 py-4 text-sm font-medium tracking-wide hover:bg-[#D96B43] transition-colors"
              >
                Order Online
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-[#FAF9F6]/65">
              <span>Biryanis</span>
              <span>·</span>
              <span>Grills</span>
              <span>·</span>
              <span>Vegetarian</span>
              <span>·</span>
              <span>Seafood</span>
              <span>·</span>
              <span>Desserts</span>
              <span>·</span>
              <span>Beverages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

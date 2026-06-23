import React from "react";
import { Search, X } from "lucide-react";

export default function MenuSearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#4A5D4E]" />
      <input
        data-testid="menu-search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search chicken, biryani, dessert, drinks…"
        className="w-full pl-11 pr-11 py-4 bg-white border border-[#E6E1D8] rounded-sm text-sm placeholder:text-[#4A5D4E]/70 text-[#2A3B2C] focus:outline-none focus:border-[#C85A32] transition-colors"
      />
      {value && (
        <button
          data-testid="menu-search-clear"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 flex items-center justify-center text-[#4A5D4E] hover:text-[#2A3B2C]"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

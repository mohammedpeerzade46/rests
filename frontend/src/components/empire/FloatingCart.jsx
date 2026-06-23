import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
  const { count, setIsOpen } = useCart();

  return (
    <button
      data-testid="floating-cart-btn"
      onClick={() => setIsOpen(true)}
      aria-label={`Open cart (${count} items)`}
      className={`fixed z-[60] bottom-6 right-6 lg:bottom-8 lg:right-8 inline-flex items-center gap-3 rounded-full bg-[#2A3B2C] text-[#FAF9F6] pl-5 pr-6 py-4 text-sm font-medium shadow-[0_25px_50px_-15px_rgba(42,59,44,0.6)] hover:bg-[#3a4f3d] transition-all duration-300 ${
        count === 0 ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      <span className="relative">
        <ShoppingBag className="h-5 w-5" />
        <span
          data-testid="floating-cart-count"
          className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-[#C85A32] text-white text-[10px] font-semibold flex items-center justify-center"
        >
          {count}
        </span>
      </span>
      <span>Cart ({count})</span>
    </button>
  );
}

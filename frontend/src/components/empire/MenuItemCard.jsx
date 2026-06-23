import React, { useState } from "react";
import { Minus, Plus, ShoppingBag, Leaf } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

export default function MenuItemCard({ item }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const onAdd = () => {
    addItem(item, qty);
    toast.success(`${item.name} added`, {
      description: `Qty ${qty} · ₹${item.price * qty}`,
      duration: 1800,
    });
    setQty(1);
  };

  return (
    <article
      data-testid={`menu-item-${item.id}`}
      className="group flex flex-col bg-white border border-[#E6E1D8] rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(42,59,44,0.25)] transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {item.veg ? (
            <span className="inline-flex items-center gap-1 bg-[#FAF9F6]/95 text-[#2A3B2C] text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-sm">
              <Leaf className="h-3 w-3 text-[#2A3B2C]" /> Veg
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-[#FAF9F6]/95 text-[#C85A32] text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-sm">
              <span className="h-2 w-2 rounded-full bg-[#C85A32]" /> Non-Veg
            </span>
          )}
          {item.popular && (
            <span className="inline-block bg-[#C85A32] text-white text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-sm">
              Popular
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif-display text-xl sm:text-2xl tracking-tight text-[#2A3B2C]">{item.name}</h3>
          <div className="font-serif-display text-xl text-[#2A3B2C] shrink-0">₹{item.price}</div>
        </div>
        <p className="mt-2 text-sm text-[#4A5D4E] leading-relaxed flex-1">{item.description}</p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="inline-flex items-center border border-[#E6E1D8] rounded-sm">
            <button
              data-testid={`qty-dec-${item.id}`}
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="h-10 w-10 flex items-center justify-center text-[#2A3B2C] hover:bg-[#F2EFE9]"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span data-testid={`qty-value-${item.id}`} className="w-9 text-center text-sm font-medium">{qty}</span>
            <button
              data-testid={`qty-inc-${item.id}`}
              onClick={() => setQty((q) => Math.min(20, q + 1))}
              className="h-10 w-10 flex items-center justify-center text-[#2A3B2C] hover:bg-[#F2EFE9]"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            data-testid={`add-to-cart-${item.id}`}
            onClick={onAdd}
            className="inline-flex items-center gap-2 bg-[#C85A32] hover:bg-[#D96B43] text-white text-sm px-4 sm:px-5 py-2.5 rounded-sm transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </article>
  );
}

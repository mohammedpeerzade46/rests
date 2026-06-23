import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { buildOrderMessage, openWhatsApp } from "@/lib/whatsapp";
import { toast } from "sonner";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQty, removeItem, total, count, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const checkout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    const msg = buildOrderMessage({ items, total, name, phone });
    openWhatsApp(msg);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        data-testid="cart-drawer"
        side="right"
        className="w-full sm:max-w-md p-0 bg-[#FAF9F6] border-l border-[#E6E1D8] flex flex-col"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-[#E6E1D8]">
          <SheetTitle className="font-serif-display text-2xl text-[#2A3B2C] text-left">
            Your order
          </SheetTitle>
          <SheetDescription className="sr-only">
            Review your selected items, adjust quantities, and check out on WhatsApp.
          </SheetDescription>
          <div className="text-xs uppercase tracking-[0.25em] text-[#4A5D4E]">
            {count} {count === 1 ? "item" : "items"} · ₹{total}
          </div>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="h-14 w-14 rounded-full bg-[#F2EFE9] flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-[#4A5D4E]" />
              </div>
              <p className="font-serif-display text-2xl text-[#2A3B2C]">Cart is empty</p>
              <p className="mt-2 text-sm text-[#4A5D4E]">Add a few dishes to begin.</p>
              <button
                data-testid="continue-browsing-empty"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-sm border border-[#E6E1D8] px-5 py-2.5 text-sm text-[#2A3B2C] hover:bg-[#F2EFE9]"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[#E6E1D8]">
              {items.map((it) => (
                <li key={it.id} data-testid={`cart-item-${it.id}`} className="py-4 flex gap-4">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="h-20 w-20 object-cover rounded-sm shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-[#2A3B2C] text-sm leading-snug">{it.name}</h4>
                      <button
                        data-testid={`cart-remove-${it.id}`}
                        onClick={() => removeItem(it.id)}
                        aria-label={`Remove ${it.name}`}
                        className="text-[#4A5D4E] hover:text-[#C85A32]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-xs text-[#4A5D4E] mt-1">₹{it.price} each</div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-[#E6E1D8] rounded-sm">
                        <button
                          data-testid={`cart-dec-${it.id}`}
                          onClick={() => updateQty(it.id, it.qty - 1)}
                          className="h-8 w-8 flex items-center justify-center text-[#2A3B2C] hover:bg-[#F2EFE9]"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm">{it.qty}</span>
                        <button
                          data-testid={`cart-inc-${it.id}`}
                          onClick={() => updateQty(it.id, it.qty + 1)}
                          className="h-8 w-8 flex items-center justify-center text-[#2A3B2C] hover:bg-[#F2EFE9]"
                          aria-label="Increase"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="font-medium text-[#2A3B2C]">₹{it.price * it.qty}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t border-[#E6E1D8] p-6 bg-white">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input
                data-testid="cart-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white border border-[#E6E1D8] rounded-sm text-sm placeholder:text-[#4A5D4E]/70 focus:outline-none focus:border-[#C85A32]"
              />
              <input
                data-testid="cart-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="w-full px-4 py-3 bg-white border border-[#E6E1D8] rounded-sm text-sm placeholder:text-[#4A5D4E]/70 focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#4A5D4E]">Total</span>
              <span data-testid="cart-total" className="font-serif-display text-2xl text-[#2A3B2C]">
                ₹{total}
              </span>
            </div>

            <button
              data-testid="checkout-whatsapp-btn"
              onClick={checkout}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C85A32] hover:bg-[#D96B43] text-white px-5 py-4 rounded-sm text-sm font-medium tracking-wide transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Checkout via WhatsApp
            </button>

            <div className="mt-3 flex items-center justify-between">
              <button
                data-testid="continue-browsing-btn"
                onClick={() => setIsOpen(false)}
                className="text-sm text-[#2A3B2C] underline-grow"
              >
                Continue browsing
              </button>
              <button
                data-testid="clear-cart-btn"
                onClick={() => { clear(); toast.success("Cart cleared"); }}
                className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E] hover:text-[#C85A32]"
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

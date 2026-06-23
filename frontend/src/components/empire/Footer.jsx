import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const wa = process.env.REACT_APP_WHATSAPP_NUMBER || "917676556639";
  return (
    <footer data-testid="site-footer" className="bg-[#2A3B2C] text-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-serif-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              See you
              <br />
              <span className="italic font-light">at EMPIRE.</span>
            </div>
            <p className="mt-6 text-[#FAF9F6]/70 max-w-md leading-relaxed">
              Family dining in the heart of Bhatkal. Open daily for lunch and
              dinner — with dine-in, delivery and everything in between.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a data-testid="social-instagram" aria-label="Instagram" href="#" className="h-10 w-10 rounded-sm border border-[#FAF9F6]/20 flex items-center justify-center hover:bg-[#FAF9F6]/10">
                <Instagram className="h-4 w-4" />
              </a>
              <a data-testid="social-facebook" aria-label="Facebook" href="#" className="h-10 w-10 rounded-sm border border-[#FAF9F6]/20 flex items-center justify-center hover:bg-[#FAF9F6]/10">
                <Facebook className="h-4 w-4" />
              </a>
              <a
                data-testid="social-whatsapp"
                aria-label="WhatsApp"
                href={`https://wa.me/${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-sm border border-[#FAF9F6]/20 flex items-center justify-center hover:bg-[#FAF9F6]/10"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 text-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/60 mb-5">Explore</div>
            <ul className="space-y-3 text-[#FAF9F6]/85">
              <li><Link to="/" className="underline-grow">Home</Link></li>
              <li><Link to="/menu" className="underline-grow">Menu</Link></li>
              <li><a href="/#gallery" className="underline-grow">Gallery</a></li>
              <li><a href="/#about" className="underline-grow">About</a></li>
              <li><a href="/#contact" className="underline-grow">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 text-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/60 mb-5">Find us</div>
            <ul className="space-y-4 text-[#FAF9F6]/85">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-[#C85A32]" />
                <span>SRS Complex, Near NWKRTC Bus Stand,<br />Belalkanda, Bhatkal — 581320</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 shrink-0 text-[#C85A32]" />
                <a href="tel:07676556639" className="underline-grow">07676 556639</a>
              </li>
              <li className="flex gap-3 items-center">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#C85A32]" />
                <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" className="underline-grow">
                  WhatsApp orders
                </a>
              </li>
            </ul>
            <Link
              to="/menu"
              data-testid="footer-order-btn"
              className="mt-7 inline-flex items-center justify-center gap-2 bg-[#C85A32] hover:bg-[#D96B43] text-white text-sm px-5 py-3 rounded-sm transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#FAF9F6]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FAF9F6]/55">
          <div>© {new Date().getFullYear()} EMPIRE Restaurant, Bhatkal · All rights reserved</div>
          <div>SRS Complex · Near NWKRTC Bus Stand · Karnataka 581320</div>
        </div>
      </div>
    </footer>
  );
}

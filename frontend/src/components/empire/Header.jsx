import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/#gallery" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, to) => {
    if (!to.includes("#")) return; // normal links handled by react-router
    e.preventDefault();
    const [path, hash] = to.split("#");
    setOpen(false);
    if (location.pathname !== (path || "/")) {
      navigate(path || "/");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-[#FAF9F6]/85 border-b border-[#E6E1D8]/70" : "bg-[#FAF9F6]/40"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" data-testid="brand-logo" className="flex items-baseline gap-2">
          <span className="font-serif-display text-3xl tracking-tight text-[#2A3B2C] font-semibold">
            EMPIRE
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#4A5D4E] hidden sm:inline">
            Restaurant · Bhatkal
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) =>
            n.to.includes("#") ? (
              <a
                key={n.label}
                data-testid={`nav-${n.label.toLowerCase()}`}
                href={n.to}
                onClick={(e) => handleNav(e, n.to)}
                className="text-sm tracking-wide text-[#2A3B2C] underline-grow"
              >
                {n.label}
              </a>
            ) : (
              <Link
                key={n.label}
                data-testid={`nav-${n.label.toLowerCase()}`}
                to={n.to}
                className="text-sm tracking-wide text-[#2A3B2C] underline-grow"
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            data-testid="header-order-btn"
            to="/menu"
            className="inline-flex items-center justify-center rounded-sm bg-[#C85A32] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#D96B43] transition-colors"
          >
            Order Online
          </Link>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2 text-[#2A3B2C]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="md:hidden bg-[#FAF9F6] border-t border-[#E6E1D8]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) =>
              n.to.includes("#") ? (
                <a
                  key={n.label}
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                  href={n.to}
                  onClick={(e) => handleNav(e, n.to)}
                  className="text-base text-[#2A3B2C]"
                >
                  {n.label}
                </a>
              ) : (
                <Link
                  key={n.label}
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#2A3B2C]"
                >
                  {n.label}
                </Link>
              )
            )}
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              data-testid="mobile-order-btn"
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-[#C85A32] px-5 py-3 text-sm font-medium text-white"
            >
              Order Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

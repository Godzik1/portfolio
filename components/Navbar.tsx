"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#uslugi", label: "Oferta" },
  { href: "#portfolio", label: "Realizacje" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-gradient">
            <Globe className="w-5 h-5 text-indigo-400" />
            wizytówki.dev
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                {link.label}
              </a>
            ))}
            <a href="#kontakt"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Bezpłatna wycena
            </a>
          </div>

          <button className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-b border-slate-800">
          <div className="px-4 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
                onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#kontakt"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors text-center"
              onClick={() => setIsOpen(false)}>
              Bezpłatna wycena
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

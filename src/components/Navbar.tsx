"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/amenities", label: "Amenities" },
  { href: "/contacts", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg shadow-rose-100/40 border-rose-100/80 py-2" : "bg-white/70 border-transparent py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md ring-1 ring-rose-100">
            <Image src="/images/Gorgeouslogo.png" alt="Gorgeous Beauty Parlour" width={40} height={40} className="h-9 w-auto object-contain" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.32em] uppercase text-gray-900">Gorgeous</span>
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-rose-500">Beauty Parlour</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 hover:text-rose-700 ${
                pathname === link.href ? "text-rose-700 border-b-2 border-rose-500 pb-1" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacts"
            className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold tracking-[0.24em] uppercase px-7 py-2.5 rounded-full transition-colors duration-200 shadow-lg shadow-rose-200/50"
          >
            Book Now
          </Link>
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-rose-100 px-4 py-5 flex flex-col gap-4 shadow-lg rounded-b-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-xs font-semibold tracking-[0.2em] uppercase ${pathname === link.href ? "text-rose-700" : "text-gray-700"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacts"
            onClick={() => setOpen(false)}
            className="bg-rose-600 text-white text-xs font-semibold tracking-[0.24em] uppercase px-5 py-2.5 rounded-full text-center shadow-lg shadow-rose-200/50"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}

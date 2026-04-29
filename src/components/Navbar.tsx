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
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-pink-100/60 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md py-2" : "bg-white/80 py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/Gorgeouslogo.png" alt="Gorgeous Beauty Parlour" width={120} height={50} className="h-12 w-auto object-contain" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-200 hover:text-pink-600 ${pathname === link.href ? "text-pink-600 border-b-2 border-pink-600 pb-1" : "text-gray-700"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacts" className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors duration-200">
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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-semibold tracking-wider uppercase ${pathname === link.href ? "text-pink-600" : "text-gray-700"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

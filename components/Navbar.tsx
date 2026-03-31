"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#why-us", label: "Why Us" },
  { href: "/colors", label: "Colors & Finishes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#quote", label: "Get Quote" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Eagle Concrete Coatings LLC Logo"
              width={50}
              height={50}
              className="w-auto h-12"
              priority
            />
            <span className="text-lg sm:text-xl font-bold text-navy-800">
              Eagle Concrete Coatings LLC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-accent-600 font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9527697905"
              className="btn-primary text-sm px-4 py-2"
            >
              <Phone className="w-4 h-4" />
              (952) 769-7905
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy-800"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="section-container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 hover:text-accent-600 font-semibold py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9527697905"
              className="btn-primary w-full text-center mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Now — (952) 769-7905
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

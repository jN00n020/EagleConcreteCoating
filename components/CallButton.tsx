"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:9527697905"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-5 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 group"
      aria-label="Call Eagle Concrete Coatings"
    >
      <Phone className="w-6 h-6 animate-pulse group-hover:animate-none" />
      <span className="hidden sm:inline text-lg">Call Now</span>
    </a>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Colors & Finishes | Eagle Concrete Coatings LLC",
  description:
    "Browse our premium selection of decorative flake colors and patterns for your polyurea concrete coating project.",
};

const colors = [
  { name: "Tidal Wave", file: "tidal_wave.png" },
  { name: "Creekbed", file: "creekbed.png" },
  { name: "Morel", file: "morel.png" },
  { name: "Gravel", file: "gravel.png" },
  { name: "Cabin Fever", file: "cabin_fever.png" },
  { name: "Kalahari", file: "kalahari.png" },
  { name: "Wombat", file: "wombat.png" },
  { name: "Domino", file: "domino.png" },
  { name: "Woodland", file: "woodland.png" },
  { name: "Rocky Ridge", file: "rocky_ridge.png" },
  { name: "Blue Heron", file: "blue_heron.png" },
  { name: "Stonehenge", file: "stonehenge.png" },
];

export default function ColorsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="section-container text-center text-white">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-navy-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Colors &amp; <span className="text-accent-400">Finishes</span>
          </h1>
          <p className="text-lg text-navy-100 max-w-2xl mx-auto">
            Choose from our premium selection of decorative flake colors and
            patterns. Click any color to request a free quote!
          </p>
        </div>
      </section>

      {/* Color Grid */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {colors.map((color) => (
              <Link
                key={color.name}
                href={`/?color=${encodeURIComponent(color.name)}#quote`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-accent-400 cursor-pointer"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={`/floor-samples/${color.file}`}
                    alt={color.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent-600/0 group-hover:bg-accent-600/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                      Get a Quote
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white group-hover:bg-accent-50 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-gray-900 text-center">
                    {color.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent-700 via-accent-600 to-accent-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Love a color? Let&apos;s get started!
          </h2>
          <p className="text-white/80 mb-6">
            Click any color above to request a quote, or call us to see samples in person.
          </p>
          <a
            href="tel:9527697905"
            className="inline-flex items-center gap-3 bg-white text-accent-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-2xl hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            (952) 769-7905
          </a>
        </div>
      </section>
    </>
  );
}

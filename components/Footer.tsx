import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg p-2">
                <Image
                  src="/logo.svg"
                  alt="Eagle Concrete Coatings LLC Logo"
                  width={40}
                  height={40}
                  className="w-auto h-10"
                />
              </div>
              <h4 className="text-xl font-bold">Eagle Concrete Coatings LLC</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Locally owned, licensed &amp; insured. Professional concrete coating
              services with superior quality and lifetime durability. Serving all
              of South Metro Minnesota.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/colors" className="hover:text-white transition-colors">
                  Colors &amp; Finishes
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="hover:text-white transition-colors">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:9527697905" className="hover:text-white transition-colors">
                  (952) 769-7905
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:eagleconcretecoatingsl.l.c@gmail.com"
                  className="hover:text-white transition-colors text-sm"
                >
                  eagleconcretecoatingsl.l.c@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>South Metro Minnesota</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8 text-center text-gray-400">
          <p>&copy; {year} Eagle Concrete Coatings LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

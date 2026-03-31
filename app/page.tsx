import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Clock,
  Sparkles,
  Star,
  ShieldCheck,
  Award,
  MapPin,
  CircleCheckBig,
  Quote,
  Mail,
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import QuoteForm from "@/components/QuoteForm";
import ServiceAreaMap from "@/components/ServiceAreaMap";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute inset-0 bg-[url('/logo.svg')] bg-center opacity-[0.03] bg-no-repeat bg-contain" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />

        <div className="relative section-container">
          <div className="text-center text-white">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.svg"
                alt="Eagle Concrete Coatings LLC"
                width={280}
                height={140}
                className="w-64 sm:w-80 h-auto drop-shadow-2xl"
                priority
              />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              High-Performance
              <br />
              <span className="text-accent-400">Concrete Coating Solutions</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-100 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Upgrade your floors with industrial-grade polyurea coatings designed
              to withstand heavy use while looking flawless. Professionally
              installed, our systems deliver unmatched durability and a pristine
              finish that lasts for years.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="tel:9527697905"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent-600 text-white hover:bg-accent-700 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-200 shadow-2xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                (952) 769-7905
              </a>
              <Link
                href="/gallery"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <MapPin className="w-5 h-5 text-accent-400" />
                <span className="font-semibold text-sm">Locally Owned</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-accent-400" />
                <span className="font-semibold text-sm">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <Award className="w-5 h-5 text-accent-400" />
                <span className="font-semibold text-sm">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why-us" className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Why Choose <span className="text-accent-600">Eagle Concrete Coatings</span>?
            </h2>
            <p className="section-subtitle">
              We deliver exceptional results with industry-leading materials and
              expert craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Installation",
                desc: "Professional coating application completed in just one day with minimal disruption to your routine.",
              },
              {
                icon: Sparkles,
                title: "Beautiful Finishes",
                desc: "Wide selection of colors and finishes to match your style and space perfectly.",
              },
              {
                icon: Star,
                title: "Expert Service",
                desc: "Certified professionals with years of experience in residential and commercial projects.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-accent-50 rounded-lg flex items-center justify-center mb-5">
                  <card.icon className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COATING SYSTEM ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Coating System</h2>
            <p className="section-subtitle">
              Enhance your space with our premium coating option, designed
              specifically for your needs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl p-8 bg-navy-50 shadow-lg border border-navy-100">
              <h3 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-8 text-center">
                Polyurea Chip System
              </h3>
              <ul className="space-y-4">
                {[
                  "Decorative color flake patterns",
                  "Excellent slip resistance",
                  "Hides floor imperfections",
                  "Superior flexibility and strength",
                  "Extreme chemical resistance",
                  "UV stable and won't yellow",
                  "Perfect for garages and patios",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER SLIDER ── */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">See the Transformation</h2>
            <p className="section-subtitle">
              Drag the slider to see the dramatic difference our concrete coating
              makes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <BeforeAfterSlider
              beforeSrc="/projects/before-after/garage-before-01.png"
              afterSrc="/projects/before-after/garage-after-01.png"
              beforeAlt="Garage floor before coating"
              afterAlt="Garage floor after polyurea coating"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BeforeAfterSlider
                beforeSrc="/projects/before-after/garage-before-02.png"
                afterSrc="/projects/before-after/garage-after-02.png"
                beforeAlt="Floor before coating"
                afterAlt="Floor after polyurea coating"
              />
              <BeforeAfterSlider
                beforeSrc="/projects/before-after/garage-before-03.png"
                afterSrc="/projects/before-after/garage-after-03.png"
                beforeAlt="Floor before coating"
                afterAlt="Floor after polyurea coating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Customer Reviews</h2>
            <p className="section-subtitle">
              See what our satisfied customers have to say about our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Colton exceeded expectations at a high professional level from our first meeting throughout the whole process. All questions were addressed and his knowledge of the product and process was impressive! His hard work ethic really showed through and I'm thankful I went through Eagle Concrete Coatings! I would recommend them to anyone wanting a garage floor needing cracks repaired and coated!",
                name: "Anonymous",
                location: "Apple Valley, MN",
              },
              {
                text: "We hired Colton and his crew to install a new polyurea system on our garage floor. They were a professional crew from quoting the project through final clean up, and the floor system they installed is amazing. It is nearly a year old and it looks just as great today as it did when it was installed. We would proudly recommend Colton and his crew to anyone looking to transform their garage floor from an old, cracked up slab to a fully finished, polyurea painted floor that looks more like it belongs in the house than the garage!",
                name: "Josh Ripplinger",
                location: "Lakeville, MN",
              },
              {
                text: "Colton and team did a phenomenal job. We are extremely happy with how well the garage floor turned out. The professionalism and knowledge Colton brings to his customers is second to none. We have already given his information to 6-7 potential clients. Well done Eagle Concrete Coatings",
                name: "Erik Gunderson",
                location: "Lakeville, MN",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-accent-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent-700 via-accent-600 to-accent-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Floors?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-6">
            Get a free consultation and quote for your concrete coating project
            today
          </p>
          <a
            href="tel:9527697905"
            className="inline-flex items-center gap-3 bg-white text-accent-700 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-200 shadow-2xl hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now — (952) 769-7905
          </a>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote" className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Get a Free Quote
          </h2>
          <QuoteForm />
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section id="contact" className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Get in touch with us for your concrete coating needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:9527697905"
                className="text-accent-600 hover:text-accent-700 font-medium text-lg"
              >
                (952) 769-7905
              </a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:eagleconcretecoatingsl.l.c@gmail.com"
                className="text-accent-600 hover:text-accent-700 font-medium break-all"
              >
                eagleconcretecoatingsl.l.c@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Area</h3>
              <p className="text-gray-600">All of South Metro Minnesota</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA MAP ── */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Service Area</h2>
            <p className="section-subtitle">
              Proudly serving residential and commercial customers across the
              South Metro
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ServiceAreaMap />
          </div>
        </div>
      </section>
    </>
  );
}

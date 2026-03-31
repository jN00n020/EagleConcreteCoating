import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Gallery | Eagle Concrete Coatings LLC",
  description:
    "View our portfolio of completed concrete coating installations across the South Metro Minnesota area.",
};

const projects = [
  { file: "project-01.png", alt: "Concrete coating project 1" },
  { file: "project-02.png", alt: "Concrete coating project 2" },
  { file: "project-03.png", alt: "Concrete coating project 3" },
  { file: "project-05.png", alt: "Concrete coating project 5" },
  { file: "project-07.png", alt: "Concrete coating project 7" },
  { file: "project-08.png", alt: "Concrete coating project 8" },
  { file: "project-10.png", alt: "Concrete coating project 10" },
  { file: "project-12.png", alt: "Concrete coating project 12" },
];

const beforeAfter = [
  {
    before: "garage-before-01.png",
    after: "garage-after-01.png",
    title: "Garage Floor Transformation",
    desc: "From worn concrete to professional polyurea finish",
  },
  {
    before: "garage-before-02.png",
    after: "garage-after-02.png",
    title: "Front Staircase Coating",
    desc: "Beautiful decorative flake finish with superior protection",
  },
  {
    before: "garage-before-03.png",
    after: "garage-after-03.png",
    title: "Complete Floor Makeover",
    desc: "Durable polyurea coating with stunning visual appeal",
  },
  {
    before: "garage-before-04.png",
    after: "garage-after-04.png",
    title: "Stunning Garage Transformation",
    desc: "Premium polyurea coating with exceptional durability",
  },
];

export default function GalleryPage() {
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
            Project <span className="text-accent-400">Gallery</span>
          </h1>
          <p className="text-lg text-navy-100 max-w-2xl mx-auto">
            View our portfolio of completed concrete coating installations
            across the South Metro Minnesota area.
          </p>
        </div>
      </section>

      {/* Before & After */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Before &amp; After Transformations</h2>
            <p className="section-subtitle">
              See the dramatic difference our concrete coating services make
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfter.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative aspect-square">
                    <Image
                      src={`/projects/before-after/${item.before}`}
                      alt={`${item.title} - before`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-navy-900/70 p-2">
                      <p className="text-white font-bold text-center text-sm">
                        BEFORE
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={`/projects/before-after/${item.after}`}
                      alt={`${item.title} - after`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-accent-600/80 p-2">
                      <p className="text-white font-bold text-center text-sm">
                        AFTER
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              View our portfolio of completed concrete coating installations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.file}
                className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <Image
                  src={`/projects/gallery/${project.file}`}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent-700 via-accent-600 to-accent-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want results like these?
          </h2>
          <p className="text-white/80 mb-6">
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9527697905"
              className="inline-flex items-center justify-center gap-3 bg-white text-accent-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              (952) 769-7905
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

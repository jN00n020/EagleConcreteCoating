"use client";

export default function ServiceAreaMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div className="relative">
        <iframe
          title="Eagle Concrete Coatings Service Area — Minnesota"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180000!2d-93.2777!3d44.6497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1711800000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Lakeville pin overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-accent-200 mb-1">
            <p className="text-xs sm:text-sm font-bold text-navy-800 whitespace-nowrap">
              Based in Lakeville
            </p>
          </div>
          <div className="w-4 h-4 bg-accent-600 rounded-full border-2 border-white shadow-lg" />
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-accent-600 -mt-0.5" />
        </div>
      </div>
      <div className="bg-navy-800 text-white p-4 text-center">
        <p className="font-semibold text-lg">Proudly Serving Customers Across Minnesota</p>
        <p className="text-navy-200 text-sm mt-1">
          Based in Lakeville — serving Lakeville, Apple Valley, Burnsville, Eagan, Prior Lake, Savage, Farmington &amp; beyond
        </p>
      </div>
    </div>
  );
}

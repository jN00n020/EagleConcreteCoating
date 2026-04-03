"use client";

export default function ServiceAreaMap() {
  // Lakeville, MN coordinates: 44.6497, -93.2427
  // Map center: 44.6497, -93.2777 with zoom ~10
  // At this zoom/center, Lakeville sits roughly at 50% horizontal, 48% vertical
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div className="relative">
        <iframe
          title="Eagle Concrete Coatings — Service Area, Minnesota"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180000!2d-93.2427!3d44.6497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1711800000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Transparent overlay to block map interaction so pin stays aligned */}
        <div className="absolute inset-0 z-10" />

        {/* Red dot + label pinned to Lakeville's position */}
        <div
          className="absolute z-20 flex flex-col items-center pointer-events-none"
          style={{ top: "47%", left: "50%", transform: "translate(-50%, -100%)" }}
        >
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-accent-300 mb-1">
            <p className="text-xs sm:text-sm font-bold text-navy-800 whitespace-nowrap">
              Based in Lakeville
            </p>
          </div>
          {/* Pin */}
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-accent-600 rounded-full border-[3px] border-white shadow-lg" />
            <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] border-l-transparent border-r-transparent border-t-accent-600 -mt-1" />
          </div>
        </div>
      </div>

      <div className="bg-navy-800 text-white p-4 text-center">
        <p className="font-semibold text-lg">Proudly Serving Customers Across Minnesota</p>
        <p className="text-navy-200 text-sm mt-1">
          Based in Lakeville — serving Apple Valley, Burnsville, Eagan, Prior Lake, Savage, Farmington &amp; beyond
        </p>
      </div>
    </div>
  );
}

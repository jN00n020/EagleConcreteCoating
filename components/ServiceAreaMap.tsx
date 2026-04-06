"use client";

import dynamic from "next/dynamic";

// Leaflet must be loaded client-side only — it touches `window`
const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">
      Loading map…
    </div>
  ),
});

export default function ServiceAreaMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <InteractiveMap />
      <div className="bg-navy-800 text-white p-4 text-center">
        <p className="font-semibold text-lg">Proudly Serving Customers Across Minnesota</p>
        <p className="text-navy-200 text-sm mt-1">
          Based in Lakeville — serving Apple Valley, Burnsville, Eagan, Prior Lake, Savage, Farmington &amp; beyond
        </p>
      </div>
    </div>
  );
}

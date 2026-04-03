"use client";

export default function ServiceAreaMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <iframe
        title="Eagle Concrete Coatings — Based in Lakeville, Minnesota"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90000!2d-93.2777!3d44.6497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62e58c4e0b0a7%3A0x867e43145ef08024!2sLakeville%2C%20MN!5e0!3m2!1sen!2sus!4v1711800000000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="bg-navy-800 text-white p-4 text-center">
        <p className="font-semibold text-lg">Proudly Serving Customers Across Minnesota</p>
        <p className="text-navy-200 text-sm mt-1">
          Based in Lakeville — serving Apple Valley, Burnsville, Eagan, Prior Lake, Savage, Farmington &amp; beyond
        </p>
      </div>
    </div>
  );
}

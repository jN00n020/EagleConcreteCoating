"use client";

export default function ServiceAreaMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <iframe
        title="Eagle Concrete Coatings Service Area — South Metro Minnesota"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180000!2d-93.27!3d44.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="bg-navy-800 text-white p-4 text-center">
        <p className="font-semibold text-lg">Proudly Serving All of South Metro Minnesota</p>
        <p className="text-navy-200 text-sm mt-1">
          Lakeville, Apple Valley, Burnsville, Eagan, Prior Lake, Savage, Farmington &amp; surrounding areas
        </p>
      </div>
    </div>
  );
}

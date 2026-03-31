"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, X, Palette } from "lucide-react";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const color = searchParams.get("color");
    if (color) {
      setSelectedColor(color);
    }
  }, [searchParams]);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to a real form backend (e.g. Formspree, EmailJS, or API route)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-md text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
        <p className="text-gray-600">
          We&apos;ve received your request
          {selectedColor && (
            <> for the <span className="font-semibold text-accent-600">{selectedColor}</span> finish</>
          )}
          . Colton will be in touch shortly to discuss your project.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:border-accent-600 focus:ring-2 focus:ring-accent-200 focus:outline-none transition-all";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 sm:p-8 rounded-xl shadow-md"
    >
      {/* Selected color badge */}
      {selectedColor && (
        <div className="flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-lg px-4 py-3">
          <Palette className="w-5 h-5 text-accent-600 flex-shrink-0" />
          <span className="text-sm text-gray-700">
            Selected color: <span className="font-bold text-accent-700">{selectedColor}</span>
          </span>
          <button
            type="button"
            onClick={() => setSelectedColor(null)}
            className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Remove selected color"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Hidden field so color is included in form data */}
      {selectedColor && (
        <input type="hidden" name="selectedColor" value={selectedColor} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="sr-only">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            required
            name="firstName"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="sr-only">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            required
            name="lastName"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          required
          name="email"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="Phone #"
          required
          name="phone"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="city" className="sr-only">City</label>
        <input
          id="city"
          type="text"
          placeholder="City"
          required
          name="city"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="projectOverview" className="sr-only">Project Overview</label>
        <textarea
          id="projectOverview"
          name="projectOverview"
          placeholder="Tell us about your project..."
          rows={4}
          required
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full py-3.5 text-base"
      >
        <Send className="w-4 h-4" />
        Submit Request
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

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
          We&apos;ve received your request. Colton will be in touch shortly to discuss your project.
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

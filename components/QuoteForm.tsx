"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
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

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 sm:p-8 rounded-xl shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          required
          name="firstName"
          className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:border-accent-600 focus:ring-accent-200"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          name="lastName"
          className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:border-accent-600 focus:ring-accent-200"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        required
        name="email"
        className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:border-accent-600 focus:ring-accent-200"
      />
      <input
        type="tel"
        placeholder="Phone #"
        required
        name="phone"
        className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:border-accent-600 focus:ring-accent-200"
      />
      <input
        type="text"
        placeholder="City"
        required
        name="city"
        className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:border-accent-600 focus:ring-accent-200"
      />
      <textarea
        name="projectOverview"
        placeholder="Tell us about your project..."
        rows={4}
        required
        className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:border-accent-600 focus:ring-accent-200 resize-none"
      />
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

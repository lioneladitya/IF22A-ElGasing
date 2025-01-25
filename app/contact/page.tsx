"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null); // Reset error message

    try {
      console.log("Submitting data:", form);

      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("API Response Status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("API Error Response:", errorData);
        throw new Error(errorData.error || "Failed to send message.");
      }

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error:", error.message);
      setErrorMessage(error.message || "Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">Contact Us</h1>
      {errorMessage && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-900"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-900"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Type your message"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-900"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

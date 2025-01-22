"use client";
import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Why Lamskuyy",
    description: "-",
    link: "/help/getting-started",
    linkText: "Learn More",
  },
  {
    title: "FAQs",
    description:
      "Find answers to frequently asked questions about our services.",
    link: "/help/faqs",
    linkText: "Read FAQs",
  },
  {
    title: "Contact Support",
    description:
      "Need more help? Reach out to our support team for personalized assistance.",
    link: "/help/contact-support",
    linkText: "Contact Us",
  },
  {
    title: "Soon",
    description: "-",
    link: "/help/tips-and-tricks",
    linkText: "Explore Tips",
  },
];

const HelpPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center p-6">
      <Link href="/">
        <button className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded transition">
          Back to Home
        </button>
      </Link>
      <h1 className="text-4xl font-bold text-blue-600 mt-16 mb-8">
        Welcome to the Help Center
      </h1>
      <p className="text-lg text-center mb-8 max-w-2xl">
        Find a Destination that suits your needs!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {section.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{section.description}</p>
            <Link href={section.link} legacyBehavior>
              <a className="text-blue-500 hover:underline">
                {section.linkText}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;

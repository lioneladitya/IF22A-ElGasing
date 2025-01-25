import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lamskuyy",
  description: "Website Travelling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className={`${inter.className} relative`}>
        {/* Dekorasi Lingkaran */}
        <div
          id="home"
          className="circle-pink absolute h-screen w-screen lg:top-[-40%] lg:left-[-15%] md:left-[-20%] sm:top-[-50%] sm:left-[-25%] xs:top-[-50%] xs:right-[40%]"
        />
        <div className="circle-yellow absolute h-screen w-screen xl:top-[110%] left-[80%] sm:top-[180%]" />

        {/* Navbar */}
        <Navbar />

        {/* Konten Utama */}
        <Navbar />
        <hr className="border-t border-gray-700 my-4" />
        <main className="relative bg-gray-950 text-white overflow-x-hidden p-6 sm:p-10">
          {children}
        </main>
        <hr className="border-t border-gray-700 my-4" />
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

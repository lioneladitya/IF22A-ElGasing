"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    // Set tema awal berdasarkan localStorage atau default "light"
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="navbar bg-base-100 fixed top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <Image src="/lampung.png" alt="logo" width={40} height={40} />
          <h2 className="font-bold text-lg">LAMSKUY</h2>
        </div>

        {/* Middle Section */}
        <div className="hidden lg:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Toggle Theme */}
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-ghost"
            aria-label="Toggle Theme"
          >
            {document.documentElement.getAttribute("data-theme") === "dark"
              ? "🌞"
              : "🌙"}
          </button>

          <Link href="/help">
            <Button type="button" title="Help" variant="btn_white" />
          </Link>
          <Button type="button" title="Call Us" variant="btn_white" />
          <Link href="/admin/login">
            <Button type="button" title="Login Admin" variant="btn_purple" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden btn btn-sm btn-ghost"
            aria-label="Toggle Menu"
          >
            {navbarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="lg:hidden bg-base-200 shadow-lg py-4 px-6">
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-sm font-medium hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

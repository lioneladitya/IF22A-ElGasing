"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ScrollToTop from "./ScrollToTop";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [manualScroll, setManualScroll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tambahkan state login

  useEffect(() => {
    const handleScroll = () => {
      if (!manualScroll) {
        setScrolling(window.scrollY > 120);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualScroll]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setManualScroll(true);
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setManualScroll(false), 2000);
    }
    setNavbarOpen(false);
  };

  // Fungsi untuk logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Anda telah logout.");
  };

  return (
    <nav
      id="navbar"
      className={`${scrolling
        ? "w-full max-container padding-container flex justify-between py-3 fixed z-50 bg-gray-950/80 text-white"
        : " bg-gray-950 text-white"
        } max-container padding-container flex justify-between py-3`}
    >
      {/* Left Section */}
      <div className="left">
        <div
          onClick={() => handleScrollTo("home")}
          className="cursor-pointer flex items-center gap-2"
        >
          <Image src="/lampung.png" alt="logo" width={40} height={40} />
          <h2 className="font-bold text-lg">LAMSKUY</h2>
        </div>
      </div>

      {/* Middle Section (Desktop Menu) */}
      <div className="middle hidden lg:flex">
        <ul className="flex h-full gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Admin Link: Display based on login status */}
          {!isLoggedIn ? (
            <li>
              {/* <Link
                href="/admin/login"
                className="cursor-pointer transition-all hover:font-bold bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Login Admin
              </Link> */}
            </li>
          ) : (
            <li>
              <Link
                href="/admin/dashboard"
                className="cursor-pointer transition-all hover:font-bold text-white"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Right Section */}
      <div className="right hidden lg:flex gap-4">
        <Link href="/help">
          <Button type="button" title="Help" variant="btn_white" />
        </Link>
        <Button type="button" title="Call Us" variant="btn_white" />
        <Link href="/admin/login">
          <Button type="button" title="Login Admin" variant="btn_purple" />
        </Link>
      </div>


      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="text-white"
        >
          {navbarOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {navbarOpen && (
          <ul className="absolute right-0 top-12 bg-gray-950 text-white w-full flex flex-col items-center py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="py-2">
                <Link
                  href={link.href}
                  className="cursor-pointer transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Admin Link in Mobile Menu */}
            <li className="py-2">
              <Link
                href="/admin/login"
                className="cursor-pointer transition-all hover:font-bold"
              >
                {isLoggedIn ? "Dashboard" : "Login Admin"}
              </Link>
            </li>
          </ul>
        )}
      </div>
      <ScrollToTop />
    </nav>
  );
};

export default Navbar;

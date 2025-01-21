"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const Navbar = () => {
    
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <nav
      className={
        scrolling
          ? "w-full max-container padding-container flex justify-between py-3 fixed z-50 bg-gray-950/80 text-white"
          : " bg-gray-950 text-white max-container padding-container flex justify-between  py-3 "
      }
    >
      <div className="left">
        <Link href="/" className="flexCenter gap-2">
          <Image src="/lampung.png" alt="logo" width={40} height={40} />
          <h2 className="font-bold text-lg">LAMSKUY</h2>
        </Link>
      </div>


      <div className="middle hidden lg:flex">
        <ul className="flex h-full gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="flexCenter">
            <a
              href={link.href}
              className="cursor-pointer transition-all hover:font-bold"
            >
              {link.label}
            </a>
          </li>
          ))}
        </ul>

        {/*-------------- NAVBAR LINKS MOBILE -----------------*/}
        {navbarOpen ? (
          <ul className="lg:hidden sm:block flex flex-col">
            {NAV_LINKS.map((link) => (
              <li className="flexCenter cursor-pointer pb-2 transition-all hover:font-bold">
                <Link href={link.href} key={link.key}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="right hidden lg:flex gap-4">
        <Button type="button" title="Help" variant="btn_white" />
        <Button type="button" title="Call Us" variant="btn_purple" />
      </div>

      {/*-------------- MENU ICON MOBILE -----------------*/}
      <div className="block cursor-pointer lg:hidden">
        {!navbarOpen ? (
          <button onClick={() => setNavbarOpen(true)}>
            <Bars3Icon className="h-5 w-5" />
          </button>
        ) : (
          <button onClick={() => setNavbarOpen(false)}>
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Navbar Links - Mobile */}
      {navbarOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-950 lg:hidden">
          <ul className="flex flex-col items-start gap-4 p-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="block w-full py-2 transition-all hover:font-bold"
                  onClick={() => setNavbarOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;

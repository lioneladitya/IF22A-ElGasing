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
  const [manualScroll, setManualScroll] = useState(false);

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
      setManualScroll(true); // Cegah konflik selama scroll manual
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setManualScroll(false), 2000); // Reset state setelah scroll selesai
    }
    setNavbarOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`${
        scrolling
          ? "w-full max-container padding-container flex justify-between py-3 fixed z-50 bg-gray-950/80 text-white"
          : " bg-gray-950 text-white"
      } max-container padding-container flex justify-between  py-3`}
    >
      <div className="left">
        <a
          onClick={() => handleScrollTo("home")}
          className="cursor-pointer flex items-center gap-2"
        >
          <Image src="/lampung.png" alt="logo" width={40} height={40} />
          <h2 className="font-bold text-lg">LAMSKUY</h2>
        </a>
      </div>
      <div className="middle hidden lg:flex">
        <ul className="flex h-full gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                onClick={() => handleScrollTo(link.href.substring(1))}
                className="cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="right hidden lg:flex gap-4">
        <Link href="/help">
          <Button type="button" title="Help" variant="btn_white" />
        </Link>
        <Button type="button" title="Call Us" variant="btn_purple" />
      </div>
    </nav>
  );
};

export default Navbar;

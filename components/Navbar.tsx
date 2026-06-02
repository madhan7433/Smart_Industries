"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo1.png"
            alt="Smart Industries Logo"
            width={40}
            height={40}
            priority
          />

          <div>
            <h1
              className={`text-2xl font-bold transition ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              SMART INDUSTRIES
            </h1>

            <p
              className={`text-sm transition ${
                scrolled ? "text-gray-500" : "text-gray-200"
              }`}
            >
              Precision Engineering Solutions
            </p>
          </div>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {["About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition ${
                scrolled
                  ? "text-slate-700 hover:text-orange-500"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {item}
            </a>
          ))}

          <a
            href="tel:+918760308318"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
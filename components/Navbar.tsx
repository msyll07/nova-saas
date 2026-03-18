"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* NAV CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16 mt-4 px-4 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-sm">
          
          {/* LOGO */}
          <Link href="/" className="text-lg font-bold text-purple-600 tracking-tight">
            NOVA
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-slate-600 hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#cta"
              className="bg-purple-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-purple-700 transition shadow"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 mx-4 bg-white border border-slate-200 rounded-2xl shadow-lg p-6 space-y-6"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-purple-600"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#cta"
            onClick={() => setOpen(false)}
            className="block text-center bg-purple-600 text-white py-3 rounded-xl font-semibold"
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </header>
  );
}
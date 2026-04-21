"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Properties", href: "/properties" },
  { name: "Buy", href: "/buy" },
  { name: "Rent", href: "/rent" },
  { name: "Lease", href: "/lease" },

];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen ? "bg-navy-950/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-14 py-5">
        {/* ── LOGO ── */}
        <div className="cursor-pointer">
          <div className="font-display text-white">
            <div className="text-xl md:text-2xl leading-none font-semibold tracking-tight">
              FORTUNE ASIA
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="block h-px w-4 md:w-5 bg-gold-400"></span>
              <span className="text-[10px] tracking-[0.25em] font-sans font-medium text-white/60">
                REALTY
              </span>
              <span className="block h-px w-4 md:w-5 bg-gold-400"></span>
            </div>
          </div>
        </div>

        {/* ── DESKTOP NAV ── */}
        <ul className="hidden lg:flex items-center gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[12.5px] py-1 font-medium tracking-[0.25em] text-white uppercase hover:text-gold-400 transition-colors duration-300 relative group"
              >
                {link.name}
                {/* Center-out underline hover effect */}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CONTACT US (Desktop) ── */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="text-[9.5px] font-bold rounded-lg tracking-[0.3em] text-white uppercase border border-gold-400/70 px-7 py-3.5 hover:bg-gold-400 hover:text-navy-950 transition-all duration-500 shadow-lg shadow-gold-400/10"
          >
            Contact Us
          </Link>
        </div>

        {/* ── MOBILE TOGGLE ── */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-950 fixed inset-0 top-[80px] z-40 px-8 py-12"
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-white hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <Link
                  href="#"
                  className="inline-block text-[11px] font-bold tracking-[0.3em] text-gold-400 uppercase border border-gold-400 px-8 py-4 rounded-lg"
                >
                  Contact Us Now
                </Link>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

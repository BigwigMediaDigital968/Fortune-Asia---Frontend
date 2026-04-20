"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Tab = "buy" | "rent" | "offplan";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [tab, setTab] = useState<Tab>("buy");

  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85",
      label: "Downtown Dubai",
      headline: "Find Your",
      highlight: "Dream Home",
      sub: "in Dubai",
    },
    {
      img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=85",
      label: "Palm Jumeirah",
      headline: "Luxury Living",
      highlight: "Redefined",
      sub: "Across Dubai",
    },
    {
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=85",
      label: "Dubai Marina",
      headline: "Invest in",
      highlight: "Your Future",
      sub: "with Confidence",
    },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[640px] max-h-[900px] overflow-hidden bg-navy-900">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={slide.img}
            alt={slide.label}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-navy-950/50 to-navy-950/85" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pb-12 lg:pb-16">
        {/* Location pill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${current}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-white/70 text-xs font-sans tracking-widest uppercase">
              {slide.label}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Headline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`head-${current}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1
              className="font-display text-white leading-none font-semibold"
              style={{
                fontSize: "clamp(3rem,7vw,5.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {slide.headline}{" "}
              <em className="text-gold-300 not-italic">{slide.highlight}</em>
              <br />
              <span className="text-white/70">{slide.sub}</span>
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl"
        >
          {/* Tabs */}
          <div className="flex gap-1 mb-0">
            {(["buy", "rent", "offplan"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase rounded-t transition-all duration-200 ${
                  tab === t
                    ? "bg-white text-navy-900"
                    : "bg-navy-900/50 text-white/70 hover:bg-navy-900/70 hover:text-white"
                }`}
              >
                {t === "offplan"
                  ? "Off-Plan"
                  : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="bg-white rounded-b rounded-tr p-2 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Search by community, developer or property type…"
              className="flex-1 px-4 py-3 text-sm font-sans text-navy-900 placeholder-charcoal-400 outline-none bg-transparent"
            />
            <div className="flex gap-2">
              <select className="px-3 py-3 text-sm font-sans text-navy-900 outline-none bg-off-white rounded border border-border cursor-pointer">
                <option>Any Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Townhouse</option>
              </select>
              <button className="px-6 py-3 bg-navy-900 text-white text-xs font-sans font-semibold tracking-widest uppercase rounded hover:bg-navy-800 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* Slide dots */}
        <div className="flex gap-2 mt-6">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-300 ${i === current ? "w-8 bg-gold-400" : "w-4 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

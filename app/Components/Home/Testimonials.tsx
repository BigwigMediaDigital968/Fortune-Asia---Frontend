"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionLabel from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials2 = [
  { id: 1, name: "Michael", role: "MDS Manufacturing", text: "The level of professionalism was unparalleled. We found our dream office within a week.", initials: "M" },
  { id: 2, name: "Diane", role: "ABC Rentals", text: "Exquisite taste and attention to detail. Every property was a masterpiece.", initials: "D" },
  { id: 3, name: "Allison", role: "Grand Party Rental", text: "Seamless transaction from start to finish. The team handled everything with grace.", initials: "A" },
  { id: 4, name: "Robert", role: "Tech Horizons", text: "A truly bespoke experience. They found us a community that fits our lifestyle.", initials: "R" },
  { id: 5, name: "Sarah", role: "Global Luxe", text: "Their understanding of the luxury market is unmatched in the region.", initials: "S" },
  { id: 1, name: "Michael", role: "MDS Manufacturing", text: "The level of professionalism was unparalleled. We found our dream office within a week.", initials: "M" },
  { id: 2, name: "Diane", role: "ABC Rentals", text: "Exquisite taste and attention to detail. Every property was a masterpiece.", initials: "D" },
  { id: 3, name: "Allison", role: "Grand Party Rental", text: "Seamless transaction from start to finish. The team handled everything with grace.", initials: "A" },
  { id: 4, name: "Robert", role: "Tech Horizons", text: "A truly bespoke experience. They found us a community that fits our lifestyle.", initials: "R" },
  { id: 5, name: "Sarah", role: "Global Luxe", text: "Their understanding of the luxury market is unmatched in the region.", initials: "S" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#D4A435">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  //const CARD_WIDTH = 400; // matching your w-[400px]
  const GAP = 20; // approximate gap from your padding/flex

  const maxIndex = testimonials2.length - 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current?.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="relative w-full mx-auto">
        <div className="w-full h-full absolute">
          <Image
            className="w-full h-full object-cover brightness-[0.3]"
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
            alt="Testimonial"
            fill
          />
        </div>

        <div
          className="relative bg-navy-950/30 p-5 md:p-10 md:py-24 border border-white/5 shadow-2xl overflow-hidden backdrop-blur-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Decorative Quote Mark */}
          <div className="absolute left-10 top-10 text-white/5 pointer-events-none">
            <Quote size={200} fill="currentColor" stroke="none" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── LEFT HEADING ── */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Connect with <br /> <span className="text-gold-400">other members</span>
              </h2>
              <p className="text-white/60 font-light mb-8 max-w-sm leading-relaxed">
                Hear from the visionary leaders who have redefined their living standards through our bespoke services.
              </p>
              <button className="border border-gold-400/50 hover:bg-gold-400 hover:text-navy-950 transition-all duration-500 rounded-full py-3 px-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white group cursor-pointer">
                Connect now
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* ── RIGHT CAROUSEL TRACK ── */}
            <div className="lg:col-span-8 relative">
              <div className="overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                  className="flex"
                  animate={{
                    // Prevents moving beyond the last card's position
                    x: `-${currentIndex * cardWidth}px`
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  {testimonials2.map((item, idx) => (
                    <div key={item.id + "testemonials"}
                      ref={idx === 0 ? cardRef : null} className="w-[85vw] sm:w-[400px] px-4 shrink-0">
                      {/* GLOSSY CARD DESIGN */}
                      <div className="relative group w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-5 md:p-10 flex flex-col shadow-2xl h-[320px] transition-all duration-500 hover:bg-white/15">

                        {/* Profile Circle */}
                        <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center mb-6 shadow-lg shadow-gold-400/20">
                          <span className="text-xl font-bold text-navy-950">{item.initials}</span>
                        </div>

                        <div className="relative mb-6 flex-grow">
                          <Quote size={24} className="text-gold-400/30 absolute -top-2 -left-2" fill="currentColor" stroke="none" />
                          <p className="text-white/80 text-sm leading-relaxed italic relative z-10 font-light">
                            "{item.text}"
                          </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-end">
                          <div>
                            <h4 className="font-bold text-white tracking-wide">{item.name}</h4>
                            <p className="text-[10px] text-gold-400 uppercase tracking-[0.2em] font-medium">{item.role}</p>
                          </div>
                          <div className="flex gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-1 h-1 bg-gold-400 rounded-full shadow-[0_0_8px_rgba(212,164,53,0.8)]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ── CONTROLS ── */}
              <div className="flex justify-between items-center mt-12 px-4">
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 disabled:opacity-20"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full bg-white text-navy-900 flex items-center justify-center hover:bg-gold-400 transition-all duration-300 shadow-xl"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Progressive Dots */}
                <div className="flex gap-3">
                  {testimonials2.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? "w-12 bg-gold-400" : "w-3 bg-white/10 hover:bg-white/30"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

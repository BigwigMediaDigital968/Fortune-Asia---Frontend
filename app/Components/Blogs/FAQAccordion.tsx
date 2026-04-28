"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Star } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  _id: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 bg-navy-950 selection:bg-gold-400/30 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* PREMIUM HEADER */}
        <div className=" mb-10 relative">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="text-gold-400 italic">Questions</span>
          </h2>
        </div>

        {/* ACCORDION TRACK */}
        <div className="space-y-6">
          {items?.map((item, index) => {
            const isOpen = openId === item._id;

            return (
              <div
                key={item._id}
                className={`group border rounded-xl transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? "border-gold-400/20 bg-navy-900 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)]"
                    : "border-white/5 bg-navy-900/50 hover:border-gold-400/10 hover:bg-navy-900"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item._id)}
                  className="w-full flex items-center justify-between p-4 px-4 text-left"
                >
                  <div className="flex items-center gap-6">
                    {/* Number Identifier */}
                    <div className=" font-bold text-gold-400/80 uppercase tracking-[0.15em] font-display">
                      {String(index + 1).padStart(2, "0")}{" "}
                    </div>
                    {/* The Icon */}

                    <h3
                      className={`font-semibold text-lg transition-colors duration-500 ${
                        isOpen
                          ? "text-white"
                          : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* High-End Plus/Minus Icon */}
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? "border-gold-400 text-gold-400"
                        : "border-white/10 text-white/30 group-hover:border-gold-400/30 group-hover:text-gold-400"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pl-12 border-t border-white/5 mt-[-1px] pb-4">
                        {/* Answer Text */}
                        <div className="flex-grow">
                          <p className="text-white/60 text-base font-light leading-relaxed font-sans italic">
                            "{item.answer}" Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Adipisci, accusantium
                            eligendi. Totam.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

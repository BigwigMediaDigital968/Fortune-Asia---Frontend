"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionLabel, { SectionHeading } from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blogs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
      category: "Market Insight",
      date: "28 Mar 2025",
      title: "Dubai Real Estate Market Hits Record High in Q1 2025",
      excerpt:
        "Transaction volumes surged 34% year-on-year as global investors continue to see Dubai as a safe haven for capital.",
    },
    {
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      category: "Buying Guide",
      date: "20 Mar 2025",
      title: "The Complete Guide to Buying Off-Plan Property in Dubai",
      excerpt:
        "Everything you need to know about payment plans, developer reputation, and ROI potential in Dubai's booming off-plan sector.",
    },
    {
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      category: "Lifestyle",
      date: "14 Mar 2025",
      title: "Top 5 Communities for Families Moving to Dubai in 2025",
      excerpt:
        "From Dubai Hills to JVC — a curated guide to the best family-friendly neighbourhoods with schools, parks, and amenities.",
    },
  ];

  return (
    <section ref={ref} className="py-5 lg:py-10 mb-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={motionContainer}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div className="w-full">
            <motion.div variants={fadeUp}>
              <SectionHeading subtitle={"From the Blog"} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-white font-semibold mt-4 text-center"
              style={{
                fontSize: "clamp(2rem,4vw,3.25rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Market Insights &{" "}
              <em className="text-gold-400 not-italic">News</em>
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={motionContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {blogs.map((b) => (
            <motion.article
              key={b.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group border border-border rounded-2xl overflow-hidden bg-white cursor-pointer"
            >
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-500">
                    {b.category}
                  </span>
                  <span className="text-charcoal-300">·</span>
                  <span className="text-xs font-sans text-charcoal-400">
                    {b.date}
                  </span>
                </div>
                <h3 className="font-display text-navy-900 text-xl font-semibold leading-snug mb-3 group-hover:text-navy-700 transition-colors duration-200">
                  {b.title}
                </h3>
                <p className="font-sans text-charcoal-500 text-sm leading-relaxed line-clamp-2">
                  {b.excerpt}
                </p>
                <Link
                  href={"/blogs/5-science-backed-tips-to-conquer-insomnia"}
                  className="mt-5 flex items-center gap-1.5 text-xs font-sans font-semibold tracking-widest uppercase text-navy-900 group-hover:text-gold-500 transition-colors duration-200"
                >
                  Read More
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-12  cursor-pointer px-10 py-4 rounded-lg border border-white text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group hover:bg-white hover:text-navy-950 transition-all"
          >
            <Link href={"/blogs"} className="flex items-center gap-2">
              All Blogs
              <ArrowRight className="text-[9px] translate-y-[0.5px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

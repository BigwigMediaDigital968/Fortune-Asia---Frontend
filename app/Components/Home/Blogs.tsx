"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel, { SectionHeading } from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/app/lib/api";
import { formatDate } from "@/app/utils/dateFormat";

export default function Blogs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const {
    data: blogsResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["homeBlogs"],
    queryFn: getBlogs,
  });

  const blogs = blogsResponse?.data || blogsResponse || [];
  const displayBlogs = blogs.slice(0, 3);

  const renderSkeleton = (index: number) => (
    <motion.article
      key={`blog-skel-${index}`}
      variants={fadeUp}
      className="group border border-border rounded-xl overflow-hidden bg-white"
    >
      <div className="overflow-hidden aspect-16/10 bg-slate-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-4 w-2/5 rounded-full bg-slate-200 animate-pulse" />
        <div className="h-6 w-full rounded-full bg-slate-200 animate-pulse" />
        <div className="h-4 w-full rounded-full bg-slate-200 animate-pulse" />
        <div className="h-4 w-4/5 rounded-full bg-slate-200 animate-pulse" />
        <div className="h-8 w-1/3 rounded-full bg-slate-200 animate-pulse" />
      </div>
    </motion.article>
  );

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
          {isLoading || isError
            ? Array.from({ length: 3 })?.map((_, index) =>
                renderSkeleton(index),
              )
            : displayBlogs?.map((b: any) => (
              <Link href={`/blogs/${b.slug || ""}`} className="block max-w-[350px] mx-auto">
                <motion.article
                  key={b.slug || b.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group border border-border rounded-xl max-w-[350px] overflow-hidden bg-white cursor-pointer"
                >
                  <div className="overflow-hidden aspect-16/10 bg-slate-100">
                    <img
                      src={b.coverImage || b.image || b.img}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-500">
                        {b.author}
                      </span>
                      <span className="text-charcoal-300">·</span>
                      <span className="text-xs font-sans text-charcoal-400">
                        {formatDate(b.lastUpdated) || ""}
                      </span>
                    </div>
                    <h3 className="font-display text-navy-900 line-clamp-2 text-xl font-semibold leading-snug mb-3 group-hover:text-navy-700 transition-colors duration-200">
                      {b.title}
                    </h3>
                    <p className="font-sans text-charcoal-500 text-sm leading-relaxed line-clamp-3">
                      {b.excerpt ||
                        b.summary ||
                        "Read our latest insights on Dubai real estate."}
                    </p>
                    <Link
                      href={`/blogs/${b.slug || ""}`}
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
                </Link>
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

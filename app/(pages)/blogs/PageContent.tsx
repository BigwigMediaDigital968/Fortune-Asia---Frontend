"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "@/app/lib/properties";
import { fadeUp } from "@/app/utils/motion";
import { getBlogs } from "@/app/lib/api";
import BlogMiniCard from "@/app/Components/Blogs/BlogMiniCard";
import BlogCard from "@/app/Components/Blogs/BlogCard";
import Image from "next/image";
import { formatDate } from "@/app/utils/dateFormat";

const motionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PageContent() {
  const {
    data: blogs = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await getBlogs();
      console.log("Fetched Blogs from API:", res);
      return Array.isArray(res) ? res : (res.data ?? res);
    },
  });

  console.log("Fetched Blogs:", blogs);

  const featuredMain = blogs[0];
  const featuredSecondary = blogs.slice(1, 5);
  const regularBlogs = blogs.slice(5);

  return (
    <>
      <section className="mt-20 max-w-7xl mx-auto px-6 md:px-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-24">
          {/* Main Featured (Left) */}
          <div className="w-full lg:w-[60%] ">
            <Link href={`/blogs/${featuredMain?.slug}`}>
              <motion.article
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                // We make the whole card relative and set the background with Next.js Image fill
                className="group relative w-full aspect-[16/12]  flex flex-col bg-navy-950 rounded-3xl overflow-hidden hover:border hover:border-gold-400/30 transition-all duration-500 shadow-xl"
              >
                {/* ── BACKGROUND IMAGE TRACK (Absolute Fill) ── */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={featuredMain?.coverImage || featuredMain?.image}
                    alt={featuredMain?.title}
                    fill
                    // Matches the luxury aspect ratio
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-w-768px) 100vw, 1200px"
                  />

                  {/* Number Overlay (if exists) */}
                  {featuredMain?.number && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white font-display text-[10px] font-bold">
                      #{featuredMain?.number}
                    </div>
                  )}

                  {/* DYNAMIC OVERLAY: Changes on hover from partial to full overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent opacity-100 group-hover:bg-navy-950/80 transition-all duration-700 z-10" />
                </div>

                {/* ── CONTENT (Layered over z-10 overlay) ── */}
                {/* Absolute layout allows content to fill the card */}
                <div className="relative z-20 p-8 md:p-10 flex flex-col flex-1 h-full">
                  {/* Top: Category Tag */}
                  <div className="flex items-center gap-3 mb-4 mt-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                      {featuredMain?.category}
                    </span>
                  </div>

                  {/* Title (Stays aligned top) */}
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-gold-400 transition-colors">
                    {featuredMain?.title}
                  </h3>

                  {/* Excerpt (Dims subtly) */}
                  {featuredMain?.excerpt && (
                    <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-6 line-clamp-3">
                      {featuredMain?.excerpt}
                    </p>
                  )}

                  {/* Bottom Footer (Pushed to base with mt-auto) */}
                  <div className=" flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-medium uppercase tracking-[0.15em]">
                      <span>{formatDate(featuredMain?.date)}</span>
                    </div>

                    {/* Read Story Action */}
                    <span className="text-gold-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                      Read Story
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          </div>

          {/* Secondary Featured (Right Sidebar) */}
          <div className="w-full lg:w-[40%] flex flex-col gap-2">
            <div className="px-4 mb-4">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] border-l-2 border-gold-400 pl-4">
                Most Popular This Month
              </span>
            </div>
            <div className="space-y-2">
              {featuredSecondary.map((blog: any, idx: number) => (
                <BlogMiniCard key={blog.id} blog={blog} index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Regular Listing Grid */}
        <div className="relative">
          <div className="flex items-center gap-6 mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-display font-light text-white leading-tight">
              Latest{" "}
              <span className="text-gold-400 font-serif italic">Articles</span>
            </h2>
            <div className="flex-1 h-px bg-white/10 hidden md:block" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={motionContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularBlogs.map((blog: any, index: number) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-24 flex justify-center">
          <button className="px-12 py-5 bg-navy-900 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-all duration-300 shadow-xl cursor-pointer">
            Load More Articles
          </button>
        </div>
      </section>
    </>
  );
}

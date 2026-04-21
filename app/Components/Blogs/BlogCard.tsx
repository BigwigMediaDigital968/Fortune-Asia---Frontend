"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp } from "@/app/utils/motion";

export interface BlogEntry {
    id: string;
    slug: string;
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt?: string;
    featured?: boolean;
    number?: string;
}

interface BlogCardProps {
    blog: BlogEntry;
    index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
    return (
        <Link href={`/blogs/${blog.slug}`} className="block h-full">
            <motion.article
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col h-full bg-navy-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-gold-400/30 transition-all duration-500"
            >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Number Overlay (if exists) */}
                    {blog.number && (
                        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white font-display text-[10px] font-bold">
                            #{blog.number}
                        </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                            {blog.category}
                        </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-gold-400 transition-colors">
                        {blog.title}
                    </h3>

                    {blog.excerpt && (
                        <p className="text-white/40 text-sm font-sans font-light leading-relaxed mb-6 line-clamp-2">
                            {blog.excerpt}
                        </p>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-white/40 text-[10px] font-medium uppercase tracking-[0.15em]">
                            <span>{blog.date}</span>
                        </div>

                        <span className="text-gold-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                            Read Story
                        </span>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}

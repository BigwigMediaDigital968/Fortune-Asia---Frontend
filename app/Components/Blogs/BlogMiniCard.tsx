"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogEntry } from "./BlogCard";
import { fadeUp } from "@/app/utils/motion";

interface BlogMiniCardProps {
    blog: BlogEntry;
    index: number;
}

export default function BlogMiniCard({ blog, index }: BlogMiniCardProps) {
    return (
        <Link href={`/blogs/${blog.slug}`}>
            <motion.article
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="group flex gap-5 items-center p-2 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 cursor-pointer"
            >
                {/* Thumbnail */}
                <div className="relative flex-shrink-0 w-24 md:w-28 aspect-[16/12] rounded-xl overflow-hidden border border-white/5">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">

                    <h4 className="text-sm md:text-base font-display font-semibold text-white group-hover:text-gold-400 transition-colors line-clamp-2 leading-snug">
                        {blog.title}
                    </h4>

                    <div className="flex items-center gap-2 text-[10px] text-white/30 font-medium uppercase tracking-widest">
                        <span>{blog.date}</span>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Developer } from "@/app/types";

interface DeveloperCardProps {
  developer: Developer;
  index: number;
}

export default function DeveloperCard({
  developer,
  index,
}: DeveloperCardProps) {
  console.log("Rendering DeveloperCard:", developer);

  const href = `/developers/${developer?.slug}`;
  const image =
    developer?.coverImage ||
    developer?.logo ||
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920";
  const title = developer?.name;
  const desc = developer?.shortDescription;

  return (
    <motion.a
      key={`dev-${index}`}
      href={href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[500px] text-left w-full w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1rem)] overflow-hidden bg-navy-900 border border-white/5 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 border-y-2 border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-700 z-30" />
      <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
        <div className="transition-transform duration-500 ease-out transform translate-y-[120px] group-hover:translate-y-0">
          <h3 className="text-white text-2xl capitalize font-display font-bold mb-6 tracking-tight group-hover:text-gold-400 transition-colors">
            {title}
          </h3>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <p className="text-white/60 text-base leading-relaxed mb-8 font-light line-clamp-3">
              {desc}
            </p>
            <button className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.3em] group/btn">
              <span className="border-b border-gold-500/30 group-hover/btn:border-gold-500 transition-all pb-1">
                View Developer Profile
              </span>
              <ArrowUpRight
                size={16}
                className="text-gold-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.a>
  );
}

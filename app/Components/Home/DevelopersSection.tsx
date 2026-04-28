"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getDevelopers } from "@/app/lib/api";

const DevelopersSection = () => {
  const {
    data: developersResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["developers"],
    queryFn: getDevelopers,
  });

  const developers = developersResponse?.data || developersResponse || [];
  const skeletonCount = 3;

  const renderDeveloperCard = (dev: any, index: number) => {
    const title = dev?.name || dev?.title || "Developer";
    const desc =
      dev?.shortDescription ||
      dev?.fullDescription ||
      "Premium development partner shaping luxury experiences.";
    const image =
      dev?.logo ||
      dev?.coverImage ||
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800";
    const href = dev?.slug ? `/developers/${dev.slug}` : "#";

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
                  Explore Case Study
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
  };

  const renderSkeleton = (index: number) => (
    <div
      key={`dev-skel-${index}`}
      className="animate-pulse relative h-[550px] w-full overflow-hidden rounded-xl bg-navy-900 border border-white/5"
    >
      <div className="absolute inset-0 bg-slate-700/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
      <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
        <div className="space-y-4">
          <div className="h-10 w-3/4 rounded-full bg-white/10" />
          <div className="h-4 w-5/6 rounded-full bg-white/10" />
          <div className="h-4 w-2/3 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative p-2 sm:px-6 lg:px-14 overflow-hidden bg-navy-950">
      {/* <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578683010236-d716f9759678?q=80&w=2000"
          className="w-full h-full object-cover opacity-30"
          alt="Dubai Skyline"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-950" />
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-4">
          {isLoading || isError
            ? Array.from({ length: skeletonCount }).map((_, i) =>
                renderSkeleton(i),
              )
            : developers.map((dev: any, i: number) =>
                renderDeveloperCard(dev, i),
              )}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;

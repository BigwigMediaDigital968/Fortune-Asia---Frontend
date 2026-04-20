"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BuyHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

export default function BuyHero({
  title = "Find Your Next Masterpiece",
  description = "Explore an exclusive collection of luxury properties in Dubai's most prestigious locations.",
  backgroundImage = "https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=80&w=1920",
}: BuyHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Luxury Property"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy-950/60 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gold-400 font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">
            Exclusive Listings
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy-950 to-transparent z-10" />
    </section>
  );
}

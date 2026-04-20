"use client";

import { motion } from "framer-motion";
import { Bath, BedDouble, MapPin, Square, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

export interface Property {
  id: number | string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  category: string;
  image: string;
  isFeatured?: boolean;
}

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-navy-900 overflow-hidden rounded-lg border border-white/5 hover:border-gold-400/30 transition-all duration-500 shadow-lg hover:shadow-gold-400/5"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60" />

        {/* Category Badge */}
        <div className="absolute top-5 left-5 px-4 py-1.5 bg-navy-950/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
          {property.category}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-5 right-5 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 cursor-pointer">
          <Heart size={18} />
        </button>

        {/* Featured Badge */}
        {property.isFeatured && (
          <div className="absolute bottom-5 left-5 px-3 py-1 bg-gold-400 text-navy-950 text-[10px] font-bold uppercase tracking-tight rounded-sm">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 py-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1">
            {property.title}
          </h3>
          <span className="text-gold-400 font-bold text-lg whitespace-nowrap ml-4">
            {property.price}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
          <MapPin size={14} className="text-gold-400" />
          <span>{property.location}</span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-1 py-2 border-y border-white/5">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-gold-400">
              <BedDouble size={16} />
              <span className="text-white font-bold text-sm">{property.beds}</span>
            </div>
            <span className="text-[10px] text-gray-500 uppercase font-medium tracking-wider">Beds</span>
          </div>

          <div className="flex flex-col items-center gap-1 border-x border-white/5">
            <div className="flex items-center gap-2 text-gold-400">
              <Bath size={16} />
              <span className="text-white font-bold text-sm">{property.baths}</span>
            </div>
            <span className="text-[10px] text-gray-500 uppercase font-medium tracking-wider">Baths</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-gold-400">
              <Square size={14} />
              <span className="text-white font-bold text-sm">{property.sqft}</span>
            </div>
            <span className="text-[10px] text-gray-500 uppercase font-medium tracking-wider">Sqft</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 py-3 bg-white/5 hover:bg-gold-400 border border-white/10 hover:border-gold-400 text-white hover:text-navy-950 font-bold text-[10px] uppercase tracking-[0.2em] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer">
          View Details
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

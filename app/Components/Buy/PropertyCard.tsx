"use client";

import { motion } from "framer-motion";
import {
  Bath,
  BedDouble,
  MapPin,
  Square,
  Heart,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  property: any;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  console.log("Rendering PropertyCard:", property);
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
          src={property?.propertyImages?.[0]}
          alt={property?.propertyName}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60" />

        {/* Category Badge */}
        <div className="absolute top-5 left-5 px-4 py-1.5 bg-navy-950/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
          {property?.propertyType}
        </div>

        {/* Favorite Button */}

        {/* Featured Badge */}
        {property?.isFeatured && (
          <div className="absolute bottom-5 left-5 px-3 py-1 bg-gold-400 text-navy-950 text-[10px] font-bold uppercase tracking-tight rounded-sm">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 py-4">
        <div className=" items-start mb-2">
          <h3 className="text-xl font-display capitalize font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1">
            {property?.propertyName}
          </h3>
          <span className="text-gold-400 font-bold text-sm whitespace-nowrap">
            Starting from {property.price}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
          <MapPin size={14} className="text-gold-400" />
          <span>{property?.address}</span>
        </div>

        {/* Features Grid */}
        <div className=" gap-1 py-2 border-y border-white/5">
          <div className="flex gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gold-400">
                <BedDouble size={16} />
                <span className="text-white font-bold text-sm">
                  {property?.bedroom}
                </span>
                <span className="text-[10px] text-gray-200 uppercase font-medium tracking-wider">
                  Beds
                </span>
              </div>

            </div>

            <div className="flex flex-col gap-1 border-x border-white/5">
              <div className="flex items-center gap-2 text-gold-400">
                <Bath size={16} />
                <span className="text-white font-bold text-sm">
                  {property?.bathroom}
                </span>
                <span className="text-[10px] text-gray-200 uppercase font-medium tracking-wider">
                  Baths
                </span>
              </div>

            </div>
          </div>

          <div className="flex gap-1 mt-3">
            <div className="flex items-center gap-2 text-gold-400">
              <Square size={14} />
              <span className="text-white font-bold text-sm">
                {property.sizeSqft}
              </span>
              <span className="text-[10px] hidden text-gray-200 uppercase font-medium tracking-wider">
                Sqft
              </span>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <Link
          href={"/properties/" + property?.slug}
          className="w-full mt-4 py-3 bg-white/5 hover:bg-gold-400 border border-white/10 hover:border-gold-400 text-white hover:text-navy-950 font-bold text-[10px] uppercase tracking-[0.2em] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
        >
          View Details
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  );
}

export function PropertyCardSkeleton() {
  return (
    <div className="w-full max-w-sm sm:max-w-none mx-auto">
      <div className="bg-navy-900 overflow-hidden rounded-lg border border-white/5 shadow-lg animate-pulse">
        
        {/* Image Placeholder */}
        <div className="relative aspect-[4/3] bg-navy-800">
          {/* Category Badge Placeholder */}
          <div className="absolute top-5 left-5 w-20 h-6 bg-navy-700 rounded-full" />
        </div>

        {/* Content Area */}
        <div className="p-6 py-4">
          
          {/* Title & Price Placeholder */}
          <div className="flex flex-col gap-2 mb-2">
            <div className="h-6 w-3/4 bg-navy-800 rounded" />
            <div className="h-4 w-1/3 bg-gold-400/20 rounded" />
          </div>

          {/* Address Placeholder */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 bg-navy-800 rounded-full" />
            <div className="h-3 w-1/2 bg-navy-800 rounded" />
          </div>

          {/* Features Grid Placeholder */}
          <div className="py-4 border-y border-white/5">
            <div className="flex gap-6 mb-3">
              {/* Beds */}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-navy-800 rounded" />
                <div className="w-12 h-4 bg-navy-800 rounded" />
              </div>
              {/* Baths */}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-navy-800 rounded" />
                <div className="w-12 h-4 bg-navy-800 rounded" />
              </div>
            </div>
            {/* Sqft */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-navy-800 rounded" />
              <div className="w-20 h-4 bg-navy-800 rounded" />
            </div>
          </div>

          {/* Button Placeholder */}
          <div className="w-full mt-4 h-12 bg-white/5 rounded-lg border border-white/10" />
        </div>
      </div>
    </div>
  );
}
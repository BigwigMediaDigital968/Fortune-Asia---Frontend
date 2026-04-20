"use client";

import { motion } from "framer-motion";
import { Bath, BedDouble, MapPin, Square } from "lucide-react";
import Image from "next/image";
import { Property } from "../Buy/PropertyCard";

interface PropertyGridCardProps {
    property: Property;
    index: number;
}

export default function PropertyGridCard({ property, index }: PropertyGridCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-navy-900 shadow-2xl"
        >
            {/* Main Background Image */}
            <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Minimalist Overlay (Top) */}
            <div className="absolute top-6 left-6 z-20">
                <div className="px-4 py-1.5 bg-navy-950/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    {property.category}
                </div>
            </div>

            {/* Floating Glass Box (Bottom) */}
            <div className="absolute inset-x-2 bottom-2 z-20">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/20 rounded-[2rem] p-3 shadow-2xl relative overflow-hidden group-hover:bg-white/[0.08] transition-colors duration-500">
                    {/* Inner Reflection Effect */}
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none" />

                    <div className="relative space-y-4 text-center">
                        <div>
                            <h3 className="text-xl font-display font-bold text-white mb-1 tracking-tight">
                                {property.title}
                            </h3>
                            <div className="flex items-center justify-center gap-1.5 text-white/40 text-[10px] font-medium uppercase tracking-widest">
                                <MapPin size={10} className="text-gold-400" />
                                {property.location}
                            </div>
                        </div>

                        <div className="text-gold-400 font-display text-2xl font-bold">
                            {property.price}
                        </div>

                        {/* Minimalist Stats Row */}
                        <div className="flex items-center justify-center gap-6 pt-2 border-t border-white/5">
                            <div className="flex items-center gap-1.5">
                                <BedDouble size={14} className="text-white/40" />
                                <span className="text-white/80 text-xs font-bold">{property.beds}</span>
                            </div>
                            <div className="flex items-center gap-1.5 border-x border-white/5 px-6">
                                <Bath size={14} className="text-white/40" />
                                <span className="text-white/80 text-xs font-bold">{property.baths}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Square size={12} className="text-white/40" />
                                <span className="text-white/80 text-xs font-bold">{property.sqft}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Hover Glow */}
            <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/5 transition-colors duration-700 pointer-events-none" />
        </motion.div>
    );
}

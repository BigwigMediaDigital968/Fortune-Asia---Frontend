"use client";

import { motion } from "framer-motion";
import { Bath, BedDouble, MapPin, Square, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Property } from "../Buy/PropertyCard";

interface PropertyRowCardProps {
    property: Property;
    index: number;
}

export default function PropertyRowCard({ property, index }: PropertyRowCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group flex flex-col md:flex-row bg-navy-900 border border-white/5 rounded-3xl overflow-hidden hover:border-gold-400/30 transition-all duration-500 shadow-2xl hover:shadow-gold-400/5 group"
        >
            {/* Image Section */}
            <div className="relative w-full md:w-[40%] aspect-[16/10] md:aspect-auto overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/20 to-transparent" />
                
                {/* Category Tag */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-navy-950/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    {property.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                            {property.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <MapPin size={16} className="text-gold-400" />
                            <span>{property.location}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-gold-400 font-display text-3xl font-bold">
                            {property.price}
                        </span>
                    </div>
                </div>

                {/* Stats Divider */}
                <div className="w-full h-px bg-white/5 mb-8" />

                {/* Stats and Action */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gold-400/5 flex items-center justify-center text-gold-400">
                                <BedDouble size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm leading-none">{property.beds}</span>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Beds</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gold-400/5 flex items-center justify-center text-gold-400">
                                <Bath size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm leading-none">{property.baths}</span>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Baths</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gold-400/5 flex items-center justify-center text-gold-400">
                                <Square size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm leading-none">{property.sqft}</span>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Sqft</span>
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center gap-3 bg-gold-400 text-navy-950 px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 group/btn">
                        View Property
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

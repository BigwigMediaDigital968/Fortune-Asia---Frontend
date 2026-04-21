"use client";

import { motion } from "framer-motion";
import { BedDouble, Bath, Square, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "../Buy/PropertyCard";

interface RelatedPropertyCardProps {
    property: Property;
    index: number;
}

export default function RelatedPropertyCard({ property, index }: RelatedPropertyCardProps) {
    return (
        <Link href={`/properties/${property.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group flex gap-4 p-2 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-400/40 hover:bg-white/[0.05] transition-all duration-300"
            >
                {/* Thumbnail */}
                <div className="relative w-24 md:w-32 aspect-square shrink-0 rounded-xl overflow-hidden border border-white/5">
                    <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>

                        <h4 className="text-base font-display font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1 leading-tight">
                            {property.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-gold-400 text-[8px] font-bold uppercase tracking-widest mb-1">
                            <div className="flex items-center gap-0.5">
                                <MapPin size={8} />
                                <span>{property.location.split(',')[0]}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="text-gold-400 font-display font-bold text-base mb-2">
                            {property.price}
                        </div>

                        {/* Compact Stats */}
                        <div className="flex items-center gap-3 text-[12px] text-white font-medium uppercase tracking-tighter">
                            <div className="flex items-center gap-1">
                                <BedDouble size={14} className="text-white" />
                                <span>{property.beds}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Bath size={14} className="text-white" />
                                <span>{property.baths}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Square size={14} className="text-white" />
                                <span>{property.sqft}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

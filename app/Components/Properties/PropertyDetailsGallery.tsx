"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { fadeUp } from "@/app/utils/motion";

interface PropertyDetailsGalleryProps {
    images: string[];
    title: string;
}

export default function PropertyDetailsGallery({ images, title }: PropertyDetailsGalleryProps) {
    const [activeImage, setActiveImage] = useState(0);

    // Ensure we have at least 5 images for the grid, or handle fewer
    const displayImages = images.length >= 5 ? images.slice(0, 5) : [...images, ...Array(5 - images.length).fill(images[0])];

    return (
        <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
            {/* Main Image */}
            <div className="md:col-span-2 relative rounded-xl aspect-[8/5] overflow-hidden group">
                <Image
                    src={images[activeImage] || images[0]}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-navy-950/20" />
            </div>

            {/* Thumbnails Grid */}
            <div className="md:col-span-2 flex gap-2 overflow-x-auto md:grid md:grid-cols-2 md:gap-4 pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                {displayImages.slice(1, 5).map((img, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-xl aspect-[8/5] min-w-[150px] md:min-w-0 md:w-full overflow-hidden cursor-pointer group snap-center"
                        onClick={() => setActiveImage(idx + 1)}
                    >
                        <Image
                            src={img}
                            alt={`${title} thumbnail ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-transparent transition-colors" />

                        {idx === 3 && images.length > 5 && (
                            <div className="absolute right-2 bottom-2 p-2 rounded-2xl overflow-hidden bg-navy-950/20 backdrop-blur-sm flex items-center justify-center">
                                <span className="text-white font-display font-bold text-xl">+{images.length - 5}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

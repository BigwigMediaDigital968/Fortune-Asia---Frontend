'use client';

import { motion, AnimatePresence, useMotionValue, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const properties = [
    {
        id: 1,
        image: '/property-1.jpg',
        title: 'Coastal Villa Estate',
        size: '77m²',
        price: '₹5,800,000',
        location: 'North Goa',
        description: 'Luxury beachfront villa with panoramic ocean views'
    },
    {
        id: 2,
        image: '/property-2.jpg',
        title: 'Modern Beach House',
        size: '94m²',
        price: '₹7,200,000',
        location: 'Candolim',
        description: 'Contemporary design with private beach access'
    },
    {
        id: 3,
        image: '/property-3.jpg',
        title: 'Oceanview Residence',
        size: '65m²',
        price: '₹6,000,000',
        location: 'Anjuna',
        description: 'Stunning architecture with infinity pool'
    },
    {
        id: 4,
        image: '/property-4.jpg',
        title: 'Sunset Paradise Villa',
        size: '60m²',
        price: '₹5,200,000',
        location: 'Calangute',
        description: 'Modern tropical living at its finest'
    },
];

export default function PropertyListingSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(0);
    const dragX = useMotionValue(0);

    // Auto-slide functionality
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                handleNext();
            }, 5000); // Change slide every 5 seconds

            return () => clearInterval(interval);
        }
    }, [currentIndex, isHovered]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % properties.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.95,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
            }
        })
    };

    return (
        <section className="relative bg-[#F5F0E8] py-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#1B365D]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-200/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="inline-block px-6 py-2 bg-[#1B365D]/10 border border-[#1B365D]/20 rounded-full text-[#1B365D] text-sm font-semibold tracking-wider uppercase">
                            Premium Collection
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1B365D] mb-4"
                    >
                        Catalog of Our Properties
                        <span className="block text-3xl md:text-4xl lg:text-5xl text-amber-600 mt-2">
                            for 2024
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Frame house construction technology in Goa at peak popularity
                    </motion.p>
                </motion.div>

                {/* Carousel Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Main Carousel */}
                    <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-3xl">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0"
                            >
                                {/* Property Image */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={properties[currentIndex].image}
                                        alt={properties[currentIndex].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    {/* Gradient Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                                    {/* Property Information Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="max-w-2xl"
                                        >
                                            {/* Property Title */}
                                            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-4">
                                                {properties[currentIndex].title}
                                            </h3>

                                            {/* Property Details */}
                                            <p className="text-lg text-gray-200 mb-6">
                                                {properties[currentIndex].description}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-6 mb-6">
                                                {/* Size */}
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1 h-8 bg-amber-400 rounded-full" />
                                                    <div>
                                                        <div className="text-sm text-gray-400 uppercase tracking-wider">Size</div>
                                                        <div className="text-xl font-semibold text-white">{properties[currentIndex].size}</div>
                                                    </div>
                                                </div>

                                                {/* Price */}
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1 h-8 bg-amber-400 rounded-full" />
                                                    <div>
                                                        <div className="text-sm text-gray-400 uppercase tracking-wider">Price from</div>
                                                        <div className="text-xl font-semibold text-amber-400">{properties[currentIndex].price}</div>
                                                    </div>
                                                </div>

                                                {/* Location */}
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1 h-8 bg-amber-400 rounded-full" />
                                                    <div>
                                                        <div className="text-sm text-gray-400 uppercase tracking-wider">Location</div>
                                                        <div className="text-xl font-semibold text-white">{properties[currentIndex].location}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* View Details Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1B365D] font-semibold rounded-full hover:bg-amber-400 hover:text-white transition-all shadow-lg"
                                            >
                                                View Details
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </motion.button>
                                        </motion.div>
                                    </div>

                                    {/* Property Number Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="absolute top-8 right-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-3"
                                    >
                                        <div className="text-4xl font-bold text-white">
                                            {String(currentIndex + 1).padStart(2, '0')}
                                        </div>
                                        <div className="text-sm text-gray-300">/ {String(properties.length).padStart(2, '0')}</div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePrev}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 backdrop-blur-xl bg-white/20 hover:bg-white/30 border border-white/30 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNext}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 backdrop-blur-xl bg-white/20 hover:bg-white/30 border border-white/30 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        {properties.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative"
                            >
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                                        ? 'w-12 bg-[#1B365D]'
                                        : 'w-2 bg-[#1B365D]/30 hover:bg-[#1B365D]/50'
                                        }`}
                                />
                                {index === currentIndex && (
                                    <motion.div
                                        layoutId="activeDot"
                                        className="absolute inset-0 rounded-full bg-[#1B365D]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* View Catalog Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#1B365D] text-white font-semibold rounded-full hover:bg-[#2a4a7a] transition-all shadow-xl"
                        >
                            View Full Catalog
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Progress Bar */}
                {!isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 max-w-xl mx-auto"
                    >
                        <div className="h-1 bg-[#1B365D]/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#1B365D]"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                key={currentIndex}
                            />
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Decorative Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-40 right-20 w-4 h-4 bg-amber-400/30 rounded-full blur-sm"
            />
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 left-20 w-3 h-3 bg-[#1B365D]/20 rounded-full blur-sm"
            />
        </section>
    );
}
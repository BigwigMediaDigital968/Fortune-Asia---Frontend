"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Assuming fadeUp is defined elsewhere, but providing a local fallback for safety
const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function PropertyDetailsGallery({ images = [], title = "" }) {
    const [activeImage, setActiveImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const scrollRef = useRef(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isModalOpen]);

    const openModal = (index: any) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const nextModalImage = (e: any) => {
        e?.stopPropagation();
        setModalIndex((prev) => (prev + 1) % images.length);
    };

    const prevModalImage = (e: any) => {
        e?.stopPropagation();
        setModalIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Preview logic for the main gallery grid
    const previewImages = images.slice(0, 5);

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="space-y-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Main Image Stage */}
                <div className="md:col-span-2 relative rounded-2xl aspect-[16/10] md:aspect-auto md:h-[450px] overflow-hidden group shadow-2xl bg-black">
                    <img
                        src={images[activeImage] || images[0]}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Status Badge */}
                    {/* <div className="absolute top-6 left-6">
                        <span className="bg-slate-950/80 backdrop-blur-xl text-white px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold border border-white/10 shadow-lg">
                            for rent
                        </span>
                    </div> */}

                    <button
                        onClick={() => openModal(activeImage)}
                        className="absolute cursor-pointer top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    >
                        <Maximize2 size={20} />
                    </button>
                </div>

                {/* Desktop/Mobile Thumbnails Grid */}
                <div className="md:col-span-2 flex gap-3 overflow-x-auto md:grid md:grid-cols-2 md:gap-4 pb-2 md:pb-0 snap-x scrollbar-hide">
                    {previewImages.slice(1, 5).map((img, idx) => {
                        const actualIndex = idx + 1;
                        const isLastThumbnail = idx === 3;
                        const hasMore = images.length > 5;

                        return (
                            <div
                                key={actualIndex}
                                className="relative rounded-2xl aspect-[8/5] min-w-[200px] md:min-w-0 md:w-full overflow-hidden cursor-pointer group snap-center border border-white/5 shadow-md"
                                onClick={() => {
                                    if (isLastThumbnail && hasMore) {
                                        openModal(4);
                                    } else {
                                        setActiveImage(actualIndex);
                                    }
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`${title} thumbnail ${actualIndex}`}
                                    className={`w-full h-full object-cover transition-all duration-700 ${activeImage === actualIndex ? "scale-110" : "group-hover:scale-110"
                                        }`}
                                />

                                <div className={`absolute inset-0 transition-all duration-500 ${activeImage === actualIndex ? "bg-transparent ring-4 ring-inset ring-yellow-500/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" : "bg-black/30 group-hover:bg-black/10"
                                    }`} />

                                {isLastThumbnail && hasMore && (
                                    <div className="absolute inset-0 bg-black/20 backdrop-blur-xs flex flex-col items-center justify-center text-white transition-all group-hover:bg-black/50">
                                        <span className="text-3xl font-light font-serif">+{images.length - 4}</span>
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-yellow-500">View All</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/98 flex flex-col items-center justify-center p-0 md:p-12"
                        onClick={() => setIsModalOpen(false)}
                    >
                        {/* Glossy Header */}
                        <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-50 bg-gradient-to-b from-black/90 to-transparent">
                            <div className="text-white space-y-1">
                                <h2 className="text-lg md:text-xl font-serif font-light tracking-wide text-white/90">{title}</h2>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-yellow-500/50" />
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-500/80 font-bold">{modalIndex + 1} of {images.length}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="cursor-pointer p-2 md:p-4 bg-white/5 hover:bg-white/10 hover:rotate-90 rounded-full text-white transition-all duration-500 border border-white/10 backdrop-blur-xl"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Premium Stage Area */}
                        <div className="relative w-full h-full flex items-center justify-center px-4 md:px-20">
                            <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 bg-neutral-900">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={modalIndex}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6, ease: "circOut" }}
                                        src={images[modalIndex]}
                                        className="w-full h-full object-cover select-none"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Float Navigation Controls */}
                            <div className="hidden md:flex absolute inset-x-4 md:inset-x-12 justify-between pointer-events-none">
                                <button
                                    onClick={prevModalImage}
                                    className="pointer-events-auto cursor-pointer p-4 md:p-6 bg-black/20 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md border border-white/5 group"
                                >
                                    <ChevronLeft size={36} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={nextModalImage}
                                    className="pointer-events-auto cursor-pointer p-4 md:p-6 bg-black/20 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md border border-white/5 group"
                                >
                                    <ChevronRight size={36} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Glossy Floating Thumbnail Bar (Desktop Only - Floating style) */}
                            <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-3xl z-30 px-4">
                                <div
                                    className="w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl flex gap-3 overflow-x-auto no-scrollbar justify-start items-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {images.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setModalIndex(i)}
                                            className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden transition-all cursor-pointer duration-500 ${modalIndex === i
                                                ? "ring-2 ring-yellow-500 ring-offset-4 ring-offset-black scale-105 opacity-100"
                                                : "opacity-60 hover:opacity-80 scale-95"
                                                }`}
                                        >
                                            <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex md:hidden absolute inset-x-2 md:inset-x-12 justify-between pointer-events-none">
                                <button
                                    onClick={prevModalImage}
                                    className="pointer-events-auto cursor-pointer p-2 md:p-6 bg-black/20 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md border border-white/5 group"
                                >
                                    <ChevronLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={nextModalImage}
                                    className="pointer-events-auto cursor-pointer p-2 md:p-6 bg-black/20 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md border border-white/5 group"
                                >
                                    <ChevronRight size={20} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>



                        {/* Mobile Bottom Bar (Standard layout for thumb-reachability) */}
                        <div className="md:hidden w-full bg-black/80 backdrop-blur-2xl border-t border-white/10 p-6">
                            <div
                                className="flex gap-3 overflow-x-auto no-scrollbar snap-x touch-pan-x"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setModalIndex(i)}
                                        className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all snap-center ${modalIndex === i ? "ring-2 ring-yellow-500 opacity-100" : "opacity-80"
                                            }`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
        </motion.div>
    );
}
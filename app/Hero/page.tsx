'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Home, DollarSign, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroDesign1() {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">

                <div className="absolute inset-0 bg-img">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
                        alt="Dubai luxury interior"
                        className="hidden w-full h-full object-cover"
                    />
                    <video className="w-full h-full object-cover" autoPlay loop muted src="https://media.istockphoto.com/id/463827650/video/dubai-skyline.mp4?s=mp4-640x640-is&k=20&c=xO778OSkEAFLwoXKmJznnnsDJl1m4lSeD2lpqrh8UDA="></video>
                </div>

                <div className="absolute inset-0 bg-navy-deep/55"></div>
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to right, rgba(7,20,40,0.82) 0%, rgba(7,20,40,0.30) 55%, rgba(7,20,40,0.15) 100%)" }}>
                </div>
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(7,20,40,0.3) 0%, transparent 40%, rgba(7,20,40,0.7) 100%)" }}>
                </div>




                <div className="absolute inset-0 z-10 flex flex-col justify-center p-5 sm:px-10 md:px-20">
                    <motion.div className="max-w-2xl">

                        <motion.div initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3 mb-6 animate-fadeUp1">
                            <div className="w-8 h-px bg-gold"></div>
                            <span className="text-[9px] font-medium tracking-[0.5em] text-gold-400/80 uppercase">Premium Dubai Real Estate</span>
                        </motion.div>

                        <motion.h1 initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-white leading-[1.08] mb-5 animate-fadeUp2"
                            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
                            Find Your Dream<br />
                            <em className="text-gold-lt not-italic">Luxury Home</em><br />
                            in Dubai
                        </motion.h1>

                        <motion.p initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }} className="text-white/55 font-body font-light text-sm leading-relaxed tracking-wide mb-9 animate-fadeUp3"
                            style={{ maxWidth: "400px" }}>
                            Search confidently with your trusted source for premium homes
                            to buy, sell or rent in Dubai's finest neighbourhoods.
                        </motion.p>

                        <motion.div initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }} className="cta-group inline-flex items-center space-x-1 p-1 bg-white/10 w-full sm:w-auto">
                            <Link href={"/buy"} className="cursor-pointer cta-btn bg-gold-500  flex-1 sm:flex-none px-10 py-2 rounded-lg text-sm font-bold uppercase tracking-wider">
                                Buy
                            </Link>
                            <Link href={"/rent"} className="cursor-pointer cta-btn flex-1 sm:flex-none px-10 py-2 rounded-lg text-white text-sm font-bold uppercase tracking-wider">
                                Rent
                            </Link>
                            <Link href={"/lease"} className="cursor-pointer cta-btn flex-1 sm:flex-none px-10 py-2 rounded-lg text-white text-sm font-bold uppercase tracking-wider">
                                Lease
                            </Link>
                        </motion.div>
                        <motion.div initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}>
                            <Link href="/properties"
                                className="z-10 group flex items-center gap-3 animate-fadeUp4 mt-5">
                                <div className="relative bg-white rounded-lg overflow-hidden bg-gold px-8 py-4 flex items-center gap-3
                shadow-lg shadow-gold/20 transition-all duration-300 group-hover:shadow-xl">
                                    <span className="text-[10px] font-bold tracking-[0.35em] text-navy-900 uppercase">Explore Properties</span>
                                    <svg className="w-3.5 h-3.5 text-navy-900 transition-transform duration-300 group-hover:translate-x-1.5"
                                        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                        <path d="M2 8h12M9 3l5 5-5 5" />
                                    </svg>
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>


                <div className="absolute z-10"
                    style={{ top: "50%", right: "8%", transform: "translateY(-55%)" }}>
                    <div className="relative w-[130px] h-[130px]  flex items-center justify-center cursor-pointer group">

                        <svg className="absolute inset-0 w-full h-full spin-text" viewBox="0 0 130 130">
                            <defs>
                                <path id="circle-path" d="M 65,65 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                            </defs>
                            <text fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="3.5"
                                fill="rgba(250,250,248,0.6)" textAnchor="middle">
                                <textPath href="#circle-path" startOffset="0%">
                                    250+ HAPPY CUSTOMERS  ·  250+ HAPPY CUSTOMERS  ·
                                </textPath>
                            </text>
                        </svg>

                        <div className="absolute inset-0 rounded-full border border-dashed border-white/20 group-hover:border-gold/30 transition-colors duration-500"></div>

                        <div className="relative w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center
                  bg-navy/60 backdrop-blur-md border border-white/15 group-hover:border-gold/40
                  shadow-xl transition-all duration-500 group-hover:scale-105">
                            <span className="font-display text-2xl font-semibold text-gold leading-none">250</span>
                            <span className="text-[7px] font-medium tracking-[0.35em] text-white/60 uppercase mt-0.5">Happy</span>
                            <span className="text-[7px] font-medium tracking-[0.35em] text-white/60 uppercase leading-none">Clients</span>
                        </div>
                    </div>
                </div>


                <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 sm:flex border-t border-white/10 animate-fadeUp4">
                    <div className="flex-1 flex flex-col items-center justify-center py-2 sm:py-5 border-r border-white/10
                bg-navy-deep/50 backdrop-blur-sm hover:bg-navy/60 transition-colors duration-300 cursor-pointer group">
                        <span className="font-display text-lg sm:text-2xl font-semibold text-white group-hover:text-gold-lt transition-colors duration-300">1,200<span className="text-gold text-base">+</span></span>
                        <span className="text-[8px] tracking-[0.4em] text-white/40 uppercase font-medium mt-1">Properties</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-2 sm:py-5 border-r border-white/10
                bg-navy-deep/50 backdrop-blur-sm hover:bg-navy/60 transition-colors duration-300 cursor-pointer group">
                        <span className="font-display text-lg sm:text-2xl font-semibold text-white group-hover:text-gold-lt transition-colors duration-300">AED 2.4<span className="text-gold text-base">B</span></span>
                        <span className="text-[8px] tracking-[0.4em] text-white/40 uppercase font-medium mt-1">Portfolio Value</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-2 sm:py-5 border-r border-white/10
                bg-navy-deep/50 backdrop-blur-sm hover:bg-navy/60 transition-colors duration-300 cursor-pointer group">
                        <span className="font-display text-lg sm:text-2xl font-semibold text-white group-hover:text-gold-lt transition-colors duration-300">15<span className="text-gold text-base">+</span></span>
                        <span className="text-[8px] tracking-[0.4em] text-white/40 uppercase font-medium mt-1">Years in Dubai</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-2 sm:py-5
                bg-navy-deep/50 backdrop-blur-sm hover:bg-navy/60 transition-colors duration-300 cursor-pointer group">
                        <span className="font-display text-lg sm:text-2xl font-semibold text-white group-hover:text-gold-lt transition-colors duration-300">98<span className="text-gold text-base">%</span></span>
                        <span className="text-[8px] tracking-[0.4em] text-white/40 uppercase font-medium mt-1">Satisfaction Rate</span>
                    </div>
                </div>


                <div className="absolute right-14 bottom-28 z-10 flex flex-col items-center gap-3 animate-fadeRight0">
                    <span className="text-[7.5px] tracking-[0.5em] text-white/35 uppercase font-medium"
                        style={{ writingMode: "vertical-rl" }}>Scroll</span>
                    <div className="relative w-px h-14 bg-white/15 overflow-hidden">
                        <div className="absolute left-0 w-full h-1/3 animate-scrollBar"
                            style={{ background: "linear-gradient(to bottom, #C9A96E, transparent)" }}></div>
                    </div>
                </div>

            </section></>
    );
}
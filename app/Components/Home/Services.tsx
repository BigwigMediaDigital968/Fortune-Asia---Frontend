"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "../Ui/SectionLabel";


const services = [
    {
        title: "Sell Property",
        desc: "Get the best value for your property with expert marketing and negotiation.",
        detailedDesc:
            "We help you sell faster and smarter with professional listings, targeted exposure, and strong negotiation strategies to maximize your return.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        link: "/buy",
    },
    {
        title: "Rent Property",
        desc: "Find the perfect rental home tailored to your lifestyle and budget.",
        detailedDesc:
            "From apartments to villas, we offer a wide range of rental options with seamless support—from property search to final agreement.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        link: "/rent",
    },
    {
        title: "Lease Property",
        desc: "Flexible leasing solutions for both landlords and tenants.",
        detailedDesc:
            "We manage lease agreements, tenant screening, and documentation to ensure a smooth and secure leasing experience for all parties.",
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
        link: "/lease",
    },
];

export default function Services() {
    return (
        <>
            <section className="py-32 bg-[#020617] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
                    <div className="max-w-3xl mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeading subtitle={"Our Services"} centered={false} />

                            <h2 className="font-display text-5xl md:text-7xl font-light text-white mt-6 leading-tight">
                                Real Estate Solutions <br />
                                <span className="font-serif italic text-gold-400">
                                    Tailored For You
                                </span>
                            </h2>
                            <div className="w-20 h-[2px] bg-gold-500 mt-8" />
                        </motion.div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-14">

                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 mb-32 last:mb-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Visual Column */}
                            <div className="relative w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[4/5] md:aspect-square w-full max-w-[500px] mx-auto group"
                                >
                                    {/* Decorative Graphic (The Squares from your image) */}
                                    <div className={`absolute -top-6 ${i % 2 === 0 ? '-left-6' : '-right-6'} z-20 flex gap-1`}>
                                        <div className="w-12 h-12 bg-gold-500 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
                                        <div className="w-6 h-6 bg-gold-400/50 rounded-md backdrop-blur-sm mt-4" />
                                    </div>

                                    {/* Main Image Container */}
                                    <div className="relative h-full w-full overflow-hidden border border-white/10">
                                        <Image
                                            src={service.image} // Add specific service images here
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                        {/* Subtle Gradient Overlays */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                                    </div>

                                    {/* Aesthetic Border Accent */}
                                    <div className={`absolute -bottom-8 ${i % 2 === 0 ? '-right-8' : '-left-8'} w-full h-full border border-gold-500/20 -z-10`} />
                                </motion.div>
                            </div>

                            {/* Content Column */}
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-gold-500 font-mono text-sm tracking-tighter">0{i + 1} —</span>
                                        <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold">Priority Service</span>
                                    </div>

                                    <h2 className="font-display text-4xl md:text-6xl text-white font-light leading-tight mb-8">
                                        {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                                        <span className="text-gold-400 font-serif italic">
                                            {service.title.split(' ').pop()}
                                        </span>
                                    </h2>

                                    <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed mb-10 max-w-xl">
                                        <p>{service.desc}</p>
                                        <p className="text-sm border-l-2 border-gold-500/30 pl-6 italic">
                                            {service.detailedDesc || "Our approach ensures every asset is positioned for maximum growth within the Dubai landscape."}
                                        </p>
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ x: 10 }}
                                        className="flex flex-col gap-4 text-gold-400 font-bold uppercase tracking-[0.2em] text-xs group relative"
                                        onClick={() => window.location.href = service.link}
                                    >
                                        <Link href={service.link} className="flex items-center gap-4">
                                            Explore {service.title}
                                            <ArrowRight size={16} />
                                        </Link>
                                        <div className="w-10 h-[1px] bg-gold-400 group-hover:w-16 transition-all duration-300" />

                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
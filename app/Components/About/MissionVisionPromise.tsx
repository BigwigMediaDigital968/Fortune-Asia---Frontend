"use client";

import { motion } from "framer-motion";
import {
    Users,
    Target,
    CheckCircle2,
} from "lucide-react";

export default function MissionVisionPromise() {
    const promises = [
        "To recommend only those opportunities we would confidently invest in ourselves.",
        "To present both the opportunities and the risks with complete honesty and transparency.",
        "To protect your interests before our own-always.",
        "To guide you through every stage of your investment journey, from selection to long-term portfolio growth.",
        "To build relationships based on trust and long-term success, not just one-time transactions."
    ];

    return (
        <section className="bg-[#020617] py-16 px-6 md:px-14 border-t border-white/5 relative overflow-hidden text-white">
            {/* Subtle Background Artistry */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.02] blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-20 relative z-10">

                {/* ── MISSION & VISION DUO GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Mission Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 relative group hover:border-gold-500/20 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 border border-gold-500/20">
                                <Target size={22} />
                            </div>
                            <div>
                                <span className="text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">Our Focus</span>
                                <h3 className="font-serif text-2xl font-light text-white">Our Mission</h3>
                            </div>
                        </div>

                        <p className="text-slate-300 font-sans text-base font-light leading-relaxed">
                            To empower families, entrepreneurs, and investors with honest advice, market expertise, and
                            end-to-end real estate solutions that help them build lasting wealth, make confident investment
                            decisions, and achieve financial freedom.
                        </p>

                        <div className="pt-2">
                            <p className="text-slate-300 font-sans text-base font-light leading-relaxed mb-2">
                                Every recommendation we make is guided by one simple principle:
                            </p>
                            <p className="text-white font-serif italic text-lg text-gold-400/90">
                                “Client First. Commission Second.”
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 relative group hover:border-gold-500/20 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 border border-gold-500/20">
                                <Users size={22} />
                            </div>
                            <div>
                                <span className="text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">Our Horizon</span>
                                <h3 className="font-serif text-2xl font-light text-white">Our Vision</h3>
                            </div>
                        </div>

                        <p className="text-slate-300 font-sans text-base font-light leading-relaxed mb-4">
                            To become one of the most trusted real estate investment advisory firms connecting global investors with exceptional opportunities across the UAE and beyond.
                        </p>

                        <p className="text-slate-400 font-sans text-sm font-light leading-relaxed">
                            Our long-term vision is to build an institution that creates value through investment advisory, brokerage, property management, development, and construction while leaving a legacy of trust, integrity, and excellence for generations to come.
                        </p>
                    </motion.div>

                </div>

                {/* ── THE PROMISE STATEMENT SHOWCASE ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden p-8 md:p-16 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10"
                >
                    {/* Subtle interior glow */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-gold-500/20 rounded-tl-3xl" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left anchor headline */}
                        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-8">
                            <span className="text-gold-400 font-mono text-xs uppercase tracking-[0.3em] block">Lifelong Partnership</span>
                            <h3 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                                Our Promise <br />
                                <span className="italic text-slate-400">To Every Client</span>
                            </h3>
                            <div className="w-12 h-[1px] bg-gold-500/50 mt-4" />
                            <p className="text-slate-400 font-sans text-xs uppercase tracking-wider pt-4 leading-relaxed">
                                When you choose Fortune Asia, you are choosing a lifelong investment partner.
                            </p>
                            <p className="text-white font-serif italic text-base text-gold-400/90">
                                "Our business is not built on selling properties. <br />
                                It is built on helping people build their future."
                            </p>
                        </div>

                        {/* Right side list matrix */}
                        <div className="lg:col-span-8">
                            {promises.map((promise, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group"
                                >
                                    <div className="mt-1 text-gold-400 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 size={18} className="stroke-[1.5]" />
                                    </div>
                                    <p className="text-slate-300 font-sans text-base md:text-lg font-light leading-relaxed">
                                        {promise}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};
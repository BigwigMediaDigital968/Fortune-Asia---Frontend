"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../Ui/SectionLabel";
import { fadeUp } from "@/app/utils/motion";

export default function CompanyPhilosophy() {
    return (
        <>
            <section className="relative py-20 px-6 md:px-14 border-t border-white/5 overflow-hidden text-white">
                {/* Structural Ambient Luxury Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-gold-500/5 to-blue-500/5 blur-[160px] pointer-events-none" />


                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-16">

                    {/* Label Header */}
                    <div className="space-y-3">
                        <motion.div variants={fadeUp}>
                            <SectionHeading subtitle={"The Core Value"} />
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="font-display text-white font-semibold mt-4 text-center"
                            style={{
                                fontSize: "clamp(2rem,4vw,3rem)",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                            }}
                        >
                            The Fortune Asia{" "}
                            <em className="text-gold-400 not-italic">Philosophy</em>
                        </motion.h2>
                    </div>

                    {/* Master Narrative Block */}
                    <div className="space-y-10">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="font-serif text-xl md:text-3xl font-light leading-relaxed tracking-wide max-w-2xl mx-auto text-white"
                        >
                            We believe people don’t invest in buildings. <br />
                            <span className="text-gold-400/90 italic font-normal">They invest:</span>
                        </motion.p>

                        {/* Staggered Floating Elements */}
                        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 max-w-3xl mx-auto">
                            {[
                                "In dreams.",
                                "In security.",
                                "In their children’s future.",
                                "In financial freedom."
                            ].map((tenet, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-full backdrop-blur-sm"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                                    <span className="font-serif text-base sm:text-lg font-light tracking-wide text-slate-200">
                                        {tenet}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* The Core Operational Promise Resolution */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto pt-12 border-t border-white/5 relative group"
                    >
                        {/* Subtle frame corner lights */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

                        <p className="font-sans text-base md:text-lg font-light text-slate-400 leading-relaxed tracking-wide">
                            That is why every recommendation we make carries the same care as if we were investing {" "}
                            <span className="text-white font-medium border-b border-gold-400/30 pb-0.5">our own family’s money</span>.
                        </p>
                    </motion.div>

                </div>
            </section>
        </>
    )
}
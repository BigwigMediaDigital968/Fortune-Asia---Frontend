"use client";

import PageHero from "@/app/Components/Ui/PageHero";
import ProjectCard from "@/app/Components/Projects/ProjectCard";
import { motion } from "framer-motion";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS_DATA = [
    {
        id: 1,
        title: "The Marque Residences",
        location: "Business Bay, Dubai",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
        description: "Sky Bay Real Estate is a dynamic property consultancy in Dubai, dedicated to connecting buyers, sellers, and investors with premium real estate opportunities."
    },
    {
        id: 2,
        title: "Azure Bay",
        location: "Dubai Marina",
        image: "https://images.unsplash.com/photo-1462396240927-52058a6a84ec?q=80&w=1073",
        description: "Sky Bay Real Estate is a dynamic property consultancy in Dubai, dedicated to connecting buyers, sellers, and investors with premium real estate opportunities."

    },
    {
        id: 3,
        title: "Skyline Heights",
        location: "Downtown Dubai",
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=1169",
        description: "Sky Bay Real Estate is a dynamic property consultancy in Dubai, dedicated to connecting buyers, sellers, and investors with premium real estate opportunities."

    },
    {
        id: 4,
        title: "Paloma Villas",
        location: "Palm Jumeirah",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
        description: "Sky Bay Real Estate is a dynamic property consultancy in Dubai, dedicated to connecting buyers, sellers, and investors with premium real estate opportunities."

    },
    {
        id: 5,
        title: "Emerald Estate",
        location: "Emirates Hills",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070",
        description: "Sky Bay Real Estate is a dynamic property consultancy in Dubai, dedicated to connecting buyers, sellers, and investors with premium real estate opportunities."

    },
    {
        id: 6,
        title: "The Zenith Penthouse",
        location: "Business Bay, Dubai",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070",
        description: "Sky Bay Real Estate is a dynamic property consultancy in Dubai, dedicated to connecting buyers, sellers, and investors with premium real estate opportunities."

    }
];

export default function ProjectsPage() {
    return (
        <main className="bg-navy-950 min-h-screen text-white">
            {/* Hero Section */}
            <PageHero
                subtitle="Built Excellence"
                title={<>Our <span className="text-gold-400"> Signature Projects</span></>}
                description="Explore our portfolio of successfully delivered developments, showcasing quality, innovation, and lasting value across Dubai’s real estate landscape."
                backgroundImage="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=1171"
            />

            {/* Projects Grid */}
            <section className="py-24 px-6 md:px-14">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={motionContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16"
                    >
                        {PROJECTS_DATA.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-400/5 backdrop-blur-sm -z-10" />
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-400 font-bold text-xs uppercase tracking-[0.4em] block mb-6">
                            Private Consultation
                        </span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Invest in Dubai's <br />
                            <span className="text-gold-400">Tomorrow, Today</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                            Our advisors specialize in identifying high-growth off-plan opportunities tailored to your investment objectives.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="px-8 py-4 border border-gold-400 bg-gold-400 text-navy-900 text-xs font-sans font-semibold tracking-widest uppercase rounded hover:brightness-105 hover:scale-105 transition-all duration-200"
                            >
                                Get Brochure
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 border border-gold-400 text-white flex items-center gap-2 text-xs font-sans font-semibold tracking-widest uppercase rounded hover:bg-gold-400 hover:text-navy-950 hover:scale-105 transition-all duration-200"
                            >
                                Speak with an Advisor
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

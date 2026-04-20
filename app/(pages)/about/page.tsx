"use client";

import { motion } from "framer-motion";
import {
    Users,
    Target,
    Award,
    Clock,
    CheckCircle2,
    MapPin,
    ArrowRight,
    Home,
    Briefcase,
    TrendingUp,
    ShieldCheck,
    ChevronRight
} from "lucide-react";
import Image from "next/image";
import SectionLabel, { SectionHeading } from "@/app/Components/Ui/SectionLabel";
import PageHero from "@/app/Components/Ui/PageHero";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Link from "next/link";
import Services from "@/app/Components/Home/Services";

const teamMembers = [
    {
        name: "Alexander Vance",
        role: "Chief Investment Officer",
        bio: "Ex-Goldman Sachs with 15 years of experience in MENA liquidity markets.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Sarah Al-Maktoum",
        role: "Head of Luxury Sales",
        bio: "Ex-Goldman Sachs with 15 years of experience in MENA liquidity markets.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "David Chen",
        role: "Investment Director",
        bio: "Ex-Goldman Sachs with 15 years of experience in MENA liquidity markets.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
];

const values = [
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Trusted Advisors",
        desc: "Expert guidance backed by years of Dubai market experience and RERA certification."
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Market Expertise",
        desc: "In-depth knowledge of prime locations, upcoming off-plan projects, and ROI trends."
    },
    {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: "Verified Listings",
        desc: "Every property in our portfolio is thoroughly vetted for authenticity and value."
    }
];

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

export default function About() {
    return (
        <main className="bg-navy-950 text-white">
            {/* ── 1. HERO SECTION ── */}
            <PageHero
                subtitle="Our Story"
                title={<>About <span className="text-gold-400">Fortune Asia</span></>}
                description="Your Trusted Real Estate Partner in the Heart of Dubai. Redefining luxury living through expertise and integrity."
                backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
            />


            {/* ── 2. COMPANY OVERVIEW SECTION ── */}
            <section className="py-24 px-6 md:px-14">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image Gallery (Reusing Home/About style logic) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full"
                    >
                        <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-2xl overflow-hidden border-2 border-navy-900 shadow-2xl z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Office"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden border-4 border-navy-950 shadow-2xl z-20">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                                alt="Team Meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Gold Accent */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold-400/30 rounded-tl-3xl z-0" />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading subtitle={"Who we are"} centered={false} />
                        <h2 className="font-display text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
                            A Legacy of <span className="text-gold-400">Excellence</span> in Real Estate
                        </h2>
                        <div className="space-y-6 text-white/70 font-sans leading-relaxed">
                            <p>
                                Founded in 2013, Fortune Asia Realty has established itself as a premier boutique real estate agency in Dubai. We specialize in luxury residential properties, investment opportunities, and comprehensive property management services.
                            </p>
                            <p>
                                Our mission is simple: to provide unparalleled service through deep market insights and a client-first approach. We don't just sell properties; we build lasting relationships based on trust and results.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div>
                                <h4 className="text-gold-400 text-3xl font-display font-bold">10+</h4>
                                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-gold-400 text-3xl font-display font-bold">2.4B+</h4>
                                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">AED Portfolio</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <TeamSection />



            {/* ── 5. SERVICES SECTION ── */}
            <Services />

            {/* ── 4. WHY CHOOSE US SECTION ── */}
            <section className="relative py-32 overflow-hidden">
                {/* Background Image with Parallax-like depth */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" // Use a high-end, dark architectural shot
                        alt="Premium Background"
                        fill
                        className="object-cover scale-110"
                    />
                    {/* Multi-layered gradient for that deep, rich look */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
                    {/* Left Aligned Header */}
                    <div className="max-w-3xl mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeading subtitle={"Institutional Grade"} centered={false} />
                            <h2 className="font-display text-5xl md:text-7xl font-light text-white mt-6 leading-tight">
                                Expertise You Can <br />
                                <span className="font-serif italic text-gold-400">Implicitly Trust</span>
                            </h2>
                            <div className="w-20 h-[2px] bg-gold-500 mt-8" />
                        </motion.div>
                    </div>

                    {/* Glossy Modern Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* The Glass Card Body */}
                                <div className="relative h-full p-10 overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl
                              bg-white/[0.03] backdrop-blur-xl border border-white/10 
                              transition-all duration-500 group-hover:bg-white/[0.07] group-hover:border-gold-500/30">

                                    {/* Glossy Reflection Effect */}
                                    <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 transition-all duration-1000 group-hover:top-[-50%] group-hover:left-[-50%]" />

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-navy-950/50 border border-white/10 rounded-full flex items-center justify-center text-gold-400 mb-10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500">
                                            {value.icon}
                                        </div>

                                        <h3 className="font-display text-2xl font-semibold text-white mb-4 tracking-wide group-hover:text-gold-400 transition-colors">
                                            {value.title}
                                        </h3>

                                        <p className="text-white/50 leading-relaxed font-sans text-base group-hover:text-white/80 transition-colors">
                                            {value.desc}
                                        </p>
                                    </div>

                                    {/* Decorative bottom corner accent */}
                                    <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 border-r-2 border-b-2 border-gold-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}


const TeamSection = () => {
    return (
        <section className="py-32 bg-[#020617] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <SectionHeading subtitle={"The Leadership"} centered={false} />
                        <h2 className="font-display text-5xl md:text-7xl font-light text-white leading-tight">
                            The Visionaries <br />
                            <span className="font-serif italic text-gold-400">Behind Fortune Asia</span>
                        </h2>
                    </div>
                    <p className="text-white/50 max-w-xs text-lg font-light leading-relaxed border-l border-gold-500/30 pl-6">
                        A collective of elite strategists redefining the financial landscape of the Middle East.
                    </p>
                </div>

                {/* Modern Staggered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 gap-x-8">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            // This logic creates a staggered, asymmetrical premium layout
                            className={`relative group md:col-span-6 lg:col-span-4`}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] cursor-pointer overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/10 rounded-sm">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                />

                                {/* Elegant Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />

                                {/* Floating Content Card */}
                                <div className="absolute -bottom-[25%] left-0 right-0 p-1 translate-y-4 group-hover:bottom-0 transition-all duration-500">
                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 m-2">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-display text-white tracking-wide">
                                                    {member.name}
                                                </h3>
                                                <p className="text-gold-400 text-[10px] uppercase tracking-[0.2em] mt-1">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quae harum aliquid laboriosam, ad consectetur quos neque tempore officia labore corporis maiores, error impedit libero."}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Accent (Luxury Touch) */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gold-500/20 group-hover:border-gold-500/50 transition-colors duration-500 -z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
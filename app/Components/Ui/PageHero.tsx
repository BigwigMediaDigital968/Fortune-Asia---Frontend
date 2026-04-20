"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/app/Components/Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";

interface PageHeroProps {
    subtitle: string;
    title: React.ReactNode;
    description: string;
    backgroundImage: string;
}

export default function PageHero({
    subtitle,
    title,
    description,
    backgroundImage
}: PageHeroProps) {
    return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy-950/30 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/10 to-navy-950" />
            </div>

            {/* Content */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={motionContainer}
                className="relative z-10 text-center px-6"
            >
                <motion.div variants={fadeUp} className="mb-0">
                    <SectionHeading subtitle={subtitle} />
                </motion.div>
                <motion.h1
                    variants={fadeUp}
                    className="font-display text-5xl md:text-7xl font-bold mt-6 mb-4 tracking-tight text-white"
                >
                    {title}
                </motion.h1>
                <motion.p
                    variants={fadeUp}
                    className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-sans font-light leading-relaxed"
                >
                    {description}
                </motion.p>
            </motion.div>
        </section>
    );
}

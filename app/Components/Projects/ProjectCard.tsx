"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    project: {
        title: string;
        location: string;
        image: string;
        description: string;
    };
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative aspect-square overflow-hidden cursor-pointer rounded-sm border border-white/5"
        >
            {/* Background Image */}
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Bottom Gradient (Initial State) */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

            {/* Glossy Slider Overlay */}
            <div className="absolute inset-x-0 bottom-0 translate-y-[calc(100%-80px)] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* The Glossy/Glass Box */}
                <div className="mx-4 mb-4 p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* Glossy reflection effect */}
                    <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 transition-all duration-1000 group-hover:top-[-50%] group-hover:left-[-50%]" />

                    <div className="relative z-10 flex flex-col gap-4">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                            {project.title}
                        </h3>

                        {/* Content visible on hover */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex flex-col gap-6">
                            <div className="flex items-center gap-2 text-white/70">
                                <MapPin size={16} className="text-gold-400" />
                                <span className="text-sm uppercase tracking-widest font-medium">
                                    {project.location}
                                </span>
                            </div>
                            <div>
                                <p className="text-white/70 text-sm">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <button className="flex items-center gap-3 bg-gold-400 text-navy-950 px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300">
                                    Explore Details
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    );
}

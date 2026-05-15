'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Map, Maximize2, Mountain, Compass, ArrowRight, Eye, AreaChart as AreaChartIcon } from 'lucide-react';
import PageHero from '@/app/Components/Ui/PageHero';
import Link from 'next/link';

export default function PlotsPage() {
    return (
        <>
            <PageHero
                subtitle="Premium Land Collection"
                title={
                    <>
                        Luxury <span className="text-gold-400">Plots</span>
                    </>
                }
                description="Discover exclusive land opportunities in Dubai’s most prestigious locations. Crafted for visionary investments and future luxury living."
                backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
            />
            <PlotsSectionDark />

        </>
    )
}



const plotsData = [
    {
        id: "01",
        name: "The Meridian Plateau",
        headline: "Unrivaled Horizons for Bespoke Architecture.",
        description: "Positioned at the highest point of the coastal range, this plot offers a 270-degree view of the Arabian Gulf. A perfect canvas for a multi-level architectural masterpiece with natural elevation advantages.",
        area: "45,000 Sq. Ft.",
        topography: "Tiered Plateau",
        orientation: "North-West Facing",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1074&auto=format&fit=crop",
    },
    {
        id: "02",
        name: "Emerald Valley Basin",
        headline: "A Sanctuary of Privacy and Verdant Serenity.",
        description: "Nestled within a natural valley, this basin plot is protected by ancient rock formations, providing a secluded micro-climate ideal for expansive landscaping and botanical gardens.",
        area: "62,500 Sq. Ft.",
        topography: "Gently Sloping Basin",
        orientation: "South-East Facing",
        image: "https://images.unsplash.com/photo-1544092683-c0c9ebb368e5?q=80&w=1151&auto=format&fit=crop",
    }
];

const PlotsSectionDark = () => {
    const [hoveredCard, setHoveredCard] = React.useState(null);

    const redirectionProperty = {
        _id: "plots-link",
        title: "Explore Full Land Portfolio",
        location: "Global Exclusive Estates",
        type: "Premium Plots",
        purpose: "INVEST",
        images: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop"],
        areaSqft: "Multiple Dimensions Available"
    };

    return (
        <section className="bg-navy-950 py-32 px-6 lg:px-14 overflow-hidden text-white border-b border-gray-500">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-gold-400 font-bold text-[10px] uppercase tracking-widest block mb-2">
            Available Plots
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Premium <span className="text-gold-400">Plots</span>
          </h2>
        </div>
      </div>

                {/* Content Rows */}
                <div className="space-y-48 mb-40">
                    {plotsData.map((plot, index) => (
                        <div
                            key={plot.id}
                            className={`relative flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}
                        >
                            {/* Massive Number Watermark */}
                            <span className={`absolute -top-20 ${index % 2 === 0 ? 'left-0' : 'right-0'} text-[15rem] font-serif italic text-white/[0.03] select-none pointer-events-none hidden lg:block`}>
                                {plot.id}
                            </span>

                            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-0 w-full`}>

                                {/* Image Component with Parallax-like feel */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.2 }}
                                    className="w-full lg:w-3/5 aspect-video lg:aspect-[16/10] overflow-hidden rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                                >
                                    <img
                                        src={plot.image}
                                        alt={plot.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                {/* Floating Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className={`w-full lg:w-[45%] bg-[#020617]/80 backdrop-blur-2xl p-10 lg:p-16 mt-[-10%] lg:mt-0 ${index % 2 === 0 ? 'lg:ml-[-10%]' : 'lg:mr-[-10%]'} z-10 border border-white/5 shadow-2xl`}
                                >
                                    <div className="space-y-6">
                                        <h3 className="text-gold-500 text-sm font-mono tracking-[0.3em] uppercase">{plot.name}</h3>
                                        <h4 className="text-3xl md:text-4xl font-light leading-tight">{plot.headline}</h4>
                                        <p className="text-slate-400 text-lg font-light leading-relaxed">
                                            {plot.description}
                                        </p>

                                        {/* Tech Specs Block */}
                                        <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                                            <SpecItem icon={<Maximize2 size={16} />} label="Total Area" value={plot.area} />
                                            <SpecItem icon={<Mountain size={16} />} label="Terrain" value={plot.topography} />
                                        </div>

                                        <Link href={"/contact"} className="group flex items-center gap-4 text-white text-[11px] font-bold uppercase tracking-[0.3em] pt-8 hover:text-gold-500 transition-colors">
                                            Let's Connect <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform text-gold-500" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

const SpecItem = ({ icon, label, value }: { icon: any; label: any; value: any; }) => (
    <div className="space-y-2">
        <div className="flex items-center gap-2 text-gold-500/60">
            {icon}
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">{label}</span>
        </div>
        <p className="text-white text-sm font-light tracking-wide">{value}</p>
    </div>
);

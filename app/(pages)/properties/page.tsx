"use client";

import PageHero from "@/app/Components/Ui/PageHero";
import PropertyGridCard from "@/app/Components/Properties/PropertyGridCard";
import PropertyCard, { Property } from "@/app/Components/Buy/PropertyCard";
import { motion } from "framer-motion";

const ALL_PROPERTIES: Property[] = [
    {
        id: "p1",
        title: "The Azure Penthouse",
        location: "Downtown Dubai",
        price: "$2,450,000",
        beds: 4,
        baths: 3,
        sqft: 3200,
        category: "Penthouse",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
        isFeatured: true,
    },
    {
        id: "p2",
        title: "Serenity Villa",
        location: "Palm Jumeirah, Dubai",
        price: "$5,800,000",
        beds: 6,
        baths: 5,
        sqft: 7500,
        category: "Villa",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "p3",
        title: "Skyline Mansion",
        location: "Business Bay, Dubai",
        price: "$1,200,000",
        beds: 3,
        baths: 2,
        sqft: 2100,
        category: "Apartment",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "p4",
        title: "Marina Sands Apartment",
        location: "Dubai Marina",
        price: "$850,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        category: "Apartment",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "p5",
        title: "Emerald Estate",
        location: "Emirates Hills, Dubai",
        price: "$12,500,000",
        beds: 7,
        baths: 8,
        sqft: 15000,
        category: "Villa",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
        isFeatured: true,
    },
    {
        id: "p6",
        title: "The Marque Residences",
        location: "Business Bay, Dubai",
        price: "$1,850,000",
        beds: 3,
        baths: 3,
        sqft: 2400,
        category: "Penthouse",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
    }
];

const motionContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function PropertiesPage() {
    return (
        <main className="bg-navy-950 min-h-screen pb-32">
            {/* Hero Section */}
            <PageHero
                subtitle="Property Portfolio"
                title={<>Curated <span className="text-gold-400">Excellence</span></>}
                description="Browse our complete collection of Dubai's most exclusive residential and commercial properties, handpicked for the discerning investor."
                backgroundImage="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1920"
            />

            {/* Properties List */}
            <section className="mt-24 max-w-7xl mx-auto px-6 md:px-14">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <span className="text-gold-400 font-bold text-xs uppercase tracking-[0.4em]">
                            Our Full Portfolio
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display font-light text-white leading-tight">
                            Elite Real Estate <br />
                            <span className="font-serif italic text-gold-400">Discoveries</span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            Showing {ALL_PROPERTIES.length} exceptional opportunities across Dubai's most prestigious communities.
                        </p>
                    </div>
                </div>

                {/* Grid of Floating Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={motionContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {ALL_PROPERTIES.map((property, index) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Footer CTA */}
                <div className="mt-32 text-center bg-white/5 border border-white/10 rounded-[40px] p-16 md:p-24 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-1000" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                            Can't find what <br />
                            <span className="text-gold-400 font-serif italic">you're looking for?</span>
                        </h3>
                        <p className="text-white/50 text-xl font-light">
                            Our advisors have access to exclusive, off-market opportunities that aren't listed publicly. Let us find your perfect match.
                        </p>
                        <div className="pt-6">
                            <button className="px-12 py-5 bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-[0.4em] rounded-xl hover:bg-white transition-all duration-300 shadow-2xl shadow-gold-400/20 active:scale-95">
                                Contact an Advisor
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

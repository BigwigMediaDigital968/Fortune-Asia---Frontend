"use client";

import { useEffect, useState } from "react";
import PageHero from "@/app/Components/Ui/PageHero";
import PropertyFilters from "@/app/Components/Buy/PropertyFilters";
import PropertyCard, { Property } from "@/app/Components/Buy/PropertyCard";
import PropertySkeleton from "@/app/Components/Buy/PropertySkeleton";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_PROPERTIES: Property[] = [
    {
        id: 1,
        title: "Executive Business Tower",
        location: "Business Bay, Dubai",
        price: "$180,000 /yr",
        beds: 0,
        baths: 2,
        sqft: 3500,
        category: "Office",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        isFeatured: true,
    },
    {
        id: 2,
        title: "Luxury Retail Space",
        location: "Dubai Marina",
        price: "$95,000 /yr",
        beds: 0,
        baths: 1,
        sqft: 1200,
        category: "Retail",
        image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Premium Logistics Hub",
        location: "Jebel Ali, Dubai",
        price: "$250,000 /yr",
        beds: 0,
        baths: 4,
        sqft: 12000,
        category: "Industrial",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "The Zenith Office",
        location: "DIFC, Dubai",
        price: "$320,000 /yr",
        beds: 0,
        baths: 3,
        sqft: 5000,
        category: "Office",
        image: "https://images.unsplash.com/photo-1497215842125-a5d436162386?auto=format&fit=crop&q=80&w=800",
    }
];

export default function LeasePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="bg-navy-950 min-h-screen pb-20">
            <PageHero
                subtitle="Exclusive Leasing"
                title={<>Premium Commercial <span className="text-gold-400">Leasing</span></>}
                description="Expert leasing solutions for long-term luxury residences and institutional-grade commercial spaces in Dubai's premier business districts."
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            />

            <PropertyFilters />

            <section className="mt-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-gold-400 font-bold text-[10px] uppercase tracking-widest block mb-2">
                            Leasing Opportunities
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Institutional <span className="text-gold-400">Leasing</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-sm">
                        Showing {MOCK_PROPERTIES.length} exceptional commercial and residential leasing opportunities across Dubai.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <motion.div
                                    key={`skeleton-${i}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <PropertySkeleton />
                                </motion.div>
                            ))
                        ) : (
                            MOCK_PROPERTIES.map((property, index) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                    index={index}
                                />
                            ))
                        )}
                    </AnimatePresence>
                </div>

                {!loading && (
                    <div className="mt-20 flex justify-center">
                        <button className="px-12 py-5 bg-navy-900 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-all duration-300 shadow-xl cursor-pointer">
                            Load More Options
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

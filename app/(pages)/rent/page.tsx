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
        title: "Skyline Mansion",
        location: "Downtown Dubai",
        price: "$120,000 /yr",
        beds: 3,
        baths: 3,
        sqft: 2800,
        category: "Apartment",
        image: "https://images.unsplash.com/photo-1545367669-e2fd306634b0?auto=format&fit=crop&q=80&w=800",
        isFeatured: true,
    },
    {
        id: 2,
        title: "Marina View Suite",
        location: "Dubai Marina",
        price: "$85,000 /yr",
        beds: 2,
        baths: 2,
        sqft: 1550,
        category: "Apartment",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Palm Jumeirah Villa",
        location: "Palm Jumeirah, Dubai",
        price: "$450,000 /yr",
        beds: 5,
        baths: 6,
        sqft: 6200,
        category: "Villa",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "City View Loft",
        location: "Jumeirah Village Circle",
        price: "$45,000 /yr",
        beds: 1,
        baths: 1,
        sqft: 950,
        category: "Apartment",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 5,
        title: "Business Bay Studio",
        location: "Business Bay, Dubai",
        price: "$55,000 /yr",
        beds: 0,
        baths: 1,
        sqft: 650,
        category: "Studio",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    }
];

export default function RentPage() {
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
                subtitle="Luxury Rentals"
                title={<>Elite Residences for <span className="text-gold-400">Rent</span></>}
                description="Experience Dubai's premium lifestyle with our curated collection of high-end rental properties in the most sought-after communities."
                backgroundImage="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1920"
            />

            <PropertyFilters />

            <section className="mt-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-gold-400 font-bold text-[10px] uppercase tracking-widest block mb-2">
                            Available For Rent
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Premium Rental <span className="text-gold-400">Listings</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-sm">
                        Showing {MOCK_PROPERTIES.length} exceptional rental opportunities across Dubai's prime locations.
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
                            Load More Rentals
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

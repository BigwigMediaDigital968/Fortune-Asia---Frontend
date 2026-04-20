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
    title: "The Azure Penthouse",
    location: "Downtown Dubai",
    price: "$2,450,000",
    beds: 4,
    baths: 3,
    sqft: 3200,
    category: "Penthouse",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Serenity Villa",
    location: "Palm Jumeirah, Dubai",
    price: "$5,800,000",
    beds: 6,
    baths: 5,
    sqft: 7500,
    category: "Villa",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Skyline Mansion",
    location: "Business Bay, Dubai",
    price: "$1,200,000",
    beds: 3,
    baths: 2,
    sqft: 2100,
    category: "Apartment",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Marina Sands Apartment",
    location: "Dubai Marina",
    price: "$850,000",
    beds: 2,
    baths: 2,
    sqft: 1450,
    category: "Apartment",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Emerald Estate",
    location: "Emirates Hills, Dubai",
    price: "$12,500,000",
    beds: 7,
    baths: 8,
    sqft: 15000,
    category: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
  },
  {
    id: 6,
    title: "City View Loft",
    location: "Jumeirah Village Circle",
    price: "$450,000",
    beds: 1,
    baths: 1,
    sqft: 950,
    category: "Apartment",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
  }
];

export default function BuyPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading properties
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-navy-950 min-h-screen pb-20">
      {/* Hero Section */}
      <PageHero 
        subtitle="Exclusive Listings"
        title={<>Find Your Next <span className="text-gold-400">Masterpiece</span></>}
        description="Explore an exclusive collection of luxury properties in Dubai's most prestigious locations."
        backgroundImage="https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=80&w=1920"
      />


      {/* Filters Section */}
      <PropertyFilters />

      {/* Property Listing Section */}
      <section className="mt-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-gold-400 font-bold text-[10px] uppercase tracking-widest block mb-2">
              Available Properties
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Premium Property <span className="text-gold-400">Listings</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm">
            Showing {MOCK_PROPERTIES.length} exceptional properties across Dubai's most sought-after communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {loading ? (
              // Skeletons
              Array.from({ length: 6 }).map((_, i) => (
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
              // Actual Cards
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

        {/* Pagination or Load More - Placeholder for premium feel */}
        {!loading && (
          <div className="mt-20 flex justify-center">
            <button className="px-12 py-5 bg-navy-900 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-all duration-300 shadow-xl cursor-pointer">
              Load More Properties
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

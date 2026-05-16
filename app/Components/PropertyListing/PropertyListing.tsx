"use client";

import PropertyCard from "@/app/Components/Buy/PropertyCard";
import PropertySkeleton from "@/app/Components/Buy/PropertySkeleton";
import { motion, AnimatePresence } from "framer-motion";
import { getProperties, PropertyFilters } from "@/app/lib/properties";
import { useQuery } from "@tanstack/react-query";
import { PlotsRedirectCard } from "@/app/(pages)/properties/Listing";

interface PropertyListingProps {
  filters: Partial<PropertyFilters>;
}

export default function PropertyListing({ filters }: PropertyListingProps) {
  const {
    data: properties = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["properties", filters],
    queryFn: () => getProperties(filters),
    placeholderData: (prev) => prev, // 👈 smooth transition
  });

  return (
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
          {isLoading
            ? "Loading properties..."
            : `Showing ${properties.length} exceptional properties across Dubai's most sought-after communities.`}
        </p>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-8">
          <p className="text-red-400 text-sm">
            Failed to load properties. Please try again later.
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {isLoading ? (
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
          ) :  (
            // Actual Cards
            <>
            {properties.map((property: any, index: number) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
            {
              ( filters?.listingType === "buy"|| filters?.propertyType === "plots" || filters?.propertyType === "") && (
                <PlotsRedirectCard/>
              )
            }
            
            </>
            )
          // ) : (
          //   // Empty State
          //   <motion.div
          //     initial={{ opacity: 0 }}
          //     animate={{ opacity: 1 }}
          //     className="col-span-full text-center py-20"
          //   >
          //     <p className="text-gray-400 text-lg">
          //       No properties found matching your criteria.
          //     </p>
          //   </motion.div>
          // )
          }
        </AnimatePresence>
      </div>

      {/* Load More */}
      {!isLoading && properties.length > 0 && (
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-5 bg-navy-900 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-all duration-300 shadow-xl cursor-pointer">
            Load More Properties
          </button>
        </div>
      )}
    </section>
  );
}

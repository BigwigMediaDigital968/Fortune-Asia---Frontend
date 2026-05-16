import { Bath, BedDouble, MapPin, Square } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../Ui/SectionLabel";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "@/app/lib/properties";

const fallbackImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800";

export default function FeaturedProperties() {
  const {
    data: propertiesResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featuredProperties"],
    queryFn: () => getProperties({ limit: 3 }),
  });

  const properties = propertiesResponse || [];
  const renderSkeleton = (index: number) => (
    <div
      key={`property-skel-${index}`}
      className="group relative overflow-hidden rounded-[40px] bg-navy-900 border border-white/10 shadow-2xl"
    >
      <div className="aspect-4/5 bg-slate-800 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 w-2/3 rounded-full bg-slate-800 animate-pulse" />
        <div className="h-5 w-1/3 rounded-full bg-slate-800 animate-pulse" />
        <div className="h-4 w-full rounded-full bg-slate-800 animate-pulse" />
        <div className="h-4 w-5/6 rounded-full bg-slate-800 animate-pulse" />
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="h-10 rounded-full bg-slate-800 animate-pulse" />
          <div className="h-10 rounded-full bg-slate-800 animate-pulse" />
          <div className="h-10 rounded-full bg-slate-800 animate-pulse" />
        </div>
      </div>
    </div>
  );

  const cards =
    isLoading || isError
      ? Array.from({ length: 3 }).map((_, index) => renderSkeleton(index))
      : properties.map((prop: any, index: number) => {
          const image = prop.propertyImages?.[0] || fallbackImage;
          const title = prop.propertyName || prop.title || "Luxury Property";
          const location = prop.address || prop.subArea || "Dubai";
          const price = prop.price || "Contact for price";
          const category = prop.propertyType || prop.listingType || "Property";
          const beds = prop.bedroom || "-";
          const baths = prop.bathroom || "-";
          const sqft = prop.sizeSqft || "-";
          const href = prop.slug ? `/properties/${prop.slug}` : "/properties";

          return (
            <motion.div
              key={prop._id || prop.slug || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-4/5 shadow-2xl">
                <img
                  src={image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={title}
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {category}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <Link
                    href={href}
                    className="cursor-pointer text-center w-full py-4 bg-gold-400 text-white font-bold uppercase text-[10px] tracking-widest rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="px-2">
                <div className=" items-start mb-3">
                  <Link href={href} className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                    {title}
                  </Link>
                  <p className="text-gold-400 font-bold text-base">Starting from {price}</p>
                </div>
                <div className="flex items-center gap-2 text-white text-xs mb-6">
                  <MapPin size={12} className="text-gold-400" /> {location}
                </div>
                <div className="flex items-center text-white gap-6 pt-6 border-t border-white">
                  <div className="flex items-center gap-2">
                    <BedDouble size={16} />
                    <span className="text-xs font-bold">{beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={16} />
                    <span className="text-xs font-bold">{baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Square size={16} />
                    <span className="text-xs font-bold">{sqft}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        });

  return (
    <section className="py-5 md:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Curated" title="Featured Properties" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">{cards}</div>
      </div>
    </section>
  );
}

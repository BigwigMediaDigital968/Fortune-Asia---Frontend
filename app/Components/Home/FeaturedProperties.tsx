import { Bath, BedDouble, MapPin, Square } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SectionHeading } from "../Ui/SectionLabel";
import Link from "next/link";

const PROPERTIES = [
  {
    id: 1,
    title: "The Azure Penthouse",
    location: "Downtown, Dubai",
    price: "$2,450,000",
    beds: 4,
    baths: 3,
    sqft: 3200,
    category: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
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
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Skyline Mansion",
    location: "Business Bay, Dubai",
    price: "$1,200,000",
    beds: 3,
    baths: 2,
    sqft: 2100,
    category: "Condo",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function FeaturedProperties() {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Curated" title="Featured Properties" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PROPERTIES.map((prop, index) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-[40px] overflow-hidden mb-6 aspect-[4/5] shadow-2xl">
                  <img
                    src={prop.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={prop.title}
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {prop.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <Link
                      href={"/properties/abc"}
                      className="cursor-pointer text-center w-full py-4 bg-gold-400 text-white font-bold uppercase text-[10px] tracking-widest rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-gold-400 font-bold text-lg">
                      {prop.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white text-xs mb-6">
                    <MapPin size={12} className="text-gold-400" />{" "}
                    {prop.location}
                  </div>
                  <div className="flex items-center text-white gap-6 pt-6 border-t border-white">
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} />
                      <span className="text-xs font-bold">
                        {prop.beds} Beds
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={16} />
                      <span className="text-xs font-bold">
                        {prop.baths} Baths
                      </span>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <Square size={16} />
                      <span className="text-xs font-bold">
                        {prop.sqft} sqft
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

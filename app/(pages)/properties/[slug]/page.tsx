"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin, BedDouble, Bath, Square, Home,
    Calendar, Building, CheckCircle2, ChevronRight,
    PlayCircle, Globe, Share2, Heart, Info,
    MessageSquare, Map as MapIcon, ShieldCheck
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import PropertyDetailsGallery from "@/app/Components/Properties/PropertyDetailsGallery";
import EnquiryForm from "@/app/Components/Ui/EnquiryForm";
import RelatedPropertyCard from "@/app/Components/Properties/RelatedPropertyCard";
import { Property as BaseProperty } from "@/app/Components/Buy/PropertyCard";

// ─── Interfaces (Matching Mongoose Model) ──────────────────
export interface FAQItem {
    question: string;
    answer: string;
}

export interface DetailedProperty {
    id?: string;
    title: string;
    slug: string;
    description: string;
    type: string;
    purpose: "sale" | "rent" | "lease";
    listingStatus: "featured" | "new" | "hot" | "premium" | "standard";
    location: string;
    brochure?: string;
    builder?: string;
    images: string[];
    price: string;
    bedrooms: string;
    bathrooms: string;
    areaSqft: string;
    highlights: string[];
    featuresAmenities: string[];
    nearby: string[];
    googleMapUrl?: string;
    videoLink?: string;
    extraHighlights: string[];
    instagramLink?: string;
    extraDetails?: string;
    faqs: FAQItem[];
    metatitle?: string;
    metadescription?: string;
}

// ─── Mock Data ─────────────────────────────────────────────
const MOCK_PROPERTY: DetailedProperty = {
    title: "The Royal Atlantis Sky Villa",
    slug: "royal-atlantis-sky-villa",
    description: "Experience the pinnacle of luxury living in this architectural masterpiece located at Palm Jumeirah. This sky villa offers unparalleled views of the Arabian Gulf and the Dubai skyline, with private infinity pools and bespoke interiors designed by world-renowned designers.",
    type: "Sky Villa / Penthouse",
    purpose: "sale",
    listingStatus: "premium",
    location: "Palm Jumeirah, Dubai",
    builder: "Investment Corporation of Dubai",
    price: "AED 45,000,000",
    bedrooms: "5",
    bathrooms: "6",
    areaSqft: "12,500",
    images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400",
        "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&q=80&w=800",
    ],
    highlights: [
        "Private Infinity Pool overlooking the Ocean",
        "Exclusive access to Royal Atlantis amenities",
        "24/7 Bespoke Concierge Service",
        "Private Elevator and Formal Dining",
        "State-of-the-art Smart Home Integration"
    ],
    featuresAmenities: [
        "Infinity Pool", "Private Cinema", "Wine Cellar", "Home Spa & Sauna",
        "Outdoor Kitchen", "Landscape Terrace", "Gymnasium", "Chef's Kitchen"
    ],
    nearby: [
        "5 mins to Nakheel Mall",
        "10 mins to Dubai Marina",
        "25 mins to DXB Airport",
        "Close to Atlantis The Palm"
    ],
    faqs: [
        {
            question: "Is this property ready for move-in?",
            answer: "Yes, this luxury sky villa is fully furnished and ready for immediate occupancy."
        },
        {
            question: "What are the service charges?",
            answer: "Service charges are approximately AED 35-40 per sqft per annum."
        }
    ],
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14451.75841021484!2d55.127456!3d25.1128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f153bb1825501%3A0x6bba847c231767e4!2sPalm%20Jumeirah!5e0!3m2!1sen!2sae!4v1620000000000",
    extraHighlights: ["Voted Best Sky Villa 2024", "Limited Collection Unit"],
    extraDetails: "This unit belongs to the Signature Collection which features higher ceilings and premium marble flooring throughout.",
};

const RELATED_PROPERTIES: BaseProperty[] = [
    {
        id: "rp1",
        title: "Marina Penthouse",
        location: "Dubai Marina",
        price: "AED 12,000,000",
        beds: 3,
        baths: 4,
        sqft: 3500,
        category: "Apartment",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
    },
    {
        id: "rp2",
        title: "Palm Villa",
        location: "Palm Jumeirah",
        price: "AED 25,000,000",
        beds: 5,
        baths: 6,
        sqft: 8000,
        category: "Villa",
        image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800"
    },
    {
        id: "rp3",
        title: "Downtown Loft",
        location: "Downtown Dubai",
        price: "AED 4,500,000",
        beds: 2,
        baths: 2,
        sqft: 1800,
        category: "Loft",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800"
    },
    {
        id: "rp4",
        title: "Emirates Hills Mansion",
        location: "Emirates Hills",
        price: "AED 85,000,000",
        beds: 7,
        baths: 9,
        sqft: 15000,
        category: "Mansion",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800"
    },
    {
        id: "rp5",
        title: "Creek Side Apartment",
        location: "Dubai Creek",
        price: "AED 2,800,000",
        beds: 2,
        baths: 2,
        sqft: 1400,
        category: "Apartment",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800"
    }
];

export default function PropertyDetailsPage() {
    const property = MOCK_PROPERTY; // In reality, fetch by params.slug
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="bg-navy-950 min-h-screen pb-32">
            {/* ── TOP NAV PLACEHOLDER ── */}
            <div className="h-20" />

            {/* ── HEADER & GALLERY SECTION ── */}
            <section className="max-w-8xl mx-auto px-6 md:px-14 mt-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={motionContainer}
                    className="space-y-4"
                >

                    {/* Breadcrumbs & Actions */}
                    <motion.div variants={fadeUp} className="hidden flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">
                            <Home size={12} className="text-gold-400" />
                            <span>Properties</span>
                            <ChevronRight size={10} />
                            <span className="text-white">{property.type}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 p-3 bg-white/5 rounded-full border border-white/10 text-white hover:text-gold-400 transition-colors cursor-pointer">
                                <Share2 size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Share</span>
                            </button>
                            <button className="flex items-center gap-2 p-3 bg-white/5 rounded-full border border-white/10 text-white hover:text-gold-400 transition-colors cursor-pointer">
                                <Heart size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Save</span>
                            </button>
                        </div>
                    </motion.div>

                    <div className="pt-2">
                        <PropertyDetailsGallery images={property.images} title={property.title} />
                    </div>

                    {/* Title & Price Box */}
                    <motion.div variants={fadeUp} className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 bg-gold-400 text-navy-950 text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    {property.listingStatus}
                                </span>
                                <span className="px-3 py-1 bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                                    {property.purpose}
                                </span>
                            </div>
                            <h1 className="text-xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                                {property.title}
                            </h1>
                            <div className="flex items-center gap-2 text-white/50 font-sans">
                                <MapPin size={18} className="text-gold-400" />
                                <span className="text-sm md:text-base font-light tracking-wide">{property.location}</span>
                            </div>
                        </div>

                        <div className="lg:w-96 text-center lg:text-right">
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] block mb-2">Asking Price</span>
                            <div className="text-2xl md:text-3xl font-display font-bold text-gold-400">
                                {property.price}
                            </div>
                        </div>
                    </motion.div>

                    {/* Gallery Component */}



                </motion.div>
            </section>

            {/* ── MAIN CONTENT & SIDEBAR ── */}
            <section className="max-w-7xl mx-auto mt-16 lg:mt-10 px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* LEFT COLUMN: DETAILS */}
                    <div className="flex-1 space-y-16">

                        {/* Quick Stats Bar */}
                        <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-navy-900/50 rounded-xl border border-white/5">
                            <div className="flex flex-col items-center gap-2 border-r border-white/5">
                                <BedDouble size={24} className="text-gold-400" />
                                <span className="text-lg text-white font-bold">{property.bedrooms} Bedrooms</span>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest">Sleeping Spaces</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 md:border-r border-white/5">
                                <Bath size={24} className="text-gold-400" />
                                <span className="text-lg text-white font-bold">{property.bathrooms} Bathrooms</span>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest">En-suite Baths</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 border-r border-white/5">
                                <Square size={22} className="text-gold-400" />
                                <span className="text-lg text-white font-bold">{property.areaSqft} sqft</span>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest">Total Area</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Building size={22} className="text-gold-400" />
                                <span className="text-lg text-white font-bold">{property.type.split(" ")[0]}</span>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest">Property Type</span>
                            </div>
                        </motion.div>

                        {/* Description Section */}

                        <div className="space-y-6">
                            <SectionTitle icon={<Info size={20} />} title="About This Property" />
                            <p className="text-white/60 text-lg font-sans font-light leading-relaxed">
                                {property.description}
                            </p>
                            {property.extraDetails && (
                                <div className="p-6 bg-gold-400/5 border-l-2 border-gold-400 rounded-r-2xl">
                                    <p className="text-gold-100/70 text-sm italic font-light italic">
                                        "{property.extraDetails}"
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Property Specs Grid */}
                        <div className="space-y-8">
                            <SectionTitle icon={<Globe size={20} />} title="Property Specifications" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <SpecItem label="Property Status" value={property.listingStatus} />
                                <SpecItem label="Inquiry Type" value={property.purpose} />
                                <SpecItem label="Developer / Builder" value={property.builder || "N/A"} />
                                <SpecItem label="Property Type" value={property.type} />
                                <SpecItem label="Location Unit" value="Premium Sector" />
                                <SpecItem label="Completion Year" value="2024" />
                            </div>
                        </div>

                        {/* Highlights & Amenities */}
                        <div className="grid grid-cols-1 gap-12">
                            <div className="space-y-6">
                                <SectionTitle icon={<CheckCircle2 size={20} />} title="Elite Highlights" />
                                <ul className="space-y-4">
                                    {property.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 group">
                                            <div className="w-5 h-5 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5 group-hover:bg-gold-400 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:bg-navy-900" />
                                            </div>
                                            <span className="text-white/70 text-sm font-light tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <SectionTitle icon={<ShieldCheck size={20} />} title="Features & Amenities" />
                                <div className="flex flex-wrap gap-2">
                                    {property.featuresAmenities.map((item, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white/60 font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <SectionTitle icon={<ShieldCheck size={20} />} title="Nearby Access" />
                                <div className="flex flex-wrap gap-2">
                                    {property.nearby.map((item, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white/60 font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Map Location */}
                        <div className="space-y-6">
                            <SectionTitle icon={<MapIcon size={20} />} title="Location & Proximity" />
                            <div className="">
                                <div className="rounded-xl overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-700 h-[400px]">
                                    <iframe
                                        src={property.googleMapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <SectionTitle icon={<MessageSquare size={20} />} title="Common Inquiries" />
                            <div className="space-y-4">
                                {property.faqs.map((faq, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className={`bg-white/[0.03] border rounded-2xl p-4 md:p-8 transition-all duration-300 group cursor-pointer ${openFaq === i ? "border-gold-400/50 bg-white/[0.06]" : "border-white/10 hover:border-white/20"
                                            }`}
                                    >
                                        <h3 className="text-white font-medium text-sm md:text-lg flex items-center justify-between">
                                            {faq.question}
                                            <ChevronRight
                                                size={18}
                                                className={`text-gold-400 transition-transform duration-300 ${openFaq === i ? "rotate-90" : "rotate-0"
                                                    }`}
                                            />
                                        </h3>
                                        <AnimatePresence>
                                            {openFaq === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-white/50 text-sm font-light leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SIDEBAR */}
                    <aside className="w-full lg:w-[420px] shrink-0">
                        <div className="space-y-8">

                            {/* Inquiry Form Card */}
                            <div className="bg-navy-900 border border-white/10 rounded-xl p-4 md:p-6 shadow-2xl relative overflow-hidden">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold-400/10 blur-[100px] rounded-full" />

                                <div className="relative z-10 space-y-8">
                                    <div className="text-center">
                                        <span className="text-[10px] font-bold text-gold-400 uppercase tracking-[0.4em] block mb-3">Priority Access</span>
                                        <h2 className="text-3xl font-display font-bold text-white">Inquire Now</h2>
                                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-2">Ref: {property.slug.toUpperCase()}</p>
                                    </div>

                                    {/* Direct use of EnquiryForm as requested */}
                                    <EnquiryForm />
                                </div>
                            </div>

                            {/* Related Properties */}
                            <div className="space-y-6 pt-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-2 h-8 bg-gold-400 rounded-full" />
                                    <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Related Properties</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {RELATED_PROPERTIES.map((related, idx) => (
                                        <RelatedPropertyCard key={related.id} property={related} index={idx} />
                                    ))}
                                </div>
                            </div>

                            {/* Brochure Download Card */}
                            {property.brochure && (
                                <div className="bg-gold-400 group p-1 rounded-[2.5rem] overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-gold-400/20 transition-all">
                                    <div className="bg-navy-900 rounded-[2.4rem] p-8 flex items-center justify-between border border-transparent group-hover:border-navy-800 transition-all">
                                        <div>
                                            <h4 className="text-white font-display font-bold text-lg">Property Brochure</h4>
                                            <p className="text-gold-400/60 text-[10px] uppercase font-bold tracking-widest">Full Technical Details</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center text-navy-950">
                                            <PlayCircle size={24} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </aside>

                </div>
            </section>
        </main>
    );
}

// ─── Shared Components ─────────────────────────────────────

function SectionTitle({ icon, title }: { icon: React.ReactNode, title: string }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400">
                {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">{title}</h2>
            <div className="flex-1 h-px bg-white/5 hidden sm:block" />
        </div>
    );
}

function SpecItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-white/20 transition-colors">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{label}</span>
            <span className="text-sm font-semibold text-white uppercase tracking-wider">{value}</span>
        </div>
    );
}

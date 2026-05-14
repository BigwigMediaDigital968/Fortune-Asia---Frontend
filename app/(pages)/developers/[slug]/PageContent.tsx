"use client";
import { useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building,
  Calendar,
  CheckCircle2,
  ChevronRight,
  PlayCircle,
  Globe,
  Share2,
  Heart,
  Info,
  MessageSquare,
  Map as MapIcon,
  ShieldCheck,
  ExternalLink,
  Award,
  Users,
  Star,
  ChevronLeft,
  Maximize2,
  Briefcase,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import EnquiryForm from "@/app/Components/Ui/EnquiryForm";
import { Developer } from "@/app/types";

export default function PageContent({ developer }: { developer: Developer }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  console.log("Rendering Developer PageContent with developer:", developer);

  const images =
    developer?.images && developer.images.length > 0 ? developer.images : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      {/* ── HERO SECTION ── */}
      <div className="w-full mx-auto font-sans">
        {/* Main Stage */}
        <div className="relative w-full h-[60vh] overflow-hidden rounded-lg group bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`Developer Image ${activeIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
          >
            <ChevronRight size={24} />
          </button>

          {/* View Fullscreen Overlay (Icon matching style) */}
          <button className="hidden absolute top-4 right-4 p-2 bg-black/20 rounded hover:bg-black/40 transition-colors">
            <Maximize2 size={18} className="text-white" />
          </button>
        </div>

        {/* Thumbnails Container - Responsive Slider */}
        <div className="mt-4 relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-2 md:gap-3 overflow-x-auto pb-2 no-scrollbar snap-x touch-pan-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images?.map((img, index) => (
              <button
                key={img}
                onClick={() => selectImage(index)}
                className={`relative flex-shrink-0 w-24 h-16 md:w-36 md:h-24 rounded-md overflow-hidden snap-start transition-all duration-300 ${
                  activeIndex === index
                    ? "ring-2 ring-gold-500 ring-offset-2 opacity-100 scale-[0.98]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={""}
                  unoptimized
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
                {/* Optional border overlay for active state like in your screenshot */}
                {activeIndex === index && (
                  <div className="absolute inset-0 border-2 border-yellow-600 rounded-md pointer-events-none" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Swipe Indicator (Optional) */}
          <div className="flex md:hidden justify-center mt-2 gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all ${activeIndex === i ? "w-4 bg-gold-500" : "w-1 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `,
          }}
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <div className=" text-white font-sans overflow-hidden">
              <div className="max-w-6xl mx-auto">
                {/* Top Section: Logo, Title, and Stats Grid */}
                <div className=" gap-8 lg:gap-16 items-start mb-5">
                  {/* Logo & Identity */}
                  <div className=" space-y-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-24 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 flex items-center justify-center p-2 shadow-2xl"
                    >
                      {/* Fallback to Icon if image fails */}
                      {developer.logo ? (
                        <Image
                          src={developer.logo }
                          alt="Developer Logo"
                          width={96}
                          height={96}
                          unoptimized
                        className="w-full h-full object-contain filter brightness-125"
                        />
                      ) : (
                        <Building2 className="text-gold-500 w-10 h-10" />
                      )}
                    </motion.div>

                    <div className="space-y-4 mb-4">
                      <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white">
                        {developer.name}
                      </h1>
                      <p className="text-slate-400 text-lg font-light leading-relaxed">
                        {developer.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Stats & Metadata Cards */}
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                    {developer.stats?.establishedYear && (
                      <StatCard
                        icon={<Calendar className="w-5 h-5 text-gold-500" />}
                        label="Established"
                        value={developer.stats?.establishedYear}
                        isHighlight={false}
                      />
                    )}
                    {(developer?.stats?.totalProjects ?? 0) > 0 && (
                      <StatCard
                        icon={<Briefcase className="w-5 h-5 text-gold-500" />}
                        label="Total Projects"
                        value={developer.stats?.totalProjects}
                        isHighlight={false}
                      />
                    )}
                    <div className="md:col-span-2">
                      {developer.website && (
                        <a
                          href={`${developer.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-gold-500/10 rounded-lg">
                              <Globe className="w-5 h-5 text-gold-500" />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                                Official Website
                              </p>
                              <p className="text-white group-hover:text-gold-400 transition-colors">
                                {developer.website}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="text-slate-600 group-hover:text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Long Description Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative py-10 border-t border-white/5 hidden"
                >
                  <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-gold-500 to-transparent" />
                  <h3 className="text-xs uppercase tracking-[0.3em] text-gold-500 font-bold mb-6">
                    Corporate Overview
                  </h3>
                  <div className="max-w-4xl">
                    <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed italic font-serif">
                      "{developer.fullDescription}"
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* About Section */}
            {developer?.fullDescription && (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={motionContainer}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl font-display font-bold text-white mb-8"
                >
                  About {developer?.name}
                </motion.h2>
                <motion.div
                  variants={fadeUp}
                  className="prose prose-lg prose-invert max-w-none hidden"
                  dangerouslySetInnerHTML={{
                    __html: developer.fullDescription,
                  }}
                />
                <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed italic font-serif">
                      "{developer.fullDescription}"
                    </p>
              </motion.section>
            )}

            {/* Highlights */}
            {developer?.highlights && developer.highlights.length > 0 && (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={motionContainer}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl font-display font-bold text-white mb-8"
                >
                  Key Highlights
                </motion.h2>
                <motion.div
                  variants={fadeUp}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {developer.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl"
                    >
                      <CheckCircle2
                        className="text-gold-400 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-white/80">{highlight}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.section>
            )}

            {/* Amenities */}
            {developer?.amenities && developer.amenities.length > 0 && (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={motionContainer}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl font-display font-bold text-white mb-8"
                >
                  Amenities & Features
                </motion.h2>
                <motion.div
                  variants={fadeUp}
                  className="grid md:grid-cols-3 gap-4"
                >
                  {developer.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl"
                    >
                      <Star className="text-gold-400 flex-shrink-0" size={18} />
                      <span className="text-white/80">{amenity}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.section>
            )}

            {/* Certifications */}
            {developer?.certifications &&
              developer.certifications.length > 0 && (
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={motionContainer}
                >
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl font-display font-bold text-white mb-8"
                  >
                    Certifications & Awards
                  </motion.h2>
                  <motion.div
                    variants={fadeUp}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    {developer.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-gold-400/10 to-gold-400/5 border border-gold-400/20 rounded-xl"
                      >
                        <Award
                          className="text-gold-400 flex-shrink-0"
                          size={20}
                        />
                        <span className="text-white font-medium">{cert}</span>
                      </div>
                    ))}
                  </motion.div>
                </motion.section>
              )}

            {/* FAQs */}
            {developer?.faqs && developer.faqs.length > 0 && (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={motionContainer}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl font-display font-bold text-white mb-8"
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-4">
                  {developer.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenFaq(openFaq === index ? null : index)
                        }
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <span className="text-white font-medium">
                          {faq.question}
                        </span>
                        <ChevronRight
                          size={20}
                          className={`text-gold-400 transition-transform ${
                            openFaq === index ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4">
                              <div
                                className="text-white/70 prose prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Social Links */}
            {developer?.socialLinks && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={motionContainer}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <motion.h3
                  variants={fadeUp}
                  className="text-xl font-display font-bold text-white mb-6"
                >
                  Connect With Us
                </motion.h3>
                <motion.div variants={fadeUp} className="space-y-3">
                  {developer.socialLinks.facebook && (
                    <a
                      href={developer.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Globe size={18} className="text-blue-400" />
                      <span className="text-white/80">Facebook</span>
                    </a>
                  )}
                  {developer.socialLinks.instagram && (
                    <a
                      href={developer.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Globe size={18} className="text-pink-400" />
                      <span className="text-white/80">Instagram</span>
                    </a>
                  )}
                  {developer.socialLinks.linkedin && (
                    <a
                      href={developer.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Globe size={18} className="text-blue-600" />
                      <span className="text-white/80">LinkedIn</span>
                    </a>
                  )}
                  {developer.socialLinks.twitter && (
                    <a
                      href={developer.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Globe size={18} className="text-blue-400" />
                      <span className="text-white/80">Twitter</span>
                    </a>
                  )}
                </motion.div>
              </motion.div>
            )}

            {/* Brochure Download */}
            {developer?.brochure && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={motionContainer}
                className="bg-gradient-to-br from-gold-400/10 to-gold-400/5 border border-gold-400/20 rounded-2xl p-6"
              >
                <motion.h3
                  variants={fadeUp}
                  className="text-xl font-display font-bold text-white mb-4"
                >
                  Download Brochure
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="text-white/70 text-sm mb-6"
                >
                  Get detailed information about our projects and developments.
                </motion.p>
                <motion.a
                  variants={fadeUp}
                  href={developer.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gold-400 text-navy-950 font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={16} />
                  Download PDF
                </motion.a>
              </motion.div>
            )}

            {/* Enquiry Form */}
            <EnquiryForm source={`developer - ${developer?.name}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

const StatCard = ({
  icon,
  label,
  value,
  isHighlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: any;
  isHighlight: boolean;
}) => (
  <div
    className={`p-6 rounded-xl border flex items-center gap-5 transition-all duration-300 ${
      isHighlight
        ? "bg-gradient-to-br from-[#1e293b] to-[#020617] border-gold-500/30"
        : "bg-white/5 border-white/10"
    }`}
  >
    <div className="p-3 bg-white/5 rounded-lg">{icon}</div>
    <div>
      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
        {label}
      </p>
      <p className="text-2xl font-serif text-white">{value}</p>
    </div>
  </div>
);

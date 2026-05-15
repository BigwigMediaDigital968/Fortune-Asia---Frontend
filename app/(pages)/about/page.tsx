"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Clock,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Home,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import SectionLabel, { SectionHeading } from "@/app/Components/Ui/SectionLabel";
import PageHero from "@/app/Components/Ui/PageHero";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Link from "next/link";
import Services from "@/app/Components/Home/Services";

const teamMembers = [
  {
    name: "Mayur Sail",
    role: "Owner",
    bio: "With over 15 years of experience in Dubai’s fast-growing real estate market, Mayur Sail specializes in luxury properties, premium developments, and high-value investment opportunities. His strong understanding of the UAE market, property regulations, and emerging growth areas has helped clients secure profitable and future-ready investments across Dubai. Known for his transparent approach and strong industry network, he delivers trusted guidance and seamless real estate solutions tailored to every client’s goals.",
    image:
      "/person-1.jpeg",
  },
];

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Trusted Advisors",
    desc: "Expert guidance backed by years of Dubai market experience and RERA certification.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Market Expertise",
    desc: "In-depth knowledge of prime locations, upcoming off-plan projects, and ROI trends.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Verified Listings",
    desc: "Every property in our portfolio is thoroughly vetted for authenticity and value.",
  },
];

const services = [
  {
    title: "Sell Property",
    desc: "Get the best value for your property with expert marketing and negotiation.",
    detailedDesc:
      "We help you sell faster and smarter with professional listings, targeted exposure, and strong negotiation strategies to maximize your return.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    link: "/buy",
  },
  {
    title: "Rent Property",
    desc: "Find the perfect rental home tailored to your lifestyle and budget.",
    detailedDesc:
      "From apartments to villas, we offer a wide range of rental options with seamless support—from property search to final agreement.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    link: "/rent",
  },
];

export default function About() {
  return (
    <main className="bg-navy-950 text-white">
      {/* ── 1. HERO SECTION ── */}
      <PageHero
        subtitle="Our Story"
        title={
          <>
            About <span className="text-gold-400">Fortune Asia</span>
          </>
        }
        description="Your Trusted Real Estate Partner in the Heart of Dubai. Redefining luxury living through expertise and integrity."
        backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
      />

      {/* ── 2. COMPANY OVERVIEW SECTION ── */}
      <section className="py-24 px-6 md:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Gallery (Reusing Home/About style logic) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-auto w-full p-2"
          >
            <div className="relative top-0 -left-3 sm:-left-5 md:left-0 w-[80%] max-w-[400px] aspect-square rounded-2xl  border-2 border-navy-900 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                alt="Modern Office"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute -bottom-1/2 -right-1/2 -translate-1/2  w-[60%] aspect-square rounded-2xl overflow-hidden border-4 border-navy-950 shadow-2xl z-20">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                  alt="Team Meeting"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Gold Accent */}
              <div className="absolute -top-5 -left-5 md:-top-10 md:-left-10 w-32 aspect-square border-l-2 border-t-2 border-gold-400/30 rounded-tl-3xl z-20" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle={"Who we are"} centered={false} />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Our Story of <span className="text-gold-400">Excellence</span>
            </h2>
            <div className="space-y-6 text-white/70 font-sans leading-relaxed">
              <p>
                We didn’t begin merely as property consultants, we set out as creators of possibility. Our founders understood that every transaction carries a deeper purpose: finding a space that reflects who you are, enhances your lifestyle, and unlocks new potential. Whether it’s a family seeking comfort or an investor shaping a lasting legacy.
              </p>
              <p>With a balance of global standards and strong local expertise, we craft real estate journeys as unique as the people we serve. Through every handshake, agreement, and achievement, we stand by one belief: true fortune isn’t just in the properties we offer, it’s in the futures we help create. This is more than business.
              </p>
              <p>
                We recognized the chance to serve with intention, transparency, and care. From the very beginning, our mission has been to redefine luxury, not by price or status alone, but through insight, trust, and genuine relationships.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-gold-400 text-3xl font-display font-bold">
                  10+
                </h4>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="text-gold-400 text-3xl font-display font-bold">
                  2.4B+
                </h4>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                  AED Portfolio
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TeamSection />

      {/* ── 5. SERVICES SECTION ── */}
      <Services />

      {/* ── 4. WHY CHOOSE US SECTION ── */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image with Parallax-like depth */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" // Use a high-end, dark architectural shot
            alt="Premium Background"
            fill
            className="object-cover scale-110"
          />
          {/* Multi-layered gradient for that deep, rich look */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
          {/* Left Aligned Header */}
          <div className="max-w-3xl mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle={"Institutional Grade"}
                centered={false}
              />
              <h2 className="font-display text-5xl md:text-7xl font-light text-white mt-6 leading-tight">
                Expertise You Can <br />
                <span className="font-serif italic text-gold-400">
                  Implicitly Trust
                </span>
              </h2>
              <div className="w-20 h-[2px] bg-gold-500 mt-8" />
            </motion.div>
          </div>

          {/* Glossy Modern Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values?.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* The Glass Card Body */}
                <div
                  className="relative h-full p-10 overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl
                              bg-white/[0.03] backdrop-blur-xl border border-white/10 
                              transition-all duration-500 group-hover:bg-white/[0.07] group-hover:border-gold-500/30"
                >
                  {/* Glossy Reflection Effect */}
                  <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 transition-all duration-1000 group-hover:top-[-50%] group-hover:left-[-50%]" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-navy-950/50 border border-white/10 rounded-full flex items-center justify-center text-gold-400 mb-10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500">
                      {value.icon}
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-white mb-4 tracking-wide group-hover:text-gold-400 transition-colors">
                      {value.title}
                    </h3>

                    <p className="text-white/50 leading-relaxed font-sans text-base group-hover:text-white/80 transition-colors">
                      {value.desc}
                    </p>
                  </div>

                  {/* Decorative bottom corner accent */}
                  <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 border-r-2 border-b-2 border-gold-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const TeamSection = () => {
  return (
    <section className="py-32 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <SectionHeading subtitle={"The Leadership"} centered={false} />
            <h2 className="font-display text-5xl md:text-7xl font-light text-white leading-tight">
              The Visionaries <br />
              <span className="font-serif italic text-gold-400">
                Behind Fortune Asia
              </span>
            </h2>
          </div>
          <p className="text-white/50 max-w-xs text-lg font-light leading-relaxed border-l border-gold-500/30 pl-6">
            A collective of elite strategists redefining the financial landscape
            of the Middle East.
          </p>
        </div>

        {/* Modern Staggered Grid */}
        <div className="max-w-5xl mx-auto">
          {teamMembers?.map((member, i) => (
            <>
              <div key={i} className="group relative">
                <div className="flex flex-col md:flex-row items-end gap-8 md:gap-16">

                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-2/5 aspect-[4/5] relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover sm:grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:grayscale-0 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                  </motion.div>

                  {/* Content Column - Baseline Aligned */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-3/5 pb-4 space-y-6"
                  >
                    <div className="space-y-2">
                      <p className="text-yellow-500 text-xs uppercase tracking-[0.3em] font-bold">
                        {member.role}
                      </p>
                      <h3 className="text-white text-4xl md:text-5xl font-serif font-light">
                        {member.name}
                      </h3>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 to-transparent hidden md:block" />
                      <p className="text-slate-400 text-lg leading-relaxed font-light italic">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Background Decorative Element */}
                <div className="absolute -bottom-10 -right-10 text-[120px] font-serif italic text-white/[0.02] pointer-events-none select-none hidden lg:block">
                  Signature
                </div>
              </div></>
          ))}
        </div>
      </div>
    </section>
  );
};

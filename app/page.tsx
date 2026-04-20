"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home/Hero";
import About from "./Components/Home/About";
import Features from "./Components/Home/Features";
import Developers from "./Components/Home/Developers";
import Testimonials from "./Components/Home/Testimonials";
import LeadForm from "./Components/Home/LeadForm";
import CTABanner from "./Components/Home/CTABanner";
import Blogs from "./Components/Home/Blogs";
import StatsBar from "./Components/Home/StatsBar";
import Footer from "./Components/Footer";
import HeroDesign1 from "./Hero/page";
import NavbarWrapper from "./Components/NavbarWrapper";
import FeaturedProperties from "./Components/Home/FeaturedProperties";
import Services from "./Components/Home/Services";

export default function Home() {

  return (
    <main className="bg-navy-950">

      <HeroDesign1 />
      <About />
      <FeaturedProperties />
      <Developers />
      <Testimonials />
      <LeadForm />
      <Blogs />
      <CTABanner />


    </main>
  );
}

// ─── Types ────────────────────────────────────────────────
type Tab = "buy" | "rent" | "offplan";

// ─── Animation Variants ───────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.08,
    },
  }),
};

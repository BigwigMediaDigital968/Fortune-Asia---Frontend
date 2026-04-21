"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    ChevronRight, Calendar, User, Clock,
    Share2,
    Link as LinkIcon, ArrowLeft, ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import EnquiryForm from "@/app/Components/Ui/EnquiryForm";
import BlogMiniCard from "@/app/Components/Blogs/BlogMiniCard";
import { FaFacebookF, FaFacebookSquare, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

// ─── Interfaces ──────────────────────────────────────────
export interface BlogContentSection {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface FullBlogEntry {
    title: string;
    category: string;
    date: string;
    author: string;
    image: string;
    content: BlogContentSection[];
}

// ─── Mock Data for Demo ────────────────────────────────────
const MOCK_BLOG: FullBlogEntry = {
    title: "A Guide to Restful Nights and Refreshing Mornings",
    category: "Health & Wellness",
    date: "June 30, 2024",
    author: "Dr. Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1200",
    content: [
        {
            id: "introduction",
            title: "Introduction",
            content: (
                <div className="space-y-4">
                    <p>
                        Sleep, the essential and inevitable part of our daily lives, influences everything from our mood to productivity and overall health. Yet, for many, achieving a truly restful night remains an elusive goal.
                    </p>
                    <p>
                        In this comprehensive guide, we explore the science of sleep and provide actionable steps to transform your nightly routine into a sanctuary of recovery.
                    </p>
                </div>
            )
        },
        {
            id: "understanding-circadian-rhythms",
            title: "Understanding Circadian Rhythms",
            content: (
                <div className="space-y-4">
                    <p>
                        Our bodies are governed by an internal clock known as the circadian rhythm. This biological process responds to light and darkness, signaling to our brain when it's time to be alert and when it's time to rest.
                    </p>
                    <div className="relative aspect-video my-8 rounded-xl overflow-hidden border border-white/5">
                        <Image
                            src="https://images.unsplash.com/photo-1511296265581-c24500444084?auto=format&fit=crop&q=80&w=800"
                            alt="Sleep cycle"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p>
                        Disruptions to this rhythm—whether through blue light exposure from screens or irregular sleep schedules—can lead to chronic fatigue and lowered immunity.
                    </p>
                </div>
            )
        },
        {
            id: "the-optimized-bedroom",
            title: "The Optimized Bedroom",
            content: (
                <div className="space-y-4">
                    <p>
                        Your environment plays a crucial role in sleep quality. A luxury bedroom is not just about aesthetics; it's about engineering the perfect conditions for rest.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-white/70">
                        <li>Maintain a cool temperature (around 18-20°C).</li>
                        <li>Invest in high-thread-count Egyptian cotton bedding.</li>
                        <li>Use blackout curtains to eliminate street light.</li>
                        <li>Consider white noise or green noise for auditory consistency.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "evening-rituals",
            title: "Evening Rituals",
            content: (
                <div className="space-y-4">
                    <p>
                        How you spend the two hours before bed determines the quality of the eight hours that follow. Digital detoxing and mindful reflection are key components of a high-performance evening ritual.
                    </p>
                    <blockquote className="border-l-2 border-gold-400 p-6 bg-gold-400/5 rounded-r-xl my-8 italic text-gold-100/80">
                        "Luxury is not just in the objects we own, but in the time we give ourselves to recover and reflect."
                    </blockquote>
                </div>
            )
        }
    ]
};

const RELATED_POSTS = [
    {
        id: "b2",
        slug: "the-power-of-prioritizing-sleep-for-overall-health",
        title: "The Power of Prioritizing Sleep for Overall Health",
        category: "Updates",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1511296265581-c24500444084?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "b3",
        slug: "a-journey-through-sleep-and-bedding-choices",
        title: "A Journey Through Sleep and Bedding Choices",
        category: "Sleep Remedies",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "b4",
        slug: "5-science-backed-tips-to-conquer-insomnia",
        title: "5 Science-Backed Tips to Conquer Insomnia",
        category: "Sleep Resources",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1512428559087-560ef5ceab42?auto=format&fit=crop&q=80&w=600",
    }
];

export default function BlogDetailsPage() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);
    const blog = MOCK_BLOG;

    return (
        <main className="bg-navy-950 min-h-screen">
            {/* ── HERO SECTION (FIXED HEIGHT, FULL WIDTH) ── */}
            <section className="relative h-[60vh] min-h-[450px] w-full flex items-end justify-center overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />

                <div className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-14">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={motionContainer}
                        className="space-y-6"
                    >
                        {/* URL-based Breadcrumbs */}
                        <motion.nav variants={fadeUp} className="flex items-center gap-3">
                            <Link href="/" className="text-white/40 hover:text-gold-400 transition-colors text-[10px] uppercase font-bold tracking-widest">Home</Link>
                            {pathSegments.map((segment, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <ChevronRight size={10} className="text-white/20" />
                                    <Link
                                        href={`/${pathSegments.slice(0, i + 1).join('/')}`}
                                        className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${i === pathSegments.length - 1 ? "text-gold-400 pointer-events-none" : "text-white/40 hover:text-white"
                                            }`}
                                    >
                                        {segment.replace(/-/g, ' ')}
                                    </Link>
                                </div>
                            ))}
                        </motion.nav>

                        <motion.h1
                            variants={fadeUp}
                            className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl tracking-tight leading-[1.1]"
                        >
                            {blog.title}
                        </motion.h1>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8 pt-4 border-t border-white/10 w-fit">
                            <div className="flex items-center gap-2 text-white/60 text-xs">
                                <Calendar size={14} className="text-gold-400" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60 text-xs">
                                <User size={14} className="text-gold-400" />
                                <span>{blog.author}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── MAIN CONTENT LAYOUT (3-COLUMN) ── */}
            <section className="max-w-8xl mx-auto px-6 md:px-14 py-24">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">

                    {/* LEFT COLUMN: TOC + ENQUIRY */}
                    <aside className="lg:w-[18%] shrink-0 space-y-12">
                        <div className="sticky top-32 space-y-12">
                            {/* Table of Contents */}
                            <div className="space-y-6">
                                <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] border-l-2 border-gold-400 pl-4">Contents</h3>
                                <nav className="flex flex-col gap-4">
                                    {blog.content.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="text-sm text-white/60 hover:text-gold-400 transition-colors font-sans font-light tracking-wide cursor-pointer"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="hidden lg:block p-8 bg-navy-900 border border-white/5 rounded-xl text-center space-y-6 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/5 transition-all duration-500" />
                                <h4 className="text-white font-display font-bold text-xl relative z-10">Start Your Journey</h4>
                                <p className="text-white/40 text-sm font-light relative z-10 leading-relaxed">Let us find the perfect architectural sanctuary for you.</p>
                                <Link href="/contact" className="relative block z-10 w-full py-4 bg-gold-400 text-navy-950 font-bold uppercase text-[10px] tracking-[0.2em] rounded-lg hover:bg-white transition-all cursor-pointer shadow-xl shadow-gold-400/10">
                                    Contact Experts
                                </Link>
                            </div>

                        </div>
                    </aside>

                    {/* MIDDLE COLUMN: BLOG CONTENT */}
                    <article className="lg:w-[58%] prose prose-invert prose-gold max-w-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="space-y-16"
                        >
                            {blog.content.map((section) => (
                                <section key={section.id} id={section.id} className="scroll-mt-32 space-y-6">
                                    <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                                        {section.title}
                                    </h2>
                                    <div className="text-white/70 text-lg font-sans font-light leading-relaxed">
                                        {section.content}
                                    </div>
                                </section>
                            ))}

                            {/* Social Share Bar */}
                            <div className="pt-16 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Share Article:</span>
                                    <div className="flex items-center gap-3">
                                        <SocialCircle icon={<FaFacebookF size={14} />} />
                                        <SocialCircle icon={<IoLogoWhatsapp size={14} />} />
                                        <SocialCircle icon={<FaXTwitter size={14} />} />
                                        <SocialCircle icon={<FaLinkedinIn size={14} />} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-white/60 hover:text-gold-400 transition-colors cursor-pointer">
                                    <Share2 size={14} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Copy Link</span>
                                </div>
                            </div>
                        </motion.div>
                    </article>

                    {/* RIGHT COLUMN: RELATED BLOGS */}
                    <aside className="lg:w-[24%] shrink-0 space-y-8">
                        {/* Enquiry Mini Form */}
                        <div className="p-1 bg-gold-400/10 rounded-xl overflow-hidden border border-white/5">
                            <div className="bg-navy-900/40 p-2 pt-4 rounded-[calc(0.75rem-1px)]">
                                <h4 className="text-white font-display font-bold text-lg mb-4">Questions?</h4>
                                <EnquiryForm />
                            </div>
                        </div>
                        <div className="px-4">
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] border-l-2 border-gold-400 pl-4">
                                Related Stories
                            </span>
                        </div>
                        <div className="space-y-6">
                            {RELATED_POSTS.map((post, idx) => (
                                <BlogMiniCard key={post.id} blog={post} index={idx} />
                            ))}
                        </div>


                    </aside>

                </div>
            </section>
        </main>
    );
}

// ─── Shared UI Logic ──────────────────────────────────────

function SocialCircle({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:bg-gold-400/10 transition-all cursor-pointer">
            {icon}
        </div>
    );
}

"use client";

import PageHero from "@/app/Components/Ui/PageHero";
import BlogCard, { BlogEntry } from "@/app/Components/Blogs/BlogCard";
import BlogMiniCard from "@/app/Components/Blogs/BlogMiniCard";
import { motion } from "framer-motion";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Image from "next/image";
import Link from "next/link";

const BLOG_POSTS: BlogEntry[] = [
    {
        id: "b1",
        slug: "a-guide-to-restful-nights-and-refreshing-mornings",
        title: "A Guide to Restful Nights and Refreshing Mornings",
        category: "Health & Wellness",
        date: "June 30, 2024",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1200",
        excerpt: "Sleep, the essential and inevitable part of our daily lives, influences everything from our mood to productivity and overall health.",
        featured: true,
        number: "21"
    },
    {
        id: "b2",
        slug: "the-power-of-prioritizing-sleep-for-overall-health",
        title: "The Power of Prioritizing Sleep for Overall Health",
        category: "Updates",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1511296265581-c24500444084?auto=format&fit=crop&q=80&w=600",
        featured: true
    },
    {
        id: "b3",
        slug: "a-journey-through-sleep-and-bedding-choices",
        title: "A Journey Through Sleep and Bedding Choices",
        category: "Sleep Remedies",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
        featured: true
    },
    {
        id: "b4",
        slug: "5-science-backed-tips-to-conquer-insomnia",
        title: "5 Science-Backed Tips to Conquer Insomnia",
        category: "Sleep Resources",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1512428559087-560ef5ceab42?auto=format&fit=crop&q=80&w=600",
        featured: true
    },
    {
        id: "b5",
        slug: "separating-fact-from-fiction-for-a-better-nights-rest",
        title: "Separating Fact from Fiction for a Better Night's Rest",
        category: "Sleep Basics",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1495433334492-45245de182.jpg?auto=format&fit=crop&q=80&w=600",
        featured: true
    },
    {
        id: "b6",
        slug: "caffeine-and-sleep-how-does-caffeine-affect-sleep",
        title: "Caffeine and Sleep - How Does Caffeine Affect Sleep?",
        category: "Sleep Resources",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
        excerpt: "Caffeine blocks the action of a natural brain chemical associated with sleep, making it harder for you to wind down.",
        number: "4"
    },
    {
        id: "b7",
        slug: "how-not-to-sleep-11-tips-on-how-to-stay-awake-at-work",
        title: "How Not to Sleep — 11 Tips on How to Stay Awake at Work",
        category: "Sleep Basics",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
        excerpt: "Sleep, the essential and inevitable part of our daily lives, influences everything from our productivity to mood."
    },
    {
        id: "b8",
        slug: "what-is-green-noise-and-how-does-it-help-with-sleep",
        title: "What is Green Noise and How Does it Help with Sleep?",
        category: "Sleep Remedies",
        date: "June 30, 2023",
        image: "https://images.unsplash.com/photo-1518531985167-72c676af5439?auto=format&fit=crop&q=80&w=600",
        excerpt: "Sleep, the essential and inevitable part of our daily lives, influences everything from our health and overall wellness."
    },
    {
        id: "b9",
        slug: "the-architecture-of-dreams-modern-bedroom-design",
        title: "The Architecture of Dreams: Modern Bedroom Design",
        category: "Design",
        date: "April 12, 2024",
        image: "https://images.unsplash.com/photo-1560448204-61dc36dc98bd?auto=format&fit=crop&q=80&w=600",
        excerpt: "Explore how architectural choices in your home can significantly impact your sleep quality and mental peace."
    },
    {
        id: "b10",
        slug: "investment-insights-dubais-luxury-real-estate-trends",
        title: "Investment Insights: Dubai's Luxury Real Estate Trends",
        category: "Real Estate",
        date: "April 05, 2024",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
        excerpt: "An in-depth look at why global investors are pivoting towards Dubai's high-end residential market this year."
    },
    {
        id: "b11",
        slug: "the-future-of-smart-homes-in-sustainable-living",
        title: "The Future of Smart Homes in Sustainable Living",
        category: "Technology",
        date: "March 28, 2024",
        image: "https://images.unsplash.com/photo-1558002038-103792e1972d?auto=format&fit=crop&q=80&w=600",
        excerpt: "How automation and smart sensors are redefining the concept of an energy-efficient luxury home."
    }
];

export default function BlogsPage() {
    const featuredMain = BLOG_POSTS[0];
    const featuredSecondary = BLOG_POSTS.slice(1, 5);
    const regularBlogs = BLOG_POSTS.slice(5);

    return (
        <main className="bg-navy-950 min-h-screen pb-32">
            <PageHero
                subtitle="Journal & Insights"
                title={<>Our Latest <span className="text-gold-400">Stories</span></>}
                description="Expert perspectives on the Dubai real estate market, luxury lifestyle, and structural innovation."
                backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1920"
            />

            {/* Featured Section (1+4 Layout) */}
            <section className="mt-20 max-w-7xl mx-auto px-6 md:px-14">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-24">
                    {/* Main Featured (Left) */}
                    <div className="w-full lg:w-[60%] ">
                        <Link href={`/blogs/${featuredMain.slug}`}>
                            <motion.article
                                variants={fadeUp}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.4 }}
                                // We make the whole card relative and set the background with Next.js Image fill
                                className="group relative w-full aspect-[16/12]  flex flex-col bg-navy-950 rounded-3xl overflow-hidden hover:border hover:border-gold-400/30 transition-all duration-500 shadow-xl"
                            >
                                {/* ── BACKGROUND IMAGE TRACK (Absolute Fill) ── */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={featuredMain.image}
                                        alt={featuredMain.title}
                                        fill
                                        // Matches the luxury aspect ratio
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-w-768px) 100vw, 1200px"
                                    />

                                    {/* Number Overlay (if exists) */}
                                    {featuredMain.number && (
                                        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white font-display text-[10px] font-bold">
                                            #{featuredMain.number}
                                        </div>
                                    )}

                                    {/* DYNAMIC OVERLAY: Changes on hover from partial to full overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent opacity-100 group-hover:bg-navy-950/80 transition-all duration-700 z-10" />
                                </div>

                                {/* ── CONTENT (Layered over z-10 overlay) ── */}
                                {/* Absolute layout allows content to fill the card */}
                                <div className="relative z-20 p-8 md:p-10 flex flex-col flex-1 h-full">

                                    {/* Top: Category Tag */}
                                    <div className="flex items-center gap-3 mb-4 mt-auto">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                                            {featuredMain.category}
                                        </span>
                                    </div>

                                    {/* Title (Stays aligned top) */}
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-gold-400 transition-colors">
                                        {featuredMain.title}
                                    </h3>

                                    {/* Excerpt (Dims subtly) */}
                                    {featuredMain.excerpt && (
                                        <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-6 line-clamp-3">
                                            {featuredMain.excerpt}
                                        </p>
                                    )}

                                    {/* Bottom Footer (Pushed to base with mt-auto) */}
                                    <div className=" flex items-center justify-between pt-6 border-t border-white/10">
                                        <div className="flex items-center gap-2 text-white/40 text-[10px] font-medium uppercase tracking-[0.15em]">
                                            <span>{featuredMain.date}</span>
                                        </div>

                                        {/* Read Story Action */}
                                        <span className="text-gold-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                                            Read Story
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    </div>

                    {/* Secondary Featured (Right Sidebar) */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-2">
                        <div className="px-4 mb-4">
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] border-l-2 border-gold-400 pl-4">
                                Most Popular This Month
                            </span>
                        </div>
                        <div className="space-y-2">
                            {featuredSecondary.map((blog, idx) => (
                                <BlogMiniCard key={blog.id} blog={blog} index={idx} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Regular Listing Grid */}
                <div className="relative">
                    <div className="flex items-center gap-6 mb-16 px-4">
                        <h2 className="text-3xl md:text-5xl font-display font-light text-white leading-tight">
                            Latest <span className="text-gold-400 font-serif italic">Articles</span>
                        </h2>
                        <div className="flex-1 h-px bg-white/10 hidden md:block" />
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={motionContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {regularBlogs.map((blog, index) => (
                            <BlogCard key={blog.id} blog={blog} index={index} />
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Placeholder */}
                <div className="mt-24 flex justify-center">
                    <button className="px-12 py-5 bg-navy-900 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-all duration-300 shadow-xl cursor-pointer">
                        Load More Articles
                    </button>
                </div>
            </section>
        </main>
    );
}

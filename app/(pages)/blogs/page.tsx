"use client";

import PageHero from "@/app/Components/Ui/PageHero";
import BlogCard, { BlogEntry } from "@/app/Components/Blogs/BlogCard";
import BlogMiniCard from "@/app/Components/Blogs/BlogMiniCard";
import { motion } from "framer-motion";
import { motionContainer } from "@/app/utils/motion";

const BLOG_POSTS: BlogEntry[] = [
    {
        id: "b1",
        title: "A Guide to Restful Nights and Refreshing Mornings",
        category: "Health & Wellness",
        date: "June 30, 2024",
        readTime: "13 min read",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1200",
        excerpt: "Sleep, the essential and inevitable part of our daily lives, influences everything from our mood to productivity and overall health.",
        featured: true,
        number: "21"
    },
    {
        id: "b2",
        title: "The Power of Prioritizing Sleep for Overall Health",
        category: "Updates",
        date: "June 30, 2023",
        readTime: "13 min read",
        image: "https://images.unsplash.com/photo-1511296265581-c24500444084?auto=format&fit=crop&q=80&w=600",
        featured: true
    },
    {
        id: "b3",
        title: "A Journey Through Sleep and Bedding Choices",
        category: "Sleep Remedies",
        date: "June 30, 2023",
        readTime: "15 min read",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
        featured: true
    },
    {
        id: "b4",
        title: "5 Science-Backed Tips to Conquer Insomnia",
        category: "Sleep Resources",
        date: "June 30, 2023",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1512428559087-560ef5ceab42?auto=format&fit=crop&q=80&w=600",
        featured: true
    },
    {
        id: "b5",
        title: "Separating Fact from Fiction for a Better Night's Rest",
        category: "Sleep Basics",
        date: "June 30, 2023",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1495433334492-45245de182.jpg?auto=format&fit=crop&q=80&w=600",
        featured: true
    },
    {
        id: "b6",
        title: "Caffeine and Sleep - How Does Caffeine Affect Sleep?",
        category: "Sleep Resources",
        date: "June 30, 2023",
        readTime: "13 min read",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
        excerpt: "Caffeine blocks the action of a natural brain chemical associated with sleep, making it harder for you to wind down.",
        number: "4"
    },
    {
        id: "b7",
        title: "How Not to Sleep — 11 Tips on How to Stay Awake at Work",
        category: "Sleep Basics",
        date: "June 30, 2023",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
        excerpt: "Sleep, the essential and inevitable part of our daily lives, influences everything from our productivity to mood."
    },
    {
        id: "b8",
        title: "What is Green Noise and How Does it Help with Sleep?",
        category: "Sleep Remedies",
        date: "June 30, 2023",
        readTime: "13 min read",
        image: "https://images.unsplash.com/photo-1518531985167-72c676af5439?auto=format&fit=crop&q=80&w=600",
        excerpt: "Sleep, the essential and inevitable part of our daily lives, influences everything from our health and overall wellness."
    },
    {
        id: "b9",
        title: "The Architecture of Dreams: Modern Bedroom Design",
        category: "Design",
        date: "April 12, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1560448204-61dc36dc98bd?auto=format&fit=crop&q=80&w=600",
        excerpt: "Explore how architectural choices in your home can significantly impact your sleep quality and mental peace."
    },
    {
        id: "b10",
        title: "Investment Insights: Dubai's Luxury Real Estate Trends",
        category: "Real Estate",
        date: "April 05, 2024",
        readTime: "20 min read",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
        excerpt: "An in-depth look at why global investors are pivoting towards Dubai's high-end residential market this year."
    },
    {
        id: "b11",
        title: "The Future of Smart Homes in Sustainable Living",
        category: "Technology",
        date: "March 28, 2024",
        readTime: "11 min read",
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
                    <div className="w-full lg:w-[60%]">
                        <BlogCard blog={featuredMain} index={0} />
                    </div>

                    {/* Secondary Featured (Right Sidebar) */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-2">
                        <div className="px-4 mb-4">
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] border-l-2 border-gold-400 pl-4">
                                Most Popular This Month
                            </span>
                        </div>
                        <div className="space-y-4">
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

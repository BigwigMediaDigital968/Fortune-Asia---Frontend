import PageHero from "@/app/Components/Ui/PageHero";
import BlogCard, { BlogEntry } from "@/app/Components/Blogs/BlogCard";
import BlogMiniCard from "@/app/Components/Blogs/BlogMiniCard";
import { motion } from "framer-motion";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Image from "next/image";
import Link from "next/link";
import PageContent from "./PageContent";

const BLOG_POSTS: BlogEntry[] = [
  {
    id: "b1",
    slug: "a-guide-to-restful-nights-and-refreshing-mornings",
    title: "A Guide to Restful Nights and Refreshing Mornings",
    category: "Health & Wellness",
    date: "June 30, 2024",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "Sleep, the essential and inevitable part of our daily lives, influences everything from our mood to productivity and overall health.",
    featured: true,
    number: "21",
  },
  {
    id: "b2",
    slug: "the-power-of-prioritizing-sleep-for-overall-health",
    title: "The Power of Prioritizing Sleep for Overall Health",
    category: "Updates",
    date: "June 30, 2023",
    image:
      "https://images.unsplash.com/photo-1511296265581-c24500444084?auto=format&fit=crop&q=80&w=600",
    featured: true,
  },
  {
    id: "b3",
    slug: "a-journey-through-sleep-and-bedding-choices",
    title: "A Journey Through Sleep and Bedding Choices",
    category: "Sleep Remedies",
    date: "June 30, 2023",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    featured: true,
  },
  {
    id: "b4",
    slug: "5-science-backed-tips-to-conquer-insomnia",
    title: "5 Science-Backed Tips to Conquer Insomnia",
    category: "Sleep Resources",
    date: "June 30, 2023",
    image:
      "https://images.unsplash.com/photo-1512428559087-560ef5ceab42?auto=format&fit=crop&q=80&w=600",
    featured: true,
  },
  {
    id: "b5",
    slug: "separating-fact-from-fiction-for-a-better-nights-rest",
    title: "Separating Fact from Fiction for a Better Night's Rest",
    category: "Sleep Basics",
    date: "June 30, 2023",
    image:
      "https://images.unsplash.com/photo-1495433334492-45245de182.jpg?auto=format&fit=crop&q=80&w=600",
    featured: true,
  },
  {
    id: "b6",
    slug: "caffeine-and-sleep-how-does-caffeine-affect-sleep",
    title: "Caffeine and Sleep - How Does Caffeine Affect Sleep?",
    category: "Sleep Resources",
    date: "June 30, 2023",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
    excerpt:
      "Caffeine blocks the action of a natural brain chemical associated with sleep, making it harder for you to wind down.",
    number: "4",
  },
  {
    id: "b7",
    slug: "how-not-to-sleep-11-tips-on-how-to-stay-awake-at-work",
    title: "How Not to Sleep — 11 Tips on How to Stay Awake at Work",
    category: "Sleep Basics",
    date: "June 30, 2023",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
    excerpt:
      "Sleep, the essential and inevitable part of our daily lives, influences everything from our productivity to mood.",
  },
  {
    id: "b8",
    slug: "what-is-green-noise-and-how-does-it-help-with-sleep",
    title: "What is Green Noise and How Does it Help with Sleep?",
    category: "Sleep Remedies",
    date: "June 30, 2023",
    image:
      "https://images.unsplash.com/photo-1518531985167-72c676af5439?auto=format&fit=crop&q=80&w=600",
    excerpt:
      "Sleep, the essential and inevitable part of our daily lives, influences everything from our health and overall wellness.",
  },
  {
    id: "b9",
    slug: "the-architecture-of-dreams-modern-bedroom-design",
    title: "The Architecture of Dreams: Modern Bedroom Design",
    category: "Design",
    date: "April 12, 2024",
    image:
      "https://images.unsplash.com/photo-1560448204-61dc36dc98bd?auto=format&fit=crop&q=80&w=600",
    excerpt:
      "Explore how architectural choices in your home can significantly impact your sleep quality and mental peace.",
  },
  {
    id: "b10",
    slug: "investment-insights-dubais-luxury-real-estate-trends",
    title: "Investment Insights: Dubai's Luxury Real Estate Trends",
    category: "Real Estate",
    date: "April 05, 2024",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
    excerpt:
      "An in-depth look at why global investors are pivoting towards Dubai's high-end residential market this year.",
  },
  {
    id: "b11",
    slug: "the-future-of-smart-homes-in-sustainable-living",
    title: "The Future of Smart Homes in Sustainable Living",
    category: "Technology",
    date: "March 28, 2024",
    image:
      "https://images.unsplash.com/photo-1558002038-103792e1972d?auto=format&fit=crop&q=80&w=600",
    excerpt:
      "How automation and smart sensors are redefining the concept of an energy-efficient luxury home.",
  },
];

export default async function BlogsPage() {
  const featuredMain = BLOG_POSTS[0];
  const featuredSecondary = BLOG_POSTS.slice(1, 5);
  const regularBlogs = BLOG_POSTS.slice(5);

  return (
    <main className="bg-navy-950 min-h-screen pb-32">
      <PageHero
        subtitle="Journal & Insights"
        title={
          <>
            Our Latest <span className="text-gold-400">Stories</span>
          </>
        }
        description="Expert perspectives on the Dubai real estate market, luxury lifestyle, and structural innovation."
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Featured Section (1+4 Layout) */}

      <PageContent />
    </main>
  );
}

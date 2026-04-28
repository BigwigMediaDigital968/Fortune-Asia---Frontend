"use client";

import { notFound, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  User,
  Clock,
  Share2,
  Link as LinkIcon,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import EnquiryForm from "@/app/Components/Ui/EnquiryForm";
import BlogMiniCard from "@/app/Components/Blogs/BlogMiniCard";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { formatDate } from "@/app/utils/dateFormat";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRelatedBlogs } from "@/app/lib/api";
import FAQAccordion from "@/app/Components/Blogs/FAQAccordion";

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

// Social sharing utilities
const shareToFacebook = (url: string, title: string) => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
  window.open(shareUrl, "_blank", "width=600,height=400");
};

const shareToTwitter = (url: string, title: string) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  window.open(shareUrl, "_blank", "width=600,height=400");
};

const shareToLinkedIn = (url: string, title: string) => {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
  window.open(shareUrl, "_blank", "width=600,height=400");
};

const shareToWhatsApp = (url: string, title: string) => {
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
  window.open(shareUrl, "_blank");
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      return true;
    } catch (fallbackErr) {
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

// Extract headings from HTML content
const extractHeadings = (html: string) => {
  const headings: { id: string; text: string; level: number }[] = [];
  const slugMap = new Map<string, number>();

  const processedHtml = html.replace(
    /<(h[2-3])([^>]*)>(.*?)<\/h[2-3]>/gi,
    (match, tag, attrs, inner) => {
      const level = parseInt(tag[1]);

      // Remove inner HTML tags to get clean text
      const text = inner.replace(/<[^>]+>/g, "").trim();

      // Generate slug
      let baseId = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .slice(0, 60);

      if (!baseId) baseId = `heading-${headings.length}`;

      // Handle duplicate IDs
      const count = slugMap.get(baseId) ?? 0;
      const id = count === 0 ? baseId : `${baseId}-${count}`;
      slugMap.set(baseId, count + 1);

      headings.push({ id, text, level });

      // Preserve existing attributes
      const safeAttrs = attrs?.trim() ? ` ${attrs.trim()}` : "";

      return `<${tag} id="${id}"${safeAttrs}>${inner}</${tag}>`;
    },
  );

  return { processedHtml, headings };
};

export default function BlogDetails({ blog }: { blog: any }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const [copySuccess, setCopySuccess] = useState(false);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = blog?.title || "Check out this article";

  // Extract headings from blog content
  const { processedHtml, headings } = extractHeadings(blog?.content || "");

  // Fetch related blogs
  const { data: relatedBlogs = [], isLoading: isLoadingRelated } = useQuery({
    queryKey: ["related-blogs", blog?.slug],
    queryFn: () => getRelatedBlogs(blog?.slug),
    enabled: !!blog?.slug,
  });

  console.log("Related Blogs:", relatedBlogs);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(currentUrl);
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  console.log("Blog Data:", blog, headings);
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] w-full flex items-end justify-center overflow-hidden">
        <Image
          src={blog?.coverImage}
          alt={blog?.title}
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
              <Link
                href="/"
                className="text-white/40 hover:text-gold-400 transition-colors text-[10px] uppercase font-bold tracking-widest"
              >
                Home
              </Link>
              {pathSegments?.map((segment, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ChevronRight size={10} className="text-white/20" />
                  <Link
                    href={`/${pathSegments.slice(0, i + 1).join("/")}`}
                    className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${
                      i === pathSegments.length - 1
                        ? "text-gold-400 pointer-events-none"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {segment.replace(/-/g, " ")}
                  </Link>
                </div>
              ))}
            </motion.nav>

            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl tracking-tight leading-[1.1]"
            >
              {blog?.title}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-8 pt-4 border-t border-white/10 w-fit"
            >
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Calendar size={14} className="text-gold-400" />
                <span>{formatDate(blog?.lastUpdated)}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <User size={14} className="text-gold-400" />
                <span>{blog?.author}</span>
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
                <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] border-l-2 border-gold-400 pl-4">
                  Contents
                </h3>
                <nav className="flex flex-col gap-4">
                  {headings?.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="text-sm text-white/60 hover:text-gold-400 transition-colors font-sans font-light tracking-wide cursor-pointer"
                      style={{ paddingLeft: `${(heading.level - 1) * 16}px` }}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="hidden lg:block p-8 bg-navy-900 border border-white/5 rounded-xl text-center space-y-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/5 transition-all duration-500" />
                <h4 className="text-white font-display font-bold text-xl relative z-10">
                  Start Your Journey
                </h4>
                <p className="text-white/40 text-sm font-light relative z-10 leading-relaxed">
                  Let us find the perfect architectural sanctuary for you.
                </p>
                <Link
                  href="/contact"
                  className="relative block z-10 w-full py-4 bg-gold-400 text-navy-950 font-bold uppercase text-[10px] tracking-[0.2em] rounded-lg hover:bg-white transition-all cursor-pointer shadow-xl shadow-gold-400/10"
                >
                  Contact Experts
                </Link>
              </div>
            </div>
          </aside>

          {/* MIDDLE COLUMN: BLOG CONTENT */}
          <article className="lg:w-[58%] prose prose-invert prose-gold max-w-none">
            <div className="space-y-16">
              <div className="p-2 rounded-xl">
                <div
                  className="blog-content text-white [&_h1]:text-white [&_h1]:font-semibold [&_h1]:text-2xl [&_h1]:mb-4
                [&_h2]:text-white [&_h2]:font-semibold [&_h2]:text-xl [&_h2]:mb-3
                [&_h3]:text-white [&_h3]:font-medium [&_h3]:text-lg [&_h3]:mb-2
                [&_p]:text-white/90 [&_p]:leading-relaxed [&_p]:mb-4
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
                [&_li]:text-white/85 [&_li]:mb-1
                [&_a]:text-blue-400 [&_a]:underline
                [&_strong]:text-white [&_strong]:font-semibold
                [&_blockquote]:border-l-4 [&_blockquote]:border-white/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-white/80"
                  dangerouslySetInnerHTML={{
                    __html: processedHtml || blog?.content || "",
                  }}
                />
              </div>

              <div>
                <FAQAccordion items={blog?.faqs || []} />
              </div>

              {/* Social Share Bar */}
              <div className="pt-16 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                    Share Article:
                  </span>
                  <div className="flex items-center gap-3">
                    <SocialCircle
                      icon={<FaFacebookF size={14} />}
                      onClick={() => shareToFacebook(currentUrl, shareTitle)}
                      label="Share on Facebook"
                    />
                    <SocialCircle
                      icon={<IoLogoWhatsapp size={14} />}
                      onClick={() => shareToWhatsApp(currentUrl, shareTitle)}
                      label="Share on WhatsApp"
                    />
                    <SocialCircle
                      icon={<FaXTwitter size={14} />}
                      onClick={() => shareToTwitter(currentUrl, shareTitle)}
                      label="Share on Twitter"
                    />
                    <SocialCircle
                      icon={<FaLinkedinIn size={14} />}
                      onClick={() => shareToLinkedIn(currentUrl, shareTitle)}
                      label="Share on LinkedIn"
                    />
                  </div>
                </div>
                <div
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-white/60 hover:text-gold-400 transition-colors cursor-pointer"
                  onClick={handleCopyLink}
                >
                  <Share2 size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {copySuccess ? "Copied!" : "Copy Link"}
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT COLUMN: RELATED BLOGS */}
          <aside className="lg:w-[24%] shrink-0 space-y-8">
            {/* Enquiry Mini Form */}
            <div className="p-1 bg-gold-400/10 rounded-xl overflow-hidden border border-white/5">
              <div className="bg-navy-900/40 p-2 pt-4 rounded-[calc(0.75rem-1px)]">
                <h4 className="text-white font-display font-bold text-lg mb-4">
                  Questions?
                </h4>
                <EnquiryForm source="blog-post" />
              </div>
            </div>
            <div className="px-4">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] border-l-2 border-gold-400 pl-4">
                Related Stories
              </span>
            </div>
            <div className="space-y-6">
              {isLoadingRelated ? (
                Array.from({ length: 5 }).map((_, idx) => (
                  <RelatedBlogSkeleton key={idx} />
                ))
              ) : relatedBlogs.data?.length > 0 ? (
                relatedBlogs.data
                  ?.slice(0, 5)
                  .map((post: any, idx: number) => (
                    <BlogMiniCard
                      key={post.id || idx}
                      blog={post}
                      index={idx}
                    />
                  ))
              ) : (
                <>
                  <p className="text-white/40 px-4 text-sm">
                    No related blogs found.
                  </p>
                </>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function SocialCircle({
  icon,
  onClick,
  label,
}: {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:bg-gold-400/10 transition-all cursor-pointer"
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {icon}
    </button>
  );
}

function RelatedBlogSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex gap-5 items-center p-2 rounded-2xl bg-white/[0.03]">
        <div className="relative flex-shrink-0 w-24 md:w-28 aspect-[16/12] rounded-xl bg-white/10"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-white/10 rounded w-3/4"></div>
          <div className="h-3 bg-white/5 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

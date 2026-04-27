import { notFound } from "next/navigation";
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
import { api } from "@/app/lib/api";
import BlogDetails from "./BlogDetails";

// ─── Interfaces ──────────────────────────────────────────

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("Received slug:", slug);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`,
    {
      cache: "no-store", // or use revalidate if needed
    },
  );
  console.log("Fetching Blog Details for slug:", slug, res);

  if (res.status === 404) {
    return notFound(); // 👉 shows 404 page
  }

  if (!res) {
    throw new Error("Failed to fetch property");
  }

  const data = await res.json();
  const blog = data.data;

  console.log("Fetched Property Details:", data);

  return (
    <main className="bg-navy-950 min-h-screen">
      {/* ── HERO SECTION (FIXED HEIGHT, FULL WIDTH) ── */}

      <BlogDetails blog={blog} />
    </main>
  );
}

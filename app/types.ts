export type PropertyListing = {
  _id: string;

  propertyName: string;
  slug: string;

  listingType: "buy" | "rent" | "lease" | "sale";
  propertyType: string;

  price: string;
  isFeatured?: boolean;

  bedroom: string;
  bathroom: string;
  sizeSqft: string;

  address: string;
  subArea?: string;

  googleMapUrl?: string | null;

  developer?: string | null | Developer; // ObjectId (or populated object later)

  propertyImages: string[];

  propertyBrochure?: string | null;
  videoLink?: string | null;

  propertyDetails: string;

  highlights: string[];
  featuresAmenities: string[];
  nearby: string[];
  extraHighlights: string[];

  status?: boolean;

  createdAt: string;
  updatedAt: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type DeveloperStats = {
  establishedYear?: number | null;
  totalProjects?: number;
};

export type DeveloperSocialLinks = {
  facebook?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
};

export type DeveloperSEO = {
  metaTitle?: string;
  metaDescription?: string;
  keywords: string[];
};

export type Developer = {
  _id: string;

  // 🏢 Basic Info
  name: string;
  slug: string;
  logo: string;
  coverImage?: string | null;

  // 📝 Content
  shortDescription: string;
  fullDescription?: string | null;

  // 📊 Stats
  stats: DeveloperStats;

  // 🏆 Highlights
  highlights: string[];
  amenities: string[];

  // 🏗️ Projects (ObjectId OR populated)
  projects: string[] | PropertyListing[];

  // 📜 Certifications
  certifications: string[];

  // 🌐 Links
  website?: string | null;
  socialLinks: DeveloperSocialLinks;

  // 🖼️ Media
  images: string[];
  brochure?: string | null;

  // 🔍 SEO
  seo: DeveloperSEO;

  // ❓ FAQs
  faqs: FAQ[];

  // ⭐ Controls
  isFeatured?: boolean;
  priority?: number;

  // 🟢 Status
  isActive?: boolean;

  // ⏱️ Timestamps
  createdAt: string;
  updatedAt: string;
};

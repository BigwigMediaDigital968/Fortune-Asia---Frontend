import { notFound } from "next/navigation";
import PageContent from "./PageContent";
import { PropertyListing } from "@/app/types";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("Received slug:", slug);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/property/${slug}`,
    {
      cache: "no-store", // or use revalidate if needed
    },
  );
  console.log("Fetching Property Details for slug:", slug, res);

  if (res.status === 404) {
    return notFound(); // 👉 shows 404 page
  }

  if (!res) {
    throw new Error("Failed to fetch property");
  }

  const data = await res.json();
  const blogData: PropertyListing = data.data;

  console.log("Fetched Property Details:", data);

  return (
    <main className="bg-navy-950 min-h-screen pb-32">
      {/* ── TOP NAV PLACEHOLDER ── */}
      <div className="h-20" />

      {/* ── HEADER & GALLERY SECTION ── */}

      <PageContent property={blogData} />
    </main>
  );
}

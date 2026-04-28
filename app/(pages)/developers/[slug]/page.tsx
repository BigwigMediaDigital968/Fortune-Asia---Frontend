import { notFound } from "next/navigation";
import { Developer } from "@/app/types";
import PageContent from "./PageContent";

export default async function DeveloperDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("Received slug:", slug);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/developers/${slug}`,
    {
      cache: "no-store", // or use revalidate if needed
    },
  );
  console.log("Fetching Developer Details for slug:", slug, res);

  if (res.status === 404) {
    return notFound(); // 👉 shows 404 page
  }

  if (!res.ok) {
    throw new Error("Failed to fetch developer");
  }

  const data = await res.json();
  const developerData: Developer = data.data || data;

  console.log("Fetched Developer Details:", data);

  return (
    <main className="bg-navy-950 min-h-screen pb-32">
      {/* ── TOP NAV PLACEHOLDER ── */}
      <div className="h-20" />

      {/* ── HEADER & GALLERY SECTION ── */}

      <PageContent developer={developerData} />
    </main>
  );
}

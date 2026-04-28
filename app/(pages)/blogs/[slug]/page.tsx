import { notFound } from "next/navigation";
import BlogDetails from "./BlogDetails";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const res = await fetch(`${apiUrl}/api/blogs/${slug}`, {
    cache: "no-store",
  });
  console.log(`API Response for /blogs/${slug}:`, res);

  if (res.status === 404) {
    return notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch blog details: ${res.status}`);
  }

  const data = await res.json();
  const blog = data?.data ?? data;

  if (!blog) {
    return notFound();
  }

  return (
    <main className="bg-navy-950 min-h-screen">
      <BlogDetails blog={blog} />
    </main>
  );
}

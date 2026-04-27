import PageHero from "@/app/Components/Ui/PageHero";
import Listing from "./Listing";

export default function PropertiesPage() {
  return (
    <main className="bg-navy-950 min-h-screen pb-32">
      {/* Hero Section */}
      <PageHero
        subtitle="Property Portfolio"
        title={
          <>
            Curated <span className="text-gold-400">Excellence</span>
          </>
        }
        description="Browse our complete collection of Dubai's most exclusive residential and commercial properties, handpicked for the discerning investor."
        backgroundImage="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Properties List */}
      <Listing />
    </main>
  );
}

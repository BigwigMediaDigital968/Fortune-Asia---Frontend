import PageHero from "@/app/Components/Ui/PageHero";
import Listing from "./Listing";

export default function DevelopersPage() {
  return (
    <main className="bg-navy-950 min-h-screen pb-32">
      {/* Hero Section */}
      <PageHero
        subtitle="Trusted Developers"
        title={
          <>
            Building <span className="text-gold-400">Excellence</span>
          </>
        }
        description="Discover Dubai's premier property developers, crafting world-class residential and commercial spaces that define luxury living."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Developers List */}
      <Listing />
    </main>
  );
}

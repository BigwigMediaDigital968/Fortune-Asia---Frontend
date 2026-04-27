import PageHero from "@/app/Components/Ui/PageHero";
import PropertyListingWrapper from "@/app/Components/PropertyListing/PropertyListingWrapper";

export default function BuyPage() {
  return (
    <main className="bg-navy-950 min-h-screen pb-20">
      {/* Hero Section */}
      <PageHero
        subtitle="Exclusive Listings"
        title={
          <>
            Find Your Next <span className="text-gold-400">Masterpiece</span>
          </>
        }
        description="Explore an exclusive collection of luxury properties in Dubai's most prestigious locations."
        backgroundImage="https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Filters Section */}
      <PropertyListingWrapper listingType="buy" />
    </main>
  );
}

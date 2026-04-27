import PageHero from "@/app/Components/Ui/PageHero";
import PropertyListingWrapper from "@/app/Components/PropertyListing/PropertyListingWrapper";

export default function RentPage() {
  return (
    <main className="bg-navy-950 min-h-screen pb-20">
      <PageHero
        subtitle="Luxury Rentals"
        title={
          <>
            Elite Residences for <span className="text-gold-400">Rent</span>
          </>
        }
        description="Experience Dubai's premium lifestyle with our curated collection of high-end rental properties in the most sought-after communities."
        backgroundImage="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1920"
      />

      <PropertyListingWrapper listingType="rent" />
    </main>
  );
}

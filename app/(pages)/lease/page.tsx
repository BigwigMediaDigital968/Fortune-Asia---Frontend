import PageHero from "@/app/Components/Ui/PageHero";
import PropertyListingWrapper from "@/app/Components/PropertyListing/PropertyListingWrapper";

export default function LeasePage() {
  return (
    <main className="bg-navy-950 min-h-screen pb-20">
      <PageHero
        subtitle="Exclusive Leasing"
        title={
          <>
            Premium Commercial <span className="text-gold-400">Leasing</span>
          </>
        }
        description="Expert leasing solutions for long-term luxury residences and institutional-grade commercial spaces in Dubai's premier business districts."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
      />

      <PropertyListingWrapper listingType="lease" />
    </main>
  );
}

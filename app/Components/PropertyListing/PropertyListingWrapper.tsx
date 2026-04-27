"use client";

import { PropertyFilters as FilterType } from "@/app/lib/properties";
import { useState } from "react";
import PropertyListing from "./PropertyListing";
import PropertyFilters from "../Buy/PropertyFilters";

export default function PropertyListingWrapper({
  listingType,
}: {
  filter?: string;
  listingType?: string;
}) {
  const [filters, setFilters] = useState<Partial<FilterType>>({
    listingType: listingType || "buy",
  });

  const handleFilterChange = (newFilters: Partial<FilterType>) => {
    setFilters(newFilters);
    console.log("Updated Filters:", newFilters);
  };
  return (
    <>
      <PropertyFilters onFilterChange={handleFilterChange} />

      {/* Property Listing Section */}
      <PropertyListing filters={filters} />
    </>
  );
}

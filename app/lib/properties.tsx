import { api } from "./api";

export type PropertyFilters = {
  listingType?: string;
  propertyType?: string;
  bedroom?: number | string | "";
  bathroom?: number | string | "";
  subArea?: string;
  minSqft?: number | string | "";
  maxSqft?: number | string | "";
  minPrice?: number | string | "";
  maxPrice?: number | string | "";
  status?: boolean;
  developerName?: string;
};

export const getProperties = async (filters: any) => {
  const res = await api.get("/property", {
    params: filters,
  });
  //console.log("Fetched Properties:", res, filters);
  return res.data.data;
};

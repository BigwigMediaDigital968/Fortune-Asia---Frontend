"use client";

import { Search, ChevronDown, MapPin, Home, DollarSign, Bed } from "lucide-react";
import { useState } from "react";

export default function PropertyFilters() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
      <div className="bg-navy-900/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-4 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 p-2">
          {/* Search Input */}
          <div className="w-full lg:flex-1 relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gold-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search Area, Community or Building..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-gold-400/50 transition-all"
            />
          </div>

          <div className="w-full lg:w-auto flex flex-wrap lg:flex-nowrap items-center gap-4">
            {/* Property Type */}
            <div className="flex-1 lg:w-44 group relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400">
                <Home size={18} />
              </div>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-10 text-white text-sm appearance-none focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer">
                <option value="" className="bg-navy-900 text-white">Property Type</option>
                <option value="apartment" className="bg-navy-900 text-white">Apartment</option>
                <option value="villa" className="bg-navy-900 text-white">Villa</option>
                <option value="townhouse" className="bg-navy-900 text-white">Townhouse</option>
                <option value="penthouse" className="bg-navy-900 text-white">Penthouse</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none group-hover:text-gold-400 transition-colors">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Bedrooms */}
            <div className="flex-1 lg:w-40 group relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400">
                <Bed size={18} />
              </div>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-10 text-white text-sm appearance-none focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer">
                <option value="" className="bg-navy-900 text-white">Bedrooms</option>
                <option value="1" className="bg-navy-900 text-white">1 Bedroom</option>
                <option value="2" className="bg-navy-900 text-white">2 Bedrooms</option>
                <option value="3" className="bg-navy-900 text-white">3 Bedrooms</option>
                <option value="4" className="bg-navy-900 text-white">4+ Bedrooms</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none group-hover:text-gold-400 transition-colors">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Price Range */}
            <div className="flex-1 lg:w-44 group relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400">
                <DollarSign size={18} />
              </div>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-10 text-white text-sm appearance-none focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer">
                <option value="" className="bg-navy-900 text-white">Price Range</option>
                <option value="0-1M" className="bg-navy-900 text-white">Under $1M</option>
                <option value="1M-3M" className="bg-navy-900 text-white">$1M - $3M</option>
                <option value="3M-5M" className="bg-navy-900 text-white">$3M - $5M</option>
                <option value="5M+" className="bg-navy-900 text-white">$5M+</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none group-hover:text-gold-400 transition-colors">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full lg:w-auto px-10 py-4 bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold rounded-2xl transition-all shadow-lg active:scale-95 cursor-pointer">
              Find Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

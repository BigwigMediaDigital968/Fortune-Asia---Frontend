"use client";

export default function PropertySkeleton() {
  return (
    <div className="bg-navy-900 overflow-hidden rounded-[32px] border border-white/5 animate-pulse shadow-xl">
      {/* Image Skeleton */}
      <div className="relative aspect-[4/3] bg-white/5" />

      {/* Content Skeleton */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="h-7 w-2/3 bg-white/10 rounded-lg" />
          <div className="h-7 w-1/4 bg-white/10 rounded-lg" />
        </div>

        <div className="flex items-center gap-2 mb-8">
          <div className="h-4 w-4 bg-white/10 rounded-full" />
          <div className="h-3 w-1/2 bg-white/5 rounded-lg" />
        </div>

        {/* Features Skeleton */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5">
          <div className="flex flex-col items-center gap-2">
            <div className="h-4 w-8 bg-white/10 rounded-lg" />
            <div className="h-2 w-10 bg-white/5 rounded-lg" />
          </div>

          <div className="flex flex-col items-center gap-2 border-x border-white/5">
            <div className="h-4 w-8 bg-white/10 rounded-lg" />
            <div className="h-2 w-10 bg-white/5 rounded-lg" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="h-4 w-8 bg-white/10 rounded-lg" />
            <div className="h-2 w-10 bg-white/5 rounded-lg" />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="w-full mt-6 h-12 bg-white/5 rounded-2xl" />
      </div>
    </div>
  );
}

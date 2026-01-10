 import React from 'react';

const ServiceDetailsSkeleton = () => {
  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-pulse">
        
        {/* Left Side: Image Skeleton */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[450px] bg-gray-200 rounded-2xl"></div>
        </div>

        {/* Right Side: Content Skeleton */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-12 bg-gray-200 rounded-md"></div>
          </div>

          <div className="space-y-3">
            <div className="h-10 w-3/4 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-1/2 bg-gray-300 rounded-md"></div>
          </div>

          <div className="h-24 w-full bg-gray-100 rounded-xl border-l-4 border-gray-200"></div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="h-20 bg-gray-50 rounded-xl"></div>
            <div className="h-20 bg-gray-50 rounded-xl"></div>
          </div>

          <div className="space-y-3 pt-4">
            <div className="h-4 w-1/3 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-full bg-gray-100 rounded-md"></div>
            <div className="h-4 w-full bg-gray-100 rounded-md"></div>
          </div>

          <div className="pt-6">
            <div className="h-14 w-full md:w-1/2 bg-gray-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSkeleton;
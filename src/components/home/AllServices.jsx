"use client"; 
import { useState } from "react";
import ServiceCard from "../card/ServiceCard";
 
export const AllServices = ({ allServices }) => {
   const [activeCategory, setActiveCategory] = useState("Baby Care");

   const filteredServices = allServices?.filter(
    (service) => service.category.trim() === activeCategory.trim()
  );

  const categoryButtons = ["Baby Care", "Elderly Service", "Sick People Service"];

 
  return (
    <div className="container mx-auto py-10 px-4" id="all-services">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our <span className="text-primary">Services</span>
      </h2>
{/* category */}
      <div className="flex justify-center gap-4 mb-10 overflow-x-auto">
        {categoryButtons.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`btn rounded-full px-8 ${
              activeCategory === cat ? "btn-primary shadow-md" : "btn-outline"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
{/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices?.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-base-200 rounded-3xl">
             <p className="text-xl italic text-gray-500">
               No services found for "{activeCategory}".
             </p>
          </div>
        )}
      </div>
    </div>
  );
};
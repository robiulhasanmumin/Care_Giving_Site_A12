 import { getSingleService } from "@/actions/server/services";
import Link from "next/link";
import { FaCheckCircle, FaClock, FaTag } from "react-icons/fa";

 export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = await getSingleService(id);
  
  return {
    title: `${service?.title || "Service Details"} | Care.People`,
    description: service?.description || "High-quality caregiving services for your loved ones.",
  };
}

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  if (!service?._id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Service not found!</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        
        {/* বাম পাশ: ইমেজ */}
        <div className="w-full lg:w-1/2">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* ডান পাশ: ইনফরমেশন */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="badge badge-primary py-3 px-4 uppercase text-xs font-bold tracking-wider">
              {service.category}
            </span>
            <div className="flex items-center text-xl font-bold">
              ⭐ {service.rating}
            </div>
          </div>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            {service.title}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-primary pl-4">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <FaTag className="text-primary text-xl" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Price</p>
                <p className="text-xl font-bold">${service.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <FaClock className="text-primary text-xl" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Duration</p>
                <p className="text-xl font-bold">per {service.duration_unit}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-800">Why choose this service?</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <FaCheckCircle className="text-green-500" /> Verified Professionals
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <FaCheckCircle className="text-green-500" /> 24/7 Support Guaranteed
              </li>
            </ul>
          </div>

          {/* বুকিং বাটন */}
          <div className="pt-6">
            <Link href={`/booking/${id}`}>
              <button className="btn btn-primary btn-lg w-full md:w-auto px-12 rounded-2xl shadow-xl shadow-primary/30 transition-all hover:scale-105">
                Book Service Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
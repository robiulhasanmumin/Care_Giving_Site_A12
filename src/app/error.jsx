"use client";
import { FaSyncAlt, FaHome } from "react-icons/fa";

export default function Error({ reset }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 p-10 bg-red-50 rounded-3xl border border-red-100 max-w-lg">
        <h2 className="text-3xl font-bold text-red-600">Something went wrong!</h2>
        <p className="text-gray-600 leading-relaxed">
          An unexpected technical error occurred while processing your request. 
          Please try again or return to the homepage.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button
            onClick={() => reset()} 
            className="btn btn-error text-white gap-2 shadow-lg"
          >
            <FaSyncAlt /> Try Again
          </button>
          
          <button
            onClick={() => (window.location.href = "/")}
            className="btn btn-outline btn-primary gap-2"
          >
            <FaHome /> Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
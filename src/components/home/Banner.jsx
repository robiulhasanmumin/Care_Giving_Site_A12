import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import bImg from "../../../public/istock-1276811978.1920x0.jpg"
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="relative bg-white py-10 overflow-hidden">
      {/* Background Decorative Circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 relative z-10">
        
        {/* Left Side: Content Area */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-xs md:text-sm tracking-wide">
            ✨ TRUSTED BY 1200+ FAMILIES
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] md:px-10 lg:px-0">
            Reliable Care For Your
            <span className="text-primary italic block sm:inline"> "Loved Ones"</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Professional and compassionate caregiving services for <span className="font-semibold text-gray-800 italic">Baby Sitting</span>, 
            <span className="font-semibold text-gray-800 italic"> Elderly Care</span>, and <span className="font-semibold text-gray-800 italic"> Medical Support</span>. We make home care secure, 
            easy, and accessible for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Link href={"#all-services"}>
              <button className="btn btn-primary btn-md md:btn-lg w-full sm:w-auto px-8 text-white rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all group">
                Explore Services 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href={"#about"}>
              <button className="btn btn-outline btn-md md:btn-lg w-full sm:w-auto px-8 rounded-2xl border-2 hover:bg-gray-50 hover:text-primary">
                Watch How It Works
              </button>
            </Link>
          </div>
          
          {/* Trust Metrics */}
          <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 md:gap-12 border-t border-gray-100">
            <div>
              <p className="text-xl md:text-2xl font-bold text-gray-800">450+</p>
              <p className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-tighter sm:tracking-normal">Verified Caretakers</p>
            </div>
            <div className="w-[1px] h-10 bg-gray-200"></div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-gray-800">4.9/5</p>
              <p className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-tighter sm:tracking-normal">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Area */}
        <div className="flex-1 relative order-1 lg:order-2 w-full max-w-2xl mx-auto lg:max-w-none">
          <div className="relative z-10 px-4 sm:px-0">
            <Image 
              src={bImg}
              alt="Caregiving and Baby Sitting" 
              className="rounded-[2rem] md:rounded-[2.5rem] shadow-xl w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover ring-4 md:ring-8 ring-white"
            />
            
            {/* Floating Badge 1 - Left Bottom */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-4 animate-bounce-slow">
              <div className="bg-secondary/20 p-2 md:p-3 rounded-lg md:rounded-xl text-secondary text-lg md:text-2xl">❤️</div>
              <div>
                <p className="font-bold text-gray-800 text-[10px] md:text-sm">Compassionate</p>
                <p className="text-[8px] md:text-xs text-gray-500 font-medium uppercase">Service Always</p>
              </div>
            </div>

            {/* Floating Badge 2 - Right Top */}
            <div className="absolute top-4 -right-2 md:top-10 md:-right-6 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-4">
              <div className="bg-green-100 p-2 md:p-3 rounded-lg md:rounded-xl text-green-600 text-lg md:text-2xl">🛡️</div>
              <div>
                <p className="font-bold text-gray-800 text-[10px] md:text-sm">NID Verified</p>
                <p className="text-[8px] md:text-xs text-gray-500 font-medium uppercase">100% Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
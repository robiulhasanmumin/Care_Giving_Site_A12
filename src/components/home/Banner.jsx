 
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import bImg from "../../../public/istock-1276811978.1920x0.jpg"
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="relative bg-white py-6 md:py-10 overflow-hidden">
      {/* Background Decorative Circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96   rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side: Content Area */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm tracking-wide">
            ✨ TRUSTED BY 1200+ FAMILIES
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1]">
            Reliable Care For Your
            <span className="text-primary italic">"Loved Ones"</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Professional and compassionate caregiving services for *Baby Sitting*, 
            *Elderly Care*, and *Medical Support*. We make home care secure, 
            easy, and accessible for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href={"#all-services"}>
            <button className="btn btn-primary btn-lg px-8 text-white rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all group">
              Explore Services 
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <Link href={"#about"}>
            <button className="btn btn-outline btn-lg px-8 rounded-2xl border-2 hover:bg-gray-50 hover:text-primary">
              Watch How It Works
            </button>
            </Link>
          </div>
          
          {/* Trust Metrics in Banner */}
          <div className="pt-6 flex items-center justify-center md:justify-start gap-8 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-gray-800">450+</p>
              <p className="text-sm text-gray-500 font-medium uppercase">Verified Caretakers</p>
            </div>
            <div className="w-[1px] h-10 bg-gray-200"></div>
            <div>
              <p className="text-2xl font-bold text-gray-800">4.9/5</p>
              <p className="text-sm text-gray-500 font-medium uppercase">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Area */}
        <div className="flex-1 relative">
          <div className="relative z-10">
            <Image 
              width={0}
              height={0}
              src={bImg}
              alt="Caregiving and Baby Sitting" 
              className="rounded-[2.5rem] shadow-xl w-full h-[500px] object-cover ring-8 ring-white"
            />
            
            {/* Floating Badge 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div className="bg-secondary/20 p-3 rounded-xl text-secondary text-2xl">❤️</div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Compassionate</p>
                <p className="text-xs text-gray-500 font-medium uppercase">Service Always</p>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-xl text-green-600 text-2xl">🛡️</div>
              <div>
                <p className="font-bold text-gray-800 text-sm">NID Verified</p>
                <p className="text-xs text-gray-500 font-medium uppercase">100% Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
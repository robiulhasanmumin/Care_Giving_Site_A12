"use client"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ service }) => {
     if (!service) return null;

    const { _id, title, category, image, description, price, duration_unit, rating } = service;

    return (
        <div className="card bg-base-100 shadow-md border border-gray-200 hover:  transition-all duration-300">
            <figure className="h-52 overflow-hidden">
                <img
                     src={image} 
                    alt={title} 
                    className="w-full h-full"
                />
            </figure>
            <div className="card-body">
                    <div className="badge badge-secondary badge-outline text-xs">{category}</div>
                <div className="">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                </div>
                
                <p className="text-gray-500 text-sm line-clamp-2 mt-2">
                    {description}
                </p>

                <div className="card-actions justify-between items-center mt-5">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase font-semibold">Price</span>
                        <span className="font-bold text-primary text-2xl">${price} <span className="text-lg text-gray-400 font-normal">/{duration_unit}</span></span>
                    </div>
                    
                     <Link href={`/services/${_id}`}>
                        <button className="btn btn-primary btn-outline text-md px-6 rounded-lg ">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
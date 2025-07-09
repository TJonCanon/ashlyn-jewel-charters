'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const trips = [
  {
    id: 'morning',
    name: 'Morning trip',
    price: 300,
    maxPeople: 6,
    image: '/Photos/Morning_Trip.jpg',
    rating: 5.0,
    objectPosition: 'center 10%'
  },
  {
    id: 'afternoon',
    name: 'Afternoon trip',
    price: 300,
    maxPeople: 6,
    image: '/Photos/Afternoon_Trip.jpg',
    rating: 5.0,
    objectPosition: 'center 20%'
  },
  {
    id: 'four-hour',
    name: '4 Hour trip',
    price: 400,
    maxPeople: 4,
    image: '/Photos/4_Hour_Trip.jpg',
    rating: 5.0,
    objectPosition: 'center 20%'
  },
  {
    id: 'shark',
    name: 'Shark fishing',
    price: 500,
    maxPeople: 6,
    image: '/Photos/Shark_Fishing_Trip.jpg',
    rating: 5.0,
    objectPosition: 'center 30%'
  }
]

export default function TripsSection() {
  return (
    <section id="tours" className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          Trips offered
        </h2>
      </div>
      
      <div className="flex gap-6 overflow-x-auto scroll-smooth pb-2 justify-center">
        {trips.map((trip) => (
          <div 
            key={trip.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1 flex-shrink-0 w-72 group"
          >
            {/* Trip Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={trip.image}
                alt={trip.name}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
                style={{ objectPosition: trip.objectPosition }}
              />
              
              {/* Rating Badge */}
              <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 rounded-md text-sm font-medium backdrop-blur-sm">
                {trip.rating} ⭐
              </div>
            </div>
            
            {/* Trip Content */}
            <div className="p-5 relative">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {trip.name}
              </h3>
              <p className="text-xl font-bold text-gray-900">
                ${trip.price} <span className="text-sm font-normal text-gray-500">/up to {trip.maxPeople} people</span>
              </p>
              
              {/* Book Button */}
              <a
                href="https://fishingbooker.com/charters/view/41107"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-105 transition-all duration-200"
                aria-label={`Book ${trip.name}`}
              >
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 
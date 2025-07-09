import React from 'react'
import Image from 'next/image'

const valueProps = [
  {
    icon: '/icons/schedule.png',
    title: 'Easy booking',
    description: 'Quick online booking for your next fishing adventure'
  },
  {
    icon: '/icons/boat.png',
    title: 'Convenient departure',
    description: 'Easy pickup from Chincoteague marina'
  },
  {
    icon: '/icons/captain.png',
    title: 'Expert captain',
    description: "Captain Todd's 6 years of experience ensures a successful trip"
  },
  {
    icon: '/icons/fishing.png',
    title: 'Gear included',
    description: 'Rods, reels, tackle and bait all provided - just bring yourself'
  }
]

export default function ValuePropsSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          Your fishing experience includes
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {valueProps.map((prop, index) => (
          <div key={index} className="text-center p-6">
            <div className="flex justify-center items-center h-15 mb-4">
              <Image
                src={prop.icon}
                alt={`${prop.title} icon`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {prop.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
} 
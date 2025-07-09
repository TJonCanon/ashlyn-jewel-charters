import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="h-[70vh] relative overflow-hidden my-4 max-w-[1360px] mx-auto rounded-2xl shadow-lg border-l-[10px] border-r-[10px] border-white">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <Image
          src="/Photos/customers1.jpg"
          alt="Happy customers fishing"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-12">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            There&apos;s a fish with your name on it in Chincoteague
          </h1>
          <p className="text-xl mb-10 opacity-90">
            Ashlyn Jewel Charters will help you catch it!
          </p>
          <a
            href="https://fishingbooker.com/charters/view/41107"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="!text-gray-900 !bg-white hover:!bg-gray-100 border-white">
              Book now
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-12 text-white text-center opacity-80 z-10">
        <span className="text-sm block mb-2">Scroll down</span>
        <div className="text-xl animate-bounce">↓</div>
      </div>
    </section>
  )
} 
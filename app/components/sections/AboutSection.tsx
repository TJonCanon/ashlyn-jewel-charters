import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-teal-500 rounded-2xl p-12 relative overflow-hidden min-h-[450px] border-l-[10px] border-r-[10px] border-white">
          <div className="max-w-md lg:text-left text-center lg:mx-0 mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Meet Captain Todd
            </h2>
            <p className="text-white/90 leading-relaxed text-lg">
              I&apos;ve been fishing the waters of Chincoteague since the age of 7, so I have lots of local knowledge. 
              I specialize in flounder/fluke but can also target sharks, whiting, croaker, and other species. 
              We can personalize any trip to focus on a specific species too. So come join me in making some memories.
            </p>
          </div>
          
          {/* Captain Photo */}
          <div className="absolute top-1/2 right-12 transform -translate-y-1/2 hidden lg:block">
            <div className="relative">
              <Image
                src="/Captain_todd.png"
                alt="Captain Todd"
                width={320}
                height={390}
                className="rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
          
          {/* Mobile Captain Photo */}
          <div className="lg:hidden mt-6 text-center">
            <Image
              src="/Captain_todd.png"
              alt="Captain Todd"
              width={280}
              height={340}
              className="rounded-xl object-cover shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 
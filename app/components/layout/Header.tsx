'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#tours', label: 'Our trips' },
    { href: '#about', label: 'About' },
    { href: 'https://fishingbooker.com/charters/view/41107', label: 'Booking', external: true },
    { href: '#faq', label: 'FAQ' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="w-full bg-white sticky top-0 z-50 py-6 pb-12">
      <div className="max-w-[1360px] mx-auto px-3 flex justify-center items-center relative">
        {/* Logo */}
        <div className="absolute left-3 flex items-center justify-center h-full">
          <Image
            src="/Logo.png"
            alt="Ashlyn Jewel Charters"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-semibold text-lg px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-900 font-semibold text-lg px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </button>
            )
          ))}
        </div>

        {/* Phone Number - Desktop */}
        <div className="hidden md:block absolute right-3">
          <a
            href="tel:443-834-8443"
            className="text-teal-600 font-semibold text-lg px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors"
          >
            443-834-8443
          </a>
        </div>

        {/* Mobile Phone & Menu */}
        <div className="md:hidden absolute right-3 flex items-center gap-2">
          <a
            href="tel:443-834-8443"
            className="text-teal-600 font-semibold text-sm px-2 py-1 rounded hover:bg-teal-50 transition-colors"
          >
            443-834-8443
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 z-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-900" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-semibold text-lg px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-900 font-semibold text-lg px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                )
              ))}
              
              {/* Phone Number - Mobile */}
              <a
                href="tel:443-834-8443"
                className="text-teal-600 font-semibold text-lg px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Call: 443-834-8443
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 
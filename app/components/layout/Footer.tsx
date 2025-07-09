'use client'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const footerColumns = [
    {
      title: 'About us',
      links: [
        { label: 'Captain Todd', href: '#about', isScroll: true, external: false },
        { label: 'Contact us', href: 'https://fishingbooker.com/charters/view/41107', external: true, isScroll: false }
      ]
    },
    {
      title: 'Further information',
      links: [
        { label: 'Terms of use', href: '#terms', external: false, isScroll: false },
        { label: 'Health & safety', href: '#health', external: false, isScroll: false },
        { label: 'Privacy policy', href: '#privacy', external: false, isScroll: false }
      ]
    }
  ]

  return (
    <footer id="contact" className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-center">
          {footerColumns.map((column, index) => (
            <div key={index} className="text-center md:text-left">
              <h4 className="text-base font-semibold text-gray-900 mb-4">
                {column.title}
              </h4>
              <div className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  link.external ? (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-500 text-sm hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : link.isScroll ? (
                    <button
                      key={linkIndex}
                      onClick={() => handleNavClick(link.href)}
                      className="block text-gray-500 text-sm hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block text-gray-500 text-sm hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-8 border-t border-gray-100">
          <Image
            src="/Logo.png"
            alt="Ashlyn Jewel Charters"
            width={80}
            height={80}
            className="mx-auto mb-2 object-contain"
          />
          <p className="text-sm text-gray-500">
            A place where fishing and adventure unite
          </p>
        </div>
      </div>
    </footer>
  )
} 
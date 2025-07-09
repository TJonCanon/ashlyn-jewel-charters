'use client'
import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    id: 1,
    question: 'Are kids welcome?',
    answer: "Absolutely! We love having families aboard. Ask about child-sized life vests if you don't have your own."
  },
  {
    id: 2,
    question: 'What if the weather is bad?',
    answer: "Safety first - Captain Todd will reschedule if conditions aren't safe. Free cancellation with 3 days notice."
  },
  {
    id: 3,
    question: 'Do I need a fishing license?',
    answer: 'No, your fishing license is included in the charter price.'
  },
  {
    id: 4,
    question: 'Can we keep the fish we catch?',
    answer: 'Yes, following all local regulations. Captain Todd will help you understand harvest limits and seasons.'
  }
]

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section id="faq" className="mb-16">
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-xl mb-4 shadow-sm overflow-hidden">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-base font-semibold text-gray-900">
                {faq.question}
              </h3>
              <ChevronDownIcon 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  activeId === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`transition-all duration-300 ease-in-out ${
              activeId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}>
              <div className="px-6 pb-5">
                <p className="text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 
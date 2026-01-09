'use client'

import { Open_Sans } from 'next/font/google'
import { Shirt, ShoppingBag, Sticker, Coffee } from 'lucide-react'

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const upcomingItems = [
  { icon: Shirt, label: 'Hoodies' },
  { icon: ShoppingBag, label: 'Tees' },
  { icon: Sticker, label: 'Stickers' },
  { icon: Coffee, label: 'Accessories' },
]

export default function MerchComingSoon() {
  return (
    <div className={`min-h-screen bg-white flex flex-col justify-center ${openSans.className}`}>
      {/* Main content wrapper - centered like other pages */}
      <div className="flex flex-col justify-center px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-gray-500 text-sm lg:text-base font-medium tracking-wider uppercase mb-3">
            Coming Soon
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 lg:mb-4">
            NSA Merch
          </h1>
          <p className="text-gray-600 text-base lg:text-lg xl:text-xl max-w-xl mx-auto">
            We&apos;re cooking up something special. Rep your heritage with style.
          </p>
        </div>

        {/* Product Preview Cards */}
        <div className="max-w-3xl mx-auto w-full mb-12 lg:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
            {upcomingItems.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-6 lg:p-8 text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {/* Decorative blur effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white text-gray-700 rounded-xl mb-3 lg:mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <item.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Card */}
        <div className="max-w-md mx-auto w-full">
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 text-center">
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 bg-gray-900 rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            
            <p className="text-gray-700 font-medium mb-2">
              Currently in development
            </p>
            <p className="text-gray-500 text-sm">
              Follow our socials to be the first to know when we drop
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/umdnsa/"
                className="bg-white hover:bg-gray-900 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-medium shadow-sm"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
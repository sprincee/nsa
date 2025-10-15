'use client'

import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function MerchComingSoon() {
  return (
    <div className={`min-h-screen bg-white flex flex-col ${openSans.className}`}>
      {/* Back to Home Button - Top Left */}
      <div className="absolute top-8 left-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
        >
          <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-base font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-50 mb-8 animate-pulse">
            <Sparkles size={48} className="text-gray-400" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            NSA Merch
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-4">
            Coming Soon
          </p>

          <div className="w-32 h-1 bg-gray-900 mx-auto mb-8" />

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-12">
            We're working on something special. Hoodies, tees, stickers, and more are on the way. 
            Stay tuned for the launch!
          </p>

          {/* Email Notification */}
          <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-sm text-gray-700 mb-4">
              Want to be notified when merch drops?
            </p>
            <a 
              href="mailto:merch@nsa.com?subject=Notify me when merch is available"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Get Notified
            </a>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="pb-8 text-center">
        <p className="text-sm text-gray-400">
          Follow us on social media for updates
        </p>
      </div>
    </div>
  )
}
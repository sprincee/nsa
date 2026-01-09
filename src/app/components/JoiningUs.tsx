'use client'

import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import { ArrowLeft, Mail, Calendar } from 'lucide-react'

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function JoiningUs() {
  return (
    <div className={`min-h-screen bg-white flex items-center justify-center py-20 px-6 ${openSans.className}`}>
      <div className="max-w-2xl w-full text-center">
        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-8">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <Calendar size={40} className="text-gray-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Applications Are Currently Closed
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Thank you for your interest in joining our board! We're not currently accepting applications, 
              but we'd love to hear from you when positions open up.
            </p>

            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8" />

            {/* Info Box */}
            <div className="bg-gray-50 rounded-2xl p-6 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Stay in the loop
              </h2>
              <p className="text-gray-700 mb-4">
                Board applications typically open at the beginning of each semester. 
                Follow us on social media or check back here for updates on when we're recruiting new members.
              </p>
              
              {/* Contact Option */}
              <div className="flex items-start gap-3 mt-6 p-4 bg-white rounded-xl">
                <Mail size={24} className="text-gray-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Questions about joining?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Reach out to us at <a href="mailto:umdnsa@gmail.com" className="text-gray-900 hover:underline font-medium">umdnsa@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link 
          href="/meet-the-board"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
        >
          <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-base font-medium">Back to Meet the Board</span>
        </Link>
      </div>
    </div>
  )
}
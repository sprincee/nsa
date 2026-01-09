'use client'

import { Open_Sans } from 'next/font/google'
import { Calendar, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ApplicationsClosed() {
  return (
    <div className={`min-h-screen bg-white flex flex-col justify-center ${openSans.className}`}>
      {/* Main content wrapper - centered like other pages */}
      <div className="flex flex-col justify-center px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-gray-500 text-sm lg:text-base font-medium tracking-wider uppercase mb-3">
            Check Back Soon
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 lg:mb-4">
            Applications Closed
          </h1>
          <p className="text-gray-600 text-base lg:text-lg xl:text-xl max-w-xl mx-auto">
            We&apos;re not currently recruiting, but we&apos;d love to connect with you when positions open.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-2xl mx-auto w-full mb-12 lg:mb-16">
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {/* When We Recruit */}
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-center hover:bg-gray-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white text-gray-700 rounded-xl mb-3 lg:mb-4 shadow-sm">
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-2">When We Recruit</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                Board applications typically open at the start of each semester
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-center hover:bg-gray-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white text-gray-700 rounded-xl mb-3 lg:mb-4 shadow-sm">
                <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-2">Questions?</h3>
              <a 
                href="mailto:nsaumd@gmail.com" 
                className="text-gray-600 text-xs lg:text-sm leading-relaxed hover:text-gray-900 transition-colors"
              >
                nsaumd@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className="max-w-md mx-auto w-full">
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 text-center">
            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 bg-gray-300 rounded-full" />
              <span className="w-2 h-2 bg-gray-300 rounded-full" />
              <span className="w-2 h-2 bg-gray-300 rounded-full" />
            </div>
            
            <p className="text-gray-700 font-medium mb-2">
              Stay in the loop
            </p>
            <p className="text-gray-500 text-sm">
              Follow our socials to know when applications open
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
              <a
                href="https://groupme.com/join_group/52658605/I0n0A5fz"
                className="bg-white hover:bg-gray-900 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-medium shadow-sm"
                aria-label="GroupMe"
              >
                GM
              </a>
              <a
                href="https://discord.gg/Q7BNuVzU9G"
                className="bg-white hover:bg-gray-900 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-medium shadow-sm"
                aria-label="Discord"
              >
                DC
              </a>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-10 lg:mt-14">
          <Link 
            href="/meet-the-board"
            className="group inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm lg:text-base font-medium">Back to Meet the Board</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
'use client'

import { Open_Sans } from 'next/font/google'
import { useState } from 'react'
import { Users, Calendar, Heart, Sparkles } from 'lucide-react'

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const benefits = [
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with fellow Nepali students and build lifelong friendships'
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Access exclusive cultural celebrations, social gatherings, and networking events'
  },
  {
    icon: Heart,
    title: 'Culture',
    description: 'Celebrate and share Nepali traditions, food, music, and heritage'
  },
  {
    icon: Sparkles,
    title: 'Growth',
    description: 'Develop leadership skills and create unforgettable college memories'
  }
]

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    major: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''
      
      if (!GOOGLE_SCRIPT_URL) {
        // Fallback: simulate submission if no URL configured
        console.log('Form data:', formData)
        await new Promise(resolve => setTimeout(resolve, 1000))
      } else {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
          }),
        })
      }

      setIsSubmitted(true)
      
      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', year: '', major: '' })
      }, 4000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`min-h-screen bg-white flex flex-col justify-center ${openSans.className}`}>
      {/* Main content wrapper - centered like other pages */}
      <div className="flex flex-col justify-center px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 lg:mb-4">
            Join Our Community
          </h1>
          <p className="text-gray-600 text-base lg:text-lg xl:text-xl max-w-2xl mx-auto">
            Become part of a vibrant community celebrating Nepali culture, building lasting friendships, and creating unforgettable memories.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto w-full mb-12 lg:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-5 lg:p-6 text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gray-900 text-white rounded-xl mb-3 lg:mb-4">
                  <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-1">{benefit.title}</h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sign-up Form */}
        <div className="max-w-xl mx-auto w-full">
          <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-gray-100 p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 text-center">
              Ready to Join?
            </h2>
            <p className="text-gray-600 text-center mb-6 lg:mb-8 text-sm lg:text-base">
              Fill out the form below and we'll add you to our community!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="year" className="block text-sm font-semibold text-gray-900 mb-2">
                    Academic Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all duration-300 text-gray-900 bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '20px',
                    }}
                  >
                    <option value="" className="text-gray-400">Select year</option>
                    <option value="freshman" className="text-gray-900">Freshman</option>
                    <option value="sophomore" className="text-gray-900">Sophomore</option>
                    <option value="junior" className="text-gray-900">Junior</option>
                    <option value="senior" className="text-gray-900">Senior</option>
                    <option value="graduate" className="text-gray-900">Graduate</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="major" className="block text-sm font-semibold text-gray-900 mb-2">
                    Major
                  </label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                    placeholder="e.g., Computer Science"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98]'
                } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {isSubmitting ? 'Submitting...' : isSubmitted ? '✓ Welcome to NSA!' : 'Join NSA'}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-500 text-sm mb-4">
                Follow us for updates
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.instagram.com/umdnsa/"
                  className="bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-medium"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href="https://discord.gg/Q7BNuVzU9G"
                  className="bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-medium"
                  aria-label="Discord"
                >
                  DC
                </a>
                <a
                  href="https://groupme.com/join_group/52658605/I0n0A5fz"
                  className="bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-medium"
                  aria-label="GroupMe"
                >
                  GM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
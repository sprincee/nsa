'use client'

import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

interface BoardMember {
  name: string
  position: string
  image: string
  description: string
  quote: string
  objectPosition?: string
}

const boardMembers: BoardMember[] = [
  {
    name: 'Vice President',
    position: 'Vice President',
    image: '/board-photos/vp-1.jpg',
    objectPosition: 'object-center',
    quote: 'Leading with vision, growing through collaboration.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'President',
    position: 'President',
    image: '/board-photos/president.jpg',
    objectPosition: 'object-[99%_center]',
    quote: 'Empowering our community, one initiative at a time.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Vice President',
    position: 'Vice President',
    image: '/board-photos/vp-2.jpg',
    objectPosition: 'object-center',
    quote: 'Innovation starts with listening to our members.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Secretary',
    position: 'Secretary',
    image: '/board-photos/secretary.jpg',
    objectPosition: 'object-center',
    quote: 'Organization is the foundation of great teamwork.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Culture Chair',
    position: 'Culture Chair',
    image: '/board-photos/culture-chair.jpg',
    objectPosition: 'object-top',
    quote: 'Building connections that last beyond meetings.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Events Coordinator',
    position: 'Events Coordinator',
    image: '/board-photos/events-coord.jpg',
    objectPosition: 'object-center',
    quote: 'Creating moments that bring us together.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Historian',
    position: 'Historian',
    image: '/board-photos/historian-1.jpg',
    objectPosition: 'object-center',
    quote: 'Preserving our story, inspiring our future.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Graphic Designer',
    position: 'Graphic Designer',
    image: '/board-photos/graphic-designer.jpg',
    objectPosition: 'object-[99%_center]',
    quote: 'Every design tells our unique story.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Historian',
    position: 'Historian',
    image: '/board-photos/historian-2.jpg',
    objectPosition: 'object-center',
    quote: 'Honoring our past while shaping tomorrow.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Fundraising',
    position: 'Fundraising',
    image: '/board-photos/fundraising-1.jpg',
    objectPosition: 'object-center',
    quote: 'Investing in dreams, funding possibilities.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Treasurer',
    position: 'Treasurer',
    image: '/board-photos/treasurer.jpg',
    objectPosition: 'object-top',
    quote: 'Stewardship and transparency in every decision.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Fundraising',
    position: 'Fundraising',
    image: '/board-photos/fundraising-2.jpg',
    objectPosition: 'object-center',
    quote: 'Turning generosity into meaningful impact.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Public Relations',
    position: 'Public Relations',
    image: '/board-photos/pr-1.jpg',
    objectPosition: 'object-center',
    quote: 'Amplifying voices, sharing our mission.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Senior Advisor',
    position: 'Senior Advisor',
    image: '/board-photos/senior-advisor.jpg',
    objectPosition: 'object-top',
    quote: 'Wisdom gained, knowledge shared freely.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Public Relations',
    position: 'Public Relations',
    image: '/board-photos/pr-22.jpg',
    objectPosition: 'object-center',
    quote: 'Connecting communities through authentic stories.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

export default function CarouselBoard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % boardMembers.length)
    setIsAutoPlaying(false)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + boardMembers.length) % boardMembers.length)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % boardMembers.length)
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  const getVisibleMembers = () => {
    const members = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + boardMembers.length) % boardMembers.length
      members.push({ member: boardMembers[index], offset: i })
    }
    return members
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 ${openSans.className}`}>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Meet The Board
        </h1>
        <p className="text-gray-600 text-lg">Discover the leaders shaping our vision</p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative h-[650px] flex items-center justify-center overflow-hidden">
          {/* Carousel Items */}
          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleMembers().map(({ member, offset }, idx) => (
              <div
                key={`${currentIndex}-${offset}`}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${offset * 380}px) scale(${offset === 0 ? 1 : 0.85})`,
                  zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
                  opacity: Math.abs(offset) <= 1 ? 1 : 0,
                }}
              >
                <button
                  onClick={() => {
                    if (offset === 0) {
                      setSelectedMember(member)
                      setIsAutoPlaying(false)
                    }
                  }}
                  className={`group relative ${offset === 0 ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className={`relative w-[320px] h-[480px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                    offset === 0 ? 'ring-4 ring-gray-900 ring-offset-4' : 'opacity-60'
                  }`}>
                    <Image
                      src={member.image}
                      alt={member.position}
                      fill
                      className={`object-cover ${member.objectPosition || 'object-center'} ${
                        offset === 0 ? 'group-hover:scale-105' : ''
                      } transition-transform duration-500`}
                    />
                    {offset === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                  
                  {/* Position Label & Quote */}
                  <div className={`mt-6 text-center transition-all duration-500 ${
                    offset === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.position}</h3>
                    <p className="text-sm text-gray-600 italic max-w-[280px] mx-auto">"{member.quote}"</p>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 z-30 bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={28} className="text-gray-900" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 z-30 bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={28} className="text-gray-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {boardMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-gray-900'
                  : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="flex justify-center mt-16">
          <Link 
            href="/joining-us"
            className="group inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <span className="text-base font-medium">Interested in joining our team?</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
            >
              <X size={24} className="text-gray-900" />
            </button>

            <div className="p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative w-full md:w-2/5 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.position}
                    fill
                    className={`object-cover ${selectedMember.objectPosition || 'object-center'}`}
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    {selectedMember.position}
                  </h2>
                  <p className="text-gray-600 italic mb-6">"{selectedMember.quote}"</p>
                  <div className="w-16 h-1 bg-gray-900 mb-6" />
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
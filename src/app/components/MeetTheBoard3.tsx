'use client'

import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

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
  objectPosition?: string
}

const boardMembers: BoardMember[] = [
  {
    name: 'Vice President',
    position: 'Vice President',
    image: '/board-photos/vp-1.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'President',
    position: 'President',
    image: '/board-photos/president.jpg',
    objectPosition: 'object-[99%_center]',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Vice President',
    position: 'Vice President',
    image: '/board-photos/vp-2.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Secretary',
    position: 'Secretary',
    image: '/board-photos/secretary.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Culture Chair',
    position: 'Culture Chair',
    image: '/board-photos/culture-chair.jpg',
    objectPosition: 'object-top',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Events Coordinator',
    position: 'Events Coordinator',
    image: '/board-photos/events-coord.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Historian',
    position: 'Historian',
    image: '/board-photos/historian-1.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Graphic Designer',
    position: 'Graphic Designer',
    image: '/board-photos/graphic-designer.jpg',
    objectPosition: 'object-[99%_center]',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Historian',
    position: 'Historian',
    image: '/board-photos/historian-2.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Fundraising',
    position: 'Fundraising',
    image: '/board-photos/fundraising-1.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Treasurer',
    position: 'Treasurer',
    image: '/board-photos/treasurer.jpg',
    objectPosition: 'object-top',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Fundraising',
    position: 'Fundraising',
    image: '/board-photos/fundraising-2.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Public Relations',
    position: 'Public Relations',
    image: '/board-photos/pr-1.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Senior Advisor',
    position: 'Senior Advisor',
    image: '/board-photos/senior-advisor.jpg',
    objectPosition: 'object-top',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Public Relations',
    position: 'Public Relations',
    image: '/board-photos/pr-22.jpg',
    objectPosition: 'object-center',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

// Stagger patterns for visual interest
const staggerPattern = [
  { delay: 0, translateY: 0, rotate: -1 },
  { delay: 100, translateY: 20, rotate: 1 },
  { delay: 50, translateY: -10, rotate: 0 },
  { delay: 150, translateY: 15, rotate: -0.5 },
  { delay: 75, translateY: -5, rotate: 0.5 },
  { delay: 125, translateY: 25, rotate: 1 },
  { delay: 25, translateY: 10, rotate: -1 },
  { delay: 175, translateY: -15, rotate: 0 },
  { delay: 100, translateY: 5, rotate: 0.5 },
  { delay: 50, translateY: -20, rotate: -0.5 },
  { delay: 150, translateY: 12, rotate: 1 },
  { delay: 0, translateY: -8, rotate: 0 },
  { delay: 125, translateY: 18, rotate: -1 },
  { delay: 75, translateY: -12, rotate: 0.5 },
  { delay: 100, translateY: 8, rotate: -0.5 },
]

export default function MeetTheBoard() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={`min-h-screen bg-white py-20 px-6 ${openSans.className}`}>
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Meet The Board
        </h1>
        <p className="text-gray-600 text-xl">The faces behind our mission</p>
      </div>

      {/* Staggered Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {boardMembers.map((member, index) => {
            const pattern = staggerPattern[index % staggerPattern.length]
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${pattern.delay}ms`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  onClick={() => setSelectedMember(member)}
                  className="w-full text-left"
                  style={{
                    transform: `translateY(${pattern.translateY}px)`,
                  }}
                >
                  {/* Card Container */}
                  <div className="relative">
                    {/* Image */}
                    <div 
                      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out"
                      style={{
                        transform: isHovered 
                          ? `rotate(0deg) scale(1.05)` 
                          : `rotate(${pattern.rotate}deg) scale(1)`,
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.position}
                        fill
                        className={`object-cover ${member.objectPosition || 'object-center'} transition-transform duration-700 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`} />
                      
                      {/* Hover Info */}
                      <div className={`absolute inset-0 flex items-end p-6 transition-all duration-500 ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <div>
                          <h3 className="text-white text-2xl font-bold mb-2">
                            {member.position}
                          </h3>
                          <p className="text-white/90 text-sm">Click to learn more</p>
                        </div>
                      </div>
                    </div>

                    {/* Position Label Below */}
                    <div className={`mt-4 transition-all duration-500 ${
                      isHovered ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                    }`}>
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.position}
                      </h3>
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <X size={24} className="text-gray-900" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Image */}
                <div className="relative w-full lg:w-2/5 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.position}
                    fill
                    className={`object-cover ${selectedMember.objectPosition || 'object-center'}`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {selectedMember.position}
                  </h2>
                  <div className="w-20 h-1 bg-gray-900 mb-8" />
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
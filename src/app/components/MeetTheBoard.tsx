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
  // Row 2
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
  // Row 3
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
  // Row 4
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
  // Row 5
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

// Lotus flower SVG component
const LotusIcon = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 85C50 85 35 75 35 55C35 45 40 35 50 30C60 35 65 45 65 55C65 75 50 85 50 85Z" fill="black" stroke="black" strokeWidth="1.5"/>
    <path d="M50 30C50 30 40 35 35 45C30 55 28 65 35 70C42 65 45 55 50 45C50 45 50 35 50 30Z" fill="black" stroke="black" strokeWidth="1.5"/>
    <path d="M50 30C50 30 60 35 65 45C70 55 72 65 65 70C58 65 55 55 50 45C50 45 50 35 50 30Z" fill="black" stroke="black" strokeWidth="1.5"/>
    <path d="M35 70C35 70 30 75 25 75C20 75 18 70 20 65C22 60 28 58 35 60C35 60 35 65 35 70Z" fill="black" stroke="black" strokeWidth="1.5"/>
    <path d="M65 70C65 70 70 75 75 75C80 75 82 70 80 65C78 60 72 58 65 60C65 60 65 65 65 70Z" fill="black" stroke="black" strokeWidth="1.5"/>
  </svg>
)

export default function MeetTheBoard() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null)

  return (
    <div className={`min-h-screen bg-[#ffffff] py-20 px-6 ${openSans.className}`}>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Meet The Board
        </h1>
      </div>

      {/* Board Members Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {boardMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Position Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {member.position}
              </h2>

              {/* Member Image - Clickable */}
              <button
                onClick={() => setSelectedMember(member)}
                className="relative w-full aspect-[5/9] mb-6 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              >
                <Image
                  src={member.image}
                  alt={member.position}
                  fill
                  className={`object-cover ${member.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-300`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-white/30 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X size={24} className="text-gray-900" />
            </button>

            {/* Modal content */}
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="relative w-full md:w-1/3 aspect-[5/9] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.position}
                    fill
                    className={`object-cover ${selectedMember.objectPosition || 'object-center'}`}
                  />
                </div>

                {/* Text content */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedMember.position}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
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
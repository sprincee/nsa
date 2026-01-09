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
    name: 'Lochanitara Shakya ',
    position: 'Vice President',
    image: '/board-photos/vp-1.jpg',
    objectPosition: 'object-center',
    quote: 'MY FAM IS THE BEST!',
    description: 'Lochani is a senior at the University of Maryland majoring in Psychology with minors in Dance and Neuroscience. A former sparring tournament competitor, she believes to-do lists are overrated and treasures her NSA family most.'
  },
  {
    name: 'Sudha Poudel',
    position: 'President',
    image: '/board-photos/president.jpg',
    objectPosition: 'object-[99%_center]',
    quote: 'Bring back E-Board Momo Night!!',
    description: 'Sudha is a junior at the University of Maryland studying General Biology and Statistics. Known for her chaotic fun facts, strong opinions on Pokhara, and her love for momos, she’s always advocating for the return of E-Board Momo Night.'
  },
  {
    name: 'Jenita Shrestha ',
    position: 'Vice President',
    image: '/board-photos/vp-2.jpg',
    objectPosition: 'object-center',
    quote: '👌🤞🤟✊',
    description: 'Jenita is a junior Mechanical Engineering student at the University of Maryland. She’s currently learning ASL, firmly believes spice tolerance makes the world better, and loves the vibrant energy of NSA members.'
  },
  {
    name: 'Aakankshya Koirala',
    position: 'Secretary',
    image: '/board-photos/secretary.jpg',
    objectPosition: 'object-center',
    quote: 'Labubus are scary...',
    description: 'Aakankshya is a sophomore Computer Science major at the University of Maryland. When she’s not coding, she’s crocheting heartfelt gifts—and bonding with the people who make NSA feel like home.'
  },
  {
    name: 'Dipsu Shrestha',
    position: 'Culture Chair',
    image: '/board-photos/culture-chair.jpg',
    objectPosition: 'object-[center_90%]',
    quote: 'I love Nepali Night!',
    description: 'Dipsu is a senior at the University of Maryland studying Public Health Practice. Self-proclaimed spouse of the sun, she proudly MC’d Nepali Night 2025—her favorite NSA tradition.'
  },
  {
    name: 'Mallika Ghimire',
    position: 'Events Coordinator',
    image: '/board-photos/events-coord.jpg',
    objectPosition: 'object-[center_90%]',
    quote: 'Chick-fil-a sauce is not good.',
    description: 'Mallika is a junior Psychology major at the University of Maryland. With 17 piercings and bold food opinions, she loves NSA for the spicy, shared meals that bring everyone together.'
  },
  {
    name: 'Mahad Khan',
    position: 'Historian',
    image: '/board-photos/historian-1.jpg',
    objectPosition: 'object-[center_5%]',
    quote: 'Get yo money up, not yo funny up.',
    description: 'Mahad is a senior Information Science major at the University of Maryland. When he’s not working at Vigilante Coffee, he’s appreciating NSA’s welcoming and open community.'
  },
  {
    name: 'Unisha Poudel',
    position: 'Graphic Designer',
    image: '/board-photos/graphic-designer.jpg',
    objectPosition: 'object-[99%_center]',
    quote: 'Tiramisu clears.',
    description: 'Unisha is a sophomore at the University of Maryland majoring in Psychology and Neuroscience. A level-42 GeoGuessr player and devoted tiramisu fan, she loves the people that make NSA feel like home.'
  },
  {
    name: 'Shahil Paudel',
    position: 'Historian',
    image: '/board-photos/historian-2.jpg',
    objectPosition: 'object-center',
    quote: 'I\'m goated at chunggi.',
    description: 'Shahil is a senior at the University of Maryland studying Information Science. Known for his mysteriously incorrect legal name and appreciation for chunggi, he enjoys the small traditions that make NSA special.'
  },
  {
    name: 'Shreyas Poudyal',
    position: 'Fundraising',
    image: '/board-photos/fundraising-1.jpg',
    objectPosition: 'object-center',
    quote: 'Pineapple belongs on pizza.',
    description: 'Shreyas is a junior General Biology student at the University of Maryland. Having lived in Nepal for 12 years, he’s a strong defender of pineapple on pizza and a big fan of Nepali Night.'
  },
  {
    name: 'Suyash Aryal',
    position: 'Treasurer',
    image: '/board-photos/treasurer.jpg',
    objectPosition: 'object-[center_70%]',
    quote: 'Matcha is mid as hell.',
    description: 'Suyash is a senior at the University of Maryland studying Computer Science and Sustainability. Famous for eating 40 momos in one sitting and showing up strong for Nepali Night.'
  },
  {
    name: 'Allen Shahi',
    position: 'Fundraising',
    image: '/board-photos/fundraising-2.jpg',
    objectPosition: 'object-center',
    quote: 'Buy my mixtape.',
    description: 'Allen is a junior Marketing major at the University of Maryland. He makes music, prefers Instagram Reels over TikTok, and proudly claims the title of best momo wrapper on Momo Night.'
  },
  {
    name: 'Sushan Gautam',
    position: 'Public Relations',
    image: '/board-photos/pr-1.jpg',
    objectPosition: 'object-center',
    quote: 'Sisyphus is goated.',
    description: 'Sushan is a sophomore Computer Engineering major at the University of Maryland. A lover of analogies and deep conversations, he believes texting is overrated and values time spent with the board most.'
  },
  {
    name: 'Srashta Maharjan',
    position: 'Senior Advisor',
    image: '/board-photos/senior-advisor.jpg',
    objectPosition: 'object-top',
    quote: 'I graduated early...',
    description: 'Srashta is a senior at the University of Maryland majoring in Biochemistry with a Humanities, Health & Medicine focus. Despite her parallel-parking struggles, she’s always ready to taste-test spicy chutneys and enjoy the NSA community.'
  },
  {
    name: 'Bivika Adhikari',
    position: 'Public Relations',
    image: '/board-photos/pr-2.jpg',
    objectPosition: 'object-[center_70%]',
    quote: 'I love music!',
    description: 'Bivika is a junior at the University of Maryland studying Public Health Science. A concert enthusiast who’s seen over ten artists live, she values the strong sense of community and connections built through NSA.'
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
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + boardMembers.length) % boardMembers.length
      members.push({ member: boardMembers[index], offset: i })
    }
    return members
  }

  return (
    <div className={`min-h-screen bg-white flex flex-col justify-center ${openSans.className}`}>
      {/* Main content wrapper - header + carousel grouped and centered */}
      <div className="flex flex-col justify-center px-4 sm:px-6 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12 xl:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 lg:mb-4">
            Meet The Board
          </h1>
          <p className="text-gray-600 text-base lg:text-lg xl:text-xl">Discover the leaders shaping our vision</p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-[1800px] mx-auto w-full relative">
          {/* Carousel viewport - responsive height */}
          <div className="relative h-[500px] sm:h-[580px] lg:h-[650px] xl:h-[720px] 2xl:h-[780px] flex items-center justify-center overflow-hidden">
            {/* Carousel Items */}
            <div className="relative w-full h-full flex items-center justify-center">
              {getVisibleMembers().map(({ member, offset }) => {
                // Responsive spacing between cards
                const getTranslateX = () => {
                  if (typeof window !== 'undefined') {
                    if (window.innerWidth >= 1536) return offset * 420 // 2xl
                    if (window.innerWidth >= 1280) return offset * 400 // xl
                    if (window.innerWidth >= 1024) return offset * 380 // lg
                    return offset * 340 // base
                  }
                  return offset * 380
                }
                
                return (
                  <div
                    key={`${currentIndex}-${offset}`}
                    className="absolute transition-all duration-700 ease-out"
                    style={{
                      transform: `translateX(calc(${offset} * clamp(280px, 25vw, 420px))) scale(${offset === 0 ? 1 : 0.82})`,
                      zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
                      opacity: Math.abs(offset) <= 2 ? (Math.abs(offset) === 2 ? 0.4 : 1) : 0,
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
                      {/* Card with responsive sizing */}
                      <div className={`relative 
                        w-[260px] h-[390px] 
                        sm:w-[300px] sm:h-[450px] 
                        lg:w-[340px] lg:h-[510px] 
                        xl:w-[380px] xl:h-[570px]
                        2xl:w-[400px] 2xl:h-[600px]
                        rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
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
                      
                      {/* Name Label & Quote */}
                      <div className={`mt-4 lg:mt-6 text-center transition-all duration-500 ${
                        offset === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-xs lg:text-sm xl:text-base text-gray-600 italic max-w-[280px] lg:max-w-[320px] mx-auto">&quot;{member.quote}&quot;</p>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Navigation Arrows - responsive positioning */}
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 lg:left-8 xl:left-12 z-30 bg-white/80 backdrop-blur-sm hover:bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-900" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 lg:right-8 xl:right-12 z-30 bg-white/80 backdrop-blur-sm hover:bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-900" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-8 lg:mt-12">
            {boardMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-6 sm:w-8 h-2 bg-gray-900'
                    : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Join Our Team CTA */}
          <div className="flex justify-center mt-10 lg:mt-14 pb-8 lg:pb-12">
            <Link 
              href="/joining-us"
              className="group inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="text-sm lg:text-base font-medium">Interested in joining our team?</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
            </button>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                <div className="relative w-full md:w-2/5 aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.position}
                    fill
                    className={`object-cover ${selectedMember.objectPosition || 'object-center'}`}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-gray-500 text-sm sm:text-base font-medium uppercase tracking-wider mb-1">
                    {selectedMember.position}
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {selectedMember.name}
                  </h2>
                  <div className="w-12 sm:w-16 h-1 bg-gray-900 mb-4 sm:mb-6" />
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
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
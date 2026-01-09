'use client'

import Link from 'next/link'
import { Libre_Baskerville } from 'next/font/google'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const isMeetTheBoardPage = pathname === '/meet-the-board'
  const isJoinUsPage = pathname === '/new-member'
  const isMerchPage = pathname === '/merch'


  useEffect(() => {
    // Only run scroll logic on home page with About section
    if (isMeetTheBoardPage || isJoinUsPage) {
      // On Meet the Board or Join Us page, hide on any scroll
      const handleScroll = () => {
        setIsHidden(window.scrollY > 50)
      }
      
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }

    // Original logic for home page
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop
        const aboutBottom = aboutTop + aboutSection.offsetHeight
        const scrollPosition = window.scrollY
        const navbarHeight = 100
        
        // Check if we're in the About section
        const inAboutSection = scrollPosition + navbarHeight >= aboutTop
        setIsScrolled(inAboutSection)
        
        // Hide navbar when scrolling down in About section
        if (inAboutSection && scrollPosition < aboutBottom) {
          const isScrollingDown = scrollPosition > lastScrollY
          setIsHidden(isScrollingDown && scrollPosition > aboutTop + 150)
        } else {
          setIsHidden(false)
        }
        
        lastScrollY = scrollPosition
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMeetTheBoardPage, isJoinUsPage])

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Smooth scroll to About section
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Determine text color: black on Meet the Board or Join Us page, otherwise depends on scroll
  const textColor = (isMeetTheBoardPage || isJoinUsPage || isMerchPage) ? 'text-gray-900' : (isScrolled ? 'text-gray-900' : 'text-[#f4efe5]')

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${libreBaskerville.className} ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link 
              href="/" 
              className={`${textColor} text-md border-b border-transparent hover:border-current transition-all duration-300`}
            >
              Home
            </Link>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={handleAboutClick}
              className={`${textColor} text-md border-b border-transparent hover:border-current transition-all duration-300 cursor-pointer`}
            >
              About
            </a>
          </li>
          <li>
            <Link 
              href="/meet-the-board" 
              className={`${textColor} text-md border-b border-transparent hover:border-current transition-all duration-300`}
            >
              <span className="hidden sm:inline">Meet Our Board</span>
              <span className="inline sm:hidden">MOB</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/merch" 
              className={`${textColor} text-md border-b border-transparent hover:border-current transition-all duration-300`}
            >
              Merch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
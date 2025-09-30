'use client'

import Link from 'next/link'
import { Libre_Baskerville } from 'next/font/google'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Navbar() {
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Smooth scroll to About section
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent ${libreBaskerville.className}`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link 
              href="/" 
              className="text-[#f4efe5] text-md hover:opacity-70 transition-opacity duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={handleAboutClick}
              className="text-[#f4efe5] text-md hover:opacity-70 transition-opacity duration-300 cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <Link 
              href="/meet-the-board" 
              className="text-[#f4efe5] text-md hover:opacity-70 transition-opacity duration-300"
            >
              Meet Our Board
            </Link>
          </li>
          <li>
            <Link 
              href="/merch" 
              className="text-[#f4efe5] text-md hover:opacity-70 transition-opacity duration-300"
            >
              Merch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
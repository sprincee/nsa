import { Libre_Baskerville } from 'next/font/google'
import Link from 'next/link'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Hero() {
  return (
    <div className={`relative h-screen w-full overflow-hidden ${libreBaskerville.className}`}>
      {/* Background Image Container - maintains aspect ratio */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('background/background.jpg')",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content positioned relative to viewport */}
      <div className="relative z-10 h-full w-full">
        {/* Namaste Text - positioned at mountain peak 
            The peak appears at roughly 35-40% from top on most screens */}
        <h1 
          className="absolute left-1/2 -translate-x-1/2 text-[#f4efe5] drop-shadow-2xl text-center whitespace-nowrap
                     text-5xl top-[36%]
                     sm:text-6xl sm:top-[33%]
                     md:text-7xl md:top-[35%]
                     lg:text-8xl lg:top-[33%]
                     xl:top-[33%]"
        >
          नमस्ते<span className="italic">!</span>
        </h1>

        {/* Join Us Button - positioned at mountain base
            The base appears at roughly 75-85% from top */}
        <Link 
          href="/new-member"
          className="absolute left-1/2 -translate-x-1/2 text-[#f4efe5] font-medium bg-transparent border-2 border-[#f4efe5] rounded-full hover:bg-[#f4efe5] hover:text-gray-900 transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer active:scale-95
                     px-16 py-3 text-base top-[90%]
                     sm:px-20 sm:py-4 sm:text-lg sm:top-[90%]
                     md:px-24 md:py-4 md:text-xl md:top-[90%]
                     lg:px-28 lg:py-5 lg:text-xl lg:top-[90%]
                     xl:top-[90%]"
        >
          Join Us!
        </Link>
      </div>
    </div>
  );
}
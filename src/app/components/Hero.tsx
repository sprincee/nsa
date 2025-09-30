import { Libre_Baskerville } from 'next/font/google'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Hero() {
    return (
      <div className={`relative min-h-screen w-full overflow-hidden ${libreBaskerville.className}`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('background/background.jpg')",
          }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 min-h-screen px-4">
          {/* Namaste Text - independently positioned */}
          <h1 className="absolute top-[290px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f4efe5] text-7xl md:text-8xl drop-shadow-2xl text-center">
            नमस्ते<span className="italic">!</span>
          </h1>
  
          {/* Join Us Button - independently positioned */}
          <button className="absolute top-[710px] left-1/2 -translate-x-1/2 px-28 py-5 text-[#f4efe5] text-xl font-medium bg-transparent border-2 border-[#f4efe5] rounded-full hover:bg-[#f4efe5] hover:text-gray-900 transition-all duration-300 shadow-2xl hover:scale-105">
            Join Us!
          </button>
        </div>
      </div>
    );
}
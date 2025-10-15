import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function About() {
  return (
    <section id="about" className={`min-h-screen bg-[#ffffff] py-20 px-6 ${openSans.className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-xl font-bold text-gray-900 mb-12">
          स्वागत छ!
        </h2>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-gray-800 text-sm leading-relaxed mb-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Signature */}
        <div className="mb-12">
          <p className="text-gray-800 text-sm">With Love,</p>
          <p className="text-gray-800 text-sm font-semibold mt-2">NSA Board</p>
        </div>

        {/* Board Photo */}
        <div className="w-full">
          {/* Replace 'board-photo.jpg' with your actual image path */}
          <Image
            src="/board-photos/board-photo.jpg"
            alt="NSA Board Members"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
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
          We are the <strong>Nepali Student Association (NSA) at the University of Maryland</strong>, a cultural and community-driven student organization dedicated to celebrating Nepali identity, heritage, and community on campus. NSA serves as a welcoming home for Nepali and Nepali-diaspora students, while also creating space for students of all backgrounds to engage with Nepal’s rich culture, history, and traditions through social, cultural, and educational events.
          </p>
          
          <p>
          To our general members—welcome! Whether you are looking to connect with fellow Nepali students, celebrate festivals, share food and stories, or simply find a sense of belonging, NSA is here for you. We encourage you to get involved by attending events, joining our mailing list, and participating in the vibrant community we are building together.
          </p>
          
          <p>
          To our alumni, friends, and supporters—welcome back and thank you. NSA is sustained by generations of students who have fostered connection, pride, and mutual support. We are always eager to collaborate with campus organizations and community partners to promote cultural exchange and meaningful dialogue. We look forward to strengthening these relationships and continuing to grow a community rooted in tradition, inclusivity, and shared pride.
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
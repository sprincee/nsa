import { Open_Sans } from 'next/font/google'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Footer() {
  return (
    <footer className={`bg-[#ffffff] py-8 px-6 ${openSans.className}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Email Section */}
        <div className="text-[#8a1102]">
          <a 
            href="mailto:umdnsa@gmail.com" 
            className="hover:underline text-sm"
          >
            Email us at umdnsa@gmail.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 items-center">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#8a1102] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#8a1102] transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#8a1102] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#8a1102] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-8 h-8 bg-neon-cyan transform rotate-12 flex items-center justify-center">
              <span className="text-neutral-900 font-bold text-lg transform -rotate-12">B</span>
            </div>
            <span className="ml-3 text-xl font-bold font-display">Brand</span>
          </div>
          
          {/* Links */}
          <nav className="flex space-x-8 mb-6 md:mb-0">
            <Link href="/privacy" className="text-neutral-300 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-neutral-300 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Copyright */}
          <div className="text-neutral-400 text-sm">
            © 2024 Brand. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
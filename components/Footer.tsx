import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="font-display font-black text-xl mb-4 md:mb-0">
            BRUTAL<span className="neon-accent">.</span>
          </div>
          
          {/* Links */}
          <nav className="flex space-x-8 mb-4 md:mb-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
              Support
            </Link>
          </nav>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2024 Brutal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
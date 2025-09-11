import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative z-50 bg-pastel-cream border-b-4 border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-neutral-900 transform rotate-12 flex items-center justify-center">
              <span className="text-neon-cyan font-bold text-xl transform -rotate-12">B</span>
            </div>
            <span className="ml-3 text-2xl font-bold font-display text-neutral-900">Brand</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* CTA */}
          <button className="btn-primary transform hover:scale-105 focus:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-pastel-blue border-b-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-display font-black text-xl">
            BRUTAL<span className="neon-accent">.</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="font-medium hover:text-neon-cyan transition-colors">
              Features
            </Link>
            <Link href="#about" className="font-medium hover:text-neon-cyan transition-colors">
              About
            </Link>
            <Link href="#contact" className="font-medium hover:text-neon-cyan transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* CTA Button */}
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
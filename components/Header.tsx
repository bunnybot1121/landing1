import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-pastel-cream border-b border-neutral-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container-wide">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-display font-black text-xl">
            BRUTAL<span className="neon-accent">.</span>
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#proof" 
              className="font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Proof
            </Link>
          </nav>
          
          {/* CTA Button */}
          <button className="btn-primary">
            Start Free
          </button>
        </div>
      </div>
    </header>
  )
}
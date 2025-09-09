import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-pastel-cream/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="container-content">
        <div className="flex justify-between items-center h-16">
          {/* Logo - bold and minimal */}
          <Link href="/" className="font-display font-black text-xl">
            BRUTAL<span className="neon-accent">.</span>
          </Link>
          
          {/* Navigation - streamlined */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="#features" 
              className="font-medium text-neutral-700 hover:text-neutral-900 transition-colors text-sm"
            >
              Features
            </Link>
            <Link 
              href="#proof" 
              className="font-medium text-neutral-700 hover:text-neutral-900 transition-colors text-sm"
            >
              Proof
            </Link>
          </nav>
          
          {/* Single CTA */}
          <button className="btn-primary">
            Start Free
          </button>
        </div>
      </div>
    </header>
  )
}
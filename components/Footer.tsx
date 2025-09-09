import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container-content">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="font-display font-black text-lg">
            BRUTAL<span className="neon-accent">.</span>
          </div>
          
          {/* Minimal links */}
          <nav className="flex space-x-6">
            <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Terms
            </Link>
            <Link href="/docs" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Docs
            </Link>
          </nav>
          
          {/* Copyright */}
          <div className="text-neutral-400 text-xs">
            © 2024 Brutal
          </div>
        </div>
      </div>
    </footer>
  )
}
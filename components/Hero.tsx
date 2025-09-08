import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-spacing bg-pastel-pink relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-neon-yellow opacity-20 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-neon-pink opacity-20 rotate-12 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero headline */}
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Build Bold,
            <br />
            <span className="neon-accent">Ship Fast</span>
          </h1>
          
          {/* Supporting line */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Minimal brutalist design meets modern performance
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary flex items-center gap-2">
              Start Building
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              View Examples
            </button>
          </div>
          
          {/* Neon accent icon */}
          <div className="flex justify-center">
            <Zap className="w-8 h-8 text-neon-cyan animate-pulse" />
          </div>
          
          {/* Microcopy */}
          <p className="text-sm text-gray-600 mt-4">
            No setup required • Deploy in minutes
          </p>
        </div>
      </div>
    </section>
  )
}
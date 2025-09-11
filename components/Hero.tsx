import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-pastel-cream overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-pastel-lavender transform rotate-45 opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-pastel-mint transform -rotate-12 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          {/* Neon Accent Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 mb-8 transform rotate-3">
            <Zap className="w-8 h-8 text-neon-cyan" />
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold font-display text-neutral-900 mb-6 text-balance">
            Bold Ideas,
            <span className="block text-neutral-700">Clean Execution</span>
          </h1>
          
          {/* Supporting Line */}
          <p className="text-xl lg:text-2xl text-neutral-700 mb-12 max-w-2xl text-balance">
            Minimal design meets maximum impact for modern brands.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="btn-primary group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">
              View Portfolio
            </button>
          </div>
          
          {/* Microcopy */}
          <p className="text-sm text-neutral-500">
            No contracts • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
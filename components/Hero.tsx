import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-lg bg-pastel-cream relative overflow-hidden">
      {/* Minimal geometric accents */}
      <div className="geometric-accent top-20 right-20 w-12 h-12 bg-neon-pink hidden lg:block"></div>
      <div className="geometric-accent bottom-32 left-20 w-8 h-8 bg-neon-green hidden lg:block"></div>
      
      <div className="container-narrow">
        <div className="text-center">
          {/* Hero headline - clear and confident */}
          <h1 className="font-display text-display-xl mb-6 leading-none">
            Ship Bold,
            <br />
            <span className="neon-accent">Build Fast</span>
          </h1>
          
          {/* Supporting line - concise value prop */}
          <p className="text-xl text-neutral-600 mb-12 max-w-lg mx-auto">
            Minimal brutalist framework for modern builders
          </p>
          
          {/* Primary CTA */}
          <div className="mb-16">
            <button className="btn-primary inline-flex items-center gap-3">
              Start Building
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Neon accent icon - subtle focal point */}
          <div className="flex justify-center mb-4">
            <Zap className="w-6 h-6 text-neon-cyan animate-pulse-soft" />
          </div>
          
          {/* Microcopy */}
          <p className="text-sm text-neutral-600">
            Deploy in minutes • No setup required
          </p>
        </div>
      </div>
    </section>
  )
}
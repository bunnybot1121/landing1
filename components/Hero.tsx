import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-spacing bg-pastel-cream relative overflow-hidden">
      {/* Single geometric accent - minimal */}
      <div className="geometric-accent top-20 right-20 w-8 h-8 bg-neon-pink hidden lg:block"></div>
      
      <div className="container-content">
        <div className="max-w-3xl">
          {/* Clear headline - confident and concise */}
          <h1 className="font-display text-display-xl mb-6 leading-tight">
            Ship Fast,
            <br />
            <span className="neon-accent">Build Bold</span>
          </h1>
          
          {/* Single supporting line */}
          <p className="text-xl text-neutral-600 mb-8 max-w-md">
            Minimal framework for modern builders
          </p>
          
          {/* Primary CTA with subtle secondary action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="btn-primary inline-flex items-center gap-2">
              Start Building
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary">
              View Docs
            </button>
          </div>
          
          {/* Microcopy - essential info only */}
          <p className="text-sm text-neutral-500">
            Deploy in minutes • Zero config required
          </p>
        </div>
      </div>
    </section>
  )
}
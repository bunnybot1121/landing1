import { Rocket, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Zero-config performance optimization.'
  },
  {
    icon: Shield,
    title: 'Rock Solid',
    description: 'Built with modern web standards.'
  },
  {
    icon: Zap,
    title: 'Brutally Simple',
    description: 'Clean architecture that just works.'
  }
]

export default function Features() {
  return (
    <section id="features" className="section-md bg-pastel-mint">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md mb-4">
            Why <span className="neon-accent">Brutal</span>
          </h2>
        </div>
        
        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-minimal p-8 text-center">
              <div className="flex justify-center mb-6">
                <feature.icon className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
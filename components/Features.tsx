import { Rocket, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Zero-config performance optimization'
  },
  {
    icon: Shield,
    title: 'Rock Solid',
    description: 'Built with modern web standards'
  },
  {
    icon: Zap,
    title: 'Brutally Simple',
    description: 'Clean architecture that just works'
  }
]

export default function Features() {
  return (
    <section id="features" className="section-spacing bg-pastel-mint">
      <div className="container-content">
        {/* Geometric separator */}
        <div className="geometric-separator mb-12">
          <h2 className="font-display text-display-md text-neutral-900 pl-16">
            Why Brutal
          </h2>
        </div>
        
        {/* Feature strip - 3 concise cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card-minimal text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { Rocket, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Optimized performance with zero configuration needed.'
  },
  {
    icon: Shield,
    title: 'Rock Solid',
    description: 'Built with modern standards and best practices.'
  },
  {
    icon: Zap,
    title: 'Brutally Simple',
    description: 'Clean code architecture that just works.'
  }
]

export default function Features() {
  return (
    <section id="features" className="section-spacing bg-pastel-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl mb-4">
            Why Choose <span className="neon-accent">Brutal</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="brutal-card p-8 text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="flex justify-center mb-6">
                <feature.icon className="w-12 h-12 text-neon-cyan group-hover:scale-110 transition-transform duration-200" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { Layers, Zap, Target } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Minimal Complexity',
    description: 'Clean interfaces that focus on what matters most to your users.'
  },
  {
    icon: Zap,
    title: 'Maximum Impact',
    description: 'Bold design choices that make your brand impossible to ignore.'
  },
  {
    icon: Target,
    title: 'Precise Execution',
    description: 'Every pixel placed with intention, every interaction crafted with care.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-pastel-lavender geometric-separator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 transform hover:-translate-y-2 transition-all duration-300 border-4 border-neutral-900 hover:shadow-xl">
                <div className="w-12 h-12 bg-neutral-900 mb-6 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform">
                  <feature.icon className="w-6 h-6 text-neon-lime" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 font-display">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
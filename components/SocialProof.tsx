import { Star } from 'lucide-react'

const logos = [
  { name: 'TechCorp', width: 120 },
  { name: 'InnovateCo', width: 140 },
  { name: 'FutureBase', width: 110 }
]

const testimonials = [
  {
    quote: "Transformed our brand completely. Clean, bold, unforgettable.",
    author: "Sarah Chen",
    role: "CEO, TechCorp"
  },
  {
    quote: "Finally, design that matches our ambition. Minimal yet powerful.",
    author: "Marcus Rodriguez", 
    role: "Founder, InnovateCo"
  }
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-pastel-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos */}
        <div className="mb-16">
          <p className="text-center text-neutral-500 mb-8 font-medium">
            Trusted by forward-thinking companies
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="bg-neutral-900 px-6 py-3 transform hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 border-4 border-neutral-900 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-neon-orange fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-neutral-900 mb-6 font-medium">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-neutral-900">{testimonial.author}</div>
                <div className="text-neutral-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
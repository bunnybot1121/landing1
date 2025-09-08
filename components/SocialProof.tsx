import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Brutal simplicity at its finest. Shipped our MVP in record time.",
    author: "Sarah Chen",
    role: "Founder, TechStart"
  },
  {
    quote: "Finally, a framework that doesn't get in the way of building.",
    author: "Marcus Rodriguez",
    role: "Lead Developer, InnovateCorp"
  }
]

const logos = [
  "TECHSTART",
  "INNOVATE",
  "BUILDFAST"
]

export default function SocialProof() {
  return (
    <section className="section-spacing bg-pastel-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted by section */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-600 mb-8">
            Trusted by builders worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="font-display font-black text-lg md:text-xl text-gray-400 hover:text-gray-900 transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="brutal-card p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-neon-yellow fill-current" />
                ))}
              </div>
              <blockquote className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
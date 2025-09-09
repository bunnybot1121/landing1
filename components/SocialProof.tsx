const testimonials = [
  {
    quote: "Shipped our MVP in record time. Brutal simplicity works.",
    author: "Sarah Chen",
    role: "Founder, TechStart"
  },
  {
    quote: "Finally, a framework that doesn't get in the way.",
    author: "Marcus Rodriguez", 
    role: "Lead Dev, InnovateCorp"
  }
]

const trustedLogos = [
  "TECHSTART",
  "INNOVATE", 
  "BUILDFAST"
]

export default function SocialProof() {
  return (
    <section id="proof" className="section-md bg-pastel-lavender">
      <div className="container-narrow">
        {/* Trusted by logos */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-neutral-600 mb-8">
            Trusted by builders
          </p>
          <div className="flex justify-center items-center gap-12">
            {trustedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="font-display font-bold text-lg text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-minimal p-8">
              <blockquote className="text-base mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-sm">{testimonial.author}</div>
                <div className="text-neutral-600 text-xs">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
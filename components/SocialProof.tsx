const testimonials = [
  {
    quote: "Shipped our MVP in record time",
    author: "Sarah Chen",
    role: "Founder, TechStart"
  },
  {
    quote: "Finally, a framework that doesn't get in the way",
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
    <section id="proof" className="section-spacing bg-white">
      <div className="container-content">
        {/* Trust logos - minimal presentation */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-6">
            Trusted by builders
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {trustedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="font-display font-bold text-sm text-neutral-400"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
        
        {/* Two testimonials - concise */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-minimal">
              <blockquote className="text-base mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-sm">{testimonial.author}</div>
                <div className="text-neutral-500 text-xs">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
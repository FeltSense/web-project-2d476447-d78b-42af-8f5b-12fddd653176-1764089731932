'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      text: "Hot or Not changed how I connect with my audience! The instant feedback is addictive and the engagement is through the roof. My profile went viral in just 3 days!"
    },
    {
      name: "Marcus Chen",
      role: "Social Media Influencer",
      avatar: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      text: "The thrill of real-time ratings keeps me coming back. I've gained 50K followers and the community is incredibly active. Best social validation platform out there!"
    },
    {
      name: "Sophia Williams",
      role: "Fashion Blogger",
      avatar: "https://i.pravatar.cc/150?img=45",
      rating: 5,
      text: "Absolutely electrifying experience! The instant judgments are honest and the vibrant community helped me refine my style. This app is pure social gold!"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-r from-slate-900 to-rose-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Join thousands who experience the thrill of instant validation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-xl p-8 md:p-10 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-rose-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 font-normal leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-rose-500/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client';

import { Flame, Zap, TrendingUp, Users } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Flame,
      title: "Instant Rating",
      description: "Upload your photos and get real-time ratings from our vibrant community. Experience the rush of instant feedback and social validation.",
      gradient: "from-rose-600 to-orange-500",
      size: "large"
    },
    {
      icon: Zap,
      title: "Viral Potential",
      description: "Top-rated content gets featured on our trending page, giving you maximum visibility and social reach.",
      gradient: "from-cyan-500 to-blue-500",
      size: "small"
    },
    {
      icon: TrendingUp,
      title: "Score Analytics",
      description: "Track your ratings over time with detailed insights into what makes content resonate with audiences.",
      gradient: "from-purple-500 to-pink-500",
      size: "small"
    },
    {
      icon: Users,
      title: "Community Voting",
      description: "Join millions making instant judgments. Vote on photos, discover trends, and see what's hot right now.",
      gradient: "from-rose-500 to-rose-700",
      size: "small"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            The Ultimate Rating Experience
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Electrifying features that capture the thrill of instant judgments and social validation
          </p>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Large Feature Card - Spans 2 Columns */}
          <div className="md:col-span-2 rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1 transition-all duration-500 p-8 md:p-10 group">
            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${features[0].gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
              <features[0].icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              {features[0].title}
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              {features[0].description}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-rose-400 hover:text-rose-300 font-semibold transition-colors duration-300"
            >
              Get Started
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Smaller Feature Cards */}
          {features.slice(1).map((feature, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1 transition-all duration-500 p-8 md:p-10 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a 
            href="#contact"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/30"
          >
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
}

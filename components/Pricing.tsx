'use client';

import { Check, Zap, Crown, Flame } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-gradient-to-r from-slate-900 to-rose-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-600/30 rounded-full px-5 py-2 mb-6">
            <Flame className="w-4 h-4 text-rose-500" />
            <span className="text-rose-400 font-semibold text-sm">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Be Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-500">Revolution</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of early adopters and experience the thrill of instant social validation
          </p>
        </div>

        {/* Pricing Card - Single Centered Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 via-rose-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            
            {/* Main Card */}
            <div className="relative rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-2xl shadow-rose-500/20 p-8 md:p-10 hover:shadow-2xl hover:shadow-rose-500/30 hover:-translate-y-1 transition-all duration-500">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  <span className="font-bold text-sm">MOST POPULAR</span>
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-600 to-rose-700 flex items-center justify-center shadow-lg shadow-rose-500/30">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white text-center mb-2">
                Early Access
              </h3>
              <p className="text-slate-400 text-center mb-6">
                Lifetime premium features
              </p>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight text-white">$29</span>
                  <span className="text-slate-400 text-lg">one-time</span>
                </div>
                <p className="text-cyan-400 font-semibold mt-2">
                  Regular price: <span className="line-through text-slate-500">$99</span>
                </p>
              </div>

              {/* Stripe Button */}
              <button
                onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/30 mb-8"
              >
                Pre-Order Now - $29
              </button>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-slate-300 leading-relaxed">Unlimited photo ratings and comparisons</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-slate-300 leading-relaxed">Advanced AI-powered attractiveness scoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-slate-300 leading-relaxed">Real-time leaderboards and rankings</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-slate-300 leading-relaxed">Exclusive early access to new features</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-slate-300 leading-relaxed">Priority support and community access</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Crown className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-cyan-400 font-semibold leading-relaxed">Lifetime access - no recurring fees</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-center text-sm text-slate-400">
                  🔒 Secure payment powered by Stripe • 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">
            Join <span className="text-rose-500 font-bold">2,847</span> early adopters who've already secured their spot
          </p>
        </div>
      </div>
    </section>
  );
}

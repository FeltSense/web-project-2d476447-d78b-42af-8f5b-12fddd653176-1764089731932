'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-rose-700/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Cards Animation */}
        <div className="absolute top-20 right-12 opacity-20 animate-float">
          <div className="w-32 h-40 bg-gradient-to-br from-rose-600 to-rose-800 rounded-2xl shadow-2xl transform rotate-12"></div>
        </div>
        <div className="absolute bottom-32 left-16 opacity-20 animate-float-delayed">
          <div className="w-32 h-40 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl shadow-2xl transform -rotate-12"></div>
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-10 animate-float">
          <div className="w-24 h-32 bg-gradient-to-br from-rose-500 to-rose-700 rounded-2xl shadow-2xl transform rotate-6"></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-full px-6 py-3 mb-8 shadow-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-600"></span>
            </span>
            <span className="text-slate-300 font-medium">The Ultimate Social Rating Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            Rate. React.
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-rose-600 to-cyan-500 bg-clip-text text-transparent">
              Get Validated.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-normal">
            Join millions making instant judgments. Upload your photos, get rated by the community, and discover who's hot in real-time. The thrill of social validation awaits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl px-10 py-5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/30 text-lg"
            >
              Start Rating Now
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 rounded-xl px-10 py-5 transition-all duration-300 font-semibold text-lg"
            >
              See How It Works
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1 transition-all duration-500">
              <div className="text-5xl font-bold bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent mb-3">
                10M+
              </div>
              <div className="text-slate-300 text-lg font-medium">Active Voters</div>
              <div className="text-slate-400 text-sm mt-2">Making judgments every day</div>
            </div>

            <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-500">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-3">
                500M+
              </div>
              <div className="text-slate-300 text-lg font-medium">Ratings Given</div>
              <div className="text-slate-400 text-sm mt-2">Instant feedback worldwide</div>
            </div>

            <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1 transition-all duration-500">
              <div className="text-5xl font-bold bg-gradient-to-r from-rose-500 via-rose-600 to-cyan-500 bg-clip-text text-transparent mb-3">
                &lt;2s
              </div>
              <div className="text-slate-300 text-lg font-medium">Average Vote Time</div>
              <div className="text-slate-400 text-sm mt-2">Lightning-fast judgments</div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col items-center">
            <div className="flex -space-x-4 mb-4">
              <Image
                src="https://i.pravatar.cc/150?img=1"
                alt="User"
                width={48}
                height={48}
                className="rounded-full border-4 border-slate-900 shadow-xl"
              />
              <Image
                src="https://i.pravatar.cc/150?img=2"
                alt="User"
                width={48}
                height={48}
                className="rounded-full border-4 border-slate-900 shadow-xl"
              />
              <Image
                src="https://i.pravatar.cc/150?img=3"
                alt="User"
                width={48}
                height={48}
                className="rounded-full border-4 border-slate-900 shadow-xl"
              />
              <Image
                src="https://i.pravatar.cc/150?img=4"
                alt="User"
                width={48}
                height={48}
                className="rounded-full border-4 border-slate-900 shadow-xl"
              />
              <Image
                src="https://i.pravatar.cc/150?img=5"
                alt="User"
                width={48}
                height={48}
                className="rounded-full border-4 border-slate-900 shadow-xl"
              />
            </div>
            <p className="text-slate-400 text-sm">
              Join <span className="text-rose-500 font-semibold">thousands</span> who got rated today
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-25px) rotate(-12deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

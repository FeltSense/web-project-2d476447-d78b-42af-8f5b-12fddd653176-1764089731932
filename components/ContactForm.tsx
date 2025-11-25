'use client';

import { useState } from 'react';
import { Flame, Zap, MessageCircle, Mail, Phone, User, Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '2d476447-d78b-42af-8f5b-12fddd653176',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Zap className="w-8 h-8 text-cyan-500" />
            <Flame className="w-10 h-10 text-rose-600" />
            <Zap className="w-8 h-8 text-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Let's Make It <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-500">Hot</span>
          </h2>
          <p className="text-xl font-normal leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Ready to ignite your social media presence? Drop us a message and let's create something that'll break the internet.
          </p>
        </div>

        {/* Split Layout: Form + Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-2xl shadow-rose-500/10 p-8 md:p-10 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-500">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-600 to-cyan-500 mb-6 animate-bounce">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                  You're On Fire! 🔥
                </h3>
                <p className="text-lg font-normal leading-relaxed text-slate-300 mb-8">
                  Thanks for reaching out! We'll get back to you faster than a viral post spreads.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/30"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-rose-500 transition-colors duration-300" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-600 bg-slate-800/50 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 py-4 pl-12 pr-5 text-white placeholder-slate-400 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-rose-500 transition-colors duration-300" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-600 bg-slate-800/50 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 py-4 pl-12 pr-5 text-white placeholder-slate-400 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-rose-500 transition-colors duration-300" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-slate-600 bg-slate-800/50 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 py-4 pl-12 pr-5 text-white placeholder-slate-400 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-rose-500 transition-colors duration-300" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full rounded-xl border border-slate-600 bg-slate-800/50 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 py-4 pl-12 pr-5 text-white placeholder-slate-400 transition-all duration-300 outline-none resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Error State */}
                {status === 'error' && (
                  <div className="rounded-xl bg-red-500/10 border border-red-500/50 p-4 text-red-400 text-sm">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info Cards */}
          <div className="space-y-8">
            {/* Why Contact Us Card */}
            <div className="rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-xl p-8 md:p-10 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                Why Reach Out?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="font-normal leading-relaxed text-slate-300">
                    <span className="font-semibold text-white">Partnership Opportunities:</span> Collaborate with the hottest social platform
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                  <p className="font-normal leading-relaxed text-slate-300">
                    <span className="font-semibold text-white">Media Inquiries:</span> Get the inside scoop on viral trends
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="font-normal leading-relaxed text-slate-300">
                    <span className="font-semibold text-white">Business Solutions:</span> Custom features for your brand
                  </p>
                </li>
              </ul>
            </div>

            {/* Response Time Card */}
            <div className="rounded-2xl bg-gradient-to-br from-rose-600 to-rose-700 shadow-xl p-8 md:p-10 hover:shadow-2xl hover:shadow-rose-500/30 hover:-translate-y-1 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl mb-6">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                Lightning Fast Response
              </h3>
              <p className="font-normal leading-relaxed text-rose-50 mb-6">
                We know you're hot stuff. That's why we respond to all inquiries within 24 hours. Your time is valuable, and so is ours.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">&lt;24h</div>
                  <div className="text-sm text-rose-100">Response Time</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99%</div>
                  <div className="text-sm text-rose-100">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg font-normal leading-relaxed text-slate-400">
            Not ready to commit? Follow us on social media and stay in the loop
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-rose-500 hover:bg-slate-700 transition-all duration-300 cursor-pointer">
              <span className="text-slate-300 hover:text-rose-500 transition-colors duration-300">𝕏</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-cyan-500 hover:bg-slate-700 transition-all duration-300 cursor-pointer">
              <span className="text-slate-300 hover:text-cyan-500 transition-colors duration-300">in</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-rose-500 hover:bg-slate-700 transition-all duration-300 cursor-pointer">
              <span className="text-slate-300 hover:text-rose-500 transition-colors duration-300">IG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

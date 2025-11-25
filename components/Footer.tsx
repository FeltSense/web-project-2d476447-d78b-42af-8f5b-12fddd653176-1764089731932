import { Flame, Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#contact" },
        { name: "Blog", href: "#blog" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Community Guidelines", href: "#guidelines" },
        { name: "Cookie Policy", href: "#cookies" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-rose-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-rose-500" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-rose-600" }
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@hotornot.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "San Francisco, CA" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section - Larger Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Flame className="w-10 h-10 text-rose-600" fill="currentColor" />
                <div className="absolute inset-0 blur-xl bg-rose-600/30"></div>
              </div>
              <span className="text-3xl font-bold tracking-tight text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Hot or Not
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
              The electrifying social platform where instant judgments meet social validation. Rate, connect, and discover what's trending in real-time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-400 hover:text-rose-500 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-cyan-500" />
                  <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-rose-600 hover:shadow-lg hover:shadow-rose-500/20`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-bold text-lg mb-6 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-rose-500 transition-colors duration-300 text-sm inline-flex items-center group"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-bold text-2xl mb-3 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Stay in the Loop
              </h3>
              <p className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get the latest updates, trends, and exclusive features delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-slate-700 bg-slate-900/50 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 py-4 px-5 text-white placeholder-slate-500 transition-all duration-300 outline-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/30 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © {new Date().getFullYear()} Hot or Not. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
                Privacy
              </a>
              <a href="#terms" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
                Terms
              </a>
              <a href="#cookies" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

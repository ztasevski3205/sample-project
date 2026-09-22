import { Shield, Lock, Eye, Server, Users, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Identify vulnerabilities before attackers do. Our expert team simulates real-world attacks to test your defences.",
  },
  {
    icon: Lock,
    title: "Managed Security",
    description: "24/7 security operations centre monitoring, threat detection and incident response for your business.",
  },
  {
    icon: Eye,
    title: "Security Assessments",
    description: "Comprehensive evaluation of your security posture against industry frameworks and best practices.",
  },
  {
    icon: Server,
    title: "Cloud Security",
    description: "Protect your cloud infrastructure with tailored security solutions for AWS, Azure and Google Cloud.",
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Empower your team with security awareness training to recognise and prevent cyber threats.",
  },
  {
    icon: Shield,
    title: "Incident Response",
    description: "Rapid response when it matters most. Our team is ready to contain, investigate and remediate threats.",
  },
];

const stats = [
  { value: "98%", label: "Client Retention", detail: "Trusted by businesses across Australia." },
  { value: "20+", label: "Years Experience", detail: "Deep expertise across all sectors." },
  { value: "500+", label: "Assessments Completed", detail: "Proven track record of results." },
  { value: "24/7", label: "Monitoring", detail: "Around-the-clock protection." },
];

const steps = [
  { step: "01", title: "Assessment", description: "We evaluate your current security posture, identifying gaps and vulnerabilities across your systems." },
  { step: "02", title: "Solutions", description: "We design tailored security measures specifically built to address your unique risks and business requirements." },
  { step: "03", title: "Implementation", description: "Our team deploys and configures your security solutions with minimal disruption to your operations." },
  { step: "04", title: "Monitoring", description: "Ongoing surveillance and support to keep your defences strong as threats evolve." },
];

const testimonials = [
  {
    quote: "Their professional approach, technical expertise, and reliability have delivered real improvements to our efficiency and bottom line.",
    name: "Andrew Dunne",
    role: "Director, Advertising Associates",
  },
  {
    quote: "They transformed our security posture completely. We now have confidence that our systems and data are properly protected.",
    name: "Sarah Mitchell",
    role: "CTO, FinanceCore",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8" style={{ color: "var(--accent)" }} />
            <span className="text-xl font-bold tracking-tight">Sample Project</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "var(--muted)" }}>Services</a>
            <a href="#about" className="text-sm hover:text-white transition-colors" style={{ color: "var(--muted)" }}>About</a>
            <a href="#process" className="text-sm hover:text-white transition-colors" style={{ color: "var(--muted)" }}>How It Works</a>
            <a href="#contact" className="text-sm hover:text-white transition-colors" style={{ color: "var(--muted)" }}>Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
            style={{ background: "var(--accent)" }}
          >
            <Phone className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, var(--accent), transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>
              Trusted Security Experts
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Protecting Your
              <br />
              <span style={{ color: "var(--accent)" }}>Digital Future.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--muted)" }}>
              Comprehensive cyber security solutions for businesses that demand the highest level of protection. Expert local support you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white transition-colors"
                style={{ background: "var(--accent)" }}
              >
                Free Security Review
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold border transition-colors"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-16 max-w-2xl" style={{ color: "var(--muted)" }}>
            End-to-end security solutions designed to protect every layer of your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border transition-all duration-300"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <service.icon className="w-10 h-10 mb-6" style={{ color: "var(--accent)" }} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="about" className="py-24 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Elite Team.<br />Proven Protection.
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                Stay ahead of threats with a team that brings decades of experience and a 98% client retention rate. We deliver real-time monitoring, rapid incident response, and tailored solutions that grow with your business.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                  <p className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--accent)" }}>{stat.value}</p>
                  <p className="font-semibold mb-1">{stat.label}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <p className="text-6xl font-bold mb-4 opacity-20" style={{ color: "var(--accent)" }}>{step.step}</p>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl border" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                <p className="text-lg md:text-xl leading-relaxed mb-8 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold" style={{ color: "var(--accent)" }}>{t.name}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-12 md:p-16 text-center" style={{ background: "linear-gradient(135deg, var(--accent), #4c1d95)" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Business?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Get a free, no-obligation security review. Our experts will assess your current posture and recommend next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold bg-white text-black transition-colors hover:bg-gray-100">
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a href="tel:1300000000" className="inline-flex items-center gap-2 text-lg font-semibold">
                <Phone className="w-5 h-5" />
                1300 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" style={{ color: "var(--accent)" }} />
            <span className="font-bold">Sample Project</span>
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
            <MapPin className="w-4 h-4" />
            Melbourne, Australia
          </div>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} Sample Project. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

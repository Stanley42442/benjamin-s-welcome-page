import { Zap, MapPin, Check, Headphones, TrendingUp, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function About() {
  const stats = [
    { number: "100+", label: "Bugs Fixed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24-48hrs", label: "Average Fix Time" },
    { number: "25+", label: "Countries Served" },
  ];

  const whyChoose = [
    { icon: TrendingUp, title: "Mobile-Only Focus", desc: "Exclusively fixing mobile bugs means faster, more reliable solutions." },
    { icon: MapPin, title: "Global Reach", desc: "Based in Nigeria, serving clients worldwide with timezone flexibility." },
    { icon: Zap, title: "Fast Turnaround", desc: "Most bugs fixed within 24–48 hours. Same-day rush available." },
    { icon: Check, title: "Affordable Pricing", desc: "Transparent pricing starting from ₦15,000. No hidden fees." },
    { icon: TrendingUp, title: "Quality Guaranteed", desc: "Every fix tested on multiple devices to ensure it works perfectly." },
    { icon: Headphones, title: "Direct Communication", desc: "Work directly with us via WhatsApp. No middlemen, no delays." },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-wide uppercase text-primary mb-2">About us</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" data-testid="text-about-title">About OptiSolve Labs</h1>
          <p className="text-muted-foreground text-lg max-w-2xl" data-testid="text-about-subtitle">
            Your global mobile frontend bug fixing specialist.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <div className="w-full max-w-sm p-8 rounded-lg border bg-card text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Frontend Developer</h3>
                <p className="text-sm text-muted-foreground">Specialized in Mobile Bug Fixes</p>
              </div>
            </div>

            <div data-testid="section-about-story">
              <h2 className="text-2xl font-bold tracking-tight mb-5">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  OptiSolve Labs was founded to address a critical challenge: functional website issues that directly impact revenue. A broken menu, non-responsive WhatsApp button, or failed form submission means lost customers.
                </p>
                <p>
                  As a specialized frontend developer focused on mobile-first optimization, I've resolved these issues across diverse client portfolios worldwide. This led to establishing OptiSolve Labs — a dedicated service providing rapid, cost-effective solutions.
                </p>
                <p>
                  We specialize exclusively in mobile frontend remediation. This focused approach enables faster resolution and superior cost efficiency compared to generalist developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center" data-testid={`card-stat-${idx}`}>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12" data-testid="text-why-choose-title">
            Why Choose OptiSolve Labs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4" data-testid={`card-reason-${idx}`}>
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-muted/30 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6" data-testid="text-mission-title">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed" data-testid="section-mission-statement">
            <p>
              To enable businesses worldwide to maximize digital effectiveness by ensuring optimal mobile functionality. Every technical failure represents a missed opportunity.
            </p>
            <p>
              Whether you're an e-commerce enterprise, tech startup, or service-based organization — our commitment is rapid, dependable, and cost-effective mobile frontend optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" data-testid="text-cta-title">
            Ready to fix your mobile website?
          </h2>
          <p className="text-muted-foreground mb-8" data-testid="text-cta-subtitle">
            Let's get your mobile bugs fixed today.
          </p>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-whatsapp hover:bg-whatsapp-dark" data-testid="button-about-cta">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

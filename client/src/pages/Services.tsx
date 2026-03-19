import { Link } from "wouter";
import { MessageCircle, Menu, FileText, Palette, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

import { Globe } from "lucide-react";

const iconMap = { MessageCircle, Menu, FileText, Palette, Globe };

export default function Services() {
  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-sm font-medium tracking-wide uppercase text-primary mb-2">What we offer</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" data-testid="text-page-title">Specialized Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl" data-testid="text-page-subtitle">
            Expert mobile frontend optimization and repair. We resolve critical issues with precision and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Link key={service.id} href={`/${service.id}`}>
                <div
                  className="group p-6 rounded-lg border bg-card hover:border-primary/30 transition-colors cursor-pointer h-full"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Pricing & Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="border-t pt-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center" data-testid="text-why-choose-title">
            Why Choose OptiSolve Labs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Efficient", desc: "Most issues resolved within 24–72 hours. Expedited service available for urgent needs." },
              { title: "Professional", desc: "Comprehensive support with 30–90 day follow-up included. Complete satisfaction commitment." },
              { title: "Transparent", desc: "Competitive pricing with full cost visibility. No hidden fees. Early adopters receive 50% discount." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

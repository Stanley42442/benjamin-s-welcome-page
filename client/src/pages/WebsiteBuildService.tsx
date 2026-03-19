import { Globe, CheckCircle2, XCircle, Zap, Layout, Smartphone, Search, ShieldCheck } from "lucide-react";
import { PricingCard } from "@/components/PricingCard";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

export default function WebsiteBuildService() {
  const service = SERVICES.find((s) => s.id === "website-build")!;

  const problems = [
    { icon: XCircle, title: "No Online Presence", desc: "Potential customers can't find you online, so they go to competitors instead." },
    { icon: XCircle, title: "DIY Template Struggles", desc: "Generic templates that don't represent your brand or convert visitors into customers." },
    { icon: XCircle, title: "Not Mobile-Friendly", desc: "Over 70% of Nigerian internet users browse on mobile — your site must work perfectly on phones." },
    { icon: XCircle, title: "Slow & Insecure Sites", desc: "Outdated websites that load slowly and lack basic security drive customers away." },
  ];

  const benefits = [
    { icon: Globe, title: "Reach More Customers", desc: "A professional website works 24/7, bringing in leads and sales even while you sleep." },
    { icon: Smartphone, title: "Mobile-First Design", desc: "Every site we build looks and works flawlessly on phones, tablets, and desktops." },
    { icon: ShieldCheck, title: "Professional Credibility", desc: "A polished website builds instant trust and positions your brand as an authority." },
    { icon: Search, title: "Found on Google", desc: "Built-in SEO ensures your business appears when potential customers search online." },
  ];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "We discuss your goals, brand, target audience, and required features." },
    { step: "02", title: "Design Mockup", desc: "You receive a visual preview of your website before any code is written." },
    { step: "03", title: "Development", desc: "We build your site with clean code, fast loading times, and responsive layouts." },
    { step: "04", title: "Launch & Handover", desc: "Your site goes live with full documentation and training on how to manage it." },
  ];

  const whatsIncluded = [
    "Custom design tailored to your brand",
    "Mobile-responsive layout",
    "Contact form with email notifications",
    "WhatsApp chat button",
    "Basic SEO setup & Google indexing",
    "Social media integration",
    "Performance optimization",
    "Post-launch support period",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-medium tracking-wide uppercase text-primary" data-testid="text-service-label">Website Building</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" data-testid="text-service-title">{service.title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl" data-testid="text-service-description">{service.description}</p>
        </div>
      </section>

      {/* Why You Need a Website */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10" data-testid="text-problems-title">
            Why You Need a Professional Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {problems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10" data-testid="text-benefits-title">
            What a Great Website Does for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-destructive/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-destructive mb-3">Without a Website</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Invisible to online customers</li>
                  <li>• Relying only on word-of-mouth</li>
                  <li>• No way to showcase your work</li>
                  <li>• Competitors take your leads</li>
                  <li>• Limited to local reach only</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-primary mb-3">With Your New Website</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Found by customers on Google</li>
                  <li>• Professional brand image 24/7</li>
                  <li>• Portfolio & services on display</li>
                  <li>• Leads come to you automatically</li>
                  <li>• Reach customers nationwide</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10" data-testid="text-process-title">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <Card key={step.step}>
                <CardContent className="pt-6">
                  <span className="text-3xl font-bold text-primary/20 mb-2 block">{step.step}</span>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10" data-testid="text-included-title">
            What's Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {whatsIncluded.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-muted/30 border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" data-testid="text-pricing-title">Pricing</h2>
          <p className="text-muted-foreground mb-10">Choose the package that fits your needs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.pricing.map((tier, index) => (
              <PricingCard
                key={tier.name}
                tier={tier}
                serviceId={service.id}
                serviceTitle={service.title}
                featured={index === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
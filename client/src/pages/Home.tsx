import { useState } from "react";
import { Link } from "wouter";
import { MessageCircle, Menu, FileText, Palette, Globe, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getWhatsAppLink, SERVICES, TESTIMONIALS } from "@/lib/constants";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { WebsiteTestimonials } from "@shared/schema";

const iconMap = {
  MessageCircle,
  Menu,
  FileText,
  Palette,
  Globe,
};

export default function Home() {
  const { toast } = useToast();
  const [testimonialName, setTestimonialName] = useState("");
  const [testimonialLocation, setTestimonialLocation] = useState("");
  const [testimonialRating, setTestimonialRating] = useState("5");
  const [testimonialQuote, setTestimonialQuote] = useState("");
  const [submittingTestimonial, setSubmittingTestimonial] = useState(false);

  const { data: testimonials = TESTIMONIALS } = useQuery<WebsiteTestimonials[]>({
    queryKey: ["/api/testimonials"],
    queryFn: async () => {
      const res = await fetch("/api/testimonials");
      return res.json();
    },
  });

  const testimonialMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: Math.random().toString(36).substring(7),
          name: data.name,
          location: data.location,
          rating: parseInt(data.rating),
          quote: data.quote,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Thank you!", description: "Your testimonial has been submitted." });
      setTestimonialName("");
      setTestimonialLocation("");
      setTestimonialRating("5");
      setTestimonialQuote("");
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to submit testimonial.", variant: "destructive" });
    },
  });

  const handleSubmitTestimonial = () => {
    if (!testimonialName || !testimonialLocation || !testimonialQuote) {
      toast({ title: "Incomplete form", description: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSubmittingTestimonial(true);
    testimonialMutation.mutate(
      { name: testimonialName, location: testimonialLocation, rating: testimonialRating, quote: testimonialQuote },
      { onSettled: () => setSubmittingTestimonial(false) }
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium tracking-wide uppercase text-primary mb-4" data-testid="text-hero-label">
            Website Optimization Experts
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]" data-testid="text-hero-title">
            We fix what's broken.{" "}
            <span className="text-primary">Fast.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed" data-testid="text-hero-subtitle">
            WhatsApp buttons, broken menus, failed forms, outdated designs — resolved in 24–72 hours with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="text-base px-8" data-testid="button-hero-services">
                View Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" data-testid="button-hero-cta">
              <Button size="lg" variant="outline" className="text-base px-8 border-whatsapp text-foreground hover:bg-whatsapp hover:text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 border-t" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-wide uppercase text-primary mb-2">What we do</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-services-title">Our Services</h2>
            <p className="text-muted-foreground mt-3 max-w-xl text-lg" data-testid="text-services-subtitle">
              Specialized solutions for critical website issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Link key={service.id} href={`/${service.id}`}>
                  <div
                    className="group p-6 rounded-lg border bg-card hover:border-primary/30 transition-colors cursor-pointer"
                    data-testid={`card-service-${service.id}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
                        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 border-t bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-wide uppercase text-primary mb-2">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-testimonials-title">What our clients say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14" data-testid="section-testimonials-scroll">
            {(testimonials && testimonials.length > 0 ? testimonials : TESTIMONIALS).map((testimonial) => (
              <Card key={testimonial.id} className="bg-card" data-testid={`card-testimonial-${testimonial.id}`}>
                <CardContent className="pt-6">
                  <div className="text-3xl text-primary/30 font-serif leading-none mb-2">"</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5" data-testid={`text-quote-${testimonial.id}`}>
                    {testimonial.quote}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-medium text-sm" data-testid={`text-name-${testimonial.id}`}>{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground" data-testid={`text-location-${testimonial.id}`}>{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Testimonial Form */}
          <Card className="max-w-xl mx-auto">
            <CardContent className="pt-6 space-y-4">
              <h3 className="font-semibold text-lg">Share Your Experience</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input placeholder="Your name" value={testimonialName} onChange={(e) => setTestimonialName(e.target.value)} data-testid="input-testimonial-name" />
                <Input placeholder="Your location" value={testimonialLocation} onChange={(e) => setTestimonialLocation(e.target.value)} data-testid="input-testimonial-location" />
              </div>
              <Textarea placeholder="Share your experience..." value={testimonialQuote} onChange={(e) => setTestimonialQuote(e.target.value)} className="min-h-20" data-testid="textarea-testimonial-quote" />
              <Button onClick={handleSubmitTestimonial} disabled={submittingTestimonial} className="w-full" data-testid="button-submit-testimonial">
                <Send className="w-4 h-4 mr-2" />
                {submittingTestimonial ? "Submitting..." : "Submit Testimonial"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-cta-title">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
            Let's fix your website today. Reach out for a quick consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-contact-cta">Get in Touch</Button>
            </Link>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-whatsapp hover:bg-whatsapp hover:text-white" data-testid="button-whatsapp-cta">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

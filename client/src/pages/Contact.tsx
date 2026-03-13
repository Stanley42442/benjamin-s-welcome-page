import { MessageCircle, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getWhatsAppLink } from "@/lib/constants";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", websiteUrl: "", bugType: "", message: "", urgency: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send message");
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", websiteUrl: "", bugType: "", message: "", urgency: "" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to send message", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: MessageCircle, title: "WhatsApp", description: "Instant response & quick quotes", action: "Chat Now", href: getWhatsAppLink() },
    { icon: Mail, title: "Email", description: "For detailed inquiries", action: "optisolvelabs@gmail.com", href: "mailto:optisolvelabs@gmail.com" },
    { icon: Phone, title: "Phone", description: "During business hours", action: "+234 702 609 9884", href: "tel:+2347026099884" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-wide uppercase text-primary mb-2">Get in touch</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" data-testid="text-contact-hero-title">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl" data-testid="text-contact-hero-subtitle">
            We're here to help fix your website issues. Reach out through any channel.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a key={method.title} href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <div className="p-6 rounded-lg border bg-card hover:border-primary/30 transition-colors cursor-pointer text-center h-full">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <span className="text-sm font-medium text-primary">{method.action}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-2 text-center" data-testid="text-contact-form-title">Send a Message</h2>
          <p className="text-sm text-muted-foreground text-center mb-8" data-testid="text-contact-form-subtitle">
            Fill out the form and we'll respond within 24 hours.
          </p>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name *</label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone *</label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                  </div>
                  <div>
                    <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1.5">Website URL</label>
                    <Input id="websiteUrl" type="url" value={formData.websiteUrl} onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })} placeholder="https://yourwebsite.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bugType" className="block text-sm font-medium mb-1.5">Service Needed *</label>
                    <select id="bugType" value={formData.bugType} onChange={(e) => setFormData({ ...formData, bugType: e.target.value })} required className="w-full px-3 py-2 border rounded-md bg-background text-sm">
                      <option value="">Select a service</option>
                      <option value="menu">Mobile Menu Fix</option>
                      <option value="whatsapp">WhatsApp Button Fix</option>
                      <option value="form">Contact Form Fix</option>
                      <option value="visual">Visual Overhaul</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium mb-1.5">Urgency *</label>
                    <select id="urgency" value={formData.urgency} onChange={(e) => setFormData({ ...formData, urgency: e.target.value })} required className="w-full px-3 py-2 border rounded-md bg-background text-sm">
                      <option value="">Select urgency</option>
                      <option value="standard">Standard (24-48 hours)</option>
                      <option value="rush">Same-Day Rush</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Describe the Issue *</label>
                  <Textarea id="message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required placeholder="Please describe the issue..." />
                </div>
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center flex items-center justify-center gap-2" data-testid="text-business-hours-title">
            <Clock className="w-5 h-5 text-muted-foreground" />
            Business Hours
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { day: "Mon – Fri", time: "9 AM – 6 PM WAT" },
              { day: "Saturday", time: "10 AM – 4 PM WAT" },
              { day: "Sunday", time: "Closed" },
              { day: "WhatsApp", time: "24/7" },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-lg border bg-card">
                <p className="text-sm font-medium mb-1">{item.day}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

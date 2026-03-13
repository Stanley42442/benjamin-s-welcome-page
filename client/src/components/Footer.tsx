import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-lg font-bold tracking-tight">OptiSolve</span>
              <span className="text-sm font-medium text-muted-foreground">Labs</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional website optimization and mobile frontend solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              {[
                { href: "/whatsapp-button", label: "WhatsApp Fix" },
                { href: "/menu-fix", label: "Menu Fix" },
                { href: "/form-fix", label: "Form Fix" },
                { href: "/visual-overhaul", label: "Visual Overhaul" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/services", label: "All Services" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:optisolvelabs@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  optisolvelabs@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2347026099884" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +234 702 609 9884
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} OptiSolve Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

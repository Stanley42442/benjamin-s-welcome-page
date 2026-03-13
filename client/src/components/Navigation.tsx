import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services", hasSubmenu: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/whatsapp-button", label: "WhatsApp Fix" },
    { href: "/menu-fix", label: "Menu Fix" },
    { href: "/form-fix", label: "Form Fix" },
    { href: "/visual-overhaul", label: "Visual Overhaul" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-foreground tracking-tight">OptiSolve</span>
            <span className="text-sm font-medium text-muted-foreground">Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link href={link.href}>
                  <button
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                      isActive(link.href)
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {link.hasSubmenu && <ChevronDown className="w-3 h-3" />}
                  </button>
                </Link>
                {link.hasSubmenu && (
                  <div className="absolute left-0 mt-1 w-44 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 py-1 z-10">
                    {serviceLinks.map((service) => (
                      <Link key={service.href} href={service.href}>
                        <button
                          className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                            isActive(service.href) ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {service.label}
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-1">
            <Button size="icon" variant="ghost" onClick={toggleTheme} className="w-8 h-8" title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <button onClick={toggleTheme} className="p-2 rounded-md text-muted-foreground hover:text-foreground" aria-label="Toggle theme">
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md text-muted-foreground hover:text-foreground" aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-3 space-y-1">
            {mainNavLinks.map((link) => (
              <div key={link.href}>
                {link.hasSubmenu ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        {serviceLinks.map((service) => (
                          <Link key={service.href} href={service.href}>
                            <button
                              className={`w-full text-left px-3 py-2 text-sm rounded-md ${
                                isActive(service.href) ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
                              }`}
                              onClick={() => { setMobileMenuOpen(false); setServicesOpen(false); }}
                            >
                              {service.label}
                            </button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href}>
                    <button
                      className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                        isActive(link.href) ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

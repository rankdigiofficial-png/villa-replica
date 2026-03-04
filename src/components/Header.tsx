import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  { label: "Residential Painting", slug: "residential-painting" },
  { label: "Commercial Painting", slug: "commercial-painting" },
  { label: "Interior Painting", slug: "interior-painting" },
  { label: "Exterior Painting", slug: "exterior-painting" },
  { label: "Wallpapering", slug: "wallpapering" },
  { label: "Restoration Painting", slug: "restoration-painting" },
  { label: "Cabinet Painting", slug: "cabinet-painting" },
  { label: "Drywall Texturing", slug: "drywall-texturing" },
  { label: "Door Painting", slug: "door-painting" },
  { label: "Floor Painting", slug: "floor-painting" },
  { label: "Texture Painting", slug: "texture-painting" },
  { label: "Epoxy Flooring", slug: "epoxy-flooring" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollLink = (id: string) => {
    if (isHome) return `#${id}`;
    return `/#${id}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">V</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-lg text-foreground">Villa Painting</span>
            <span className="block text-xs text-muted-foreground tracking-wider uppercase">Service</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href={scrollLink("home")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href={scrollLink("about")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              Our Services
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card rounded-xl shadow-xl border border-border py-2 w-56">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href={scrollLink("projects")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href={scrollLink("blog")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Blog</a>
          <a href={scrollLink("contact")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+971542386986">
            <Button variant="default" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-6 max-h-[80vh] overflow-y-auto">
          <a href={scrollLink("home")} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>Home</a>
          <a href={scrollLink("about")} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>About</a>

          <button
            className="flex items-center justify-between w-full py-3 text-sm font-medium text-muted-foreground hover:text-primary"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Our Services
            <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="pl-4 border-l-2 border-primary/20 mb-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <a href={scrollLink("projects")} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href={scrollLink("blog")} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>Blog</a>
          <a href={scrollLink("contact")} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>Contact</a>

          <a href="tel:+971542386986">
            <Button variant="default" size="sm" className="w-full mt-3 gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

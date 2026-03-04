import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">V</span>
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-lg">Villa Painting</span>
                <span className="block text-xs opacity-70 tracking-wider uppercase">Service</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Our villa painting service provides high-quality interior and exterior painting with professional finishing. We use premium paints and expert techniques to enhance your villa's beauty.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-70">
              {["Home", "About", "Services", "Projects", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 opacity-70">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+971542386986" className="hover:text-primary transition-colors">0542386986</a>
              </li>
              <li className="flex items-center gap-3 opacity-70">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>info@villapaintingservice.com</span>
              </li>
              <li className="flex items-start gap-3 opacity-70">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Villa-60 Street-2, Al Satwa, Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          Copyright 2025 © All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutVilla from "@/assets/about-villa.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={aboutVilla} alt="Beautiful villa painting result" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="section-subtitle mb-3">About Us</p>
            <h2 className="section-title mb-6">
              We Are The Best Painting Service Company In Dubai
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Villa Painting Service, we turn walls into masterpieces. From compact studio apartments and 1BR units to luxury villas and large commercial properties in Dubai, our skilled painters ensure precision, premium materials, and stunning results.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Your Premier Painting Partner",
                "Brushing Beauty Into Every Corner",
                "Color Your World with Confidence",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#services">
              <Button variant="default" size="lg" className="rounded-full px-8">
                About Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

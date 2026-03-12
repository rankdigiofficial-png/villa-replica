import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroPainter from "@/assets/hero-painter.png";

const HeroSection = () => {
  return (
    <section id="home" className="bg-hero pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-up">
            <p className="section-subtitle mb-4">Professional Painting Services In Dubai</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Making Your Home{" "}
              <span className="text-gradient">Beautiful,</span>
              <br />
              Inside & Out
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Our professional painting services in Dubai help transform studios, apartments, villas, and commercial properties with fresh color and expert finishing. With careful preparation and high-quality paints, we create clean, long-lasting results that brighten any space.
            </p>
            <a href="https://wa.me/971527833727?text=Hello%2C%20I%20am%20interested%20in%20your%20services">
              <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src={heroPainter}
                alt="Professional painter ready for service"
                className="relative z-10 w-full max-w-md"
              />
              {/* Stats badge top */}
              <div className="absolute top-8 left-0 z-20 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg animate-count-up">
                <span className="text-3xl font-bold font-heading">200+</span>
                <p className="text-sm opacity-90">Projects Done</p>
              </div>
              {/* Stats badge bottom */}
              <div className="absolute bottom-12 right-0 z-20 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg animate-count-up" style={{ animationDelay: "0.3s" }}>
                <span className="text-3xl font-bold font-heading">15+</span>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

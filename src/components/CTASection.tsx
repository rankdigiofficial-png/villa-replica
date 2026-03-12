import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-image.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-hero">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">
              Get Expert Guidance for Your Perfect Color Choice
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Finding the ideal colors for your home doesn’t have to be difficult. With our expert consultation, you can explore a variety of shades and finishes while receiving personalized advice to achieve the perfect look.
            </p>
            <a href="https://wa.link/tggscc">
              <Button size="lg" className="rounded-full px-10 py-6 text-base shadow-lg">
                Contact Us
              </Button>
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={ctaImage} alt="Color consultation" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

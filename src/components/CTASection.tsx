import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-image.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-hero">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">
              Consult Your Color Selection With Us
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              We understand the importance of selecting the perfect colors for your home. Consult with us to explore a wide range of options, ensuring your vision is realized with expert guidance and personalized recommendations.
            </p>
            <a href="https://wa.me/971542386986?text=Hello%2C%20I%20am%20interested%20in%20your%20services">
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

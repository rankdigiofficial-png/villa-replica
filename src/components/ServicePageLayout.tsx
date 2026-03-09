import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServicePageData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  details: string[];
  image: string;
}

const ServicePageLayout = ({ data }: { data: ServicePageData }) => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="bg-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container mx-auto text-center">
          <p className="section-subtitle mb-3">{data.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 max-w-3xl mx-auto">
            {data.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            {data.description}
          </p>
          <a href="https://wa.me/971527833727?text=Hello%2C%20I%20am%20interested%20in%20your%20services">
            <Button size="lg" className="rounded-full px-10 py-6 text-base shadow-lg gap-2">
              <Phone className="w-5 h-5" />
              Get a Free Quote
            </Button>
          </a>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="section-title mb-6">Why Choose Our {data.title}?</h2>
              <ul className="space-y-4 mb-8">
                {data.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">What We Offer</p>
            <h2 className="section-title">Our {data.title} Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.details.map((detail, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-7 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold font-heading">{idx + 1}</span>
                </div>
                <p className="text-foreground font-medium">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-4">
            Start Your Space Transformation Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Speak with our team today for a free quote and helpful advice, and let’s create the perfect look for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/971527833727?text=Hello%2C%20I%20am%20interested%20in%20your%20services">
              <Button size="lg" variant="secondary" className="rounded-full px-10 py-6 text-base gap-2">
                <Phone className="w-5 h-5" />
                Contact Us Now
              </Button>
            </a>
            <Link to="/">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServicePageLayout;

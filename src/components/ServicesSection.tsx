import { Home, Building2, Paintbrush, History, PaintBucket, DoorOpen, Layers, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    slug: "residential-painting",
    description: "Experience excellence in beautifying your residential project with precision, quality, and attention to detail.",
  },
  {
    icon: Paintbrush,
    title: "Wallpapering",
    slug: "wallpapering",
    description: "Expert wallpapering services, enhancing your space with style and precision. Transform your walls effortlessly.",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    slug: "commercial-painting",
    description: "Professional painting solutions for commercial projects, ensuring impeccable results for your business space.",
  },
  {
    icon: History,
    title: "Restoration Painting",
    slug: "restoration-painting",
    description: "Expert painting for restoration projects, revitalizing spaces with precision, care, and excellence.",
  },
  {
    icon: PaintBucket,
    title: "Interior Painting",
    slug: "interior-painting",
    description: "Transform your interiors with premium paints and expert techniques for a beautiful, inviting space.",
  },
  {
    icon: Layers,
    title: "Exterior Painting",
    slug: "exterior-painting",
    description: "Protect and beautify your villa's exterior with weather-resistant coatings suited for Dubai's climate.",
  },
  {
    icon: DoorOpen,
    title: "Door Painting",
    slug: "door-painting",
    description: "Refresh and protect your doors with professional painting, staining, and refinishing services.",
  },
  {
    icon: Droplets,
    title: "Epoxy Flooring",
    slug: "epoxy-flooring",
    description: "High-performance, seamless epoxy flooring for garages, showrooms, and commercial spaces.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-hero">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">Our Services</p>
          <h2 className="section-title mb-4">
            Affordable Villa Painting Service in Dubai
          </h2>
          <p className="text-muted-foreground">
            Transform your villa with our affordable painting services. From meticulous preparation to flawless execution, our team ensures quality results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="bg-card rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group block"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              <span className="inline-block mt-4 text-primary font-semibold text-sm group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

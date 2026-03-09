import { Home, Building2, Paintbrush, History, PaintBucket, DoorOpen, Layers, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    slug: "residential-painting",
    description: "Upgrade your home’s appearance with reliable painting services focused on accuracy, quality, and lasting results.",
  },
  {
    icon: Paintbrush,
    title: "Wallpapering",
    slug: "wallpapering",
    description: "Upgrade your interiors with expert wallpaper services designed to bring style, texture, and a perfect finish to your walls.",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    slug: "commercial-painting",
    description: "Expert painting services for commercial spaces, delivering clean finishes and reliable results that enhance your business environment.",
  },
  {
    icon: History,
    title: "Restoration Painting",
    slug: "restoration-painting",
    description: "We handle restoration painting with skill and dedication, helping restore the beauty and character of every space.",
  },
  {
    icon: PaintBucket,
    title: "Interior Painting",
    slug: "interior-painting",
    description: "Bring new life to your interiors with professional painting and premium finishes that add warmth and beauty to every room.",
  },
  {
    icon: Layers,
    title: "Exterior Painting",
    slug: "exterior-painting",
    description: "Keep your exterior surfaces protected and looking great with high-quality coatings built to handle Dubai’s harsh weather.",
  },
  {
    icon: DoorOpen,
    title: "Door Painting",
    slug: "door-painting",
    description: "Restore the look of your doors with expert painting, staining, and refinishing for a clean and durable finish.",
  },
  {
    icon: Droplets,
    title: "Epoxy Flooring",
    slug: "epoxy-flooring",
    description: "Reliable epoxy flooring systems that provide a sleek, durable surface for garages, showrooms, and business spaces.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-hero">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">Our Services</p>
          <h2 className="section-title mb-4">
            Affordable Painting Service in Dubai
          </h2>
          <p className="text-muted-foreground">
           Transform your space with our affordable painting services. From detailed surface preparation to a flawless finish, our team delivers high-quality results every time.
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

import { Home, Building2, Paintbrush, History } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Project",
    description: "Experience the excellence of our service in beautifying your residential project with precision, quality, and attention to detail.",
  },
  {
    icon: Paintbrush,
    title: "Wallpapering",
    description: "Expert wallpapering services, enhancing your space with style and precision. Transform your walls effortlessly with our professional touch.",
  },
  {
    icon: Building2,
    title: "Commercial Project",
    description: "Professional painting solutions for commercial projects, ensuring impeccable results that enhance the aesthetics of your space.",
  },
  {
    icon: History,
    title: "Restoration Project",
    description: "Expert painting for your restoration project, revitalizing spaces with precision, care, and a commitment to excellence.",
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
            <div
              key={service.title}
              className="bg-card rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

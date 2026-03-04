import { Calendar, Leaf, Palette, Award } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Flexible Schedule Option",
    description: "Tailored villa painting service with flexible scheduling options for your convenience and peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly and Clean",
    description: "Our villa painting service is eco-friendly and ensures a clean finish.",
  },
  {
    icon: Palette,
    title: "Free Colors Consultation",
    description: "Get expert advice with our free colors consultation for villa painting.",
  },
  {
    icon: Award,
    title: "PDCA Certified",
    description: "Our villa painting service is PDCA Certified, ensuring top-notch quality.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">Why Choose Us</p>
          <h2 className="section-title mb-4">
            Always On Time And Never Delay A Project
          </h2>
          <p className="text-muted-foreground">
            Choose our villa painting service for careful work, experienced painters, top-quality materials, on-time completion, fair prices, and a promise to go beyond your expectations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-hero hover:bg-primary group transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-foreground/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2 text-foreground group-hover:text-primary-foreground transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary-foreground/80 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

import { Calendar, Leaf, Palette, Award } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Flexible Schedule Option",
    description: "Personalized painting services with flexible scheduling designed to fit your timeline and make the process hassle-free..",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description: "We provide environmentally friendly painting services that leave your space looking neat and refreshed.",
  },
  {
    icon: Palette,
    title: "Free Colors Consultation",
    description: "Get personalized color advice from our experts with our free painting consultation service.",
  },
  {
    icon: Award,
    title: "PDCA Approved",
    description: "Our painters work under PDCA-approved guidelines, providing dependable service and high-quality finishes.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">Why Choose Us</p>
          <h2 className="section-title mb-4">
            We respect your time by completing every project on schedule.
          </h2>
          <p className="text-muted-foreground">
            Trust our painting experts for precise work, durable materials, honest pricing, and a smooth process from start to finish.
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

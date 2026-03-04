import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  { src: project1, label: "Interior Painting" },
  { src: project2, label: "Exterior Villa Painting" },
  { src: project3, label: "Modern Living Room" },
  { src: project4, label: "Commercial Space" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-hero">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">Latest Projects</p>
          <h2 className="section-title mb-4">
            Awesome Projects That Could Inspire You
          </h2>
          <p className="text-muted-foreground">
            Our villa painting services transform your space into an awe-inspiring masterpiece, igniting inspiration with vibrant colors and meticulous craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer aspect-square"
            >
              <img
                src={project.src}
                alt={project.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-primary-foreground font-heading font-bold text-lg">{project.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

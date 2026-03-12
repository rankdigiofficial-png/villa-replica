import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";
const posts = [
  {
    img: blog1,
    title: "Best Painting Company Dubai – Transform Your Space",
    date: "January 28, 2026",
    excerpt: "Dubai is known for its luxury lifestyle, modern architecture, and high living standards. Whether it's a villa or apartment...",
  },
  {
    img: blog2,
    title: "Best Texture Paint Finishes for Dubai Living Rooms",
    date: "May 6, 2025",
    excerpt: "When it comes to enhancing the appeal of your living room, the walls play a major role in setting the right ambiance...",
  },
  {
    img: blog3,
    title: "How Often Should You Repaint Your Home in UAE Climate?",
    date: "January 24, 2026",
    excerpt: "Living in the UAE comes with many perks, but the hot desert climate can take a toll on your home's paintwork...",
  },
];
const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">Our Blog</p>
          <h2 className="section-title mb-4">
            Stories of Our Success
          </h2>
          <p className="text-muted-foreground">
            The key to our success lies in our focus on quality work, attention to detail, and honest communication with every client.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <h3 className="font-heading font-bold text-lg mt-2 mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                <span className="inline-block mt-4 text-primary font-semibold text-sm hover:underline">
                  Learn more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;

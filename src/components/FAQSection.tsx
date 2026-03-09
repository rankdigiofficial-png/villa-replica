import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What type of paint do you use for painting in Dubai?",
    answer: "We use premium, climate-resistant paints designed for Dubai’s heat and humidity. Our painters prefer trusted brands such as Jotun, Dulux, and National Paints to ensure a durable, smooth, and long-lasting finish.",
  },
  {
    question: "How is the price for painting services determined?",
    answer: "Painting costs are calculated based on the size of the property, the current condition of the walls, the type of paint selected, and the amount of preparation or coats required. Additional services like wall repairs or special finishes may also influence the final price.",
  },
  {
    question: "What preparation is required before starting a painting project?",
    answer: "Before the painting starts, the walls are properly prepared by cleaning the surface, fixing cracks or holes, and smoothing uneven areas. Protective covers are also placed over furniture and floors, and primer is applied if necessary to ensure a neat and long-lasting result.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <p className="section-subtitle mb-3">FAQs</p>
          <h2 className="section-title">The Most Common Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-card rounded-xl border border-border px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

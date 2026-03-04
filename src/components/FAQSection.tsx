import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What type of paint do you use for villa painting in Dubai?",
    answer: "We use high-quality, weather-resistant paints suitable for Dubai's climate, ensuring long-lasting durability and vibrant colors that withstand harsh conditions.",
  },
  {
    question: "How is the price for villa painting services determined?",
    answer: "The price is typically determined based on factors such as the size of the villa, the complexity of the project, the quality of paint chosen, and any additional services required.",
  },
  {
    question: "What preparation is required before starting a villa painting project?",
    answer: "Prior to painting, it's essential to prepare the surfaces by cleaning them thoroughly, repairing any damages, sanding rough areas, and applying primer as needed.",
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

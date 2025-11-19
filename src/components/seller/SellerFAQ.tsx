import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SellerFAQ = () => {
  const faqs = [
    {
      question: "How do you determine the best listing price?",
      answer:
        "We conduct a comprehensive market analysis examining comparable sales, current listings, and market trends. Our strategic pricing approach generates competition among buyers while ensuring you maximize your property's value. We'll present all data and work with you to find the optimal price point.",
    },
    {
      question: "What makes your marketing different?",
      answer:
        "We provide professional staging consultation, HD photography, custom property websites, targeted social media campaigns, and extensive agent networking. Every property receives a tailored marketing plan designed to reach qualified buyers and generate maximum interest.",
    },
    {
      question: "How long will it take to sell my home?",
      answer:
        "Our average is 6-8 days on market, significantly faster than the market average. Timeline depends on pricing strategy, property condition, and current market conditions. We'll provide a realistic timeline based on your specific situation and goals.",
    },
    {
      question: "What if my home needs repairs or staging?",
      answer:
        "We handle everything. Our team includes professional stagers, photographers, and contractors who can help prepare your home. We'll provide honest recommendations on which improvements offer the best return on investment and coordinate all services on your behalf.",
    },
    {
      question: "How do you handle multiple offers?",
      answer:
        "We maintain transparent communication with all parties, strategically time offer reviews to maximize competition, and leverage our Harvard-trained negotiation skills to secure the best terms. We've generated up to 23 offers on a single property through strategic marketing and positioning.",
    },
    {
      question: "What are your fees and what do they include?",
      answer:
        "We follow standard commission structure, but what sets us apart is everything included: professional staging consultation, HD photography and videography, custom marketing materials, dedicated client support, and our proven negotiation expertise. Let's discuss your specific needs and we'll provide transparent pricing.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about selling with us
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

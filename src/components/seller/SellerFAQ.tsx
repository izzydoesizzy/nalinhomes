import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SellerFAQ = () => {
  const faqs = [
    {
      question: "How does your commission work?",
      answer:
        "My commission is structured as a percentage of your final sale price, paid only when your home sells. This means I'm motivated to get you the highest possible price. I'll walk you through the exact breakdown during our initial consultation, so everything is transparent from day one.",
    },
    {
      question: "What's included in your service?",
      answer:
        "Everything needed to sell your home at top dollar: professional staging, photography, videography, floor plans, premium marketing across multiple platforms, open houses, offer negotiation, and transaction management. I cover the upfront costs for staging and photography because doing it right benefits us both.",
    },
    {
      question: "Are there any hidden fees or surprise costs?",
      answer:
        "None. I'm upfront about all costs from the start. You won't pay anything out of pocket for staging, photography, or marketing. The only costs you'll see are standard closing costs (like legal fees), which I'll explain clearly before we begin.",
    },
    {
      question: "Who pays for staging, cleaning, and photography?",
      answer:
        "I do. I cover all upfront costs: staging, cleaning, professional photos. My philosophy is simple: doing it right benefits us both. And I never take kickbacks from vendors. I choose them because they're the best, period.",
    },
    {
      question: "How long does it take to sell my home?",
      answer:
        "Preparation typically takes 2-3 weeks to get everything staged and photographed to perfection. I've turned homes around in 14 days when needed. Once we hit the market, many of my listings attract offers within 7-10 days, though timing varies by market conditions.",
    },
    {
      question: "My home needs work. Do I have to fix everything before selling?",
      answer:
        "Not on your own! I'll coordinate trusted professionals to handle it. Often, a fresh coat of paint and decluttering work wonders. You don't need to manage a thing. And if there are major issues we decide not to fix, I'll strategize how to price and position your home accordingly.",
    },
    {
      question: "How do you handle multiple offers?",
      answer:
        "I personally call every agent for feedback and track who the serious contenders are. I've navigated up to 23 offers on a single property, leveraging competition to maximize your sale price while keeping you informed every step of the way.",
    },
    {
      question: "Will I have to pay commission if the sale falls through?",
      answer:
        "No. Commission is only paid at closing when the sale successfully completes. If a deal falls through for any reason, you don't owe anything. My job is to get you to a successful closing.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about selling with me
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much do I need for a down payment?",
    answer: "In Canada, the minimum down payment depends on the purchase price. For homes under $500,000, you need at least 5%. For homes between $500,000-$1M, it's 5% on the first $500K and 10% on the remainder. I'll help you understand all your options and find programs that might help with your down payment."
  },
  {
    question: "What are the total costs of buying a home?",
    answer: "Beyond the down payment, you'll need to budget for closing costs (typically 1.5-4% of the purchase price), which include legal fees, land transfer taxes, home inspection, and more. I provide a detailed breakdown early in the process so there are no surprises."
  },
  {
    question: "How long does the home buying process take?",
    answer: "On average, from starting your search to closing day, the process takes 2-4 months. However, this can vary based on market conditions and your specific situation. I work efficiently to make sure we don't miss opportunities while ensuring you never feel rushed."
  },
  {
    question: "Do I need to get pre-approved for a mortgage first?",
    answer: "Yes, getting pre-approved is one of the first steps I recommend. It shows sellers you're a serious buyer, helps you understand your budget, and can give you an advantage in competitive situations. I can connect you with trusted mortgage professionals."
  },
  {
    question: "What if I'm competing with other buyers?",
    answer: "Toronto's market can be competitive, but with the right strategy, you can succeed. I'll help you craft strong offers, advise on conditions, and leverage my network and market knowledge to give you the best chance of success."
  },
  {
    question: "Will you be available to answer my questions?",
    answer: "Absolutely. I pride myself on being accessible to my clients. Whether it's a quick text, a phone call, or an in-person meeting, I'm here to support you throughout the entire journey and even after you've moved in."
  },
  {
    question: "Are there incentives for first-time home buyers in Ontario?",
    answer: "Yes, there are several programs that can reduce your upfront costs, such as the First-Time Home Buyer Incentive, RRSP Home Buyers' Plan, and land transfer tax rebates. I'll walk you through what you may qualify for and coordinate with your mortgage and legal team so you can take full advantage of them."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about buying your first home
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

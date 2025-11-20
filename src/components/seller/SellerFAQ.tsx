import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SellerFAQ = () => {
  const faqs = [
    {
      question: "Who pays for staging, cleaning, and photography?",
      answer:
        "I do. I cover all upfront costs—staging, cleaning, professional photos—because I believe in investing in your success. My philosophy is simple: doing it right benefits us both. (And I never take kickbacks from vendors—I choose them because they're the best, period.)",
    },
    {
      question: "How long does it take to sell my home?",
      answer:
        "Preparation can be as quick as 2 weeks if we're in a rush—I've turned homes around in 14 days when needed. Typically, plan on 2-3 weeks to get everything prepared and photographed to perfection. Once we hit the market, many of my listings attract offers within 7-10 days.",
    },
    {
      question: "My home needs a lot of work... do I have to do all that before selling?",
      answer:
        "Not on your own! I'll coordinate trusted professionals to handle it. Often, a fresh coat of paint and decluttering work wonders. You don't need to manage a thing—I handle the heavy lifting. And if there are major issues we decide not to fix, I'll strategize how to price and position your home accordingly.",
    },
    {
      question: "Do you take kickbacks from your team members?",
      answer:
        "Never. I have a fiduciary duty to put your interests first. I choose my photographer, stager, and other professionals because they're the absolute best at what they do—not because they pay me. This is about getting you the best result, period.",
    },
    {
      question: "How do you handle multiple offers?",
      answer:
        "I personally call every agent for feedback and track who the serious contenders are. My approach is calm on the surface, paddling like crazy underneath. I've navigated up to 23 offers on a single property, leveraging competition to maximize your sale price while keeping you informed every step of the way.",
    },
    {
      question: "What if my home is already in great shape?",
      answer:
        "If your home is already picture-perfect, that's fantastic—we'll save time and you'll reap the rewards. I never push unnecessary changes. We'll still do high-quality photos and marketing, of course, but we won't fix what isn't broken. I'm not here to spend money just for the sake of it—I'm here to add value.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,118,110,0.12),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full lg:max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-teal-700 dark:from-blue-400 dark:via-blue-500 dark:to-teal-400 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about selling with me
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

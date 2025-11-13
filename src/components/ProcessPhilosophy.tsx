import { Quote } from "lucide-react";

export const ProcessPhilosophy = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* My Process & Philosophy */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">My Process & Philosophy</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I believe in education over pressure. Every client deserves to understand exactly what they're getting into, from the first showing to closing day. I break down complex real estate jargon into plain English, answer every question (no matter how small), and ensure you feel confident in every decision.
            </p>
            
            {/* Testimonial Quote */}
            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 my-8">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-lg text-foreground italic mb-3">
                "Nalin made our first home purchase incredibly smooth. He explained everything in detail and never made us feel rushed."
              </p>
              <p className="text-sm font-semibold text-muted-foreground">— Sarah & Michael Chen</p>
            </div>
          </div>

          {/* What Clients Enjoy Most */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">What Clients Enjoy Most</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl font-bold">•</span>
                <div>
                  <span className="text-lg"><strong className="text-foreground">No Pressure Approach:</strong> <span className="text-muted-foreground">You'll never feel rushed or pushed into a decision that doesn't feel right.</span></span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl font-bold">•</span>
                <div>
                  <span className="text-lg"><strong className="text-foreground">Always Available:</strong> <span className="text-muted-foreground">Quick responses, clear communication, and genuine support throughout the journey.</span></span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl font-bold">•</span>
                <div>
                  <span className="text-lg"><strong className="text-foreground">Strategic Negotiation:</strong> <span className="text-muted-foreground">I fight for your best interests and ensure you get the best possible deal.</span></span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl font-bold">•</span>
                <div>
                  <span className="text-lg"><strong className="text-foreground">Long-term Partnership:</strong> <span className="text-muted-foreground">Many of my clients become lifelong friends who continue to reach out for advice.</span></span>
                </div>
              </li>
            </ul>

            {/* Testimonial Quote */}
            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 mt-8">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-lg text-foreground italic mb-3">
                "Professional, knowledgeable, and genuinely cares about his clients. Nalin went above and beyond to find us the perfect starter home within our budget."
              </p>
              <p className="text-sm font-semibold text-muted-foreground">— James Rodriguez</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

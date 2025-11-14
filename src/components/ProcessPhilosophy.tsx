import { Quote, Search, Home, Eye, Target, Handshake, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ProcessPhilosophy = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "We discuss your goals, budget, timeline, and dream home criteria in detail.",
      icon: Search,
    },
    {
      number: 2,
      title: "Search",
      description: "I curate properties that match your needs and set up automated alerts for new listings.",
      icon: Home,
    },
    {
      number: 3,
      title: "Showings",
      description: "Tour homes at your pace with expert insights on each property's pros and cons.",
      icon: Eye,
    },
    {
      number: 4,
      title: "Offer Strategy",
      description: "Craft a competitive offer based on market analysis and your priorities.",
      icon: Target,
    },
    {
      number: 5,
      title: "Negotiation",
      description: "I advocate for your best interests to secure favorable terms and pricing.",
      icon: Handshake,
    },
    {
      number: 6,
      title: "Closing",
      description: "Navigate inspections, paperwork, and final steps until you get the keys.",
      icon: Key,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary via-secondary/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* The Buying Process Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4 text-center">How I Work: The Buying Process</h3>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              I believe in education over pressure. Every step is explained clearly so you feel confident in every decision.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-accent/20 hover:border-accent/40 relative z-10 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-6 h-6 text-accent" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-accent">Step {step.number}</span>
                          </div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="relative overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 border-l-4 border-accent rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            <Quote className="w-10 h-10 text-accent mb-4 relative z-10" />
            <p className="text-lg text-foreground italic mb-3 relative z-10">
              "It really felt like his goal was to make sure we bought a home we loved and would be happy in, and he took the anxiety out of home buying."
            </p>
            <p className="text-sm font-semibold text-muted-foreground relative z-10">— Krisha Malik, Toronto</p>
          </div>
        </div>
      </div>
    </section>
  );
};

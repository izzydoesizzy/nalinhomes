import { Quote, Search, Home, Eye, Target, Handshake, Key, Shield, Clock, TrendingUp, Heart } from "lucide-react";
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

  const clientBenefits = [
    {
      icon: Shield,
      title: "No Pressure Approach",
      description: "You'll never feel rushed or pushed into a decision that doesn't feel right.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Quick responses, clear communication, and genuine support throughout the journey.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Negotiation",
      description: "I fight for your best interests and ensure you get the best possible deal.",
    },
    {
      icon: Heart,
      title: "Long-term Partnership",
      description: "Many of my clients become lifelong friends who continue to reach out for advice.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* The Buying Process Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4 text-center">How I Work: The Buying Process</h3>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              I believe in education over pressure. Every step is explained clearly so you feel confident in every decision.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
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
          <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-lg text-foreground italic mb-3">
              "Nalin made our first home purchase incredibly smooth. He explained everything in detail and never made us feel rushed."
            </p>
            <p className="text-sm font-semibold text-muted-foreground">— Sarah & Michael Chen</p>
          </div>

          {/* What Clients Enjoy Most - Grid */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4 text-center">Why Clients Choose Me</h3>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Working with me means having a dedicated advocate who genuinely cares about your success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {clientBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                        <benefit.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-lg text-foreground italic mb-3">
              "Professional, knowledgeable, and genuinely cares about his clients. Nalin went above and beyond to find us the perfect starter home within our budget."
            </p>
            <p className="text-sm font-semibold text-muted-foreground">— James Rodriguez</p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState, useEffect } from "react";
import { Quote, Shield, Clock, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseMe = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  
  const avatars = [
    "First-time home-buyers in Toronto",
    "Young families growing in the GTA"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatar((prev) => (prev + 1) % avatars.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Rotating Avatar Callout */}
          <div className="flex justify-center">
            <div className="inline-block">
              <div className="px-6 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <p className="text-sm font-medium text-accent animate-fade-in" key={currentAvatar}>
                  {avatars[currentAvatar]}
                </p>
              </div>
            </div>
          </div>

          {/* Why Clients Choose Me */}
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
              "Working with Nalin was a game-changer for us. His patience and expertise helped us navigate a competitive market and land our dream home."
            </p>
            <p className="text-sm font-semibold text-muted-foreground">— Emily & David Park</p>
          </div>
        </div>
      </div>
    </section>
  );
};

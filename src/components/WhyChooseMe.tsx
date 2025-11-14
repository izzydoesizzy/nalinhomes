import { useState, useEffect } from "react";
import { Quote, Shield, Clock, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseMe = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const avatars = [
    "First-time home-buyers in Toronto",
    "Young families growing in the GTA"
  ];

  const testimonials = [
    {
      text: "Nalin is the polar opposite of the stereotypical real estate agent: he's caring and considerate, responsive, collaborative, and is motivated by human connections, not commissions.",
      author: "Elijah Di Gangi, Toronto"
    },
    {
      text: "He provided the perfect balance of guidance and education, coupled with care and consideration.",
      author: "Chi Nguyen, Toronto"
    },
    {
      text: "The whole process felt seamless, smart, and oddly stress-free.",
      author: "Harry Gill, Toronto"
    }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.15),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Rotating Avatar Callout */}
          <div className="flex justify-center">
            <div className="inline-block">
              <div className="px-6 py-2 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 border border-accent/30 rounded-full shadow-lg backdrop-blur-sm">
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
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-accent/20 hover:border-accent/40 bg-card/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

          {/* Rotating Testimonial Quote */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border-l-4 border-accent rounded-lg p-8 max-w-3xl mx-auto shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <Quote className="w-10 h-10 text-accent mb-4 relative z-10" />
            <div className="relative z-10" key={currentTestimonial}>
              <p className="text-lg text-foreground italic mb-3 animate-fade-in">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-sm font-semibold text-muted-foreground animate-fade-in">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

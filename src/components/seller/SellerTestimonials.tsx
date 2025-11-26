import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const SellerTestimonials = () => {
  const testimonials = [
    {
      name: "Michael T.",
      location: "Toronto",
      quote:
        "I can't recommend Nalin more highly. Throughout the selling and buying process, he is kind, empathetic, patient, responsive, and diligent. When we had a family emergency, he went above and beyond to help sell my condo.",
      rating: 5,
      type: "seller"
    },
    {
      name: "Jennifer S.",
      location: "Toronto",
      quote:
        "Nalin is head-and-shoulders above the rest! I was endlessly impressed by his level of professionalism, his commitment, his diligence, and his attention to detail. You could not ask for a better agent to serve you.",
      rating: 5,
      type: "seller"
    },
    {
      name: "Kirk E.",
      location: "Toronto",
      quote:
        "Professional, highly knowledgeable and an expert negotiator, while offering world-class service. He takes care of each client like they are family and truly has their best interests at heart.",
      rating: 5,
      type: "seller"
    },
    {
      name: "Mike I.",
      location: "Toronto",
      quote:
        "If you're fortunate enough to work with Nalin, you'll be impressed by his professionalism and thoughtfulness. His insights into the market and his non-pressured approach make him a pleasure to work with.",
      rating: 5,
      type: "character"
    },
    {
      name: "Elijah D.",
      location: "Toronto",
      quote:
        "He's caring and considerate, responsive, collaborative, and is motivated by human connections, not commissions. His market knowledge and calming vibe helped make a stressful situation more manageable.",
      rating: 5,
      type: "character"
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from clients and colleagues who know me best
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

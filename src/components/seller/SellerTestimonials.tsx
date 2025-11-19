import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const SellerTestimonials = () => {
  const testimonials = [
    {
      name: "Stephanie & Jeff Clayton",
      property: "Downtown Toronto",
      quote:
        "Nalin's negotiation skills are exceptional. He got us multiple offers and helped us navigate a complex selling situation with confidence. His professionalism and attention to detail made all the difference.",
      rating: 5,
    },
    {
      name: "Jennifer Savage",
      property: "Property Investor",
      quote:
        "As an investor, I've worked with many agents. Nalin's strategic approach to pricing and marketing consistently delivers results. He understands the market deeply and knows how to maximize value.",
      rating: 5,
    },
    {
      name: "Neil Datt & Anusha Karunakaran",
      property: "West End Toronto",
      quote:
        "We were impressed by Nalin's consultative approach. He took time to understand our situation and goals before recommending a strategy. The result exceeded our expectations—sold over asking with multiple offers.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              What Sellers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from clients we've helped sell their properties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.property}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

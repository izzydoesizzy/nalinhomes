import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    location: "North York, Toronto",
    text: "Nalin made our first home purchase incredibly smooth. He explained everything in detail and never made us feel rushed. We closed on our dream condo in just 6 weeks!",
    rating: 5
  },
  {
    name: "Priya Patel",
    location: "Scarborough, Toronto",
    text: "I was so nervous about buying my first home, but Nalin's patience and expertise put me at ease. He negotiated an amazing deal and saved me thousands. Highly recommend!",
    rating: 5
  },
  {
    name: "James Rodriguez",
    location: "Downtown Toronto",
    text: "Professional, knowledgeable, and genuinely cares about his clients. Nalin went above and beyond to find us the perfect starter home within our budget. We couldn't be happier!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What My Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real first-time homebuyers I've helped
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

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
    },
    {
      name: "Jennifer S.",
      location: "Toronto",
      quote:
        "Nalin is head-and-shoulders above the rest! I was endlessly impressed by his level of professionalism, his commitment, his diligence, and his attention to detail. You could not ask for a better agent to serve you.",
      rating: 5,
    },
    {
      name: "Kirk E.",
      location: "Toronto",
      quote:
        "Professional, highly knowledgeable and an expert negotiator, while offering world-class service. He takes care of each client like they are family and truly has their best interests at heart.",
      rating: 5,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,118,110,0.12),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-teal-700 dark:from-blue-400 dark:via-blue-500 dark:to-teal-400 bg-clip-text text-transparent mb-4">
              What Sellers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from clients I've helped sell their properties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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

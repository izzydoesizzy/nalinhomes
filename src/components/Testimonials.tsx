import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Dream Condo in 6 Weeks",
    name: "Sarah & Michael Chen",
    location: "North York, Toronto",
    text: "Nalin made our first home purchase incredibly smooth. He explained everything in detail and never made us feel rushed. We closed on our dream condo in just 6 weeks!",
    rating: 5,
    categories: ["First-Time Buyers", "Fast Closing"]
  },
  {
    title: "Saved Thousands on Negotiation",
    name: "Priya Patel",
    location: "Scarborough, Toronto",
    text: "I was so nervous about buying my first home, but Nalin's patience and expertise put me at ease. He negotiated an amazing deal and saved me thousands. Highly recommend!",
    rating: 5,
    categories: ["First-Time Buyers", "Budget-Friendly"]
  },
  {
    title: "Perfect Starter Home on Budget",
    name: "James Rodriguez",
    location: "Downtown Toronto",
    text: "Professional, knowledgeable, and genuinely cares about his clients. Nalin went above and beyond to find us the perfect starter home within our budget. We couldn't be happier!",
    rating: 5,
    categories: ["First-Time Buyers", "Budget-Friendly"]
  },
  {
    title: "Won in a Competitive Market",
    name: "Emily & David Park",
    location: "Mississauga, GTA",
    text: "Working with Nalin was a game-changer for us. His patience and expertise helped us navigate a competitive market and land our dream home. He knew exactly when to make our move!",
    rating: 5,
    categories: ["Competitive Market", "Family Homes"]
  },
  {
    title: "Growing Family Found Perfect Space",
    name: "Jennifer & Mark Thompson",
    location: "Markham, GTA",
    text: "With a baby on the way, we needed to find the right home quickly. Nalin understood our needs and found us a spacious townhouse in a great neighborhood for our growing family.",
    rating: 5,
    categories: ["Family Homes", "Fast Closing"]
  },
  {
    title: "First-Time Buyer Success Story",
    name: "Ahmad Hassan",
    location: "Etobicoke, Toronto",
    text: "As a first-time buyer, I had so many questions. Nalin was incredibly patient and educational, walking me through every step. I now own a beautiful condo that I'm proud to call home!",
    rating: 5,
    categories: ["First-Time Buyers"]
  },
  {
    title: "Beat 5 Other Offers",
    name: "Lisa & Tom Anderson",
    location: "Richmond Hill, GTA",
    text: "In this crazy market, we thought we'd never win a bidding war. Nalin's strategic approach helped us beat 5 other offers and get the house at a fair price. He's a true professional!",
    rating: 5,
    categories: ["Competitive Market", "Family Homes"]
  },
  {
    title: "Found Hidden Gem Under Budget",
    name: "Robert Kim",
    location: "Vaughan, GTA",
    text: "Nalin's deep knowledge of the GTA helped me find a hidden gem that other buyers overlooked. I got an incredible home for under my budget. His insight is invaluable!",
    rating: 5,
    categories: ["Budget-Friendly", "Competitive Market"]
  },
  {
    title: "Smooth Investment Property Purchase",
    name: "Maria Santos",
    location: "Brampton, GTA",
    text: "Looking to buy my first investment property, I needed someone who understood both the market and the numbers. Nalin delivered on both fronts and made the process seamless.",
    rating: 5,
    categories: ["Budget-Friendly"]
  }
];

const categories = ["All", "First-Time Buyers", "Family Homes", "Budget-Friendly", "Fast Closing", "Competitive Market"];

export const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.categories.includes(activeCategory));

  const displayedTestimonials = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 3);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What My Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real first-time homebuyers I've helped
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedTestimonials.map((testimonial, index) => (
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
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {testimonial.title}
                </h3>
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

        {/* See More Button */}
        {filteredTestimonials.length > 3 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              {showAll ? "Show Less" : `See More Testimonials (${filteredTestimonials.length - 3} more)`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

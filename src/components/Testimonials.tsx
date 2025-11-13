import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Personal & Intentional First Home Experience",
    name: "Shruthilaya Jaganathan",
    location: "Toronto",
    text: "Working with Nalin to buy my first home couldn't have been a better experience. I found his approach to be personal and intentional. He put in a ton of effort upfront to really understand what I wanted and how it worked with my lifestyle, and this allowed both of us to evaluate every viewing with a lot of confidence and clarity. He met me where I was, he was always patient and never made me feel rushed.",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service"]
  },
  {
    title: "Took the Anxiety Out of Home Buying",
    name: "Krisha Malik",
    location: "Toronto",
    text: "Nalin was fantastic to work with when looking for our new home. He was honest, direct, responsive, and provided really detailed and clear information on the entire process after we had our offer accepted on our new home. It really felt like his goal was to make sure we bought a home we loved and would be happy in, and he took the anxiety out of home buying.",
    rating: 5,
    categories: ["First-Time Buyers", "Responsive Service"]
  },
  {
    title: "Secured Our First Home After Years of Searching",
    name: "Maxine Bell",
    location: "Toronto",
    text: "We bought a house! These are words that still feel surreal to say, but thanks to Nalin we can share in the excitement that it's in fact true! We connected with Nalin years ago to start the process of purchasing our first home. Things seemed so out of reach for a while that we took a back seat, checking the listings he sent us, but nothing ever felt right. Our nervousness and indecisiveness was balanced by Nalin's calm and professional attitude. In the end we secured our first home!",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service", "Long-Term Support"]
  },
  {
    title: "Most Professional Service Provider I've Worked With",
    name: "Massimo Orsini",
    location: "Toronto",
    text: "Nalin is, by far, not just the most diligent agent I have ever had the pleasure to work with, but one of the most professional service providers I have worked with to date. Nalin was incredibly communicative and transparent every step of the way. I was never made to feel rushed, home visits were a breeze to coordinate, and Nalin's experience and keen eye made every visit an educational one.",
    rating: 5,
    categories: ["Professional Service", "Market Knowledge"]
  },
  {
    title: "Sharp, Data-Driven & Stress-Free Process",
    name: "Harry Gill",
    location: "Toronto",
    text: "Nalin is the agent you want in your corner—sharp, grounded, and laser-focused on what actually matters. He doesn't just toss opinions around; he backs everything with solid market data, gives clear, rational advice, and keeps you looped in without the fluff. The whole process felt seamless, smart, and oddly stress-free.",
    rating: 5,
    categories: ["Market Knowledge", "Data-Driven"]
  },
  {
    title: "Went Over and Above for Our First Home",
    name: "Elijah Di Gangi",
    location: "Toronto",
    text: "Nalin is the polar opposite of the stereotypical real estate agent: he's caring and considerate, responsive, collaborative, and is motivated by human connections, not commissions. My wife and I worked with Nalin on and off over the summer and fall to find our first home. His market knowledge and calming vibe helped make a stressful situation more manageable. Once we landed a place in the fall, he didn't disappear. He continued to follow up and help out, going above the call of duty.",
    rating: 5,
    categories: ["First-Time Buyers", "Long-Term Support", "Patient Service"]
  },
  {
    title: "Dream Home Within Budget as First-Generation Immigrant",
    name: "Chi Nguyen",
    location: "Toronto",
    text: "As a first time home buyer, I was nervous and scared about this daunting process. Nalin surpassed every single hope and expectation: he's kind, patient, genuine, and honest. He provided the perfect balance of guidance and education, coupled with care and consideration. As a first generation immigrant, being able to own a home in one of the most competitive housing markets, while remaining within our budget, is truly a dream that I never thought possible.",
    rating: 5,
    categories: ["First-Time Buyers", "Budget-Friendly", "Competitive Market"]
  },
  {
    title: "Found Home That Wasn't Initially on My Radar",
    name: "Isabel Matwawana",
    location: "Toronto",
    text: "I cannot recommend Nalin highly enough! As a super anxious first time homebuyer, Nalin took the time to answer every question thoroughly and honestly and gave me exactly as much handholding as I needed. He also got to know me and my needs so that he could give me little nudges when I needed them so that I didn't miss out on opportunities. He ultimately recommended looking at a spot that wasn't initially on my radar, and it ended up being the one. I LOVE my new home!",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service", "Expert Guidance"]
  },
  {
    title: "Above & Beyond During Family Emergency",
    name: "Michael T",
    location: "Toronto",
    text: "I can't recommend Nalin more highly to work with. Throughout the selling and buying process, he is kind, empathetic, patient, responsive, and diligent. He listens to our needs, walks us through options, provides us with informative analysis, and gives us the space to make decisions that we're comfortable and happy with. When we had a family emergency, he went above and beyond to help sell my condo.",
    rating: 5,
    categories: ["Buying & Selling", "Professional Service", "Long-Term Support"]
  },
  {
    title: "Calmed Anxieties Throughout the Crazy Process",
    name: "Barbara Frey",
    location: "Toronto",
    text: "If you are looking for someone who takes the time to get to know you and what you are truly seeking in your next home, contact Nalin. He was incredibly patient, helped to calm my anxieties with the crazy home-buying process and provided invaluable guidance and support in the actual decision-making. I felt like I had a friend on the journey and not an agent out to make a sale. He truly will have your best-interest at heart!",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service"]
  },
  {
    title: "Voice of Reason During Long House-Hunting",
    name: "John Davis",
    location: "Toronto",
    text: "Friendly, supportive service with your best interests in mind. Nalin was a delight to work with. He supported us through a long house-hunting process, was available whenever we needed him, and was always completely honest with us. We never felt pressured to make a decision that we didn't want to, and he was often the voice of reason when we were on the verge of making bad/emotional decisions.",
    rating: 5,
    categories: ["Patient Service", "Long-Term Support", "Professional Service"]
  },
  {
    title: "Grace Under Pressure in Tough Market",
    name: "Alex Perelgut",
    location: "Toronto",
    text: "I can't speak highly enough about Nalin. We worked with him to find our first condo rental 4 years ago and couldn't wait to work with him again to find our new lease. It's a tough market out there but his grace under pressure, humour and insight are what kept us from losing hope throughout our search for the perfect place.",
    rating: 5,
    categories: ["Long-Term Support", "Competitive Market"]
  }
];

const categories = ["All", "First-Time Buyers", "Patient Service", "Market Knowledge", "Budget-Friendly", "Long-Term Support", "Competitive Market"];

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
            Real stories from real homebuyers I've helped - 60+ 5-star Google reviews
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

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
    text: "Nalin was fantastic to work with when looking for our new home. He was honest, direct, responsive, and provided really detailed and clear information on the entire process after we had our offer accepted. It really felt like his goal was to make sure we bought a home we loved and would be happy in, and he took the anxiety out of home buying.",
    rating: 5,
    categories: ["First-Time Buyers", "Responsive Service"]
  },
  {
    title: "Secured Our First Home After Years",
    name: "Maxine Bell",
    location: "Toronto",
    text: "We bought a house! We connected with Nalin years ago to start the process. Things seemed so out of reach for a while, but our nervousness and indecisiveness was balanced by Nalin's calm and professional attitude. He helped us hone in on exactly where in the city we wanted to live. In the end we secured our first home! He was and still is very quick to reply and answer all our questions about purchasing and home ownership.",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service", "Long-Term Support"]
  },
  {
    title: "Most Professional Service Provider",
    name: "Massimo Orsini",
    location: "Toronto",
    text: "Nalin is, by far, not just the most diligent agent I have ever had the pleasure to work with, but one of the most professional service providers I have worked with to date. Nalin was incredibly communicative and transparent every step of the way. I was never made to feel rushed, home visits were a breeze to coordinate, and Nalin's experience and keen eye made every visit an educational one.",
    rating: 5,
    categories: ["Professional Service", "Market Knowledge"]
  },
  {
    title: "Sharp, Data-Driven & Stress-Free",
    name: "Harry Gill",
    location: "Toronto",
    text: "Nalin is the agent you want in your corner—sharp, grounded, and laser-focused on what actually matters. He doesn't just toss opinions around; he backs everything with solid market data, gives clear, rational advice, and keeps you looped in without the fluff. The whole process felt seamless, smart, and oddly stress-free.",
    rating: 5,
    categories: ["Market Knowledge", "Data-Driven"]
  },
  {
    title: "Went Over and Above",
    name: "Elijah Di Gangi",
    location: "Toronto",
    text: "Nalin is the polar opposite of the stereotypical real estate agent: he's caring and considerate, responsive, collaborative, and is motivated by human connections, not commissions. My wife and I worked with Nalin on and off to find our first home. His market knowledge and calming vibe helped make a stressful situation more manageable. Once we landed a place, he didn't disappear. He continued to follow up and help out, going above the call of duty.",
    rating: 5,
    categories: ["First-Time Buyers", "Long-Term Support", "Patient Service"]
  },
  {
    title: "Dream Home Within Budget as Immigrant",
    name: "Chi Nguyen",
    location: "Toronto",
    text: "As a first time home buyer, I was nervous and scared. Nalin surpassed every single hope and expectation: he's kind, patient, genuine, and honest. He provided the perfect balance of guidance and education, coupled with care and consideration. As a first generation immigrant, being able to own a home in one of the most competitive housing markets, while remaining within our budget, is truly a dream that I never thought possible.",
    rating: 5,
    categories: ["First-Time Buyers", "Budget-Friendly", "Competitive Market"]
  },
  {
    title: "Found Home Not on My Radar",
    name: "Isabel Matwawana",
    location: "Toronto",
    text: "I cannot recommend Nalin highly enough! As a super anxious first time homebuyer, Nalin took the time to answer every question thoroughly and honestly. He got to know me and my needs so that he could give me little nudges when I needed them. He ultimately recommended looking at a spot that wasn't initially on my radar, and it ended up being the one. I LOVE my new home!",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service", "Expert Guidance"]
  },
  {
    title: "Above & Beyond During Emergency",
    name: "Michael T",
    location: "Toronto",
    text: "I can't recommend Nalin more highly. Throughout the selling and buying process, he is kind, empathetic, patient, responsive, and diligent. He listens to our needs, walks us through options, provides us with informative analysis, and gives us the space to make decisions. When we had a family emergency, he went above and beyond to help sell my condo.",
    rating: 5,
    categories: ["Buying & Selling", "Professional Service", "Long-Term Support"]
  },
  {
    title: "Calmed My Anxieties",
    name: "Barbara Frey",
    location: "Toronto",
    text: "If you are looking for someone who takes the time to get to know you and what you are truly seeking in your next home, contact Nalin. He was incredibly patient, helped to calm my anxieties with the crazy home-buying process and provided invaluable guidance. I felt like I had a friend on the journey and not an agent out to make a sale. He truly will have your best-interest at heart!",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service"]
  },
  {
    title: "Voice of Reason During Search",
    name: "John Davis",
    location: "Toronto",
    text: "Friendly, supportive service with your best interests in mind. Nalin was a delight to work with. He supported us through a long house-hunting process, was available whenever we needed him, and was always completely honest with us. We never felt pressured, and he was often the voice of reason when we were on the verge of making bad/emotional decisions.",
    rating: 5,
    categories: ["Patient Service", "Long-Term Support", "Professional Service"]
  },
  {
    title: "Grace Under Pressure",
    name: "Alex Perelgut",
    location: "Toronto",
    text: "I can't speak highly enough about Nalin. We worked with him to find our first condo rental 4 years ago and couldn't wait to work with him again. It's a tough market out there but his grace under pressure, humour and insight are what kept us from losing hope throughout our search for the perfect place.",
    rating: 5,
    categories: ["Long-Term Support", "Competitive Market"]
  },
  {
    title: "Professional & Thoughtful",
    name: "Mike Ibarra",
    location: "Toronto",
    text: "Nalin is an incredible agent! If you're fortunate enough work with him you'll be impressed by his professionalism and thoughtfulness during the buying or selling process. His insights into the market, and his non-pressured approach make him a pleasure to work with. I could not have asked for a better agent.",
    rating: 5,
    categories: ["Professional Service", "Market Knowledge"]
  },
  {
    title: "Informative First-Time Buyer Presentation",
    name: "Lisa van der Laan",
    location: "Toronto",
    text: "Nalin is an amazing real estate agent! As first time home buyers, Nalin was always available to answer our questions and explain the process. Nalin's first time home buyers presentation was informative and really helped us to understand the entire home buying process. Nalin did a great job at negotiating a great deal for us!",
    rating: 5,
    categories: ["First-Time Buyers", "Educational", "Negotiation Skills"]
  },
  {
    title: "Kept Us From Losing Hope",
    name: "Alex Perelgut",
    location: "Toronto",
    text: "I can't speak highly enough about Nalin and Sayva real estate's entire ethos. We worked with him to find our first condo rental 4 years ago and couldn't wait to work with him again. It's a tough market out there but his grace under pressure, humour and insight are what kept us from losing hope throughout our search for the perfect place.",
    rating: 5,
    categories: ["Long-Term Support", "Competitive Market", "Patient Service"]
  },
  {
    title: "Friend on the Journey",
    name: "Barbara Frey",
    location: "Toronto",
    text: "If you are looking for someone who takes the time to get to know you and what you are truly seeking, contact Nalin. He was incredibly patient, helped to calm my anxieties and provided invaluable guidance. I felt like I had a friend on the journey and not an agent out to make a sale. It was a whirlwind of a week finding my new home, and Nalin's calm presence and gentle humour made all the difference!",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service", "Fast Closing"]
  },
  {
    title: "Always Goes Above and Beyond",
    name: "Radan Rusev",
    location: "Toronto",
    text: "I've worked with Nalin for years and I recommend him to anyone in the strongest terms possible. In my experience, he has always gone above and beyond for his clients. He doesn't push clients to settle and always helps them find a place they'll love and be happy living in for years.",
    rating: 5,
    categories: ["Long-Term Support", "Professional Service"]
  },
  {
    title: "Absolute Gentleman",
    name: "Luciano Veta",
    location: "Toronto",
    text: "Nalin is an absolute gentleman who was wonderful to work with. His attention to detail, care for his clients and personable nature made him a pleasure to work with. I would recommend him to anyone who is new to the market as I was. Not only was he an excellent realtor, but I now consider him a friend.",
    rating: 5,
    categories: ["First-Time Buyers", "Professional Service"]
  },
  {
    title: "Supportive Through Long Process",
    name: "John Davis",
    location: "Toronto",
    text: "Friendly, supportive service with your best interests in mind. Nalin supported us through a long house-hunting process, was available whenever we needed him, and was always completely honest. We never felt pressured to make a decision that we didn't want to, and he was often the voice of reason when we were on the verge of making bad/emotional decisions.",
    rating: 5,
    categories: ["Patient Service", "Long-Term Support"]
  },
  {
    title: "Perfect for Family Needs",
    name: "Sairah Khan",
    location: "GTA",
    text: "He went above and beyond to help our family find the perfect space for us - his experience, knowledge and drive makes him the perfect combination.",
    rating: 5,
    categories: ["Family Homes", "Expert Guidance"]
  },
  {
    title: "Seamless Leasing Process",
    name: "Nelson Medeiros",
    location: "Toronto",
    text: "Nalin does it right! Pleasure to work with in leasing out our condo. He's very professional, made the process seamless and took the time to find the right tenants and not just looking for the quick sale.",
    rating: 5,
    categories: ["Professional Service", "Rental Services"]
  },
  {
    title: "Navigated Crazy Toronto Market",
    name: "Justin Moulton",
    location: "Toronto",
    text: "Nalin worked incredibly fast to find us a place which met all our criteria and helped us navigate through the crazy Toronto rental market. Don't think we could have done it without him!",
    rating: 5,
    categories: ["Fast Closing", "Competitive Market"]
  },
  {
    title: "Best Interests in Mind",
    name: "Timothy Fukakusa",
    location: "Toronto",
    text: "Nalin was great to work with and very friendly. I always felt he had our best interest in mind. I highly recommend him.",
    rating: 5,
    categories: ["Professional Service"]
  },
  {
    title: "Secured Dream Space",
    name: "Kaeli Sweigard",
    location: "Toronto",
    text: "Very nice guy to work with - made the entire process easy and enjoyable. He helped us secure our dream space that we thought was out of reach, but he worked his magic. I would certainly recommend working with him!",
    rating: 5,
    categories: ["Negotiation Skills", "Expert Guidance"]
  },
  {
    title: "Understanding and Helpful",
    name: "H C",
    location: "Toronto",
    text: "Nalin is an understanding, thorough and extremely helpful agent who can make home buying experience a pleasure. Highly recommended.",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service"]
  }
];

const categories = ["All", "First-Time Buyers", "Patient Service", "Market Knowledge", "Budget-Friendly", "Long-Term Support", "Competitive Market", "Professional Service", "Negotiation Skills"];

export const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.categories.includes(activeCategory));

  const displayedTestimonials = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 6);

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
              className="rounded-full text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedTestimonials.map((testimonial, index) => (
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
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {testimonial.title}
                </h3>
                <p className="text-foreground mb-6 italic line-clamp-4">
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
        {filteredTestimonials.length > 6 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              {showAll ? "Show Less" : `See All ${filteredTestimonials.length} Reviews`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

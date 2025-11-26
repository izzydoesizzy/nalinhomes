import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Clock, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import videoThumbnail from "@/assets/video-thumbnail.png";

export const SellerHero = () => {
  const testimonials = [
    {
      quote: "I can't recommend Nalin more highly. When we had a family emergency, he went above and beyond to help sell my condo.",
      author: "Michael T.",
      location: "Toronto"
    },
    {
      quote: "Nalin is head-and-shoulders above the rest! His level of professionalism, commitment, and attention to detail are unmatched.",
      author: "Jennifer S.",
      location: "Toronto"
    },
    {
      quote: "Professional, highly knowledgeable and an expert negotiator. He takes care of each client like they are family.",
      author: "Kirk E.",
      location: "Toronto"
    }
  ];

  const scrollToValuation = () => {
    const valuationSection = document.getElementById("valuation");
    if (valuationSection) {
      valuationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Toronto skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-start/95 via-hero-start/85 to-hero-end/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in leading-tight">
                Selling with Heart, Strategy,<br />and a Lot Less Hassle
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 animate-fade-in">
                Selling a home is personal. With 10+ years of experience, an all-star team of good humans, and a done-for-you process, I'll help you feel confident every step of the way.
              </p>
              <Button 
                size="lg" 
                onClick={scrollToValuation} 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-accent transition-all hover:scale-105"
              >
                Get My Free Home Valuation
              </Button>
            </div>

            {/* Video Section */}
            <div className="relative group animate-fade-in">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                <img src={videoThumbnail} alt="Nalin Sharma selling process video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-20 h-20 p-0 group-hover:scale-110 transition-transform shadow-accent">
                    <Play className="h-10 w-10 ml-1" fill="currentColor" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Authority Bar */}
          <div className="rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  icon: Clock,
                  value: "6-8 Days",
                  label: "Avg. Time on Market",
                  subtitle: "Significantly faster than average",
                },
                {
                  icon: TrendingUp,
                  value: "177%",
                  label: "Record Sale",
                  subtitle: "Of asking price achieved",
                },
                {
                  icon: Users,
                  value: "99%",
                  label: "Word of Mouth",
                  subtitle: "Referrals & repeat clients",
                },
                {
                  icon: DollarSign,
                  value: "I Pay",
                  label: "Upfront Costs",
                  subtitle: "Staging, photos, cleaning",
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon className="w-8 h-8 text-accent mb-1 group-hover:text-accent/80 transition-colors" />
                      <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base font-semibold text-primary-foreground/95">
                        {stat.label}
                      </div>
                      <div className="text-xs md:text-sm text-primary-foreground/75">
                        {stat.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-base text-primary-foreground text-center italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-primary-foreground text-center text-sm">
                  {testimonial.author}
                </p>
                <p className="text-primary-foreground/80 text-center text-sm">
                  {testimonial.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

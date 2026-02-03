import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Home, Target, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import videoThumbnail from "@/assets/video-thumbnail.png";
import { useState, useEffect } from "react";
export const Hero = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const avatars = ["First-time home-buyers in Toronto", "Young families growing in the GTA"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatar(prev => (prev + 1) % avatars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const testimonials = [{
    quote: "After a handful of showings, he crafted a master offer which was accepted and closed all within 30 days.",
    author: "Jermaine Bain",
    location: "Toronto"
  }, {
    quote: "The whole process felt seamless, smart, and oddly stress-free.",
    author: "Harry Gill",
    location: "Toronto"
  }, {
    quote: "Nalin surpassed every single hope and expectation.",
    author: "Chi Nguyen",
    location: "Toronto"
  }];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Toronto skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-start/95 via-hero-start/85 to-hero-end/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Rotating Avatar Callout */}
          <div className="flex justify-center mb-6">
            <div className="inline-block">
              <div className="px-6 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <p className="text-sm font-medium text-white animate-fade-in" key={currentAvatar}>
                  {avatars[currentAvatar]}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in leading-tight">
                Thinking of Buying Your First Home in Toronto?
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 animate-fade-in">Skip the stress, uncertainty, and overwhelm. Let me guide you through every step with clarity and confidence.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-accent transition-all hover:scale-105"
                >
                  <a
                    href="https://nalinsharma.typeform.com/to/oL4xoLAS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold text-lg px-8 py-6"
                >
                  Resources
                </Button>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative group animate-fade-in">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                {isVideoPlaying ? (
                  <iframe
                    src="https://player.vimeo.com/video/1147039242?autoplay=1"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Nalin Sharma introduction video"
                  />
                ) : (
                  <>
                    <img src={videoThumbnail} alt="Nalin Sharma introduction video" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button 
                        size="lg" 
                        onClick={() => setIsVideoPlaying(true)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-20 h-20 p-0 group-hover:scale-110 transition-transform shadow-accent"
                      >
                        <Play className="h-10 w-10 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Authority Bar */}
          <div className="rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[{
              icon: Home,
              value: "160+",
              label: "Successful Transactions",
              subtitle: "Trusted across Toronto"
            }, {
              icon: Star,
              value: "60+",
              label: "5-Star Reviews",
              subtitle: "Real stories from happy clients"
            }, {
              icon: Target,
              value: "Over 90%",
              label: "Referral-based Business",
              subtitle: "Happy clients bring business"
            }, {
              icon: Clock,
              value: "2–3 Months",
              label: "Avg to Get the Keys",
              subtitle: "Focused, efficient, and stress-free"
            }].map((stat, index) => {
              const Icon = stat.icon;
              return <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
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
                  </div>;
            })}
            </div>
          </div>

          {/* Featured Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
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
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

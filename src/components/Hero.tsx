import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import videoThumbnail from "@/assets/video-thumbnail.png";
import { useState, useEffect } from "react";
export const Hero = () => {
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Toronto skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-start/95 via-hero-start/85 to-hero-end/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in leading-tight">
                Thinking of Buying Your First Home in Toronto?
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 animate-fade-in">
                Skip the stress, uncertainty, and overwhelm. Let me guide you through every step with clarity, confidence, and care.
              </p>
              <Button size="lg" onClick={scrollToContact} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-accent transition-all hover:scale-105">
                Book Your Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Video Section */}
            <div className="relative group animate-fade-in">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                <img src={videoThumbnail} alt="Nalin Sharma introduction video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-20 h-20 p-0 group-hover:scale-110 transition-transform shadow-accent">
                    <Play className="h-10 w-10 ml-1" fill="currentColor" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          

          {/* Featured Testimonial */}
          <div className="max-w-3xl mx-auto bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8 animate-fade-in">
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <p className="text-xl text-primary-foreground text-center italic mb-6 transition-all duration-500">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <p className="font-semibold text-primary-foreground text-center">
              {testimonials[currentTestimonial].author}
            </p>
            <p className="text-primary-foreground/80 text-center">
              {testimonials[currentTestimonial].location}
            </p>
          </div>
        </div>
      </div>
    </section>;
};
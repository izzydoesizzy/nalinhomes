import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Home Buying Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Let's have a no-pressure conversation about your goals, timeline, and what you're looking for in your first home. Book a discovery call today—I'm here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Calendar className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Book a Call</h3>
              <p className="text-sm text-primary-foreground/80">Schedule a convenient time</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Mail className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Send an Email</h3>
              <p className="text-sm text-primary-foreground/80">nalinksharma@gmail.com</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Phone className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Call Direct</h3>
              <p className="text-sm text-primary-foreground/80">+1 (416) 726-3274</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg md:text-xl px-6 md:px-12 py-6 md:py-8 pr-12 md:pr-16 shadow-accent transition-all hover:scale-105 w-full sm:w-auto max-w-full whitespace-normal text-center inline-flex items-center justify-center leading-none relative"
          >
            <span className="w-full text-center">Book Your Free Discovery Call</span>
            <Calendar className="h-6 w-6 absolute right-6 md:right-8" />
          </Button>

          <p className="text-primary-foreground/70 mt-6 text-sm">
            No commitment required • 30-minute consultation • Get all your questions answered
          </p>
        </div>
      </div>
    </section>
  );
};

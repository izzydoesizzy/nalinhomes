import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const SellerHero = () => {
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
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in leading-tight">
              Sell Your Home for Top Dollar - Without the Stress
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 animate-fade-in max-w-3xl mx-auto">
              My warm, hands-on approach handles every detail - from staging to negotiation - so you can focus on your next chapter, not endless to-do lists.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToValuation} 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-accent transition-all hover:scale-105"
            >
              Get My Free Home Valuation
            </Button>
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
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const SellerHero = () => {
  const scrollToValuation = () => {
    const valuationSection = document.getElementById("valuation");
    if (valuationSection) {
      valuationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="max-w-[80%] mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Selling With Confidence
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
              Strategic marketing and Harvard-trained negotiation delivering exceptional results across Toronto
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={scrollToValuation}
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white"
              >
                Get My Free Home Value Report
              </Button>
            </div>
          </div>

          {/* Quick Stats - Condensed Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Clock className="h-8 w-8 text-accent" />
              <div>
                <div className="text-2xl font-bold text-white">6-8 Days</div>
                <div className="text-slate-200 text-xs">Avg. Time on Market</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-md rounded-full px-6 py-3 border-2 border-amber-400/50">
              <TrendingUp className="h-8 w-8 text-amber-400" />
              <div>
                <div className="text-2xl font-bold text-amber-400">177%</div>
                <div className="text-white text-xs">Record Sale</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <DollarSign className="h-8 w-8 text-accent" />
              <div>
                <div className="text-2xl font-bold text-white">92%</div>
                <div className="text-slate-200 text-xs">Referrals & Repeat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

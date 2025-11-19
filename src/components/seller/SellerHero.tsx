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
              I Sold 63 Constance Avenue for
              <span className="block text-amber-400 mt-2">$1 Million Over Asking</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
              Strategic pricing and Harvard-trained negotiation that turns your home into a competitive bidding war
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={scrollToValuation}
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white"
              >
                Get My Free Home Value Report
              </Button>
              <p className="text-sm text-slate-300">⏰ Limited spots - Only taking 3 new clients this month</p>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => {
                  const resultsSection = document.getElementById("results");
                  if (resultsSection) {
                    resultsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View Results
              </Button>
            </div>
          </div>

          {/* Quick Stats - Emphasize 177% */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20">
              <Clock className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">6-8 Days</div>
              <div className="text-slate-200 text-sm">Average Time on Market</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-md rounded-lg p-8 text-center border-2 border-amber-400/50 shadow-xl shadow-amber-500/20">
              <TrendingUp className="h-16 w-16 text-amber-400 mx-auto mb-4" />
              <div className="text-6xl font-black text-amber-400 mb-2">177%</div>
              <div className="text-white text-lg font-semibold mb-1">of Asking Price</div>
              <div className="text-slate-300 text-sm">Record Sale - 63 Constance Ave</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20">
              <DollarSign className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">92%</div>
              <div className="text-slate-200 text-sm">From Referrals & Repeat Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Sell Your Home for
              <span className="block text-accent mt-2">More, Faster</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
              Strategic pricing and expert negotiation that consistently delivers above asking price results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToValuation}
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white"
              >
                Get Free Home Valuation
              </Button>
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

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">Top 3%</div>
              <div className="text-slate-200">Diamond Status Agents</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">92%</div>
              <div className="text-slate-200">From Referrals & Repeat Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20">
              <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">98</div>
              <div className="text-slate-200">Successful Transactions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

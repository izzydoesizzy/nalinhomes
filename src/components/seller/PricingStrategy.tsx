import { TrendingUp, Target, Users, Award } from "lucide-react";

export const PricingStrategy = () => {
  const principles = [
    {
      icon: TrendingUp,
      title: "Data-Driven Analysis",
      description:
        "Comprehensive market research analyzing recent comparable sales, current listings, and market trends to determine optimal positioning",
    },
    {
      icon: Target,
      title: "Strategic Positioning",
      description:
        "Setting the right price to attract multiple qualified buyers and create competitive bidding situations that drive prices above asking",
    },
    {
      icon: Users,
      title: "Buyer Psychology",
      description:
        "Understanding what motivates buyers in your market segment and pricing to maximize interest while maintaining premium perception",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Track record of 115% average sale price demonstrates the effectiveness of this strategic approach to pricing",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.5),transparent_60%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Strategic Pricing That Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The secret to consistently exceeding asking price isn't luck—it's strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <principle.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Case Study Highlight */}
          <div className="bg-accent/10 backdrop-blur-md rounded-lg p-8 border border-accent/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Case Study: 502 Annette Street
            </h3>
            <p className="text-slate-300 mb-4">
              Through strategic pricing and comprehensive marketing, this property sold for{" "}
              <span className="text-accent font-bold">145% of asking price</span> in just{" "}
              <span className="text-accent font-bold">7 days</span>, resulting in over $200,000 above the initial asking price.
            </p>
            <p className="text-slate-300">
              The key was setting a competitive entry point that attracted multiple serious buyers, 
              creating the competitive bidding environment needed to maximize the final sale price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Camera, Globe, Target, Users, Sparkles, Video } from "lucide-react";

export const MarketingStrategy = () => {
  const strategies = [
    {
      icon: Camera,
      title: "Professional Photography & Videography",
      description:
        "High-end photography, drone footage, and virtual tours that showcase your property's best features",
    },
    {
      icon: Globe,
      title: "Multi-Platform Digital Marketing",
      description:
        "Maximum exposure across MLS, realtor.ca, social media, and premium real estate platforms",
    },
    {
      icon: Target,
      title: "Targeted Advertising Campaigns",
      description:
        "Strategic digital ads targeting qualified buyers in your property's price range and location",
    },
    {
      icon: Users,
      title: "Exclusive Network Access",
      description:
        "Direct connections to serious buyers and other top agents in the Toronto market",
    },
    {
      icon: Sparkles,
      title: "Professional Staging Consultation",
      description:
        "Expert advice on presentation and staging to maximize your home's appeal and value",
    },
    {
      icon: Video,
      title: "Premium Property Showcases",
      description:
        "Open houses and private showings designed to create competitive bidding situations",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,118,110,0.12),transparent_60%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Marketing Strategy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A multi-channel approach designed to attract qualified buyers and maximize your sale price
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <strategy.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {strategy.title}
                </h3>
                <p className="text-muted-foreground">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { FileText, Camera, Palette, Home, Monitor, Share2, Globe, Users } from "lucide-react";

export const MarketingStrategy = () => {
  const allStrategies = [
    { icon: FileText, title: "Personalized Consultation", part: "PART 1" },
    { icon: Palette, title: "Property Staging", part: "PART 1" },
    { icon: Camera, title: "Professional Photography", part: "PART 1" },
    { icon: Home, title: "Custom Marketing Collateral", part: "PART 1" },
    { icon: Monitor, title: "MLS + Brokerage Portals", part: "PART 2" },
    { icon: Share2, title: "Social Media Marketing", part: "PART 2" },
    { icon: Globe, title: "Custom Listing Website", part: "PART 2" },
    { icon: Users, title: "Agent Networking", part: "PART 2" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              How We Do It Better
            </h2>
            <p className="text-lg text-muted-foreground">
              Two-part process: Prepare your home, then optimize reach
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allStrategies.map((strategy, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <strategy.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-xs font-semibold text-accent mb-1">{strategy.part}</div>
                <h4 className="text-sm font-bold text-foreground">
                  {strategy.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

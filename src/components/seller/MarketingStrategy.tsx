import { FileText, Home, Camera, Palette, Globe, Share2, Monitor, Users } from "lucide-react";

export const MarketingStrategy = () => {
  const part1Strategies = [
    {
      icon: FileText,
      title: "Personalized Selling Consultation",
      description: "We set expectations and guide you through the process from day one. Answer all questions so there are no surprises.",
    },
    {
      icon: Palette,
      title: "Property Staging Services",
      description: "Make your home look like it belongs in a magazine. We know the best stagers in the business.",
    },
    {
      icon: Camera,
      title: "Professional Photos",
      description: "Beautiful HD photos are the #1 way buyers find your home. Our photographer has shot over 1000 properties.",
    },
    {
      icon: Home,
      title: "Custom Marketing Collateral",
      description: "Brochures, professional copywriting, Just Listed flyers. Custom look and feel for your home.",
    },
  ];

  const part2Strategies = [
    {
      icon: Monitor,
      title: "MLS + Brokerage Portals",
      description: "Complete MLS listing distributed to hundreds of sites through IDX and VOW feeds nationwide.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Get your property in front of qualified buyers for more views, showings, and offers.",
    },
    {
      icon: Globe,
      title: "Custom Listing URL",
      description: "Dedicated website with rich photography, neighbourhood reports, school districts, and complete property details.",
    },
    {
      icon: Users,
      title: "In-Person Networking",
      description: "Promoting your home to our network of agents. Following up after showings. Always on the ball.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Do It Better
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven two-part process to maximize your sale price
            </p>
          </div>

          {/* PART 1 */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-primary/20">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                PART 1: We carefully prepare your home to look its best
              </h3>
              <p className="text-muted-foreground">
                Setting up for success with professional presentation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {part1Strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <strategy.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {strategy.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PART 2 */}
          <div>
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 mb-8 border border-accent/20">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                PART 2: Get your home in front of the right eyes
              </h3>
              <p className="text-muted-foreground">
                Optimized marketing to reach qualified buyers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {part2Strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <strategy.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {strategy.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

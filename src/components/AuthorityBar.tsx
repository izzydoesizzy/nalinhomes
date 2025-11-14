import { Home, Star, Target, Clock } from "lucide-react";

export const AuthorityBar = () => {
  const stats = [
    {
      icon: Home,
      value: "150+",
      label: "Homes Purchased",
      subtitle: "Trusted across Toronto",
    },
    {
      icon: Star,
      value: "60+",
      label: "5-Star Reviews",
      subtitle: "Real stories from real buyers",
    },
    {
      icon: Target,
      value: "80%",
      label: "First-Offer Success Rate",
      subtitle: "A strategy that wins in any market",
    },
    {
      icon: Clock,
      value: "2–3 Months",
      label: "Avg to Get the Keys",
      subtitle: "Focused, efficient, and stress-free",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 py-8 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
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
    </section>
  );
};

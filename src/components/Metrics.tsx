import { TrendingUp, Users, Home, Award } from "lucide-react";

const metrics = [
  {
    icon: Home,
    value: "150+",
    label: "Buyers Helped",
    description: "Find their dream homes"
  },
  {
    icon: Users,
    value: "98%",
    label: "Client Satisfaction",
    description: "Happy homeowners"
  },
  {
    icon: TrendingUp,
    value: "$85M+",
    label: "Total Sales Volume",
    description: "In transactions"
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    description: "In Toronto real estate"
  }
];

export const Metrics = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building trust through proven excellence in Toronto's real estate market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

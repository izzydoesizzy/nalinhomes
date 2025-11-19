import { TrendingUp, Clock, Target, Award } from "lucide-react";

export const ResultsDashboard = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "115%",
      label: "Average Sale Price",
      description: "Of asking price across all properties",
      color: "text-accent",
    },
    {
      icon: Clock,
      value: "6 Days",
      label: "Average Time on Market",
      description: "Significantly faster than market average",
      color: "text-primary",
    },
    {
      icon: Target,
      value: "145%",
      label: "Highest Sale Price",
      description: "502 Annette Street record",
      color: "text-accent",
    },
    {
      icon: Award,
      value: "100%",
      label: "Client Satisfaction",
      description: "Every seller achieved their goals",
      color: "text-primary",
    },
  ];

  return (
    <section id="results" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.5),transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Data-driven results that consistently exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <stat.icon className={`h-12 w-12 ${stat.color} mb-4`} />
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-slate-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

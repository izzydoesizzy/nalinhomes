import { TrendingUp, Clock, Target, Award } from "lucide-react";

export const ResultsDashboard = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "177%",
      label: "of Asking Price",
      description: "63 Constance Ave",
      comparison: "vs. Market Avg: 102%",
      increase: "+75 percentage points",
      color: "text-amber-400",
    },
    {
      icon: Clock,
      value: "6-8 Days",
      label: "Average Time on Market",
      description: "Most properties sell within a week",
      comparison: "vs. Market Avg: 23 days",
      increase: "3x faster",
      color: "text-accent",
    },
    {
      icon: Target,
      value: "41 Offers",
      label: "Record Number of Offers",
      description: "63 Constance Avenue sale",
      comparison: "vs. Market Avg: 2-3 offers",
      increase: "14x more competitive",
      color: "text-accent",
    },
    {
      icon: Award,
      value: "Top 3%",
      label: "Diamond Status",
      description: "Nationwide recognition",
      comparison: "Out of 18,000 agents",
      increase: "Elite performance",
      color: "text-amber-500",
    },
  ];

  return (
    <section id="results" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.5),transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Why My Sellers Get More Money
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Compare my results to the market average—the data speaks for itself
            </p>
          </div>

          {/* Summary Stat */}
          <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-emerald-400/50 text-center mb-12 max-w-md mx-auto">
            <div className="text-5xl font-black text-emerald-400 mb-2">115%</div>
            <div className="text-lg font-semibold text-white">Average Sale Price of Asking</div>
            <div className="text-sm text-slate-300 mt-1">vs. Market Avg: 102%</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <stat.icon className={`h-12 w-12 ${stat.color} mb-4`} />
                <div className="text-4xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-slate-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-400 mb-3">
                  {stat.description}
                </div>
                <div className="text-xs text-emerald-400 font-semibold mb-1">
                  {stat.comparison}
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="text-emerald-400">↑</span> {stat.increase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

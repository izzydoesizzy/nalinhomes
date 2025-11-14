import { Shield, Clock, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseMe = () => {
  const clientBenefits = [
    {
      icon: Shield,
      title: "No Pressure Approach",
      description: "You'll never feel rushed or pushed into a decision that doesn't feel right.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Quick responses, clear communication, and genuine support throughout the journey.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Negotiation",
      description: "I fight for your best interests and ensure you get the best possible deal.",
    },
    {
      icon: Heart,
      title: "Long-term Partnership",
      description: "Many of my clients become lifelong friends who continue to reach out for advice.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.5),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto space-y-16">
          {/* Why Clients Choose Me */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Why Clients Choose Me</h3>
            <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto">
              Working with me means having a dedicated advocate who genuinely cares about your success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {clientBenefits.map((benefit, index) => {
                const colors = [
                  { gradient: 'from-emerald-500 to-teal-600', icon: 'text-emerald-400' },
                  { gradient: 'from-blue-500 to-cyan-600', icon: 'text-blue-400' },
                  { gradient: 'from-violet-500 to-purple-600', icon: 'text-violet-400' },
                  { gradient: 'from-amber-500 to-orange-600', icon: 'text-amber-400' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-slate-700 hover:border-slate-600 bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${color.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                            <benefit.icon className="w-7 h-7 text-slate-200" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                          <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Quote, Search, Home, Eye, Target, Handshake, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ProcessPhilosophy = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "We discuss your goals, budget, timeline, and home criteria in detail.",
      icon: Search,
    },
    {
      number: 2,
      title: "Search",
      description: "I curate properties that match your needs and set up automated alerts for new listings.",
      icon: Home,
    },
    {
      number: 3,
      title: "Showings",
      description: "Tour homes at your pace with expert insights on each property's pros and cons.",
      icon: Eye,
    },
    {
      number: 4,
      title: "Offer Strategy",
      description: "Craft a competitive offer based on market analysis and your priorities.",
      icon: Target,
    },
    {
      number: 5,
      title: "Negotiation",
      description: "I advocate for your best interests to secure favorable terms and pricing.",
      icon: Handshake,
    },
    {
      number: 6,
      title: "Closing",
      description: "Navigate inspections, paperwork, and final steps until you get the keys.",
      icon: Key,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,118,110,0.12),transparent_60%)]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto space-y-16">
          {/* The Buying Process Timeline */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-teal-700 dark:from-blue-400 dark:via-blue-500 dark:to-teal-400 bg-clip-text text-transparent mb-4 text-center">How I Work: The Buying Process</h3>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              I believe in education over pressure. Every step is explained clearly so you feel confident in every decision.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => {
                const colors = [
                  { gradient: 'from-blue-500 to-cyan-500', icon: 'text-blue-500' },
                  { gradient: 'from-emerald-500 to-teal-500', icon: 'text-emerald-500' },
                  { gradient: 'from-violet-500 to-purple-500', icon: 'text-violet-500' },
                  { gradient: 'from-amber-500 to-orange-500', icon: 'text-amber-500' },
                  { gradient: 'from-rose-500 to-pink-500', icon: 'text-rose-500' },
                  { gradient: 'from-indigo-500 to-blue-500', icon: 'text-indigo-500' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <div key={index} className="relative group">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 relative z-10 bg-white dark:bg-slate-900 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                              <step.icon className={`w-6 h-6 ${color.icon}`} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-bold text-blue-700 dark:text-blue-400">Step {step.number}</span>
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

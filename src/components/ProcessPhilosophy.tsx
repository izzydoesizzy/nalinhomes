import { Quote, Search, Home, Eye, Target, Handshake, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ProcessPhilosophy = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "We discuss your goals, budget, timeline, and dream home criteria in detail.",
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
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* The Buying Process Timeline */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 text-center">How I Work: The Buying Process</h3>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              I believe in education over pressure. Every step is explained clearly so you feel confident in every decision.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => {
                const colors = [
                  { gradient: 'from-purple-500 to-pink-500', shadow: 'shadow-purple-500/50', glow: 'bg-purple-500/30' },
                  { gradient: 'from-pink-500 to-rose-500', shadow: 'shadow-pink-500/50', glow: 'bg-pink-500/30' },
                  { gradient: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/50', glow: 'bg-blue-500/30' },
                  { gradient: 'from-teal-500 to-emerald-500', shadow: 'shadow-teal-500/50', glow: 'bg-teal-500/30' },
                  { gradient: 'from-orange-500 to-amber-500', shadow: 'shadow-orange-500/50', glow: 'bg-orange-500/30' },
                  { gradient: 'from-green-500 to-lime-500', shadow: 'shadow-green-500/50', glow: 'bg-green-500/30' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <div key={index} className="relative group">
                    <div className={`absolute inset-0 ${color.glow} rounded-lg blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500`}></div>
                    <Card className={`h-full hover:shadow-2xl hover:${color.shadow} transition-all duration-300 border-2 border-transparent hover:border-gradient relative z-10 bg-white dark:bg-gray-900 hover:-translate-y-2 group-hover:scale-[1.02]`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                              <step.icon className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`text-sm font-bold bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent`}>Step {step.number}</span>
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

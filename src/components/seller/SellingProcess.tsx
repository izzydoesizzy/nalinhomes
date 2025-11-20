import { Home, Camera, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SellingProcess = () => {
  const processSteps = [
    {
      number: 1,
      title: "Preparation",
      subtitle: "Getting Your Home Show-Ready",
      description: "I visit your home and recommend what will help it shine. Whether staging, painting, or decluttering, I coordinate everything—you don't lift a finger.",
      icon: Home,
      highlights: [
        "Professional staging and design",
        "Coordinated repairs and painting",
        "I pay all upfront costs"
      ]
    },
    {
      number: 2,
      title: "Production",
      subtitle: "Creating Stunning Marketing",
      description: "My photographer has shot 1,000+ homes. We create custom websites, floor plans, video tours, and QR codes to showcase your property perfectly.",
      icon: Camera,
      highlights: [
        "Professional photography and video",
        "Custom listing website",
        "Virtual walkthroughs and floor plans"
      ]
    },
    {
      number: 3,
      title: "Promotion",
      subtitle: "Maximum Exposure & Negotiation",
      description: "MLS listing, targeted digital campaigns, and personal follow-up with every showing. I negotiate strategically to maximize your sale price.",
      icon: TrendingUp,
      highlights: [
        "MLS and widespread online exposure",
        "Targeted social media campaigns",
        "Expert negotiation tactics"
      ]
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,118,110,0.12),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto space-y-16">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-teal-700 dark:from-blue-400 dark:via-blue-500 dark:to-teal-400 bg-clip-text text-transparent mb-4 text-center">
              My 3-Step Selling Process
            </h3>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Preparation → Production → Promotion. A proven framework that maximizes your sale price while minimizing your stress.
            </p>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => {
                const colors = [
                  { gradient: 'from-emerald-500 to-teal-500', icon: 'text-emerald-500' },
                  { gradient: 'from-blue-500 to-cyan-500', icon: 'text-blue-500' },
                  { gradient: 'from-violet-500 to-purple-500', icon: 'text-violet-500' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <div key={index} className="relative group">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 relative z-10 bg-white dark:bg-slate-900 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-bold text-blue-700 dark:text-blue-400">Step {step.number}</span>
                            </div>
                            <h4 className="text-xl font-semibold text-foreground">{step.title}</h4>
                            <p className="text-sm font-medium text-accent mt-1">{step.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="space-y-2 border-t border-border pt-4">
                          {step.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                              <p className="text-xs text-muted-foreground">{highlight}</p>
                            </div>
                          ))}
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

import { useState, useEffect } from "react";
import { Shield, Clock, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseMe = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  
  const avatars = [
    "First-time home-buyers in Toronto",
    "Young families growing in the GTA"
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatar((prev) => (prev + 1) % avatars.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      <div className="absolute top-10 right-20 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Rotating Avatar Callout */}
          <div className="flex justify-center">
            <div className="inline-block">
              <div className="px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full shadow-lg shadow-purple-500/50 backdrop-blur-sm animate-pulse">
                <p className="text-sm font-bold text-white animate-fade-in" key={currentAvatar}>
                  ✨ {avatars[currentAvatar]} ✨
                </p>
              </div>
            </div>
          </div>

          {/* Why Clients Choose Me */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 text-center">Why Clients Choose Me</h3>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Working with me means having a dedicated advocate who genuinely cares about your success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {clientBenefits.map((benefit, index) => {
                const colors = [
                  { gradient: 'from-purple-500 to-violet-600', shadow: 'shadow-purple-500/50', glow: 'bg-purple-500/30', border: 'border-purple-500' },
                  { gradient: 'from-blue-500 to-cyan-600', shadow: 'shadow-blue-500/50', glow: 'bg-blue-500/30', border: 'border-blue-500' },
                  { gradient: 'from-pink-500 to-rose-600', shadow: 'shadow-pink-500/50', glow: 'bg-pink-500/30', border: 'border-pink-500' },
                  { gradient: 'from-red-500 to-pink-600', shadow: 'shadow-red-500/50', glow: 'bg-red-500/30', border: 'border-red-500' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <Card key={index} className={`group hover:shadow-2xl hover:${color.shadow} transition-all duration-300 border-2 ${color.border} bg-white dark:bg-gray-900 relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02]`}>
                    <div className={`absolute inset-0 ${color.glow} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl ${color.shadow}`}>
                            <benefit.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">{benefit.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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

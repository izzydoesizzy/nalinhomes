import { ClipboardList, DollarSign, Users, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const StressTransformation = () => {
  const transformations = [
    {
      stress: "Overwhelmed by To-Do Lists",
      transformation: "Done-For-You Service",
      description: "I coordinate everything—staging, cleaning, repairs—so you can focus on your next chapter.",
      testimonial: "Nalin handled absolutely everything. I didn't lift a finger.",
      icon: ClipboardList,
      colors: { gradient: 'from-rose-500 to-pink-600', icon: 'text-rose-400' }
    },
    {
      stress: "Worried About Not Getting Top Dollar",
      transformation: "Strategic Pricing & Negotiation",
      description: "I leverage market analysis and multiple offers to maximize your sale price. My calm negotiation style gets results.",
      testimonial: "We sold for 177% of asking—way beyond our expectations.",
      icon: DollarSign,
      colors: { gradient: 'from-emerald-500 to-teal-600', icon: 'text-emerald-400' }
    },
    {
      stress: "Unsure Who to Trust",
      transformation: "An Ecosystem of Good Humans",
      description: "10+ years of trusted professionals—no kickbacks, just experts who treat you with respect.",
      testimonial: "His team was incredible. Every single person was top-notch.",
      icon: Users,
      colors: { gradient: 'from-blue-500 to-cyan-600', icon: 'text-blue-400' }
    },
    {
      stress: "Feeling Alone in the Process",
      transformation: "Constant Communication & Support",
      description: "You'll get updates constantly. I personally call every agent for feedback and keep you informed every step.",
      testimonial: "He checked in daily. I always knew exactly what was happening.",
      icon: MessageCircle,
      colors: { gradient: 'from-violet-500 to-purple-600', icon: 'text-violet-400' }
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.5),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Selling Is Stressful. It Doesn't Have to Be.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Here's how I transform common seller anxieties into confident outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {transformations.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-slate-700 hover:border-slate-600 bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.colors.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <p className="text-slate-400 line-through text-sm mb-1">{item.stress}</p>
                        <h3 className="text-2xl font-bold text-white">{item.transformation}</h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="border-l-4 border-accent/50 pl-4 bg-slate-900/50 py-2 rounded-r">
                        <p className="text-sm text-slate-400 italic">"{item.testimonial}"</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Badge } from "@/components/ui/badge";

interface CaseStudy {
  address: string;
  offers: number;
  challenge: string;
  solution: string;
  percentageOfAsking?: number;
  type: "condo" | "house";
}

export const CaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    {
      address: "63 Constance Avenue",
      offers: 23,
      challenge: "My clients had a stunning family home that needed to stand out in a competitive market. We needed to generate serious buyer interest and create a bidding war.",
      solution: "I coordinated professional staging to highlight the home's best features, created a comprehensive marketing campaign with stunning photography, and personally called every agent after showings. The result? Over 150 showings in one week and 23 competing offers. I navigated the chaos calmly, helping my clients evaluate every offer strategically.",
      percentageOfAsking: 177,
      type: "house"
    },
    {
      address: "Downtown Condo - Family Emergency",
      offers: 4,
      challenge: "My client needed to sell his condo immediately due to a sudden family emergency. He was overwhelmed, stressed, and didn't have time to manage the usual selling process.",
      solution: "I assured him I'd handle everything. I coordinated last-minute deep cleaning, brought in my stager on short notice, and managed all showings with sensitivity to his family's situation. Within days, we had the condo sold to the right buyer at a great price. He could focus on his family while I focused on getting him the best outcome possible.",
      type: "condo"
    }
  ];

  return (
    <section id="results" className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full lg:max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Real Results: Going Above & Beyond
            </h2>
            <p className="text-lg text-slate-200">
              Two stories that show how I handle everything from bidding wars to family emergencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 hover:border-accent/50 transition-all group"
              >
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{study.address}</h3>
                    {study.percentageOfAsking && study.percentageOfAsking > 150 && (
                      <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/50 text-base md:text-lg px-3 md:px-4 py-1 md:py-2 flex-shrink-0">
                        {study.percentageOfAsking}% of Asking
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="font-semibold">{study.offers} Offers</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-amber-300 mb-2">The Challenge</p>
                    <p className="text-slate-200 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-300 mb-2">How I Handled It</p>
                    <p className="text-slate-200 leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

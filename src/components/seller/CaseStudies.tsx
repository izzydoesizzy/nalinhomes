import { TrendingUp, Clock, Target } from "lucide-react";

interface CaseStudy {
  address: string;
  result: string;
  offers: number;
  days?: number;
  highlight: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    address: "980 Yonge St. #208",
    result: "$60,000 Over Asking",
    offers: 2,
    days: 8,
    highlight: "Sold in 8 days with 2 competing offers",
    image: "yonge"
  },
  {
    address: "231 Fort York Blvd. #719",
    result: "99% of Asking",
    offers: 4,
    highlight: "Generated 4 competing offers",
    image: "fortyork"
  },
  {
    address: "2 Old Mill Dr. #310",
    result: "$10,000 Over Asking",
    offers: 1,
    days: 1,
    highlight: "Sold in 1 day for over asking",
    image: "oldmill"
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.5),transparent_60%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Recent Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from recent sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-slate-500 text-6xl">🏠</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-amber-400 text-2xl font-bold">{study.result}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {study.address}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Target className="h-5 w-5 text-accent" />
                      <span className="text-sm">{study.offers} Competing Offers</span>
                    </div>
                    {study.days && (
                      <div className="flex items-center gap-2 text-slate-300">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-sm">Sold in {study.days} {study.days === 1 ? 'Day' : 'Days'}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {study.highlight}
                      </p>
                    </div>
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

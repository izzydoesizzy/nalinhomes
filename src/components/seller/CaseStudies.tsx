import { AlertCircle, CheckCircle } from "lucide-react";

interface CaseStudy {
  address: string;
  listed: string;
  sold: string;
  offers: number;
  challenge: string;
  solution: string;
  percentageOfAsking?: number;
}

const caseStudies: CaseStudy[] = [
  {
    address: "304 Barondale Drive",
    listed: "$1,450,000",
    sold: "$1,700,000",
    offers: 28,
    percentageOfAsking: 117,
    challenge: "135+ showings risked buyer fatigue. Agents needed confidence their offer could win.",
    solution: "Transparent communication with every agent. Managed 3D tour, drone, pro photos. Client self-staged beautifully.",
  },
  {
    address: "63 Constance Avenue",
    listed: "$1,298,000",
    sold: "$2,300,000",
    offers: 41,
    percentageOfAsking: 177,
    challenge: "4-decade family estate. Required clearing entire home before marketing could begin.",
    solution: "Arranged 3 trucks for removal. Pro photos and floorplan. Generated 100 people per open house.",
  },
  {
    address: "185 Roehampton Ave #1405",
    listed: "$570,000",
    sold: "$617,000",
    offers: 7,
    percentageOfAsking: 108,
    challenge: "COVID timing, small size, occupied tenant working from home. Property couldn't show well.",
    solution: "Waited for tenant exit. Managed renovations, cleaning, pro photos. Strategic timing generated 37 showings.",
  },
  {
    address: "980 Yonge Street #208",
    listed: "$700,000",
    sold: "$760,000",
    offers: 2,
    percentageOfAsking: 109,
    challenge: "Low floor, no parking, bad view. Oversized 1-bed appeals to smaller buyer pool.",
    solution: "Complete staging, floorplan, pro photos. Premium presentation generated 2 offers without offer date.",
  },
  {
    address: "41 Northcote Ave",
    listed: "$2,699,000",
    sold: "$2,600,000",
    offers: 1,
    percentageOfAsking: 96,
    challenge: "Luxury property in winter turning into COVID. 7-month listing requiring multiple price adjustments.",
    solution: "Highest-level presentation. Managed renovations, electrical, window cleaning, staging, 3D tour, photos, floorplans.",
  },
  {
    address: "2212 Lake Shore Blvd #1808",
    listed: "$650,000",
    sold: "$650,000",
    offers: 2,
    percentageOfAsking: 100,
    challenge: "Pandemic timing. Multiple competing units listed same week created immediate local competition.",
    solution: "Full staging, photography, 3D tour. Strategic price adjustment immediately generated 2 offers.",
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
              Real challenges, strategic solutions, exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {study.address}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Listed: {study.listed}</span>
                    <span className="text-slate-400">Sold: <span className="text-amber-400 font-bold">{study.sold}</span></span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="text-accent font-semibold">{study.offers} Offers</span>
                    {study.percentageOfAsking && (
                      <span className={`font-semibold ${study.percentageOfAsking >= 100 ? 'text-emerald-400' : 'text-slate-300'}`}>
                        {study.percentageOfAsking}% of Asking
                      </span>
                    )}
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-amber-400 uppercase">Challenge</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-emerald-400 uppercase">Solution</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

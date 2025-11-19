import { TrendingUp, Users, AlertCircle, CheckCircle } from "lucide-react";

interface CaseStudy {
  address: string;
  listed: string;
  sold: string;
  offers: number;
  challenge: string;
  solution: string;
  highlight: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    address: "304 Barondale Drive",
    listed: "$1,450,000",
    sold: "$1,700,000",
    offers: 28,
    challenge: "135+ showings risked buyer fatigue. Agents needed confidence their offer could win.",
    solution: "Gave every agent hope with transparent communication. Managed 3D tour, drone, pro photos. Client self-staged beautifully.",
    highlight: "Far exceeded price expectations with 28 offers",
    image: "barondale"
  },
  {
    address: "63 Constance Avenue",
    listed: "$1,298,000",
    sold: "$2,300,000",
    offers: 41,
    challenge: "4-decade family estate. Required clearing entire home before marketing could begin.",
    solution: "Arranged 3 trucks for removal. Pro photos and floorplan. Generated 100 people per open house creating massive competition.",
    highlight: "$1 million over asking with 41 offers",
    image: "constance"
  },
  {
    address: "185 Roehampton Ave #1405",
    listed: "$570,000",
    sold: "$617,000",
    offers: 7,
    challenge: "COVID timing, small size, occupied tenant working from home. Property couldn't show well.",
    solution: "Waited for tenant exit. Managed renovations, cleaning, pro photos. Strategic timing generated 37 showings and 7 competitive offers.",
    highlight: "Set a new record for 1-bedroom units in the building",
    image: "roehampton"
  },
  {
    address: "980 Yonge Street #208",
    listed: "$700,000",
    sold: "$760,000",
    offers: 2,
    challenge: "Low floor, no parking, bad view. Oversized 1-bed appeals to smaller buyer pool.",
    solution: "Complete staging, floorplan, pro photos. Premium presentation generated 2 offers without offer date. Strong negotiating position achieved best price.",
    highlight: "Highest sale price for a 1-bedroom in that building at the time",
    image: "yonge"
  },
  {
    address: "41 Northcote Ave",
    listed: "$2,699,000",
    sold: "$2,600,000",
    offers: 1,
    challenge: "Luxury property in winter turning into COVID. 7-month listing requiring multiple price adjustments.",
    solution: "Highest-level presentation. Managed renovations, electrical, window cleaning, staging, 3D tour, photos, floorplans. Patience and premium approach secured sale.",
    highlight: "Patience and premium presentation in non-luxury neighborhood",
    image: "northcote"
  },
  {
    address: "2212 Lake Shore Blvd #1808",
    listed: "$650,000",
    sold: "$650,000",
    offers: 2,
    challenge: "Pandemic timing. Multiple competing units listed same week created immediate local competition.",
    solution: "Full staging, photography, 3D tour. Strategic price adjustment post-competition immediately generated 2 offers securing quick sale despite challenges.",
    highlight: "Quick sale despite intense local competition",
    image: "lakeshore"
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
              How I Get Top Dollar: 6 Recent Sales
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic pricing and marketing creating exceptional outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => {
              // Calculate percentage over asking
              const listedPrice = parseFloat(study.listed.replace(/[$,]/g, ''));
              const soldPrice = parseFloat(study.sold.replace(/[$,]/g, ''));
              const percentageOfAsking = Math.round((soldPrice / listedPrice) * 100);
              const isOverAsking = percentageOfAsking > 100;
              
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Property Image Placeholder with Price Overlay */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                      <div className="text-center">
                        <div className="text-sm mb-2">Property Image</div>
                        <div className="text-xs text-slate-600">{study.image}</div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {study.sold} SOLD
                    </div>
                    {isOverAsking && (
                      <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {percentageOfAsking}% of Asking
                      </div>
                    )}
                  </div>

                  {/* Property Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {study.address}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-slate-300">
                        <span>Listed: {study.listed}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {study.offers} Offers
                        </span>
                      </div>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                      <div className="text-xs text-emerald-400 font-semibold mb-1">THE RESULT</div>
                      <div className="text-sm text-white font-semibold">{study.highlight}</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-amber-400" />
                        <h4 className="font-bold text-white text-sm">The Challenge</h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <h4 className="font-bold text-white text-sm">My Strategy</h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Every property sale tells a story of problem-solving, strategy, and dedication. 
              Want to see how we can maximize your property&apos;s potential?
            </p>
            <button
              onClick={() => {
                const valuationSection = document.getElementById("valuation");
                if (valuationSection) {
                  valuationSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Your Free Home Valuation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

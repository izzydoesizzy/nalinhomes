import { TrendingUp, Users, AlertCircle, CheckCircle } from "lucide-react";

interface CaseStudy {
  address: string;
  listed: string;
  sold: string;
  offers: number;
  image?: string;
  challenge: string;
  solution: string;
  highlight: string;
}

const caseStudies: CaseStudy[] = [
  {
    address: "304 Barondale Drive",
    listed: "$1,450,000",
    sold: "$1,700,000",
    offers: 28,
    challenge: "Managing agent expectations and encouraging them to tell their clients to offer on a property with over 135+ showings. Buyers can get discouraged when a property is highly active.",
    solution: "This architect-designed home received tons of interest. I had to give buyer agents hope that their client could bring the winning offer. We managed cleaning, 3D Matterport Tour, drone photography, and professional photography. The client staged the home themselves.",
    highlight: "Far exceeded price expectations with 28 offers",
  },
  {
    address: "63 Constance Avenue",
    listed: "$1,298,000",
    sold: "$2,300,000",
    offers: 41,
    challenge: "Preparing a home that's been in the family for over 4 decades. This was an estate sale and we had to arrange for 3 trucks to remove all of the family's belongings.",
    solution: "We managed professional photography and a floorplan. At the open houses we had approximately 100 people come through each day!",
    highlight: "$1 million over asking with 41 offers",
  },
  {
    address: "185 Roehampton Ave #1405",
    listed: "$570,000",
    sold: "$617,000",
    offers: 7,
    challenge: "Timing. The client wanted to list in March 2020, but COVID derailed that plan. The small size and tenant working from home meant it would not present well.",
    solution: "We waited until COVID subsided and the tenant vacated. I managed minor renovations, cleaning, and professional photography. We had 37 showings and generated 7 offers.",
    highlight: "Set a new record for 1-bedroom units in the building",
  },
  {
    address: "980 Yonge Street #208",
    listed: "$700,000",
    sold: "$760,000",
    offers: 2,
    challenge: "Selling a unit on a low floor, with no parking, and a bad view. It was an oversized one bedroom which appeals to a smaller demographic.",
    solution: "We managed complete staging, floorplan and professional photography. The unit presented very well which generated two offers with no offer date, putting us in a solid negotiating position.",
    highlight: "Highest sale price for a 1-bedroom in that building at the time",
  },
  {
    address: "41 Northcote Ave",
    listed: "$2,699,000",
    sold: "$2,600,000",
    offers: 1,
    challenge: "Selling a luxury property during winter, which eventually turned into the COVID-19 pandemic. Listed for 7 months with multiple price adjustments needed.",
    solution: "The home had to be presented at the highest level. We managed minor renovations, electrical work, window cleaning, staging, 3D Matterport Tour, professional photography, and floorplans.",
    highlight: "Patience and premium presentation in non-luxury neighborhood",
  },
  {
    address: "2212 Lake Shore Blvd #1808",
    listed: "$650,000",
    sold: "$650,000",
    offers: 2,
    challenge: "Selling a condo during a pandemic with multiple competing units in the building. Within 1 week of listing, several other units were also listed, creating immediate competition.",
    solution: "Complete staging, photography and 3D Matterport tour. After a strategic price adjustment due to additional competition, it immediately generated 2 offers.",
    highlight: "Quick sale despite intense local competition",
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Results, Real Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every property has unique challenges. Here&apos;s how we turned obstacles into outstanding results.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-6 p-8">
                  {/* Left Column - Stats */}
                  <div className="lg:border-r border-white/10 pr-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {study.address}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Listed</div>
                        <div className="text-lg font-semibold text-white">{study.listed}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Sold</div>
                        <div className="text-2xl font-bold text-accent">{study.sold}</div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-accent/20 rounded-lg p-3">
                        <Users className="h-5 w-5 text-accent" />
                        <div>
                          <div className="text-2xl font-bold text-white">{study.offers}</div>
                          <div className="text-xs text-slate-300">Offers</div>
                        </div>
                      </div>

                      <div className="bg-amber-500/20 rounded-lg p-3 border border-amber-500/30">
                        <div className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                          <div className="text-sm text-amber-100">{study.highlight}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Challenge */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <h4 className="text-lg font-bold text-white">The Challenge</h4>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Right Column - Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <h4 className="text-lg font-bold text-white">The Solution</h4>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

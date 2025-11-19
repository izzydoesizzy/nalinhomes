import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CaseStudy {
  address: string;
  listed: string;
  sold: string;
  offers: number;
  challenge: string;
  solution: string;
  percentageOfAsking?: number;
  type: "condo" | "house";
}

export const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const caseStudies: CaseStudy[] = [
    {
      address: "304 Barondale Drive",
      listed: "$1,349,000",
      sold: "$1,750,000",
      offers: 7,
      challenge: "Older home needing updates in competitive market",
      solution: "Strategic staging and targeted marketing to highlight potential",
      percentageOfAsking: 130,
      type: "house"
    },
    {
      address: "63 Constance Avenue",
      listed: "$999,000",
      sold: "$1,775,000",
      offers: 23,
      challenge: "Generating unprecedented buyer interest",
      solution: "Created buzz through exclusive previews and strategic pricing",
      percentageOfAsking: 177,
      type: "house"
    },
    {
      address: "185 Roehampton Ave #1405",
      listed: "$629,900",
      sold: "$935,000",
      offers: 10,
      challenge: "Standing out in crowded condo market",
      solution: "Professional staging and comprehensive digital marketing campaign",
      percentageOfAsking: 148,
      type: "condo"
    },
    {
      address: "980 Yonge Street #208",
      listed: "$649,000",
      sold: "$800,000",
      offers: 8,
      challenge: "Maximizing value for renovated unit",
      solution: "Highlighted premium finishes and location advantages",
      percentageOfAsking: 123,
      type: "condo"
    },
    {
      address: "41 Northcote Ave",
      listed: "$1,598,000",
      sold: "$1,925,000",
      offers: 5,
      challenge: "Premium pricing strategy in established neighborhood",
      solution: "Targeted marketing to qualified buyers and strong negotiation",
      percentageOfAsking: 120,
      type: "house"
    },
    {
      address: "2212 Lake Shore Blvd #1808",
      listed: "$529,000",
      sold: "$632,000",
      offers: 4,
      challenge: "Competing with new developments",
      solution: "Emphasized waterfront views and building amenities",
      percentageOfAsking: 119,
      type: "condo"
    },
  ];

  const filteredStudies = caseStudies.filter((study) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "over-150") return (study.percentageOfAsking || 0) > 150;
    if (activeFilter === "multiple-offers") return study.offers >= 7;
    if (activeFilter === "condos") return study.type === "condo";
    if (activeFilter === "houses") return study.type === "house";
    return true;
  });

  return (
    <section id="results" className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Recent Success Stories
            </h2>
            <p className="text-lg text-slate-200 mb-6">
              Real results from Toronto properties we've sold
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-2">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className={activeFilter === "all" ? "" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}
              >
                All Properties
              </Button>
              <Button
                variant={activeFilter === "over-150" ? "default" : "outline"}
                onClick={() => setActiveFilter("over-150")}
                className={activeFilter === "over-150" ? "" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}
              >
                Over 150% Asking
              </Button>
              <Button
                variant={activeFilter === "multiple-offers" ? "default" : "outline"}
                onClick={() => setActiveFilter("multiple-offers")}
                className={activeFilter === "multiple-offers" ? "" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}
              >
                Multiple Offers
              </Button>
              <Button
                variant={activeFilter === "condos" ? "default" : "outline"}
                onClick={() => setActiveFilter("condos")}
                className={activeFilter === "condos" ? "" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}
              >
                Condos
              </Button>
              <Button
                variant={activeFilter === "houses" ? "default" : "outline"}
                onClick={() => setActiveFilter("houses")}
                className={activeFilter === "houses" ? "" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}
              >
                Houses
              </Button>
            </div>
            <p className="text-sm text-slate-300">
              Showing {filteredStudies.length} of {caseStudies.length} properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-accent/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">{study.address}</h3>
                  {study.percentageOfAsking && study.percentageOfAsking > 150 && (
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/50">
                      {study.percentageOfAsking}%
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Listed:</span>
                    <span className="text-white font-semibold">{study.listed}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Sold:</span>
                    <span className="text-accent font-bold">{study.sold}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Offers:</span>
                    <span className="text-white font-semibold">{study.offers}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-amber-300 mb-1">The Challenge</p>
                    <p className="text-sm text-slate-200">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-300 mb-1">Our Solution</p>
                    <p className="text-sm text-slate-200">{study.solution}</p>
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

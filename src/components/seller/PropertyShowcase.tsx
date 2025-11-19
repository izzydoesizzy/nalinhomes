import { useState } from "react";
import { TrendingUp, Clock, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Property {
  id: number;
  address: string;
  status: "Sold" | "Leased";
  percentOfAsking: number;
  daysOnMarket?: number;
  description?: string;
  propertyType: string;
  neighborhood: string;
}

const properties: Property[] = [
  {
    id: 1,
    address: "502 Annette Street",
    status: "Sold",
    percentOfAsking: 145,
    daysOnMarket: 7,
    propertyType: "House",
    neighborhood: "Junction",
  },
  {
    id: 2,
    address: "20 Gladstone Ave Unit 613",
    status: "Sold",
    percentOfAsking: 130,
    daysOnMarket: 7,
    propertyType: "Condo",
    neighborhood: "Liberty Village",
  },
  {
    id: 3,
    address: "95 Maple Branch Path",
    status: "Sold",
    percentOfAsking: 127,
    daysOnMarket: 6,
    propertyType: "House",
    neighborhood: "North York",
  },
  {
    id: 4,
    address: "304 Barondale Drive",
    status: "Sold",
    percentOfAsking: 117,
    daysOnMarket: 8,
    propertyType: "House",
    neighborhood: "East York",
  },
  {
    id: 5,
    address: "2112 Queen St E Unit 2",
    status: "Sold",
    percentOfAsking: 114,
    daysOnMarket: 7,
    propertyType: "Condo",
    neighborhood: "Beaches",
  },
  {
    id: 6,
    address: "100 Harbour St Unit 4304",
    status: "Sold",
    percentOfAsking: 112,
    daysOnMarket: 4,
    propertyType: "Condo",
    neighborhood: "Harbourfront",
  },
  {
    id: 7,
    address: "185 Roehampton Ave Unit 1405",
    status: "Sold",
    percentOfAsking: 108,
    daysOnMarket: 6,
    propertyType: "Condo",
    neighborhood: "Midtown",
  },
  {
    id: 8,
    address: "96 Saint Patrick St Unit #507",
    status: "Sold",
    percentOfAsking: 101,
    daysOnMarket: 4,
    propertyType: "Condo",
    neighborhood: "Entertainment District",
  },
  {
    id: 9,
    address: "2212 Lake Shore Unit 1808",
    status: "Sold",
    percentOfAsking: 100,
    propertyType: "Condo",
    neighborhood: "Mimico",
  },
  {
    id: 10,
    address: "30 Traymore Cres",
    status: "Leased",
    percentOfAsking: 100,
    propertyType: "House",
    neighborhood: "Leaside",
  },
  {
    id: 11,
    address: "50 Halford Avenue",
    status: "Leased",
    percentOfAsking: 100,
    daysOnMarket: 4,
    propertyType: "House",
    neighborhood: "Toronto",
  },
  {
    id: 12,
    address: "51 Lower Simcoe St #201",
    status: "Sold",
    percentOfAsking: 98,
    propertyType: "Condo",
    neighborhood: "Harbourfront",
  },
  {
    id: 13,
    address: "80 John Street Unit #2604",
    status: "Sold",
    percentOfAsking: 97,
    propertyType: "Condo",
    neighborhood: "Financial District",
  },
  {
    id: 14,
    address: "61 Humbercrest Blvd",
    status: "Leased",
    percentOfAsking: 100,
    description: "Timeless elegance in Baby Point",
    propertyType: "House",
    neighborhood: "Baby Point",
  },
  {
    id: 15,
    address: "421 Bloor St E Unit 404",
    status: "Sold",
    percentOfAsking: 100,
    description: "Entry level commercial office space in a fantastic location",
    propertyType: "Commercial",
    neighborhood: "Cabbagetown",
  },
  {
    id: 16,
    address: "980 Yonge Street Unit 208",
    status: "Sold",
    percentOfAsking: 106,
    daysOnMarket: 8,
    description: "Sold for $60,000 over asking price",
    propertyType: "Commercial",
    neighborhood: "Rosedale",
  },
  {
    id: 17,
    address: "41 Northcote Avenue",
    status: "Sold",
    percentOfAsking: 100,
    description: "Purpose-built luxury home in the heart of Queen West",
    propertyType: "House",
    neighborhood: "Queen West",
  },
];

export const PropertyShowcase = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("percent");

  const filteredProperties = properties
    .filter((prop) => {
      if (statusFilter === "all") return true;
      return prop.status === statusFilter;
    })
    .sort((a, b) => {
      if (sortBy === "percent") {
        return b.percentOfAsking - a.percentOfAsking;
      }
      if (sortBy === "days" && a.daysOnMarket && b.daysOnMarket) {
        return a.daysOnMarket - b.daysOnMarket;
      }
      return 0;
    });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Recent Sales & Leases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real clients across Toronto
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="Sold">Sold Only</SelectItem>
                <SelectItem value="Leased">Leased Only</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="percent">% of Asking</SelectItem>
                <SelectItem value="days">Days on Market</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      property.status === "Sold"
                        ? "bg-accent/20 text-accent"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {property.status}
                  </div>
                  {property.percentOfAsking >= 110 && (
                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-600">
                      Premium
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {property.address}
                </h3>

                {property.description && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {property.description}
                  </p>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 mr-2 text-accent" />
                      <span>Sale Price</span>
                    </div>
                    <div className="text-lg font-bold text-accent">
                      {property.percentOfAsking}%
                    </div>
                  </div>

                  {property.daysOnMarket && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>Days on Market</span>
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {property.daysOnMarket} days
                      </div>
                    </div>
                  )}

                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{property.neighborhood}</span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Home className="h-4 w-4 mr-2" />
                    <span>{property.propertyType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => {
                const valuationSection = document.getElementById("valuation");
                if (valuationSection) {
                  valuationSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Your Free Home Valuation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

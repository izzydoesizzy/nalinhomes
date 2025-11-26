import { Card, CardContent } from "@/components/ui/card";
import { Camera, Home, Scale, DollarSign, Hammer, Truck } from "lucide-react";

export const SellerTeam = () => {
  const team = [
    {
      role: "Professional Photographer",
      description:
        "Captures the perfect angles and lighting with 1,000+ homes photographed. Creates stunning visuals that make buyers fall in love online.",
      icon: Camera,
    },
    {
      role: "Home Staging Expert",
      description:
        "Transforms spaces with strategic design that helps buyers emotionally connect. 300+ properties staged to perfection.",
      icon: Home,
    },
    {
      role: "Real Estate Lawyer",
      description:
        "Provides clear guidance through contracts and closing. Protects your interests and ensures smooth legal transitions.",
      icon: Scale,
    },
    {
      role: "Mortgage Specialist",
      description:
        "Secures optimal financing for buyers. Makes your property more accessible to qualified purchasers for faster closings.",
      icon: DollarSign,
    },
    {
      role: "Trusted Contractors",
      description:
        "Family-run tradespeople with 20-30 years of relationships. They treat your home with respect and deliver quality work on time.",
      icon: Hammer,
    },
    {
      role: "Moving & Logistics",
      description:
        "Coordinates seamless transitions from junk removal to donation services. Makes moving stress-free with reliable professionals.",
      icon: Truck,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,118,110,0.12),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full lg:max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-teal-700 dark:from-blue-400 dark:via-blue-500 dark:to-teal-400 bg-clip-text text-transparent mb-4">
              The All-Star Team Behind Your Sale
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I've assembled an "ecosystem of good humans," as one client called it. These aren't just vendors. They're experts I trust to treat you and your home with the same respect I do. I choose them because they're the best, period.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-4">
                      <member.icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{member.role}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
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

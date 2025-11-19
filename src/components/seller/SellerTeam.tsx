import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Home, Scale, DollarSign, ExternalLink } from "lucide-react";

export const SellerTeam = () => {
  const team = [
    {
      name: "Lianne Epp",
      role: "Professional Photographer",
      description:
        "Professional real estate photographer with 1000+ properties shot, specializing in capturing homes at their best with expert lighting.",
      icon: Camera,
      link: "#",
      initials: "LE",
    },
    {
      name: "Marie McGuire",
      role: "Home Staging Expert",
      description:
        "Certified home staging professional helping sellers maximize value through strategic design that appeals to buyers emotionally.",
      icon: Home,
      link: "#",
      initials: "MM",
    },
    {
      name: "Shelby Rowe Lautens",
      role: "Real Estate Lawyer",
      description:
        "Experienced real estate lawyer providing clear guidance through contracts, title transfers, and closing to protect client interests.",
      icon: Scale,
      link: "#",
      initials: "SR",
    },
    {
      name: "Lisa Elliott",
      role: "Mortgage Specialist",
      description:
        "Trusted mortgage broker securing optimal financing solutions for buyers, from first-time purchasers to seasoned investors.",
      icon: DollarSign,
      link: "#",
      initials: "LE",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our Professional Network
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted experts who help deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-24 w-24 border-2 border-accent/20">
                      <AvatarFallback className="bg-accent/10 text-accent text-xl font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <member.icon className="h-5 w-5 text-accent" />
                        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      </div>
                      <p className="text-sm font-semibold text-accent mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.description}
                      </p>
                      <a
                        href={member.link}
                        className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                      >
                        Learn more
                        <ExternalLink className="h-3 w-3" />
                      </a>
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

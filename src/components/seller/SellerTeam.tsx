import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Home, Scale, DollarSign, ExternalLink } from "lucide-react";

export const SellerTeam = () => {
  const team = [
    {
      name: "Lianne Epp",
      role: "Professional Photographer",
      description:
        "She's photographed every single one of my listings for 7 years. Takes up to 4 hours for $500 vs. competitors' 40 minutes for $150—it's night and day.",
      icon: Camera,
      link: "#",
      initials: "LE",
    },
    {
      name: "Marie McGuire",
      role: "Home Staging Expert",
      description:
        "Marie transforms homes with strategic design that helps buyers emotionally connect. She's staged 300+ properties with incredible attention to detail.",
      icon: Home,
      link: "#",
      initials: "MM",
    },
    {
      name: "Shelby Rowe Lautens",
      role: "Real Estate Lawyer",
      description:
        "Shelby provides clear guidance through contracts, title transfers, and closing to protect your interests every step of the way.",
      icon: Scale,
      link: "#",
      initials: "SR",
    },
    {
      name: "Lisa Elliott",
      role: "Mortgage Specialist",
      description:
        "Lisa helps buyers secure optimal financing, making your property more accessible to qualified purchasers and facilitating smooth closings.",
      icon: DollarSign,
      link: "#",
      initials: "LE",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,118,110,0.12),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-teal-700 dark:from-blue-400 dark:via-blue-500 dark:to-teal-400 bg-clip-text text-transparent mb-4">
              The All-Star Team Behind Your Sale
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I've assembled an "ecosystem of good humans," as one client called it. These aren't just vendors—they're experts I trust to treat you and your home with the same respect I do. <strong className="text-foreground">No kickbacks.</strong> I choose them because they're the best, period.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => {
              const colors = [
                { gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
                { gradient: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
                { gradient: 'from-violet-500 to-purple-500', bg: 'bg-violet-50 dark:bg-violet-950/30' },
                { gradient: 'from-amber-500 to-orange-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
              ];
              const color = colors[index % colors.length];
              
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-20 rounded-full blur-xl`}></div>
                        <Avatar className="h-24 w-24 border-2 border-accent/20 relative z-10">
                          <AvatarFallback className={`${color.bg} text-accent text-xl font-bold`}>
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <member.icon className="h-5 w-5 text-accent" />
                          <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                        </div>
                        <p className="text-sm font-semibold text-accent mb-3">{member.role}</p>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {member.description}
                        </p>
                        <a
                          href={member.link}
                          className="inline-flex items-center gap-1 text-sm text-accent hover:underline font-medium"
                        >
                          Learn more
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

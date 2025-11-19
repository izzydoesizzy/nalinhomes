import { Camera, Sparkles, Scale, ClipboardCheck } from "lucide-react";

export const ProfessionalTeam = () => {
  const team = [
    {
      icon: Camera,
      name: "Lianne Gesior",
      role: "Professional Photographer",
      description: "The best photographer I've seen in 10+ years. Lianne captures your home in its best light with stunning professional photography and drone footage.",
      link: "Instagram",
    },
    {
      icon: Sparkles,
      name: "Marie Whitaker",
      role: "Professional Stager",
      company: "Simply Abode",
      description: "Expert staging that transforms properties and maximizes appeal to buyers. Marie's design expertise ensures your home presents flawlessly.",
      link: "Website",
    },
    {
      icon: Scale,
      name: "Shelby Fenster",
      role: "Real Estate Lawyer",
      description: "The most responsive and detail-oriented lawyer I've ever worked with. Shelby ensures smooth, stress-free closings every time.",
      link: "Website",
    },
    {
      icon: ClipboardCheck,
      name: "Lisa Simkins",
      role: "Home Inspector",
      company: "Superior Home Inspectors",
      description: "Thorough pre-listing inspections that identify any issues before they become problems, giving buyers confidence in your property.",
      link: "Website",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vetted Professional Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access to the best professionals in the business—hand-selected for their expertise and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <member.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <div className="text-primary font-semibold mb-1">
                      {member.role}
                    </div>
                    {member.company && (
                      <div className="text-sm text-muted-foreground mb-3">
                        {member.company}
                      </div>
                    )}
                    <p className="text-muted-foreground text-sm mb-3">
                      {member.description}
                    </p>
                    <div className="text-sm text-accent hover:text-accent/80 cursor-pointer">
                      View {member.link} →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every member of this professional team has been carefully vetted and selected for their 
              excellence. You&apos;ll have direct access to these trusted professionals throughout your 
              selling journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

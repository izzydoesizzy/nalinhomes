import { FileText, Home, Camera, TrendingUp, Users, CheckCircle } from "lucide-react";

export const SellingProcess = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Initial Consultation",
      description:
        "Discuss your goals, timeline, and what you want from sale",
    },
    {
      icon: Home,
      number: "02",
      title: "Property Assessment",
      description:
        "Market analysis and property evaluation to determine optimal pricing strategy",
    },
    {
      icon: Camera,
      number: "03",
      title: "Preparation & Marketing",
      description:
        "Professional photography, staging consultation, and multi-channel marketing campaign launch",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Strategic Pricing",
      description:
        "Data-driven pricing strategy designed to generate competitive offers and wars",
    },
    {
      icon: Users,
      number: "05",
      title: "Showings & Offers",
      description:
        "Professional showings and expert negotiation to secure best possible terms",
    },
    {
      icon: CheckCircle,
      number: "06",
      title: "Closing & Beyond",
      description:
        "Seamless coordination through closing and continued support after your sale",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Selling Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven six-step approach to maximize your sale price and minimize stress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative"
              >
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mt-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

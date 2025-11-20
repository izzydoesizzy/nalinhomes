import { DollarSign, Users, Heart, TrendingUp } from "lucide-react";
import nalinPhoto from "@/assets/nalin-photo.png";

export const AboutNalin = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="w-full lg:max-w-[80%] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
                <img
                  src={nalinPhoto}
                  alt="Nalin Sharma - Toronto Real Estate Broker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold">
                  <span>✓</span> Licensed Real Estate Broker
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Hi, I'm Nalin Sharma
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="text-xl text-foreground font-semibold">
                  Selling your home doesn't have to be overwhelming.
                </p>
                <p>
                  My approach is warm, hands-on, and truly done-for-you. I take care of every detail - from preparation and staging to marketing and negotiations - so you can focus on your next chapter.
                </p>
                <p>
                  I've spent 10+ years assembling an "ecosystem of good humans" - trusted stagers, photographers, cleaners, and contractors who treat you and your home with respect. <strong className="text-foreground">I cover the upfront costs</strong> because I believe in investing in your success.
                </p>
                
                {/* Family Legacy */}
                <div className="bg-accent/5 border-l-4 border-accent pl-4 py-3 rounded">
                  <p className="text-foreground italic">
                    Still a family business at heart - my father's been in real estate since 1973. 50 years of combined experience serving Toronto families.
                  </p>
                </div>
              </div>

              {/* Key Stats Badges */}
              <div className="flex flex-wrap gap-3 pt-6">
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-accent transition-colors">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">99%</span>
                    <span className="text-xs text-muted-foreground ml-1">Word of Mouth</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-accent transition-colors">
                  <Heart className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">3 Generations</span>
                    <span className="text-xs text-muted-foreground ml-1">Client Relationships</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-accent transition-colors">
                  <DollarSign className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">I Pay</span>
                    <span className="text-xs text-muted-foreground ml-1">Upfront Costs</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-accent transition-colors">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">177%</span>
                    <span className="text-xs text-muted-foreground ml-1">Record Sale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Star, Users, Award, TrendingUp, MessageCircle } from "lucide-react";
import nalinPhoto from "@/assets/nalin-photo.png";

export const AboutNalin = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Photo and Credentials */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={nalinPhoto}
                  alt="Nalin Sharma - Real Estate Broker"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    Licensed Real Estate Broker
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-amber-600 fill-amber-600" />
                  <h3 className="font-bold text-amber-900">Master Negotiation Expert</h3>
                </div>
                <p className="text-sm text-amber-800">
                  48 hours of negotiation training based on models of the Harvard Negotiation Program
                </p>
              </div>
            </div>

            {/* Right Column - About Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                  Why Work With Nalin Sharma?
                </h2>
                <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                We're a small, experienced team with <span className="text-accent font-bold">50 years of combined experience</span> in Toronto real estate. We specialize in downtown core & West End properties.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand your needs first, then deliver results. You'll be treated professionally, respectfully—like family.
              </p>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6">
                <p className="text-lg text-foreground italic">
                  "Why are you selling? Where are you living next? What's most important to you in a realtor?"
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  These are the questions we start with—because understanding you is how we deliver exceptional results.
                </p>
              </div>

              {/* Key Achievements - Compact Badges */}
              <div className="flex flex-wrap gap-3 pt-6">
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">177%</span>
                    <span className="text-xs text-muted-foreground ml-1">Record Sale</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <Award className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">23 Offers</span>
                    <span className="text-xs text-muted-foreground ml-1">Single Property</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">99%</span>
                    <span className="text-xs text-muted-foreground ml-1">Referrals</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">3 Generations</span>
                    <span className="text-xs text-muted-foreground ml-1">Client Relationships</span>
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

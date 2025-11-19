import { Star } from "lucide-react";
import nalinPhoto from "@/assets/nalin-photo.png";
import videoThumbnail from "@/assets/video-thumbnail.png";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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

              {/* Video Section */}
              <div className="relative group">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                  <img 
                    src={videoThumbnail} 
                    alt="Nalin Sharma introduction video" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button 
                      size="lg" 
                      className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-20 h-20 p-0 group-hover:scale-110 transition-transform shadow-accent"
                    >
                      <Play className="h-10 w-10 ml-1" fill="currentColor" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - About Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                  The Agent Who Gets Sellers $1M+ Over Asking
                </h2>
                <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>
              </div>

              <p className="text-lg text-foreground leading-relaxed font-medium">
                In 2019, I sold 63 Constance Avenue for <span className="text-amber-600 font-bold">$2.3M</span>—<span className="text-amber-600 font-bold">$1M over asking</span> with <span className="text-accent font-bold">41 offers</span>. Not luck. Strategic pricing and Harvard-trained negotiation.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My proven system creates bidding wars that maximize your sale price.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With 98 successful transactions, 92% from referrals—people who got results and told friends.
              </p>

              {/* Key Achievements as Badges */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl p-6 border-2 border-amber-200 dark:border-amber-700">
                  <div className="text-3xl font-black text-amber-600 mb-2">177%</div>
                  <div className="text-sm font-semibold text-amber-900 dark:text-amber-100">Highest Sale Price</div>
                  <div className="text-xs text-amber-700 dark:text-amber-300 mt-1">63 Constance Ave</div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl p-6 border-2 border-accent/30">
                  <div className="text-3xl font-black text-accent mb-2">41</div>
                  <div className="text-sm font-semibold text-foreground">Offers Generated</div>
                  <div className="text-xs text-muted-foreground mt-1">Record property sale</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-700">
                  <div className="text-3xl font-black text-emerald-600 mb-2">92%</div>
                  <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">Referral Rate</div>
                  <div className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">From 98 transactions</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl p-6 border-2 border-primary/30">
                  <div className="text-3xl font-black text-primary mb-2">Top 3%</div>
                  <div className="text-sm font-semibold text-foreground">Diamond Status</div>
                  <div className="text-xs text-muted-foreground mt-1">Of 18,000 agents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

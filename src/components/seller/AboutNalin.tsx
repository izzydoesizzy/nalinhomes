import { Star } from "lucide-react";
import nalinPhoto from "@/assets/nalin-photo.png";
import videoThumbnail from "@/assets/video-thumbnail.png";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const AboutNalin = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Meet Your Selling Strategist
                </h2>
                <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                For over a decade, I've been helping Toronto homeowners achieve exceptional results when selling their properties. I understand that selling your home is one of the biggest financial decisions you'll make—and you deserve an agent who treats it that way.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach is built on strategic pricing, expert negotiation, and transparent communication. I don't just list homes—I create comprehensive marketing strategies that generate multiple offers and drive prices up.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With 92% of my business coming from referrals, my clients' success speaks for itself.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-accent mb-1">98</div>
                  <div className="text-sm text-muted-foreground">Successful Transactions</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-accent mb-1">92%</div>
                  <div className="text-sm text-muted-foreground">From Referrals</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
                  <div className="text-3xl font-bold text-amber-600 mb-1">Top 3%</div>
                  <div className="text-sm text-amber-800 dark:text-amber-300">Diamond Status Agent</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-accent mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

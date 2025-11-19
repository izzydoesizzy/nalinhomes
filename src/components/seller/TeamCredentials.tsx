import { Award, Users, TrendingUp, Handshake } from "lucide-react";

export const TeamCredentials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience You Can Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three generations of real estate excellence, working together to exceed your expectations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Team Overview */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The Sharma Team
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team consists of Nalin Sharma, Niraj Sharma (father), and Jermaine Bain. 
                Together, we combine decades of experience with cutting-edge marketing strategies 
                to deliver exceptional results for every client.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full w-2 h-2 mt-2"></div>
                  <p className="text-foreground"><strong>Niraj Sharma:</strong> In real estate since 1973, one of the most highly regarded realtors in Toronto&apos;s West End</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full w-2 h-2 mt-2"></div>
                  <p className="text-foreground"><strong>Nalin Sharma:</strong> Master Certified Negotiation Expert with 98 transactions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full w-2 h-2 mt-2"></div>
                  <p className="text-foreground"><strong>Jermaine Bain:</strong> Dedicated team member bringing fresh perspectives and energy</p>
                </div>
              </div>
            </div>

            {/* Diamond Achievement */}
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
              <Award className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Diamond Status Achievement
              </h3>
              <p className="text-muted-foreground mb-6">
                Achieved Diamond status in 2019 and 2020, placing our team in the top 3% of Royal LePage agents nationwide.
              </p>
              <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-amber-600 mb-2">Top 540</div>
                  <div className="text-muted-foreground">Out of 18,000 agents across Canada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-lg border border-border">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">92%</div>
              <div className="text-muted-foreground">From Referrals & Repeat Clients</div>
              <p className="text-sm text-muted-foreground mt-2">Of 98 transactions</p>
            </div>

            <div className="text-center p-8 bg-card rounded-lg border border-border">
              <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">48 Hours</div>
              <div className="text-muted-foreground">Negotiation Training</div>
              <p className="text-sm text-muted-foreground mt-2">Harvard-based program</p>
            </div>

            <div className="text-center p-8 bg-card rounded-lg border border-border">
              <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">50+ Years</div>
              <div className="text-muted-foreground">Combined Experience</div>
              <p className="text-sm text-muted-foreground mt-2">Since 1973</p>
            </div>
          </div>

          {/* Negotiation Training */}
          <div className="mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Master Certified Negotiation Expert</h3>
              <p className="text-slate-300 mb-6">
                Nalin has completed 48 hours of advanced negotiation training based on the Harvard Negotiation Program. 
                This high-level training translates directly into better outcomes for sellers—higher sale prices, 
                better terms, and smoother transactions.
              </p>
              <p className="text-sm text-slate-400">
                This specialized training puts you at a significant advantage, whether negotiating multiple offers 
                or navigating complex deal structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

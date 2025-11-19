import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Home, TrendingUp, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SellerCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "I'll contact you within 24 hours with your free home valuation.",
    });
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  const benefits = [
    "Custom pricing strategy to maximize your sale price",
    "Competitive market analysis showing recent comparable sales",
    "Marketing plan that creates bidding wars",
    "Free consultation ($500 value) with zero obligation",
  ];

  return (
    <section id="valuation" className="py-32 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000)",
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Get Your Free $1M+ Home Value Report
              </h2>
              <p className="text-lg text-slate-200 mb-2">
                See what your home could sell for with my proven strategy
              </p>
              <p className="text-base text-slate-300 mb-8">
                No obligation, no pressure—just real data and expert analysis.
              </p>

              {/* Urgency Banner */}
              <div className="bg-amber-500/20 border border-amber-400/50 rounded-lg p-4 mb-8">
                <div className="flex items-center gap-2 text-amber-300">
                  <span className="text-xl">⏰</span>
                  <span className="font-semibold">Limited availability: Only 3 consultations available this week</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-sm text-slate-300 mb-3 font-semibold">TRUSTED BY TORONTO SELLERS:</div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">98</div>
                    <div className="text-xs text-slate-400">Successful Sales</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">92%</div>
                    <div className="text-xs text-slate-400">Referral Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Top 3%</div>
                    <div className="text-xs text-slate-400">Diamond Agent</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold">115%</div>
                  <div className="text-sm text-slate-300">Avg. Sale</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold">6 Days</div>
                  <div className="text-sm text-slate-300">Avg. Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                  <Home className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold">16+</div>
                  <div className="text-sm text-slate-300">Properties</div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Request Your Free Valuation
              </h3>
              <p className="text-slate-600 mb-6">
                Fill out the quick form below and I'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    required
                    placeholder="123 Main St, Toronto, ON"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Get My Free Valuation
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-3">
                  No obligations. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

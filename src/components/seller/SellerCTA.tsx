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
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "I'll contact you within 24 hours with your free home valuation.",
    });
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
  };

  const benefits = [
    "Free, no-obligation home valuation",
    "Personalized marketing strategy",
    "Data-driven pricing analysis",
    "24-hour response guarantee",
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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Free Home Valuation
              </h2>
              <p className="text-xl text-slate-200 mb-8">
                Find out what your property is worth in today's market with a comprehensive analysis from an expert who consistently delivers results.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(416) 555-0123"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Property Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="123 Main Street, Toronto, ON"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your timeline, property features, or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  Get My Free Valuation
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your information is secure and will never be shared. I'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Navigation } from "@/components/Navigation";
import { SellerHero } from "@/components/seller/SellerHero";
import { ResultsDashboard } from "@/components/seller/ResultsDashboard";
import { PropertyShowcase } from "@/components/seller/PropertyShowcase";
import { MarketingStrategy } from "@/components/seller/MarketingStrategy";
import { SellingProcess } from "@/components/seller/SellingProcess";
import { PricingStrategy } from "@/components/seller/PricingStrategy";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { SellerCTA } from "@/components/seller/SellerCTA";
import { Footer } from "@/components/Footer";

const Sellers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SellerHero />
      <ResultsDashboard />
      <PropertyShowcase />
      <MarketingStrategy />
      <SellingProcess />
      <PricingStrategy />
      <Testimonials />
      <FAQ />
      <SellerCTA />
      <Footer />
    </div>
  );
};

export default Sellers;

import { Navigation } from "@/components/Navigation";
import { SellerHero } from "@/components/seller/SellerHero";
import { AboutNalin } from "@/components/seller/AboutNalin";
import { MarketingStrategy } from "@/components/seller/MarketingStrategy";
import { CaseStudies } from "@/components/seller/CaseStudies";
import { SellerCTA } from "@/components/seller/SellerCTA";
import { Footer } from "@/components/Footer";

const Sellers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SellerHero />
      <AboutNalin />
      <MarketingStrategy />
      <CaseStudies />
      <SellerCTA />
      <Footer />
    </div>
  );
};

export default Sellers;

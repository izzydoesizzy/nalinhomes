import { Navigation } from "@/components/Navigation";
import { SellerHero } from "@/components/seller/SellerHero";
import { AboutNalin } from "@/components/seller/AboutNalin";
import { SellerTestimonials } from "@/components/seller/SellerTestimonials";
import { MarketingStrategy } from "@/components/seller/MarketingStrategy";
import { MarketingExamples } from "@/components/seller/MarketingExamples";
import { SellerTeam } from "@/components/seller/SellerTeam";
import { CaseStudies } from "@/components/seller/CaseStudies";
import { SellerFAQ } from "@/components/seller/SellerFAQ";
import { SellerCTA } from "@/components/seller/SellerCTA";
import { Footer } from "@/components/Footer";

const Sellers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SellerHero />
      <AboutNalin />
      <SellerTestimonials />
      <MarketingStrategy />
      <MarketingExamples />
      <SellerTeam />
      <CaseStudies />
      <SellerFAQ />
      <SellerCTA />
      <Footer />
    </div>
  );
};

export default Sellers;

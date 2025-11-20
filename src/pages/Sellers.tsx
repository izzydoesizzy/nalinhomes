import { Navigation } from "@/components/Navigation";
import { SellerHero } from "@/components/seller/SellerHero";
import { AboutNalin } from "@/components/seller/AboutNalin";
import { StressTransformation } from "@/components/seller/StressTransformation";
import { SellingProcess } from "@/components/seller/SellingProcess";
import { PropertyShowcase } from "@/components/seller/PropertyShowcase";
import { SellerTeam } from "@/components/seller/SellerTeam";
import { WhySellersChooseMe } from "@/components/seller/WhySellersChooseMe";
import { CaseStudies } from "@/components/seller/CaseStudies";
import { SellerTestimonials } from "@/components/seller/SellerTestimonials";
import { SellerFAQ } from "@/components/seller/SellerFAQ";
import { SellerCTA } from "@/components/seller/SellerCTA";
import { Footer } from "@/components/Footer";

const Sellers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SellerHero />
      <AboutNalin />
      <StressTransformation />
      <SellingProcess />
      <PropertyShowcase />
      <SellerTeam />
      <WhySellersChooseMe />
      <CaseStudies />
      <SellerTestimonials />
      <SellerFAQ />
      <SellerCTA />
      <Footer />
    </div>
  );
};

export default Sellers;

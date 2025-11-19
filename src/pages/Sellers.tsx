import { Navigation } from "@/components/Navigation";
import { SellerHero } from "@/components/seller/SellerHero";
import { ResultsDashboard } from "@/components/seller/ResultsDashboard";
import { TeamCredentials } from "@/components/seller/TeamCredentials";
import { CaseStudies } from "@/components/seller/CaseStudies";
import { ProfessionalTeam } from "@/components/seller/ProfessionalTeam";
import { MarketingStrategy } from "@/components/seller/MarketingStrategy";
import { SellerCTA } from "@/components/seller/SellerCTA";
import { Footer } from "@/components/Footer";

const Sellers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SellerHero />
      <ResultsDashboard />
      <TeamCredentials />
      <CaseStudies />
      <ProfessionalTeam />
      <MarketingStrategy />
      <SellerCTA />
      <Footer />
    </div>
  );
};

export default Sellers;

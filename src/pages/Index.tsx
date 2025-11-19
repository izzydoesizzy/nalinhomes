import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { StressTransformation } from "@/components/StressTransformation";
import { ServiceAreas } from "@/components/ServiceAreas";
import { ProcessPhilosophy } from "@/components/ProcessPhilosophy";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <StressTransformation />
      <ProcessPhilosophy />
      <WhyChooseMe />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

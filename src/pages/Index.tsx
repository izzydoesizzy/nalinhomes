import { Hero } from "@/components/Hero";
import { AuthorityBar } from "@/components/AuthorityBar";
import { About } from "@/components/About";
import { ProcessPhilosophy } from "@/components/ProcessPhilosophy";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AuthorityBar />
      <About />
      <ProcessPhilosophy />
      <WhyChooseMe />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

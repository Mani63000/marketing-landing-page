import { Header } from "@/components/Header";
import { HeaderSection } from "@/components/HeaderSection";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Video } from "@/components/Video";
import { Partners } from "@/components/Partners";
import LeadFormModal from "@/components/LeadFormModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeaderSection />
        
        <LeadFormModal />
        <Hero />
        <Video/>
        <Services />
        <Testimonials />
        <Partners/>
        <CTA/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "@/components/HeroSection";
import ProblemWesolve from "@/components/ProblemWesolve";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import OurProducts from "@/components/OurProducts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div>
      <HeroSection />
      {/* <ProblemWesolve /> */}
      <Services />
      <HowItWorks />
      <OurProducts />
      <ContactSection />
      <Footer />
    </div>
  );
}

import HeroSection from "./hero-section";
import FeaturesSection from "./features-section";
import RobotsSection from "./robots-section";
import TestimonialsSection from "./testimonials-section";
import ProprietaryDeskSection from "./proprietary-desk-section";
import FAQSection from "./faq-section";
import CTASection from "./cta-section";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RobotsSection />
      <TestimonialsSection />
      <ProprietaryDeskSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

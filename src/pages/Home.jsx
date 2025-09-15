import ServicesSection from "../components/layout/HomeSection/Services";
import Hero from "../components/layout/HomeSection/Hero";
import AISection from "../components/layout/HomeSection/AISection";
import PythonSection from "../components/layout/HomeSection/PythonSection";
import LearningSection from "../components/layout/HomeSection/LearningSection";
import PortfolioSection from "../components/layout/HomeSection/PortfolioSection";
import ContactSection from "../components/layout/HomeSection/ContactSection";
import TrustSection from "../components/layout/HomeSection/TrustSection";


const Home = () => {
  return (
    <div>
      <Hero />
      <TrustSection/>
      <ServicesSection />
      <AISection />
      <PythonSection />
      <LearningSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Home;
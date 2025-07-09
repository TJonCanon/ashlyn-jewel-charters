import HeroSection from "./components/sections/HeroSection";
import ValuePropsSection from "./components/sections/ValuePropsSection";
import TripsSection from "./components/sections/TripsSection";
import AboutSection from "./components/sections/AboutSection";
import FAQSection from "./components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <div className="content-container">
        <ValuePropsSection />
        <TripsSection />
      </div>
      
      <AboutSection />
      
      <div className="content-container">
        <FAQSection />
      </div>
    </>
  );
}

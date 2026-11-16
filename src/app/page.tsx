import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SortingGuide from "@/components/SortingGuide";
import ImpactCalculator from "@/components/ImpactCalculator";
import HowItWorks from "@/components/HowItWorks";
import PickupMap from "@/components/PickupMap";
import EducationGrid from "@/components/EducationGrid";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="konten-utama">
        <HeroSection />
        <SortingGuide />
        <ImpactCalculator />
        <HowItWorks />
        <PickupMap />
        <EducationGrid />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

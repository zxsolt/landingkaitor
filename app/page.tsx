import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import StatsRow from "@/components/sections/StatsRow";
import Problem from "@/components/sections/Problem";
import HowWeWork from "@/components/sections/HowWeWork";
import Services from "@/components/sections/Services_v1";
import WhyKaitor from "@/components/sections/WhyKaitor";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b0a] text-[#f0f5f2] overflow-x-hidden">
      <GrainOverlay />
      <CustomCursor />
      <Navbar />
      <Hero />
      <StatsRow />
      <Problem />
      <HowWeWork />
      <Services />
      <WhyKaitor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

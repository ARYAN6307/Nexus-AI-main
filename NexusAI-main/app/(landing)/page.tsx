import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent} from "@/components/landing-content";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsDemo } from "@/components/bgbeams";
import { BentoGridDemo } from "@/components/bentogrid-demo";
const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent /> 
      <BentoGridDemo />
      <BackgroundBeamsDemo />

    </div>
  );
};

export default LandingPage;

import AboutHero from "../components/AboutHero";
import aboutImage from "../../public/imgSobre.webp";
import Divider from "../components/Divider";
import AboutDescription from "../components/AboutDescription";
import MissionVision from "../components/MissionVision";
import AboutSection from "../components/AboutSection";

const AboutPage = () => {
  return (
    <div>
      <AboutHero image={aboutImage} />
      <Divider className="mt-4 mb-8" />
      <AboutDescription />
      <MissionVision />
      <AboutSection />
    </div>
  );
};

export default AboutPage;

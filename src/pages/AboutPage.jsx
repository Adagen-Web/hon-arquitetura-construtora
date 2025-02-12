import AboutHero from "../components/AboutHero";
import aboutImage from "../../public/imgSobre.webp";
import Divider from "../components/Divider";
import AboutDescription from "../components/AboutDescription";
import MissionVision from "../components/MissionVision";
import AboutSection from "../components/AboutSection";
import CommitmentSection from "../components/CommitmentSection";
import TeamSection from "../components/TeamSection";

const AboutPage = () => {
  return (
    <div className="w-full mx-auto">
      <AboutHero image={aboutImage} />
      <Divider className="mt-4 mb-8" />
      <AboutDescription />
      <MissionVision />
      <AboutSection />
      <CommitmentSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;

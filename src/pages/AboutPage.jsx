import AboutHero from "../components/AboutHero";
import aboutImage from "../../public/imgSobre.webp";
import Divider from "../components/Divider";
import AboutDescription from "../components/AboutDescription";
import MissionVision from "../components/MissionVision";
import AboutSection from "../components/AboutSection";
import CommitmentSection from "../components/CommitmentSection";

const AboutPage = () => {
  return (
    <div className="">
      <AboutHero image={aboutImage} />
      <Divider className="mt-4 mb-8" />
      <MissionVision />
      <AboutSection />
      <CommitmentSection />
      {/* <TeamSection /> */}
    </div>
  );
};

export default AboutPage;

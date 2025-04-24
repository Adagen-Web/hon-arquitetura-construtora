import AboutHero from "../components/AboutHero";
import aboutImage from "../../public/sobre-hon-arquitetura.jpg";
import Divider from "../components/Divider";
// import MissionVision from "../components/MissionVision";
import AboutSection from "../components/AboutSection";
// import CommitmentSection from "../components/CommitmentSection";
import TeamSection from "../components/TeamSection";

const AboutPage = () => {
  return (
    <div className="">
      <AboutHero image={aboutImage} />
      <Divider className="mt-4 mb-8" />
      {/* <MissionVision /> */}
      <AboutSection />
      {/* <CommitmentSection /> */}
      <TeamSection />
    </div>
  );
};

export default AboutPage;

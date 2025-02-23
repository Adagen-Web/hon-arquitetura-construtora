import PortfolioHeader from "../components/PortfolioHeader";
import ProjectCard from "../components/ProjectCard";
import CasaC10Image from "../assets/casa-c10-03.webp";
import CasaFaroImage from "../assets/casa-del-faro.webp";
import CasaBellaImage from "../assets/casa-bella.webp";
import CasaJ10Image from "../assets/casa-j10-03.webp";
import CasaL46Image from "../assets/casa-l46.webp";
import CasaOceanImage from "../assets/casa-ocean.webp";
import CasaToigoImage from "../assets/casa-toigo.webp";

const projectsData = [
  {
    id: 1,
    name: "Bella Residencial",
    slug: "bella-residencial",
    image: CasaBellaImage,
  },
  {
    id: 2,
    name: "Casa C10",
    slug: "casa-c10",
    image: CasaC10Image,
  },
  {
    id: 3,
    name: "Casa Del Faro",
    slug: "casa-del-faro",
    image: CasaFaroImage,
  },
  {
    id: 4,
    name: "Casa J10",
    slug: "casa-j10",
    image: CasaJ10Image,
  },
  {
    id: 5,
    name: "Casa L46",
    slug: "casa-l46",
    image: CasaL46Image,
  },
  {
    id: 6,
    name: "Casa Ocean",
    slug: "casa-ocean",
    image: CasaOceanImage,
  },
  {
    id: 7,
    name: "Casa Toigo",
    slug: "casa-toigo",
    image: CasaToigoImage,
  },
];

const PortfolioPage = () => {

  return (
    <div className="">
      <PortfolioHeader />
      <ProjectCard projects={projectsData} />
    </div>
  );
};

export default PortfolioPage;

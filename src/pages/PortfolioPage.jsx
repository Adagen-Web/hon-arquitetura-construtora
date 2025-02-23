import PortfolioHeader from "../components/PortfolioHeader";
import ProjectCard from "../components/ProjectCard";
import CasaC10Image from "../assets/casa-c10-03.webp";
import CasaFaroImage from "../assets/casa-del-faro.webp";
import CasaBellaImage from "../assets/casa-bella.webp";
import CasaJ10Image from "../assets/casa-j10-03.webp";
import CasaL46Image from "../assets/casa-l46.webp";
import CasaOceanImage from "../assets/casa-ocean.webp";

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
    name: "Escritório Moderno",
    slug: "escritorio-moderno",
    image: "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
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

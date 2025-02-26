import PortfolioHeader from "../components/PortfolioHeader";
import ProjectCard from "../components/ProjectCard";
import CasaC10Image from "../assets/casa-c10-04.webp";
import CasaFaroImage from "../assets/casa-del-faro.webp";
import CasaBellaImage from "../assets/casa-bella03.webp";
import CasaJ10Image from "../assets/casa-j10-01.webp";
import CasaL46Image from "../assets/casa-l46.webp";
import CasaOceanImage from "../assets/casa-ocean.webp";
import CasaToigoImage from "../assets/casa-toigo.webp";
import CasaTonelloImage from "../assets/casa-tonello-01.webp";
import CasaGeoImage from "../assets/casa-geo-02.webp";
import CasaGiovanellaImage from "../assets/casa-giovanella.webp";
import CasaRioImage from "../assets/casa-rio-01.webp";
import CasaRivaImage from "../assets/casa-riva.webp";

export const projectsDataPortfolio = [
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
  {
    id: 8,
    name: "Casa TonelLo",
    slug: "casa-tonello",
    image: CasaTonelloImage,
  },
  {
    id: 9,
    name: "Casa Geo",
    slug: "casa-geo",
    image: CasaGeoImage,
  },
  {
    id: 10,
    name: "Casa Giovanella",
    slug: "casa-giovanella",
    image: CasaGiovanellaImage,
  },
  {
    id: 11,
    name: "Casa Rio",
    slug: "casa-rio",
    image: CasaRioImage,
  },
  {
    id: 12,
    name: "Casa Riva Del Mare",
    slug: "casa-riva-del-mare",
    image: CasaRivaImage,
  },
];

const PortfolioPage = () => {

  return (
    <div className="mb-10">
      <PortfolioHeader />
      <ProjectCard projects={projectsDataPortfolio} isPortfolioHome={false} />
    </div>
  );
};

export default PortfolioPage;

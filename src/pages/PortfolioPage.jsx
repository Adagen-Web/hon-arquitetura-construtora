import PortfolioHeader from "../components/PortfolioHeader";
import ProjectCard from "../components/ProjectCard";
import CasaC10Image from "../assets/casa-c10-04.webp";
import CasaFaroImage from "../assets/casa-del-faro.webp";
import CasaBellaImage from "../assets/casa-bella05.webp";
import CasaJ10Image from "../assets/casa-j10-01.webp";
import CasaL46Image from "../assets/casa-l46.webp";
import CasaOceanImage from "../assets/casa-ocean.webp";
import CasaToigoImage from "../assets/casa-toigo.webp";
import CasaTonelloImage from "../assets/casa-tonello-01.webp";
import CasaGeoImage from "../assets/casa-geo-02.webp";
import CasaGiovanellaImage from "../assets/casa-giovanella.webp";
import CasaRioImage from "../assets/casa-rio-01.webp";
import CasaRivaImage from "../assets/casa-riva.webp";
import CasaD02 from "../assets/casa-d02.jpg";
import CasaVarandas from "../assets/varandas.jpg"; 
import CasaLaVista from "../assets/lavista.jpg";
import CasaPontal from "../assets/pontal.jpg"; 

export const projectsDataPortfolio = [
  {
    id: 1,
    name: "Varandas",
    slug: "varandas",
    image: CasaVarandas,
  },
  {
    id: 2,
    name: "Casa Rio",
    slug: "casa-rio",
    image: CasaRioImage,
  },
  {
    id: 3,
    name: "Casa C10",
    slug: "casa-c10",
    image: CasaC10Image,
  },
  {
    id: 4,
    name: "Casa D02",
    slug: "casa-d02",
    image: CasaD02,
  },
  {
    id: 5,
    name: "Casa Riva Del Mare",
    slug: "casa-riva-del-mare",
    image: CasaRivaImage,
  },
  {
    id: 6,
    name: "Bella Residencial",
    slug: "bella-residencial",
    image: CasaBellaImage,
  },
  {
    id: 7,
    name: "Casa Ocean",
    slug: "casa-ocean",
    image: CasaOceanImage,
  },
  {
    id: 8,
    name: "Casa Del Faro",
    slug: "casa-del-faro",
    image: CasaFaroImage,
  },
  {
    id: 9,
    name: "Casa L46",
    slug: "casa-l46",
    image: CasaL46Image,
  },
  {
    id: 10,
    name: "Casa Geo 01",
    slug: "casa-geo",
    image: CasaGeoImage,
  },
  {
    id: 11,
    name: "La Vista",
    slug: "la-vista",
    image: CasaLaVista,
  },
  {
    id: 12,
    name: "Pontal 2317",
    slug: "pontal",
    image: CasaPontal,
  },
  {
    id: 13,
    name: "Casa Giovanella",
    slug: "casa-giovanella",
    image: CasaGiovanellaImage,
  },
  {
    id: 14,
    name: "Casa Tonello",
    slug: "casa-tonello",
    image: CasaTonelloImage,
  },
  {
    id: 15,
    name: "Casa Toigo",
    slug: "casa-toigo",
    image: CasaToigoImage,
  },
  {
    id: 16,
    name: "Casa J10",
    slug: "casa-j10",
    image: CasaJ10Image,
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

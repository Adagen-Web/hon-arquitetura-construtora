import CasaC10Image from "../assets/CASA-C10/webp/03.webp";
import CasaC10Image1 from "../assets/CASA-C10/webp/01.webp";
import CasaC10Image2 from "../assets/CASA-C10/webp/02.webp";
import CasaC10Image3 from "../assets/CASA-C10/webp/04.webp";

const projectsData = [
  {
    id: 1,
    slug: "casa-c10",
    name: "Casa C10",
    year: 2023,
    size: 211,
    location: "Torres - RS",
    image: CasaC10Image, // Imagem principal
    secondaryImage: CasaC10Image1, // Imagem lateral
    gallery: [
      CasaC10Image,
      CasaC10Image1,
      CasaC10Image2,
      CasaC10Image3
    ]
  },
  {
    id: 2,
    slug: "casa-rio",
    name: "Casa Rio",
    year: 2023,
    size: 300,
    location: "Torres - RS",
    image: "/images/casa-rio/main.jpg",
    secondaryImage: "/images/casa-rio/secondary.jpg",
    gallery: [
      "/images/casa-rio/1.jpg",
      "/images/casa-rio/2.jpg",
      "/images/casa-rio/3.jpg"
    ]
  }
];

export default projectsData;

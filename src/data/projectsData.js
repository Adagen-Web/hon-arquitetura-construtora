import CasaC10Image from "../assets/casa-c10-03.webp";
import CasaC10Image1 from "../assets/casa-c10-01.webp";
import CasaC10Image2 from "../assets/casa-c10-02.webp";
import CasaC10Image3 from "../assets/casa-c10-04.webp";

import CasaFaroImage from "../assets/casa-del-faro.webp";
import CasaFaroImage1 from "../assets/casa-del-faro01.webp";
import CasaFaroImage2 from "../assets/casa-del-faro02.webp";
import CasaFaroImage3 from "../assets/casa-del-faro03.webp";
import CasaFaroImage4 from "../assets/casa-del-faro04.webp";
import CasaFaroImage6 from "../assets/casa-del-faro06.webp";

import CasaBellaImage from "../assets/casa-bella.webp";
import CasaBellaImage1 from "../assets/casa-bella01.webp";
import CasaBellaImage2 from "../assets/casa-bella02.webp";
import CasaBellaImage3 from "../assets/casa-bella03.webp";
import CasaBellaImage4 from "../assets/casa-bella04.webp";
import CasaBellaImage5 from "../assets/casa-bella05.webp";

import CasaJ10Image from "../assets/casa-j10.webp";
import CasaJ10Image1 from "../assets/casa-j10-01.webp";
import CasaJ10Image2 from "../assets/casa-j10-02.webp";
import CasaJ10Image3 from "../assets/casa-j10-03.webp";
import CasaJ10Image4 from "../assets/casa-j10-04.webp";
import CasaJ10Image5 from "../assets/casa-j10-05.webp";
import CasaJ10Image6 from "../assets/casa-j10-06.webp";

import CasaL46Image from "../assets/casa-l46.webp";
import CasaL46Image1 from "../assets/casa-l46-01.webp";
import CasaL46Image2 from "../assets/casa-l46-02.webp";
import CasaL46Image3 from "../assets/casa-l46-03.webp";
import CasaL46Image4 from "../assets/casa-l46-04.webp";

import CasaOceanImage from "../assets/casa-ocean.webp";
import CasaOceanImage1 from "../assets/casa-ocean-01.webp";
import CasaOceanImage2 from "../assets/casa-ocean-02.webp";
import CasaOceanImage3 from "../assets/casa-ocean-03.webp";
import CasaOceanImage4 from "../assets/casa-ocean-04.webp";

import CasaToigoImage from "../assets/casa-toigo.webp";
import CasaToigoImage1 from "../assets/casa-toigo-01.webp";
import CasaToigoImage2 from "../assets/casa-toigo-02.webp";
import CasaToigoImage3 from "../assets/casa-toigo-03.webp";
import CasaToigoImage4 from "../assets/casa-toigo-04.webp";
import CasaToigoImage5 from "../assets/casa-toigo-05.webp";

const projectsData = [
  {
    id: 1,
    slug: "bella-residencial",
    name: "Bella Residencial",
    year: 2021,
    size: 360,
    location: "Torres - RS",
    image: CasaBellaImage, // Imagem principal
    secondaryImage: CasaBellaImage1, // Imagem lateral
    gallery: [
      CasaBellaImage,
      CasaBellaImage1,
      CasaBellaImage2,
      CasaBellaImage3,
      CasaBellaImage4,
      CasaBellaImage5
    ]
  },
  {
    id: 2,
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
    id: 3,
    slug: "casa-del-faro",
    name: "Casa Del Faro",
    year: 2024,
    size: 300,
    location: "Torres - RS",
    image: CasaFaroImage,
    secondaryImage: CasaFaroImage1,
    gallery: [
      CasaFaroImage2,
      CasaFaroImage3,
      CasaFaroImage4,
      CasaFaroImage6
    ]
  },
  {
    id: 4,
    slug: "casa-j10",
    name: "Casa J10",
    year: 2022,
    size: 188.78,
    location: "Torres - RS",
    image: CasaJ10Image,
    secondaryImage: CasaJ10Image1,
    gallery: [
      CasaJ10Image2,
      CasaJ10Image3,
      CasaJ10Image4,
      CasaJ10Image5,
      CasaJ10Image6,
      CasaJ10Image
    ]
  },
  {
    id: 5,
    slug: "casa-l46",
    name: "Casa L46",
    year: 2023,
    size: 258.26,
    location: "Torres - RS",
    image: CasaL46Image,
    secondaryImage: CasaL46Image1,
    gallery: [
      CasaL46Image1,
      CasaL46Image2,
      CasaL46Image3,
      CasaL46Image4
    ]
  },
  {
    id: 6,
    slug: "casa-ocean",
    name: "Casa Ocean",
    year: 2023,
    size: 430,
    location: "Torres - RS",
    image: CasaOceanImage,
    secondaryImage: CasaOceanImage1,
    gallery: [
      CasaOceanImage1,
      CasaOceanImage2,
      CasaOceanImage3,
      CasaOceanImage4,
    ]
  },
  {
    id: 7,
    slug: "casa-toigo",
    name: "Casa Toigo",
    year: 2020,
    size: 337.17,
    location: "Torres - RS",
    image: CasaToigoImage,
    secondaryImage: CasaToigoImage1,
    gallery: [
      CasaToigoImage2,
      CasaToigoImage3,
      CasaToigoImage4,
      CasaToigoImage5,
    ]
  },
];

export default projectsData;

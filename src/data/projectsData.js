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

import CasaTonelloImage from "../assets/casa-tonello.webp";
import CasaTonelloImage1 from "../assets/casa-tonello-01.webp";
import CasaTonelloImage2 from "../assets/casa-tonello-02.webp";
import CasaTonelloImage3 from "../assets/casa-tonello-03.webp";
import CasaTonelloImage4 from "../assets/casa-tonello-04.webp";
import CasaTonelloImage5 from "../assets/casa-tonello-05.webp";

import CasaGeoImage from "../assets/casa-geo.webp";
import CasaGeoImage1 from "../assets/casa-geo-01.webp";
import CasaGeoImage2 from "../assets/casa-geo-02.webp";
import CasaGeoImage3 from "../assets/casa-geo-03.webp";
import CasaGeoImage4 from "../assets/casa-geo-04.webp";
import CasaGeoImage5 from "../assets/casa-geo-05.webp";

import CasaGiovanellaImage from "../assets/casa-giovanella.webp";
import CasaGiovanellaImage1 from "../assets/casa-giovanella-01.webp";
import CasaGiovanellaImage2 from "../assets/casa-giovanella-02.webp";
import CasaGiovanellaImage3 from "../assets/casa-giovanella-03.webp";
import CasaGiovanellaImage4 from "../assets/casa-giovanella-04.webp";

import CasaRioImage from "../assets/casa-rio.webp";
import CasaRioImage1 from "../assets/casa-rio-01.webp";
import CasaRioImage2 from "../assets/casa-rio-02.webp";
import CasaRioImage3 from "../assets/casa-rio-03.webp";
import CasaRioImage4 from "../assets/casa-rio-04.webp";
import CasaRioImage5 from "../assets/casa-rio-05.webp";
import CasaRioImage6 from "../assets/casa-rio-06.webp";
import CasaRioImage7 from "../assets/casa-rio-07.webp";
import CasaRioImage8 from "../assets/casa-rio-08.webp";

import CasaRivaImage from "../assets/casa-riva.webp";
import CasaRivaImage2 from "../assets/casa-riva-02.webp";
import CasaRivaImage3 from "../assets/casa-riva-03.webp";
import CasaRivaImage4 from "../assets/casa-riva-04.webp";
import CasaRivaImage5 from "../assets/casa-riva-05.webp";
import CasaRivaImage6 from "../assets/casa-riva-06.webp";
import CasaRivaImage7 from "../assets/casa-riva-07.webp";
import CasaRivaImage8 from "../assets/casa-riva-08.webp";
import CasaRivaImage9 from "../assets/casa-riva-09.webp";
import CasaRivaImage10 from "../assets/casa-riva-10.webp";
import CasaRivaImage11 from "../assets/casa-riva-11.webp";

const projectsData = [
  {
    id: 1,
    slug: "bella-residencial",
    name: "Bella Residencial",
    year: 2021,
    size: 360,
    location: "Torres - RS",
    image: CasaBellaImage5, // Imagem principal
    secondaryImage: CasaBellaImage5, // Imagem lateral
    gallery: [
      CasaBellaImage1,
      CasaBellaImage3,
      CasaBellaImage5,
      CasaBellaImage4
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
      CasaOceanImage4,
      CasaOceanImage2,
      CasaOceanImage1,
      CasaOceanImage3,
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
      CasaToigoImage3,
      CasaToigoImage5,
      CasaToigoImage2,
      CasaToigoImage4,
    ]
  },
  {
    id: 8,
    slug: "casa-tonello",
    name: "Casa Tonello",
    year: 2020,
    size: 291.02,
    location: "Torres - RS",
    image: CasaTonelloImage,
    secondaryImage: CasaTonelloImage1,
    gallery: [
      CasaTonelloImage3,
      CasaTonelloImage2,
      CasaTonelloImage5,
      CasaTonelloImage4,
    ]
  },
  {
    id: 9,
    slug: "casa-geo",
    name: "Casa Geo",
    year: 2021,
    size: 182.41,
    location: "Torres - RS",
    image: CasaGeoImage,
    secondaryImage: CasaGeoImage1,
    gallery: [
      CasaGeoImage4,
      CasaGeoImage2,
      CasaGeoImage3,
      CasaGeoImage5,
    ]
  },
  {
    id: 10,
    slug: "casa-giovanella",
    name: "Casa Giovanella",
    year: 2021,
    size: 199.55,
    location: "Torres - RS",
    image: CasaGiovanellaImage,
    secondaryImage: CasaGiovanellaImage1,
    gallery: [
      CasaGiovanellaImage1,
      CasaGiovanellaImage2,
      CasaGiovanellaImage3,
      CasaGiovanellaImage4,
    ]
  },
  {
    id: 11,
    slug: "casa-rio",
    name: "Casa Rio",
    year: 2023,
    size: 211,
    location: "Torres - RS",
    image: CasaRioImage2,
    secondaryImage: CasaRioImage1,
    gallery: [
      CasaRioImage2,
      CasaRioImage4,
      CasaRioImage3,
      CasaRioImage7,
      CasaRioImage8,
      CasaRioImage5,
      CasaRioImage6,
    ]
  },
  {
    id: 12,
    slug: "casa-riva-del-mare",
    name: "Casa Riva Del Mare",
    year: 2022,
    size: 798.47,
    location: "Torres - RS",
    image: CasaRivaImage,
    secondaryImage: CasaRivaImage2,
    gallery: [
      CasaRivaImage11,
      CasaRivaImage10,
      CasaRivaImage8,
      CasaRivaImage7,
      CasaRivaImage4,
      CasaRivaImage6,
      CasaRivaImage3,
      CasaRivaImage5,
      CasaRivaImage9,
      CasaRivaImage2,
    ]
  },
];

export default projectsData;

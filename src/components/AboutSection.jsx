import valuesImg from "../../public/imgSobre2.webp"; // Substitua pela imagem correta
import AboutImage from "./AboutImage";
import AboutAccordion from "./AboutAccordion";

const AboutSection = () => {
  return (
    <section className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-8 sm:px-16 py-16 gap-8">
      <AboutImage imageSrc={valuesImg} />
      <AboutAccordion />
    </section>
  );
};

export default AboutSection;

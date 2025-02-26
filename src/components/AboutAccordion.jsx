import { useState } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

const valuesData = [
  {
    title: "Originalidade",
    content:
      "A capacidade de criar soluções únicas e inovadoras que se destaquem no mercado e reflitam a identidade dos clientes.",
  },
  {
    title: "Qualidade",
    content: "Compromisso com a excelência em todos os aspectos do projeto, desde o design até a execução, garantindo durabilidade e estética."
  },
  {
    title: "Sustentabilidade",
    content: "Dedicação a práticas que respeitam o meio ambiente, utilizando materiais e técnicas que minimizam o impacto ecológico e promovem a eficiência energética."
  },
  {
    title: "Personalização",
    content: "A habilidade de adaptar cada projeto às necessidades, desejos e estilo de vida dos clientes, criando espaços que realmente ressoem com sua essência."
  },
  {
    title: "Experiência do Cliente",
    content: "Foco em proporcionar uma experiência positiva ao cliente, desde o primeiro contato até a entrega do projeto, mantendo uma comunicação clara e transparente."
  },
  {
    title: "Criatividade",
    content: "Estímulo à inovação e à exploração de novas ideias, buscando soluções que desafiam o convencional e oferecem um design diferenciado."
  },
  {
    title: "Colaboração",
    content: "Valorização do trabalho em equipe, tanto internamente quanto com clientes e parceiros, reconhecendo que as melhores soluções surgem da troca de ideias e experiências."
  },
  {
    title: "Atemporalidade",
    content: "Criação de projetos que não são apenas modernos, mas que também resistem ao teste do tempo, mantendo sua relevância e beleza ao longo dos anos."
  },
];

const AboutAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full sm:w-1/2 max-w-[600px]">
      {/* Título Valores com mais espaçamento */}
      <h2 className="text-3xl font-yantramanav font-normal text-[#313131] uppercase mb-4">Valores</h2>

      <div>
        {valuesData.map((item, index) => (
          <div key={index} className="border-b-2 border-gray-400">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-5 text-lg font-semibold text-[#313131]"
            >
              {item.title}
              {openIndex === index ? (
                <FiArrowUpRight className="text-[#313131] text-2xl transition-transform duration-300 transform" />
              ) : (
                  <FiArrowDownRight className="text-[#313131] text-2xl transition-transform duration-300 transform" />
              )}
            </button>
            {openIndex === index && item.content && (
              <p className="text-[#313131] text-base px-2 pb-4">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAccordion;

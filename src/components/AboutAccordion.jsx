import { useState } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

const valuesData = [
  {
    title: "Originalidade",
    content:
      "A capacidade de criar soluções únicas e inovadoras que se destaquem no mercado e reflitam a identidade dos clientes.",
  },
  { title: "Qualidade" },
  { title: "Sustentabilidade" },
  { title: "Personalização" },
  { title: "Experiência do Cliente" },
  { title: "Criatividade" },
  { title: "Colaboração" },
  { title: "Atemporalidade" },
];

const AboutAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full sm:w-1/2 max-w-[600px]">
      {/* Título Valores com mais espaçamento */}
      <h2 className="text-3xl font-yantramanav font-black text-black mb-10">Valores</h2>

      <div>
        {valuesData.map((item, index) => (
          <div key={index} className="border-b-2 border-gray-400">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-5 text-lg font-semibold text-black"
            >
              {item.title}
              {openIndex === index ? (
                <FiArrowUpRight className="text-[#313131] text-2xl transition-transform duration-300 transform" />
              ) : (
                  <FiArrowDownRight className="text-[#313131] text-2xl transition-transform duration-300 transform" />
              )}
            </button>
            {openIndex === index && item.content && (
              <p className="text-gray-600 text-base px-2 pb-4">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAccordion;

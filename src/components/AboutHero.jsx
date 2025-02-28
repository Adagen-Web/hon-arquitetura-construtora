import { Link } from "react-router-dom";

const AboutHero = ({ image }) => {
  return (
    <section className="container mx-auto px-6 sm:px-16 py-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-8">

        {/* Texto à esquerda */}
        <div className="w-full sm:w-1/2 text-left">
          <h2 className="text-5xl sm:text-6xl font-yantramanav text-black font-light leading-tight">
            Sobre a Hon Construtora
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-6">
            Somos um escritório de arquitetura dedicado a oferecer serviços abrangentes,
            que vão desde projetos residenciais e comerciais até a execução completa de obras.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
            Nossa equipe combina <strong>criatividade e profissionalismo</strong> para criar
            espaços excepcionais, que atendam às necessidades e desejos de nossos clientes.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
            Desde a concepção até a conclusão, trabalhamos em estreita colaboração com você
            para garantir que cada detalhe seja cuidadosamente planejado e executado,
            resultando em projetos arquitetônicos de alta qualidade e impacto visual.
          </p>

          {/* Botão */}
          <Link
            to="/arquitetura/contato"
            className="mt-6 inline-block border border-black px-6 py-3 text-lg text-black hover:bg-black hover:text-white transition"
          >
            Entre em contato
          </Link>
        </div>

        {/* Imagem grande à direita */}
        <div className="w-full sm:w-[55%] flex justify-end">
          <img
            src={image}
            alt="Escritório HON"
            className="w-full sm:w-[700px] md:w-[750px] lg:w-[800px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

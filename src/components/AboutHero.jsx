import { Link } from "react-router-dom";

const AboutHero = ({ image }) => {
  return (
    <section className="mx-auto px-8 ml-2 sm:px-16 py-12 sm:py-16">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-12 sm:gap-0">
        {/* Texto */}
        <div className="w-full sm:w-1/2 text-left sm:ml-6">
          <h2 className="text-5xl sm:text-6xl font-yantramanav font-extralight text-[#050505] leading-tight tracking-[-1px]">
            SOMOS HON!
          </h2>
          <h2 className="text-4xl sm:text-5xl font-yantramanav font-extralight text-[#050505] leading-tight tracking-[-1px] mt-2">
            Somos especialistas em <br />
            transformar espaços <br />
            em histórias vivas.
          </h2>
          <p className="text-base sm:text-xl font-extralight text-gray-700 mt-6">
            Somos um escritório de arquitetura dedicado a oferecer serviços abrangentes,
            que vão desde projetos residenciais e comerciais até a execução completa de obras.
          </p>
          <p className="text-base sm:text-xl font-extralight text-gray-700 mt-4">
            Nossa equipe combina <strong>criatividade e profissionalismo</strong> para criar
            espaços excepcionais, que atendam às necessidades e desejos de nossos clientes.
          </p>

          {/* Botão */}
          <Link to="/contato" className="mt-6 inline-block border border-black px-5 py-2 text-base sm:px-6 sm:py-3 sm:text-lg text-black hover:bg-black hover:text-white transition">
            Entre em contato
          </Link>
        </div>

        {/* Imagem redonda */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Escritório HON"
            className="w-80 h-80 sm:w-[450px] sm:h-[450px] object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

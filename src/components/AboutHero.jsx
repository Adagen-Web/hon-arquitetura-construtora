import { Link } from "react-router-dom";

const AboutHero = ({ image }) => {
  return (
    <section className="mx-auto px-8 ml-2 sm:px-16 py-12 sm:py-16">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-12 sm:gap-0">
        {/* Texto */}
        <div className="w-full sm:w-1/2 text-left sm:ml-6">
          {/* <h2 className="text-1xl sm:text-xl font-yantramanav font-extralight text-[#000000] leading-tight tracking-[-1px]">
            SOMOS HON!
          </h2> */}
          <h2 className="text-2xl sm:text-4xl font-yantramanav font-extralight text-[#000000] leading-tight tracking-[-1px] mt-2">
            Somos especialistas em <br />
            transformar espaços <br />
            em histórias vivas.
          </h2>
          <p className="text-base sm:text-lg font-extralight text-[#313131] mt-6">
            Escritório de arquitetura do litoral do Rio Grande do Sul, que expressa identidade, funcionalidade e elegância através de uma linguagem pura e atemporal.
            Valorizamos a verdade dos materiais, elementos que carregam sua essência e contam sua própria história.
            Cada projeto nasce desse princípio, criando espaços que equilibram forma, essência e propósito, sempre em harmonia com a paisagem e com quem os habita.
          </p>
          

          {/* Botão */}
          <Link to="/arquitetura/contato" className="mt-6 leading-[19px] inline-block border border-black px-5 py-2 lg:text-base md:text-base sm:px-6 sm:py-3 sm:text-lg text-black hover:bg-black hover:text-white transition">
            Entre em contato
          </Link>
        </div>

        {/* Imagem redonda */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Escritório HON"
            className="w-80 h-80 sm:w-[450px] sm:h-[450px] object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

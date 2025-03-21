const MissionVision = () => {
  return (
    <section className="container mx-auto px-6 sm:px-16 py-4 sm:py-16 flex flex-col sm:flex-row justify-between text-center sm:text-left">
      {/* Missão */}
      <div className="w-full sm:w-1/2 text-center md:mt-0 sm:mt-6 px-4">
        <h1 className="text-3xl font-yantramanav mb-4 font-normal text-[#313131] uppercase">
          Missão
        </h1>
        <p className="text-[#313131] mt-2 font-sans font-normal leading-relaxed">
          Criar espaços que ressaltam a elegância na simplicidade, concebendo ambientes atemporais.
          Nosso compromisso é proporcionar uma experiência única, unindo espaço, funcionalidade e design
          de maneira fluida e eficiente.
        </p>
      </div>

      {/* Visão */}
      <div className="w-full sm:w-1/2 px-4 text-center mt-6 sm:mt-0">
        <h1 className="text-3xl font-yantramanav mb-4 font-normal text-[#313131] uppercase">
          Visão
        </h1>
        <p className="text-[#313131] mt-2 font-sans font-normal leading-relaxed">
          Ser um escritório de referência em arquitetura, reconhecido pela originalidade e qualidade,
          que transforma espaços em experiências, criando ambientes que refletem a essência de cada pessoa.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;

const PortfolioHeader = () => {
  return (
    <section className="w-full px-4 sm:px-12 py-12 flex flex-col items-center justify-center text-center gap-6">
      {/* Título */}
      <h1 className="text-3xl sm:text-4xl font-yantramanav font-extralight text-black">
        Projetos
      </h1>

      {/* Texto descritivo */}
      <p className="text-base sm:text-md font-yantramanav text-[#313131] max-w-[600px]">
        Soluções inovadoras e funcionais que superem suas expectativas, criando ambientes transformadores.
      </p>
    </section>
  );
};

export default PortfolioHeader;

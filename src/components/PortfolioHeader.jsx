const PortfolioHeader = () => {
  return (
    <section className="container px-4 sm:px-16 sm:py-2 py-12 flex flex-col items-center text-center gap-6">
      {/* Título */}
      <h1 className="text-5xl sm:text-5xl font-yantramanav font-extralight text-black">
        Portfólio
      </h1>

      {/* Texto descritivo */}
      <p className="text-base sm:text-lg font-yantramanav text-[#313131] max-w-[600px]">
        Soluções inovadoras e funcionais que superem suas expectativas, criando ambientes transformadores.
      </p>
    </section>
  );
};

export default PortfolioHeader;

const PortfolioHeader = () => {
  return (
    <section className="container mx-auto px-6 sm:px-16 py-12 flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left">
      {/* Título */}
      <h1 className="text-5xl sm:text-7xl font-yantramanav font-extralight text-black mb-4 sm:mb-0">
        Portfólio
      </h1>

      {/* Texto descritivo */}
      <p className="text-base sm:text-xl font-yantramanav text-[#313131] sm:ml-16 max-w-[500px]">
        Soluções inovadoras e funcionais que superem suas expectativas, criando ambientes transformadores.
      </p>
    </section>
  );
};

export default PortfolioHeader;

const PortfolioHeader = () => {
  return (
    <section className="container mx-auto md:px-2 sm:px-16 py-12 flex flex-col sm:flex-row justify-between items-center sm:items-start">
      {/* Título */}
      <h1 className="text-6xl sm:text-7xl font-yantramanav font-extralight text-black">
        Portfólio
      </h1>

      {/* Texto descritivo */}
      <p className="text-lg sm:text-xl text-gray-600 ml-16 text-left max-w-[500px]">
        Soluções inovadoras e funcionais que superem suas expectativas, criando
        ambientes transformadores.
      </p>
    </section>
  );
};

export default PortfolioHeader;

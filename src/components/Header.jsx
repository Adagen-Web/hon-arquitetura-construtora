const Header = () => {
  return (
    <section className="container mx-auto flex flex-col sm:flex-row items-start sm:items-end py-8 px-6 sm:px-8 bg-white">
      <div className="flex flex-col relative sm:ml-[-20px] max-w-[90%] sm:max-w-[750px]">
        {/* Texto */}
        <h2 className="text-xl sm:text-3xl font-publicSans text-secondary font-extralight tracking-wide">
          SOMOS
        </h2>
        <h1 className="text-5xl sm:text-7xl font-yantramanav font-light text-primary leading-tight">
          aqueles que visam <br /> atingir seus ideais
        </h1>

        {/* Botão alinhado corretamente */}
        <div className="mt-4 sm:absolute sm:bottom-0 sm:left-full sm:ml-8">
          <button className="border border-primary text-primary px-4 py-2 flex items-center text-base sm:text-lg hover:bg-gray-100">
            <span>Conhecer</span>
            <span className="ml-2">↘</span> {/* Ícone de seta */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

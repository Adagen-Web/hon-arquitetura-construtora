import { FiArrowDownRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto mt-8 flex flex-col sm:flex-row items-start sm:items-end py-8 px-4 bg-white">
      <div className="flex flex-col relative max-w-[90%] sm:max-w-[750px]">
        {/* Texto */}
        <h2 className="text-md sm:text-xl font-publicSans leading-[1.1] text-secondary font-extralight tracking-wide">
          SOMOS
        </h2>
        <h1 className="text-2xl sm:text-5xl font-yantramanav font-light text-primary leading-[1.1]">
          aqueles que visam <br /> atingir seus ideais
        </h1>

        {/* Botão alinhado corretamente */}
        <div className="mt-4 sm:absolute sm:bottom-0 sm:left-full sm:ml-8">
          <Button
            text="Conhecer"
            icon={<FiArrowDownRight className="text-[#313131] text-2xl transition-transform duration-300 transform" />}
            onClick={() => navigate("/portfolio")} />
        </div>
      </div>
    </section>
  );
};

export default Header;

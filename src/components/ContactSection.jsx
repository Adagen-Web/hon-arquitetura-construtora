import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Divider from "./Divider";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center text-center py-12 sm:py-20 px-6">
      <Divider className="mb-6 sm:mb-10 w-full" />

      <div className="w-full sm:w-[600px]">
        <h2 className="text-2xl sm:text-5xl font-yantramanav font-light text-[#313131] md:leading-14 lg:leading-14">
          Quer saber mais sobre os nossos projetos?
        </h2>
      </div>

      <Button
        text="entre em contato"
        onClick={() => navigate("/contato")}
        className="bg-black text-white mt-6 px-6 py-3 text-lg hover:bg-gray-800"
      />
    </section>

  );
};

export default ContactSection;

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoArqConst from "../../public/logo-arq-const.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 sm:px-14 font-publicSans">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-8 sm:space-y-0">

        {/* Esquerda - Contato e Logo */}
        <div className="flex flex-col mt-4 items-center sm:items-start space-y-4">
          {/* <div>
            <p className="text-lg">(51) 98273-6101</p>
            <p className="text-lg">hon.arquitetos@gmail.com</p>
          </div> */}

          {/* Centro - Logo */}
          <div className="sm:mt-8 text-center sm:text-left">
            <a href="/arquitetura/">
              <img
                src={logoArqConst}
                alt="HON Arquitetura Construtora"
                className="w-64 sm:w-72 mx-auto sm:mx-0"
              />
            </a>
          </div>
        </div>

        {/* Direita - Endereço e Redes Sociais */}
        <div className="flex flex-col items-center sm:items-end space-y-4">
          <div className="text-center sm:text-right">
            <p>Avenida Silva Jardim 1541 Predial | Torres - RS</p>
            <p>Rua do Tubarão 845 Bellatorres | Passo de Torres - SC</p>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-800">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-800">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-800">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botão de voltar ao topo */}
      <div className="flex justify-center mt-8">
        <a href="/arquitetura/" className="w-12 h-12 flex items-center justify-center border border-white rounded-full hover:bg-gray-800">
          ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;

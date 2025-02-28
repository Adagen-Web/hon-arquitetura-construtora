import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import logoArqConst from "../../public/logo-arq-const.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 sm:px-14 font-publicSans">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">

        {/* Esquerda - Logo e Navegação */}
        <div className="flex flex-col space-y-6">
          <a href="/">
            <img
              src={logoArqConst}
              alt="HON Arquitetura Construtora"
              className="w-64 sm:w-72"
            />
          </a>

          {/* Navegação */}
          <nav className="flex flex-col space-y-2 ml-16 text-lg font-medium">
            <a href="/" className="hover:text-gray-400">home</a>
            <a href="/sobre" className="hover:text-gray-400">sobre</a>
            <a href="/portfolio" className="hover:text-gray-400">portfólio</a>
            <a href="/servicos" className="hover:text-gray-400">serviços</a>
            <a href="/contato" className="hover:text-gray-400">contato</a>
          </nav>
        </div>

        {/* Direita - Contato e Redes Sociais */}
        <div className="flex flex-col items-end space-y-6">
          {/* Botão de voltar ao topo */}
          <div className="flex justify-end mt-8 pr-4">
            <a href="#" className="w-12 h-12 flex items-center justify-center border border-white rounded-full hover:bg-gray-800">
              <FiArrowUp className="text-xl" />
            </a>
          </div>

          <div className="text-lg">
            <p>(51) 98273-6101</p>
            <p>hon.arquitetos@gmail.com</p>
          </div>

          {/* Endereço */}
          <div className="text-sm">
            <p>Avenida Silva Jardim 1541 Predial | Torres - RS</p>
            <p>Rua do Tubarão 845 Bellatorres | Passo de Torres - SC</p>
          </div>

          {/* Redes Sociais */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1FVcAsdsDF/?mibextid=wwXIfr" target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-800">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/hon.arquitetos/" target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-800">
              <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5551982736101" target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-800">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-4 text-lg font-extralight text-gray-700">
      <p>Avenida Silva Jardim 1541 Predial <br /> Torres/RS</p>
      <p>Rua do Tubarão 845 Bellatorres <br /> Passo de Torres/SC</p>

      <div className="flex items-center space-x-2 mt-8">
        <FaPhone />
        <p>(51) 98273 6101</p>
      </div>

      <div className="flex items-center space-x-2">
        <FaEnvelope />
        <p>contato@somoshon.com.br</p>
      </div>

      <div className="flex items-center space-x-2">
        <FaInstagram />
        <p>@hon.arquitetos</p>
      </div>
    </div>
  );
};

export default ContactInfo;

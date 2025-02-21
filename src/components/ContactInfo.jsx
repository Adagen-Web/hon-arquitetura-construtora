import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-4 text-lg font-extralight text-[#313131]">
      <p className="text-[#313131]">Avenida Silva Jardim 1541 Predial <br /> Torres/RS</p>
      <p className="text-[#313131]">Rua do Tubarão 845 Bellatorres <br /> Passo de Torres/SC</p>

      <a href="" className="flex items-center space-x-2 mt-8">
        <FaPhone />
        <p className="text-[#313131]">(51) 98273 6101</p>
      </a>

      <a href="" className="flex items-center space-x-2">
        <FaEnvelope />
        <p className="text-[#313131]">contato@somoshon.com.br</p>
      </a>

      <a href="" className="flex items-center space-x-2">
        <FaInstagram />
        <p className="text-[#313131]">@hon.arquitetos</p>
      </a>
    </div>
  );
};

export default ContactInfo;

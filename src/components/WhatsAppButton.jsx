import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5551982736101" // Substitua pelo seu número do WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 w-16 h-16 bg-gray-700 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-gray-600 transition-all"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;

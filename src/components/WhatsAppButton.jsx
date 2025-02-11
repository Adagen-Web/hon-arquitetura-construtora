import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5551999381964" // Substitua pelo seu número do WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 w-16 h-16 bg-black text-white flex items-center justify-center rounded-full shadow-lg hover:bg-gray-800 transition-all"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
